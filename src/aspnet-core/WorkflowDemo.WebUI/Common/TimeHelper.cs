using System;
using System.Collections.Generic;

namespace WorkflowDemo.WebUI.Common
{
    public class TimeHelper
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="beginTimeStr">yyyy.MM</param>
        /// <param name="endTimeStr">yyyy.MM</param>
        /// <returns></returns>
        public static List<string> GetTimeList(string beginTimeStr, string endTimeStr)
        {
            var result = new List<string>();
            var beginTime = FomartTime(beginTimeStr);
            var endTime = FomartTime(endTimeStr);
            for (DateTime dt = beginTime; dt <= endTime; dt = dt.AddMonths(1))
            {
                result.Add(dt.ToString("yyyy.MM"));
            }
            return result;
        }

        private static DateTime FomartTime(string timeStr)
        {
            var timeParts = timeStr.Split('.');
            var year = timeParts[0];
            var month = timeParts[1];
            var dateTime = new DateTime(int.Parse(year), int.Parse(month), 1);
            return dateTime;
        }
    }
}
