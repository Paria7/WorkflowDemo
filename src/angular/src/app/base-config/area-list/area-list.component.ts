import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';
import { AreaModel, QueryAreaModel } from 'shared/models/base-config';
import { AreaService } from 'shared/services';

@Component({
    selector: 'app-area-list',
    templateUrl: './area-list.component.html',
    styleUrls: ['./area-list.component.scss']
})
export class AreaListComponent{
    public displayColumns: string[] = [
        'no', 'code', 'name', 'status', 'description'];
    dataSource = new MatTableDataSource<AreaModel>([]);
    plantId: string;
    queryModel: QueryAreaModel;

    constructor(public dialogRef: MatDialogRef<AreaListComponent>,
        @Inject(MAT_DIALOG_DATA) private dialogData: { plantId: string },
        private areaService: AreaService
    ) {
        this.queryModel = {
            Name: '',
            Code: '',
            Status: 0,
            PlantId: ''
        };
        this.plantId = dialogData.plantId;
        this.getAreaList();
    }

    private getAreaList() {
        if (this.plantId !== null) {
            this.queryModel.PlantId = this.plantId;
            this.areaService.queryAreas(this.queryModel).subscribe((areaList) => {
                this.dataSource.data = areaList;
            });
        }
    }
}