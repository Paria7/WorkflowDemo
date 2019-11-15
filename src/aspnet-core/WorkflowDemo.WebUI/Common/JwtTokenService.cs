using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace WorkflowDemo.WebUI.Common
{
    public class JwtTokenService
    {
        private IHttpContextAccessor HttpContextAccessor { get; }

        private JwtTokenOptions JwtTokenOptions { get; }

        public JwtTokenService(IHttpContextAccessor httpContextAccessor, IOptions<JwtTokenOptions> options)
        {
            this.HttpContextAccessor = httpContextAccessor;
            this.JwtTokenOptions = options.Value;
        }

        public string CreateToken(string userName,string userNo, params Claim[] claims)
        {
            JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
            var finalClaims=claims.ToList();
            finalClaims.Add(new Claim("userNo", userNo));
            ClaimsIdentity identity = new ClaimsIdentity(new GenericIdentity(userName, "TokenAuth"), finalClaims);
            var options = this.JwtTokenOptions;
            return handler.CreateEncodedJwt(new SecurityTokenDescriptor
            {
                Subject = identity,
                Audience = options.Audience,
                IssuedAt = DateTime.UtcNow,
                Expires = DateTime.UtcNow + TimeSpan.FromMinutes(options.Expires),
              
                Issuer = options.Issuer,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Convert.FromBase64String(options.Key)), SecurityAlgorithms.HmacSha256Signature)
            });
        }

        public int GetLineId()
        {
            var context = HttpContextAccessor.HttpContext;
            var tokenText= context.Request.Headers["Authorization"][0].Split(" ")[1];
            JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
            var token = handler.ReadJwtToken(tokenText);
            return token.Claims.Where(p => p.Type == "line_id").Select(p => int.Parse(p.Value)).FirstOrDefault();
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="userName">用户名</param>
        /// <param name="userNo">用户工号</param>
        /// <param name="claims"></param>
        public void SignIn(string userName, string userNo,  params Claim[] claims)
        {
            var token = CreateToken(userName, userNo, claims);
            HttpContextAccessor.HttpContext.Response.Headers["token"] = token;

        }

        public TokenValidationParameters GetValidationParameters()
        {
            return new TokenValidationParameters
            {
                IssuerSigningKey = new SymmetricSecurityKey(Convert.FromBase64String(this.JwtTokenOptions.Key)),
                ValidateLifetime = true,
                RequireExpirationTime = true,
               
                ValidateIssuerSigningKey = true,
                ValidIssuer = this.JwtTokenOptions.Issuer,
                ValidAudience = this.JwtTokenOptions.Audience,
                ClockSkew = TimeSpan.FromMinutes(5)
            };
        }
    }
}
