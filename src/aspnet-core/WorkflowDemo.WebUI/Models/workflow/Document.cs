using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Models
{
    public class Document
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int? Number { get; set; }
        public string Comment { get; set; }
        public Guid AuthorId { get; set; }
        public Guid? ManagerId { get; set; }
        public decimal Sum { get; set; }
        public string State { get; set; }
        public string StateName { get; set; }
        //public Employee Author { get; set; }
        //public Employee Manager { get; set; }
    }
}
