import { Component, OnInit, Input } from '@angular/core';
import { LineEditDeviceMapInfoModel } from 'shared/models/base-config/line-edit-device-map-info-model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { BasicPlantDataService } from 'shared/services/basic-plant-data.service';
import { LineModel, QueryDeviceModel } from 'shared/models/base-config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utils } from 'shared';
import { TranslateService } from '@ngx-translate/core';
import { EditLineeditDialogComponent } from './edit-lineedit-dialog/edit-lineedit-dialog.component';
import { CheckListComponent } from '../../tpm/tpm-amendment/check-list.component';
import { CheckDetailViewType } from 'shared/models/portal';
import { PortalDeviceStatusInputModel } from 'shared/models/portal/portal-device-model'
import { InputCardNoModalComponent } from 'app/tpm/tpm-amendment/input-card-no-modal/input-card-no-modal.component';
import { OfflineRecordModalComponent } from './offline-record-modal/offline-record-modal.component';

@Component({
  selector: 'app-line-edit',
  templateUrl: './line-edit.component.html',
  // styleUrls: ['./line-edit.component.scss', '../../../../node_modules/angular2-draggable/css/resizable.min.css']
})
export class LineEditComponent implements OnInit {
  public form: FormGroup;

  inBounds = true;
  /*是否限制边界*/
  lines: LineModel[];
  devices: LineEditDeviceMapInfoModel[];
  deviceMapData: LineEditDeviceMapInfoModel[]; //选择的device在地图上的映射信息
  /*下拉框数据*/
  lineId: string; /**line-edit页面下拉框改变了line之后会赋值，portal页面请用portalLineId */
  deviceId: string;
  /*当前新增的deviceId*/

  lineMapImgUrl?: string;
  tempDeviceId: string; //临时设备id,用于定位当前拖拽的是哪个设备。
  viewType: CheckDetailViewType;
  cardNo = ''; //卡号，
  tpmSwitch = true; //当前line是在线还是下线的状态

  /*允许编辑，包括新增，删除*/
  @Input() allowEdit = true;
  /*允许拖拽*/
  @Input() allowDragDrop = true;
  /*允许修改大小*/
  @Input() allowResizing = true;
  /*显示下拉框*/
  @Input() showDropDown = true;
  /*显示颜色状态*/
  @Input() showColorStatus = false;
  /*显示下线的文本提示*/
  @Input() showOffText = true;
  /*显示操作按钮，包括off和record按钮*/
  @Input() showOpButton = true;

  /*后台portal传过来的lineId*/
  /*portal 是有自己的area和line下拉选择框的，line-edit也有自己的line和device选择框的,所以才需要区分这lineId和portalLineId */
  @Input() portalLineId = '';

  // initWidth = {x: 20, y: 100};
  constructor(private fb: FormBuilder,
    private basicPlantDataService: BasicPlantDataService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private utils: Utils,
    private translate: TranslateService) {
    this.form = fb.group({
      'LineId': ['', [Validators.required]],
      'DeviceId': ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }



}
