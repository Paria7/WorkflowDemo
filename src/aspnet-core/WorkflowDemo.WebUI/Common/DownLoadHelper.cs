using System.Collections.Generic;
using System.Linq;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;

namespace WorkflowDemo.WebUI.Common
{
    public class DownLoadHelper
    {
        public static XSSFWorkbook GetXssfWorkbook<T>(IList<T> datas, Dictionary<string, string> columns)
        {
            var workbook = new XSSFWorkbook();

            var style = workbook.CreateCellStyle();
            style.Alignment = HorizontalAlignment.Left;
            style.WrapText = true;
            var font = workbook.CreateFont();
            font.FontHeightInPoints = 12;
            font.Boldweight = (short) FontBoldWeight.Bold;
            style.SetFont(font);

            var sheet = workbook.CreateSheet();
            var columnrow = sheet.CreateRow(0);

            for (var i = 0; i < columns.Values.Count; i++)
            {
                columnrow.CreateCell(i);
                columnrow.GetCell(i).SetCellValue(columns.Values.ToArray()[i]);
                columnrow.GetCell(i).CellStyle = style;
            }

            var rowIndex = 1;
            for (var j = 0; j < datas.Count; j++)
            {
                var valueRow = sheet.CreateRow(rowIndex);

                for (var i = 0; i < columns.Count; i++)
                {
                    valueRow.CreateCell(i);
                    var value = columns.Keys.ToArray()[i] == "No"
                        ? (j + 1).ToString()
                        : GetValue(columns.Keys.ToArray()[i], datas[j]);
                    valueRow.GetCell(i).SetCellValue(value);
                }
                rowIndex++;
            }
            for (var i = 0; i < columns.Count; i++)
                sheet.AutoSizeColumn(i);

            return workbook;
        }


        /// <summary>
        ///     通过对象属性名获取对象属性的值
        /// </summary>
        /// <param name="rowIndex">rowIndex</param>
        /// <param name="columnIndex">columnIndex</param>
        /// <returns></returns>
        public static string GetValue(string propertyName, object data)
        {
            var propertyInfo = data.GetType().GetProperty(propertyName);
            return propertyInfo.GetValue(data, null)?.ToString();
        }
    }
}