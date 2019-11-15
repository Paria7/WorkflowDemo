export interface PortalDeviceStatusInputModel {
    LineId?: string;
    DeviceId?: string;
}

export interface PortalDeviceStatusOutputModel {
    DeviceId: string;
    StatusType: number; //1:Finished 2:NotCheck 3:No Task/Not Finished
}