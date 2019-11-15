namespace WorkflowDemo.WebUI.DTO
{
    public class FunctionEntity
    {
        public int Id { get; set; }

        public int? MenuId { get; set; }

        public string Name { get; set; }

        public string Group { get; set; }

        public string Description { get; set; }

        public bool Checked { get; set; }

        public string ChineseName { get; set; }

        public int Position { get; set; }
    }
}
