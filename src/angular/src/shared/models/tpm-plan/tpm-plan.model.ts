export interface TpmPlanModel {
    Id: string;
    Version: string;
    Area: string;
    ValueStream: string;
    Line: string;
    DeviceName: string;
    Status?: number;
    IssueDate?: string;
    LastUpdatedTime?: string;
}

export interface TpmPlanPageModel {
    TotalCount?: number;
    Models: TpmPlanModel[];
}

export interface QueryPlanModel {
    AreaId: string;
    ValueStreamId: string;
    LineId: string;
    DeviceId: string;
    PageIndex?: number;
    PageSize?: number;
    Year?: number;
    Month?: number;
}

export interface TpmPlanHistoryModel {
    Action: string;
    ActionTime?: Date;
    DoBy: string;
}

export interface FileModel {
    FileName: string;
    FileData: string;
    FilePath: string;
}

export interface QueryTPMPlanDetailsModel {
    Id: string;
    PageIndex?: number;
    PageSize?: number;
}

export interface TpmPlanDetailsModel {
    Id: string;
    CnDescription: string;
    EnDescription: string;
    Description: string;
    NextTime?: Date;
    Cost?: number;
    Interval: string;
    IntervalCode?: number;
    DoBy: string;
    CheckBy: string;
    TPMPlanId: string;
    HowToMaintain: string;
    Tools: string;
    CheckValue: boolean;
    CreatedBy: string;
    CreatedOn?: Date
    Notification: boolean;
    NotificationPerson: string;
    MaintType: string;
}

export interface TpmPlanDetailsPageModel {
    TotalCount?: number;
    Models: TpmPlanDetailsModel[];
}

export interface TpmPlanItemDetailsModel {
    Id?: string;
    Description: string;
    HowToMaintain: string;
    Tools: string;
    Interval: string;
    IntervalCode?: number;
    DoBy: string;
    CheckBy: string;
    Cost?: number;
    Notification: boolean;
    NotificationPerson: string;
    CheckValue: boolean;
    Image?: string;
    TPMPlanId: string;
    MaintType: string;
}

export interface CodeConfigModel {
    Code: string;
    Description: string;
}

export interface TpmPlanRollbackModel {
    Id: string;
}

export interface TpmPlanPublishFreezeModel {
    Id: string;
}

export interface TpmPlanImagesOutputModel {
    image: string;
}


