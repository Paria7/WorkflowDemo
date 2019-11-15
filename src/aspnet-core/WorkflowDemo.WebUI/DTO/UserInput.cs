using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.DTO
{
    public class UserInput: PageRequestEntity
    {
        public string UserName { get; set; }

        public string EmployeeNo { get; set; }

        public string Role { get; set; }

        public int? Status { get; set; }

        public string Name { get; set; }

        public string PlantId { get; set; }
    }
}
