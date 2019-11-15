import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, BehaviorSubject, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {PlantModel, LoginModel, LoginResponse} from '../models/auth';
import {ApiConfigService} from './api-config.service';
import {CommonService} from './common.service';


@Injectable()
export class AuthService {
  private tokenKey = 'token';

  public userName$ = new BehaviorSubject<string>(this.getUserName());

  constructor(private http: HttpClient, private router: Router,
              private commonService: CommonService) {
  }


  
  public getPlants() {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/auth/getPlants').map(p => <PlantModel[]>p);
  }

  public login(model: LoginModel) {

    console.log('登录获取的api-base-url:' + this.commonService.getApiConfig().ApiBaseUrl);
    return this.http.post<LoginResponse>(this.commonService.getApiConfig().ApiBaseUrl + 'api/auth/login', model).pipe(
      tap(res => {
        if (res.Success) {
          this.userName$.next(res.User.Name);
        }
      })
    );
  }

  public logout() {
    sessionStorage.setItem(this.tokenKey, undefined);
    this.userName$.next(undefined);
  }

  public getUserName(): string {
    const token = sessionStorage.getItem(this.tokenKey);
    if (token === undefined || token === null || token === '' || token === 'undefined') {
      return null;
    }
    const data = <any>this.jwt_decode(token);
    return data.unique_name;
  }

  public checkLogin(): boolean {
    const token = sessionStorage.getItem(this.tokenKey);
    return token != null;
  }

  jwt_decode(token) {
    if (token === undefined || token === null || token === '' || token === 'undefined') {
      return undefined;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  }

  private getLocalToken(): string {
    return sessionStorage.getItem(this.tokenKey);
  }

  private initAuthHeaders(): HttpHeaders {
    const token = this.getLocalToken();
    if (token == null) {
      throw new Error('No token');
    }

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token);
    return headers;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} error: ${error.message}`);
      return of(result as T);
    };
  }

}
