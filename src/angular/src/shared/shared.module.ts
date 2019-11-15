import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  UserDataService,
  AuthService,
  ContextMenuService,
  CommonService,
  DataChangeService,
  FormService
} from './services';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BciCoreModule, BciLayoutModule, BciSharedModule, BreadcrumbsModule } from '@bci/ng-core';

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
  MatChipsModule,
  MatGridListModule,
  MatTooltipModule,
  MatTabsModule,
  MatPaginatorModule,
  MatMenuModule,
  MatRadioModule,
} from '@angular/material';
/* CDK imports */
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { TreeModule } from 'angular-tree-component';
// import { DxPopupModule } from 'devextreme-angular';

import {
  SMCLayoutComponent,
  PaginatorComponent,
  ConfirmationBoxComponent,
  IconComponent,
  FileUploaderComponent,
  ErrorTipComponent
} from './components';
import { AuthenticationInterceptor, LoaderInterceptor, ExceptionInterceptor, CacheInterceptor } from './interceptors';

import {
  AdministrationService
  , SystemService
  , PlantService
  , LineService
  , LineBusinessUnitMapService
  , PaginatorService
  , AreaService
  , DeviceService
  , TpmAmendmentService
  , LineDetailService
  , OplCenterService
  , StationDetailService
  , ValueStreamService
} from './services';
import { RegisterService } from './services/register.service';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Utils } from './utils';
import { TranslateUniversalLoader } from './utils/translate-universal-loader';
import { ApiConfigService } from './services/api-config.service';
import { TpmCalendarService } from './services/tpm-calendar.service';
import { TpmPlanService } from './services/tpm-plan.service';
import * as ApiServiceProxies from './service-proxies/service-proxies';
import { WorkflowService } from './services/workflow.service';

@NgModule({
  declarations: [
    SMCLayoutComponent,
    PaginatorComponent,
    ConfirmationBoxComponent,
    IconComponent,
    FileUploaderComponent,
    ErrorTipComponent
  ],
  imports: [
    HttpModule,
    BciCoreModule,
    BciLayoutModule,
    BciSharedModule,
    BreadcrumbsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule,
    MatChipsModule,
    MatGridListModule,
    MatTabsModule,
    MatMenuModule,
    MatRadioModule,
    TreeModule,
    // DxPopupModule,
    OverlayModule,
    PortalModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateUniversalLoader
      },
    }),
  ],
  exports: [
    HttpModule,
    TranslateModule,
    BciCoreModule,
    BciLayoutModule,
    BciSharedModule,
    BreadcrumbsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatChipsModule,
    MatGridListModule,
    MatTabsModule,
    MatPaginatorModule,
    MatMenuModule,
    MatRadioModule,
    TreeModule,
    // DxPopupModule,
    OverlayModule,
    PortalModule,
    FormsModule,
    ReactiveFormsModule,
    SMCLayoutComponent,
    ConfirmationBoxComponent,
    IconComponent,
    FileUploaderComponent,
    ErrorTipComponent
  ],
  providers: [
    Utils,
    ApiConfigService,
    TpmCalendarService,
    TpmPlanService,
    WorkflowService,
    StationDetailService,
    ApiServiceProxies.TpmPlanServiceProxy,
    ApiServiceProxies.LineServiceProxy,
    FormService
  ],
  entryComponents: [ConfirmationBoxComponent, ErrorTipComponent]
})
export class SharedModule {
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

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        PlantService,
        LineService,
        LineBusinessUnitMapService,
        AuthService,
        AdministrationService,
        CommonService,
        SystemService,
        RegisterService,
        UserDataService,
        DataChangeService,
        PaginatorService,
        AreaService,
        DeviceService,
        TpmAmendmentService,
        OplCenterService,
        LineDetailService,
        WorkflowService,
        StationDetailService,
        ValueStreamService,
        FormService,
        ContextMenuService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ExceptionInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: CacheInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoaderInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthenticationInterceptor,
          multi: true
        }
      ]
    };
  }
}
