using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WorkflowDemo.WebUI.DTO;
using WorkflowDemo.WebUI.Services;

namespace WebUI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class WorkflowEngineController : ControllerBase
    {
        private readonly WorkflowEngineService workflowEngineService;

        public WorkflowEngineController(WorkflowEngineService workflowEngineService)
        {
            this.workflowEngineService = workflowEngineService;
        }

        [HttpGet]
        public async Task<GetWorkflowSchemesOutput> GetSchemes()
        {
            return await workflowEngineService.GetSchemes();
        }
    }
}