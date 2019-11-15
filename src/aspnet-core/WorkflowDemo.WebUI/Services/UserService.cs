using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Remotion.Linq.Clauses;
using WorkflowDemo.WebUI.Entities;
using WorkflowDemo.WebUI.Models;
using WorkflowDemo.WebUI.Repositories;

namespace WorkflowDemo.WebUI.Services
{
    public class UserService
    {
        private readonly WorkflowDemoContext _context;
        private IHttpContextAccessor _accessor;

        public UserService(WorkflowDemoContext context, IHttpContextAccessor accessor)
        {
            _context = context;
            _accessor = accessor;
        }

        public List<User> GetUsersByEmpNo(List<string> empNos)
        {
            return _context.User
                .Where(u => u.EmployeeNo != null && empNos.Contains(u.EmployeeNo) && u.IsDeleted == false).ToList();
        }

        public User GetUserById(int id)
        {
            return _context.User
                .Where(u => u.Id == id && u.IsDeleted == false).FirstOrDefault();
        }

        /// <summary>
        /// 根据工号查询用户信息
        /// </summary>
        /// <param name="userNo">工号</param>
        /// <returns></returns>
        public User GetUserByNo(string userNo)
        {
            return _context.User
                .Where(u => u.EmployeeNo == userNo && u.IsDeleted == false).FirstOrDefault();
        }

        public string GetUserMergeName(List<User> users, string empNo)
        {
            var user = users.FirstOrDefault(u => u.EmployeeNo == empNo);
            return user == null ? "" : user.Name + "(" + user.EmployeeNo + ")";
        }

        public User GetLoginUser()
        {
            var currentLoginUser = _context.User.FirstOrDefault(d => d.Name == RepositoryContext.Current.UserName);
            if (currentLoginUser == null)
            {
                throw new ApplicationException("No login user.");
            }

            return currentLoginUser;
        }

        public User GetCurrentLoginUser()
        {
            var currentLoginUser = _context.User.FirstOrDefault(d => d.Name == RepositoryContext.Current.UserName);
            return currentLoginUser;
        }

        /// <summary>
        /// 获取当前登录人工号和姓名信息
        /// </summary>
        /// <returns></returns>
        public LogInUserModel GetLoginUserInfo()
        {
            return new LogInUserModel()
            {
                UserNo = _accessor.HttpContext.User.FindFirst("userNo")?.Value,
                UserName = _accessor.HttpContext.User.Identity.Name
            };
        }
    }
}