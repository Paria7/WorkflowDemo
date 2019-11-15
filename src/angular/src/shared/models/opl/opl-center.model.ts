export interface OplCenterOutPut {
  TotalCount?: number;
  Dtos: OplCenterModel[];
}

export interface OplCenterModel {
  Id?: string;
  Description?: string;
  Result?: string;
  Comment?: string;
  Area?: string;
  ValueStream?: string;
  Line?: string;
  Device?: string;
  Status?: string | boolean;
  StatusValue?: number;
  CreatedOn?: string;
  CreatedBy?: string;
  ClosedOn?: string;
  ClosedBy?: string;
  color?: number;
}