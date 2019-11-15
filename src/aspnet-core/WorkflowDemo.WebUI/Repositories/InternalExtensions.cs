using System;

namespace WorkflowDemo.WebUI.Repositories
{
    internal static class InternalExtensions
    {
        public static void SetValue(this Object obj, string name, object val)
        {
            var property = obj.GetType().GetProperty(name);
            property?.SetValue(obj, val);
        }
    }
}
