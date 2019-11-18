import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration';
import { ChangePasswordComponent } from './changepassword';
import { UserProfileComponent } from './user-profile';
import { PortalComponent } from './portal/portal.component';
import { DefaultComponent } from './default/default.component';
import { FormComponent } from './Form/form/form.component';
import { Form1Component } from './Form/form1/form1.component';
import { WorkflowTemplateComponent } from './workflow/workflow-template/workflow-template.component';
import { OrchestrationComponent } from './orchestration/orchestration/orchestration.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { WorkflowEngineComponent } from './workflow-engine/workflow-engine.component';
import { WorkflowEngineFormComponent } from './workflow-engine-form/workflow-engine-form.component';
import { WorkflowEngine1Component } from './workflow-engine1/workflow-engine1.component';
import { EditWorkflowComponent } from './workflow-engine/edit-workflow/edit-workflow.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegistrationComponent,
    pathMatch: 'full'
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    pathMatch: 'full'
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    pathMatch: 'full'
  },
  {
    path: 'portal',
    component: PortalComponent,
    pathMatch: 'full'
  },
  {
    path: 'default',
    component: DefaultComponent,
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: FormComponent,
    pathMatch: 'full'
  },
  {
    path: 'form1',
    component: Form1Component,
    pathMatch: 'full'
  },
  {
    path: 'workflow-template',
    component: WorkflowTemplateComponent,
    pathMatch: 'full'
  },
  {
    path: 'orchestration',
    component: OrchestrationComponent,
    pathMatch: 'full'
  },
  {
    path: 'demo1',
    component: Demo1Component,
    pathMatch: 'full'
  },
  {
    path: 'demo2',
    component: Demo2Component,
    pathMatch: 'full'
  },
  {
    path: 'demo3',
    component: Demo3Component,
    pathMatch: 'full'
  },
  {
    path: 'demo4',
    component: Demo4Component,
    pathMatch: 'full'
  },
  {
    path: 'demo5',
    component: Demo5Component,
    pathMatch: 'full'
  },
  {
    path: 'workflow-engine',
    component: WorkflowEngineComponent,
    pathMatch: 'full'
  },
  {
    path: 'workflow-engine-form',
    component: WorkflowEngineFormComponent,
    pathMatch: 'full'
  },
  {
    path: 'workflow-engine1',
    component: WorkflowEngine1Component,
    pathMatch: 'full'
  },
  {
    path: 'workflowedit/:code',
    component: EditWorkflowComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: AppComponent,
    //     children: [
    //       { path: 'home', component: HomeComponent },
    //       { path: 'login', component: LoginComponent },
    //       { path: 'register', component: RegistrationComponent },
    //       { path: 'change-password', component: ChangePasswordComponent },
    //       { path: 'default', component: DefaultComponent },
    //       { path: 'form', component: FormComponent },
    //       { path: 'form1', component: Form1Component },
    //       { path: 'workflow-template', component: WorkflowTemplateComponent },
    //       { path: 'orchestration', component: OrchestrationComponent },
    //       { path: 'demo1', component: Demo1Component },
    //       { path: 'demo2', component: Demo2Component },
    //       { path: 'demo3', component: Demo3Component },
    //       { path: 'demo4', component: Demo4Component },
    //       { path: 'demo5', component: Demo5Component },
    //       { path: 'workflow-engine', component: WorkflowEngineComponent },
    //       { path: 'workflow-engine1', component: WorkflowEngine1Component },
    //       { path: 'workflow-engine-form', component: WorkflowEngineFormComponent },
    //       { path: 'workflowedit/:code', component: EditWorkflowComponent },
    //     ]
    //   }
    // ])
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
