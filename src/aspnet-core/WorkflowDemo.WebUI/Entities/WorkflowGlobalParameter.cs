using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Entities
{
    public class WorkflowGlobalParameter
    {
        public string Id { get; set; }

        [MaxLength(306)]
        public string Type { get; set; }

        [MaxLength(128)]
        public string Name { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string Value { get; set; }
    }
}
