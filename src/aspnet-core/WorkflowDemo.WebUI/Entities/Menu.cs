using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WorkflowDemo.WebUI.Entities
{
    public partial class Menu
    {
        public Menu()
        {
            InverseParent = new HashSet<Menu>();
        }

        [Key]
        public int Id { get; set; }
        public int? ParentId { get; set; }
        public int? FunctionId { get; set; }

        [StringLength(255)]
        public string Title { get; set; }

        [StringLength(255)]
        public string ChineseTitle { get; set; }

        [StringLength(1000)]
        public string Url { get; set; }

        public int Position { get; set; }

        [StringLength(255)]
        public string Icon { get; set; }

        public bool Unlinked { get; set; }

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

        public Function Function { get; set; }

        public Menu Parent { get; set; }

        public ICollection<Menu> InverseParent { get; set; }
    }
}
