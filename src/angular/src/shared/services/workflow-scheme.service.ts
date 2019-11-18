import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { Observable } from 'rxjs';
import { GetWorkflowSchemesOutput, WorkflowSchemeDto } from 'shared/models/workflow';

@Injectable()
export class WorkflowSchemeService {
  constructor(private http: HttpClient, private commonService: CommonService) {
  }

  public delete(code: string) {
    return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/services/app/WorkflowScheme/Delete/' + code);
  }

  public GetSchemes(): Observable<GetWorkflowSchemesOutput> {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/WorkflowEngine/GetSchemes').map(p => p as GetWorkflowSchemesOutput);
  }
}
