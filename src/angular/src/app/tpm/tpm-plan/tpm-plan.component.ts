import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, RequiredValidator, FormControl } from '@angular/forms';
import { BehaviorSubject } from "rxjs";
import { MatDialog, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Utils } from "shared";
import { TpmPlanModel, QueryPlanModel, FileModel, TpmPlanRollbackModel, TpmPlanPublishFreezeModel } from 'shared/models/tpm-plan';
import { TpmPlanService } from 'shared/services/tpm-plan.service';
import { LineModel, DeviceModel, AreaModel, QueryAreaLineModel, QueryDeviceModel, ValueStreamModel } from "shared/models/base-config";
import { BasicPlantDataService } from 'shared/services/basic-plant-data.service';
import { ValueStreamService, LineDetailService } from 'shared/services';
import { TpmPlanHistoryComponent } from './tpm-plan-history.component';
import { TpmPlanDetailsComponent } from './tpm-plan-details.component';
import { FileUploaderComponent } from '../../../shared/components';
import { CommonService } from 'shared/services';

@Component({
  selector: 'app-tpm-plan',
  templateUrl: './tpm-plan.component.html',
  styleUrls: ['./tpm-plan.component.scss']
})
export class TpmPlanComponent implements OnInit {
  public form: FormGroup;
  public TpmPlans$ = new BehaviorSubject<TpmPlanModel[]>([]);
  public displayColumns: string[] = ['version', 'area', 'valueStream', 'line', 'device', 'status', 'issuedate', 'lastupdatedtime', 'actions'];
  queryModel: QueryPlanModel;
  dataSource = new MatTableDataSource<TpmPlanModel>([]);
  totalCount: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('kpiFileUploader') kpiFileUploader: FileUploaderComponent;

  areas: AreaModel[];
  lines: LineModel[];
  devices: DeviceModel[];
  valueStreams: ValueStreamModel[];
  areaRequired: boolean = true;
  valueStreamRequired: boolean = false;
  lineRequired: boolean = false;
  deviceRequired: boolean = false;

  constructor(
    private tpmPlanService: TpmPlanService,
    private dialog: MatDialog,
    private translate: TranslateService,
    private commonService: CommonService,
    private basicPlantDataService: BasicPlantDataService,
    private valueStreamService: ValueStreamService,
    private lineDetailService: LineDetailService,
    private utils: Utils,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.queryModel = {
      AreaId: '',
      ValueStreamId: '',
      LineId: '',
      DeviceId: '',
      PageIndex: 1,
      PageSize: 10
    };
    this.form = fb.group({
      'Area': ['', [Validators.required]],
      'ValueStream': ['', [Validators.required]],
      'Line': ['', [Validators.required]],
      'Device': ['', [Validators.required]]
    });
    this.getAreas();
  }

  ngOnInit() {
    this.getTpmPlans();
  }

  public query(event) {
    this.clearErrors();
    event.preventDefault();
    this.getTpmPlans();
  }

  clearErrors() {
    this.form.controls["Area"].setErrors(null);
    this.form.controls["ValueStream"].setErrors(null);
    this.form.controls["Line"].setErrors(null);
    this.form.controls["Device"].setErrors(null);
  }

  private getTpmPlans() {
    const model: QueryPlanModel = {
      AreaId: this.queryModel.AreaId === undefined ? '' : this.queryModel.AreaId,
      ValueStreamId: this.queryModel.ValueStreamId === undefined ? '' : this.queryModel.ValueStreamId,
      LineId: this.queryModel.LineId === undefined ? '' : this.queryModel.LineId,
      DeviceId: this.queryModel.DeviceId === undefined ? '' : this.queryModel.DeviceId,
      PageIndex: this.paginator.pageIndex ? this.paginator.pageIndex + 1 : 1,
      PageSize: this.paginator.pageSize ? this.paginator.pageSize : 10
    };
    this.tpmPlanService.queryTpmPlans(model).subscribe((TpmPlans) => {
      this.totalCount = TpmPlans.TotalCount;
      this.dataSource.data = TpmPlans.Models;
    });
  }

  public changePage($event) {
    this.getTpmPlans();
  }

  public getAreas() {
    this.basicPlantDataService.getAreas().subscribe(data => this.areas = data);
  }

  public getValueStreams(areaId: string) {
    this.valueStreamService.queryValueStreamsByAreaId(areaId).subscribe(data => this.valueStreams = data);
  }

  public getLines(valueStreamId: string) {
    //this.basicPlantDataService.getLines(queryLineModel).subscribe(data => this.lines = data);
    this.lineDetailService.queryLinesByValueStreamId(valueStreamId).subscribe(data => this.lines = data);
  }

  public getDevices(queryDeviceModel: QueryDeviceModel) {
    this.basicPlantDataService.getDevices(queryDeviceModel).subscribe(data => this.devices = data);
  }

  public onQueryChangeValueStream(event?) {
    let areaId: string = event.value;
    this.queryModel.ValueStreamId = '';
    this.queryModel.LineId = '';
    this.queryModel.DeviceId = '';
    this.lines = [];
    this.devices = [];
    this.getValueStreams(areaId);
  }

  public onQueryChangeLine(event?) {
    let valueStreamId: string = event.value;
    this.queryModel.LineId = '';
    this.queryModel.DeviceId = '';
    this.devices = [];
    this.getLines(valueStreamId);
  }

  public onQueryChangeDevice(event?) {
    let model = { LineId: event.value };
    this.queryModel.DeviceId = '';
    this.getDevices(model);
  }

  public tpmdetails(model: TpmPlanModel) {
    this.dialog.open(TpmPlanDetailsComponent,
      {
        minWidth: '1400px',
        minHeight: '700px',
        data: Object.assign({}, model)
      }).afterClosed().subscribe((dialogResult: boolean) => {
        // if (dialogResult) {
        this.getTpmPlans();
        // }
      });
  }

  public publishorfreeze(id: string) {
    const action = () => {
      const model: TpmPlanPublishFreezeModel = {
        Id: id
      };
      this.tpmPlanService.publishOrFreezeTpmPlan(model).subscribe(() => {
        this.getTpmPlans();
      });
    };

    this.translate.get('TpmPlan.ChangeStatusConfirm').subscribe((message) => {
      this.utils.confirm(message).subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          action();
        }
      });
    });
  }

  public tpmhistory(model: TpmPlanModel) {
    this.dialog.open(TpmPlanHistoryComponent,
      {
        minWidth: '800px',
        data: Object.assign({}, model)
      }).afterClosed().subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          this.getTpmPlans();
        }
      });
  }

  public remove(id: string) {
    const action = () => {
      this.tpmPlanService.removeTpmPlan(id).subscribe(() => {
        this.getTpmPlans();
      });
    };

    this.translate.get('TpmPlan.DeleteConfirm').subscribe((message) => {
      this.utils.confirm(message).subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          action();
        }
      });
    });
  }

  public rollback(id: string) {
    const action = () => {
      const model: TpmPlanRollbackModel = {
        Id: id
      };
      this.tpmPlanService.rollbackTpmPlan(model).subscribe(() => {
        this.getTpmPlans();
      });
    };

    this.translate.get('TpmPlan.RollbackConfirm').subscribe((message) => {
      this.utils.confirm(message).subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          action();
        }
      });
    });
  }


  public onClickDownloadTpmPlanTemplate(event) {
    this.clearErrors();
    event.preventDefault();
    this.tpmPlanService.downloadTpmPlanTemplate().subscribe(blob => {

      this.commonService.saveBlob(blob, 'TPMPlanTemplate.xlsx');
    });
  }

  public onClickImportTpmPlan() {
    //validation
    if (!this.form.valid) {
      return;
    }

    // if (this.queryModel.AreaId === '' || this.queryModel.AreaId === undefined) {
    //   this.form.controls["Area"].setErrors({ required: true });
    // }
    // if (this.queryModel.ValueStreamId === '' || this.queryModel.ValueStreamId === undefined) {
    //   this.form.controls["ValueStream"].setErrors({ required: true });
    // }
    // if (this.queryModel.LineId === '' || this.queryModel.LineId === undefined) {
    //   this.form.controls["Line"].setErrors({ required: true });
    // }
    // if (this.queryModel.DeviceId === '' || this.queryModel.DeviceId === undefined) {
    //   this.form.controls["Device"].setErrors({ required: true });
    // }

    this.kpiFileUploader.selectFile();
  }

  onImportTpmPlanFileSelected(file: File) {
    const queryModel: QueryPlanModel = {
      AreaId: this.queryModel.AreaId,
      ValueStreamId: this.queryModel.ValueStreamId,
      LineId: this.queryModel.LineId,
      DeviceId: this.queryModel.DeviceId,
    };
    this.translate.get('Common.ImportSuccessfully').subscribe((message) => {
      console.log("file", file);
      this.tpmPlanService.importTpmPlan(file, queryModel).subscribe(() => {
        this.getTpmPlans();
        this.snackBar.open(message, '', {
          duration: 3000,
          verticalPosition: 'top',
        });
      });
    });
  }

}
