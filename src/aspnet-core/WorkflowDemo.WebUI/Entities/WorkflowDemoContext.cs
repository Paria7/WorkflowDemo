using Microsoft.EntityFrameworkCore;

namespace WorkflowDemo.WebUI.Entities
{
    public partial class WorkflowDemoContext : DbContext
    {
        public WorkflowDemoContext()
        {
        }

        public WorkflowDemoContext(DbContextOptions<WorkflowDemoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<Role> Role { get; set; }
        public virtual DbSet<RoleUser> RoleUser { get; set; }
        public virtual DbSet<RoleFunction> RoleFunction { get; set; }
        public virtual DbSet<Function> Function { get; set; }
        public virtual DbSet<Menu> Menu { get; set; }
        public virtual DbSet<AuditLog> AuditLog { get; set; }
        public virtual DbSet<FlowScheme> FlowScheme { get; set; }
        public virtual DbSet<FlowInstance> FlowInstance { get; set; }
        public virtual DbSet<FlowInstanceOperationHistory> FlowInstanceOperationHistory { get; set; }
        public virtual DbSet<FlowInstanceTransitionHistory> FlowInstanceTransitionHistory { get; set; }
        public virtual DbSet<Form> Form { get; set; }
        public virtual DbSet<WorkflowGlobalParameter> WorkflowGlobalParameter { get;set;}
        public virtual DbSet<WorkflowInbox> WorkflowInbox { get; set; }
        public virtual DbSet<WorkflowProcessInstance> WorkflowProcessInstance { get; set; }
        public virtual DbSet<WorkflowProcessInstancePersistence> WorkflowProcessInstancePersistence { get; set; }
        public virtual DbSet<WorkflowProcessInstanceStatus> WorkflowProcessInstanceStatus { get; set; }
        public virtual DbSet<WorkflowProcessScheme> WorkflowProcessScheme { get; set; }
        public virtual DbSet<WorkflowProcessTimer> WorkflowProcessTimer { get; set; }
        public virtual DbSet<WorkflowProcessTransitionHistory> WorkflowProcessTransitionHistory { get; set; }
        public virtual DbSet<WorkflowScheme> WorkflowScheme { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
