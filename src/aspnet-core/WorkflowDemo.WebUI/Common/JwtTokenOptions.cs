namespace WorkflowDemo.WebUI.Common
{
    public class JwtTokenOptions
    {
        public string Key { get; set; }

        public string Audience { get; set; }

        public string Issuer { get; set; }

        public int Expires { get; set; }
    }
}
