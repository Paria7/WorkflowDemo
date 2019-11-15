using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WorkflowDemo.WebUI.Common;
using WorkflowDemo.WebUI.DTO;
using WorkflowDemo.WebUI.Repositories;

namespace WorkflowDemo.WebUI.Controllers
{
    /// <summary>
    /// administration controller, handle administration-related requests
    /// </summary>
    [Route("api/[controller]/[action]")]
    [JwtAuthorize]
    [ApiController]
    public class AdministrationController : ControllerBase
    {
        #region Private Properties
        private AdminstrationRepository Repository { get; }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="repository"></param>
        public AdministrationController(AdminstrationRepository repository)
        {
            this.Repository = repository;
        }
        #endregion

        #region Public Methods

        /// <summary>
        /// get all users
        /// </summary>
        /// <returns>users</returns>
        [HttpGet]
        public ActionResult<List<UserEntity>> GetUsers()
        {
            var model = Repository.GetUsers();
            return Ok(model);
        }

        /// <summary>
        /// search users
        /// </summary>
        /// <param name="filter">search filter</param>
        /// <returns>users</returns>
        [HttpGet]
        public ActionResult<List<UserEntity>> SearchUsers([FromQuery]string filter)
        {
            var model = Repository.GetUsers().Where(d => d.Name.ToLower().Contains(filter.ToLower()) ||
            d.EmployeeNo.ToLower().Contains(filter.ToLower()) ||
            d.Roles.Any(e => e.Name.ToLower().Contains(filter.ToLower()))).ToList();//用户名或工号或角色名模糊匹配
            return Ok(model);
        }

        /// <summary>
        /// save user
        /// </summary>
        /// <param name="entity">user</param>
        /// <returns>user</returns>
        [HttpPost]
        public ActionResult<UserEntity> SaveUser([FromBody]UserEntity entity)
        {
            var model = Repository.SaveUser(entity);
            return Ok(model);
        }

        /// <summary>
        /// get login user
        /// </summary>
        /// <returns>user</returns>
        [HttpGet]
        public ActionResult<UserEntity> GetLoginUserInfo()
        {
            var model = Repository.GetLoginUserInfo();
            return Ok(model);
        }

        /// <summary>
        /// remove user
        /// </summary>
        /// <param name="id">user id</param>
        [HttpDelete("{id}")]
        public void RemoveUser(string id)
        {
            Repository.RemoveUser(id);
        }

        /// <summary>
        /// get all roles
        /// </summary>
        /// <returns>roles</returns>
        [HttpGet]
        public ActionResult<List<RoleEntity>> GetRoles()
        {
            var model = Repository.GetRoles();
            return Ok(model);
        }

        /// <summary>
        /// search roles
        /// </summary>
        /// <param name="filter">search filter</param>
        /// <returns>roles</returns>
        [HttpGet]
        public ActionResult<List<RoleEntity>> SearchRoles([FromQuery]string filter)
        {
            var model = Repository.GetRoles().Where(d => d.Name.ToLower().Contains(filter.ToLower())).ToList();
            return Ok(model);
        }

        /// <summary>
        /// save role
        /// </summary>
        /// <param name="entity">role</param>
        /// <returns>role</returns>
        [HttpPost]
        public ActionResult<RoleEntity> SaveRole([FromBody]RoleEntity entity)
        {
            var model = Repository.SaveRole(entity);
            return Ok(model);
        }

        /// <summary>
        /// remove role
        /// </summary>
        /// <param name="id">role id</param>
        [HttpDelete("{id}")]
        public void RemoveRole(string id)
        {
            Repository.RemoveRole(id);
        }

        /// <summary>
        /// get all function groups
        /// </summary>
        /// <returns>function groups</returns>
        [HttpGet]
        public ActionResult<List<FunctionGroupEntity>> GetFunctionGroups()
        {
            var model = Repository.GetFunctionGroups();
            return Ok(model);
        }

        /// <summary>
        /// get function groups by role
        /// </summary>
        /// <param name="role">role</param>
        /// <returns>function groups</returns>
        [HttpPost]
        public ActionResult<List<FunctionGroupEntity>> GetFunctionGroupsByRole([FromBody] RoleEntity role)
        {
            var model = Repository.GetFunctionGroupsByRole(role.Id);
            return Ok(model);
        }

        /// <summary>
        /// save functions
        /// </summary>
        /// <param name="functionGroupEntities">functions</param>
        /// <returns>functions</returns>
        [HttpPost]
        public ActionResult<int> SaveRoleFunctions([FromBody]IEnumerable<FunctionGroupEntity> functionGroupEntities)
        {
            try
            {
                var model = Repository.SaveRoleFunctions(functionGroupEntities.ToList());
                return Ok(model);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
           
        }

        /// <summary>
        /// get user info by user name or email address
        /// </summary>
        /// <param name="userInfo">user name or email address</param>
        /// <returns>user info</returns>
        [HttpGet]
        public ActionResult<List<UserEntity>> GetUserAdAccount([FromQuery]string userInfo)
        {
            try
            {
                var model = Repository.GetUserAdAccount(userInfo);
                return Ok(model);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        /// <summary>
        /// get user statuses
        /// </summary>
        /// <returns>all user statuses</returns>
        [HttpGet]
        public ActionResult<List<StatusEntity>> GetUserStatuses()
        {
            var model = new List<StatusEntity>();
            foreach (var item in Enum.GetValues(typeof(UserStatus)))
            {
                var status = new StatusEntity();
                status.Id = (int)item;
                status.Name = item.ToString();
                model.Add(status);
            }
            return Ok(model);
        }

        /// <summary>
        /// search users
        /// </summary>
        /// <param name="entity">search entity</param>
        /// <returns>users</returns>
        [HttpGet]
        public ActionResult<List<UserEntity>> QueryUsers([FromQuery]UserInput entity)
        {
            var model = Repository.GetUsers().OrderByDescending(u => u.Id).Where(u => u.IsDeleted == false);

            if (entity.EmployeeNo != null)
                model = model.Where(u => u.EmployeeNo.ToLower().Contains(entity.EmployeeNo.ToLower().Trim())).ToList();

            if (entity.UserName != null)
                model = model.Where(u => u.Name.ToLower().Contains(entity.UserName.ToLower().Trim())).ToList();

            if (entity.Status != null)
                model = model.Where(u => u.Status == entity.Status).ToList();

            if (entity.Role != null)
                model = model.Where(u => u.Roles.Where(r => r.Id.ToString() == entity.Role).Count() > 0).ToList();

            if (entity.PlantId != null)
                model = model.Where(u => u.PlantId == entity.PlantId).ToList();

            return Ok(model);
        }

        #endregion
    }
}
