using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Entities
{
    public class WorkflowProcessInstancePersistence
    {
        public string Id { get; set; }

        public string ProcessId { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string ParameterName { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string Value { get; set; }
    }
}
