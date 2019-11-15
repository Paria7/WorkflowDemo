using Microsoft.AspNetCore.Mvc.Filters;
using WorkflowDemo.WebUI.Repositories;

namespace WorkflowDemo.WebUI.Common
{
    /// <summary>
    /// repository context filter
    /// </summary>
    public class RepositoryContextFilter : IActionFilter
    {
        /// <summary>
        /// process action executed event
        /// </summary>
        /// <param name="context">http context</param>
        public void OnActionExecuted(ActionExecutedContext context)
        {
            
        }

        /// <summary>
        /// process action executing event
        /// </summary>
        /// <param name="context">http context</param>
        public void OnActionExecuting(ActionExecutingContext context)
        {
            RepositoryContext.Current = new RepositoryContext();
            if (context.HttpContext.User.Identity.IsAuthenticated)
            {
                RepositoryContext.Current.UserName = context.HttpContext.User.Identity.Name;
            }
        }
    }
}
