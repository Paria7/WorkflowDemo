using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Entities
{
    public class FlowInstance : EntityBase
    {
        public FlowInstance()
        {
            this.InstanceSchemeId = string.Empty;
            this.Code = string.Empty;
            this.CustomName = string.Empty;
            this.ActivityId = string.Empty;
            this.ActivityName = string.Empty;
            this.PreviousId = string.Empty;
            this.SchemeContent = string.Empty;
            this.SchemeId = string.Empty;
            this.DbName = string.Empty;
            this.FrmData = string.Empty;
            this.FrmType = 0;
            this.FrmContentData = string.Empty;
            this.FrmContentParse = string.Empty;
            this.FrmId = string.Empty;
            this.SchemeType = string.Empty;
            this.Disabled = 0;
            this.FlowLevel = 0;
            this.Description = string.Empty;
            this.IsFinish = 0;
            this.MakerList = string.Empty;
        }

       
        [Description("流程实例模板Id")]
        public string InstanceSchemeId { get; set; }
        
        [Description("实例编号")]
        public string Code { get; set; }
      
        [Description("自定义名称")]
        public string CustomName { get; set; }
       
        [Description("当前节点ID")]
        public string ActivityId { get; set; }
      
        [Description("当前节点类型（0会签节点）")]
        public int? ActivityType { get; set; }
     
        [Description("当前节点名称")]
        public string ActivityName { get; set; }
    
        [Description("前一个ID")]
        public string PreviousId { get; set; }
      
        [Description("流程模板内容")]
        public string SchemeContent { get; set; }
  
        [Description("流程模板ID")]
        public string SchemeId { get; set; }
    
        [Description("数据库名称")]
        public string DbName { get; set; }
   
        [Description("表单数据")]
        public string FrmData { get; set; }
    
        [Description("表单类型")]
        public int FrmType { get; set; }
   
        [Description("表单中的控件属性描述")]
        public string FrmContentData { get; set; }
     
        [Description("表单控件位置模板")]
        public string FrmContentParse { get; set; }
  
        [Description("表单ID")]
        public string FrmId { get; set; }
    
        [Description("流程类型")]
        public string SchemeType { get; set; }
    
        [Description("有效标志")]
        public int Disabled { get; set; }
   
        [Description("等级")]
        public int FlowLevel { get; set; }
     
        [Description("实例备注")]
        public string Description { get; set; }
     
        [Description("是否完成")]
        public int IsFinish { get; set; }
     
        [Description("执行人")]
        public string MakerList { get; set; }

    }
}
