using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.DTO
{
    public class RequestBase
    {
        /// <summary>
        /// 操作人工号
        /// </summary>
        public string No { get; set; }

        /// <summary>
        /// 操作人姓名
        /// </summary>
        public string Name { get; set; }
    }
}
