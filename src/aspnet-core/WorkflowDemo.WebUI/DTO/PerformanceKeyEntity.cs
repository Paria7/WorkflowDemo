using System;

namespace WorkflowDemo.WebUI.DTO
{
    public class KeyEntity
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public bool? IsActive { get; set; }

        public string Description { get; set; }

        public DateTime CreatedOn { get; set; }

        public string CreatedBy { get; set; }

        public DateTime UpdatedOn { get; set; }

        public string UpdatedBy { get; set; }

        public bool IsDeleted { get; set; }
    }
}
