import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { WorkflowSchemeService } from "shared/services/workflow-scheme.service";
import { finalize } from 'rxjs/operators';
// import{appModuleAnimation} from 
import { CreateWorkflowComponent } from './create-workflow/create-workflow.component';
import { WorkflowSchemeDto } from 'shared/models/workflow';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-workflow-engine',
  templateUrl: './workflow-engine.component.html',
  styleUrls: ['./workflow-engine.component.scss']
})
export class WorkflowEngineComponent implements OnInit {
  @ViewChild('createWorkflowComponent') createWorkflowComponent: CreateWorkflowComponent;
  public displayColumns: string[] = ['code', 'actions'];
  totalCount: number;
  dataSource: any = [];

  constructor(
    private router: Router,
    private workflowSchemeService: WorkflowSchemeService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getSchemes();
    console.log("this.dataSource", this.dataSource);
  }

  private getSchemes() {
    this.workflowSchemeService.GetSchemes().subscribe((result) => {
      this.dataSource = result.Schemes;
      console.log(result);
    });
  }
  delete(id) {

  }

  editScheme(scheme: WorkflowSchemeDto): void {
    this.router.navigate(['/workflowedit', scheme.Code]);
  }

  public createScheme() {
    this.dialog.open(CreateWorkflowComponent, {
      data: {
        WorkflowScheme: {},
      },
      minWidth: '60%',
      minHeight: '60%',
    }).afterClosed().subscribe((dialogResult: boolean) => {
      if (dialogResult) {
        this.getSchemes();
      }
    });
  }
  //delete(scheme: WorkflowSchemeDto): void {
  // this.workflowSchemeService.delete(scheme.code)
  //   .pipe(finalize(() => {
  //     abp.notify.info("Deleted Scheme: " + scheme.code);
  //     this.refresh();
  //   }))
  //   .subscribe(() => { });
  //}

  // Show Modals
  // createScheme(): void {
  //   this.createWorkflowComponent.show();
  // }

  // editScheme(scheme: WorkflowSchemeDto): void {
  //   this.router.navigate(['/app/workflowedit', scheme.code]);
  // }

}
