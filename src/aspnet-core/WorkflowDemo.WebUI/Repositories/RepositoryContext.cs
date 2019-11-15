using System.Threading;

namespace WorkflowDemo.WebUI.Repositories
{
    public class RepositoryContext
    {
        private static AsyncLocal<RepositoryContext> _current = new AsyncLocal<RepositoryContext>();

        public static RepositoryContext Current
        {
            get
            {
                return _current.Value;
            }

            set
            {
               
                _current.Value = value;

            }
        }

        public string UserName { get; set; }
    }
}
