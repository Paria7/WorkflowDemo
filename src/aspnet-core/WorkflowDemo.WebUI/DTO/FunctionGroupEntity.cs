using System.Collections.Generic;

namespace WorkflowDemo.WebUI.DTO
{
    public class FunctionGroupEntity
    {
        public RoleEntity Role { get; set; }

        public string GroupName { get; set; }

        public List<FunctionEntity> FunctionList { get; set; }

        public string ChineseGroupName { get; set; }
    }
}
