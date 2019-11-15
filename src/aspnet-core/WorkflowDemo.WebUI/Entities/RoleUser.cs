using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WorkflowDemo.WebUI.Entities
{
    public partial class RoleUser
    {
        [Key]
        public int Id { get; set; }

        public int? RoleId { get; set; }

        public int? UserId { get; set; }

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

        public Role Role { get; set; }
        
        public User User { get; set; }
    }
}
