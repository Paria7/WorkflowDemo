import { Component, OnInit, ViewChild } from '@angular/core';
import { AdministrationService, AuthService } from 'shared/services';
import { UserModel } from 'shared/models/administration/user.model';
import { Router } from '@angular/router';
import { Utils } from 'shared';
import { takeWhile, mergeMap, tap } from 'rxjs/operators';
import { RegisterService } from 'shared/services/register.service';
import { ChangePasswordModel } from 'shared/models/auth';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatDialog, MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public user: UserModel;

  public form: FormGroup;
  public settingForm: FormGroup;

  public changePasswordModel = <ChangePasswordModel>{};
  public currentLanguage: string;

  constructor(private administrationService: AdministrationService,
    private authService: AuthService,
    private registerService: RegisterService,
    private router: Router,
    private utils: Utils,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {
    this.form = fb.group({
      'OldPassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'NewPassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'ConfirmPassword': ['', Validators.compose([Validators.required, this.confirmPassword.bind(this)])]
    });
    this.settingForm = fb.group({
      'Language': ['']
    });
    administrationService.getCurrentLoginUserInfo().subscribe(ret => {
      this.user = ret;
      this.changePasswordModel.Id = ret.Id;
      this.changePasswordModel.Name = ret.Name;
    });
  }

  confirmPassword(control: AbstractControl) {
    if (control.value !== this.changePasswordModel.NewPassword) {
      return {
        'confirmPassword': true
      };
    }
    return null;
  }

  ngOnInit() {
    this.currentLanguage = window.localStorage.getItem('language') || 'en';
  }

  onLanguageChange(language) {
    this.translate.use(language).subscribe(
      () => {
        window.localStorage.setItem('language', language);
        window.location.reload();
      }
    );
  }

  logout() {
    this.translate.get('Login.LogOutConfirm').subscribe((message) => {
      this.utils.confirm(message).subscribe(res => {
        if (res) {
          this.authService.logout();
          this.router.navigate(['login']);
        }
      });
    });
  }

  confirm() {



    // this.form.markAsTouched();
    if (this.form.invalid) {
      return;
    }
    // let message = this.validate();
    this.translate.get('UserManagement').subscribe(message => {
      let changePasswordConfirmMessage = message['ChangePasswordConfirm'];
      let changePasswordSuccessfullyMessage = message['ChangePasswordSuccessfully'];
      let oldPasswordWrongMessage = message['OldPasswordWrong'];
      this.utils.confirm(changePasswordConfirmMessage).pipe(
        takeWhile(res => res),
        mergeMap(() => this.registerService.changePassword(this.changePasswordModel)),

        tap(res => {
          if (res.Success) {
            this.snackBar.open(changePasswordSuccessfullyMessage, '',
              {
                duration: 3000,
                verticalPosition: 'top',
              });

            this.form.reset({});
            Object.keys(this.form.controls).forEach(key => {
              this.form.controls[key].setErrors(null);
            });
          } else {
            this.snackBar.open(oldPasswordWrongMessage, '',
              {
                duration: 3000,
                verticalPosition: 'top',
                panelClass: 'snack-error'
              });
          }
        })
      ).subscribe();
    });
  }
}
