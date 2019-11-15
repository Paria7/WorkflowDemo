import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BusinessUnitModel} from '../models/base-config';
import {ApiConfigService} from './api-config.service';
import {CommonService} from './common.service';

@Injectable()
export class LineBusinessUnitMapService {

  constructor(private http: HttpClient, private commonService: CommonService) {

  }

  public getBusinessUnitsByLineId(lineId: string) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/lineBusinessUnitMap/getBusinessUnitsByLineId?lineId=' + lineId).map(p => p as BusinessUnitModel[]);
  }

  public removeBusinessUnitsByLineId(lineId: string) {
    return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/lineBusinessUnitMap/removeBusinessUnitsByLineId/' + lineId);
  }

  public saveBusinessUnitsByLineId(model: any) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/lineBusinessUnitMap/saveBusinessUnitsByLineId', model);
  }
}
