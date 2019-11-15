import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ValueStreamModel, QueryValueStreamModel, ValueStreamStatusModel } from '../models/base-config';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';
import { CommonService } from './common.service';
import { UserModel } from 'shared/models/administration/user.model';

@Injectable()
export class ValueStreamService {
    constructor(private http: HttpClient, private commonService: CommonService) {

    }

    public queryValueStreams(queryModel: QueryValueStreamModel) {
        let model: any = {
            Code: queryModel.Code,
            Name: queryModel.Name,
            PlantId: queryModel.PlantId,
            AreaId: queryModel.AreaId,
            Status: queryModel.Status
        };
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/valuestream/queryValueStreams', {
            params: new HttpParams({
                fromObject: model
            })
        }).map(p => p as ValueStreamModel[]);
    }

    public queryValueStreamsByAreaId(areaId: string) {
        let model: any = {
            Code: '',
            Name: '',
            PlantId: '',
            AreaId: areaId,
            Status: 2
        };
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/valuestream/queryValueStreams', {
            params: new HttpParams({
                fromObject: model
            })
        }).map(p => p as ValueStreamModel[]);
    }

    public getValueStreamStatuses() {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/valuestream/getValueStreamStatuses').map(p => p as ValueStreamStatusModel[]);
    }

    public saveValueStream(model: ValueStreamModel) {
        return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/valuestream/saveValueStream', model);
    }

    public removeValueStream(id: string) {
        return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/valuestream/removeValueStream/' + id);
    }
}