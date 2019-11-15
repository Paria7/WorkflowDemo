using System;
using System.Collections.Generic;
using System.Linq;
using WorkflowDemo.WebUI.DTO;
using WorkflowDemo.WebUI.Entities;

namespace WorkflowDemo.WebUI.Repositories
{
    public class SystemRepository
    {

   

        private WorkflowDemoContext Context { get; }
      

        public SystemRepository(WorkflowDemoContext context)
        {
            this.Context = context;
        }
        public List<MenuEntity> GetMenus()
        {

            var menus = new List<MenuEntity>();
            var roots = Context.Menu.Where(d => d.ParentId == null).OrderBy(d => d.Id).ToList();
            menus.AddRange(roots.Select(d => new MenuEntity
            {
                Id = d.Id,
                Title = d.Title,
                Url = d.Url,
                Icon = d.Icon,
                Position = d.Position,
                Unlinked = d.Unlinked
            }));
            menus.ForEach(menu =>
            {
                menu.Items = GetItems(menu.Id, Context.Menu.ToList());
            });
            return menus;

        }

        public List<MenuEntity> GetUserMenus()
        {

            var menus = new List<MenuEntity>();
            var currentLoginUser = Context.User.FirstOrDefault(d => d.Name == RepositoryContext.Current.UserName);
            if (currentLoginUser == null)
            {
                throw new ApplicationException("No login user.");
            }
            var roleUsers = Context.RoleUser.AsQueryable().Where(d => d.UserId == currentLoginUser.Id);
            var userFunctions = Context.RoleFunction.AsQueryable()
                .Where(d => roleUsers.Any(e => e.RoleId == d.RoleId)).Select(d => d.Function);
            var userMenus = Context.Menu.AsQueryable().Where(d =>
                userFunctions.Any(e => e.Id == d.FunctionId) || d.Title.Equals("Home"));
            var roots = Context.Menu.AsQueryable().Where(d =>
                userMenus.Any(e => e.ParentId == d.Id || e.Id == d.Id) && d.ParentId == null);
            menus.AddRange(roots.Select(d => new MenuEntity
            {
                Id = d.Id,
                Title = d.Title,
                ChineseTitle = d.ChineseTitle,
                Url = d.Url,
                Icon = d.Icon,
                Position = d.Position,
                Unlinked = d.Unlinked
            }).ToList());
            menus.ForEach(menu =>
            {
                menu.Items = GetItems(menu.Id, userMenus.ToList());
            });
            return menus;

        }

        //public User GetLoginUser()
        //{
        //    var currentLoginUser = Context.User.FirstOrDefault(d => d.Name == RepositoryContext.Current.UserName);
        //    if (currentLoginUser == null)
        //    {
        //        throw new ApplicationException("No login user.");
        //    }
        //    return currentLoginUser;
        //}
        private List<MenuEntity> GetItems(int parentId, List<Menu> menus)
        {
            var childItems = menus.Where(d => d.ParentId == parentId).OrderBy(d => d.Position).ToList();
            var items = childItems.Select(d => new MenuEntity
            {
                Id = d.Id,
                Title = d.Title,
                ChineseTitle = d.ChineseTitle,
                Url = d.Url,
                Position = d.Position,
                Items = GetItems(d.Id, menus),
                Unlinked = d.Unlinked
            }).ToList();
            return items;
        }

    }
}
