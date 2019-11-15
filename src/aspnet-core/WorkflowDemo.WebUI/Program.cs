using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace WorkflowDemo.WebUI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            System.Net.ServicePointManager.DefaultConnectionLimit = 256; // Max concurrent outbound requests

            System.Threading.ThreadPool.GetMaxThreads(out int _, out int completionThreads);
            System.Threading.ThreadPool.SetMinThreads(256, completionThreads); // or higher
            var host = CreateWebHostBuilder(args).Build();
            //using (var scope = host.Services.CreateScope())
            //using (var transactionScope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
            //{
            //    var repository = scope.ServiceProvider.GetRequiredService<SetupRepository>();
            //    repository.InitFuntionMenu();
            //    transactionScope.Complete();
            //}
            host.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
