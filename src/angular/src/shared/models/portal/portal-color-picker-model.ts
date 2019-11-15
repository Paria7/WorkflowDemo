import { NeedSwingCardModel, CardNoModel } from "../tpm-amendment";

/**
 * portal 修改area 颜色model
 */
export interface PortalColorPickerModel extends NeedSwingCardModel, CardNoModel {
    AreaId?: string;
    AreaCode?: string;
    HadDone: string;
    NotCheck: string;
    NotDone: string;
}

/**
 * portal 查询area颜色 请求model
 */
export interface PortalColorQueryInputModel {
    AreaId?: string;
    AreaCode?: string;

}

/**
 * portal 查询area颜色 响应model
 */
export interface PortalColorQueryOutPutModel {
    AreaId?: string;
    AreaCode?: string;
    HadDone: string;
    NotCheck: string;
    NotDone: string;
}