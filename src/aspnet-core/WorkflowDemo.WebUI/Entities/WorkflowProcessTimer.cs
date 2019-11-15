using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Entities
{
    public class WorkflowProcessTimer
    {
        public string Id { get; set; }

        public string ProcessId { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string Name { get; set; }

        public DateTime NextExecutionDateTime { get; set; }

        public int Ignore { get; set; }
    }
}
