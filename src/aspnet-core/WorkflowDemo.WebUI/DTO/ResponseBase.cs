using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.DTO
{
    public class ResponseBase
    {
        /// <summary>
        /// 是否成功
        /// </summary>
        public bool IsSuccess { get; set; }

        /// <summary>
        /// 备注信息
        /// </summary>
        public string Msg { get; set; }
    }
}
