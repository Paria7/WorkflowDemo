using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkflowDemo.WebUI.DTO;
using WorkflowDemo.WebUI.Entities;
using WorkflowDemo.WebUI.Repositories;

namespace WorkflowDemo.WebUI.Services
{
    public class FormService
    {
        private readonly IRepository<Form> formRepository;
        private readonly WorkflowDemoContext context;

        public FormService(WorkflowDemoContext context, IRepository<Form> formRepository)
        {
            this.context = context;
            this.formRepository = formRepository;
        }

        public void SaveFormData(FormInput input)
        {
            Form form = new Form();
            form.Name = input.Name;
            form.Content = input.Content;
            form.Description = input.Description;
            form.CreatedOn = DateTime.Now;
            form.UpdatedOn = DateTime.Now;
            formRepository.Insert(form);
            //FlowScheme flowScheme = new FlowScheme();
            //flowScheme.SchemeContent = input.SchemeContent;
            //flowScheme.CreatedOn = DateTime.Now;
            //_flowSchemeRepository.Insert(flowScheme);

            ////send mail job
            //BackgroundJob.Enqueue(() => Console.WriteLine("send mail to inform the related user!"));
        }

        public List<FormOutput> GetFormData()
        {
            var query = formRepository.Entities
                .OrderByDescending(o => o.CreatedOn)
                .Select(x =>
                new FormOutput
                {
                    Id = x.Id,
                    CreatedOn = x.CreatedOn,
                    UpdatedOn = x.UpdatedOn,
                    Name = x.Name,
                    Description = x.Description
                }).ToList();

            return query;
        }
    }
}
