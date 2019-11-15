using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Entities
{
    public class WorkflowProcessScheme
    {
        public string Id { get; set; }

        public string Scheme { get; set; }

        public string DefiningParameters { get; set; }

        [MaxLength(24)]
        public string DefiningParametersHash { get; set; }

        [MaxLength(256)]
        public string SchemeCode { get; set; }

        public int IsObsolete { get; set; }

        [MaxLength(256)]
        public string RootSchemeCode { get; set; }

        public string RootSchemeId { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string AllowedActivities { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string StartingTransition { get; set; }
    }
}
