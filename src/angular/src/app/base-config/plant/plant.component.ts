import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Utils } from 'shared';
import { PlantService, CommonService } from 'shared/services';
import { PlantModel, QueryPlantModel } from 'shared/models/base-config';
import { EditPlantComponent } from './edit-plant.component';
import { AreaListComponent } from '../area-list/area-list.component';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {
  public form: FormGroup;
  public displayColumns: string[] = [
    'no', 'code', 'name', 'isActive', 'description', 'updateUser', 'updateTime', 'actions'];
  public plants$ = new BehaviorSubject<PlantModel[]>([]);
  dataSource = new MatTableDataSource<PlantModel>([]);
  queryModel: QueryPlantModel;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private plantService: PlantService
    , private dialog: MatDialog
    , private translate: TranslateService
    , private commonService: CommonService
    , private utils: Utils
    , private snackBar: MatSnackBar
    , private fb: FormBuilder) {
    this.queryModel = {
      Code: '',
      Name: '',
      IsActive: 'all',
      pageIndex: 0,
      pageSize: 10
    };
    this.form = fb.group({
      'Code': [''],
      'Name': [''],
      'IsActive': ['']
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getPlants();
  }

  private getPlants() {
    this.queryModel.Code = this.commonService.trim(this.queryModel.Code);
    this.queryModel.Name = this.commonService.trim(this.queryModel.Name);
    this.plantService.queryPlants(this.queryModel).subscribe((plants) => {
      this.dataSource.paginator.firstPage();
      this.dataSource.data = plants;
    });
  }

  public query() {
    this.getPlants();
  }

  public add() {
    this.edit({ Id: null });
  }

  public edit(model: PlantModel) {
    this.dialog.open(EditPlantComponent,
      {
        minWidth: '800px',
        data: Object.assign({}, model)
      }).afterClosed().subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          this.getPlants();
        }
      });
  }

  public remove(id: string) {
    const action = () => {
      this.plantService.removePlant(id).subscribe(() => {
        this.getPlants();
        this.translate.get('Common.DeleteSuccess').subscribe((message) => {
          this.snackBar.open(message, '', {
            duration: 3000,
            verticalPosition: 'top',
          });
        });
      });
    };

    this.translate.get('Plant.DeleteConfirm').subscribe((message) => {
      this.utils.confirm(message).subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          action();
        }
      });
    });
  }

  public showAreaList(plantId: string) {
    this.dialog.open(AreaListComponent, {
      minWidth: '800px',
      maxWidth: '800px',
      minHeight: '700px',
      data: Object.assign({}, { plantId: plantId })
    }).afterClosed().subscribe((dialogResult: boolean) => {
    });
  }

}
