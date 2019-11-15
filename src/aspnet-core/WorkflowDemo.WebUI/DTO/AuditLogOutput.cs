using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.DTO
{
    /// <summary>
    /// 审计日志输出信息
    /// </summary>
    public class AuditLogOutput : PageResponseEntity
    {
        public IEnumerable<AuditLogOutputModel> Models { get; set; }
    }

    public class AuditLogOutputModel
    {
        /// <summary>
        /// ID
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// 日志类型 枚举LogType。1:审计日志 2:异常日志 3:业务日志
        /// </summary>
        public int LogType { get; set; }

        /// <summary>
        /// 开始时间
        /// </summary>
        public string Time { get; set; }

        /// <summary>
        /// 用户名
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// 工号
        /// </summary>
        public string UserNo { get; set; }

        /// <summary>
        /// 请求地址
        /// </summary>
        public string RequestUrl { get; set; }

        /// <summary>
        /// 服务名
        /// </summary>
        public string Service { get; set; }

        /// <summary>
        /// 方法名
        /// </summary>
        public string Action { get; set; }

        /// <summary>
        /// 持续时间，毫秒
        /// </summary>
        public int Duration { get; set; }

        /// <summary>
        /// IP地址
        /// </summary>
        public string IPAddress { get; set; }

        /// <summary>
        /// 客户端User-Agent
        /// </summary>
        public string ClientBrowser { get; set; }


        ////////下面几个参数是查询明细时返回的，主页面不返回
        /// <summary>
        /// 请求参数
        /// </summary>
        public string RequestParam { get; set; }

        /// <summary>
        /// 响应参数
        /// </summary>
        public string ResponseParam { get; set; }

        /// <summary>
        /// 异常信息
        /// </summary>
        public string Exception { get; set; }

        /// <summary>
        /// 自定义数据(描述)
        /// </summary>
        public string CustomContent { get; set; }
    }
}