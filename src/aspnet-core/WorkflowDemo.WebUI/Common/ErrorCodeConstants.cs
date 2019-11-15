namespace WorkflowDemo.WebUI.Common
{
    /// <summary>
    /// 
    /// </summary>
    public class ErrorCodeConstants
    {
        #region Common
        public const string DB_Operation_Error = "0000";
        public const string PlantNotConfigured = "0001";
        public const string RouteNotConfigured = "0002";
        public const string ProjectNotConfigured = "0003";
        public const string DB_ExceedMaxFieldLength = "0004";
        public const string ImportedFileNotExisted = "0005";

        #endregion

        #region CustomerRequirementTemplate
        public const string SchedulingNotExists = "2000";
        public const string MonthNotMatch = "2001";
        public const string NoDataFound = "2002";
        public const string InvaidProjectCode = "2003";
        public const string InvaidPlantCode = "2004";
        public const string InvaidRouteCode = "2005";
        public const string InvaidQuantityValue = "2006";
        public const string ProjectCodeIsEmpty = "2007";
        public const string PlantCodeIsEmpty = "2008";
        public const string RouteCodeIsEmpty = "2009";
        public const string QuantityIsNegative = "2010";
        public const string InactiveProject = "2011";
        public const string InactivePlant = "2012";

        #endregion

        #region CustomerRequirementTemplate
        public const string TemplateNotExists = "1000";
        public const string TemplateNameConflict = "1001";
        public const string CT_TemplateHasBeenQuoted = "1002";
        public const string CustomerRequirementNotExists = "1003";
        public const string CustomerMonthlyRequirementsNotExists = "1004";
        #endregion

        #region Distribution
        public const string CrtNotExists = "3000";
        public const string PtNotExists = "3001";
        public const string CrtSchedulingDismatch = "3002";
        public const string PtSchedulingDismatch = "3003";
        public const string CrtDuplicate = "3004";
        public const string PtDuplicate = "3005";

        public const string NoCustomerRequirements = "3006";
        public const string RoutesDismatch = "3007";


        public const string LockOrderError = "3008";

        public const string NoneMonthKPI = "3009";
        public const string NoneMonthPOT = "3010";
        public const string NoneMonthSWD = "3011";
        public const string NoneMonthOEE = "3012";
        public const string NoneMonthCT = "3013";
        public const string ExistInvestigation = "3014";
        public const string DistributionNameDuplicate = "3015";
        public const string DistributionProcessNotExisted = "3016";
        public const string DistributionProcessNotLocked = "3017";
        public const string DistributionLocked = "3018";
        public const string NextDistributionProcessLocked = "3019";
        #endregion

        #region Production Template
        public const string PT_RouteDuplicated = "4000";
        public const string PT_TemplateNameExisted = "4001";
        public const string PT_TemplateNotExisted = "4002";
        public const string PT_ScheduleNotExisted = "4003";
        public const string PT_TemplateHasBeenQuoted = "4004";
        public const string PT_ProductionLineNotExisted = "4005";
        public const string PT_ProductionPlantNotExisted = "4006";

        public const string PT_StandardTemplateHasNo4Sheets = "4100";
        public const string PT_StandardTemplateHasNoRightSchedule = "4101";
        public const string PT_StandardTemplateHasInvalidKPIParameter = "4102";
        public const string PT_StandardTemplateHasNonConsecutiveMonth = "4103";
        public const string PT_StandardTemplateHasWrongMonthFormat = "4104";
        public const string PT_StandardTemplateLineIsNotExisted = "4105";
        public const string PT_StandardTemplatePlantCodeIsEmpty = "4106";
        public const string PT_StandardTemplateLineCodeIsEmpty = "4107";
        public const string PT_StandardTemplateHasInvalidCellValue = "4108";
        public const string PT_StandardTemplateHasInvalidKPIResult = "4109";
        public const string PT_StandardTemplateRouteIsEmpty = "4110";
        public const string PT_StandardTemplateRouteIsNotExisted = "4111";
        public const string PT_StandardTemplateRouteAndLineNotMatch = "4112";
        public const string PT_StandardTemplateTheLineCodeIsEmpty = "4113";
        public const string PT_StandardTemplateLineNotExisted = "4114";
        public const string PT_StandardTemplateCTNotValid = "4115";
        public const string PT_StandardTemplateHasInvalidPotValue = "4116";
        public const string PT_StandardTemplateHasInvalidOeeValue = "4117";
        public const string PT_StandardTemplateHasInvalidDtValue = "4118";
        public const string PT_StandardTemplateRowsUnequal = "4119";
        public const string PT_StandardTemplateLineNotExistedInSwd = "4120";
        #endregion

        #region Route
        public const string ROUTE_NameExisted = "5000";
        public const string ROUTE_NotExisted = "5001";
        public const string ROUTE_DeletedOrInactivated = "5002";
        public const string ROUTE_Inactivated = "5003";
        public const string ROUTE_Deleted = "5004";
        #endregion

        #region Scheduling
        public const string SCHEDULING_YearExisted = "6000";
        public const string SCHEDULING_INUSE = "6001";
        #endregion

        #region Metadata Config

        public const string LineMonthlyKPI_NotExisted = "7000";
        public const string Plant_WithSameNameOrCodeExisted = "7001";
        public const string BusinessUnit_WithSameCodeExisted = "7002";
        public const string Key_WithSameNameExisted = "7003";
        public const string Line_WithSameNameOrCodeExisted = "7004";
        public const string Project_WithSameNameExisted = "7005";
        public const string Process_WithSameNameExisted = "7006";
        public const string Area_WithSameNameOrCodeExisted = "7007";
        public const string Area_HasValueStreamsExisted = "7008";
        public const string Plant_HasAreasExisted = "7009";
        public const string ValueStream_WithSameNameOrCodeExisted = "7010";
        public const string ValueStream_HasLinesExisted = "7011";
        public const string Line_HasStationsExisted = "7012";
        public const string Station_HasDevicesExisted = "7013";
        public const string Station_WithSameNameOrCodeExisted = "7014";
        public const string Device_WithSameNameOrCodeExisted = "7015";
        public const string Station_IsBeingUsed = "7016";
        public const string Line_IsBeingUsed = "7017";
        public const string ValueStream_IsBeingUsed = "7018";
        public const string Area_IsBeingUsed = "7019";
        public const string Plant_IsBeingUsed = "7020";
        public const string Device_CanNotDeleteWithCheckDetail = "7021";

        #endregion

        #region Administration

        public const string Role_IsBeingUsed = "8000";
        public const string Role_WithSameNameExisted = "8001";
        public const string User_IsNotExisted = "8002";
        public const string User_WithSameNameExisted = "8003";
        public const string User_NotLogin = "8004";
        public const string User_CanNotBeDeleted = "8005";
        public const string User_WithSameEmployeeNoExisted = "8006";
        public const string Role_WithSameCodeExisted = "8007";

        #endregion

        #region TPM Plan Template
        public const string TPT_StandardTemplateHasNoSheets = "4100";
        #endregion

        #region TPM Plan
        public const string TPMPlan_Delete = "4200";
        public const string TPMPlan_Change = "4201";
        public const string TPMPlan_Template = "4202";
        public const string TPMPlan_Publish = "4203";
        #endregion

        #region TpmCalendar
        public const string TpmCalendar_EditNotFindRecord = "8500";
        public const string TpmCalendar_CanNotFindTpmPlan = "8501";
        public const string TpmCalendar_InterValIsNotCorrect = "8502";
        #endregion

        #region portal
        public const string Portal_ParamNotNull = "8600";
        public const string Portal_LineIdNotEmpty = "8601";
        public const string Portal_LineNotFindRecord = "8602";
        public const string Portal_CardNotEmpty = "8603";
        public const string Portal_AreaIdOrCodeNotEmpty = "8604";
        public const string Portal_CanNotQueryThisArea = "8605";
        public const string Portal_HasNoPermission = "8606";

        #endregion
    }
}