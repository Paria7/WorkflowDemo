import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TpmPlanHistoryModel, TpmPlanModel } from 'shared/models/tpm-plan';
import { MatPaginator } from '@angular/material';
import { TpmPlanService } from 'shared/services/tpm-plan.service';

@Component({
  selector: 'app-tpm-plan-history',
  templateUrl: './tpm-plan-history.component.html',
  styleUrls: ['./tpm-plan-history.component.scss']
})
export class TpmPlanHistoryComponent implements OnInit {
  tpmPlanModel: TpmPlanModel;

  public displayColumns: string[] = ['action', 'actiontime', 'doby'];
  dataSource: TpmPlanHistoryModel[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    @Inject(MAT_DIALOG_DATA) tpmPlanModel: TpmPlanModel,
    public dialogRef: MatDialogRef<TpmPlanHistoryComponent>,
    private tpmPlanService: TpmPlanService
  ) {
    this.tpmPlanModel = tpmPlanModel;
    this.getTpmPlanHistory();
  }

  ngOnInit() {
  }

  private getTpmPlanHistory() {
    const model = {
      id: this.tpmPlanModel.Id
    };
    this.tpmPlanService.queryTpmPlanHistory(model).subscribe((TpmPlanhistory) => {
      // this.dataSource.paginator.firstPage();
      this.dataSource = TpmPlanhistory;
    });
  }

}
