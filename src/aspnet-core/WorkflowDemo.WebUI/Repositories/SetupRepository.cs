using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using WorkflowDemo.WebUI.Common;
using WorkflowDemo.WebUI.Entities;
using WorkflowDemo.WebUI.Models;

namespace WorkflowDemo.WebUI.Repositories
{
    public class SetupRepository
    {
        private WorkflowDemoContext Context { get; }

        public SetupRepository(WorkflowDemoContext context)
        {
            Context = context;
        }

        public void InitFuntionMenu()
        {
            var naviationItems = this.GetNavigationItems();

            var functions = this.GetFuntions();
            while (Context.Menu.Count() > 0)
            {
                var menus = Context.Menu.Where(p => p.InverseParent.Count == 0).ToList();
                Context.RemoveRange(menus);
                Context.SaveChanges();
            }

            foreach (var menu in Context.Menu.ToList())
            {
                if (!IsValidNavigationItem(naviationItems, menu.Url))
                {
                    Context.Menu.Remove(menu);
                }
            }
            Context.SaveChanges();

            var functionNames = functions.Select(p => p.Name).ToList();
            foreach (var function in Context.Function.Select(p => p).Include(p => p.RoleFunction).ToList())
            {
                if (!functions.Where(f => f.Name == function.Name).Any())
                {

                    function.RoleFunction.ToList().ForEach(rf =>
                    {
                        Context.RoleFunction.Remove(rf);
                    });
                    Context.SaveChanges();
                    Context.Function.Remove(function);
                    Context.SaveChanges();
                }
            }

            functions.ForEach(f =>
           {
               var function = Context.Function.Where(p => p.Name == f.Name).FirstOrDefault();
               if (function == null)
               {
                   function = new Function { Name = f.Name };
                   Context.Function.Add(function);

               }
               function.Group = f.Group;
               function.Description = f.Description;
           });
            Context.SaveChanges();
            naviationItems.ForEach(i => { UpdateMenuAsync(i); });
            //Context.SaveChanges();
        }

        private void UpdateMenuAsync(NavigationItemModel item, Menu parent = null)
        {
            var menu = new Menu
            {
                Url = item.Url
            };
            Context.Menu.Add(menu);
            menu.Parent = parent;

            menu.Title = item.Title;
            menu.Position = item.Position;
            menu.Icon = item.Icon;
            menu.FunctionId = Context.Function.Where(p => p.Name == item.FunctionName).Select(p => (int?)p.Id).FirstOrDefault();
            Context.SaveChanges();
            item.Items?.ForEach(i =>
            {
                UpdateMenuAsync(item, parent);
            });

        }

        private bool IsValidNavigationItem(List<NavigationItemModel> items, string url)
        {
            if (items == null || items.Count == 0) return false;
            foreach (var item in items)
            {
                if (String.Equals(item.Url, url, StringComparison.OrdinalIgnoreCase)) return true;
                if (IsValidNavigationItem(item.Items, url)) return true;
            }
            return false;
        }

        private List<NavigationItemModel> GetNavigationItems()
        {
            NavigationBuilder nb = new NavigationBuilder();
            nb.AddItem("/", "Home", icon: BoschIcons.Home);

            //Base Config
            var mesLineConfig = nb.AddItem("base-config", "Base Config", unlinked: true);
            nb.AddItem("plant", "Plant", functionName: FunctionNames.Plant, parent: mesLineConfig);
            nb.AddItem("line", "Line", functionName: FunctionNames.Line, parent: mesLineConfig);
            nb.AddItem("route", "Route", functionName: FunctionNames.Route, parent: mesLineConfig);

            //Administration
            var adminstration = nb.AddItem("administration", "Administration", unlinked: true);
            nb.AddItem("user-management", "User Management", functionName: FunctionNames.UserManagement, parent: adminstration);
            nb.AddItem("role-management", "Role Management", functionName: FunctionNames.RoleManagement, parent: adminstration);
            nb.AddItem("access-control", "Access Control", functionName: FunctionNames.AccessControl, parent: adminstration);
            nb.AddItem("system-parameter", "System Parameter", functionName: FunctionNames.SystemParameter, parent: adminstration);

            return nb.Items;
        }

        private List<FunctionModel> GetFuntions()
        {
            List<FunctionModel> list = new List<FunctionModel>();

            list.Add(new FunctionModel { Name = FunctionNames.Plant, Group = FunctionGroups.BaseConfig, Description = "Plant" });
            list.Add(new FunctionModel { Name = FunctionNames.Line, Group = FunctionGroups.BaseConfig, Description = "Line" });
            list.Add(new FunctionModel { Name = FunctionNames.Route, Group = FunctionGroups.BaseConfig, Description = "Line" });

            list.Add(new FunctionModel { Name = FunctionNames.UserManagement, Group = FunctionGroups.Administration, Description = "User Management" });
            list.Add(new FunctionModel { Name = FunctionNames.RoleManagement, Group = FunctionGroups.Administration, Description = "Role Management" });
            list.Add(new FunctionModel { Name = FunctionNames.AccessControl, Group = FunctionGroups.Administration, Description = "Access Control" });

            return list;
        }
    }
}
