using Terrasoft.Common;

namespace Pgr.Core
{
    using System;
    using System.Collections.Generic;
    using System.Net;
    using Newtonsoft.Json;
    using Terrasoft.Core;

    public interface IPgrProxyResponseRecoveryHandler
    {
        bool CanHandle(string method, string path, int statusCode, string responseBody);

        string Recover(UserConnection userConnection, string requestBodyString,
            Func<string, string, (int statusCode, string body, string contentType)> sendInternalRequest,
            out int statusCode, out string contentType);
    }

    public class PgrContactInsertCancelledRecoveryHandler : IPgrProxyResponseRecoveryHandler
    {
        private const string ContactPath = "Contact";

        public bool CanHandle(string method, string path, int statusCode, string responseBody)
        {
            return string.Equals(method, "POST", StringComparison.OrdinalIgnoreCase) &&
                string.Equals(path, ContactPath, StringComparison.OrdinalIgnoreCase) &&
                statusCode == (int) HttpStatusCode.InternalServerError &&
                (responseBody ?? string.Empty).IndexOf("Operation has been cancelled", StringComparison.OrdinalIgnoreCase) >= 0;
        }

        public string Recover(UserConnection userConnection, string requestBodyString,
            Func<string, string, (int statusCode, string body, string contentType)> sendInternalRequest,
            out int statusCode, out string contentType)
        {
            statusCode = 0;
            contentType = null;

            var candidate = GetEmailOrName(requestBodyString);
            if (string.IsNullOrWhiteSpace(candidate))
            {
                return null;
            }

            var existingContactId = new PgrContactDedupHelper(userConnection).FindExistingContactIdByEmail(candidate);
            if (existingContactId.IsEmpty())
            {
                return null;
            }

            var result = sendInternalRequest("GET", ContactPath + "(" + existingContactId + ")");
            if (result.statusCode != (int) HttpStatusCode.OK)
            {
                return null;
            }

            statusCode = result.statusCode;
            contentType = result.contentType;
            return result.body;
        }

        private string GetEmailOrName(string requestBodyString)
        {
            if (string.IsNullOrWhiteSpace(requestBodyString))
            {
                return null;
            }

            var values = JsonConvert.DeserializeObject<Dictionary<string, object>>(requestBodyString);
            object email;
            if (values.TryGetValue("Email", out email) && !string.IsNullOrWhiteSpace(Convert.ToString(email)))
            {
                return Convert.ToString(email);
            }

            object name;
            return values.TryGetValue("Name", out name) ? Convert.ToString(name) : null;
        }
    }
}
