using System.Linq;
using WorkflowDemo.WebUI.DTO;
using WorkflowDemo.WebUI.Entities;

namespace WorkflowDemo.WebUI.Repositories
{
    public class AuthRepository
    {
        private WorkflowDemoContext Context { get; }


        public AuthRepository(WorkflowDemoContext context)
        {
            this.Context = context;
        }

        public UserEntity GetUserByName(string name)
        {
            //            var s = Context.User.Take(10).ToList();

            var user = Context.User.Where(p => p.IsDeleted == false && p.Name == name
            && p.Status == (int)Common.UserStatus.Active).Select(p => new UserEntity
            {
                Id = p.Id,
                Password = p.Password,
                PasswordSalt = p.PasswordSalt,
                Name = p.Name,
                ExpireDate = p.ExpirationDate,
                EmployeeNo = p.EmployeeNo ?? string.Empty
            }).FirstOrDefault();

            return user;

        }

        public UserEntity GetUserByEmployeeNo(string employeeNo)
        {
            //            var s = Context.User.Take(10).ToList();

            var user = Context.User.Where(p => p.EmployeeNo == employeeNo
            && p.Status == (int)Common.UserStatus.Active).Select(p => new UserEntity
            {
                Id = p.Id,
                Password = p.Password,
                PasswordSalt = p.PasswordSalt,
                Name = p.Name,
                ExpireDate = p.ExpirationDate,
                EmployeeNo = p.EmployeeNo ?? string.Empty
            }).FirstOrDefault();

            return user;

        }
    }
}
