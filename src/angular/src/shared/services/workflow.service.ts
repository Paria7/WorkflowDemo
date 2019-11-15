import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { FlowSchemeInsertModel, FlowSchemeModel } from "shared/models/workflow";
import { CommonService } from './common.service';

@Injectable({
    providedIn: 'root'
})
export class WorkflowService {
    constructor(private http: HttpClient, private commonService: CommonService) {
    }

    public saveFlowScheme(model: FlowSchemeInsertModel): Observable<any> {
        return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/FlowScheme/SaveFlowScheme', model);
    }

    public saveFlowSchemeData(flowContent: any): Observable<any> {
        const formData = new FormData();
        formData.append('flowContent', flowContent);
        return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/FlowScheme/SaveFlowSchemeData', formData);
    }

    public GetFlowSchemeData(): Observable<FlowSchemeModel> {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/FlowScheme/GetFlowSchemeData').map(p => p as FlowSchemeModel);
    }
}