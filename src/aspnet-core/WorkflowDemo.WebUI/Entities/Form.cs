using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Entities
{
    public class Form : EntityBase
    {
        public Form()
        {
            this.Name = string.Empty;
            this.FrmType = 0;
            this.WebId = string.Empty;
            this.Fields = 0;
            this.ContentData = string.Empty;
            this.ContentParse = string.Empty;
            this.Content = string.Empty;
            this.SortCode = 0;
            this.DeleteMark = 0;
            this.DbName = string.Empty;
            this.Disabled = 0;
            this.Description = string.Empty;
        }

      
        [Description("表单名称")]
        public string Name { get; set; }
     
        [Description("表单类型，0：默认动态表单；1：Web自定义表单")]
        public int FrmType { get; set; }
     
        [Description("系统页面标识，当表单类型为用Web自定义的表单时，需要标识加载哪个页面")]
        public string WebId { get; set; }
      
        [Description("字段个数")]
        public int Fields { get; set; }
       
        [Description("表单中的控件属性描述")]
        public string ContentData { get; set; }
       
        [Description("表单控件位置模板")]
        public string ContentParse { get; set; }
     
        [Description("表单原html模板未经处理的")]
        public string Content { get; set; }
      
        [Description("排序码")]
        public int SortCode { get; set; }
     
        [Description("删除标记")]
        public int DeleteMark { get; set; }
       
        [Description("数据库名称")]
        public string DbName { get; set; }
       
        [Description("有效")]
        public int Disabled { get; set; }
       
        [Description("备注")]
        public string Description { get; set; }
    }
}
