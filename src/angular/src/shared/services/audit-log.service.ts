import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CommonService} from './common.service';
import {AuditLogModel, AuditLogPageModel} from 'shared/models/administration/audit-log.model';

@Injectable()
export class AuditLogService {

  constructor(private http: HttpClient, private commonService: CommonService) {

  }

  /*查询审计日志列表信息*/
  getAuditLog(queryModel: any): Observable<AuditLogPageModel> {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/AuditLog/GetAuditLogData',
      {
        params: new HttpParams({
          fromObject: queryModel
        })
      })
      .map(p => p as AuditLogPageModel);
  }

  /*查询审计日志明细信息*/
  getAuditLogDetail(queryModel: any): Observable<AuditLogModel> {
    // const model: any = {AreaId: queryModel.AreaId};

    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/AuditLog/GetDetailAuditLog', {
      params: new HttpParams({
        fromObject: queryModel
      })
    }).map(p => p as AuditLogModel);
  }


}
