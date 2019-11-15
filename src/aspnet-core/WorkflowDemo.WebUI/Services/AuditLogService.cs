using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WorkflowDemo.WebUI.Common;
using WorkflowDemo.WebUI.DTO;
using WorkflowDemo.WebUI.Entities;
using WorkflowDemo.WebUI.Repositories;

namespace WorkflowDemo.WebUI.Services
{
    public class AuditLogService
    {
        private readonly WorkflowDemoContext _WorkflowDemoContext;
        private readonly IRepository<AuditLog> _auditLogRepository;


        public AuditLogService(IRepository<AuditLog> auditLogRepository,
            WorkflowDemoContext WorkflowDemoContext
        )
        {
            _WorkflowDemoContext = WorkflowDemoContext;
            _auditLogRepository = auditLogRepository;
        }

        /// <summary>
        /// 获取auditLog数据
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<AuditLogOutput> GetAuditLogData(AuditLogInput input)
        {
            var linqExp = (from audit in _WorkflowDemoContext.AuditLog
                join user in _WorkflowDemoContext.User
                    on audit.CreatedBy equals user.EmployeeNo into user2
                from user3 in user2.DefaultIfEmpty()
                where (audit.IsDeleted == false && user3.IsDeleted == false)
                      && (input.LogType <= 0 || input.LogType == audit.Type)
                      && (string.IsNullOrWhiteSpace(input.UserName) || user3.Name.Contains(input.UserName))
                      && (string.IsNullOrWhiteSpace(input.UserNo) || audit.CreatedBy.Contains(input.UserNo))
                      && (string.IsNullOrWhiteSpace(input.ServiceName) || audit.ServiceName.Contains(input.ServiceName))
                      && (string.IsNullOrWhiteSpace(input.ActionName) || audit.ActionName.Contains(input.ActionName))
                      && (input.StartTime <= new DateTime(1900, 1, 1) || audit.CreatedOn >= input.StartTime)
                      && (input.EndTime <= new DateTime(1900, 1, 1) ||
                          audit.CreatedOn <= input.EndTime.AddDays(1).AddSeconds(-1))
                select new AuditLogOutputModel()
                {
                    Id = audit.Id,
                    LogType = audit.Type,
                    Time = audit.CreatedOn.ToString(),
                    UserName = user3.Name,
                    UserNo = audit.CreatedBy,
                    Service = audit.ServiceName,
                    Action = audit.ActionName,
                    Duration = audit.Duration,
                    IPAddress = audit.Ip,
                    ClientBrowser = audit.UserAgent
                }).OrderByDescending(x => x.Time);


            var response = new AuditLogOutput()
            {
                TotalCount = await linqExp.CountAsync(),
                Models = await linqExp.Skip((input.PageIndex - 1) * input.PageSize)
                    .Take(input.PageSize)
                    .ToListAsync()
            };

            #region 需求变化，废弃的代码，查询user 不太方便

            //var whereExpress = GetWhereExpression(input);
            //var count = _auditLogRepository.Entities.Count(whereExpress);

            //var response = new AuditLogOutput()
            //{
            //    TotalCount = count
            //};

            //var models = await _WorkflowDemoContext.AuditLog.Where(whereExpress)
            //    .OrderByDescending(x => x.CreatedOn)
            //    .Skip((input.PageIndex - 1) * input.PageSize)
            //    .Take(input.PageSize)
            //    .GroupJoin(_WorkflowDemoContext.User.Where(x=>x.IsDeleted==false), audit => audit.CreatedBy, user => user.EmployeeNo,
            //        (audit, user) =>
            //            new AuditLogOutputModel()
            //            {
            //                Id = audit.Id,
            //                LogType = audit.Type,
            //                Time = audit.CreatedOn.ToString(),
            //                UserName = user.FirstOrDefault().Name,
            //                UserNo = audit.CreatedBy,
            //                Service = audit.ServiceName,
            //                Action = audit.ActionName,
            //                Duration = audit.Duration,
            //                IPAddress = audit.Ip,
            //                ClientBrowser = audit.UserAgent
            //            }
            //    ).ToListAsync();
            //response.Models = models;

            #endregion

            return response;
        }

        /// <summary>
        /// 获取where条件
        /// </summary>
        /// <param name="request">请求参数</param>
        /// <returns>条件表达式</returns>
        private Expression<Func<AuditLog, bool>> GetWhereExpression(AuditLogInput request)
        {
            var expr = PredicateExtensions.True<AuditLog>();
            expr = expr.And(x => x.IsDeleted == false);
            if (request.LogType > 0)
            {
                expr = expr.And(x => x.Type.Equals(request.LogType));
            }

            if (!string.IsNullOrWhiteSpace(request.UserName))
            {
                expr = expr.And(x => x.CreatedBy.Contains(request.UserName));
            }

            if (!string.IsNullOrWhiteSpace(request.ServiceName))
            {
                expr = expr.And(x => x.ServiceName.Contains(request.ServiceName));
            }

            if (!string.IsNullOrWhiteSpace(request.ActionName))
            {
                expr = expr.And(x => x.ActionName.Contains(request.ActionName));
            }

            if (request.StartTime > new DateTime(1970, 1, 1))
            {
                expr = expr.And(x => x.CreatedOn >= request.StartTime);
            }

            if (request.EndTime > new DateTime(1970, 1, 1))
            {
                expr = expr.And(x => x.CreatedOn <= request.EndTime.AddDays(1).AddSeconds(-1));
            }

            return expr;
        }

        /// <summary>
        /// 查询审计日志详细信息
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<AuditLogOutputModel> GetDetailAuditLog(string id)
        {
            //var model = await _auditLogRepository.Entities.Where(x => x.Id == id)
            //    .FirstOrDefaultAsync();

            var model =
                from audit in _WorkflowDemoContext.AuditLog
                join user in _WorkflowDemoContext.User
                    on audit.CreatedBy equals user.EmployeeNo into user2
                from user3 in user2.DefaultIfEmpty()
                where audit.IsDeleted == false && user3.IsDeleted == false
                                               && audit.Id == id
                select new AuditLogOutputModel()
                {
                    Id = audit.Id,
                    LogType = audit.Type,
                    Time = audit.CreatedOn.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                    RequestUrl = audit.RequestUrl,
                    UserName = user3.Name,
                    UserNo = audit.CreatedBy,
                    Service = audit.ServiceName,
                    Action = audit.ActionName,
                    Duration = audit.Duration,
                    IPAddress = audit.Ip,
                    ClientBrowser = audit.UserAgent,
                    RequestParam = audit.RequestParam,
                    ResponseParam = audit.ResponseParam,
                    Exception = audit.ExceptionContent,
                    CustomContent = audit.Description
                };

            return await model.FirstOrDefaultAsync();
        }
    }
}