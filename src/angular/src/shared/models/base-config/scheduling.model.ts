export interface SchedulingModel {
  Id?: string;
  No?: number;
  Year?: number;
  Start?: string;
  End?: string;
  CreatedBy?: string;
  CreatedOn?: string;
  UpdatedBy?: string;
  UpdatedOn?: string;
}

export interface SchedulingViewModel {
  id?: string;
  name: string;
  value: string;
}
