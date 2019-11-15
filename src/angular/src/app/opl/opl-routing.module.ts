import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MyOplComponent} from './my-opl/my-opl.component';
import {OplCenterComponent} from './opl-center/opl-center.component'
const routes: Routes = [
  {
    path: 'my-opl',
    component: MyOplComponent
  }
  ,
  {
    path: 'opl-list',
    component: OplCenterComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class OplRoutingModule {
}