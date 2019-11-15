using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.IdentityModel.Logging;
using Newtonsoft.Json;

namespace WorkflowDemo.WebUI.Common
{
    public class WebApiExceptionFilterAttribute : IExceptionFilter
    {
        /// <summary>
        /// 报错基本信息
        /// </summary>
        public string Message;

        /// <summary>
        /// 重写基类的异常处理方法
        /// </summary>
        /// <param name="context"></param>
        public void OnException(ExceptionContext context)
        {
            var controllerName = context.RouteData.Values["Controller"];
            var actionName = context.RouteData.Values["Action"];

            StackTrace st = new StackTrace(true);
            StackFrame sf = st.GetFrame(0);

            var errorFileName = sf.GetFileName();  
            var errorMethod = sf.GetMethod();      
            var errorLine = sf.GetFileLineNumber(); 
            var errorColum = sf.GetFileColumnNumber(); 

            throw new NotImplementedException();
        }
    }
}