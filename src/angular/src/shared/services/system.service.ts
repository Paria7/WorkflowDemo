import {Inject, Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {SidebarNavItem} from '@bci/ng-core';
import {NavigationResponse, CORE_CONFIG} from '@bci/ng-core';
import {ApiConfigService} from './api-config.service';
import {CommonService} from './common.service';

@Injectable()
export class SystemService {
  sidebarLinks: SidebarNavItem[] = [];

  constructor(private http: HttpClient, private location: Location, @Inject(CORE_CONFIG) private config: any,
              private commonService: CommonService) {
  }

  getUserNavigationItems(): Observable<SidebarNavItem[]> {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/System/GetUserMenus')
      .pipe(
        map((links: NavigationResponse) => {
          if (links instanceof Array) {
            this.sidebarLinks = links;
          } else {
            this.sidebarLinks = links.results;
          }

          return this.sidebarLinks;
        })
      );
  }
}
