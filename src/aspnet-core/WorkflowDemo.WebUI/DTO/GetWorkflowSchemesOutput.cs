using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.DTO
{
    public class GetWorkflowSchemesOutput
    {
        public List<WorkflowSchemeDto> Schemes { get; set; }

        public int id { get; set; }
    }
}
