import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material'
import { TpmCalendarService } from 'shared/services/tpm-calendar.service';
import { QueryTpmCalendarModel } from 'shared/models/tpm/query-tpm-calendar';
// import { DxSchedulerComponent } from 'devextreme-angular';
import { DatePipe } from '@angular/common';
import { LineModel, DeviceModel, ValueStreamModel } from 'shared/models/base-config';
import { BasicPlantDataService } from 'shared/services/basic-plant-data.service';
import { TpmCalendarModel, TpmCalendarResourceModel } from 'shared/models/tpm/tpm-calendar-model';
import { AreaModel } from 'shared/models/base-config';
import { CheckListComponent } from '../tpm-amendment/check-list.component'
import { CheckDetailViewType } from 'shared/models/portal'
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material';
import { ValueStreamService } from 'shared/services/value-stream.service';
import { LineDetailService } from 'shared/services/line-detail.service';

@Component({
  selector: 'app-tpm-calendar',
  templateUrl: './tpm-calendar.component.html',
  styleUrls: ['./tpm-calendar.component.scss']
})
export class TpmCalendarComponent implements OnInit {
  areas: AreaModel[];
  valueStreams: ValueStreamModel[];
  lines: LineModel[];
  devices: DeviceModel[];

  queryModel: QueryTpmCalendarModel;
  tpmCalendarData: TpmCalendarModel[];
  tpmCalendarDataResource: TpmCalendarResourceModel[];
  currentDate: Date = new Date();

  contextMenuAppointmentData: any;
  contextMenuTargetedAppointmentData: any;
  // @ViewChild(DxSchedulerComponent) scheduler: DxSchedulerComponent;

  constructor(private basicPlantDataService: BasicPlantDataService,
    private tpmCalendarService: TpmCalendarService,
    private valueStreamService: ValueStreamService,
    private lineDetailService: LineDetailService,
    private datePipe: DatePipe,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private translate: TranslateService) {

    this.queryModel = {
      AreaId: '',
      ValueStreamId: '',
      LineCode: '',
      DeviceName: '',
      DateType: '0', /*默认值0，ALL*/
      ViewDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    };
  }

  ngOnInit() {
  }

}