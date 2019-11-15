using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkflowDemo.WebUI.Common;
using WorkflowDemo.WebUI.DTO;
using WorkflowDemo.WebUI.Repositories;

namespace WebUI.Controllers
{
    [Route("api/[controller]/[action]")]
    [JwtAuthorize]
    [ApiController]
    public class SystemController : ControllerBase
    {
        #region Private Properties
        private SystemRepository Repository { get; }
        #endregion

        #region Public Methods
        /// <summary>
        /// 
        /// </summary>
        /// <param name="repository"></param>
        public SystemController(SystemRepository repository)
        {
            Repository = repository;
        }

        /// <summary>
        /// WebUI: get all menus
        /// </summary>
        /// <returns>all menus</returns>
        [AllowAnonymous]
        [HttpGet]
        public List<MenuEntity> GetMenus()
        {
            return Repository.GetMenus();
        }

        /// <summary>
        /// WebUI: get all user menus
        /// </summary>
        /// <returns>all user menus</returns>
        [HttpGet]
        public List<MenuEntity> GetUserMenus()
        {
            return Repository.GetUserMenus();
        }
        #endregion
    }
}