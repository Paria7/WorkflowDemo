import { Component, OnInit } from '@angular/core';
import { WorkflowService } from 'shared/services/workflow.service';
import { FlowSchmemAddComponent } from './flow-schmem-add/flow-schmem-add.component';
import { MatDialogRef, MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  public displayColumns: string[] = ['name', 'description', 'createdtime', 'lastupdatedtime', 'actions'];
  dataSource: any;
  constructor(
    private workflowService: WorkflowService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getWorkflow();
  }


  private getWorkflow() {
    this.workflowService.GetFlowSchemeData().subscribe((flowScheme) => {
      this.dataSource = flowScheme;
    });
  }

  public add() {
    this.dialog.open(FlowSchmemAddComponent,
      {
        minWidth: '90%',
        minHeight: '90%',
      }).afterClosed().subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          this.getWorkflow();
        }
      });
  }
}
