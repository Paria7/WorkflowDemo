using System;
using System.ComponentModel.DataAnnotations;

namespace WorkflowDemo.WebUI.Entities
{
    public class EntityBase
    {
        #region System Fields

        [StringLength(50)]
        public string Id { get; set; }

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

        #endregion

        public EntityBase()
        {
            Id = Guid.NewGuid().ToString();
        }
    }
}