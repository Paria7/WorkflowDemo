
import { UserModel } from '../administration/user.model';
export interface DeviceDetailOutPut {
    TotalCount?: number;
    Dtos: DeviceDetailModel[];
}
export interface DeviceDetailModel {
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
    ValueStreamId?: string;
    ValueStreamName?: string;
    AreaId?: string;
    AreaName?: string;
    StationId?: string;
    StationName?: string;
    ReleaseDate?: string;
    ServiceList?: UserModel[];
    EngineerList?: UserModel[];
}