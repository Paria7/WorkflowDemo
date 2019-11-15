import { Component, OnInit, ViewChild } from '@angular/core';
import { AdministrationService } from 'shared/services/administration.service';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from 'shared/models/administration/user.model';
import { RoleModel } from 'shared/models/administration/role.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatSnackBar, MatPaginator, MatTableDataSource } from '@angular/material';
import { EditUserComponent } from './edit-user.component';
import { Utils } from 'shared';
import { mergeMap, takeWhile, map } from 'rxjs/operators';
import { RegisterService } from 'shared/services/register.service';
import { ChangePasswordModel } from 'shared/models/auth';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../../../shared/services';
import { UserStatusModel } from 'shared/models/administration/userStatus.model';
import { PlantModel } from 'shared/models/base-config/plant.model';
import { PlantService } from 'shared/services';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})

export class UserManagementComponent implements OnInit {
  constructor(
    private administrationService: AdministrationService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private utils: Utils,
    private registerService: RegisterService,
    private plantService: PlantService,
    private translate: TranslateService,
    private commonService: CommonService,
    private snackBar: MatSnackBar
  ) {
    this.queryModel = {
      UserName: '',
      EmployeeNo: '',
      Role: '',
      Status: '',
      PlantId: ''
    };
    this.form = fb.group({
      'UserName': [''],
      'EmployeeNo': [''],
      'Role': [''],
      'Status': [''],
      'Plant': ['']
    });
  }

  public form: FormGroup;
  //public users$ = new BehaviorSubject<UserModel[]>([]);
  dataSource = new MatTableDataSource<UserModel>([]);
  public roles: RoleModel[];
  plants: Array<PlantModel> = [];
  userStatuses: Array<UserStatusModel> = [];
  public columns: string[] = ['no', 'name', 'employeeNo', 'status', 'plant', 'mail', 'roles', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  queryModel: any;

  add() {
    this.edit(<UserModel>{ Id: 0 });
  }

  delete(id: number) {
    this.translate.get('UserManagement.DeleteConfirm').subscribe((message) => {
      this.translate.get('UserManagement.DeleteUserSuccessfully').subscribe((resultMessage) => {
        this.utils.confirm(message).pipe(
          takeWhile(res => res),
          mergeMap(() => this.administrationService.removeUser(id)),
          map(() => this.snackBar.open(resultMessage, '',
            {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: 'snack-success'
            })),
          mergeMap(() => this.getUsers())
        ).subscribe();
      });
    });
  }

  edit(model: UserModel) {
    this.translate.get('UserManagement.SaveUserSuccessfully').subscribe((message) => {
      this.dialog.open(EditUserComponent, { minWidth: '800px', data: { user: Object.assign({}, model), roles: this.roles } })
        .afterClosed().takeWhile(p => p)
        .switchMap(() => this.getUsers())
        .map(() => {
          this.snackBar.open(message, '',
            {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: 'snack-success'
            });
        }
        ).subscribe();
    });
  }

  resetPassword(id: number) {
    const model = <ChangePasswordModel>{ Id: id, NewPassword: '123456' };
    this.translate.get('UserManagement.ResetConfirm').subscribe((message) => {
      this.translate.get('UserManagement.ResetPasswordSuccessfully').subscribe((resultMessage) => {
        this.utils.confirm(message).pipe(
          takeWhile(res => res),
          mergeMap(() => this.registerService.changePassword(model)),
          map(() => this.snackBar.open(resultMessage, '',
            {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: 'snack-success'
            }))
        ).subscribe();
      });
    });
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getPlants();
    this.getStatuses();
    this.getUsers().subscribe();
    this.getRoles().subscribe();
  }

  private getPlants() {
    this.plantService.getPlants().subscribe(plants => {
      this.plants = plants;
    });
  }

  private getStatuses() {
    this.administrationService.getStatuses().subscribe(userStatuses => {
      this.userStatuses = userStatuses;
    });
  }

  public query() {
    this.getUsers().subscribe();
  }

  private getUsers() {
    if (this.queryModel.Status === undefined) {
      this.queryModel.Status = '';
    }
    if (this.queryModel.Role === undefined) {
      this.queryModel.Role = '';
    }
    if (this.queryModel.PlantId === undefined) {
      this.queryModel.PlantId = '';
    }
    return this.administrationService.queryUsers(this.queryModel).do((users: Array<UserModel>) => {
      users.forEach(user => {
        user.RoleNames = user.Roles.map(item => item.Name).join(',');
      });
      this.dataSource.paginator.firstPage();
      this.dataSource.data = users;
    });
  }

  private getRoles() {
    return this.administrationService.getRoles().do(roleList => this.roles = roleList);
  }
}
