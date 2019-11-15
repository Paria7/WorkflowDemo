
export enum CheckDetailViewType {
    Calendar = 0,
    Portal = 1,
    Amendment = 2
}
export interface QueryCheckListModel {
    CheckDetailId?: string;
    LineId?: string;
    DeviceId?: string;
    ViewType?: CheckDetailViewType;
    IsLogin?: boolean
}