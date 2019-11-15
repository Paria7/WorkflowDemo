import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'shared/services/administration.service';
import { BehaviorSubject } from 'rxjs';
import { RoleModel } from 'shared/models/administration/role.model';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { EditRoleComponent } from './edit-role.component';
import { Utils } from 'shared';
import { takeWhile, mergeMap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit {
  systemRoles = [1, 3]; // system role can not be deleted. 1:System Admin 3:Normal User

  constructor(
    private administrationService: AdministrationService,
    private translate: TranslateService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private utils: Utils
  ) {
  }

  public roles$ = new BehaviorSubject<RoleModel[]>([]);

  public queryString: string;

  public columns: string[] = ['no', 'code', 'name', 'description', 'actions'];


  add() {
    this.edit(<RoleModel>{ id: 0, Code: '' });
  }

  delete(id: string) {
    this.translate.get('RoleManagement.DeleteConfirm').subscribe((message) => {
      this.utils.confirm(message).pipe(
        takeWhile(res => res),
        mergeMap(() => this.administrationService.removeRole(id)),
        mergeMap(() => this.getRoles())
      ).subscribe();
    });
  }

  edit(model: RoleModel) {
    this.dialog.open(EditRoleComponent, { minWidth: '800px', data: Object.assign({}, model) })
      .afterClosed().takeWhile(p => p)
      .switchMap(() => this.getRoles()).subscribe();

  }


  ngOnInit(): void {
    this.getRoles().subscribe();
  }

  private getRoles() {
    return this.administrationService.getRoles().do(roles => this.roles$.next(roles));
  }

  private searchRoles(queryName: string) {
    return this.administrationService.searchRoles(queryName).do(roles => this.roles$.next(roles));
  }
}
