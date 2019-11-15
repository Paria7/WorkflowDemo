import {CardNoModel, NeedSwingCardModel} from './check-detail-model';

export interface MarkCheckDetailCompleteModel extends NeedSwingCardModel,CardNoModel{
    CheckDetailId?: string;
    WriteLog?:boolean;
  }
export interface DoBySaveCheckListModel extends NeedSwingCardModel,CardNoModel{
    CheckDetailId?: string;
    CheckValue?: string;
    WriteLog?:boolean;
    IsNg?:boolean;
  }


