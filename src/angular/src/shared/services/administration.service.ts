import { HttpClient, HttpParams } from '@angular/common/http';
import { UserModel } from '../models/administration/user.model';
import { RoleModel } from '../models/administration/role.model';
import { UserStatusModel,QueryUserOutPut } from 'shared/models/administration';
import { SystemParameterModel } from '../models/administration/systemParameter.model';
import { Injectable } from '@angular/core';
import { FunctionGroupModel } from '../models/administration/functionGroup.model';
import { ApiConfigService } from './api-config.service';
import { CommonService } from './common.service';

@Injectable()
export class AdministrationService {

  constructor(private http: HttpClient, private commonService: CommonService) {
  }

  public getUsers() {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/administration/getUsers').map(p => p as UserModel[]);
  }

  public searchUsers(filter: string) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/administration/searchUsers', {
      params: { filter }
    }).map(p => p as UserModel[]);
  }

  public queryUsers(model: any) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/administration/queryUsers', {
      params: new HttpParams({
        fromObject: model
      })
    }).map(p => p as UserModel[]);
  }

  public getCurrentLoginUserInfo() {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/administration/getLoginUserInfo').map(p => p as UserModel);
  }

  public saveUser(model: UserModel) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/administration/saveUser', model);
  }

  public removeUser(id: number) {
    return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/administration/removeUser/' + id);
  }

  public getRoles() {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/administration/getRoles').map(p => p as UserModel[]);
  }

  public searchRoles(filter: string) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/administration/searchRoles', {
      params: { filter }
    }).map(p => p as UserModel[]);
  }

  public saveRole(model: UserModel) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/administration/saveRole', model);
  }

  public removeRole(id: string) {
    return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/administration/removeRole/' + id);
  }

  public getFunctionGroups() {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/administration/getFunctionGroups').map(p => p as FunctionGroupModel[]);
  }

  public getFunctionGroupsByRole(role: RoleModel) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/administration/getFunctionGroupsByRole', role).map(p => p as FunctionGroupModel[]);
  }

  public saveRoleFunctions(functionGroups: FunctionGroupModel[]) {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/administration/saveRoleFunctions', functionGroups).map(p => p as number);
  }

  public getUserAdAccount(userInfo: string) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/administration/GetUserAdAccount', {
      params: { userInfo }
    }).map(p => p as UserModel[]);
  }

  public getStatuses() {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/administration/getUserStatuses').map(p => p as UserStatusModel[]);
  }
}
