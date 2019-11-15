using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Common
{
    public class EnumHelper
    {
        /// <summary>
        /// 根据枚举类型+枚举字段名称获取描述
        /// </summary>
        /// <param name="enumName">枚举字段名称</param>
        /// <returns>描述</returns>
        public static string GetDescriptionByName<T>(string enumName)
        {
            if (!typeof(T).IsEnum)
            {
                throw new ArgumentException("只能使用枚举类型！");
            }

            try
            {
                FieldInfo field = typeof(T).GetField(enumName);
                DescriptionAttribute descAttr =
                    Attribute.GetCustomAttribute(field, typeof(DescriptionAttribute)) as DescriptionAttribute;
                return descAttr.Description;
            }
            catch (Exception ex)
            {
                return enumName.ToString();
            }
        }

        /// <summary>
        /// 根据枚举类型+枚举值获取枚举描述
        /// </summary>
        /// <param name="value">value只能是int类型，不管是int16，还是int64（因为枚举值只能是这几个类型）</param>
        /// <returns></returns>
        public static string GetDescriptionByValue<T>(object value)
        {
            if (!typeof(T).IsEnum)
            {
                throw new ArgumentException("只能使用枚举类型！");
            }

            try
            {
                FieldInfo field = typeof(T).GetField(Enum.GetName(typeof(T), value)); //需要先用Enum.GetName(typeof(T), value) 获取字段名称
                DescriptionAttribute descAttr =
                    Attribute.GetCustomAttribute(field, typeof(DescriptionAttribute)) as DescriptionAttribute;
                return descAttr.Description;
            }
            catch (Exception ex)
            {
                return value.ToString();
            }
        }

        /// <summary>
        /// 根据枚举类型获取所有字段+值
        /// </summary>
        /// <returns>枚举描述</returns>
        public static Dictionary<string, int> GetEnumValueAndDescList<T>()
        {
            if (!typeof(T).IsEnum)
            {
                throw new ArgumentException("只能使用枚举类型！");
            }

            try
            {
                var dic = new Dictionary<string, int>();
                var arr = Enum.GetValues(typeof(T));
                foreach (var item in arr)
                {
                    //Console.WriteLine(string.Format("----------3、枚举字段为：{0},值为{1}", item.ToString(), (Int32)item));
                    if (!dic.ContainsKey(item.ToString()))
                    {
                        dic.Add(item.ToString(), (Int32) item);
                    }
                }

                return dic;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        /// 根据枚举name前缀查询对应的value，
        /// </summary>
        /// <param name="namePrefix">前缀，注意使用的枚举前缀不能有相同的</param>
        /// <returns>枚举描述</returns>
        public static int GetEnumValueByNamePrefix<T>(string namePrefix)
        {
            var enums = GetEnumValueAndDescList<T>();
            var firstMatch = enums.Keys.FirstOrDefault(x => x.StartsWith(namePrefix, StringComparison.CurrentCultureIgnoreCase));
            if (firstMatch == null)
                return -1;
            var value = enums[firstMatch];
            return value;
        }
    }
}