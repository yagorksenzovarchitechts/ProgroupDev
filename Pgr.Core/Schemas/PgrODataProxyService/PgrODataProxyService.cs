using System;
using System.IO;
using System.Net;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Text;
using System.Web.SessionState;
using Common.Logging;
using Terrasoft.Common;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Web.Common;

namespace Terrasoft.Configuration
{
    [ServiceContract]
    public interface IODataProxyService
    {
        [OperationContract]
        [WebInvoke(Method = "*",
            UriTemplate = "odata/{*path}",
            BodyStyle = WebMessageBodyStyle.Bare)]
        Stream ProcessRequest(Stream requestBody, string path);
    }

    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class ODataProxyService : BaseService, IODataProxyService, IReadOnlySessionState
    {
        private const string SiteUrlSettingsCode = "SiteUrl";
        private const string RequestTimeoutSettingsCode = "ODataProxyRequestTimeout";
        private const int DefaultRequestTimeout = 30000;

        public Stream ProcessRequest(Stream requestBody, string path)
        {
            var startTime = DateTime.UtcNow;
            var context = WebOperationContext.Current ??
                          throw new InvalidOperationException("WebOperationContext.Current is not available");
            var incomingRequest = context.IncomingRequest;

            var method = string.Empty;
            var targetUrl = string.Empty;
            var requestBodyString = string.Empty;
            var responseBodyString = string.Empty;
            var statusCode = 0;
            var errorMessage = string.Empty;

            try
            {
                method = incomingRequest.Method ?? string.Empty;

                var requestBodyBytes = ReadRequestBody(requestBody, method);
                requestBodyString = requestBodyBytes.Length > 0
                    ? Encoding.UTF8.GetString(requestBodyBytes)
                    : string.Empty;

                if (UserConnection == null)
                {
                    throw new InvalidOperationException("UserConnection is not available");
                }

                targetUrl = BuildTargetUrl(UserConnection, incomingRequest, path);

                var timeout = GetRequestTimeout(UserConnection);
                var webRequest = CreateWebRequest(targetUrl, method, incomingRequest.ContentType, timeout);
                CopyHeadersAndCookies(incomingRequest, webRequest);

                WriteRequestBody(webRequest, requestBodyBytes);

                var responseResult = GetWebResponseContent(webRequest);

                statusCode = responseResult.statusCode;
                responseBodyString = responseResult.body ?? string.Empty;

                context.OutgoingResponse.StatusCode = (HttpStatusCode) responseResult.statusCode;
                if (!string.IsNullOrEmpty(responseResult.contentType))
                {
                    context.OutgoingResponse.ContentType = responseResult.contentType;
                }

                var responseBytes = Encoding.UTF8.GetBytes(responseBodyString);
                return CreateResponseStream(responseBytes);
            }
            catch (WebException ex)
            {
                return HandleWebException(ex, context, out statusCode, out responseBodyString, out errorMessage);
            }
            catch (Exception ex)
            {
                return HandleException(ex, context, out statusCode, out errorMessage);
            }
            finally
            {
                var durationMs = (int) (DateTime.UtcNow - startTime).TotalMilliseconds;
                try
                {
                    var entry = new LogEntry
                    {
                        Method = method,
                        TargetUrl = targetUrl ?? string.Empty,
                        RequestBody = requestBodyString,
                        ResponseBody = responseBodyString,
                        StatusCode = statusCode,
                        Error = errorMessage ?? string.Empty,
                        DurationMs = durationMs
                    };
                    LogToDatabase(UserConnection, entry);
                }
                catch (Exception ex)
                {
                    try
                    {
                        LogManager.GetLogger("Error").Error(ex);
                    }
                    catch
                    {
                    }
                }
            }
        }

        #region Private methods

        private Stream HandleException(Exception ex, WebOperationContext context, out int statusCode,
            out string errorMessage)
        {
            statusCode = 500;
            errorMessage = ex.Message ?? string.Empty;

            context.OutgoingResponse.StatusCode = HttpStatusCode.InternalServerError;
            var errorBytes = Encoding.UTF8.GetBytes($"{{\"error\": \"{ex.Message ?? string.Empty}\"}}");
            return CreateResponseStream(errorBytes);
        }

        private Stream HandleWebException(WebException ex, WebOperationContext context, out int statusCode,
            out string responseBodyString, out string errorMessage)
        {
            var webExResult = ReadWebExceptionResponse(ex);
            statusCode = webExResult.statusCode;
            responseBodyString = webExResult.responseBody ?? string.Empty;
            errorMessage = ex.Message ?? string.Empty;

            context.OutgoingResponse.StatusCode = (HttpStatusCode) (webExResult.statusCode > 0
                ? webExResult.statusCode
                : (int) HttpStatusCode.InternalServerError);

            var errorBytes = Encoding.UTF8.GetBytes(responseBodyString);
            var errorResponseStream = CreateResponseStream(errorBytes);

            return errorResponseStream;
        }

        private int GetRequestTimeout(UserConnection userConnection)
        {
            if (userConnection == null)
            {
                return DefaultRequestTimeout;
            }

            try
            {
                var timeoutSetting =
                    (int) Core.Configuration.SysSettings.GetValue(userConnection, RequestTimeoutSettingsCode);
                if (timeoutSetting > 0)
                {
                    return timeoutSetting;
                }
            }
            catch
            {
                // ignored
            }

            return DefaultRequestTimeout;
        }

        private byte[] ReadRequestBody(Stream requestBody, string method)
        {
            method = method ?? string.Empty;
            if (requestBody == null || !(method == "POST" || method == "PATCH" || method == "PUT"))
            {
                return Array.Empty<byte>();
            }

            using (var ms = new MemoryStream())
            {
                requestBody.CopyTo(ms);
                var bytes = ms.ToArray();
                return bytes.Length > 0 ? bytes : Array.Empty<byte>();
            }
        }

        private string BuildTargetUrl(UserConnection userConnection, IncomingWebRequestContext incomingRequest,
            string path)
        {
            if (userConnection == null)
            {
                throw new ArgumentNullException(nameof(userConnection));
            }

            if (incomingRequest == null)
            {
                throw new ArgumentNullException(nameof(incomingRequest));
            }

            var baseUrl = GetODataBaseUrl(userConnection) ?? string.Empty;
            baseUrl = baseUrl.TrimEnd('/');
            path = path ?? string.Empty;
            var result = baseUrl + "/" + path;
            var query = incomingRequest.UriTemplateMatch?.RequestUri?.Query ?? string.Empty;

            if (!string.IsNullOrEmpty(query))
            {
                result += query;
            }

            return result;
        }

        private HttpWebRequest CreateWebRequest(string targetUrl, string method, string contentType, int timeout)
        {
            if (string.IsNullOrEmpty(targetUrl))
            {
                throw new ArgumentException("targetUrl is required", nameof(targetUrl));
            }

            method = method ?? string.Empty;

            var webRequest = (HttpWebRequest) WebRequest.Create(targetUrl);
            webRequest.Method = method;
            webRequest.ContentType = contentType ?? string.Empty;
            webRequest.Timeout = timeout;
            webRequest.ReadWriteTimeout = timeout;
            
            return webRequest;
        }

        private void CopyHeadersAndCookies(IncomingWebRequestContext incomingRequest, HttpWebRequest webRequest)
        {
            if (incomingRequest == null)
            {
                throw new ArgumentNullException(nameof(incomingRequest));
            }

            if (webRequest == null)
            {
                throw new ArgumentNullException(nameof(webRequest));
            }

            var headers = incomingRequest.Headers;

            foreach (string headerKey in headers)
            {
                if (headerKey == null)
                {
                    continue;
                }

                if (string.Equals(headerKey, "Host", StringComparison.OrdinalIgnoreCase)
                    || string.Equals(headerKey, "Connection", StringComparison.OrdinalIgnoreCase)
                    || string.Equals(headerKey, "Content-Length", StringComparison.OrdinalIgnoreCase))
                {
                    continue;
                }

                try
                {
                    webRequest.Headers[headerKey] = headers[headerKey];
                }
                catch
                {
                }
            }

            var cookieHeader = headers["Cookie"];
            if (!string.IsNullOrEmpty(cookieHeader))
            {
                try
                {
                    webRequest.Headers["Cookie"] = cookieHeader;
                }
                catch
                {
                }
            }
        }

        private void WriteRequestBody(HttpWebRequest webRequest, byte[] requestBodyBytes)
        {
            if (webRequest == null)
            {
                throw new ArgumentNullException(nameof(webRequest));
            }

            var bytes = requestBodyBytes ?? Array.Empty<byte>();
            if (bytes.Length == 0)
            {
                return;
            }

            webRequest.ContentLength = bytes.Length;
            using (var requestStream = webRequest.GetRequestStream())
            {
                requestStream.Write(bytes, 0, bytes.Length);
            }
        }

        private (int statusCode, string body, string contentType) GetWebResponseContent(HttpWebRequest webRequest)
        {
            if (webRequest == null)
            {
                throw new ArgumentNullException(nameof(webRequest));
            }

            try
            {
                using (var webResponse = (HttpWebResponse) webRequest.GetResponse())
                {
                    using (var responseStream = webResponse.GetResponseStream())
                    {
                        var status = (int) webResponse.StatusCode;
                        var body = string.Empty;
                        if (responseStream != null)
                        {
                            using (var reader = new StreamReader(responseStream, Encoding.UTF8))
                            {
                                body = reader.ReadToEnd();
                            }
                        }

                        var contentType = webResponse.ContentType;
                        return (status, body, contentType);
                    }
                }
            }
            finally
            {
                webRequest.Abort();
            }
        }

        private (int statusCode, string responseBody) ReadWebExceptionResponse(WebException ex)
        {
            if (ex == null)
            {
                throw new ArgumentNullException(nameof(ex));
            }

            var statusCode = (int) HttpStatusCode.InternalServerError;
            var responseBody = string.Empty;
            if (ex.Response is HttpWebResponse httpResp)
            {
                statusCode = (int) httpResp.StatusCode;
                var respStream = httpResp.GetResponseStream();
                if (respStream != null)
                {
                    using (var reader = new StreamReader(respStream, Encoding.UTF8))
                    {
                        responseBody = reader.ReadToEnd();
                    }
                }
            }

            if (string.IsNullOrEmpty(responseBody))
            {
                responseBody = $"{{\"error\":\"{ex.Message ?? string.Empty}\"}}";
            }

            return (statusCode, responseBody);
        }

        private Stream CreateResponseStream(byte[] responseBytes)
        {
            var bytes = responseBytes ?? Array.Empty<byte>();
            var memoryStream = new MemoryStream(bytes);
            memoryStream.Seek(0, SeekOrigin.Begin);
            return memoryStream;
        }

        private string GetODataBaseUrl(UserConnection userConnection)
        {
            if (userConnection == null)
            {
                throw new ArgumentNullException(nameof(userConnection));
            }

            var siteUrlSetting = (string) Core.Configuration.SysSettings.GetValue(userConnection, SiteUrlSettingsCode);
            if (siteUrlSetting.IsNullOrEmpty())
            {
                throw new Exception($"System setting '{SiteUrlSettingsCode}' is not configured.");
            }

            return siteUrlSetting.TrimEnd('/') + "/0/odata/";
        }

        private void LogToDatabase(UserConnection userConnection, LogEntry entry)
        {
            if (userConnection == null)
            {
                throw new ArgumentNullException(nameof(userConnection));
            }

            if (entry == null)
            {
                throw new ArgumentNullException(nameof(entry));
            }

            try
            {
                const int maxBodyLength = 10000;
                var truncatedRequestBody = TruncateText(entry.RequestBody, maxBodyLength);
                var truncatedResponseBody = TruncateText(entry.ResponseBody, maxBodyLength);

                var insertQuery = new Insert(userConnection)
                    .Into("PgrOdataLog")
                    .Set("Id", Column.Parameter(Guid.NewGuid()))
                    .Set("PgrMethod", Column.Parameter(entry.Method ?? string.Empty))
                    .Set("PgrUrl", Column.Parameter(entry.TargetUrl ?? string.Empty))
                    .Set("PgrRequestBody", Column.Parameter(truncatedRequestBody))
                    .Set("PgrResponseBody", Column.Parameter(truncatedResponseBody))
                    .Set("PgrStatusCode",
                        Column.Parameter(entry.StatusCode > 0 ? entry.StatusCode : (object) DBNull.Value))
                    .Set("PgrDurationMs", Column.Parameter(entry.DurationMs))
                    .Set("PgrError", Column.Parameter(entry.Error ?? string.Empty))
                    .Set("CreatedOn", Column.Parameter(DateTime.Now));

                insertQuery.Execute();
            }
            catch (Exception ex)
            {
                try
                {
                    LogManager.GetLogger("Error").Error(ex);
                }
                catch
                {
                }
            }
        }

        private string TruncateText(string text, int maxBodyLength)
        {
            var s = text ?? string.Empty;
            if (s.Length <= maxBodyLength)
            {
                return s;
            }

            return s.Substring(0, maxBodyLength) + "... [truncated]";
        }

        #endregion
    }

    public class LogEntry
    {
        public string Method { get; set; }
        public string TargetUrl { get; set; }
        public string RequestBody { get; set; }
        public string ResponseBody { get; set; }
        public int StatusCode { get; set; }
        public string Error { get; set; }
        public int DurationMs { get; set; }
    }
}