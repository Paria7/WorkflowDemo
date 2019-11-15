using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WorkflowDemo.WebUI.Entities
{
    public partial class Role
    {
        public Role()
        {
            RoleFunction = new HashSet<RoleFunction>();
            RoleUser = new HashSet<RoleUser>();
        }

        [Key]
        public int Id { get; set; }
        
        [StringLength(50)]
        [Required]
        public string Code { get; set; }

        [StringLength(255)]
        public string Name { get; set; }

        [StringLength(1000)]
        public string Description { get; set; }

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

        public ICollection<RoleFunction> RoleFunction { get; set; }

        public ICollection<RoleUser> RoleUser { get; set; }
    }
}