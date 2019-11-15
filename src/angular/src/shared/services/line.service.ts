import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LineKpiModel, LineModel, QueryPlantLineModel} from '../models/base-config';
import {Observable} from 'rxjs';
import {QueryLineKpiModel} from '../models/base-config/query-line-kpi.model';
import {ApiConfigService} from './api-config.service';
import {CommonService} from './common.service';
import { NameValueModel } from 'shared/models/tpm-amendment';

@Injectable()
export class LineService {

  constructor(private http: HttpClient, private commonService: CommonService) {
    this.commonService.getApiConfig().ApiBaseUrl = this.commonService.getApiConfig().ApiBaseUrl;
  }

  public queryLines(queryModel: any) {
    let model: any = {
      plantName: queryModel.plantName,
      processName: queryModel.processName,
      code: queryModel.code,
      name: queryModel.name,
      isActive: queryModel.isActive === 'all' ? '' : queryModel.isActive
    };
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/line/queryLines', {
      params: new HttpParams({
        fromObject: model
      })
    }).map(p => p as LineModel[]);
  }

  public getLines() {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/line/getlines').map(p => p as LineModel[]);
  }
  public getLinesByArea(id: string) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/line/getLinesByArea',
    {
      params: {id: id}
    }) .map(p => p as NameValueModel[]);
  }
  public saveLine(model: LineModel) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/line/saveLine', model);

  }

  public deleteLine(id: string) {
    return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/line/removeLine/' + id);
  }

  public downloadLineKPITemplate(queryModel: any) {
    let params: any = {
      plantName: queryModel.plantName,
      processName: queryModel.processName,
      code: queryModel.code,
      name: queryModel.name,
      isActive: queryModel.isActive === 'all' ? '' : queryModel.isActive
    };
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/line/DownloadStandardTemplate', {
      params: params,
      responseType: 'blob'
    });
  }

  public importLineKPI(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('importedExcel', file);
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/line/ImportStandardTemplate', formData);
  }

  public exportLineKPI(queryModel: any) {
    let params: any = {
      plantName: queryModel.plantName,
      processName: queryModel.processName,
      code: queryModel.code,
      name: queryModel.name,
      isActive: queryModel.isActive === 'all' ? '' : queryModel.isActive
    };
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/line/ExportStandardTemplate', {
      params: params,
      responseType: 'blob'
    });
  }

  public getLineMonthlyKPIByLineId(model: any): Observable<any> {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/line/GetLineMonthlyKPIByLineId', {
      params: new HttpParams({
        fromObject: model
      })
    });
  }

  public updateLineMonthlyKPI(model: LineKpiModel) {
    return this.http.put(this.commonService.getApiConfig().ApiBaseUrl + 'api/line/UpdateLineMonthlyKPI', model);
  }

  public getLinesByDistributionAndProcess(queryModel) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/line/GetLinesByDistributionAndProcess', {
      params: new HttpParams({
        fromObject: queryModel
      })
    }).map(p => p as LineModel[]);
  }
}
