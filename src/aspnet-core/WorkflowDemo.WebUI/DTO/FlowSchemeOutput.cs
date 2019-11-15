using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.DTO
{
    public class FlowSchemeOutput
    {
        public string Id { get; set; }

        public string SchemeCode { get; set; }

        public string SchemeName { get; set; }

        public string SchemeType { get; set; }

        public string SchemeVersion { get; set; }

        public string SchemeContent { get; set; }

        public string FrmId { get; set; }

        public int FrmType { get; set; }

        public string Description { get; set; }

        public DateTime? CreatedOn { get; set; }

        public DateTime? UpdatedOn { get; set; }
    }
}
