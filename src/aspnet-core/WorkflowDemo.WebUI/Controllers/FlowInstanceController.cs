using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FlowInstanceController : ControllerBase
    {
        // GET: api/FlowInstance
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        //// GET: api/FlowInstance/5
        //[HttpGet]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/FlowInstance
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/FlowInstance/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
