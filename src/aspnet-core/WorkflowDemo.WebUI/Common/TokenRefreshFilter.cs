using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace WorkflowDemo.WebUI.Common
{
    /// <summary>
    /// token refresh filter
    /// </summary>
    public class TokenRefreshFilter : IActionFilter
    {
        /// <summary>
        /// process action executed
        /// </summary>
        /// <param name="context">http context</param>
        public void OnActionExecuted(ActionExecutedContext context)
        {

        }

        /// <summary>
        /// process action executing
        /// </summary>
        /// <param name="context">http context</param>
        public async void OnActionExecuting(ActionExecutingContext context)
        {
            if (context.HttpContext.User.Identity.IsAuthenticated)
            {
                var jwtTokenService = context.HttpContext.RequestServices.GetRequiredService<JwtTokenService>();
                var a = await context.HttpContext.GetTokenAsync("access_token");
                var handler = new JwtSecurityTokenHandler();
                var token = handler.ReadJwtToken(context.HttpContext.Request.Headers["Authorization"].First().Split(" ".ToCharArray())[1]);

                if ((token.ValidTo - DateTime.UtcNow) < (token.ValidTo - token.ValidFrom) / 2)
                {
                    context.HttpContext.Response.Headers["token"] = jwtTokenService.CreateToken(context.HttpContext.User.Identity.Name, context.HttpContext.User.FindFirst("userNo")?.Value);
                }
            }
        }
    }
}
