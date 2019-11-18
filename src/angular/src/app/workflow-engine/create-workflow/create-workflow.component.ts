import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { WorkflowSchemeDto } from 'shared/models/workflow';

@Component({
  selector: 'app-create-workflow',
  templateUrl: './create-workflow.component.html',
  styleUrls: ['./create-workflow.component.scss']
})
export class CreateWorkflowComponent implements OnInit {

  scheme: WorkflowSchemeDto = null;

  constructor(
    public dialogRef: MatDialogRef<CreateWorkflowComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      WorkflowScheme: WorkflowSchemeDto
    },
    private router: Router
  ) {

  }

  ngOnInit() {
    this.scheme = this.data.WorkflowScheme;
  }
  save() {
    this.dialogRef.close();
    this.router.navigate(['/workflowedit', this.scheme.Code]);
  }

}
