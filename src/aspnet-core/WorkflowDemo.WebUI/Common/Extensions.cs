using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Primitives;

namespace WorkflowDemo.WebUI.Common
{
    public static class Extensions
    {
        #region Const Properties
        private const int STREAM_COPY_BUFFER_SIZE = 81920;
        #endregion

        #region Public Methods

        /// <summary>
        /// create proxy http request
        /// </summary>
        /// <param name="context">context</param>
        /// <param name="uri">uri</param>
        /// <returns>proxy http request result</returns>
        public static HttpRequestMessage CreateProxyHttpRequest(this HttpContext context, Uri uri)
        {
            var request = context.Request;

            var requestMessage = new HttpRequestMessage();
            var requestMethod = request.Method;
            if (!HttpMethods.IsGet(requestMethod) &&
                !HttpMethods.IsHead(requestMethod) &&
                !HttpMethods.IsDelete(requestMethod) &&
                !HttpMethods.IsTrace(requestMethod))
            {
                var streamContent = new StreamContent(request.Body);
                requestMessage.Content = streamContent;
            }

            // Copy the request headers
            foreach (var header in request.Headers)
            {
                if (!requestMessage.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray()) && requestMessage.Content != null)
                {
                    requestMessage.Content?.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray());
                }
            }

            requestMessage.Headers.Host = uri.Authority;
            requestMessage.RequestUri = uri;
            requestMessage.Method = new HttpMethod(request.Method);

            return requestMessage;
        }

        /// <summary>
        /// copy proxy http response
        /// </summary>
        /// <param name="context">context</param>
        /// <param name="responseMessage">response message to copy</param>
        /// <returns>copy result</returns>
        public static async Task CopyProxyHttpResponse(this HttpContext context, HttpResponseMessage responseMessage)
        {
            if (responseMessage == null)
            {
                throw new ArgumentNullException(nameof(responseMessage));
            }

            var response = context.Response;

            response.StatusCode = (int)responseMessage.StatusCode;
            foreach (var header in responseMessage.Headers)
            {
                response.Headers[header.Key] = header.Value.ToArray();
            }

            foreach (var header in responseMessage.Content.Headers)
            {
                response.Headers[header.Key] = header.Value.ToArray();
            }

            // SendAsync removes chunking from the response. This removes the header so it doesn't expect a chunked response.
            response.Headers.Remove("transfer-encoding");

            using (var responseStream = await responseMessage.Content.ReadAsStreamAsync())
            {
                await responseStream.CopyToAsync(response.Body, STREAM_COPY_BUFFER_SIZE, context.RequestAborted);
            }
        }

        /// <summary>
        /// send proxy http request
        /// </summary>
        /// <param name="context">context</param>
        /// <param name="requestMessage">the request message to sent</param>
        /// <returns>send result</returns>
        public static Task<HttpResponseMessage> SendProxyHttpRequest(this HttpContext context, HttpRequestMessage requestMessage)
        {
            //if (requestMessage == null)
            //{
            //    throw new ArgumentNullException(nameof(requestMessage));
            //}
            //var httpClientHandler = new HttpClientHandler
            //{
            //    AllowAutoRedirect = false,
            //    AutomaticDecompression = System.Net.DecompressionMethods.GZip | System.Net.DecompressionMethods.Deflate
            //};
            HttpClient client = context.RequestServices.GetRequiredService<HttpClient>();

            return client.SendAsync(requestMessage, HttpCompletionOption.ResponseHeadersRead, context.RequestAborted);
        }

        #endregion


        #region Internal Methods

        /// <summary>
        /// convert request to message
        /// </summary>
        /// <param name="request">http request</param>
        /// <param name="includeBody">includeBody</param>
        /// <returns>http request message</returns>
        internal static async Task<HttpRequestMessage> ConvertToMessage(this HttpRequest request, bool includeBody = true)
        {

            HttpRequestMessage message = new HttpRequestMessage();
            message.Method = new HttpMethod(request.Method);
            foreach (string headerName in request.Headers.Keys)
            {
                //string[] headerValues = request.Headers[headerName];
                if (request.Headers.TryGetValue(headerName, out StringValues values))
                {
                    message.Headers.TryAddWithoutValidation(headerName, string.Join(";", values));

                }

            }
            if (request.Method != HttpMethods.Get && includeBody)
            {
                //using (MemoryStream ms = new MemoryStream())
                //{

                //}

                //await request.Body.CopyToAsync(ms);
                message.Content = new StreamContent(request.Body);
                message.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue(request.ContentType);
            }

            return message;
        }

        /// <summary>
        /// copy http response message to async
        /// </summary>
        /// <param name="message">http response message</param>
        /// <param name="response">http response</param>
        /// <returns>async result</returns>
        internal static async Task CopyToAsync(this HttpResponseMessage message, HttpResponse response)
        {
            foreach (var header in message.Headers)
            {

                if (message.Headers.TryGetValues(header.Key, out IEnumerable<string> values))
                {
                    response.Headers.SetCommaSeparatedValues(header.Key, string.Join(";", values));
                }

            }

            await message.Content.CopyToAsync(response.Body);
        }

        /// <summary>
        /// sign request
        /// </summary>
        /// <param name="message">http request message</param>
        /// <param name="secretId">secret id</param>
        /// <param name="secretKey">secret key</param>
        internal static void SignRequest(this HttpRequestMessage message, string secretId, string secretKey)
        {

            //var dateString = $"{DateTime.Now.ToUniversalTime():ddd, dd MMM yyyy hh:mm:ss} GMT";
            message.Headers.Date = DateTime.Now;
            var dateString = message.Headers.GetValues("Date").FirstOrDefault();
            string source = "API Platform";
            //message.Headers.Add("date", dateString);
            message.Headers.Add("source", source);
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"date:{dateString}");
            sb.AppendLine($"source:{source}");

            HMACSHA256 hmac = new HMACSHA256(Convert.FromBase64String(secretKey));
            var signature = Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes(sb.ToString())));
            sb.Clear();
            var authText = $"hmac id=\"{secretId}\", algorithm=\"hmac-sha256\", headers=\"date source\", signature=\"{signature}\"";

            //var authText = $"hmac {secretId},{signature}";
            message.Headers.Authorization = System.Net.Http.Headers.AuthenticationHeaderValue.Parse(authText);

        }

        /// <summary>
        /// sign in
        /// </summary>
        /// <param name="context">context</param>
        /// <param name="userName">用户名</param>
        /// <param name="userNo">用户工号</param>
        internal static void SignIn(this HttpContext context, string userName, string userNo)
        {
            var jwtTokenService = context.RequestServices.GetRequiredService<JwtTokenService>();
            jwtTokenService.SignIn(userName, userNo);
        }


        internal static void AddCustomOptions(this IServiceCollection services)
        {

            var provider = services.BuildServiceProvider();
            var configuration = provider.GetRequiredService<IConfiguration>();

            var jwtTokenOptionsSection = configuration.GetSection("JwtTokenOptions");
            services.Configure<JwtTokenOptions>(jwtTokenOptionsSection);


        }

        internal static AuthenticationBuilder AddCustomJwtBearer(this AuthenticationBuilder builder)
        {
            var provider = builder.Services.BuildServiceProvider();
            var jwtTokenService = provider.GetRequiredService<JwtTokenService>();
            return builder.AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = true;
                options.TokenValidationParameters = jwtTokenService.GetValidationParameters();

            });

        }


        internal static void UpdateCommonFields(this DbContext dbConext, HttpContext context)
        {
            string userName = "*";
            if (context != null && context.User.Identity.IsAuthenticated)
            {
                userName = context.User.Identity.Name;
            }
            dbConext.ChangeTracker.Entries().ToList().ForEach(entry =>
            {
                switch (entry.State)
                {
                    case EntityState.Added:
                        {
                            entry.Entity.SetValue("CreatedOn", DateTime.Now);
                            entry.Entity.SetValue("CreatedBy", userName);
                            entry.Entity.SetValue("UpdatedOn", DateTime.Now);
                            entry.Entity.SetValue("UpdatedBy", userName);
                        }
                        break;
                    case EntityState.Modified:
                        {
                            entry.Entity.SetValue("UpdatedOn", DateTime.Now);
                            entry.Entity.SetValue("UpdatedBy", userName);
                        }
                        break;
                }
            });

        }

        internal static void SetValue(this Object obj, string name, object val)
        {
            var property = obj.GetType().GetProperty(name);
            property?.SetValue(obj, val);
        }

        public static DbContextOptions<T> ConvertTo<T>(this DbContextOptions options) where T : DbContext
        {
            DbContextOptions<T> contextOptions = new DbContextOptions<T>(options.Extensions.ToDictionary(p => p.GetType(), p => p));


            return contextOptions;
        }

        /// <summary>
        /// Execute a transaction
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="context"></param>
        /// <param name="model"></param>
        /// <param name="func"></param>
        /// <returns></returns>
        public static bool ExecTransaction<T>(this DbContext context,T model, Func<T,bool> func) where T : class
        {
            bool ret = false;
            using (var transaction = context.Database.BeginTransaction())
            {
                try
                {
                    ret = func(model);
                    transaction.Commit();
                    return ret;
                }
                catch (Exception)
                {
                    transaction.Rollback();
                    throw;
                }
            }
        }


        /// <summary>
        /// Extend try catch
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="ctrl"></param>
        /// <param name="func"></param>
        /// <returns></returns>
        public static ActionResult<T> TryCatch<T>(this ControllerBase ctrl, Func<T> func)
        {
            try
            {
                return ctrl.Ok(func());
            }
            catch (Exception ex)
            {
                return ctrl.BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Extend try catch
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="ctrl"></param>
        /// <param name="func"></param>
        /// <returns></returns>
        public static ActionResult<T> TryCatchWithModelState<T>(this ControllerBase ctrl, Func<T> func)
        {
            if (!ctrl.ModelState.IsValid)
            {
                return ctrl.BadRequest(ctrl.ModelState);
            }
            try
            {
                return ctrl.Ok(func());
            }
            catch (Exception ex)
            {
                return ctrl.BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Extend try catch
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="ctrl"></param>
        /// <param name="action"></param>
        /// <returns></returns>
        public static ActionResult TryCatch(this ControllerBase ctrl, Action action)
        {
            try
            {
                return ctrl.Ok(action);
            }
            catch (Exception ex)
            {
                return ctrl.BadRequest(ex.Message);
            }
        }

        #endregion
    }
}
