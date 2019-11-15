using System.Collections.Generic;
using System.Linq;
using WorkflowDemo.WebUI.Models;

namespace WorkflowDemo.WebUI.Common
{
    public class NavigationBuilder
    {
        public List<NavigationItemModel> Items { get; } = new List<NavigationItemModel>();

        public NavigationItemModel AddItem(string path, string title, string icon = BoschIcons.Components, bool unlinked = false, string functionName = null, string functionGroup = null, NavigationItemModel parent = null)
        {
            int position = 0;
            var items = parent == null ? this.Items : parent.Items;
            if (items.Count > 0)
            {
                position = Items.Max(p => p.Position) + 1;
            }

            var item = new NavigationItemModel
            {
                Url = path,
                Title = title,
                Icon = icon,
                Unlinked = unlinked,
                Position = position,
                FunctionName = functionName,
                Parent = parent
            };
            items.Add(item);

            return item;
        }
    }
}
