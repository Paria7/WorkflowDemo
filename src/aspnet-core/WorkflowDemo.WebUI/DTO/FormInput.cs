using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.DTO
{
    public class FormInput
    {
        public string Name { get; set; }

        public int FrmType { get; set; }

        public string WebId { get; set; }

        public int Fields { get; set; }

        public string ContentData { get; set; }

        public string ContentParse { get; set; }

        public string Content { get; set; }

        public int SortCode { get; set; }

        public int DeleteMark { get; set; }

        public string DbName { get; set; }

        public int Disabled { get; set; }

        public string Description { get; set; }
    }
}
