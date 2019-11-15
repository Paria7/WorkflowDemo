using Newtonsoft.Json;

namespace WorkflowDemo.WebUI.Models
{
    public class ExcelValidationResultModel : ValidationResultModel
    {
        public int RowIndex { get; set; }
        public int ColumnIndex { get; set; }

        public ExcelValidationResultModel(string code, string content, int rowIndex, int columnIndex) : base(code, content)
        {
            RowIndex = rowIndex;
            ColumnIndex = columnIndex;
        }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
