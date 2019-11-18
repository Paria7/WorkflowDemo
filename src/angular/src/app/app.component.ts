import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BciImprintComponent, CORE_CONFIG, ModalWindowService, NavigationService, SidebarNavItem, BciSidebarService } from '@bci/ng-core';

import { Router } from '@angular/router';
import { AuthService } from 'shared/services';
import { BehaviorSubject, Observable, of, empty } from 'rxjs';
import { SystemService } from 'shared/services/system.service';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { PaginatorService } from 'shared/services';
import { MatDialog, MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { HtmlParser } from '@angular/compiler';
import { IConfig } from './interface/config';
import { ApiConfigService } from '../shared/services/api-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public sidebarLinks$ = new BehaviorSubject<SidebarNavItem[]>([]);
  title: string;
  public sidebarFooterLinks$ = new BehaviorSubject<SidebarNavItem[]>([
    {
      title: '',
      url: 'user-profile',
      icon: 'Bosch-Ic-user-filled'
    },
    {
      id: 'imprint',
      cb: () => this.onAbout(),
      title: 'Imprint',
      icon: 'Bosch-Ic-information'
    }
  ]);


  constructor(private titleService: Title,
    @Inject(CORE_CONFIG) private config: any,
    private navigationService: NavigationService, private router: Router,
    private modalWindowService: ModalWindowService, private authService: AuthService,
    private sidebarService: BciSidebarService,
    private dialog: MatDialog,
    private systemService: SystemService,
    private translate: TranslateService,
    private paginatorService: PaginatorService,
    private apiConfigService: ApiConfigService) {

    this.getConfig();
  }

  ngOnInit() {
    // this.sidebarService.setSidebarState(false);
    this.translate.get('Common').subscribe(message => {
      this.title = message['Title'];
      const logo = message['Logo'];
      const links = this.sidebarFooterLinks$.value;
      links[1].title = message['Imprint'];
      this.titleService.setTitle(this.title);
      document.getElementsByClassName('sidenav-header')[0].firstElementChild.outerHTML = '<h1 _ngcontent-c4="">' + logo + '</h1>';
    });
    this.paginatorService.translatePaginator(this.paginator);

    this.authService.userName$.pipe(
      tap(name => {
        const links = this.sidebarFooterLinks$.value;
        links[0].title = name;
        this.sidebarFooterLinks$.next(links);
      }),
      switchMap(name => {
        if (!name) {
          return of([]);
        }
        return this.systemService.getUserNavigationItems();
      }),
      catchError(() => empty()),
      tap(links => {
        const language = window.localStorage.getItem('language');
        if (language !== null && language !== undefined) {
          document.getElementsByClassName('sidenav-header')[0].classList.add(language);

          if (language === 'ch') {
            links.forEach(l => {
              l.title = l.chineseTitle;
              if (l.items.length > 0) {
                l.items.forEach(item => {
                  item.title = item.chineseTitle;
                });
              }
            });
          }
        }
        this.sidebarLinks$.next(links);
      })
    ).subscribe();
  }

  getSidebarLinks(): Observable<SidebarNavItem[]> {
    return this.systemService.getUserNavigationItems();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  onAbout() {
    this.modalWindowService.openDialogWithComponent(BciImprintComponent, {
      width: '800px'
    });
  }

  getConfig() {
    return this.apiConfigService.getConfig().subscribe(
      data => {
        console.log('apiConfig-读取配置文件', data);
        localStorage.setItem('apiConfig', JSON.stringify(data));
      },
      error => {
        console.log(error);
      });
  }
}
