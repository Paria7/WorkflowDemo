import { CheckDetailViewType } from 'shared/models/portal';
export interface OplModel extends NeedSwingCardModel, CardNoModel {
  Id?: string;
  TpmPlanDetailId: string;
  TpmDescription?: string;
  Description?: string;
  ClosedOn?: Date;
  CreateTime?: string;
  CreatedBy?: string;
  CheckDetailId?: string;
  DeviceId?: string;
  WriteLog?: boolean;
}
export interface RepairLogModel extends NeedSwingCardModel, CardNoModel {
  Id?: string;
  Action?: string;
  Description?: string;
  CreateTime?: string;
  CreatedBy?: string;
  CheckDetailId?: string;
  WriteLog?: boolean;
}
export interface AmendmentLogModel {
  Id?: string;
  Description?: string;
  CreateTime?: string;
  CreatedBy?: string;
}
export interface AttachmentModel {
  Id?: string;
  Name?: string;
  DownloadUri?: string;
}
export interface CheckDetailModel {
  Id?: string;
  TPMPlanDetailId?: string;
  Status?: string;
  StatusValue?: number;
  CheckValue?: string;
  PlanDate?: string;
  IsExpired?: boolean;
  ActualDate?: string;
  DoUser?: string;
  DoUserName?: string;
  CheckUser?: string;
  CheckUserName?: string;
  Attachments?: AttachmentModel[];
  Opls?: OplModel[];
  RepairLogs?: RepairLogModel[];
  AmendmentLogs?: AmendmentLogModel[];
  CanDoSave?: boolean;
  CanDoComplete?: boolean;
  NeedCheckValue?: boolean;
  CnDescription?: string;
  EnDescription?: string;
  HowToMaintain?: string;
  Tools?: string;
  CostTime?: Number;
  Interval?: string;
  DeviceId?: string;
  LineId?: string;
  RowNo?: number;
  IsNg: boolean;
}


export class CheckDetailDataModel {
  Id: string;
  CanDoSave: boolean;
  CanDoComplete: boolean;
  NeedCheckValue: boolean;
  CnDescription: string;
  EnDescription: string;
  HowToMaintain: string;
  Tools: string;
  CostTime: Number;
  Interval: string;
  Status: string;
  DeviceId: string;
  RowNo: string;
  IsNg: boolean;
  TPMPlanDetailId: string;
}


export interface RemoveOplModel extends NeedSwingCardModel, CardNoModel {
  Id: string;
  WriteLog: boolean;
}

export interface RemoveRepairLogModel extends NeedSwingCardModel, CardNoModel {
  Id: string;
  WriteLog: boolean;
}

export interface NeedSwingCardModel {
  NeedSwingCard?: boolean;
}

export interface CardNoModel {
  CardNo?: string;
}
