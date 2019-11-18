import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'environments/environment';
import { BciCoreModule, BciImprintComponent, BciLayoutModule, BciSharedModule, BreadcrumbsModule, LogoutComponent } from '@bci/ng-core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
// import { AngularDraggableModule } from 'angular2-draggable';

/* Material imports*/
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatDialogModule,
  MatDatepicker,
  MatTab,
  MatTabsModule,
  MatTabGroup
} from '@angular/material';
/* CDK imports */
import { TreeModule } from 'angular-tree-component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { BaseConfigModule } from './base-config';
import { SharedModule, Utils, TranslateUniversalLoader } from 'shared';
import { AdministrationModule } from './administration';
import { RegistrationComponent } from './registration';
import { ChangePasswordComponent } from './changepassword/change-password.component';
import { UserProfileComponent } from './user-profile';
import { TpmModule } from './tpm';
import { OplModule } from './opl';
import { DefaultComponent } from './default/default.component';
// import { EditGenericApiComponent } from './generic-api/edit-generic-api.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NodeSelectfileComponent } from './node-selectfile/node-selectfile.component';
// import { DelonModule } from './delon.module';
import { DndModule } from 'ngx-drag-drop';
import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';
import { NodeParamsetComponent } from './node-paramset/node-paramset.component';
import { FormComponent } from './Form/form/form.component';
import { Form1Component } from './Form/form1/form1.component';
import { WorkflowTemplateComponent } from './workflow/workflow-template/workflow-template.component';
import { OrchestrationComponent } from './orchestration/orchestration/orchestration.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { FormDetailsComponent } from './demo5/form-details/form-details.component';
import { FlowSchmemAddComponent } from './demo4/flow-schmem-add/flow-schmem-add.component';
import { MatStepperModule } from '@angular/material/stepper';
import { WorkflowEngineComponent } from './workflow-engine/workflow-engine.component';
import { WorkflowEngineFormComponent } from './workflow-engine-form/workflow-engine-form.component';
import { WorkflowEngine1Component } from './workflow-engine1/workflow-engine1.component';
import { CreateWorkflowComponent } from './workflow-engine/create-workflow/create-workflow.component';
import { EditWorkflowComponent } from './workflow-engine/edit-workflow/edit-workflow.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ChangePasswordComponent,
    UserProfileComponent,
    PortalComponent,
    DefaultComponent,
    NodeSelectfileComponent,
    NodeParamsetComponent,
    FormComponent,
    Form1Component,
    WorkflowTemplateComponent,
    OrchestrationComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    FormDetailsComponent,
    FlowSchmemAddComponent,
    WorkflowEngineComponent,
    WorkflowEngineFormComponent,
    WorkflowEngine1Component,
    CreateWorkflowComponent,
    EditWorkflowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BciCoreModule.forRoot({ prod_environment: environment.production }),
    BciSharedModule,
    BciLayoutModule,
    AppRoutingModule,
    // AngularDraggableModule,
    /* Material imports*/
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTabsModule,
    MatStepperModule,
    /* CDK */
    TreeModule.forRoot(),
    OverlayModule,
    PortalModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateUniversalLoader
      },
    }),
    BaseConfigModule,
    AdministrationModule,
    SharedModule.forRoot(),
    TpmModule,
    OplModule,
    NgZorroAntdModule.forRoot(),
    // DelonModule.forRoot(),
    DndModule,
    AlainThemeModule.forChild(),
    DelonABCModule,
    DelonACLModule
  ],
  providers: [
    Utils,

  ],
  bootstrap: [AppComponent],
  entryComponents: [
    BciImprintComponent,
    LogoutComponent,
    NodeSelectfileComponent,
    NodeParamsetComponent,
    FormDetailsComponent,
    FlowSchmemAddComponent,
    CreateWorkflowComponent,
    EditWorkflowComponent
  ]
})
export class AppModule {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ch']);
    translate.use('en');
    const currentLanguage = window.localStorage.getItem('language');
    translate.use(currentLanguage || 'en').subscribe(
      () => {
        window.localStorage.setItem('language', currentLanguage || 'en');
      }
    );

  }
}
