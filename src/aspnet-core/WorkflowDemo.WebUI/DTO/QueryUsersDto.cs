using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.DTO
{
    public class QueryUsersDto : PageResponseEntity
    {
        public List<UserEntity> Dtos { get; set; }
    }
}
