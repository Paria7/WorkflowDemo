using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkflowDemo.WebUI.Entities;
using WorkflowDemo.WebUI.Repositories;

namespace WorkflowDemo.WebUI.Services
{
    public class FlowInstanceService
    {
        private readonly IRepository<FlowInstance> flowInstanceRepository;

        public FlowInstanceService(IRepository<FlowInstance> flowInstanceRepository)
        {
            this.flowInstanceRepository = flowInstanceRepository;
        }
    }
}
