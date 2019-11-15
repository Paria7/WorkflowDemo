using System;
using System.Collections.Generic;
using System.DirectoryServices;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using WorkflowDemo.WebUI.Common;
using WorkflowDemo.WebUI.DTO;
using WorkflowDemo.WebUI.Entities;
using WorkflowDemo.WebUI.Models;

namespace WorkflowDemo.WebUI.Repositories
{
    public class AdminstrationRepository
    {

        private WorkflowDemoContext Context { get; }
        private IConfiguration Configuration { get; }

        public AdminstrationRepository(WorkflowDemoContext context, IConfiguration configuration)
        {
            Context = context;
            Configuration = configuration;
        }

        public List<UserEntity> GetUsers()
        {
            var userRoles = Context.RoleUser.ToList();
            var roles = Context.Role.ToList();
            var userRoleGroup = userRoles.GroupBy(a => a.UserId).Select(b => new
            {
                UserId = b.Key,
                RoleList = b.Select(c => new RoleEntity
                {
                    Id = c.RoleId.Value,
                    Name = roles.FirstOrDefault(d => d.Id == c.RoleId)?.Name,
                    Description = roles.FirstOrDefault(d => d.Id == c.RoleId)?.Description
                }).ToList()
            }).ToList();
            var users = new List<UserEntity>();
            foreach (var user in Context.User.Where(u => u.IsDeleted == false).ToList())
            {
                var userEntity = new UserEntity
                {
                    Id = user.Id,
                    Name = user.Name,
                    Password = user.Password,
                    PasswordSalt = user.PasswordSalt,
                    FirstName = user.FirstName,
                    SecondName = user.SecondName,
                    Mail = user.Mail,
                    MobileNo = user.MobileNo,
                    PhoneNo = user.PhoneNo,
                    EmployeeNo = user.EmployeeNo,
                    Status = user.Status,
                    StatusName = ((UserStatus)user.Status).ToString(),
                    PlantId = user.PlantId,
                    PlantName = "",
                    Roles = userRoleGroup.FirstOrDefault(d => d.UserId == user.Id) == null
                        ? new List<RoleEntity>()
                        : userRoleGroup.FirstOrDefault(d => d.UserId == user.Id).RoleList
                };
                users.Add(userEntity);
            }
            return users;

        }

        public QueryUsersDto QueryUsers(UserInput input)
        {
            var query = from ur in Context.User
                        where !ur.IsDeleted
                        select new { ur };
            if (!string.IsNullOrEmpty(input.EmployeeNo))
            {
                query = query.Where(q => q.ur.EmployeeNo.Contains(input.EmployeeNo.Trim()));
            }
            if (!string.IsNullOrEmpty(input.Name))
            {
                query = query.Where(q => q.ur.Name.Contains(input.Name.Trim()));
            }

            var response = new QueryUsersDto
            {
                TotalCount = query.Count()
            };

            var users = query.Skip((input.PageIndex - 1) * input.PageSize)
                .Take(input.PageSize).OrderBy(q => q.ur.EmployeeNo).AsNoTracking().ToList();

            var dtos = users.Select(e =>
            {
                var dto = Mapper.Map<User, UserEntity>(e.ur);

                return dto;
            }).ToList();
            response.Dtos = dtos;

            return response;
        }

        public UserEntity SaveUser(UserEntity entity)
        {
            User user;
            if (entity.Id == 0)
            {
                if (Context.User.Where(u => u.IsDeleted == false).FirstOrDefault(d => d.Name.Equals(entity.Name)) != null)
                    new ValidationResultModel(ErrorCodeConstants.User_WithSameNameExisted,
                        "The user with same name already exists!").Throw();

                if (Context.User.Where(u => u.IsDeleted == false).FirstOrDefault(d => d.EmployeeNo.Equals(entity.EmployeeNo)) != null)
                    new ValidationResultModel(ErrorCodeConstants.User_WithSameEmployeeNoExisted,
                        "The user with same employee no already exists!").Throw();

                user = new User();
                Context.User.Add(user);
                //entity.Password = AutoGeneratePassword(6);

                user.Password = Configuration.GetSection("UserConfigKeys")["FirstTimePassword"];
                user.PasswordSalt = Configuration.GetSection("UserConfigKeys")["FirstTimePasswordSalt"];
            }
            else
            {
                if (Context.User.Where(u => u.IsDeleted == false).FirstOrDefault(u => u.Name == entity.Name && u.Id != entity.Id) != null)
                {
                    new ValidationResultModel(ErrorCodeConstants.User_WithSameNameExisted,
                        "The user with same name already exists!").Throw();
                }
                if (Context.User.Where(u => u.IsDeleted == false).FirstOrDefault(u => u.EmployeeNo == entity.EmployeeNo && u.Id != entity.Id) != null)
                {
                    new ValidationResultModel(ErrorCodeConstants.User_WithSameEmployeeNoExisted,
                        "The user with same employee no already exists!").Throw();
                }

                user = Context.User.Find(entity.Id);
            }
            var userRoles = Context.RoleUser.Where(d => d.UserId == user.Id).ToList();
            var deletedRoles = userRoles.Where(d => entity.Roles.All(a => a.Id != d.RoleId)).ToList();
            var addedRoles = entity.Roles.Where(d => userRoles.All(a => a.RoleId != d.Id)).ToList();
            Context.RoleUser.RemoveRange(deletedRoles);
            Context.RoleUser.AddRange(addedRoles.Select(role =>
                new RoleUser { RoleId = role.Id, UserId = user.Id }));
            user.Name = entity.Name;
            //user.Password = entity.Password;
            //user.PasswordSalt = entity.PasswordSalt;
            user.FirstName = entity.FirstName;
            user.SecondName = entity.SecondName;
            user.Mail = entity.Mail;
            user.MobileNo = entity.MobileNo;
            user.PhoneNo = entity.PhoneNo;
            user.EmployeeNo = entity.EmployeeNo;
            user.Status = entity.Status;
            user.PlantId = entity.PlantId;
            Context.SaveChanges();
            return new UserEntity
            {
                Id = user.Id,
                Name = user.Name,
                Password = user.Password,
                PasswordSalt = user.PasswordSalt,
                FirstName = user.FirstName,
                SecondName = user.SecondName,
                Mail = user.Mail,
                MobileNo = user.MobileNo,
                PhoneNo = user.PhoneNo,
                Roles = entity.Roles
            };

        }

        public UserEntity GetLoginUserInfo()
        {

            var currentLoginUser = Context.User.FirstOrDefault(d => d.Name == RepositoryContext.Current.UserName);
            if (currentLoginUser == null)
            {
                new ValidationResultModel(ErrorCodeConstants.User_NotLogin,
                    "No login user.").Throw();
            }
            return new UserEntity
            {
                Id = currentLoginUser.Id,
                Password = currentLoginUser.Password,
                PasswordSalt = currentLoginUser.PasswordSalt,
                Name = currentLoginUser.Name,
                FirstName = currentLoginUser.FirstName,
                SecondName = currentLoginUser.SecondName,
                Mail = currentLoginUser.Mail,
                MobileNo = currentLoginUser.MobileNo,
                PhoneNo = currentLoginUser.PhoneNo
            };

        }

        public void RemoveUser(string userId)
        {
            int id = 0;
            if (int.TryParse(userId, out int i))
            {
                id = int.Parse(userId);
            }
            //var userRoles = Context.RoleUser.Where(d => d.UserId == id).ToList();
            //Context.RoleUser.RemoveRange(userRoles);
            var user = Context.User.Find(id);
            user.IsDeleted = true;
            //Context.User.Remove(user);
            Context.SaveChanges();
        }

        public List<RoleEntity> GetRoles()
        {

            return Context.Role.Select(p => new RoleEntity
            {
                Id = p.Id,
                Code = p.Code,
                Name = p.Name,
                Description = p.Description
            }).ToList();

        }

        public RoleEntity SaveRole(RoleEntity entity)
        {
            Role role;
            if (entity.Id == 0)
            {
                if (Context.Role.Any(r => r.Name.Equals(entity.Name)))
                    new ValidationResultModel(ErrorCodeConstants.Role_WithSameNameExisted,
                        "The role with same name already exists!").Throw();

                if (Context.Role.Any(r => r.Code.Equals(entity.Code)))
                    new ValidationResultModel(ErrorCodeConstants.Role_WithSameCodeExisted,
                        "The role with same code already exists!").Throw();

                role = new Role();
            }
            else
            {
                if (Context.Role.Any(r => r.Name.Equals(entity.Name) && r.Id != entity.Id))
                    new ValidationResultModel(ErrorCodeConstants.Role_WithSameNameExisted,
                        "The role with same name already exists!").Throw();

                if (Context.Role.Any(r => r.Code.Equals(entity.Code) && r.Id != entity.Id))
                    new ValidationResultModel(ErrorCodeConstants.Role_WithSameCodeExisted,
                        "The role with same code already exists!").Throw();

                role = Context.Role.Find(entity.Id);
            }
            role.Code = entity.Code;
            role.Name = entity.Name;
            role.Description = entity.Description;
            if (entity.Id == 0)
                Context.Role.Add(role);
            else
                Context.Role.Update(role);

            Context.SaveChanges();
            return new RoleEntity
            {
                Id = role.Id,
                Code = role.Code,
                Name = role.Name,
                Description = role.Description
            };

        }

        public void RemoveRole(string id)
        {
            int roleId = int.Parse(id);
            if (Context.RoleUser.Any(p => p.RoleId == roleId))
                new ValidationResultModel(ErrorCodeConstants.Role_IsBeingUsed,
                    "The role can not be deleted, because the role is already being used!").Throw();

            var role = Context.Role.Find(roleId);
            var roleFunctions = Context.RoleFunction.Where(f => f.RoleId == roleId).ToList();
            Context.RoleFunction.RemoveRange(roleFunctions);
            Context.Role.Remove(role);
            Context.SaveChanges();
        }

        public List<FunctionGroupEntity> GetFunctionGroups()
        {

            var functionGroups = Context.Function.GroupBy(a => a.Group).Select(b => new FunctionGroupEntity
            {
                GroupName = b.Key,
                ChineseGroupName = b.FirstOrDefault(g => g.Group == b.Key).ChineseGroup,
                FunctionList = b.Select(c => new FunctionEntity
                {
                    Id = c.Id,
                    Name = c.Name,
                    ChineseName = c.ChineseName,
                    Group = c.Group,
                    Description = c.Description,
                    Position = c.Position
                }).OrderBy(f => f.Position).ToList()
            }).ToList();
            return functionGroups;

        }

        public List<FunctionGroupEntity> GetFunctionGroupsByRole(int roleId)
        {

            var roleFunctionList = Context.RoleFunction.Where(d => d.RoleId == roleId).ToList();
            var role = Context.Role.FirstOrDefault(d => d.Id == roleId);
            var functionGroups = Context.Function.GroupBy(a => a.Group).Select(b => new FunctionGroupEntity
            {
                Role = new RoleEntity
                {
                    Id = role.Id,
                    Name = role.Name,
                    Description = role.Description
                },
                GroupName = b.Key,
                ChineseGroupName = b.FirstOrDefault(g => g.Group == b.Key).ChineseGroup,
                FunctionList = b.Select(c => new FunctionEntity
                {
                    Id = c.Id,
                    ChineseName = c.ChineseName,
                    Name = c.Name,
                    Group = c.Group,
                    Description = c.Description
                }).OrderBy(f => f.Position).ToList()
            }).ToList();
            functionGroups.ForEach(functionGroup =>
            {
                functionGroup.FunctionList.ForEach(function =>
                {
                    function.Checked = roleFunctionList.Any(d => d.FunctionId == function.Id);
                });
            });
            return functionGroups;

        }

        public int SaveRoleFunctions(List<FunctionGroupEntity> functionGroupEntities)
        {

            var role = Context.Role.ToList().FirstOrDefault(d => d.Id == functionGroupEntities.First().Role.Id);
            if (role == null) return 0;
            var roleFunctionList = Context.RoleFunction.Where(d => d.RoleId == role.Id).ToList();
            var currentFunctionList = functionGroupEntities.SelectMany(a => a.FunctionList.Where(d => d.Checked).Select(b =>
                  new RoleFunction
                  {
                      RoleId = role.Id,
                      FunctionId = b.Id
                  }).ToList()).ToList();
            var addFunctionList = currentFunctionList.Where(d =>
                roleFunctionList.All(e => e.RoleId != d.RoleId || e.FunctionId != d.FunctionId)).ToList();
            var deleteFunctionList = roleFunctionList.Where(d =>
                currentFunctionList.All(e => e.RoleId != d.RoleId || e.FunctionId != d.FunctionId)).ToList();
            Context.RoleFunction.RemoveRange(deleteFunctionList);
            //var id = Context.RoleFunction.Count() == 0 ? 1 : Context.RoleFunction.Max(a => a.Id) + 1;
            addFunctionList.ForEach(function =>
            {
                //function.Id = id++;
                Context.RoleFunction.Add(function);
            });
            return Context.SaveChanges();

        }

        public List<UserEntity> GetUserAdAccount(string userInfo)
        {
            var ldapUrl = Configuration.GetSection("SystemConfigKeys")["LdapUrl"];
            var ldapUserName = Configuration.GetSection("SystemConfigKeys")["LdapUserName"];
            var ldapPassword = Configuration.GetSection("SystemConfigKeys")["LdapPassword"];

            var user = new UserEntity();
            var users = new List<UserEntity>();
            try
            {
                var adminEntry = new DirectoryEntry(ldapUrl, ldapUserName, ldapPassword);
                var search = new DirectorySearcher(adminEntry);
                if (userInfo != null && userInfo.Contains("@"))
                {
                    search.Filter = $"(&(objectClass=user)(mail={userInfo}))";
                }
                else
                {
                    search.Filter = $"(&(objectClass=user)(sAMAccountName={userInfo}))";
                }
                search.SearchScope = SearchScope.Subtree;

                var properties = this.GetLDAPProperties();
                foreach (string p in properties)
                {
                    search.PropertiesToLoad.Add(p);
                }

                var result = search.FindOne();
                if (result == null)
                {
                    new ValidationResultModel(ErrorCodeConstants.User_IsNotExisted,
                        "The user who you search does not exist!").Throw();
                }

                if (result.Properties.Contains("samAccountName") && result.Properties["samAccountName"] != null &&
                    result.Properties["samAccountName"][0] != null)
                {
                    user.Name = result.Properties["samAccountName"][0].ToString();
                }

                if (result.Properties.Contains("givenname") && result.Properties["givenname"] != null &&
                    result.Properties["givenname"][0] != null)
                {
                    user.FirstName = result.Properties["givenname"][0].ToString();
                }

                if (result.Properties.Contains("sn") && result.Properties["sn"] != null &&
                    result.Properties["sn"][0] != null)
                {
                    user.SecondName = result.Properties["sn"][0].ToString();
                }

                if (result.Properties.Contains("mail") && result.Properties["mail"] != null &&
                    result.Properties["mail"][0] != null)
                {
                    user.Mail = result.Properties["mail"][0].ToString();
                }
            }
            catch (Exception e)
            {
                new ValidationResultModel(ErrorCodeConstants.User_IsNotExisted,
                    "The user who you search does not exist!").Throw();
            }
            users.Add(user);
            return users;
        }

        #region private methods

        private string AutoGeneratePassword(int length)
        {
            Random random = new Random();
            var ret = "";
            var n = 0;
            while (n < length)
            {
                ret += random.Next(9).ToString();
                n++;
            }
            return ret;
        }

        private string[] GetLDAPProperties()
        {
            return new string[]
            {
                "accountexpires",
                "samAccountName",
                "mail",
                "sn",
                "givenname",
            };
        }

        #endregion
    }
}
