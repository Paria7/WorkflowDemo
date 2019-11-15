import { NgModule } from '@angular/core';
import { SharedModule } from 'shared';
import { BaseConfigRoutingModule } from './base-config-routing.module';
import { LineComponent, EditLineComponent } from './line';
import { PlantComponent, EditPlantComponent } from './plant';
import { AreaDetailComponent, AddOrEditAreaDetailComponent } from './area-detail';
import { LineDetailComponent, AddOrEditLineDetailComponent } from './line-detail';
import { StationDetailComponent, AddOrEditStationDetailComponent, DeviceInStationComponent } from './station-detail'
import { DeviceDetailComponent, AddOrEditDeviceDetailComponent } from './device-detail';
import { UserListComponent } from './user-list';
import { SearchUserComponent } from './search-user';
import { LineEditComponent } from './line-edit/line-edit.component';
// import { AngularDraggableModule } from 'angular2-draggable';
import { AreaListComponent } from './area-list/area-list.component';
import { FileUploaderDemoComponent } from './file-uploader-demo/file-uploader-demo.component';
import { StationBackgroundImageComponent } from './station-background-image/station-background-image.component';
import { EditLineeditDialogComponent } from './line-edit/edit-lineedit-dialog/edit-lineedit-dialog.component';
import { ImageUploadModule } from '../../shared/components/image-upload/image-upload.module';
import { ValueStreamComponent, AddOrEditValueStreamComponent } from './value-stream';
import { OfflineRecordModalComponent } from './line-edit/offline-record-modal/offline-record-modal.component';

@NgModule({
  imports: [
    BaseConfigRoutingModule,
    SharedModule.forRoot(),
    // AngularDraggableModule,
    ImageUploadModule
  ],
  declarations: [
    LineComponent,
    PlantComponent,
    AreaDetailComponent,
    LineDetailComponent,
    StationDetailComponent,
    DeviceDetailComponent,
    EditPlantComponent,
    EditLineComponent,
    AddOrEditAreaDetailComponent,
    AddOrEditLineDetailComponent,
    AddOrEditStationDetailComponent,
    AddOrEditDeviceDetailComponent,
    DeviceInStationComponent,
    LineEditComponent,
    UserListComponent,
    SearchUserComponent,
    AreaListComponent,
    FileUploaderDemoComponent,
    StationBackgroundImageComponent,
    EditLineeditDialogComponent,
    ValueStreamComponent,
    AddOrEditValueStreamComponent,
    OfflineRecordModalComponent
  ],
  exports: [
    LineComponent,
    PlantComponent,
    AreaDetailComponent,
    LineDetailComponent,
    StationDetailComponent,
    DeviceDetailComponent,
    LineEditComponent,
    ValueStreamComponent
  ],
  entryComponents: [
    EditPlantComponent,
    EditLineComponent,
    AddOrEditAreaDetailComponent,
    AddOrEditLineDetailComponent,
    AddOrEditStationDetailComponent,
    AddOrEditDeviceDetailComponent,
    UserListComponent,
    SearchUserComponent,
    DeviceInStationComponent,
    AreaListComponent,
    EditLineeditDialogComponent,
    AddOrEditValueStreamComponent,
    OfflineRecordModalComponent
  ]
})
export class BaseConfigModule {
}
