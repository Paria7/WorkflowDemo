import { CardNoModel, NeedSwingCardModel } from "../tpm-amendment/check-detail-model";

/**
 * 停掉某条产线model
 */
export interface PortalOffLineModel extends NeedSwingCardModel, CardNoModel {
    LineId: string;
}

/**
 * 查询line的model
 */
export interface PortalOffLineQueryModel {
    LineId: string;
}

/**
 * 查询line的model
 */
export interface PortalOffLineQueryOutputModel {
    Id: string;
    OpType: string;
    Description?: string;
    CreateTime: Date;
    CreateNo: string;
}