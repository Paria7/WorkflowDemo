using Hangfire;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkflowDemo.WebUI.DTO;
using WorkflowDemo.WebUI.Entities;
using WorkflowDemo.WebUI.Repositories;

namespace WorkflowDemo.WebUI.Services
{
    public class FlowSchemeService
    {
        private readonly IRepository<FlowScheme> _flowSchemeRepository;

        public FlowSchemeService(IRepository<FlowScheme> flowSchemeRepository)
        {
            _flowSchemeRepository = flowSchemeRepository;
        }

        public FlowScheme FlowScheme(string id)
        {
            return _flowSchemeRepository.GetById(id);
        }

        public void SaveFlowScheme(FlowSchemeInsertInput input)
        {
            FlowScheme flowScheme = new FlowScheme();
            flowScheme.SchemeContent = input.SchemeContent;
            flowScheme.CreatedOn = DateTime.Now;
            _flowSchemeRepository.Insert(flowScheme);

            //send mail job
            BackgroundJob.Enqueue(() => Console.WriteLine("send mail to inform the related user!"));
        }

        public void SaveFlowSchemeData(string flowContent)
        {
            FlowScheme flowScheme = new FlowScheme();
            flowScheme.SchemeContent = flowContent;
            flowScheme.CreatedOn = DateTime.Now;
            _flowSchemeRepository.Insert(flowScheme);
        }


        public List<FlowSchemeOutput> GetFlowSchemeData()
        {
            var query = _flowSchemeRepository.Entities
                .OrderByDescending(o => o.CreatedOn)
                .Select(x =>
                new FlowSchemeOutput
                {
                    Id = x.Id,
                    CreatedOn = x.CreatedOn,
                    UpdatedOn = x.UpdatedOn,
                    SchemeName = x.SchemeName,
                    Description = x.Description
                }).ToList();

            return query;
        }
    }
}
