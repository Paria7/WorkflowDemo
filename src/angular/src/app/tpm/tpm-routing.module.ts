import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TpmPlanComponent } from './tpm-plan';
import { TpmCalendarComponent } from './tpm-calendar';
import { TpmAmendmentComponent } from './tpm-amendment';
import { TpmMonthlyReportComponent } from './tpm-monthly-report/tpm-monthly-report.component';
import { TpmCalendarNewComponent } from './tpm-calendar-new/tpm-calendar-new.component';
const routes: Routes = [
  {
    path: 'tpm-plan',
    component: TpmPlanComponent
  },
  {
    path: 'tpm-calendar',
    component: TpmCalendarNewComponent
  },
  {
    path: 'tpm-amendment',
    component: TpmAmendmentComponent
  },
  {
    path: 'tpm-monthly-report',
    component: TpmMonthlyReportComponent
  },
  {
    path: 'tpm-calendar-new',
    component: TpmCalendarComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class TpmRoutingModule {
}