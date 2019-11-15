using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;

namespace WorkflowDemo.WebUI.Common
{
    public class JwtAuthorizeAttribute: AuthorizeAttribute
    {
        public JwtAuthorizeAttribute()
        {
            this.AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme;
        }
    }
}
