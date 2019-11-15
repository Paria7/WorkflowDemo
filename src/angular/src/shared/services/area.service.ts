import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NameValueModel } from '../models/tpm-amendment';
import { CommonService } from './common.service';
import { AreaModel, QueryAreaModel } from "shared/models/base-config";
import { AreaStatusModel } from 'shared/models/base-config/area-status.model';
import { UserModel } from 'shared/models/administration/user.model';

@Injectable()
export class AreaService {

  constructor(private http: HttpClient, private commonService: CommonService) {
    
  }

  public getAreas() {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/area/getareas').map(p => p as NameValueModel[]);
  }

  public queryAreas(queryModel: QueryAreaModel) {
    let model: any = {
      Code: queryModel.Code,
      Name: queryModel.Name,
      PlantId: queryModel.PlantId,
      Status: queryModel.Status
    };
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/area/queryareas', {
      params: new HttpParams({
        fromObject: model
      })
    }).map(p => p as AreaModel[]);
  }
  public queryAreasByPlantId(plantId: string) {
    let model: any = {
      PlantId: plantId,
      Status: 2 //Active
    };
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/area/queryareas', {
      params: new HttpParams({
        fromObject: model
      })
    }).map(p => p as AreaModel[]);
  }

  public getAreaStatuses() {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/area/getAreaStatuses').map(p => p as AreaStatusModel[]);
  }

  public saveArea(model: AreaModel) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/area/saveArea', model);
  }

  public removeArea(id: string) {
    return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/area/removeArea/' + id);
  }

  public getOwnerListByAreaId(areaId: string) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/area/getOwnerListByAreaId',
      {
        params: { areaId: areaId }
      }).map(p => p as UserModel[]);
  }

  public saveOwnerList(areaId: string, users: UserModel[]) {
    let model: any = {
      AreaId: areaId,
      Users: users
    };
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/area/saveOwnerList', model);
  }

  public saveFile(areaId: string, fileStream: any) {
    const formData = new FormData();
    formData.append('file', fileStream);
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/area/uploadFile?areaId=' + areaId, formData)
      .subscribe(data => {
      });
  }

  public getMapStrById(mapId: string) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/area/getMapStrById?mapId=' + mapId, { responseType: 'text' });
  }

}
