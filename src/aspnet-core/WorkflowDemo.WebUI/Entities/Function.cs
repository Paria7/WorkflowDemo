using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WorkflowDemo.WebUI.Entities
{
    public partial class Function
    {
        public Function()
        {
            Menu = new HashSet<Menu>();
            RoleFunction = new HashSet<RoleFunction>();
        }
        [Key]
        public int Id { get; set; }

        [StringLength(255)]
        public string Group { get; set; }

        [StringLength(1000)]
        public string ChineseName { get; set; }

        [StringLength(255)]
        public string ChineseGroup { get; set; }

        [StringLength(255)]
        public string Name { get; set; }

        [StringLength(1000)]
        public string Description { get; set; }

        public int Position { get; set; }

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

        public ICollection<Menu> Menu { get; set; }

        public ICollection<RoleFunction> RoleFunction { get; set; }
    }
}
