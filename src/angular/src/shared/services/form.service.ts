import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { FlowSchemeInsertModel } from "shared/models/workflow";
import { CommonService } from './common.service';
import { FormDetailsModel } from 'shared/models/form';

@Injectable({
    providedIn: 'root'
})
export class FormService {
    constructor(private http: HttpClient, private commonService: CommonService) {
    }

    getAll(): Observable<any> {
        return this.http.get<any>('./assets/Form/FormControlList.json');
    }

    public saveFormData(model: FormDetailsModel) {
        return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/Form/SaveFormData', model);
    }

    public getFormData(): Observable<FormDetailsModel> {
        return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/Form/GetFormData').map(p => p as FormDetailsModel);
    }
}
