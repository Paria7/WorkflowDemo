import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LineDetailModel, QueryLineDetailModel, LineStatusModel } from '../models/base-config';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';
import { CommonService } from './common.service';
import { UserModel } from 'shared/models/administration/user.model';

@Injectable()
export class LineDetailService {
    constructor(private http: HttpClient, private commonService: CommonService) {

    }

    public queryLines(queryModel: QueryLineDetailModel) {
        let model: any = {
            Code: queryModel.Code,
            Name: queryModel.Name,
            PlantId: queryModel.PlantId,
            AreaId: queryModel.AreaId,
            ValueStreamId: queryModel.ValueStreamId,
            Status: queryModel.Status
        };
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/linedetail/querylines', {
            params: new HttpParams({
                fromObject: model
            })
        }).map(p => p as LineDetailModel[]);
    }

    public queryLinesFromPortal(queryModel: QueryLineDetailModel) {
        let model: any = {
            Code: queryModel.Code,
            Status: queryModel.Status
        };
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/linedetail/queryLinesFromPortal', {
            params: new HttpParams({
                fromObject: model
            })
        }).map(p => p as LineDetailModel[]);
    }

    public queryLinesByAreaId(areaId: string) {
        let model: any = {
            AreaId: areaId,
            Status: 2 //Active
        };
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/linedetail/querylines', {
            params: new HttpParams({
                fromObject: model
            })
        }).map(p => p as LineDetailModel[]);
    }

    public queryLinesByValueStreamId(valueStreamId: string) {
        let model: any = {
            ValueStreamId: valueStreamId,
            Status: 2 //Active
        };
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/linedetail/querylines', {
            params: new HttpParams({
                fromObject: model
            })
        }).map(p => p as LineDetailModel[]);
    }

    public getLineStatuses() {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/linedetail/getlinestatuses').map(p => p as LineStatusModel[]);
    }

    public saveLine(model: LineDetailModel) {
        return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/linedetail/saveLine', model);
    }

    public removeLine(id: string) {
        return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/linedetail/removeLine/' + id);
    }

    public getOwnerListByLineId(lineId: string) {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/linedetail/getOwnerListByLineId',
            {
                params: { lineId: lineId }
            }).map(p => p as UserModel[]);
    }

    public getMemberListByLineId(lineId: string) {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/linedetail/getMemberListByLineId',
            {
                params: { lineId: lineId }
            }).map(p => p as UserModel[]);
    }

    public saveUserList(lineId: string, type: number, users: UserModel[]) {
        let model: any = {
            LineId: lineId,
            Type: type,
            Users: users
        };
        return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/linedetail/saveUserList', model);
    }

    public saveFile(lineId: string, fileStream: any) {
        const formData = new FormData();
        formData.append('file', fileStream);
        return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/linedetail/uploadFile?lineId=' + lineId, formData)
            .subscribe(data => {
            });
    }

    public getMapStrById(mapId: string) {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/linedetail/getMapStrById?mapId=' + mapId, { responseType: 'text' });
    }
}