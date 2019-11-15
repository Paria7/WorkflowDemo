using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using NPOI.HSSF.UserModel;

namespace WorkflowDemo.WebUI.Common
{
    public class ExcelHelper
    {
        public string ExportTpmPlanDetail()
        {
            //// Open Template
            //FileStream fs = new FileStream(_hostingEnvironment.WebRootPath + "\\templates\\TPMPlanExportTemplate.xlsx", FileMode.Open);

            //// Load the template into a NPOI workbook
            //HSSFWorkbook templateWorkbook = new HSSFWorkbook(fs, true);
            
            //// Load the sheet you are going to use as a template into NPOI
            //var sheet = templateWorkbook.GetSheet("Checklist");

            //// Insert data into template
            //sheet.GetRow(1).GetCell(1).SetCellValue(EventName.Value);  // Inserting a string value into Excel
            //sheet.GetRow(1).GetCell(5).SetCellValue(DateTime.Parse(EventDate.Value));  // Inserting a date value into Excel

            //sheet.GetRow(5).GetCell(2).SetCellValue(Double.Parse(Roomandhallfees.Value));  // Inserting a number value into Excel
            //sheet.GetRow(6).GetCell(2).SetCellValue(Double.Parse(Sitestaff.Value));
            //sheet.GetRow(7).GetCell(2).SetCellValue(Double.Parse(Equipment.Value));
            //sheet.GetRow(8).GetCell(2).SetCellValue(Double.Parse(Tablesandchairs.Value));
            //sheet.GetRow(12).GetCell(2).SetCellValue(Double.Parse(Flowers.Value));
            //sheet.GetRow(13).GetCell(2).SetCellValue(Double.Parse(Candles.Value));
            //sheet.GetRow(14).GetCell(2).SetCellValue(Double.Parse(Lighting.Value));
            //sheet.GetRow(15).GetCell(2).SetCellValue(Double.Parse(Balloons.Value));
            //sheet.GetRow(16).GetCell(2).SetCellValue(Double.Parse(Papersupplies.Value));
            //sheet.GetRow(20).GetCell(2).SetCellValue(Double.Parse(Graphicswork.Value));
            //sheet.GetRow(21).GetCell(2).SetCellValue(Double.Parse(Photocopying_Printing.Value));
            //sheet.GetRow(22).GetCell(2).SetCellValue(Double.Parse(Postage.Value));
            //sheet.GetRow(26).GetCell(2).SetCellValue(Double.Parse(Telephone.Value));
            //sheet.GetRow(27).GetCell(2).SetCellValue(Double.Parse(Transportation.Value));
            //sheet.GetRow(28).GetCell(2).SetCellValue(Double.Parse(Stationerysupplies.Value));
            //sheet.GetRow(29).GetCell(2).SetCellValue(Double.Parse(Faxservices.Value));
            //sheet.GetRow(33).GetCell(2).SetCellValue(Double.Parse(Food.Value));
            //sheet.GetRow(34).GetCell(2).SetCellValue(Double.Parse(Drinks.Value));
            //sheet.GetRow(35).GetCell(2).SetCellValue(Double.Parse(Linens.Value));
            //sheet.GetRow(36).GetCell(2).SetCellValue(Double.Parse(Staffandgratuities.Value));
            //sheet.GetRow(40).GetCell(2).SetCellValue(Double.Parse(Performers.Value));
            //sheet.GetRow(41).GetCell(2).SetCellValue(Double.Parse(Speakers.Value));
            //sheet.GetRow(42).GetCell(2).SetCellValue(Double.Parse(Travel.Value));
            //sheet.GetRow(43).GetCell(2).SetCellValue(Double.Parse(Hotel.Value));
            //sheet.GetRow(44).GetCell(2).SetCellValue(Double.Parse(Other.Value));
            //sheet.GetRow(48).GetCell(2).SetCellValue(Double.Parse(Ribbons_Plaques_Trophies.Value));
            //sheet.GetRow(49).GetCell(2).SetCellValue(Double.Parse(Gifts.Value));

            //// Force formulas to update with new data we added
            //sheet.ForceFormulaRecalculation = true;

            //// Save the NPOI workbook into a memory stream to be sent to the browser, could have saved to disk.
            //MemoryStream ms = new MemoryStream();
            //templateWorkbook.Write(ms);

            return string.Empty;

            // Send the memory stream to the browser
            //ExportDataTableToExcel(ms, "EventExpenseReport.xls");
        }
    }
}
