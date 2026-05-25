using System;
using System.IO;
using System.Net;
using System.Text;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Web.Common;

namespace Terrasoft.Configuration
{
    // ============================================================================
    // 1. КОНТРАКТ СЕРВИСА (UriTemplate = "odata/{*path}")
    // ============================================================================
    [ServiceContract]
    public interface IODataProxyService
    {
        [OperationContract]
        [WebInvoke(Method = "*", 
                   UriTemplate = "odata/{*path}", 
                   BodyStyle = WebMessageBodyStyle.Bare)]
        Stream ProcessRequest(Stream requestBody, string path);
    }

    // ============================================================================
    // 2. РЕАЛИЗАЦИЯ ПРОКСИ-СЕРВИСА С ЛОГИРОВАНИЕМ
    // ============================================================================
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class ODataProxyService : BaseService, IODataProxyService
    {
        private const string SiteUrlSettingsCode = "SiteUrl";

        private string GetODataBaseUrl(UserConnection userConnection)
        {
            var siteUrlSetting = (string)Terrasoft.Core.Configuration.SysSettings.GetValue(
                userConnection, SiteUrlSettingsCode);
            return siteUrlSetting.TrimEnd('/') + "/0/odata/";
        }

        private void LogToDatabase(UserConnection userConnection, string method, string targetUrl, 
            string requestBody, string responseBody, int statusCode, string error, int durationMs)
        {
            try
            {
                const int maxBodyLength = 10000;
                string truncatedRequestBody = requestBody?.Length > maxBodyLength 
                    ? requestBody.Substring(0, maxBodyLength) + "... [truncated]" 
                    : requestBody;
                string truncatedResponseBody = responseBody?.Length > maxBodyLength 
                    ? responseBody.Substring(0, maxBodyLength) + "... [truncated]" 
                    : responseBody;

                var insertQuery = new Insert(userConnection)
                    .Into("PgrOdataLog")
                    .Set("Id", Column.Parameter(Guid.NewGuid()))
                    .Set("PgrMethod", Column.Parameter(method ?? ""))
                    .Set("PgrUrl", Column.Parameter(targetUrl ?? ""))
                    .Set("PgrRequestBody", Column.Parameter(truncatedRequestBody ?? ""))
                    .Set("PgrResponseBody", Column.Parameter(truncatedResponseBody ?? ""))
                    .Set("PgrStatusCode", Column.Parameter(statusCode > 0 ? statusCode : (object)DBNull.Value))
                    .Set("PgrDurationMs", Column.Parameter(durationMs))
                    .Set("PgrError", Column.Parameter(error ?? ""))
                    .Set("CreatedOn", Column.Parameter(DateTime.Now));

                insertQuery.Execute();
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine($"Failed to log OData request: {ex.Message}");
            }
        }

        private Stream CreateResponseStream(byte[] responseBytes)
        {
            var memoryStream = new MemoryStream(responseBytes);
            memoryStream.Seek(0, SeekOrigin.Begin);
            return memoryStream;
        }

        public Stream ProcessRequest(Stream requestBody, string path)
        {
            var startTime = DateTime.UtcNow;
            var context = WebOperationContext.Current;
            var incomingRequest = context.IncomingRequest;
            
            string method = null;
            string targetUrl = null;
            string requestBodyString = null;
            string responseBodyString = null;
            int statusCode = 0;
            string errorMessage = null;
            UserConnection userConnection = null;
            byte[] requestBodyBytes = null;

            try
            {
                userConnection = GetUserConnection();
                if (userConnection == null)
                {
                    throw new Exception("UserConnection is not available");
                }
                
                method = incomingRequest.Method;
                
                // Читаем тело запроса (только для методов с телом)
                if (requestBody != null && (method == "POST" || method == "PATCH" || method == "PUT"))
                {
                    using (var memoryStream = new MemoryStream())
                    {
                        requestBody.CopyTo(memoryStream);
                        requestBodyBytes = memoryStream.ToArray();
                        requestBodyString = Encoding.UTF8.GetString(requestBodyBytes);
                    }
                }
                
                // Формируем целевой URL
                targetUrl = GetODataBaseUrl(userConnection).TrimEnd('/') + "/" + path;
                
                // Добавляем query string, если есть
                var queryString = incomingRequest.UriTemplateMatch.RequestUri.Query;
                if (!string.IsNullOrEmpty(queryString))
                {
                    targetUrl += queryString;
                }
                
                var webRequest = (HttpWebRequest)WebRequest.Create(targetUrl);
                webRequest.Method = method;
                webRequest.ContentType = incomingRequest.ContentType;
                
                // Копируем заголовки
                foreach (string headerKey in incomingRequest.Headers)
                {
                    if (headerKey != "Host" && headerKey != "Connection" && headerKey != "Content-Length")
                    {
                        try { webRequest.Headers[headerKey] = incomingRequest.Headers[headerKey]; }
                        catch { }
                    }
                }
                
                // Копируем Cookies
                var cookieHeader = incomingRequest.Headers["Cookie"];
                if (!string.IsNullOrEmpty(cookieHeader))
                {
                    webRequest.Headers["Cookie"] = cookieHeader;
                }
                
                // Копируем тело запроса из сохранённого массива байтов
                if (requestBodyBytes != null && requestBodyBytes.Length > 0)
                {
                    webRequest.ContentLength = requestBodyBytes.Length;
                    using (var requestStream = webRequest.GetRequestStream())
                    {
                        requestStream.Write(requestBodyBytes, 0, requestBodyBytes.Length);
                    }
                }
                
                // Получаем ответ
                using (var webResponse = (HttpWebResponse)webRequest.GetResponse())
                using (var responseStream = webResponse.GetResponseStream())
                {
                    statusCode = (int)webResponse.StatusCode;
                    
                    if (responseStream != null)
                    {
                        using (var reader = new StreamReader(responseStream, Encoding.UTF8))
                        {
                            responseBodyString = reader.ReadToEnd();
                        }
                    }
                    
                    context.OutgoingResponse.StatusCode = webResponse.StatusCode;
                    context.OutgoingResponse.ContentType = webResponse.ContentType;
                    
                    var responseBytes = Encoding.UTF8.GetBytes(responseBodyString ?? "");
                    return CreateResponseStream(responseBytes);
                }
            }
            catch (WebException ex)
            {
                using (var errorResponse = (HttpWebResponse)ex.Response)
                {
                    statusCode = (int)(errorResponse?.StatusCode ?? HttpStatusCode.InternalServerError);
                    errorMessage = ex.Message;
                    
                    context.OutgoingResponse.StatusCode = (HttpStatusCode)statusCode;
                    
                    string errorBody = "";
                    if (errorResponse != null && errorResponse.GetResponseStream() != null)
                    {
                        using (var reader = new StreamReader(errorResponse.GetResponseStream(), Encoding.UTF8))
                        {
                            errorBody = reader.ReadToEnd();
                        }
                    }
                    
                    string errorResponseString = string.IsNullOrEmpty(errorBody) 
                        ? $"{{\"error\": \"{ex.Message}\"}}"
                        : errorBody;
                        
                    var errorBytes = Encoding.UTF8.GetBytes(errorResponseString);
                    return CreateResponseStream(errorBytes);
                }
            }
            catch (Exception ex)
            {
                statusCode = 500;
                errorMessage = ex.Message;
                
                context.OutgoingResponse.StatusCode = HttpStatusCode.InternalServerError;
                var errorBytes = Encoding.UTF8.GetBytes($"{{\"error\": \"{ex.Message}\"}}");
                return CreateResponseStream(errorBytes);
            }
            finally
            {
                // Логируем в БД синхронно
                if (userConnection != null)
                {
                    var durationMs = (int)(DateTime.UtcNow - startTime).TotalMilliseconds;
                    try
                    {
                        LogToDatabase(userConnection, method, targetUrl, requestBodyString, 
                            responseBodyString, statusCode, errorMessage, durationMs);
                    }
                    catch (Exception ex)
                    {
                        System.Diagnostics.Debug.WriteLine($"Failed to log OData request: {ex.Message}");
                    }
                }
            }
        }
    }
}