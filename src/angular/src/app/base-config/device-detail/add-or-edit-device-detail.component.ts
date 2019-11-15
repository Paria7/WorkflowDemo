import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PlantService, AreaService, LineDetailService, StationDetailService, DeviceService, ValueStreamService } from 'shared/services';
import { AreaModel, DeviceDetailModel, PlantModel, LineDetailModel, StationDetailModel, ValueStreamModel } from 'shared/models/base-config';
import { MAXLENGTH, MAXDESCRIPTIONLENGTH } from 'shared/constants';
import { NameValueModel } from 'shared/models/tpm-amendment';
import { UserModel } from 'shared/models/administration/user.model';

@Component({
    selector: 'app-add-or-edit-device-detail',
    templateUrl: './add-or-edit-device-detail.component.html',
    styleUrls: ['./add-or-edit-device-detail.component.scss']
})
export class AddOrEditDeviceDetailComponent {
    public form: FormGroup;
    public title: string;
    public area: AreaModel;
    public statuses: Array<NameValueModel> = [];
    public plants: Array<PlantModel> = [];
    public areas: Array<AreaModel> = [];
    public valueStreams: Array<ValueStreamModel> = [];
    public lines: Array<LineDetailModel> = [];
    public stations: Array<NameValueModel> = [];
    public serviceListUsers: Array<UserModel> = [];
    public engineerListUsers: Array<UserModel> = [];
    device: DeviceDetailModel;

    constructor(public dialogRef: MatDialogRef<AddOrEditDeviceDetailComponent>,
        @Inject(MAT_DIALOG_DATA) private dialogData: {
            statuses: NameValueModel[], device: DeviceDetailModel,
            plants: PlantModel[], areas: AreaModel[], valueStreams: ValueStreamModel[], lines: LineDetailModel[], stations: NameValueModel[],
            serviceListUsers: UserModel[], engineerListUsers: UserModel[]
        },
        private plantService: PlantService,
        private areaService: AreaService,
        private valueStreamService: ValueStreamService,
        private lineDetailService: LineDetailService,
        private stationDetailService: StationDetailService,
        private deviceService: DeviceService,
        private fb: FormBuilder) {
        this.form = fb.group({
            'Name': ['', [Validators.required, Validators.maxLength(MAXLENGTH)]],
            'Code': ['', [Validators.required, Validators.maxLength(MAXLENGTH)]],
            'Status': ['', Validators.required],
            'PlantId': ['', Validators.required],
            'AreaId': ['', Validators.required],
            'ValueStreamId': ['', Validators.required],
            'LineId': ['', Validators.required],
            'StationId': ['', Validators.required],
            'Description': ['', [Validators.maxLength(MAXDESCRIPTIONLENGTH)]]
        });
        this.plants = dialogData.plants;
        this.areas = dialogData.areas;
        this.valueStreams = dialogData.valueStreams;
        this.lines = dialogData.lines;
        this.stations = dialogData.stations;
        this.statuses = dialogData.statuses;
        this.device = dialogData.device;
        this.serviceListUsers = dialogData.serviceListUsers;
        this.engineerListUsers = dialogData.engineerListUsers;
    }

    public save() {
        this.form.controls["Code"].setValue(this.form.controls["Code"].value.trim());
        this.form.controls["Name"].setValue(this.form.controls["Name"].value.trim());

        if (!this.form.valid) {
            return;
        }

        this.device.EngineerList = this.engineerListUsers;
        this.device.ServiceList = this.serviceListUsers;
        this.deviceService.saveDevice(this.device).subscribe(() => {
            this.dialogRef.close(true);
        });
    }

    public onChangePlant(event?) {
        this.getAreas();
    }

    public onChangeArea(event?) {
        this.getValueStreams();
    }

    public onChangeValueStream(event?) {
        this.getLines();
    }

    public onChangeLine(event?) {
        this.getStations();
    }

    private getPlants() {
        this.plantService.getPlants().subscribe(plants => {
            this.plants = plants;
        });
    }

    private getAreas() {
        this.areaService.queryAreasByPlantId(this.device.PlantId).subscribe((areas) => {
            this.areas = areas;
            this.device.AreaId = "";
            this.device.ValueStreamId = "";
            this.device.LineId = "";
            this.device.StationId = "";
            this.valueStreams = [];
            this.lines = [];
            this.stations = [];
        });
    }

    private getValueStreams() {
        this.valueStreamService.queryValueStreamsByAreaId(this.device.AreaId).subscribe((valueStreams) => {
            this.valueStreams = valueStreams;
            this.device.ValueStreamId = "";
            this.device.LineId = "";
            this.device.StationId = "";
            this.lines = [];
            this.stations = [];
        });
    }

    private getLines() {
        this.lineDetailService.queryLinesByValueStreamId(this.device.ValueStreamId).subscribe((lines) => {
            this.lines = lines;
            this.device.LineId = "";
            this.device.StationId = "";
            this.stations = [];
        });
    }

    private getStations() {
        this.stationDetailService.getStationsByLine(this.device.LineId).subscribe((stations) => {
            this.stations = stations;
            this.device.StationId = "";
        });
    }

    getDeviceUsers() {
        this.deviceService.getDeviceUsers(this.device.Id).subscribe((output) => {
            this.engineerListUsers = output.EngineerList;
            this.serviceListUsers = output.ServiceList;
        });
    }
}
