import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PlantModel } from '../models/base-config';
import { ApiConfigService } from './api-config.service';
import { CommonService } from './common.service';

@Injectable()
export class PlantService {

  constructor(private http: HttpClient, private commonService: CommonService) {
  }

  public queryPlants(queryModel: any) {
    let model: any = {
      Code: queryModel.Code,
      Name: queryModel.Name,
      IsActive: queryModel.IsActive === 'all' ? '' : queryModel.IsActive
    };
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/plant/queryPlants', {
      params: new HttpParams({
        fromObject: model
      })
    }).map(p => p as PlantModel[]);
  }

  public getPlants() {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/plant/getplants').map(p => p as PlantModel[]);
  }

  public savePlant(model: PlantModel) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/plant/savePlant', model);
  }

  public removePlant(id: string) {
    return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/plant/removePlant/' + id);
  }
}
