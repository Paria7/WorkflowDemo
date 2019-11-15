using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WorkflowDemo.WebUI.Entities
{
    public partial class User
    {
        public User()
        {
            RoleUser = new HashSet<RoleUser>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(255)]
        public string Name { get; set; }

        [Column(TypeName = "VARCHAR(255)")]
        public string Password { get; set; }

        [Column(TypeName = "VARCHAR(255)")]
        public string PasswordSalt { get; set; }

        [StringLength(255)]
        public string FirstName { get; set; }

        [StringLength(255)]
        public string SecondName { get; set; }

        [StringLength(255)]
        public string Mail { get; set; }

        [Column(TypeName = "VARCHAR(50)")]
        public string MobileNo { get; set; }

        [Column(TypeName = "VARCHAR(50)")]
        public string PhoneNo { get; set; }

        public DateTime? ExpirationDate { get; set; }

        public ICollection<RoleUser> RoleUser { get; set; }

        [StringLength(255)]
        public string EmployeeNo { get; set; }

        [StringLength(50)]
        public string PlantId { get; set; }

        public int Status { get; set; }

        public DateTime? CreatedOn { get; set; }

        [StringLength(255)]
        public string CreatedBy { get; set; }

        public DateTime? UpdatedOn { get; set; }

        [StringLength(255)]
        public string UpdatedBy { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime? DeletedOn { get; set; }

        [StringLength(255)]
        public string DeletedBy { get; set; }
    }
}
