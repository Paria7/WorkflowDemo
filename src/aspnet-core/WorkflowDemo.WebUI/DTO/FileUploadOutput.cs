using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace WorkflowDemo.WebUI.DTO
{
    public class FileUploadOutput: ResponseBase
    {

        /// <summary>
        /// 返回的附件表主键
        /// </summary>
        public string Guid { get; set; }

    }
}
