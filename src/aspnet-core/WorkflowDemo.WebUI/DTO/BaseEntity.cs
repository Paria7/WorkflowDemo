using System;

namespace WorkflowDemo.WebUI.DTO
{
    public class BaseEntity
    {
        #region System Fields

        public string Id { get; set; }

        public DateTime CreatedOn { get; set; }

        public string CreatedBy { get; set; }

        public DateTime UpdatedOn { get; set; }

        public string UpdatedBy { get; set; }

        #endregion
    }
}
