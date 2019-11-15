import { Component, OnInit, Inject } from '@angular/core';
import { UserModel } from 'shared/models/administration/user.model';
import { UserStatusModel } from 'shared/models/administration/userStatus.model';
import { RoleModel } from 'shared/models/administration/role.model';
import { MatDialog, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AdministrationService } from 'shared/services/administration.service';
import { TranslateService } from '@ngx-translate/core';
import { SearchUserComponent } from '../user-management/search-user/search-user.component';
import { useAnimation } from '@angular/animations/src/animation_metadata';
import { LineModel, PlantModel, QueryLineModel } from 'shared/models/base-config';
import { PlantService } from 'shared/services';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {

  public form: FormGroup;
  public user$ = new BehaviorSubject<UserModel>({ Code: '' });
  public roles: RoleModel[];
  public selectRoleIds: number[];
  plants: Array<PlantModel> = [];
  userStatuses: Array<UserStatusModel> = [];
  public mailRgx = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;

  constructor(public dialogRef: MatDialogRef<EditUserComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private dialogData: { user: UserModel, roles: RoleModel[] },
    private translate: TranslateService,
    private plantService: PlantService,
    private administrationService: AdministrationService) {
    this.form = fb.group({
      'Name': ['', Validators.required],
      'FirstName': [''],
      'SecondName': [''],
      'Mail': ['', [Validators.required, Validators.pattern(this.mailRgx)]],
      'MobileNo': [''],
      'PhoneNo': [''],
      'EmployeeNo': ['', Validators.required],
      'Status': ['', Validators.required],
      'PlantId': ['', Validators.required],
      'RoleIds': [0]
    });
    this.roles = dialogData.roles;
    this.user$.next(dialogData.user);
    if (dialogData.user.Roles !== undefined) {
      this.selectRoleIds = dialogData.user.Roles.map(d => d.Id);
    }
    if (this.user$.value.Id === 0) {
      this.roles.forEach((role) => {
        if (role.Name === "Normal User") {
          this.selectRoleIds = [role.Id];
        }
      });
    }
    this.getPlants();
    this.getStatuses();
  }

  save() {
    this.form.controls["Name"].setValue(this.form.controls["Name"].value.trim());
    // this.form.controls["FirstName"].setValue(this.form.controls["FirstName"].value.trim());
    // this.form.controls["SecondName"].setValue(this.form.controls["SecondName"].value.trim());
    this.form.controls["Mail"].setValue(this.form.controls["Mail"].value.trim());
    // this.form.controls["MobileNo"].setValue(this.form.controls["MobileNo"].value.trim());
    // this.form.controls["PhoneNo"].setValue(this.form.controls["PhoneNo"].value.trim());
    this.form.controls["EmployeeNo"].setValue(this.form.controls["EmployeeNo"].value.trim());

    if (!this.form.valid) {
      return;
    }

    this.user$.value.Roles = this.roles.filter(d => this.selectRoleIds.includes(d.Id));
    if (this.user$.value.Roles.length === 0) {
      this.translate.get('UserManagement.SelectedOneRole').subscribe((message) => {
        this.snackBar.open(message, '',
          {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snack-error'
          });
      });
      return;
    }

    this.administrationService.saveUser(this.user$.value)
      .do(() => this.dialogRef.close(true)).subscribe();
  }

  private getStatuses() {
    this.administrationService.getStatuses().subscribe(userStatuses => {
      this.userStatuses = userStatuses;
    });
  }

  private getPlants() {
    this.plantService.getPlants().subscribe(plants => {
      this.plants = plants;
    });
  }

  search() {
    this.dialog.open(SearchUserComponent, {
      minWidth: '800px',
      minHeight: '600px',
      maxHeight: '95vh',
    }).afterClosed().subscribe((result: any) => {
      if (result !== undefined) {
        let dialogResult = result.success;
        let user = result.user;
        if (dialogResult) {
          this.user$.value.Name = user.Name;
          this.user$.value.FirstName = user.FirstName;
          this.user$.value.SecondName = user.SecondName;
          this.user$.value.Mail = user.Mail;
        }
      }
    });
  }
}
