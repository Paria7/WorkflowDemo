using WorkflowDemo.WebUI.DTO;

namespace WorkflowDemo.WebUI.Models
{
    /// <summary>
    /// LoginResponseModel
    /// </summary>
    public class LoginResponseModel
    {
        /// <summary>
        /// Success
        /// </summary>
        public bool Success { get; set; }

        /// <summary>
        /// Message
        /// </summary>
        public string Message { get; set; }

        /// <summary>
        /// User
        /// </summary>
        public UserEntity User { get; set; }

        /// <summary>
        /// Token
        /// </summary>
        public string Token { get; set; }

        /// <summary>
        /// RefreshToken
        /// </summary>
        public string RefreshToken { get; set; }
    }
}
