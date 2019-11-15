using System;

namespace WorkflowDemo.WebUI.Repositories
{
    public class BaseRepository
    {
        protected string NewGuid
        {
            get
            {
                return Guid.NewGuid().ToString();
            }
        }
    }
}
