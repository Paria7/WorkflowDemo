using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
    public class HomeController : Controller
    {
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="environment">environment</param>
        public HomeController(IHostingEnvironment environment)
        {
            HostingEnvironment = environment;
        }

        #region Public Properties

        /// <summary>
        /// hosting environment
        /// </summary>
        public IHostingEnvironment HostingEnvironment { get; }

        #endregion


        #region Public Methods

        /// <summary>
        /// Index action
        /// </summary>
        /// <returns>Index page</returns>
        [HttpGet]
        public IActionResult Index()
        {
            return Redirect("./swagger");
        }

        #endregion
    }
}