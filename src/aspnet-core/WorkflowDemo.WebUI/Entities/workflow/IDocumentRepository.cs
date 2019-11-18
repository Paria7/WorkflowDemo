using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkflowDemo.WebUI.Models;

namespace WorkflowDemo.WebUI.Entities
{
    public interface IDocumentRepository
    {
        Document InsertOrUpdate(Document doc);
        void DeleteEmptyPreHistory(Guid processId);
        List<Document> Get(out int count, int page = 0, int pageSize = 128);
        List<Document> GetInbox(Guid identityId, out int count, int page = 0, int pageSize = 128);
        List<Document> GetOutbox(Guid identityId, out int count, int page = 0, int pageSize = 128);
        List<DocumentTransitionHistory> GetHistory(Guid id);
        Document Get(Guid id, bool loadChildEntities = true);
        void Delete(Guid[] ids);
        void ChangeState(Guid id, string nextState, string nextStateName);
        bool IsAuthorsBoss(Guid documentId, Guid identityId);
        IEnumerable<string> GetAuthorsBoss(Guid documentId);
        void WriteTransitionHistory(Guid id, string currentState, string nextState, string command, IEnumerable<string> identities);
        void UpdateTransitionHistory(Guid id, string currentState, string nextState, string command, Guid? employeeId);
    }
}
