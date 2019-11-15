using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WorkflowDemo.WebUI.Migrations
{
    public partial class WorkflowEngine : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "WorkflowGlobalParameter",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Type = table.Column<string>(maxLength: 306, nullable: true),
                    Name = table.Column<string>(maxLength: 128, nullable: true),
                    Value = table.Column<string>(type: "nvarchar(MAX)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkflowGlobalParameter", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WorkflowInbox",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    ProcessId = table.Column<string>(nullable: true),
                    IdentityId = table.Column<string>(maxLength: 256, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkflowInbox", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WorkflowProcessInstance",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    StateName = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    ActivityName = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    SchemeId = table.Column<string>(nullable: true),
                    PreviousState = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    PreviousStateForDirect = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    PreviousStateForReverse = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    PreviousActivity = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    PreviousActivityForDirect = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    PreviousActivityForReverse = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    ParentProcessId = table.Column<string>(nullable: true),
                    RootProcessId = table.Column<string>(nullable: true),
                    IsDeterminingParametersChanged = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkflowProcessInstance", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WorkflowProcessInstancePersistence",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    ProcessId = table.Column<string>(nullable: true),
                    ParameterName = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    Value = table.Column<string>(type: "nvarchar(MAX)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkflowProcessInstancePersistence", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WorkflowProcessInstanceStatus",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Status = table.Column<int>(nullable: false),
                    Lock = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkflowProcessInstanceStatus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WorkflowProcessScheme",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Scheme = table.Column<string>(nullable: true),
                    DefiningParameters = table.Column<string>(nullable: true),
                    DefiningParametersHash = table.Column<string>(maxLength: 24, nullable: true),
                    SchemeCode = table.Column<string>(maxLength: 256, nullable: true),
                    IsObsolete = table.Column<int>(nullable: false),
                    RootSchemeCode = table.Column<string>(maxLength: 256, nullable: true),
                    RootSchemeId = table.Column<string>(nullable: true),
                    AllowedActivities = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    StartingTransition = table.Column<string>(type: "nvarchar(MAX)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkflowProcessScheme", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WorkflowProcessTimer",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    ProcessId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    NextExecutionDateTime = table.Column<DateTime>(nullable: false),
                    Ignore = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkflowProcessTimer", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WorkflowProcessTransitionHistory",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    ProcessId = table.Column<string>(nullable: true),
                    ExecutorIdentityId = table.Column<string>(nullable: true),
                    ActorIdentityId = table.Column<string>(maxLength: 256, nullable: true),
                    FromActivityName = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    ToActivityName = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    ToStateName = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    TransitionTime = table.Column<DateTime>(nullable: false),
                    TransitionClassifier = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    IsFinalised = table.Column<int>(nullable: false),
                    FromStateName = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    TriggerName = table.Column<string>(type: "nvarchar(MAX)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkflowProcessTransitionHistory", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WorkflowScheme",
                columns: table => new
                {
                    Code = table.Column<string>(maxLength: 256, nullable: false),
                    Scheme = table.Column<string>(type: "nvarchar(MAX)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkflowScheme", x => x.Code);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WorkflowGlobalParameter");

            migrationBuilder.DropTable(
                name: "WorkflowInbox");

            migrationBuilder.DropTable(
                name: "WorkflowProcessInstance");

            migrationBuilder.DropTable(
                name: "WorkflowProcessInstancePersistence");

            migrationBuilder.DropTable(
                name: "WorkflowProcessInstanceStatus");

            migrationBuilder.DropTable(
                name: "WorkflowProcessScheme");

            migrationBuilder.DropTable(
                name: "WorkflowProcessTimer");

            migrationBuilder.DropTable(
                name: "WorkflowProcessTransitionHistory");

            migrationBuilder.DropTable(
                name: "WorkflowScheme");
        }
    }
}
