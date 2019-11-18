using OptimaJet.Workflow.DbPersistence;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using WorkflowDemo.WebUI.DTO;
using WorkflowDemo.WebUI.Entities;
using WorkflowDemo.WebUI.Repositories;

namespace WorkflowDemo.WebUI.Services
{
    public class WorkflowEngineService
    {
        private readonly IRepositoryWithoutEntityBase<Entities.WorkflowScheme> workflowSchemeRepository;

        public WorkflowEngineService(IRepositoryWithoutEntityBase<Entities.WorkflowScheme> workflowSchemeRepository)
        {
            this.workflowSchemeRepository = workflowSchemeRepository;
        }

        public async Task Delete(string code)
        {
            //var provider = (MSSQLProvider)WorkflowManager.Runtime.PersistenceProvider;
            //using (SqlConnection connection = new SqlConnection(provider.ConnectionString))
            //{
            //    var tmp = new Entities.WorkflowScheme();
            //    await Entities.WorkflowScheme.(connection, code);
            //}
        }

        //public async Task<bool> ExecuteCommand(Guid processId, string commandName)
        //{
        //    var identityId = AbpSession.UserId?.ToString();
        //    var commands = await WorkflowManager.Runtime.GetAvailableCommandsAsync(processId, new List<string> { identityId }, commandName);
        //    var command = commands.FirstOrDefault();

        //    if (command != null)
        //    {
        //        var res = await WorkflowManager.Runtime.ExecuteCommandAsync(command, identityId, null);
        //        return res.WasExecuted;
        //    }

        //    return false;
        //}

        //public async Task<WorkflowCommandDto[]> GetAvaliableCommands(Guid processId)
        //{
        //    var identityId = AbpSession.UserId?.ToString();
        //    var commands = await WorkflowManager.Runtime.GetAvailableCommandsAsync(processId, new List<string> { identityId });
        //    return commands.OrderBy(c => c.Classifier).Select(c => new WorkflowCommandDto()
        //    {
        //        Name = c.CommandName,
        //        LocalizedName = c.LocalizedName,
        //        Classifier = c.Classifier.ToString()
        //    }).ToArray();
        //}

        //public async Task<string[]> GetStates(Guid processId)
        //{
        //    var identityId = AbpSession.UserId?.ToString();
        //    var states = await WorkflowManager.Runtime.GetAvailableStateToSetAsync(processId);
        //    return states.Select(c => c.Name).ToArray();
        //}

        //public async Task<bool> SetState(Guid processId, string state)
        //{
        //    var identityId = AbpSession.UserId?.ToString();
        //    await WorkflowManager.Runtime.SetStateAsync(processId, identityId, null, state);
        //    return true;
        //}

        public async Task<GetWorkflowSchemesOutput> GetSchemes()
        {
            List<WorkflowSchemeDto> schemes = new List<WorkflowSchemeDto>();
            var query = workflowSchemeRepository.TableNoTracking.ToList();
            foreach (var item in query.OrderBy(c => c.Code))
            {
                schemes.Add(new WorkflowSchemeDto()
                {
                    Code = item.Code
                });
            }
            return new GetWorkflowSchemesOutput
            {
                Schemes = schemes
            };
        }
    }
}
