using System;
using System.Collections.Generic;
using System.DirectoryServices;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WorkflowDemo.WebUI.Common;
using WorkflowDemo.WebUI.DTO;
using WorkflowDemo.WebUI.Models;
using WorkflowDemo.WebUI.Repositories;

namespace WebUI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        #region Private Properties

        private AuthRepository Repository { get; }
        private IConfiguration Configuration { get; }
        private RegistrationRepository RegRepository { get; }
        private AdminstrationRepository AdminRepository { get; }

        public AuthController(AuthRepository repository, AdminstrationRepository adminstrationRepository,
            RegistrationRepository registrationRepository, IConfiguration configuration)
        {
            Repository = repository;
            Configuration = configuration;
            RegRepository = registrationRepository;
            AdminRepository = adminstrationRepository;
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// do SHA encrypt
        /// </summary>
        /// <param name="password">password</param>
        /// <param name="passowrdSalt">passwordSalt</param>
        /// <returns>encrypt result</returns>
        private string SHA_Encrypt(string password, string passowrdSalt)
        {
            HMACSHA256 hmac = new HMACSHA256(Convert.FromBase64String(passowrdSalt));
            var encryptPassword = Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes(password)));
            return encryptPassword;
        }

        /// <summary>
        /// do login
        /// </summary>
        /// <param name = "entity" > LoginEntity </param>
        /// <returns> login result</returns>
        [HttpPost]
        public ActionResult<LoginResponseModel> LoginOld([FromBody]LoginEntity entity)
        {
            LoginResponseModel model = new LoginResponseModel();

            bool loginSuccess = false;
            var exsitsUser = this.Repository.GetUserByName(entity.UserName);
            if (exsitsUser != null)
            {
                if (string.IsNullOrEmpty(exsitsUser.PasswordSalt))
                    loginSuccess = exsitsUser.Password == entity.Password;
                else
                {
                    var encryptPassword = SHA_Encrypt(entity.Password, exsitsUser.PasswordSalt);
                    loginSuccess = exsitsUser.Password == encryptPassword;
                }
            }

            if (loginSuccess)
            {
                HttpContext.SignIn(exsitsUser.Name, exsitsUser.EmployeeNo);
                model.Success = true;
                model.User = exsitsUser;
            }
            else
            {
                model.Success = false;
                model.Message = "Username or password is invalid";
            }

            return Ok(model);
        }


        /// <summary>
        /// LoginByAd
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult<LoginResponseModel> Login([FromBody] LoginEntity entity)
        {
            var model = new LoginResponseModel();
            var loginSuccess = false;
            var userName = entity.UserName.Trim();
            var password = entity.Password.Trim();

            var exsitsUser = this.Repository.GetUserByName(entity.UserName);
            var exsitsUserByEmployee = this.Repository.GetUserByEmployeeNo(entity.UserName);

            Action loginByAd = () =>
            {
                try
                {
                    exsitsUser = LoginByLpad(userName, password);
                    loginSuccess = true;
                }
                catch
                {
                    loginSuccess = false;
                }
            };

            if (exsitsUser == null && exsitsUserByEmployee == null)
            {
                loginByAd();
            }
            else if (exsitsUser != null)
            {
                if (string.IsNullOrEmpty(exsitsUser.PasswordSalt)
                    && string.IsNullOrEmpty(exsitsUser.Password))
                {
                    loginByAd();
                }
                else if (string.IsNullOrEmpty(exsitsUser.PasswordSalt))
                {
                    loginSuccess = exsitsUser.Password == entity.Password;
                }
                else
                {
                    var encryptPassword = SHA_Encrypt(entity.Password, exsitsUser.PasswordSalt);
                    loginSuccess = exsitsUser.Password == encryptPassword;
                }
            }
            else
            {
                var encryptPassword = SHA_Encrypt(entity.Password, exsitsUserByEmployee.PasswordSalt);
                loginSuccess = exsitsUserByEmployee.Password == encryptPassword;
            }

            if (loginSuccess)
            {
                model.Success = true;
                if (exsitsUser != null)
                {
                    HttpContext.SignIn(exsitsUser.Name, exsitsUser.EmployeeNo);
                    model.User = exsitsUser;
                }
                else
                {
                    HttpContext.SignIn(exsitsUserByEmployee.Name, exsitsUserByEmployee.EmployeeNo);
                    model.User = exsitsUserByEmployee;
                }
            }
            else
            {
                model.Success = false;
                model.Message = "Username or password is invalid";
            }
            //            Response.Headers["token"] = "1233";
            return Ok(model);

        }

        private UserEntity LoginByLpad(string username, string password)
        {
            var ldapUrl = Configuration.GetSection("SystemConfigKeys")["LdapUrl"];
            var ldapUserName = Configuration.GetSection("SystemConfigKeys")["LdapUserName"];
            var ldapPassword = Configuration.GetSection("SystemConfigKeys")["LdapPassword"];

            var firstName = "";
            var secondName = "";
            var userMail = "";
            try
            {
                var adminEntry = new DirectoryEntry(ldapUrl, ldapUserName, ldapPassword);
                var search = new DirectorySearcher(adminEntry);
                if (username != null && username.Contains("@"))
                {
                    search.Filter = $"(&(objectClass=user)(mail={username}))";
                }
                else
                {
                    search.Filter = $"(&(objectClass=user)(sAMAccountName={username}))";
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
                    throw new Exception("UserNotFound");
                }

                if (result.Properties.Contains("samAccountName") && result.Properties["samAccountName"] != null && result.Properties["samAccountName"][0] != null)
                {
                    username = result.Properties["samAccountName"][0].ToString();
                }

                if (result.Properties.Contains("givenname") && result.Properties["givenname"] != null && result.Properties["givenname"][0] != null)
                {
                    firstName = result.Properties["givenname"][0].ToString();
                }

                if (result.Properties.Contains("sn") && result.Properties["sn"] != null && result.Properties["sn"][0] != null)
                {
                    secondName = result.Properties["sn"][0].ToString();
                }

                if (result.Properties.Contains("mail") && result.Properties["mail"] != null && result.Properties["mail"][0] != null)
                {
                    userMail = result.Properties["mail"][0].ToString();
                }
            }
            catch (Exception e)
            {
                throw new Exception("LoginError", e);
            }


            try
            {
                var userEntry = new DirectoryEntry(ldapUrl, username, password);
                if (userEntry.Properties.Count <= 0)
                {
                    throw new Exception("UserNotFound");
                }


                var exsitsUser = this.Repository.GetUserByName(username);
                if (exsitsUser == null)
                {
                    exsitsUser = CreateAdUser(username, password, userMail, firstName, secondName);
                }

                return exsitsUser;
            }
            catch (DirectoryServicesCOMException e)
            {
                throw new Exception("PasswordError", e);
            }
            catch (Exception e)
            {
                throw new Exception("LoginError", e);
            }
        }

        #endregion

        #region Private Methods

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

        private UserEntity CreateAdUser(string username, string password, string mail, string firstName, string secondName)
        {
            var normalUserRole = new RoleEntity()
            {
                Id = 3
            };

            var userEntity = new UserEntity()
            {
                Name = username,
                FirstName = firstName,
                SecondName = secondName,
                Mail = mail,
                Password = string.Empty, //password,
                Roles = new List<RoleEntity>() { normalUserRole }
            };
            userEntity = AdminRepository.SaveUser(userEntity);

            return userEntity;
        }

        #endregion
    }
}