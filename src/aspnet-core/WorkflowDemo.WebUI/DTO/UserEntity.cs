using System;
using System.Collections.Generic;

namespace WorkflowDemo.WebUI.DTO
{
    public class UserEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Password { get; set; }

        public string PasswordSalt { get; set; }

        public string FirstName { get; set; }

        public string SecondName { get; set; }

        public string Mail { get; set; }

        public string MobileNo { get; set; }

        public string PhoneNo { get; set; }

        public DateTime? ExpireDate { get; set; }

        public IEnumerable<RoleEntity> Roles { get; set; }

        public string EmployeeNo { get; set; }

        public string PlantId { get; set; }

        public string PlantName { get; set; }

        public int Status { get; set; }

        public string StatusName { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime? UpdatedOn { get; set; }
    }
}
