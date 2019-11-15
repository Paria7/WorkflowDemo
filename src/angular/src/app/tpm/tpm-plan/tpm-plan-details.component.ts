import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TpmPlanDetailsModel, TpmPlanModel, QueryTPMPlanDetailsModel } from 'shared/models/tpm-plan';
import { TpmPlanService } from 'shared/services/tpm-plan.service';
import { TpmPlanItemDetailsComponent } from './tpm-plan-item-details.component';
import { TranslateService } from '@ngx-translate/core';
import { Utils } from "shared";
import { FormBuilder, FormGroup, Validators, RequiredValidator, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tpm-plan-details',
  templateUrl: './tpm-plan-details.component.html',
  styleUrls: ['./tpm-plan-details.component.scss']
})
export class TpmPlanDetailsComponent implements OnInit {

  tpmPlanModel: TpmPlanModel;
  queryTpmPlanDetailsModel: QueryTPMPlanDetailsModel;
  public displayColumns: string[] = ['description', 'nexttime', 'cost', 'interval', 'doby', 'actions'];
  dataSource = new MatTableDataSource<TpmPlanDetailsModel>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  totalCount: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) tpmPlanModel: TpmPlanModel,
    public dialogRef: MatDialogRef<TpmPlanItemDetailsComponent>,
    private tpmPlanService: TpmPlanService,
    private dialog: MatDialog,
    private translate: TranslateService,
    private utils: Utils,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.queryTpmPlanDetailsModel = {
      Id: '',
      PageIndex: 1,
      PageSize: 5
    };
    this.tpmPlanModel = tpmPlanModel;
  }

  ngOnInit() {
    this.getTpmPlanDetails();
  }

  private getTpmPlanDetails() {
    const model: QueryTPMPlanDetailsModel = {
      Id: this.tpmPlanModel.Id,
      PageIndex: this.paginator.pageIndex ? this.paginator.pageIndex + 1 : 1,
      PageSize: this.paginator.pageSize ? this.paginator.pageSize : 10
    };
    this.tpmPlanService.queryTpmPlanDetails(model).subscribe((TpmPlanDetails) => {
      this.totalCount = TpmPlanDetails.TotalCount;
      this.dataSource.data = TpmPlanDetails.Models;
    });
  }

  public add(model: TpmPlanDetailsModel, tpmPlanModel: TpmPlanModel) {
    this.dialog.open(TpmPlanItemDetailsComponent,
      {
        minWidth: '80%',
        minHeight: '700px',
        data: { tpmPlanDetailsModel: Object.assign({}, ''), tpmPlanModel: this.tpmPlanModel }
      }).afterClosed().subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          console.log('this.tpmPlanModel.Status.toString()', this.tpmPlanModel.Status.toString());
          if (this.tpmPlanModel.Status.toString() == "Publish") {
            this.dialogRef.close();
          }
          else
            this.getTpmPlanDetails();
        }
      });
  }

  public edit(model: TpmPlanDetailsModel, tpmPlanModel: TpmPlanModel) {
    this.dialog.open(TpmPlanItemDetailsComponent,
      {
        minWidth: '1300px',
        minHeight: '700px',
        data: { tpmPlanDetailsModel: Object.assign({}, model), tpmPlanModel: this.tpmPlanModel }
      }).afterClosed().subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          console.log('this.tpmPlanModel.Status.toString()', this.tpmPlanModel.Status.toString());
          if (this.tpmPlanModel.Status.toString() == "Publish") {//在修改publish状态的数据之后，需要关掉中间弹框
            this.dialogRef.close();
          }
          else
            this.getTpmPlanDetails();
        }
      });
  }

  public remove(id: string) {
    // if(this.tpmPlanModel.Status!="Draft")
    // {
    //   return;
    // }
    const action = () => {
      this.tpmPlanService.removeTpmPlanDetails(id).subscribe(() => {
        if (this.tpmPlanModel.Status.toString() == "Publish") {
          this.dialogRef.close();
        }
        else
          this.getTpmPlanDetails();
      });
    };
    this.translate.get('TpmPlanDetails.DeleteConfirm').subscribe((message) => {
      this.utils.confirm(message).subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          action();
        }
      });
    });
  }

  public changePage($event) {
    this.getTpmPlanDetails();
  }

}
