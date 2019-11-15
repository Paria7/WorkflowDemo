import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared';
// import { DxSchedulerModule, DxButtonModule } from 'devextreme-angular';
import { DatePipe } from '@angular/common';
import { OplCenterComponent, EditOplComponent, AssignOplToUserComponent } from './opl-center'
import { MyOplComponent, OplViewComponent, EditOplViewItemComponent, DeleteOrCancelReasonComponent } from './my-opl'
import { OplRoutingModule } from './opl-routing.module'
@NgModule({
  declarations: [
    OplCenterComponent,
    MyOplComponent,
    EditOplComponent,
    OplViewComponent,
    EditOplViewItemComponent,
    AssignOplToUserComponent,
    DeleteOrCancelReasonComponent
  ],
  imports: [CommonModule, OplRoutingModule, SharedModule.forRoot()],
  exports: [],
  providers: [DatePipe
  ],
  entryComponents: [EditOplComponent, EditOplViewItemComponent, AssignOplToUserComponent, DeleteOrCancelReasonComponent]
})
export class OplModule {
}

