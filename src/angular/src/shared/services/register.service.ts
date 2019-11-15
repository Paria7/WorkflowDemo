import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegistrationModel, ChangePasswordModel} from '../models/auth';
import {Observable} from 'rxjs/Observable';
import {ApiConfigService} from './api-config.service';
import {CommonService} from './common.service';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient, private commonService: CommonService) {
  }

  public registerUser(model: RegistrationModel): Observable<RegistrationModel> {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/registration/registerUser', model) as Observable<RegistrationModel>;
  }

  public changePassword(model: ChangePasswordModel): Observable<ChangePasswordModel> {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/registration/changePassword', model) as Observable<ChangePasswordModel>;
  }
}
