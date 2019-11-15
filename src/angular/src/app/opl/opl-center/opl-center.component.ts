import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Utils } from 'shared';
import { map, tap } from 'rxjs/operators';
import { CommonService, LineService, AreaService, DeviceService, OplCenterService, ValueStreamService, LineDetailService } from 'shared/services';
import { NameValueModel } from 'shared/models/tpm-amendment';
import { QueryOplModel, OplCenterModel } from 'shared/models/opl'
import { EditOplComponent } from './edit-opl.component'
import { AssignOplToUserComponent } from './assign-opl-to-user.component'
@Component({
  selector: 'app-opl-center',
  templateUrl: './opl-center.component.html',
  styleUrls: ['./opl-center.component.scss']
})

export class OplCenterComponent implements OnInit {

  greenColor: string = "green";
  yellowColor: string = "yellow";
  redColor: string = "red";
  normalColor: string = "";

  date: Date;
  areas: Array<NameValueModel> = [];
  valueStreams: Array<NameValueModel> = [];
  lines: Array<NameValueModel> = [];
  devices: Array<NameValueModel> = [];
  statuses: Array<NameValueModel> = [];

  _currentArea: string;
  _currentValueStream: string;
  _currentLine: string;
  public form: FormGroup;
  queryModel: QueryOplModel;
  displayColumns: string[] = ['description', 'tpmDescription', 'status', 'result', 'area', 'valueStream', 'line', 'device', 'createDate', 'closeDate', 'actions'];
  dataSource = new MatTableDataSource<OplCenterModel>([]);
  details: OplCenterModel[]
  totalCount: number;
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
    , private oplCenterService: OplCenterService
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
      Status: 'all',
      PageIndex: 0,
      PageSize: 10
    };
    this.form = fb.group({
      'Area': [''],
      'ValueStream': [''],
      'Line': [''],
      'Device': [''],
      'Status': ['']
    });
    this.getAreas();
    this.getOplStatuses();
  }

  ngOnInit(): void {
    this.getOplDetails();
  }
  assign(model: OplCenterModel) {
    this.dialog.open(AssignOplToUserComponent,
      {
        minWidth: '600px',
        minHeight: '600px',
        data: model.Id
      }).afterClosed().subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          this.getOplDetails();
        }
      });
  }

  edit(model: OplCenterModel) {
    this.dialog.open(EditOplComponent,
      {
        minWidth: '600px',
        data: Object.assign({}, model)
      }).afterClosed().subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          this.getOplDetails();
        }
      });
  }
  delete(id: string) {
    const action = () => {
      this.oplCenterService.downOplDetail(id).subscribe(() => {
        this.getOplDetails();
      });
    };

    this.translate.get('OPL.DeleteConfirm').subscribe((message) => {
      this.utils.confirm(message).subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          action();
        }
      });
    });
  }
  private getOplDetails() {
    this.queryModel.PageIndex = this.paginator.pageIndex ? this.paginator.pageIndex + 1 : 1;
    this.queryModel.PageSize = this.paginator.pageSize ? this.paginator.pageSize : 10;

    return this.oplCenterService.queryOpls(this.queryModel).subscribe(outPut => {
      this.totalCount = outPut.TotalCount;
      this.dataSource.data = outPut.Dtos;
      this.details = outPut.Dtos;
    });
  }

  private getOplStatuses() {
    this.oplCenterService.getOplStatuses().subscribe(statuses => {
      this.statuses = statuses;
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
    this.getOplDetails();
  }

  public onClickExport() {
    this.queryModel.PageIndex = 1;
    this.queryModel.PageSize = 9999;
    this.oplCenterService.downOplDetail(this.queryModel).subscribe(blob => {
      this.commonService.saveBlob(blob, 'OplDetail.xlsx');
    });
  }
  public changePage($event) {
    this.query();
  }

  setColor() {
    var status = 1;
    var p = "";
    if (1 == status) {
      p = 'red';
    } else if (2 == status) {
      p = 'yellow';
    } else if (3 == status) {
      p = 'green';
    } else {
      p = 'black';
    }
    return { ".mat-row:nth-status{ background-color": p + ";}" };
  };
}


