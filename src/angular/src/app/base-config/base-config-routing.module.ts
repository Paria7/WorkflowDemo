import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineComponent } from './line';
import { PlantComponent } from './plant';
import { AreaDetailComponent } from './area-detail';
import { LineDetailComponent } from './line-detail';
import { StationDetailComponent } from './station-detail';
import { LineEditComponent } from './line-edit/line-edit.component';
import { DeviceDetailComponent } from './device-detail';
import { FileUploaderDemoComponent } from './file-uploader-demo/file-uploader-demo.component';
import { StationBackgroundImageComponent } from './station-background-image/station-background-image.component';
import { ValueStreamComponent } from './value-stream';

const routes: Routes = [
  {
    path: 'line',
    component: LineComponent
  },
  {
    path: 'plant',
    component: PlantComponent
  },
  {
    path: 'area-detail',
    component: AreaDetailComponent
  },
  {
    path: 'line-detail',
    component: LineDetailComponent
  },
  {
    path: 'station-detail',
    component: StationDetailComponent
  },
  {
    path: 'device-detail',
    component: DeviceDetailComponent
  },
  {
    path: 'line-edit',
    component: LineEditComponent
  },
  {
    path: 'file-upload',
    component: FileUploaderDemoComponent
  },
  {
    path: 'station-background-image',
    component: StationBackgroundImageComponent
  },
  {
    path: 'value-stream',
    component: ValueStreamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseConfigRoutingModule {
}
