using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Entities
{
    public class WorkflowProcessInstance
    {
        public string Id { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string StateName { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string ActivityName { get; set; }

        public string SchemeId { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string PreviousState { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string PreviousStateForDirect { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string PreviousStateForReverse { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string PreviousActivity { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string PreviousActivityForDirect { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string PreviousActivityForReverse { get; set; }

        public string ParentProcessId { get; set; }

        public string RootProcessId { get; set; }

        public int IsDeterminingParametersChanged { get; set; }
    }
}
