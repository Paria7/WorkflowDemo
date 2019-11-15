using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using WorkflowDemo.WebUI.DTO;
using WorkflowDemo.WebUI.Entities;

namespace WorkflowDemo.WebUI.Repositories
{
    public class RegistrationRepository
    {
        private WorkflowDemoContext Context { get; }


        public RegistrationRepository(WorkflowDemoContext context)
        {
            this.Context = context;
        }

       
        public string SHA_Encrypt(string password, string passowrdSalt)
        {
            HMACSHA256 hmac = new HMACSHA256(Convert.FromBase64String(passowrdSalt));
            var encryptPassword = Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes(password)));
            return encryptPassword;
        }
        public RegistrationEntity RegisterUser(RegistrationEntity entity)
        {

            entity.Success = true;
            if (Context.User.FirstOrDefault(d => d.Name.Equals(entity.UserName)) != null)
            {
                entity.Success = false;
                entity.Message = "The user with same name already exists!";
                return entity;
            }
            var passwordSalt = Guid.NewGuid().ToString();
            byte[] bytes = Encoding.Default.GetBytes(passwordSalt);
            //转成 Base64 形式的 System.String  
            passwordSalt = Convert.ToBase64String(bytes);
            var user = new User
            {
                Name = entity.UserName,
                Password = SHA_Encrypt(entity.Password, passwordSalt),
                PasswordSalt = passwordSalt,
                FirstName = entity.FirstName,
                SecondName = entity.SecondName,
                Mail = entity.Mail,
                MobileNo = entity.MobileNo,
                PhoneNo = entity.MobileNo
            };
            Context.User.Add(user);
            Context.SaveChanges();
            entity.Password = user.Password;
            return entity;

        }

        public ChangePasswordEntity ChangePassword(ChangePasswordEntity entity)
        {

            var user = Context.User.FirstOrDefault(d => d.Id == entity.Id);
            if (user != null)
            {
                if (entity.OldPassword != null && !ValidateUserPassword(user, entity.OldPassword))
                {
                    entity.Success = false;
                    entity.Message = "The old password is not correct!";
                    return entity;
                }
                if (string.IsNullOrEmpty(user.PasswordSalt))
                {
                    var passwordSalt = Guid.NewGuid().ToString();
                    byte[] bytes = Encoding.Default.GetBytes(passwordSalt);
                    //转成 Base64 形式的 System.String  
                    passwordSalt = Convert.ToBase64String(bytes);
                    user.PasswordSalt = passwordSalt;
                }
                user.Password = SHA_Encrypt(entity.NewPassword, user.PasswordSalt);
                user.UpdatedOn = DateTime.Now;
                Context.SaveChanges();
                entity.NewPassword = user.Password;
                entity.ConfirmPassword = user.Password;
                entity.Success = true;
            }
            else
            {
                entity.Success = false;
                entity.Message = "The user does not exist!";
            }
            return entity;

        }

        private bool ValidateUserPassword(User user, string oldPassword)
        {
            if (user.PasswordSalt == "")
            {
                return user.Password.Equals(oldPassword);

            }

            var oldPasswordEncrypt = user.Password;
            var confirmPasswordEncrypt = SHA_Encrypt(oldPassword, user.PasswordSalt);
            return oldPasswordEncrypt.Equals(confirmPasswordEncrypt);

        }
    }
}
