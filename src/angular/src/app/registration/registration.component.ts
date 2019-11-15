import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BciSidebarService } from '@bci/ng-core';
import { BehaviorSubject } from 'rxjs';
import { RegistrationModel } from 'shared/models/auth';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'shared/services/register.service';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, AfterViewInit {
  public form: FormGroup;

  constructor(
    private sidebarService: BciSidebarService,
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private translate: TranslateService,
    private snackBar: MatSnackBar
  ) {
    this.form = fb.group({
      'UserName': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'Password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'ConfirmPassword': ['', [Validators.required, this.confirmPassword.bind(this)]],
      'FirstName': ['', Validators.required],
      'SecondName': [''],
      'Mail': ['', this.validateMail.bind(this)],
      'MobileNo': ['']
    });
  }

  public model$ = new BehaviorSubject<RegistrationModel>(<RegistrationModel>{});

  confirmPassword(control: AbstractControl) {
    if (control.value !== this.model$.value.Password) {
      return {
        'confirmPassword': true
      };
    }

    return null;

  }

  validateMail(control: AbstractControl) {
    const mailRgx = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    if (!mailRgx.test(control.value)) {
      return {
        'validateMail': true
      };
    }
    return null;
  }

  public register() {
    if (!this.form.valid) {
      return;
    }

    this.translate.get('Login.RegisteredSuccessfully').subscribe((message) => {
      this.registerService.registerUser(this.model$.value).do(p => {
        if (p.Success) {
          this.snackBar.open(message, '',
            {
              duration: 3000,
              verticalPosition: 'top',
            });
          this.form.reset({});
          Object.keys(this.form.controls).forEach(key => {
            this.form.controls[key].setErrors(null);
          });
          this.router.navigate(['login']);
        } else {
          this.snackBar.open(p.Message, '',
            {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: 'snack-error'
            });
        }
      }).subscribe();
    });
  }

  public back() {
    this.router.navigate(['login']);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.sidebarService.setSidebarVisibility(false);
  }
}
