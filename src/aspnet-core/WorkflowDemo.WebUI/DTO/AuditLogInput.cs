using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.DTO
{
    /// <summary>
    /// 审计日志查询条件
    /// </summary>
    public class AuditLogInput : PageRequestEntity
    {
        /// <summary>
        /// 日志类型 0:不区分，查询所有 1:审计日志 2:异常日志 3:业务日志
        /// </summary>
        public int LogType { get; set; }

        /// <summary>
        /// 开始时间
        /// </summary>
        public DateTime StartTime { get; set; }

        /// <summary>
        /// 截止时间
        /// </summary>
        public DateTime EndTime { get; set; }

        /// <summary>
        /// 用户名
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// 工号
        /// </summary>
        public string UserNo { get; set; }

        /// <summary>
        /// 服务名
        /// </summary>
        public string ServiceName { get; set; }

        /// <summary>
        /// Action名
        /// </summary>
        public string ActionName { get; set; }
    }
}