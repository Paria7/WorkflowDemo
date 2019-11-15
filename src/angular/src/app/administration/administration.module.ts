import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoleManagementComponent} from './role-management';
import {UserManagementComponent} from './user-management';
import {AdministrationRoutingModule} from './administration-routing.module';
import {SharedModule} from 'shared';
import {EditUserComponent} from './user-management/edit-user.component';
import {SearchUserComponent} from './user-management/search-user/search-user.component';
import {AccessControlComponent} from './access-control';
import {EditRoleComponent} from './role-management/edit-role.component';
import {FunctionGroupComponent} from './access-control/function-group/function-group.component';
import {AuditLogComponent} from './audit-log/audit-log.component';
import {DetailComponent} from './audit-log/detail/detail.component';


@NgModule({
  declarations: [
    RoleManagementComponent,
    UserManagementComponent,
    EditUserComponent,
    AccessControlComponent,
    EditRoleComponent,
    FunctionGroupComponent,
    SearchUserComponent,
    AuditLogComponent,
    DetailComponent
  ],
  imports: [CommonModule, AdministrationRoutingModule, SharedModule.forRoot()],
  exports: [],
  providers: [],
  entryComponents: [EditUserComponent, SearchUserComponent, EditRoleComponent, DetailComponent]
})
export class AdministrationModule {
}

