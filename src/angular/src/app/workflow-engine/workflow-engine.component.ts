import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { WorkflowSchemeService } from "shared/services/workflow-scheme.service";
import { finalize } from 'rxjs/operators';
// import{appModuleAnimation} from 
import { CreateWorkflowComponent } from './create-workflow/create-workflow.component';

@Component({
  selector: 'app-workflow-engine',
  templateUrl: './workflow-engine.component.html',
  styleUrls: ['./workflow-engine.component.scss']
})
export class WorkflowEngineComponent implements OnInit {
  @ViewChild('createWorkflowComponent') createWorkflowComponent: CreateWorkflowComponent;
  public displayColumns: string[] = ['code', 'actions'];
  totalCount: number;
  dataSource: any;

  constructor(
    private router: Router,
    private workflowSchemeService: WorkflowSchemeService
  ) { }

  ngOnInit() {
    this.getForms();
  }

  private getForms() {
    // this.formService.getFormData().subscribe((TpmPlans) => {
    //   this.dataSource = TpmPlans;
    // });
  }
  delete(id) {

  }

  editScheme(id) {

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
  createScheme(): void {
    this.createWorkflowComponent.show();
  }

  // editScheme(scheme: WorkflowSchemeDto): void {
  //   this.router.navigate(['/app/workflowedit', scheme.code]);
  // }

}
