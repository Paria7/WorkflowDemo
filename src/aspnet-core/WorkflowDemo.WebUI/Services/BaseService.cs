using System;
using System.Transactions;

namespace WorkflowDemo.WebUI.Services
{
    public class BaseService
    {
        protected string NewId
        {
            get
            {
                return Guid.NewGuid().ToString();
            }
        }

        public void ExecTransaction(Action action)
        {
            using (var transaction = new TransactionScope(TransactionScopeOption.RequiresNew))
            {
                try
                {
                    action();
                    transaction.Complete();
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }

        public bool ExecTransaction<T>(T model, Func<T, bool> func) where T : class
        {
            bool ret = false;
            using (var transaction = new TransactionScope(TransactionScopeOption.RequiresNew))
            {
                try
                {
                    ret = func(model);
                    transaction.Complete();
                    return ret;
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }
    }
}
