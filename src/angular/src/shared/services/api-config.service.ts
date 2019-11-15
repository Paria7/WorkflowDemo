import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IConfig} from '../../app/interface/config';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiConfigService {

  constructor(private http: HttpClient) {

  }

  getConfig(): Observable<any> {
    return this.http.get('./assets/config/config.json');
  }

  // getApiConfig(): IConfig {
  //   // console.log('apiConfig-获取localStorage', localStorage.getItem('apiConfig'));
  //   var apiConfig = localStorage.getItem('apiConfig');
  //   if (!apiConfig) {
  //     console.log('配置为null');
  //     this.getConfig().subscribe(
  //       data => {
  //         console.log('配置为null,再次读取配置文件', data);
  //         localStorage.setItem('apiConfig', JSON.stringify(data));
  //         return JSON.parse(localStorage.getItem('apiConfig'));
  //       },
  //       error => {
  //         console.log(error);
  //       });
  //   }
  //   return JSON.parse(apiConfig);
  // }
}
