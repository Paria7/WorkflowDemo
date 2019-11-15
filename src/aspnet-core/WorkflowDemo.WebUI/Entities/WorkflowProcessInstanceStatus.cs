using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Entities
{
    public class WorkflowProcessInstanceStatus
    {
        public string Id { get; set; }

        public int Status { get; set; }

        public string Lock { get; set; }
    }
}
