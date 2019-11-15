using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace WorkflowDemo.WebUI.Models
{
    public class ValidationResultModel
    {
        public string Code { get; set; }
        public string Content { get; set; }
        public object[] Parameters { get; set; }

        public ValidationResultModel(string code, string content, params object[] parameters)
        {
            Code = code;
            Content = content;
            Parameters = parameters;
        }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }

        public void Throw()
        {
            throw new ApplicationException(this.ToString());
        }

    }

    public class ValidationResultGroupModel
    {
        private List<ValidationResultModel> _validationResults = new List<ValidationResultModel>();

        public List<ValidationResultModel> ValidationResults
        {
            get { return _validationResults; }
            set { _validationResults = value; }
        }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }

        public void Throw()
        {
            throw new ApplicationException(this.ToString());
        }
    }

    public class ProductionTemplateValidationResultModel : ValidationResultModel
    {
        public string Plant { get; set; }
        public string Line { get; set; }
        public string Month { get; set; }

        public ProductionTemplateValidationResultModel(string code, string content, string plant, string line, string month) : base(code, content)
        {
            this.Plant = plant;
            this.Line = line;
            this.Month = month;
        }
    }
}
