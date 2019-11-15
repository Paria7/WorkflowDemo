using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using WorkflowDemo.WebUI.Entities;
using WorkflowDemo.WebUI.Models;
using WorkflowDemo.WebUI.Repositories;

namespace WorkflowDemo.WebUI.Common
{
    public class LogHelper : ILogHelper
    {
        private readonly WorkflowDemoContext _context;
        private readonly IRepository<AuditLog> _logRepository;
        private const int LogContentMaxLength = 4000;

        public LogHelper(WorkflowDemoContext context, IRepository<AuditLog> logRepository)
        {
            _context = context;
            _logRepository = logRepository;
        }

        public void ErrorAsync(LogModel model)
        {
            Task.Run(() =>
            {
                var entity = GetLogEntity(model);
                //_logRepository.Insert(entity);
                _context.AuditLog.Add(entity);
                _context.SaveChanges();
            });
        }


        /// <summary>
        /// 审计日志
        /// </summary>
        /// <param name="model"></param>
        public void AuditAsync(LogModel model)
        {
            Task.Run(() =>
            {
                var entity = GetLogEntity(model);
                _context.AuditLog.Add(entity);
                _context.SaveChanges();
            });
        }

        /// <summary>
        /// 业务日志
        /// </summary>
        /// <param name="model"></param>
        public void BusinessAsync(LogModel model)
        {
            Task.Run(() =>
            {
                var entity = GetLogEntity(model);
                _context.AuditLog.Add(entity);
                _context.SaveChanges();
            });
        }

        /// <summary>
        /// 获取日志实体
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        private static AuditLog GetLogEntity(LogModel model)
        {
            var exceptionContent = model.Exception?.Message + model.Exception?.StackTrace;
            var entity = new AuditLog()
            {
                Type = model.LogType,
                RequestUrl = model.RequestUrl,
                RequestParam = model.RequestParam,
                ResponseParam = model.ResponseParam,
                ServiceName = model.ServiceName,
                ActionName = model.ActionName,
                Ip = model.IpAddr,
                UserAgent = model.UserAgent,
                Duration = model.DurationTimeOfMillisecond,
                ExceptionContent = exceptionContent.Length > LogContentMaxLength
                    ? exceptionContent.Substring(0, LogContentMaxLength)
                    : exceptionContent,
                Description = model.ExtraContent,
                CreatedOn = model.RequestTime,
                CreatedBy = model.UserName
            };
            return entity;
        }
    }
}