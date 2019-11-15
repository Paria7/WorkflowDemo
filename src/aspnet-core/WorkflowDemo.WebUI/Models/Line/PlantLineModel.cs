using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WorkflowDemo.WebUI.Models.Line
{
    public class PlantLineModel
    {
        #region Business Fields

        [Required]
        public List<string> PlantId { get; set; }

        #endregion
    }
}
