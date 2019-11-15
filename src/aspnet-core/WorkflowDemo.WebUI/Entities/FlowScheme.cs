using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Entities
{
    public class FlowScheme : EntityBase
    {
        public string SchemeCode { get; set; }

        public string SchemeName { get; set; }

        public string SchemeType { get; set; }

        public string SchemeVersion { get; set; }

        public string SchemeContent { get; set; }

        public string FrmId { get; set; }

        public int FrmType { get; set; }

        public int AuthorizeType { get; set; }

        public int SortCode { get; set; }

        public int Disabled { get; set; }

        public string Description { get; set; }
    }
}
