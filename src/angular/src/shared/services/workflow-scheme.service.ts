import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';

@Injectable()
export class WorkflowSchemeService {

  constructor(private http: HttpClient, private commonService: CommonService) {
  }

  public delete(code: string) {
    return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/services/app/WorkflowScheme/Delete/' + code);
  }


}
