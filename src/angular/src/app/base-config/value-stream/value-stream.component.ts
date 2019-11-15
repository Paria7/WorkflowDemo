import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Utils } from 'shared';
import { ValueStreamModel, QueryValueStreamModel, ValueStreamStatusModel, AreaModel, PlantModel } from 'shared/models/base-config';
import { PlantService, CommonService, AreaService, ValueStreamService } from 'shared/services';
import { AddOrEditValueStreamComponent } from './add-or-edit-value-stream.component';
import { UserModel } from 'shared/models/administration/user.model';

@Component({
    selector: 'app-value-stream',
    templateUrl: './value-stream.component.html',
    styleUrls: ['./value-stream.component.scss']
})
export class ValueStreamComponent implements OnInit {
    public form: FormGroup;
    public displayColumns: string[] = [
        'no', 'code', 'name', 'status', 'plant', 'area', 'description', 'updateUser', 'updateTime', 'actions'];
    public valueStream$ = new BehaviorSubject<ValueStreamModel[]>([]);
    dataSource = new MatTableDataSource<ValueStreamModel>([]);
    queryModel: QueryValueStreamModel;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    statuses: Array<ValueStreamStatusModel> = [];
    plants: Array<PlantModel> = [];
    areas: Array<AreaModel> = [];

    constructor(private plantService: PlantService
        , private dialog: MatDialog
        , private translate: TranslateService
        , private commonService: CommonService
        , private areaService: AreaService
        , private valueStreamService: ValueStreamService
        , private snackBar: MatSnackBar
        , private utils: Utils
        , private fb: FormBuilder) {
        this.queryModel = {
            Name: '',
            Code: '',
            Status: 0,
            PlantId: '',
            AreaId: '',
            PageIndex: 0,
            PageSize: 10
        };
        this.form = fb.group({
            'Name': [''],
            'Code': [''],
            'Status': [''],
            'Plant': [''],
            'Area': ['']
        });
    }

    ngOnInit() {
        this.getPlants();
        this.getStatuses();
        this.getValueStreams();
        this.dataSource.paginator = this.paginator;
    }

    private getStatuses() {
        this.valueStreamService.getValueStreamStatuses().subscribe(statuses => {
            this.statuses = statuses;
        });
    }

    private getPlants() {
        this.plantService.getPlants().subscribe(plants => {
            this.plants = plants;
        });
    }

    public onChangePlant(event?) {
        let plantId = event.value;
        this.queryModel.AreaId = '';
        this.areas = [];
        this.getAreasByPlantId(plantId);
    }

    private getAreasByPlantId(plantId?: string) {
        if (plantId === undefined) {
            this.areas = [];
        } else {
            let model = {
                Name: '',
                Code: '',
                Status: 2,
                PlantId: plantId
            };
            this.areaService.queryAreas(model).subscribe((areas) => {
                this.areas = areas;
            });
        }
    }

    public query() {
        this.getValueStreams();
    }

    private getValueStreams() {
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
        this.valueStreamService.queryValueStreams(this.queryModel).subscribe((valueStreams) => {
            this.dataSource.paginator.firstPage();
            this.dataSource.data = valueStreams;
        });
    }

    add() {
        this.edit(<ValueStreamModel>{ Id: null });
    }

    edit(model: ValueStreamModel) {
        let areas: AreaModel[];
        if (model.Id !== null) {
            let queryModel = {
                Name: '',
                Code: '',
                Status: 2,
                PlantId: model.PlantId
            };
            this.areaService.queryAreas(queryModel).subscribe((result) => {
                areas = result;
                this.editValueStream(model, areas);
            });
        } else {
            areas = [];
            this.editValueStream(model, areas);
        }

    }

    editValueStream(model: ValueStreamModel, areas: AreaModel[]) {
        const data: { statuses: ValueStreamStatusModel[], plants: PlantModel[], areas: AreaModel[], model: ValueStreamModel } = {
            statuses: this.statuses,
            plants: this.plants,
            areas: areas,
            model: Object.assign({}, model)
        };
        this.dialog.open(AddOrEditValueStreamComponent, { minWidth: '800px', data: data })
            .afterClosed().subscribe((dialogResult: boolean) => {
                if (dialogResult) {
                    this.getValueStreams();
                }
            });
    }

    public remove(id: string) {
        const action = () => {
            this.valueStreamService.removeValueStream(id).subscribe(() => {
                this.getValueStreams();
                this.translate.get('Common.DeleteSuccess').subscribe((message) => {
                    this.snackBar.open(message, '', {
                        duration: 3000,
                        verticalPosition: 'top',
                    });
                });
            });
        };

        this.translate.get('ValueStream.DeleteConfirm').subscribe((message) => {
            this.utils.confirm(message).subscribe((dialogResult: boolean) => {
                if (dialogResult) {
                    action();
                }
            });
        });
    }
}