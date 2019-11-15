import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { TpmPlanPageModel, TpmPlanHistoryModel, QueryPlanModel, TpmPlanDetailsPageModel, FileModel, TpmPlanModel, TpmPlanItemDetailsModel, QueryTPMPlanDetailsModel, CodeConfigModel, TpmPlanRollbackModel, TpmPlanPublishFreezeModel, TpmPlanImagesOutputModel } from '../models/tpm-plan';
import { CommonService } from './common.service';
import { TpmPlanDetailModel } from 'shared/models/tpm-amendment';

@Injectable({
    providedIn: 'root'
})
export class TpmPlanService {

    constructor(private http: HttpClient, private commonService: CommonService) {
    }

    public queryTpmPlans(queryPlanModel: any): Observable<TpmPlanPageModel> {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/GetTpmPlanData', {
            params: new HttpParams({
                fromObject: queryPlanModel
            })
        }).map(p => p as TpmPlanPageModel);
    }

    public removeTpmPlan(id: string) {
        return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/RemoveTpmPlan/' + id);
    }

    public publishOrFreezeTpmPlan(model: TpmPlanPublishFreezeModel) {
        return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/PublishOrFreezeTpmPlan/', model);
    }

    public queryTpmPlanHistory(queryModel: any): Observable<TpmPlanHistoryModel[]> {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/GetTpmPlanHistoryData', {
            params: new HttpParams({
                fromObject: queryModel
            })
        }).map(p => p as TpmPlanHistoryModel[]);
    }

    public importTpmPlan(file: File, queryModel: QueryPlanModel): Observable<any> {
        const formData = new FormData();
        formData.append('importedExcel', file);
        formData.append('DeviceId', queryModel.DeviceId);
        return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/ImportTpmPlan', formData);
    }

    public queryTpmPlanDetails(queryModel: any): Observable<TpmPlanDetailsPageModel> {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/GetTpmPlanDetails', {
            params: new HttpParams({
                fromObject: queryModel
            })
        }).map(p => p as TpmPlanDetailsPageModel);
    }

    public queryTpmPlanItemDetails(queryModel: any): Observable<TpmPlanItemDetailsModel> {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/GetTpmPlanItemDetails', {
            params: new HttpParams({
                fromObject: queryModel
            })
        }).map(p => p as TpmPlanItemDetailsModel);
    }

    public getImagesById(Id: string) {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/getImagesById?Id=' + Id,
            {}).map(p => p as TpmPlanImagesOutputModel[]);
    }

    public removeTpmPlanDetails(id: string) {
        return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/RemoveTpmPlanDetails/' + id);
    }

    public downloadTpmPlanTemplate() {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/DownloadStandardTemplate', {
            responseType: 'blob'
        });
    }

    public saveTpmPlanItemDetails(model: TpmPlanItemDetailsModel) {
        return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/SaveTpmPlanItemDetails', model);
    }

    // public saveFile(tpmPlanDetailsId: string, fileStream: any) {
    //     const formData = new FormData();
    //     formData.append('file', fileStream);
    //     return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/uploadFile?tpmPlanDetailsId=' + tpmPlanDetailsId, formData)
    //         .subscribe(data => {
    //         });
    // }

    public saveFile(tpmPlanDetailsId: string, fileStream: File[]) {
        const formData = new FormData();
        console.log('fileStream', fileStream);
        for (var i = 0; i < fileStream.length; i++) {
            formData.append('file', fileStream[i]);
        }
        console.log('formData', formData);
        return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/uploadFile?tpmPlanDetailsId=' + tpmPlanDetailsId, formData)
            .subscribe(data => {
            });
    }

    public exportTpmPlanDetail(queryModel: any): Observable<any> {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/ExportTpmDetailToExcel', {
            params: new HttpParams({
                fromObject: queryModel
            }),
            responseType: 'blob'
        });
    }

    public previewTpmPlanDetail(queryModel: any): Observable<any> {

        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/PreviewExcel', {
            params: new HttpParams({
                fromObject: queryModel
            }),
            // responseType: 'blob'
        }).map(p => p as any);
    }

    getMaintTypes(): Observable<CodeConfigModel[]> {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpm/GetMaintTypes')
            .map(p => p as CodeConfigModel[]);
    }

    public rollbackTpmPlan(model: TpmPlanRollbackModel) {
        return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmPlan/RollbackTpmPlan/', model);
    }
}
