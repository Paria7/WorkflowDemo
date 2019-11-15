import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {BciSidebarService, LoggerService} from '@bci/ng-core';
import {Router} from '@angular/router';
import {AuthService} from 'shared/services/auth.service';
import {BehaviorSubject} from 'rxjs';
import {PlantModel, LoginModel} from 'shared/models/auth';
import {UserDataService} from 'shared/services';
import {MatSnackBar} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {ApiConfigService} from '../../shared/services/api-config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {
  model: LoginModel = {} as LoginModel;
  loading = false;
  errorMsg = '';
  useTenant = true;
  plants$ = new BehaviorSubject<PlantModel[]>([]);

  constructor(private router: Router,
              private logger: LoggerService,
              private authService: AuthService,
              private userDataService: UserDataService,
              private sidebarService: BciSidebarService,
              private translate: TranslateService,
              private snackBar: MatSnackBar, private apiConfigService: ApiConfigService) {
    // this.getConfig();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.sidebarService.setSidebarVisibility(false);
  }

  ngOnDestroy() {
    this.sidebarService.setSidebarVisibility(true);
  }

  login() {
    this.translate.get('Validator.PasswordExpired').subscribe((message) => {
      this.errorMsg = '';
      this.authService.login(this.model).do(p => {
        if (!p.Success) {
          this.errorMsg = 'Login randomly failed with the provided credentials. Please ensure customer, username and password are correct.';
          return;
        }

        if (p.User.ExpireDate != null && p.User.ExpireDate < new Date()) {
          this.snackBar.open(message, '',
            {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: 'snack-error'
            });
          this.router.navigate(['change-password'], {queryParams: {userId: p.User.Id, userName: p.User.Name}});
          return;
        }

        // this.userDataService.isAuthenticated$.next(true);
        this.router.navigate(['/']);
      }).subscribe();
    });
  }

  register() {
    this.router.navigate(['register']);
  }

  logout() {
    this.logger.log('Logged out');
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
