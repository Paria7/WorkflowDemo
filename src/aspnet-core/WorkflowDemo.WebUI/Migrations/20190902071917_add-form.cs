using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WorkflowDemo.WebUI.Migrations
{
    public partial class addform : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FlowInstance",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 50, nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(maxLength: 255, nullable: true),
                    UpdatedOn = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(maxLength: 255, nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeletedOn = table.Column<DateTime>(nullable: true),
                    DeletedBy = table.Column<string>(maxLength: 255, nullable: true),
                    InstanceSchemeId = table.Column<string>(nullable: true),
                    Code = table.Column<string>(nullable: true),
                    CustomName = table.Column<string>(nullable: true),
                    ActivityId = table.Column<string>(nullable: true),
                    ActivityType = table.Column<int>(nullable: true),
                    ActivityName = table.Column<string>(nullable: true),
                    PreviousId = table.Column<string>(nullable: true),
                    SchemeContent = table.Column<string>(nullable: true),
                    SchemeId = table.Column<string>(nullable: true),
                    DbName = table.Column<string>(nullable: true),
                    FrmData = table.Column<string>(nullable: true),
                    FrmType = table.Column<int>(nullable: false),
                    FrmContentData = table.Column<string>(nullable: true),
                    FrmContentParse = table.Column<string>(nullable: true),
                    FrmId = table.Column<string>(nullable: true),
                    SchemeType = table.Column<string>(nullable: true),
                    Disabled = table.Column<int>(nullable: false),
                    FlowLevel = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    IsFinish = table.Column<int>(nullable: false),
                    MakerList = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlowInstance", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FlowInstanceOperationHistory",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 50, nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(maxLength: 255, nullable: true),
                    UpdatedOn = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(maxLength: 255, nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeletedOn = table.Column<DateTime>(nullable: true),
                    DeletedBy = table.Column<string>(maxLength: 255, nullable: true),
                    InstanceId = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlowInstanceOperationHistory", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FlowInstanceTransitionHistory",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 50, nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(maxLength: 255, nullable: true),
                    UpdatedOn = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(maxLength: 255, nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeletedOn = table.Column<DateTime>(nullable: true),
                    DeletedBy = table.Column<string>(maxLength: 255, nullable: true),
                    InstanceId = table.Column<string>(nullable: true),
                    FromNodeId = table.Column<string>(nullable: true),
                    FromNodeType = table.Column<int>(nullable: true),
                    FromNodeName = table.Column<string>(nullable: true),
                    ToNodeId = table.Column<string>(nullable: true),
                    ToNodeType = table.Column<int>(nullable: true),
                    ToNodeName = table.Column<string>(nullable: true),
                    TransitionSate = table.Column<int>(nullable: false),
                    IsFinish = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlowInstanceTransitionHistory", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Form",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 50, nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(maxLength: 255, nullable: true),
                    UpdatedOn = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(maxLength: 255, nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeletedOn = table.Column<DateTime>(nullable: true),
                    DeletedBy = table.Column<string>(maxLength: 255, nullable: true),
                    Name = table.Column<string>(nullable: true),
                    FrmType = table.Column<int>(nullable: false),
                    WebId = table.Column<string>(nullable: true),
                    Fields = table.Column<int>(nullable: false),
                    ContentData = table.Column<string>(nullable: true),
                    ContentParse = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true),
                    SortCode = table.Column<int>(nullable: false),
                    DeleteMark = table.Column<int>(nullable: false),
                    DbName = table.Column<string>(nullable: true),
                    Disabled = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Form", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FlowInstance");

            migrationBuilder.DropTable(
                name: "FlowInstanceOperationHistory");

            migrationBuilder.DropTable(
                name: "FlowInstanceTransitionHistory");

            migrationBuilder.DropTable(
                name: "Form");
        }
    }
}
