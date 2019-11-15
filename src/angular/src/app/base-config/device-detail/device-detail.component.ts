import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Utils } from 'shared';
import { AreaModel, QueryDeviceDetailModel, StationDetailModel, PlantModel, LineDetailModel, DeviceDetailModel, ValueStreamModel } from 'shared/models/base-config';
import { PlantService, CommonService, AreaService, LineDetailService, StationDetailService, DeviceService, ValueStreamService } from 'shared/services';
import { NameValueModel } from 'shared/models/tpm-amendment';
import { AddOrEditDeviceDetailComponent } from './add-or-edit-device-detail.component'
import { StationModel } from 'shared/models/base-config/station.model';
import { UserModel } from 'shared/models/administration/user.model';

@Component({
    selector: 'app-device-detail',
    templateUrl: './device-detail.component.html',
    styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
    public form: FormGroup;
    public displayColumns: string[] = [
        'no', 'code', 'name', 'status', 'description', 'plant', 'area', 'valueStream', 'line', 'station', 'updateUser', 'updateTime', 'actions'];

    dataSource = new MatTableDataSource<StationDetailModel>([]);
    queryModel: QueryDeviceDetailModel;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    statuses: Array<NameValueModel> = [];
    plants: Array<PlantModel> = [];
    lines: Array<LineDetailModel> = [];
    valueStreams: Array<ValueStreamModel> = [];
    areas: Array<AreaModel> = [];
    stations: Array<NameValueModel> = [];
    totalCount: number;
    selectedAreas: Array<AreaModel> = [];
    selectedValueStreams: Array<ValueStreamModel> = [];
    selectedLines: Array<LineDetailModel> = [];
    selectedStations: Array<NameValueModel> = [];
    selectedServiceListUsers: Array<UserModel> = [];
    selectedEngineerListUsers: Array<UserModel> = [];

    constructor(private plantService: PlantService
        , private dialog: MatDialog
        , private translate: TranslateService
        , private commonService: CommonService
        , private areaService: AreaService
        , private valueStreamService: ValueStreamService
        , private lineDetailService: LineDetailService
        , private stationDetailService: StationDetailService
        , private deviceService: DeviceService
        , private utils: Utils
        , private snackBar: MatSnackBar
        , private fb: FormBuilder) {
        this.queryModel = {
            PlantId: '',
            AreaId: '',
            ValueStreamId: '',
            LineId: '',
            StationId: '',
            Code: '',
            Name: '',
            Status: 0,
            PageIndex: 0,
            PageSize: 10
        };
        this.form = fb.group({
            'Plant': [''],
            'Line': [''],
            'ValueStream': [''],
            'Area': [''],
            'Station': [''],
            'Code': [''],
            'Name': [''],
            'Status': ['']
        });
    }

    ngOnInit() {
        this.getPlants();
        this.getSDeviceStatuses();
        this.getDevices();
    }

    private getSDeviceStatuses() {
        this.deviceService.getDeviceStatuses().subscribe(statuses => {
            this.statuses = statuses;
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
        this.areaService.queryAreasByPlantId(this.queryModel.PlantId).subscribe((areas) => {
            this.areas = areas;
            this.queryModel.AreaId = "";
            this.queryModel.ValueStreamId = "";
            this.queryModel.LineId = "";
            this.queryModel.StationId = "";
            this.valueStreams = [];
            this.lines = [];
            this.stations = [];
        });
    }

    private getValueStreams() {
        this.valueStreamService.queryValueStreamsByAreaId(this.queryModel.AreaId).subscribe((valueStreams) => {
            this.valueStreams = valueStreams;
            this.queryModel.ValueStreamId = "";
            this.queryModel.LineId = "";
            this.queryModel.ValueStreamId = "";
            this.lines = [];
            this.stations = [];
        });
    }

    private getLines() {
        this.lineDetailService.queryLinesByValueStreamId(this.queryModel.ValueStreamId).subscribe((lines) => {
            this.lines = lines;
            this.queryModel.LineId = "";
            this.queryModel.StationId = "";
            this.stations = [];
        });
    }

    public query() {
        this.getDevices();
    }

    private getStations() {
        this.stationDetailService.getStationsByLine(this.queryModel.LineId).subscribe((stations) => {
            this.stations = stations;
            this.queryModel.StationId = "";
        });
    }

    getDevices() {
        this.queryModel.Name = this.commonService.trim(this.queryModel.Name);
        this.queryModel.Code = this.commonService.trim(this.queryModel.Code);
        if (this.queryModel.Status === undefined) {
            this.queryModel.Status = 0;
        }
        if (this.queryModel.PlantId === undefined) {
            this.queryModel.PlantId = '';
        }
        if (this.queryModel.AreaId === undefined) {
            this.queryModel.AreaId = '';
        }
        if (this.queryModel.ValueStreamId === undefined) {
            this.queryModel.ValueStreamId = '';
        }
        if (this.queryModel.LineId === undefined) {
            this.queryModel.LineId = '';
        }
        if (this.queryModel.StationId === undefined) {
            this.queryModel.StationId = '';
        }
        this.queryModel.PageIndex = this.paginator.pageIndex ? this.paginator.pageIndex + 1 : 1;
        this.queryModel.PageSize = this.paginator.pageSize ? this.paginator.pageSize : 10;
        this.deviceService.queryDevices(this.queryModel).subscribe((output) => {
            this.totalCount = output.TotalCount;
            this.dataSource.data = output.Dtos;
        });
    }
    add() {
        this.selectedAreas = [];
        this.selectedValueStreams = [];
        this.selectedLines = [];
        this.selectedStations = [];
        this.selectedServiceListUsers = [];
        this.selectedEngineerListUsers = [];
        this.editDeviceDetail(<DeviceDetailModel>{ Id: null });
    }

    edit(model: DeviceDetailModel) {
        this.areaService.queryAreasByPlantId(model.PlantId).subscribe((areas) => {
            this.selectedAreas = areas;
            this.valueStreamService.queryValueStreamsByAreaId(model.AreaId).subscribe((valueStreams) => {
                this.selectedValueStreams = valueStreams;
                this.lineDetailService.queryLinesByValueStreamId(model.ValueStreamId).subscribe((lines) => {
                    this.selectedLines = lines;
                    this.stationDetailService.getStationsByLine(model.LineId).subscribe((stations) => {
                        this.selectedStations = stations;
                        this.deviceService.getDeviceUsers(model.Id).subscribe((users) => {
                            this.selectedServiceListUsers = users.ServiceList;
                            this.selectedEngineerListUsers = users.EngineerList;
                            this.editDeviceDetail(model);
                        });
                    });
                });
            });
        });
    }

    editDeviceDetail(model: DeviceDetailModel) {
        const data: {
            statuses: NameValueModel[], device: DeviceDetailModel,
            plants: PlantModel[], areas: AreaModel[], valueStreams: ValueStreamModel[], lines: LineDetailModel[], stations: NameValueModel[],
            serviceListUsers: UserModel[], engineerListUsers: UserModel[]
        } = {
                statuses: this.statuses,
                device: Object.assign({}, model),
                plants: this.plants,
                areas: this.selectedAreas,
                valueStreams: this.selectedValueStreams,
                lines: this.selectedLines,
                stations: this.selectedStations,
                serviceListUsers: this.selectedServiceListUsers,
                engineerListUsers: this.selectedEngineerListUsers
            };
        this.dialog.open(AddOrEditDeviceDetailComponent, { minWidth: '1000px', data: data })
            .afterClosed().subscribe((dialogResult: boolean) => {
                if (dialogResult) {
                    this.getDevices();
                }
            });
    }

    public remove(id: string) {
        const action = () => {
            this.deviceService.removeDevice(id).subscribe(() => {
                this.getDevices();
                this.translate.get('Common.DeleteSuccess').subscribe((message) => {
                    this.snackBar.open(message, '', {
                        duration: 3000,
                        verticalPosition: 'top',
                    });
                });
            });
        };

        this.translate.get('DeviceDetail.DeleteConfirm').subscribe((message) => {
            this.utils.confirm(message).subscribe((dialogResult: boolean) => {
                if (dialogResult) {
                    action();
                }
            });
        });
    }
    changePage($event) {
        this.query();
    }
}