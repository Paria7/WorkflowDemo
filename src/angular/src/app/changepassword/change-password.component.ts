import { Component, OnInit } from '@angular/core';
import { ChangePasswordModel } from 'shared/models/auth';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from 'shared/services/register.service';
import { MatSnackBar } from '@angular/material';
import { BciSidebarService } from '@bci/ng-core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  public form: FormGroup;

  public model = <ChangePasswordModel>{};

  private route: ActivatedRoute;

  constructor(private sidebarService: BciSidebarService,
              private fb: FormBuilder,
              private router: Router,
              r: ActivatedRoute,
              private registerService: RegisterService,
              private snackBar: MatSnackBar
  ) {
    this.route = r;
    this.route
      .queryParams
      .subscribe(params => {
        this.model.Id = params['userId'];
        this.model.Name = params['userName'];
      });
    this.form = fb.group({
      'UserName': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'OldPassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'NewPassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'ConfirmPassword': ['', [Validators.required, this.confirmPassword.bind(this)]]
    });
  }

  confirmPassword(control: AbstractControl) {
    if (control.value !== this.model.NewPassword) {
      return {
        'confirmPassword': true
      };
    }

    return null;

  }

  public changepassword() {
    if (!this.form.valid) {
      return;
    }
    this.registerService.changePassword(this.model).do(res => {
      if (res.Success) {
        this.snackBar.open('Password changed successfully!', '',
          {
            duration: 3000,
            verticalPosition: 'top',
          });
        this.form.reset({});
        Object.keys(this.form.controls).forEach(key => {
          this.form.controls[key].setErrors(null);
        });
      } else {
        this.snackBar.open(res.Message, '',
          {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snack-error'
          });
      }
    }).subscribe();

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
