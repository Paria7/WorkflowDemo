import { Component, OnInit, ViewChild } from '@angular/core';
import { LineModel, DeviceModel, AreaModel, QueryAreaLineModel, QueryDeviceModel, ValueStreamModel } from "shared/models/base-config";
import { CommonService, ValueStreamService, LineDetailService } from 'shared/services';
import { TpmPlanService } from 'shared/services/tpm-plan.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BasicPlantDataService } from 'shared/services/basic-plant-data.service';
import { QueryPlanMonthlyReportModel } from 'shared/models/tpm-monthly-report';
import { NativeDateAdapter, DateAdapter, MatDatepicker } from '@angular/material';

@Component({
  selector: 'app-tpm-monthly-report',
  templateUrl: './tpm-monthly-report.component.html',
  styleUrls: ['./tpm-monthly-report.component.scss']
})
export class TpmMonthlyReportComponent implements OnInit {
  public form: FormGroup;
  areas: AreaModel[];
  valueStreams: ValueStreamModel[];
  lines: LineModel[];
  devices: DeviceModel[];
  queryModel: QueryPlanMonthlyReportModel;
  planDate: Date;
  // date: FormControl;
  @ViewChild('resultPicker') picker: MatDatepicker<Date>;

  constructor(
    private commonService: CommonService,
    private basicPlantDataService: BasicPlantDataService,
    private valueStreamService: ValueStreamService,
    private tpmPlanService: TpmPlanService,
    private lineDetailService: LineDetailService,
    private fb: FormBuilder
  ) {
    this.queryModel = {
      AreaId: '',
      ValueStreamId: '',
      LineId: '',
      DeviceId: '',
      PlanDate: ''
    };
    this.form = fb.group({
      'Area': ['', [Validators.required]],
      'ValueStream': ['', [Validators.required]],
      'Line': ['', [Validators.required]],
      'Device': ['', [Validators.required]],
      'PlanDate': ['', [Validators.required]]
    });
    this.getAreas();
  }

  ngOnInit() {

  }

  monthSelectedHandler(event: Date) {
    console.log('月份选择事件发生：', event);
    // const date = new Date(`${event._i.month + 1}/${event._i.year}`);
    // this.date.setValue(date);
    // this.picker.value(new Date(event.getFullYear(),event.getMonth(),1));

    this.planDate = new Date(event.getFullYear(), event.getMonth());
    console.log('选择的计划时间为：', this.planDate);
    this.picker.close();
  }

  public getAreas() {
    this.basicPlantDataService.getAreas().subscribe(data => this.areas = data);
  }

  public getValueStreamsByAreaId(areaId: string) {
    this.valueStreamService.queryValueStreamsByAreaId(areaId).subscribe(data => this.valueStreams = data);
  }

  public getLinesByValueStreamId(valueStreamId: string) {
    this.lineDetailService.queryLinesByValueStreamId(valueStreamId).subscribe(data => this.lines = data);
  }

  public getDevices(queryDeviceModel: QueryDeviceModel) {
    this.basicPlantDataService.getDevices(queryDeviceModel).subscribe(data => this.devices = data);
  }

  public onQueryChangeValueStream(event?) {
    this.queryModel.ValueStreamId = '';
    this.queryModel.LineId = '';
    this.queryModel.DeviceId = '';
    this.lines = [];
    this.devices = [];
    let areaId = event.value;
    this.getValueStreamsByAreaId(areaId);
  }

  public onQueryChangeLine(event?) {
    this.queryModel.LineId = '';
    this.queryModel.DeviceId = '';
    this.devices = [];
    let valueStreamId = event.value;
    this.getLinesByValueStreamId(valueStreamId);
  }

  public onQueryChangeDevice(event?) {
    let model = { LineId: event.value };
    this.getDevices(model);
    this.queryModel.DeviceId = '';
  }

  /**
  * 预览excel
  * @param $event 
  */
  previewTpmDetail($event) {
    // $event.preventDefault();//去掉验证

    if (!this.form.valid) {
      return;
    }
    this.queryModel.Year = this.planDate.getFullYear();
    this.queryModel.Month = this.planDate.getMonth() + 1;
    // console.log(`year=${this.planDate.getFullYear()},month==${this.planDate.getMonth()+1}`);
    console.log('预览查询条件为：', this.queryModel);

    this.tpmPlanService.previewTpmPlanDetail(this.queryModel).subscribe(data => {
      console.log('预览地址', data);
      window.open(data.htmlPath, '_blank');
      // this.commonService.saveBlob(blob, 'TPMPlan-detail.xls');
    });
  }

  /**
   * 导出tpm至excel
   * @param $event 
   */
  exportTpmDetail($event) {
    // $event.preventDefault();//去掉验证
    if (!this.form.valid) {
      return;
    }
    this.queryModel.Year = this.planDate.getFullYear();
    this.queryModel.Month = this.planDate.getMonth() + 1;
    console.log('导出查询条件为：', this.queryModel);

    this.tpmPlanService.exportTpmPlanDetail(this.queryModel).subscribe(blob => {
      console.log('download', blob);
      this.commonService.saveBlob(blob, 'TPMPlan-detail.xls');
    });
  }

}
