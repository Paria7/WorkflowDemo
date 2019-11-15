import { Component, OnInit, ViewChild, Inject, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AreaModel, QueryDeviceModel, LineModel } from '../../shared/models/base-config';
import { AreaService, LineDetailService } from '../../shared/services';
import { BasicPlantDataService } from 'shared/services/basic-plant-data.service';
import { LineEditDeviceMapInfoModel } from 'shared/models/base-config/line-edit-device-map-info-model';
import { CheckDetailViewType } from 'shared/models/portal';
import { PortalDeviceStatusInputModel } from 'shared/models/portal/portal-device-model'
import { InputCardNoModalComponent } from 'app/tpm/tpm-amendment/input-card-no-modal/input-card-no-modal.component';
import { OfflineRecordModalComponent } from 'app/base-config/line-edit/offline-record-modal/offline-record-modal.component';
import { Utils } from 'shared';
import { CheckListComponent } from 'app/tpm/tpm-amendment/check-list.component';
import { PortalColorPickerModel, PortalColorQueryInputModel } from 'shared/models/portal/portal-color-picker-model';


@Component({
    selector: 'app-portal',
    templateUrl: './portal.component.html',
    // styleUrls: ['./portal.component.scss', '../../../node_modules/angular2-draggable/css/resizable.min.css']
})
export class PortalComponent implements OnInit {
    public areas: Array<AreaModel> = [];
    public areaId: string = "";
    public isLogin: boolean;
    public areaCode: string = "";
    public lineCode: string = "";
    public lineShowName: string = "";

    inBounds = true; // 是否限制边界
    lines: LineModel[];
    devices: LineEditDeviceMapInfoModel[];
    deviceMapData: LineEditDeviceMapInfoModel[]; //选择的device在地图上的映射信息
    lineId: string;

    lineMapImgUrl?: string;
    viewType: CheckDetailViewType;
    cardNo = ''; //卡号，
    tpmSwitch = true; //当前line是在线还是下线的状态
    color: PortalColorPickerModel = {
        AreaId: '',
        HadDone: '#00FF40',
        NotCheck: '#FFFF00',
        NotDone: '#FF0000'
    };


    constructor(private http: HttpClient,
        private dialog: MatDialog,
        private snackBar: MatSnackBar,
        private utils: Utils,
        private translate: TranslateService,
        private areaService: AreaService,
        private lineDetailService: LineDetailService,
        private renderer2: Renderer2,
        private basicPlantDataService: BasicPlantDataService, ) {
    }

    ngOnInit() {
    }
}
