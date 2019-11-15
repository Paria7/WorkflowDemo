import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DeleteOrCancelOplModel, OplCenterOutPut } from '../models/opl';
import { NameValueModel } from '../models/tpm-amendment'
import { CommonService } from './common.service';

@Injectable()
export class OplCenterService {

  constructor(private http: HttpClient, private commonService: CommonService) {
    this.commonService.getApiConfig().ApiBaseUrl = this.commonService.getApiConfig().ApiBaseUrl;
  }

  public getOplStatuses() {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/opl/getOplStatuses').map(p => p as NameValueModel[]);
  }

  public queryOpls(queryModel: any) {
    let model: any = {
      Area: queryModel.Area == undefined ? "" : queryModel.Area,
      ValueStream: queryModel.ValueStream == undefined ? "" : queryModel.ValueStream,
      Line: queryModel.Line == undefined ? "" : queryModel.Line,
      Device: queryModel.Device == undefined ? "" : queryModel.Device,
      Status: queryModel.Status === 'all' ? '' : queryModel.Status,
      PageIndex: queryModel.PageIndex,
      PageSize: queryModel.PageSize
    };
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/opl/queryOpls', {
      params: new HttpParams({
        fromObject: model
      })
    }).map(p => p as OplCenterOutPut);
  }
  public queryTabOpls(queryModel: any) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/opl/queryTabOpls', {
      params: new HttpParams({
        fromObject: queryModel
      })
    }).map(p => p as OplCenterOutPut);
  }
  public assignOpl(id: string, empNo: string) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/opl/AssignOpl', { OplId: id, EmployeeNo: empNo });
  }
  public saveOplDetail(id: string, description: string, result: string) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/opl/saveOplDetail', { Id: id, Description: description, Result: result });
  }
  public completeOplDetail(id: string, comment: string) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/opl/completeOplDetail', { Id: id, Comment: comment });
  }
  public deleteOrCancelOpl(model: DeleteOrCancelOplModel, reason: string) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/opl/deleteOrCancelOpl', { Id: model.Id, IsDelete: model.IsDelete, Reason: reason });
  }
  public deleteLine(id: string) {
    return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/opl/deleteOplDetail/' + id);
  }
  public downOplDetail(queryModel: any) {
    let params: any = {
      Area: queryModel.Area == undefined ? "" : queryModel.Area,
      ValueStream: queryModel.ValueStream == undefined ? "" : queryModel.ValueStream,
      Line: queryModel.Line == undefined ? "" : queryModel.Line,
      Device: queryModel.Device == undefined ? "" : queryModel.Device,
      Status: queryModel.Status === 'all' ? '' : queryModel.Status,
      PageIndex: queryModel.PageIndex,
      PageSize: queryModel.PageSize
    };
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/opl/downLoadOplDetail', {
      params: params,
      responseType: 'blob'
    });
  }
}
