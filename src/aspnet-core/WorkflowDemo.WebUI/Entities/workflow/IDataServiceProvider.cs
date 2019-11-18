using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Entities
{
    public interface IDataServiceProvider
    {
        T Get<T>();
    }
}
