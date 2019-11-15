using System.Collections.Generic;
using System.Linq;

namespace WorkflowDemo.WebUI.Common
{
    public class EntityHelper
    {
        /// <summary>
        /// Copy entity
        /// </summary>
        /// <typeparam name="TSource"></typeparam>
        /// <typeparam name="TTarget"></typeparam>
        /// <param name="source"></param>
        /// <param name="target"></param>
        /// <param name="ignorePoperties"></param>
        /// <returns></returns>
        public static TTarget EntityCopy<TSource, TTarget>(TSource source, TTarget target, string ignorePoperties = "")
        {
            List<string> ignoreP = new List<string>();
            if (!string.IsNullOrEmpty(ignorePoperties))
            {
                ignoreP = ignorePoperties.ToLower().Split(',').ToList();
            }

            ignoreP.Add("entitykey");
            ignoreP.Add("entitystate");
            var tFields = target.GetType().GetProperties();
            var sFields = source.GetType().GetProperties();
            foreach (var item in tFields)
            {
                if (!ignoreP.Contains(item.Name.ToLower()))
                {
                    foreach (var si in sFields)
                    {
                        if (si.Name == item.Name)
                        {
                            object svalue = si.GetValue(source, null);
                            object tvalue = item.GetValue(target, null);
                            if (svalue != null && !svalue.Equals(tvalue))
                            {
                                item.SetValue(target, svalue, null);
                            }
                        }
                    }
                }
            }
            return target;
        }
    }
}
