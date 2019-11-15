namespace WorkflowDemo.WebUI.DTO
{
    public class ChangePasswordEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string OldPassword { get; set; }

        public string NewPassword { get; set; }

        public string ConfirmPassword { get; set; }

        public bool Success { get; set; }

        public string Message { get; set; }
    }
}
