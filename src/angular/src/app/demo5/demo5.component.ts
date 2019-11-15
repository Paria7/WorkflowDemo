import { Component, OnInit } from '@angular/core';
import { FormDetailsComponent } from './form-details/form-details.component';
import { MatDialogRef, MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { FormService } from 'shared/services/form.service';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  public displayColumns: string[] = ['name', 'description', 'createdtime', 'lastupdatedtime', 'actions'];
  totalCount: number;
  dataSource: any;

  constructor(
    private dialog: MatDialog,
    private formService: FormService,
  ) { }

  ngOnInit() {
    this.getForms();
  }

  public add() {
    this.dialog.open(FormDetailsComponent,
      {
        minWidth: '90%',
        minHeight: '90%',
      }).afterClosed().subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          this.getForms();
        }
      });
  }

  private getForms() {
    this.formService.getFormData().subscribe((TpmPlans) => {
      this.dataSource = TpmPlans;
    });
  }




  public remove(id: string) {
    // const action = () => {
    //   this.tpmPlanService.removeTpmPlan(id).subscribe(() => {
    //     this.getTpmPlans();
    //   });
    // };

    // this.translate.get('TpmPlan.DeleteConfirm').subscribe((message) => {
    //   this.utils.confirm(message).subscribe((dialogResult: boolean) => {
    //     if (dialogResult) {
    //       action();
    //     }
    //   });
    // });
  }

  //public tpmdetails(model: TpmPlanModel) {
  // this.dialog.open(TpmPlanDetailsComponent,
  //   {
  //     minWidth: '1400px',
  //     minHeight: '700px',
  //     data: Object.assign({}, model)
  //   }).afterClosed().subscribe((dialogResult: boolean) => {
  //     if (dialogResult) {
  //     this.getTpmPlans();
  //     }
  //   });
  //}

}
