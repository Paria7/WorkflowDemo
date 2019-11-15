import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Utils } from 'shared';
import { AreaModel, QueryAreaModel, AreaStatusModel, PlantModel } from 'shared/models/base-config';
import { PlantService, CommonService, AreaService } from 'shared/services';
import { AddOrEditAreaDetailComponent } from './add-or-edit-area-detail.component';
import { UserModel } from 'shared/models/administration/user.model';

@Component({
    selector: 'app-area-detail',
    templateUrl: './area-detail.component.html',
    styleUrls: ['./area-detail.component.scss']
})
export class AreaDetailComponent implements OnInit {
    public form: FormGroup;
    public displayColumns: string[] = [
        'no', 'code', 'name', 'status', 'plant', 'description', 'updateUser', 'updateTime', 'actions'];
    public area$ = new BehaviorSubject<AreaModel[]>([]);
    dataSource = new MatTableDataSource<AreaModel>([]);
    queryModel: QueryAreaModel;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    areaStatuses: Array<AreaStatusModel> = [];
    plants: Array<PlantModel> = [];

    constructor(private plantService: PlantService
        , private dialog: MatDialog
        , private translate: TranslateService
        , private commonService: CommonService
        , private areaService: AreaService
        , private snackBar: MatSnackBar
        , private utils: Utils
        , private fb: FormBuilder) {
        this.queryModel = {
            Name: '',
            Code: '',
            Status: 0,
            PlantId: '',
            PageIndex: 0,
            PageSize: 10
        };
        this.form = fb.group({
            'Name': [''],
            'Code': [''],
            'Status': [''],
            'Plant': ['']
        });
    }

    ngOnInit() {
        this.getPlants();
        this.getAreaStatuses();
        this.dataSource.paginator = this.paginator;
        this.getAreas();
    }

    private getAreaStatuses() {
        this.areaService.getAreaStatuses().subscribe(statuses => {
            this.areaStatuses = statuses;
        });
    }

    private getPlants() {
        this.plantService.getPlants().subscribe(plants => {
            this.plants = plants;
        });
    }

    public query() {
        this.getAreas();
    }

    private getAreas() {
        this.queryModel.Name = this.commonService.trim(this.queryModel.Name);
        this.queryModel.Code = this.commonService.trim(this.queryModel.Code);
        if (this.queryModel.Status === undefined) {
            this.queryModel.Status = 0;
        }
        if (this.queryModel.PlantId === undefined) {
            this.queryModel.PlantId = '';
        }
        this.areaService.queryAreas(this.queryModel).subscribe((areas) => {
            this.dataSource.paginator.firstPage();
            this.dataSource.data = areas;
        });
    }

    add() {
        this.edit(<AreaModel>{ Id: null });
    }

    edit(model: AreaModel) {
        let ownerListUsers: UserModel[] = [];
        if (model.Id !== null) {
            this.areaService.getOwnerListByAreaId(model.Id).subscribe(users => {
                ownerListUsers = users;
                this.editArea(model, ownerListUsers);
            });
        } else {
            this.editArea(model, ownerListUsers);
        }
    }

    private editArea(model: AreaModel, ownerListUsers: UserModel[]) {
        const data: { statuses: AreaStatusModel[], plants: PlantModel[], users: UserModel[], area: AreaModel } = {
            statuses: this.areaStatuses,
            plants: this.plants,
            users: ownerListUsers,
            area: Object.assign({}, model)
        };
        this.dialog.open(AddOrEditAreaDetailComponent, { minWidth: '800px', data: data })
            .afterClosed().subscribe((dialogResult: boolean) => {
                if (dialogResult) {
                    this.getAreas();
                }
            });
    }

    public remove(id: string) {
        const action = () => {
            this.areaService.removeArea(id).subscribe(() => {
                this.getAreas();
                this.translate.get('Common.DeleteSuccess').subscribe((message) => {
                    this.snackBar.open(message, '', {
                        duration: 3000,
                        verticalPosition: 'top',
                    });
                });
            });
        };

        this.translate.get('Area.DeleteConfirm').subscribe((message) => {
            this.utils.confirm(message).subscribe((dialogResult: boolean) => {
                if (dialogResult) {
                    action();
                }
            });
        });
    }
}