using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkflowDemo.WebUI.Entities;
using WorkflowDemo.WebUI.Models;
using WorkflowDemo.WebUI.Repositories;

namespace WorkflowDemo.WebUI.Common
{
    public interface ILogHelper
    {
        /// <summary>
        /// 错误日志
        /// </summary>
        void ErrorAsync(LogModel model);

        /// <summary>
        /// 审计日志
        /// </summary>
        void AuditAsync(LogModel model);

        /// <summary>
        /// 业务日志
        /// </summary>
        void BusinessAsync(LogModel model);
    }
}