using System.Collections.Generic;
using Newtonsoft.Json;

namespace WorkflowDemo.WebUI.Models
{
    public class NavigationItemModel
    {
        public NavigationItemModel()
        {
            Items = new List<NavigationItemModel>();
        }
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }

        [JsonProperty(PropertyName = "title")]
        public string Title { get; set; }
        [JsonProperty(PropertyName = "url")]
        public string Url { get; set; }
        [JsonProperty(PropertyName = "icon")]
        public string Icon { get; set; }
        [JsonProperty(PropertyName = "unlinked")]
        public bool Unlinked { get; set; }
        [JsonProperty(PropertyName = "position")]


        public string FunctionName { get; set; }

        public int Position { get; set; }
        [JsonProperty(PropertyName = "items")]
        public List<NavigationItemModel> Items { get; set; }

        [JsonIgnore]
        public NavigationItemModel Parent { get; set; }
    }
}
