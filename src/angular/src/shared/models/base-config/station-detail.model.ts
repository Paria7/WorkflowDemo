export interface StationDetailOutPut {
    TotalCount?: number;
    Dtos: StationDetailModel[];
}
export interface StationDetailModel {
    Id?: string;
    Code?: string;
    Name?: string;
    Status?: string;
    StatusName?: string;
    Description?: string;
    UpdatedBy?: string;
    UpdatedOn?: string;
    PlantId?: string;
    PlantName?: string;
    LineId?: string;
    LineName?: string;
    AreaId?: string;
    AreaName?: string;
    ValueStreamId?: string;
    ValueStreamName?: string;
}