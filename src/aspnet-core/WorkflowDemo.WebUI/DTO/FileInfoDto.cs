using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.DTO
{
    public class FileInfoDto
    {
        public string FileName { get; set; }

        public string FileData { get; set; }

        public int Size { get; set; }

        public string Type { get; set; }
    }
}
