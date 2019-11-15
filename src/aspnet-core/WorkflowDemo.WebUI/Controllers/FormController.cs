using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Swagger;
using WorkflowDemo.WebUI.Common;
using WorkflowDemo.WebUI.DTO;
using WorkflowDemo.WebUI.Entities;
using WorkflowDemo.WebUI.Services;

namespace WebUI.Controllers
{
    [Route("api/[controller]/[action]")]
    [JwtAuthorize]
    [ApiController]
    public class FormController : ControllerBase
    {
        private readonly FormService formService;

        public FormController(FormService formService)
        {
            this.formService = formService;
        }

        // GET: api/Form
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        //// GET: api/Form/5
        //[HttpGet]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/Form
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT: api/Form/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}


        //添加或修改
        [HttpPost]
        public void SaveFormData(FormInput input)
        {
            try
            {
                formService.SaveFormData(input);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
        public List<FormOutput> GetFormData()
        {
            return formService.GetFormData();
        }
    }
}
