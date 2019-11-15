import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Utils } from 'shared';
import { AreaModel, QueryStationDetailModel, StationDetailModel, PlantModel, LineDetailModel, ValueStreamModel } from 'shared/models/base-config';
import { PlantService, CommonService, AreaService, LineDetailService, StationDetailService, ValueStreamService } from 'shared/services';
import { NameValueModel } from 'shared/models/tpm-amendment';
import { AddOrEditStationDetailComponent } from './add-or-edit-station-detail.component'
import { DeviceInStationComponent } from './device-in-station.component'
@Component({
    selector: 'app-station-detail',
    templateUrl: './station-detail.component.html',
    styleUrls: ['./station-detail.component.scss']
})
export class StationDetailComponent implements OnInit {
    public form: FormGroup;
    public displayColumns: string[] = [
        'no', 'code', 'name', 'status', 'description', 'plant', 'area', 'valueStream', 'line', 'updateUser', 'updateTime', 'actions'];

    dataSource = new MatTableDataSource<StationDetailModel>([]);
    queryModel: QueryStationDetailModel;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    statuses: Array<NameValueModel> = [];
    plants: Array<PlantModel> = [];
    lines: Array<LineDetailModel> = [];
    areas: Array<AreaModel> = [];
    valueStreams: Array<ValueStreamModel> = [];
    totalCount: number;
    selectedAreas: Array<AreaModel> = [];
    selectedValueStreams: Array<ValueStreamModel> = [];
    selectedLines: Array<LineDetailModel> = [];

    constructor(private plantService: PlantService
        , private dialog: MatDialog
        , private translate: TranslateService
        , private commonService: CommonService
        , private areaService: AreaService
        , private valueStreamService: ValueStreamService
        , private lineDetailService: LineDetailService
        , private stationDetailService: StationDetailService
        , private snackBar: MatSnackBar
        , private utils: Utils
        , private fb: FormBuilder) {
        this.queryModel = {
            PlantId: '',
            LineId: '',
            AreaId: '',
            Code: '',
            Name: '',
            Status: 0,
            PageIndex: 0,
            PageSize: 10
        };
        this.form = fb.group({
            'Plant': [''],
            'Line': [''],
            'Area': [''],
            'ValueStream': [''],
            'Code': [''],
            'Name': [''],
            'Status': ['']
        });
    }

    ngOnInit() {
        this.getPlants();
        this.getStationStatuses();
        this.getStations();
    }

    private getStationStatuses() {
        this.stationDetailService.getStationStatuses().subscribe(statuses => {
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

    private getPlants() {
        this.plantService.getPlants().subscribe(plants => {
            this.plants = plants;
        });
    }

    private getAreas() {
        this.areaService.queryAreasByPlantId(this.queryModel.PlantId).subscribe((areas) => {
            this.areas = areas;
            this.queryModel.AreaId = "";
            this.queryModel.LineId = "";
            this.queryModel.ValueStreamId = "";
            this.valueStreams = [];
            this.lines = [];
        });
    }

    private getValueStreams() {
        this.valueStreamService.queryValueStreamsByAreaId(this.queryModel.AreaId).subscribe((valueStreams) => {
            this.valueStreams = valueStreams;
            this.queryModel.LineId = "";
            this.queryModel.ValueStreamId = "";
            this.lines = [];
        });
    }

    private getLines() {
        this.lineDetailService.queryLinesByValueStreamId(this.queryModel.ValueStreamId).subscribe((lines) => {
            this.lines = lines;
            this.queryModel.LineId = "";
        });
    }

    public query() {
        this.getStations();
    }

    private getStations() {
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
        this.queryModel.PageIndex = this.paginator.pageIndex ? this.paginator.pageIndex + 1 : 1;
        this.queryModel.PageSize = this.paginator.pageSize ? this.paginator.pageSize : 10;

        this.stationDetailService.queryStations(this.queryModel).subscribe((output) => {
            this.totalCount = output.TotalCount;
            this.dataSource.data = output.Dtos;
        });
    }

    add() {
        this.selectedAreas = [];
        this.selectedValueStreams = [];
        this.selectedLines = [];
        this.editStationDetail(<StationDetailModel>{ Id: null });
    }

    edit(model: StationDetailModel) {
        this.areaService.queryAreasByPlantId(model.PlantId).subscribe((areas) => {
            this.selectedAreas = areas;
            this.valueStreamService.queryValueStreamsByAreaId(model.AreaId).subscribe((valueStreams) => {
                this.selectedValueStreams = valueStreams;
                this.lineDetailService.queryLinesByValueStreamId(model.ValueStreamId).subscribe((lines) => {
                    this.selectedLines = lines;
                    this.editStationDetail(model);
                });
            });
        });
    }

    editStationDetail(model: StationDetailModel) {
        const data: {
            statuses: NameValueModel[], station: StationDetailModel,
            plants: PlantModel[], areas: AreaModel[], valueStreams: ValueStreamModel[], lines: LineDetailModel[]
        } = {
                statuses: this.statuses,
                station: Object.assign({}, model),
                plants: this.plants,
                areas: this.selectedAreas,
                valueStreams: this.selectedValueStreams,
                lines: this.selectedLines,
            };
        this.dialog.open(AddOrEditStationDetailComponent, { minWidth: '800px', data: data })
            .afterClosed().subscribe((dialogResult: boolean) => {
                if (dialogResult) {
                    this.getStations();
                }
            });
    }

    viewDevices(model: StationDetailModel) {
        const data: { station: StationDetailModel } = {
            station: Object.assign({}, model)
        };
        this.dialog.open(DeviceInStationComponent, { minWidth: '800px', data: data })
            .afterClosed().subscribe((dialogResult: boolean) => {
                if (dialogResult) {
                }
            });
    }
    public remove(id: string) {
        const action = () => {
            this.stationDetailService.removeStation(id).subscribe(() => {
                this.getStations();
                this.translate.get('Common.DeleteSuccess').subscribe((message) => {
                    this.snackBar.open(message, '', {
                        duration: 3000,
                        verticalPosition: 'top',
                    });
                });
            });
        };

        this.translate.get('StationDetail.DeleteConfirm').subscribe((message) => {
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