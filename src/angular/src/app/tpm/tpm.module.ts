import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared';
import { TpmRoutingModule } from './tpm-routing.module';
import { BaseConfigModule } from '../base-config/base-config.module';
import { TpmPlanComponent } from './tpm-plan';
import { TpmCalendarComponent } from './tpm-calendar';
import {
  TpmAmendmentComponent, EditCheckDetailComponent, OplListComponent,
  RepairLogListComponent, AmendmentListComponent, AddOrEditOplComponent, AddOrEditRepairLogComponent
} from './tpm-amendment';
// import { DxSchedulerModule, DxButtonModule } from 'devextreme-angular';
import { DatePipe } from '@angular/common';
import { BasicPlantDataService } from 'shared/services/basic-plant-data.service';
import { TpmPlanHistoryComponent } from './tpm-plan/tpm-plan-history.component';
import { TpmPlanDetailsComponent } from './tpm-plan/tpm-plan-details.component';
import { ChangeTpmPlanDateComponent } from './tpm-amendment/change-tpm-plan-date.component';
import { AuditLogService } from 'shared/services/audit-log.service';
import { TpmPlanItemDetailsComponent } from './tpm-plan/tpm-plan-item-details.component';
import { CheckListComponent } from './tpm-amendment/check-list.component';
import { InputCardNoModalComponent } from './tpm-amendment/input-card-no-modal/input-card-no-modal.component';
import { ImageUploadModule } from '../../shared/components/image-upload/image-upload.module';
import { TpmMonthlyReportComponent } from './tpm-monthly-report/tpm-monthly-report.component';
import { TpmCalendarNewComponent } from './tpm-calendar-new/tpm-calendar-new.component';
import { FilterMonthDaysPipe } from 'shared/pips/filter-month-days-Pipe';
import { ShowEnlargedImagesComponent } from './tpm-plan/show-enlarged-images/show-enlarged-images.component';
import { SafeHtmlPip } from 'shared/pips/safe-html-pipe';

@NgModule({
  declarations: [
    TpmPlanComponent,
    TpmCalendarComponent,
    TpmAmendmentComponent,
    EditCheckDetailComponent,
    OplListComponent,
    RepairLogListComponent,
    AmendmentListComponent,
    AddOrEditOplComponent,
    AddOrEditRepairLogComponent,
    TpmPlanHistoryComponent,
    TpmPlanDetailsComponent,
    ChangeTpmPlanDateComponent,
    TpmPlanItemDetailsComponent,
    CheckListComponent,
    InputCardNoModalComponent,
    TpmMonthlyReportComponent,
    TpmCalendarNewComponent,
    FilterMonthDaysPipe,
    ShowEnlargedImagesComponent,
    SafeHtmlPip
  ],
  imports: [CommonModule, TpmRoutingModule, SharedModule.forRoot(), BaseConfigModule, ImageUploadModule],
  exports: [OplListComponent, RepairLogListComponent, CheckListComponent],
  providers: [DatePipe, BasicPlantDataService, AuditLogService, FilterMonthDaysPipe
  ],
  entryComponents: [EditCheckDetailComponent, AddOrEditOplComponent, AddOrEditRepairLogComponent, TpmPlanHistoryComponent,
    TpmPlanDetailsComponent, TpmPlanItemDetailsComponent, ChangeTpmPlanDateComponent, CheckListComponent, InputCardNoModalComponent, ShowEnlargedImagesComponent]
})
export class TpmModule {
}

