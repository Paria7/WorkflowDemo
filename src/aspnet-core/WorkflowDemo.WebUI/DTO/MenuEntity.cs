using System.Collections.Generic;
using Newtonsoft.Json;

namespace WorkflowDemo.WebUI.DTO
{
    public class MenuEntity
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }

        [JsonProperty(PropertyName ="title")]
        public string Title { get; set; }

        [JsonProperty(PropertyName="url")]
        public string Url { get; set; }

        [JsonProperty(PropertyName = "icon")]
        public string Icon { get; set; }

        [JsonProperty(PropertyName = "unlinked")]
        public bool Unlinked { get; set; }

        [JsonProperty(PropertyName ="position")]
        public int Position { get; set; }

        [JsonProperty(PropertyName = "items")]
        public List<MenuEntity> Items { get; set; }

        [JsonProperty(PropertyName = "chineseTitle")]
        public string ChineseTitle { get; set; }
    }
}
