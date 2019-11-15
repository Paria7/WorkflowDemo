export interface LineModel {
  Id?: string;
  PlantId?: string;
  PlantCode?: string;
  PlantName?: string;
  ProcessId?: string;
  Name?: string;
  Code?: string;
  IsActive?: boolean;
  IsNewLine?: boolean;
  Description?: string;
  CreatedBy?: string;
  CreatedOn?: string;
  UpdatedBy?: string;
  UpdatedOn?: string;
  TpmSwitch?: boolean
}

export interface QueryPlantLineModel {
  PlantId?: Array<string>;
}

export interface LineKpiModel {
  Month?: string;
  StandardWorkingDay?: number;
  PlannedOperatingTime?: number;
  OverallEquipmentEffectiveness?: number;
  DownTime?: number;
  DownTimeReason?: string;
  LineId?: string;
  Id?: string;
  CreatedOn?: string;
  CreatedBy?: string;
  UpdatedOn?: string;
  UpdatedBy?: string;
}
