using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Entities
{
    public class FlowInstanceTransitionHistory:EntityBase
    {
        public FlowInstanceTransitionHistory()
        {
            this.InstanceId = string.Empty;
            this.FromNodeId = string.Empty;
            this.FromNodeName = string.Empty;
            this.ToNodeId = string.Empty;
            this.ToNodeName = string.Empty;
            this.TransitionSate = 0;
            this.IsFinish = 0;
        }
  
        [Description("实例Id")]
        public string InstanceId { get; set; }

        [Description("开始节点Id")]
        public string FromNodeId { get; set; }
     
        [Description("开始节点类型")]
        public int? FromNodeType { get; set; }
   
        [Description("开始节点名称")]
        public string FromNodeName { get; set; }
    
        [Description("结束节点Id")]
        public string ToNodeId { get; set; }
  
        [Description("结束节点类型")]
        public int? ToNodeType { get; set; }
     
        [Description("结束节点名称")]
        public string ToNodeName { get; set; }
      
        [Description("转化状态")]
        public int TransitionSate { get; set; }
     
        [Description("是否结束")]
        public int IsFinish { get; set; }
    }
}
