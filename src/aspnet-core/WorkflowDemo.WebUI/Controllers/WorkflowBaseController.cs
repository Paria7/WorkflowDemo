using Microsoft.AspNetCore.Mvc;
using OptimaJet.Workflow.Core.Runtime;
using WorkflowDemo;

namespace WebUI.Controllers
{
    public abstract class WorkflowBaseController : Controller
    {
        protected WorkflowBaseController()
        {
           
        }

        protected WorkflowRuntime CurrentWorkflowRuntime
        {
            get
            {
                return WorkflowManager.Runtime;
            }
        }
    }
}