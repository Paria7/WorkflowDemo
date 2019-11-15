using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Entities
{
    public class WorkflowInbox
    {
        public string Id { get; set; }

        public string ProcessId { get; set; }

        [MaxLength(256)]
        public string IdentityId { get; set; }
    }
}
