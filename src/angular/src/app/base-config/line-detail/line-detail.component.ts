import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Utils } from 'shared';
import { AreaModel, QueryAreaModel, LineStatusModel, PlantModel, LineDetailModel, QueryLineDetailModel, ValueStreamModel } from 'shared/models/base-config';
import { PlantService, CommonService, AreaService, ValueStreamService, LineDetailService } from 'shared/services';
import { AddOrEditLineDetailComponent } from './add-or-edit-line-detail.component';
import { UserModel } from 'shared/models/administration/user.model';

@Component({
    selector: 'app-line-detail',
    templateUrl: './line-detail.component.html',
    styleUrls: ['./line-detail.component.scss']
})
export class LineDetailComponent implements OnInit {
    public form: FormGroup;
    public displayColumns: string[] = [
        'no', 'code', 'name', 'status', 'plant', 'area', 'valueStream', 'description', 'updateUser', 'updateTime', 'actions'];
    dataSource = new MatTableDataSource<LineDetailModel>([]);
    queryModel: QueryAreaModel;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    lineStatuses: Array<LineStatusModel> = [];
    plants: Array<PlantModel> = [];
    areas: Array<AreaModel> = [];
    valueStreams: Array<ValueStreamModel> = [];
    selectedAreas: Array<AreaModel> = [];
    selectedValueStreams: Array<ValueStreamModel> = [];

    constructor(private plantService: PlantService
        , private dialog: MatDialog
        , private translate: TranslateService
        , private commonService: CommonService
        , private areaService: AreaService
        , private valueStreamService: ValueStreamService
        , private lineDetailService: LineDetailService
        , private snackBar: MatSnackBar
        , private utils: Utils
        , private fb: FormBuilder) {
        this.queryModel = {
            Name: '',
            Code: '',
            Status: 0,
            PlantId: '',
            AreaId: '',
            ValueStreamId: '',
            PageIndex: 0,
            PageSize: 10
        };
        this.form = fb.group({
            'Name': [''],
            'Code': [''],
            'Status': [''],
            'Plant': [''],
            'Area': [''],
            'ValueStream': ['']
        });
    }

    ngOnInit() {
        this.getPlants();
        this.getLineStatuses();
        this.dataSource.paginator = this.paginator;
        this.getLines();
    }

    private getLineStatuses() {
        this.lineDetailService.getLineStatuses().subscribe(statuses => {
            this.lineStatuses = statuses;
        });
    }

    public onChangePlant(event?) {
        let plantId = event.value;
        this.queryModel.AreaId = '';
        this.queryModel.ValueStreamId = '';
        this.valueStreams = [];
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
        this.valueStreams = [];
    }

    public onChangeArea(event?) {
        let areaId = event.value;
        this.queryModel.ValueStreamId = '';
        this.getValueStreamsByAreaId(areaId);
    }

    private getValueStreamsByAreaId(areaId?: string) {
        if (areaId === undefined) {
            this.valueStreams = [];
        } else {
            let model = {
                Name: '',
                Code: '',
                PlantId: '',
                Status: 2,
                AreaId: areaId
            };
            this.valueStreamService.queryValueStreams(model).subscribe((valueStreams) => {
                this.valueStreams = valueStreams;
            });
        }
    }

    private getPlants() {
        this.plantService.getPlants().subscribe(plants => {
            this.plants = plants;
        });
    }

    public query() {
        this.getLines();
    }

    private getLines() {
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
        this.lineDetailService.queryLines(this.queryModel).subscribe((lines) => {
            this.dataSource.paginator.firstPage();
            this.dataSource.data = lines;
        });
    }

    add() {
        this.edit(<LineDetailModel>{ Id: null });
    }

    edit(model: LineDetailModel) {
        let ownerListUsers: UserModel[] = [];
        let memberListUsers: UserModel[] = [];
        if (model.Id !== null) {
            let queryModel = {
                Name: '',
                Code: '',
                Status: 0,
                PlantId: model.PlantId,
            };
            this.areaService.queryAreas(queryModel).subscribe((areas) => {
                this.selectedAreas = areas;
                let queryModel2 = {
                    Name: '',
                    Code: '',
                    Status: 0,
                    PlantId: model.PlantId,
                    AreaId: model.AreaId
                };
                this.valueStreamService.queryValueStreams(queryModel2).subscribe((valueStreams) => {
                    this.selectedValueStreams = valueStreams;
                    this.lineDetailService.getOwnerListByLineId(model.Id).subscribe(ownerUsers => {
                        ownerListUsers = ownerUsers;
                        this.lineDetailService.getMemberListByLineId(model.Id).subscribe(memberUsers => {
                            memberListUsers = memberUsers;
                            this.editLine(model, ownerListUsers, memberListUsers);
                        });
                    });
                });
            });
        } else {
            this.selectedAreas = [];
            this.selectedValueStreams = [];
            this.editLine(model, ownerListUsers, memberListUsers);
        }
    }

    private editLine(model: LineDetailModel, ownerListUsers: UserModel[], memberListUsers: UserModel[]) {
        const data: {
            statuses: LineStatusModel[], plants: PlantModel[], areas: AreaModel[], valueStreams: ValueStreamModel[],
            ownerUsers: UserModel[], memberUsers: UserModel[], line: LineDetailModel
        } = {
            statuses: this.lineStatuses,
            plants: this.plants,
            areas: this.selectedAreas,
            valueStreams: this.selectedValueStreams,
            ownerUsers: ownerListUsers,
            memberUsers: memberListUsers,
            line: Object.assign({}, model)
        };
        this.dialog.open(AddOrEditLineDetailComponent, { minWidth: '800px', data: data })
            .afterClosed().subscribe((dialogResult: boolean) => {
                if (dialogResult) {
                    this.getLines();
                }
            });
    }

    public remove(id: string) {
        const action = () => {
            this.lineDetailService.removeLine(id).subscribe(() => {
                this.getLines();
                this.translate.get('Common.DeleteSuccess').subscribe((message) => {
                    this.snackBar.open(message, '', {
                        duration: 3000,
                        verticalPosition: 'top',
                    });
                });
            });
        };

        this.translate.get('LineDetail.DeleteConfirm').subscribe((message) => {
            this.utils.confirm(message).subscribe((dialogResult: boolean) => {
                if (dialogResult) {
                    action();
                }
            });
        });
    }
}