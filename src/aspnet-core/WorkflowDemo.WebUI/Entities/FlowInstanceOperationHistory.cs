using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Entities
{
    public class FlowInstanceOperationHistory:EntityBase
    {
        public FlowInstanceOperationHistory()
        {
            this.InstanceId = string.Empty;
            this.Content = string.Empty;
        }
      
        [Description("实例进程Id")]
        public string InstanceId { get; set; }
      
        [Description("操作内容")]
        public string Content { get; set; }
    }
}
