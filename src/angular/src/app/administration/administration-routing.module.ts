import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management';
import { RoleManagementComponent } from './role-management';
import { AccessControlComponent } from './access-control';
import {AuditLogComponent} from './audit-log/audit-log.component';

const routes: Routes = [
  {
    path: 'user-management',
    component: UserManagementComponent
  },
  {
    path: 'role-management',
    component: RoleManagementComponent
  },
  {
    path: 'access-control',
    component: AccessControlComponent
  },
  {
    path: 'audit-log',
    component: AuditLogComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AdministrationRoutingModule {
}
