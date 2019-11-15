import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Utils } from 'shared';
import { map, tap } from 'rxjs/operators';
import { CommonService, LineService, AreaService, DeviceService, TpmAmendmentService, ValueStreamService, LineDetailService } from 'shared/services';
import { QueryTpmPlanDetailModel, TpmPlanDetailModel, NameValueModel } from 'shared/models/tpm-amendment';
import { EditCheckDetailComponent } from './edit-check-detail.component';
import { ChangeTpmPlanDateComponent } from './change-tpm-plan-date.component';

@Component({
  selector: 'app-tpm-amendment',
  templateUrl: './tpm-amendment.component.html',
  styleUrls: ['./tpm-amendment.component.scss']
})
export class TpmAmendmentComponent implements OnInit {
  date: Date;
  areas: Array<NameValueModel> = [];
  valueStreams: Array<NameValueModel> = [];
  lines: Array<NameValueModel> = [];
  devices: Array<NameValueModel> = [];
  totalCount: number;

  _currentArea: string;
  _currentValueStream: string;
  _currentLine: string;
  public form: FormGroup;
  queryModel: QueryTpmPlanDetailModel;
  displayColumns: string[] = ['area', 'valueStream', 'line', 'device', 'doBy', 'status', 'planDate', 'interval', 'actions'];
  dataSource = new MatTableDataSource<TpmPlanDetailModel>([]);
  details: TpmPlanDetailModel[]
  @ViewChild(MatPaginator) paginator: MatPaginator;

  get currentArea(): string {
    return this._currentArea;
  }

  set currentArea(ou: string) {
    if (this._currentArea === ou) {
      return;
    }
    this._currentArea = ou;
    this.queryModel.Area = ou;
    this.getValueStreamByArea(ou);
  }

  get currentValueStream(): string {
    return this._currentValueStream;
  }

  set currentValueStream(ou: string) {
    if (this._currentValueStream === ou) {
      return;
    }
    this._currentValueStream = ou;
    this.queryModel.ValueStream = ou;
    this.getLinesByValueStream(ou);
  }

  get currentLine(): string {
    return this._currentLine;
  }

  set currentLine(ou: string) {
    if (this._currentLine === ou) {
      return;
    }
    this._currentLine = ou;
    this.queryModel.Line = ou;
    this.getDeviceByLine(ou)
  }

  constructor(private lineService: LineService
    , private lineDetailService: LineDetailService
    , private areaService: AreaService
    , private valueStreamService: ValueStreamService
    , private deviceService: DeviceService
    , private tpmAmendmentService: TpmAmendmentService
    , private commonService: CommonService
    , private translate: TranslateService
    , private fb: FormBuilder
    , private dialog: MatDialog
    , private snackBar: MatSnackBar
    , private utils: Utils) {
    this.queryModel = {
      Area: '',
      ValueStream: '',
      Line: '',
      Device: '',
      PlanDate: '',
      Status: 'all',
      PageIndex: 0,
      PageSize: 10
    };
    this.form = fb.group({
      'Area': [''],
      'ValueStream': [''],
      'Line': [''],
      'Device': [''],
      'PlanDate': [''],
      'Status': ['']
    });
    this.getAreas();
  }

  ngOnInit(): void {
    this.getTpmPlanDetails();
  }


  edit(model: TpmPlanDetailModel) {
    this.dialog.open(EditCheckDetailComponent,
      {
        minWidth: '1000px',
        data: Object.assign({ NeedSwingCard: false }, model)
      }).afterClosed().subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          this.getTpmPlanDetails();
        }
      });
  }
  calendar(model: TpmPlanDetailModel) {
    this.dialog.open(ChangeTpmPlanDateComponent,
      {
        minWidth: '800px',
        data: Object.assign({}, model)
      }).afterClosed().subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          this.getTpmPlanDetails();
        }
      });
  }
  private getTpmPlanDetails() {
    this.queryModel.PageIndex = this.paginator.pageIndex ? this.paginator.pageIndex + 1 : 1;
    this.queryModel.PageSize = this.paginator.pageSize ? this.paginator.pageSize : 10;
    return this.tpmAmendmentService.getTpmPlanDetails(this.queryModel).subscribe(outPut => {
      this.totalCount = outPut.TotalCount;
      this.dataSource.data = outPut.Dtos;
      this.details = outPut.Dtos;
    });
  }

  private getAreas() {
    this.queryModel.Area = '';
    this.queryModel.ValueStream = '';
    this.queryModel.Line = '';
    this.queryModel.Device = '';
    this.valueStreams = [];
    this.lines = [];
    this.devices = [];
    this.areaService.getAreas().subscribe(areas => {
      this.areas = areas;
    });
  }

  private getValueStreamByArea(areaId: string) {
    this.queryModel.ValueStream = '';
    this.queryModel.Line = '';
    this.queryModel.Device = '';
    this.lines = [];
    this.devices = [];
    this.valueStreamService.queryValueStreamsByAreaId(areaId).subscribe(valueStreams => {
      this.valueStreams = valueStreams;
    });
  }

  private getLinesByValueStream(valueStreamId: string) {
    this.queryModel.Line = '';
    this.queryModel.Device = '';
    this.devices = [];
    this.lineDetailService.queryLinesByValueStreamId(valueStreamId).subscribe(lines => {
      this.lines = lines;
    });
  }

  private getDeviceByLine(lineId: string) {
    this.queryModel.Device = '';
    this.deviceService.getDevicesByLine(lineId).subscribe(devices => {
      this.devices = devices;
    });
  }

  public query() {
    this.getTpmPlanDetails();
  }

  public onClickExport() {
    this.queryModel.PageIndex = 1;
    this.queryModel.PageSize = 9999;
    this.tpmAmendmentService.downloadTpmPlanDetail(this.queryModel).pipe(
      map(data => this.commonService.b64toBlob(data, "", 512)),
      tap(data => {
        this.commonService.saveBlob(data, 'TpmPlanDetail.xlsx');
      })
    ).subscribe();
  }
  public changePage($event) {
    this.query();
  }
}

