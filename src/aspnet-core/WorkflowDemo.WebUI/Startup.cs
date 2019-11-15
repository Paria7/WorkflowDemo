using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Hangfire;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.PlatformAbstractions;
using Newtonsoft.Json.Serialization;
using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerUI;
using WorkflowDemo.WebUI.Common;
using WorkflowDemo.WebUI.Entities;
using WorkflowDemo.WebUI.Mapping;
using WorkflowDemo.WebUI.Repositories;
using WorkflowDemo.WebUI.Services;

namespace WorkflowDemo.WebUI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }


        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info
                {
                    Title = "WorkflowDemo API",
                    Version = "v1",
                    Description = "RESTful API for WorkflowDemo",
                });

                c.AddSecurityDefinition("Bearer", new ApiKeyScheme
                {
                    Description = "Input Bearer Token",
                    Name = "Authorization",
                    In = "header",
                    Type = "apiKey"
                });

                c.AddSecurityRequirement(new Dictionary<string, IEnumerable<string>>
                {
                    {"Bearer", Enumerable.Empty<string>()}
                });

                var basePath = PlatformServices.Default.Application.ApplicationBasePath;
                var xmlPath = Path.Combine(basePath, "WorkflowDemo.WebUI.xml");
                c.IncludeXmlComments(xmlPath);
            });
            services.AddMvc(options =>
            {
                options.Filters.Add<AuditLogActionFilter>();
                options.Filters.Add<RepositoryContextFilter>();
                options.Filters.Add<TokenRefreshFilter>();
            }).SetCompatibilityVersion(CompatibilityVersion.Version_2_1).AddJsonOptions(opt =>
            {
                opt.SerializerSettings.DateTimeZoneHandling = Newtonsoft.Json.DateTimeZoneHandling.Local;
                opt.SerializerSettings.DateFormatHandling = Newtonsoft.Json.DateFormatHandling.IsoDateFormat;
                var resover = opt.SerializerSettings.ContractResolver;
                if (resover != null)
                {
                    var res = resover as DefaultContractResolver;
                    res.NamingStrategy = null;
                }
            });

            services.AddCustomOptions();
            services.AddHttpContextAccessor();

            services.AddResponseCompression(options => { });

            services.AddSingleton<JwtTokenService>();

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddCustomJwtBearer();

            var dbType = Configuration.GetValue<string>("DataBaseType").ToLower();
            if (dbType == DbTypeEnum.SqlServer.ToString().ToLower())
            {
                services.AddDbContext<WorkflowDemoContext>(
                    options => { options.UseSqlServer(Configuration.GetConnectionString("SqlServer")); });
            }

            services.Configure<object>(Configuration.GetSection("SystemConfigKeys"));
            services.AddHangfire(x => x
            .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
            .UseSimpleAssemblyNameTypeSerializer()
            .UseRecommendedSerializerSettings()
            .UseSqlServerStorage(Configuration.GetConnectionString("HangfireConnection"), new Hangfire.SqlServer.SqlServerStorageOptions
            {
                CommandBatchMaxTimeout = TimeSpan.FromMinutes(5),
                SlidingInvisibilityTimeout = TimeSpan.FromMinutes(5),
                QueuePollInterval = TimeSpan.Zero,
                UseRecommendedIsolationLevel = true,
                UsePageLocksOnDequeue = true,
                DisableGlobalLocks = true
            }));

            services.AddHangfireServer();
            services.AddScoped<AdminstrationRepository>();
            services.AddScoped<AuthRepository>();
            services.AddScoped<RegistrationRepository>();
            services.AddScoped<SystemRepository>();
            services.AddScoped<SetupRepository>();
            services.AddScoped<AuditLogService>();
            services.AddSingleton<ILogHelper, LogHelper>();
            services.AddScoped<UserService>();
            services.AddScoped<EnvironmentHelper>();
            services.AddScoped<CommonService>();
            services.AddScoped<FlowSchemeService>();
            services.AddScoped<FlowInstanceService>();
            services.AddScoped<FormService>();
            var httpClientHandler = new HttpClientHandler
            {
                AllowAutoRedirect = false,
                AutomaticDecompression = System.Net.DecompressionMethods.GZip | System.Net.DecompressionMethods.Deflate
            };
            var httpClient = new HttpClient(httpClientHandler);
            httpClient.Timeout = TimeSpan.FromSeconds(60);
            services.AddSingleton<HttpClient>(httpClient);

            services.AddCors();

            var builder = new ContainerBuilder();

            builder.RegisterGeneric(typeof(EfRepository<>)).As(typeof(IRepository<>)).InstancePerLifetimeScope();

            builder.Populate(services);

            //其它反向代理服务器 启用转接头,保证可以正确获取客户端的信息
            services.Configure<ForwardedHeadersOptions>(options =>
            {
                options.ForwardedHeaders =
                    ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
            });

            return new AutofacServiceProvider(builder.Build());
            //return services.BuildServiceProvider();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            MapperConfig.CreateDTOMaps();

            app.UseCors(policy =>
            {
                policy.AllowAnyHeader();
                policy.AllowAnyMethod();
                policy.AllowAnyOrigin();
                policy.AllowCredentials();
                policy.WithExposedHeaders("token"); //跨域时允许自定义响应头暴露出来，否则前端无法获取token，而且不能为空，否则也取不到
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseResponseCompression();

            app.UseHttpsRedirection();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "WorkflowDemo API");
                c.RoutePrefix = "swagger";
                c.DocExpansion(DocExpansion.None);
            });

            app.UseSwagger();

            app.UseAuthentication();

            app.UseStaticFiles();

            //ConfigHangfire(app);
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot")),
                RequestPath = new PathString("/files")
            });

            app.UseMvc(routes =>
            {
                routes.MapAreaRoute(
                    name: "areaRoute",
                    areaName: "api",
                    template: "api/{controller}/{action=Index}/{id?}");
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/swagger");

                routes.MapSpaFallbackRoute("spa-fallback", new { controller = "Home", action = "Index" });
            });
        }

        //private void ConfigHangfire(IApplicationBuilder app)
        //{
        //    var options = new BackgroundJobServerOptions
        //    {
        //        SchedulePollingInterval = TimeSpan.FromSeconds(11)
        //    };
        //    app.UseHangfireServer(options);
        //    app.UseHangfireDashboard();

        //    BackgroundJob.Enqueue(() => Console.WriteLine("Hello world from Hangfire!"));
        //    //RecurringJob.AddOrUpdate(()=>Console.WriteLine("Minutely"),Cron.Minutely);
        //}
    }
}