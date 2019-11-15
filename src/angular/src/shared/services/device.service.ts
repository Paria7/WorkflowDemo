import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NameValueModel } from '../models/tpm-amendment';
import { CommonService } from './common.service';
import { QueryDeviceDetailModel, DeviceDetailOutPut, DeviceDetailModel, DeviceUsersOutPut } from 'shared/models/base-config'
@Injectable()
export class DeviceService {

    constructor(private http: HttpClient, private commonService: CommonService) {
        this.commonService.getApiConfig().ApiBaseUrl = this.commonService.getApiConfig().ApiBaseUrl;
    }

    public getDevicesByLine(id: string) {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/device/getDevicesByLine',
            {
                params: { id: id }
            }).map(p => p as NameValueModel[]);
    }
    public queryDevices(queryModel: QueryDeviceDetailModel) {
        let model: any = {
            Code: queryModel.Code,
            Name: queryModel.Name,
            PlantId: queryModel.PlantId,
            AreaId: queryModel.AreaId,
            ValueStreamId: queryModel.ValueStreamId,
            LineId: queryModel.LineId,
            StationId: queryModel.StationId,
            Status: queryModel.Status,
            PageIndex: queryModel.PageIndex,
            PageSize: queryModel.PageSize
        };
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/device/queryDevices', {
            params: new HttpParams({
                fromObject: model
            })
        }).map(p => p as DeviceDetailOutPut);
    }

    public getDeviceStatuses() {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/device/getDeviceStatuses').map(p => p as NameValueModel[]);
    }

    public saveDevice(model: DeviceDetailModel) {
        return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/device/saveDevice', model);
    }
    public saveDeviceUsers(model: DeviceUsersOutPut) {
        return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/device/saveDeviceUsers', model);
    }
    public removeDevice(id: string) {
        return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/device/removeDevice/' + id);
    }
    public getDeviceUsers(deviceId: string) {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/device/getDeviceUsers',
            {
                params: { id: deviceId }
            }).map(p => p as DeviceUsersOutPut);
    }
}
