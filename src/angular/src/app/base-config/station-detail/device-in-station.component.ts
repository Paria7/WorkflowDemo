import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup,FormBuilder } from '@angular/forms';
import { QueryDeviceDetailModel, DeviceDetailModel,StationDetailModel } from 'shared/models/base-config';
import { CommonService, DeviceService } from 'shared/services';

@Component({
    selector: 'app-device-in-station',
    templateUrl: './device-in-station.component.html',
    styleUrls: ['./device-in-station.component.scss']
})
export class DeviceInStationComponent implements OnInit {
    public form: FormGroup;
    public displayColumns: string[] = [
        'no', 'code', 'name', 'status', 'description', 'plant', 'area', 'line', 'station', 'updateUser', 'updateTime'];

    dataSource = new MatTableDataSource<DeviceDetailModel>([]);
    queryModel: QueryDeviceDetailModel;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    totalCount: number;

    constructor(public dialogRef: MatDialogRef<DeviceInStationComponent>,
        @Inject(MAT_DIALOG_DATA) private dialogData: { station: StationDetailModel },
        private commonService: CommonService,
        private deviceService: DeviceService,
        private fb: FormBuilder) {
            this.queryModel = {
                PlantId: '',
                LineId: '',
                AreaId: '',
                ValueStreamId: '',
                StationId: dialogData.station.Id,
                Code: '',
                Name: '',
                Status: 0,
                PageIndex: 0,
                PageSize: 10
            };
    }

    ngOnInit() {
        setTimeout(() => {
            this.getDevices();
        });
    }
    

    getDevices() {
        this.queryModel.PageIndex = this.paginator.pageIndex ? this.paginator.pageIndex + 1 : 1;
        this.queryModel.PageSize = this.paginator.pageSize ? this.paginator.pageSize : 10;
        this.deviceService.queryDevices(this.queryModel).subscribe((output) => {
            this.totalCount = output.TotalCount;
            this.dataSource.data = output.Dtos;
        });
    }

    changePage($event) {
        this.getDevices();
      }
}