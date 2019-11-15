import { CardNoModel, NeedSwingCardModel } from './check-detail-model';

export interface TpmPlanDetailOutPut {
  TotalCount?: number;
  Dtos: TpmPlanDetailModel[];
}

export interface TpmPlanDetailModel extends NeedSwingCardModel, CardNoModel {
  Id?: string;
  Area?: string;
  ValueStream?: string;
  Line?: string;
  Device?: string;
  DoBy?: string;
  Status?: string;
  Interval?: string;
  PlanDate?: string;
  NeedCheckValue?: boolean;
  CheckDetailId?: string;
  CnDescription?: string;
  EnDescription?: string;
  HowToMaintain?: string;
  Tools?: string;
  CostTime?: Number;
  DeviceId?: string;
  LineId?: string;
}


