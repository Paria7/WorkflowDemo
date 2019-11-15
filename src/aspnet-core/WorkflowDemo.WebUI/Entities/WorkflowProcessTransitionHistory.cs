using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Entities
{
    public class WorkflowProcessTransitionHistory
    {
        public string Id { get; set; }

        public string ProcessId { get; set; }

        public string ExecutorIdentityId { get; set; }

        [MaxLength(256)]
        public string ActorIdentityId { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string FromActivityName { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string ToActivityName { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string ToStateName { get; set; }

        public DateTime TransitionTime { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string TransitionClassifier { get; set; }

        public int IsFinalised { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string FromStateName { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string TriggerName { get; set; }
    }
}
