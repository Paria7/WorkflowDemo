using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WorkflowDemo.WebUI.Common;
using WorkflowDemo.WebUI.DTO;
using WorkflowDemo.WebUI.Services;

namespace WebUI.Controllers
{
    [Route("api/[controller]/[action]")]
    [JwtAuthorize]
    [ApiController]
    public class FlowSchemeController : ControllerBase
    {
        private readonly FlowSchemeService _flowSchemeService;

        public FlowSchemeController(FlowSchemeService flowSchemeService)
        {
            _flowSchemeService = flowSchemeService;
        }

        [HttpPost]
        public void SaveFlowScheme(FlowSchemeInsertInput input)
        {
            _flowSchemeService.SaveFlowScheme(input);
        }

        [HttpPost]
        public void SaveFlowSchemeData(string flowContent)
        {
            _flowSchemeService.SaveFlowSchemeData(flowContent);
        }

        [HttpGet]
        public List<FlowSchemeOutput> GetFlowSchemeData()
        {
            return _flowSchemeService.GetFlowSchemeData();
        }
    }
}