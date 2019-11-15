using System;
using System.Collections.Generic;

namespace WorkflowDemo.WebUI.Models
{
    /// <summary>
    /// SWD 17.33 (208/12), 25.5 (306/12), 27.5 (330/12) 
    /// </summary>
    public class SWDConfigModel
    {
        public static Dictionary<int, SWDStandard> SWDStandards { get; set; }

        static SWDConfigModel()
        {
            SWDStandards = new Dictionary<int, SWDStandard>();
            SWDStandards.Add(28, new SWDStandard()
            {
                DaysInMonth = 28,
                LevelOne = 21.48M,
                LevelTwo = 23.47M,
                LevelThree = 25.32M,
            });
            SWDStandards.Add(29, new SWDStandard()
            {
                DaysInMonth = 29,
                LevelOne = 22.25M,
                LevelTwo = 24.31M,
                LevelThree = 26.22M,
            });
            SWDStandards.Add(30, new SWDStandard()
            {
                DaysInMonth = 30,
                LevelOne = 23.01M,
                LevelTwo = 25.15M,
                LevelThree = 27.12M,
            });
            SWDStandards.Add(31, new SWDStandard()
            {
                DaysInMonth = 31,
                LevelOne = 23.78M,
                LevelTwo = 25.99M,
                LevelThree = 28.03M,
            });
        }

        public static int GetDaysInMonth(string date)
        {
            var array = date.Split(".");
            var year = int.Parse(array[0]);
            var month = int.Parse(array[1]);
            return DateTime.DaysInMonth(year, month);
        }

        public static decimal GetNextLevel(int daysInMonth, decimal current)
        {
            var standard = GetStandard(daysInMonth);

            if (current == standard.LevelOne)
                return standard.LevelTwo;
            return standard.LevelThree;
        }

        public static bool IsMaxLevel(int daysInMonth, decimal current)
        {
            var standard = GetStandard(daysInMonth);
            return current == standard.LevelThree;
        }

        public static SWDStandard GetStandard(int daysInMonth)
        {
            var standard = SWDStandards[daysInMonth];

            if (standard == null)
            {
                throw new Exception("can not find standard.");
            }

            return standard;
        }

        public static SWDStandard GetStandard(string date)
        {
            var daysInMonth = GetDaysInMonth(date);
            return GetStandard(daysInMonth);
        }
    }

    public class SWDStandard
    {
        public int DaysInMonth { get; set; }
        public decimal LevelOne { get; set; }
        public decimal LevelTwo { get; set; }
        public decimal LevelThree { get; set; }
    }
}
