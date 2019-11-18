using OptimaJet.Workflow.Core.Builder;
using OptimaJet.Workflow.Core.Bus;
using OptimaJet.Workflow.Core.Persistence;
using OptimaJet.Workflow.Core.Runtime;
using OptimaJet.Workflow.DbPersistence;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace WorkflowDemo
{
    public static class WorkflowManager
    {
        private static readonly Lazy<WorkflowRuntime> LazyRuntime = new Lazy<WorkflowRuntime>(InitWorkflowRuntime);

        public static WorkflowRuntime Runtime
        {
            get { return LazyRuntime.Value; }
        }

        public static string ConnectionString { get; set; }

        private static WorkflowRuntime InitWorkflowRuntime()
        {
            //todo if you have a license key, you have to register it here
            //WorkflowRuntime.RegisterLicense("your license key text");
            //todo if you are using database different from SQL Server you have to use different persistence provider here.
            ConnectionString = "Data Source=SGHZ001028412;Initial Catalog=WorkflowDemo;Persist Security Info=True;User ID=sa;Password=Password@2019";
            var dbProvider = new MSSQLProvider(ConnectionString);

            var builder = new WorkflowBuilder<XElement>(
                dbProvider,
                new OptimaJet.Workflow.Core.Parser.XmlWorkflowParser(),
                dbProvider
                ).WithDefaultCache();

            var runtime = new WorkflowRuntime()
                .WithBuilder(builder)
                .WithPersistenceProvider(dbProvider)
                .WithBus(new NullBus())
                //todo if you have planned use Timers uncomment following line of code
                //.WithTimerManager(new TimerManager())
                .EnableCodeActions()
                .SwitchAutoUpdateSchemeBeforeGetAvailableCommandsOn();

            //events subscription
            runtime.ProcessActivityChanged += (sender, args) => { };
            runtime.ProcessStatusChanged += Runtime_ProcessStatusChanged;
            //todo if you have planned to use Code Actions functionality that required references to external assemblies you have to register them here
            //runtime.RegisterAssemblyForCodeActions(Assembly.GetAssembly(typeof(SomeTypeFromMyAssembly)));

            //starts the WorkflowRuntime
            //todo if you have planned use Timers the best way to start WorkflowRuntime is somewhere outside of this function in Global.asax for example
            runtime.Start();

            return runtime;
        }

        public delegate Task ChangeState(object id, string state, string localizedState);
        public static readonly ConcurrentDictionary<string, ChangeState> ChangeStateFuncs = new ConcurrentDictionary<string, ChangeState>();


        private static void Runtime_ProcessStatusChanged(object sender, ProcessStatusChangedEventArgs e)
        {
            if (e.NewStatus != ProcessStatus.Idled && e.NewStatus != ProcessStatus.Finalized)
                return;

            if (string.IsNullOrEmpty(e.SchemeCode))
                return;

            Runtime.PreExecuteFromCurrentActivity(e.ProcessId);

            //Change state name
            if (!e.IsSubprocess)
            {
                var nextState = e.ProcessInstance.CurrentState;
                var nextStateName = Runtime.GetLocalizedStateName(e.ProcessId, e.ProcessInstance.CurrentState);

                var objectId = e.ProcessInstance.GetParameter<int>("objectId");
                var objectType = e.ProcessInstance.GetParameter<string>("objectType");

                if (objectType != null && objectId != null)
                {
                    if (ChangeStateFuncs.ContainsKey(objectType))
                    {
                        ChangeStateFuncs[objectType].Invoke(objectId, nextState, nextStateName).Wait();
                    }
                    else
                    {
                        throw new Exception(string.Format("{0} type is not supported", objectType));
                    }
                }
            }
        }
    }
}
