import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  TpmPlanDetailOutPut, CheckDetailModel, MarkCheckDetailCompleteModel, DoAndCheckModel,
  OplModel, RepairLogModel, DoBySaveCheckListModel, RemoveOplModel, RemoveRepairLogModel
} from '../models/tpm-amendment';
import { CommonService } from './common.service';
import { ResponseType } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class TpmAmendmentService {

  constructor(private http: HttpClient, private commonService: CommonService) {
    this.commonService.getApiConfig().ApiBaseUrl = this.commonService.getApiConfig().ApiBaseUrl;
  }

  public getTpmPlanDetails(queryModel: any) {
    let params: any = {
      Area: queryModel.Area == undefined ? "" : queryModel.Area,
      Line: queryModel.Line == undefined ? "" : queryModel.Line,
      ValueStream: queryModel.ValueStream == undefined ? "" : queryModel.ValueStream,
      Device: queryModel.Device == undefined ? "" : queryModel.Device,
      PlanDate: queryModel.PlanDate == "" || queryModel.PlanDate == null ? null : new Date(queryModel.PlanDate),
      Status: queryModel.Status === 'all' ? '' : queryModel.Status,
      PageIndex: queryModel.PageIndex,
      PageSize: queryModel.PageSize
    };
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/queryTpmPlanDetails', params).map(p => p as TpmPlanDetailOutPut);
  }

  public getCheckDetails(id: string, lineId: string, deviceId: string) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/getCheckDetail',
      {
        params: { Id: id, LineId: lineId, DeviceId: deviceId }
      }).map(p => p as CheckDetailModel[]);
  }
  public doBySaveCheckList(model: DoBySaveCheckListModel) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/DoBySaveCheckList', model);
  }
  public markCheckDetailComplete(model: MarkCheckDetailCompleteModel) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/markCheckDetailComplete', model);
  }

  public doBySaveBatchCheckList(model: CheckDetailModel[]) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/doBySaveBatchCheckList', model);
  }

  public markBatchCheckDetailComplete(model: CheckDetailModel[]) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/markBatchCheckDetailComplete', model);
  }

  public saveOpl(model: OplModel) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/saveOpl', model);
  }

  public removeOpl(model: RemoveOplModel) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/removeOpl/',
      {
        Id: model.Id,
        WriteLog: model.WriteLog,
        NeedSwingCard: model.NeedSwingCard,
        CardNo: model.CardNo
      });
  }
  public saveRepairLog(model: RepairLogModel) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/saveRepairLog', model);
  }

  public removeRepairLog(model: RemoveRepairLogModel) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/removeRepairLog/',
      {
        Id: model.Id,
        WriteLog: model.WriteLog,
        NeedSwingCard: model.NeedSwingCard,
        CardNo: model.CardNo
      });
  }
  public getOpls(id: string) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/getOpls',
      {
        params: { checkDetailId: id }
      }).map(p => p as OplModel[]);
  }
  public getRepairLogs(id: string) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/getRepairLogs',
      {
        params: { checkDetailId: id }
      }).map(p => p as RepairLogModel[]);
  }

  public changeTpmPlanDate(checkDetailId: string, planDate: Date) {
    let params: any = {
      CheckDetailId: checkDetailId,
      PlanDate: planDate
    };
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/changeTpmPlanDate', params);
  }
  public downloadTpmPlanDetail(queryModel: any) {
    let params: any = {
      Area: queryModel.Area == undefined ? "" : queryModel.Area,
      Line: queryModel.Line == undefined ? "" : queryModel.Line,
      Device: queryModel.Device == undefined ? "" : queryModel.Device,
      PlanDate: queryModel.PlanDate == "" || queryModel.PlanDate == null ? null : new Date(queryModel.PlanDate),
      Status: queryModel.Status === 'all' ? '' : queryModel.Status,
      PageIndex: queryModel.PageIndex,
      PageSize: queryModel.PageSize
    };
    return this.http.post<string>(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/downloadTpmPlanDetail', params);
  }

  public getEmployeeNoByCardNo(cardNo: string) {
    let employeeNo = this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/getEmployeeNoByCardNo',
      {
        params: { cardNo: cardNo }
      }).map(p => p as string);
    return employeeNo;
  }

  public CheckCanDoBy(models: DoAndCheckModel[]) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/checkCanDoBy',
      models).map(p => p as DoAndCheckModel);
  }

  public CheckCanCompleteBy(models: DoAndCheckModel[]) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpmAmendment/checkCanCompleteBy',
      models).map(p => p as DoAndCheckModel);
  }

}
