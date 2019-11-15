import { Component, OnInit } from '@angular/core';
import { RoleModel } from 'shared/models/administration/role.model';
import { AdministrationService } from 'shared/services';
import { FunctionGroupModel } from 'shared/models/administration/functionGroup.model';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.scss']
})
export class AccessControlComponent implements OnInit {

  constructor(private administrationService: AdministrationService,
    private translate: TranslateService,
    private snackBar: MatSnackBar) {
  }

  public roles$: RoleModel[];
  public selectRoleId: number;
  public functionGroupList: FunctionGroupModel[];

  ngOnInit(): void {
    this.getRoles().subscribe();
  }

  onRoleChange(roleId) {
    const role = this.roles$.find(a => a.Id === roleId);
    this.getFunctionGroupsByRole(role).subscribe();
  }

  save() {
    if (this.functionGroupList.length > 0 && this.functionGroupList.every(d => d.Role != null)) {
      this.saveRoleFunctions().subscribe();
    }
  }

  private getRoles() {
    return this.administrationService.getRoles().do(roleList => this.roles$ = roleList).do(roles => {
      if (roles.length > 0) {
        this.selectRoleId = roles[0].Id;
        this.getFunctionGroupsByRole(roles[0]).subscribe();
      } else {
        this.getFunctionGroups().subscribe();
      }
    });
  }

  private getFunctionGroups() {
    return this.administrationService.getFunctionGroups().do(groups => {
      this.setLanguage(groups);
      this.functionGroupList = groups;
    });
  }

  private getFunctionGroupsByRole(role: RoleModel) {
    return this.administrationService.getFunctionGroupsByRole(role).do(groups => {
      this.setLanguage(groups);
      this.functionGroupList = groups;
    });
  }

  private setLanguage(groups: FunctionGroupModel[]) {
    let language = window.localStorage.getItem('language');
    if (language !== null && language !== undefined) {
      if (language === "ch") {
        if (groups.length > 0) {
          groups.forEach(group => {
            group.GroupName = group.ChineseGroupName;
            if (group.FunctionList.length > 0) {
              group.FunctionList.forEach(fun => {
                fun.Name = fun.ChineseName;
              });
            }
          });
        }
      }
    }
  }

  private saveRoleFunctions() {
    return this.administrationService.saveRoleFunctions(this.functionGroupList).pipe(
      tap(res => {
        if (res > 0) {
          this.translate.get('RoleManagement.SaveAccessControlSuccessfully').subscribe((message) => {
            this.snackBar.open(message, '',
              {
                duration: 3000,
                verticalPosition: 'top',
                panelClass: 'snack-success'
              });
          });
        }
      })
    );
  }
}
