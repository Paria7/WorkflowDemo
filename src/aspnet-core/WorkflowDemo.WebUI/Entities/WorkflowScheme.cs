using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Entities
{
    public class WorkflowScheme
    {
        [Key]
        [MaxLength(256)]
        public string Code { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string Scheme { get; set; }
    }
}
