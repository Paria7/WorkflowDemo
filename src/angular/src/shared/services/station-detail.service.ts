import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LineDetailModel, QueryLineDetailModel, LineStatusModel } from '../models/base-config';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';
import { CommonService } from './common.service';
import { NameValueModel } from 'shared/models/tpm-amendment'
import { StationDetailOutPut, QueryStationDetailModel, StationDetailModel } from 'shared/models/base-config'

@Injectable()
export class StationDetailService {
    constructor(private http: HttpClient, private commonService: CommonService) {
        this.commonService.getApiConfig().ApiBaseUrl = this.commonService.getApiConfig().ApiBaseUrl;
    }

    public queryStations(queryModel: QueryStationDetailModel) {
        let model: any = {
            Code: queryModel.Code,
            Name: queryModel.Name,
            PlantId: queryModel.PlantId,
            AreaId: queryModel.AreaId,
            ValueStreamId: queryModel.ValueStreamId,
            LineId: queryModel.LineId,
            Status: queryModel.Status,
            PageIndex: queryModel.PageIndex,
            PageSize: queryModel.PageSize
        };
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/stationDetail/queryStations', {
            params: new HttpParams({
                fromObject: model
            })
        }).map(p => p as StationDetailOutPut);
    }
    public getStationsByLine(id: string) {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/stationDetail/getStationsByLine',
            {
                params: { id: id }
            }).map(p => p as NameValueModel[]);
    }

    public getStationStatuses() {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/stationDetail/getStationStatuses').map(p => p as NameValueModel[]);
    }

    public saveStation(model: StationDetailModel) {
        return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/stationDetail/saveStation', model);
    }

    public removeStation(id: string) {
        return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/stationDetail/removeStation/' + id);
    }
}