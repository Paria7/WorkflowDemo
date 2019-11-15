import { Injectable, InjectionToken, Component, Input, EventEmitter, HostBinding, Output, Directive, ViewChild, NgModule, Optional, SkipSelf, Injector, ViewContainerRef, inject, Inject, HostListener, Type, ContentChild, ContentChildren, ChangeDetectorRef, APP_INITIALIZER, defineInjectable, forwardRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Location, LocationStrategy, DOCUMENT, CommonModule } from '@angular/common';
import { __assign, __spread, __extends, __values } from 'tslib';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig, MatDialogRef, MatDialog as MatDialog$1, MatSidenav, MatButtonModule as MatButtonModule$1, MatChipsModule, MatDialogModule as MatDialogModule$1, MatFormFieldModule, MatIconModule as MatIconModule$1, MatInputModule, MatListModule as MatListModule$1, MatMenuModule, MatSidenavModule as MatSidenavModule$1, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { NavigationStart, Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Subject, BehaviorSubject, throwError, merge, of, from, identity, Observable } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { FlexLayoutModule, ObservableMedia } from '@angular/flex-layout';
import { OverlayModule, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { PortalModule, ComponentPortal } from '@angular/cdk/portal';
import { filter, takeUntil, map, debounceTime, distinctUntilChanged, first, take, tap, defaultIfEmpty, flatMap } from 'rxjs/operators';
import { MatSidenavModule } from '@angular/material/sidenav';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    LoggerService.prototype.log = /**
     * @param {?} msg
     * @return {?}
     */
    function (msg) {
        console.log(msg);
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    LoggerService.prototype.error = /**
     * @param {?} msg
     * @return {?}
     */
    function (msg) {
        console.error(msg);
    };
    LoggerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */ LoggerService.ngInjectableDef = defineInjectable({ factory: function LoggerService_Factory() { return new LoggerService(); }, token: LoggerService, providedIn: "root" });
    return LoggerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(logger) {
        this.logger = logger;
    }
    /**
     * @return {?}
     */
    NotFoundComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NotFoundComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-not-found',
                    template: "<div class=\"container\"><h2>Page Not Found</h2>\n  <p></p>\n</div>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    NotFoundComponent.ctorParameters = function () { return [
        { type: LoggerService }
    ]; };
    return NotFoundComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CoreConfigurationService = /** @class */ (function () {
    function CoreConfigurationService(http, location) {
        this.http = http;
        this.location = location;
        this.config = null;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    CoreConfigurationService.prototype.load = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        /** @type {?} */
        var configFilePath = this.location.prepareExternalUrl(url);
        return this.http.get(configFilePath)
            .toPromise()
            .then(function (config) {
            _this.config = config;
            return config;
        })
            .catch(function (error) {
            console.error(error);
            return null;
        });
    };
    /**
     * @return {?}
     */
    CoreConfigurationService.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.config;
    };
    CoreConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    CoreConfigurationService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Location }
    ]; };
    /** @nocollapse */ CoreConfigurationService.ngInjectableDef = defineInjectable({ factory: function CoreConfigurationService_Factory() { return new CoreConfigurationService(inject(HttpClient), inject(Location)); }, token: CoreConfigurationService, providedIn: "root" });
    return CoreConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
/**
 * @param {?} parentModule
 * @param {?} moduleName
 * @return {?}
 */
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CoreConfig = /** @class */ (function () {
    function CoreConfig() {
    }
    return CoreConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CORE_CONFIG_URL = new InjectionToken('CORE_CONFIG_URL');
/**
 * @param {?} coreConfigService
 * @param {?} coreConfigUrl
 * @return {?}
 */
function coreConfigInitializer(coreConfigService, coreConfigUrl) {
    if (!coreConfigUrl || coreConfigUrl.length === 0) {
        return function () {
            return Promise.resolve(new CoreConfig());
        };
    }
    /** @type {?} */
    var t = coreConfigService;
    return function () {
        return t.load(coreConfigUrl);
    };
}
/** @type {?} */
var dialogDefaultOptions = __assign({}, new MatDialogConfig(), {
    width: 'auto',
    height: 'auto'
});
var CoreConfigurationModule = /** @class */ (function () {
    function CoreConfigurationModule(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreConfigurationModule');
    }
    CoreConfigurationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [HttpClientModule],
                    providers: [
                        {
                            provide: APP_INITIALIZER,
                            useFactory: coreConfigInitializer,
                            // useFactory: (coreConfigService: CoreConfigurationService) =>  coreConfigInitializer(coreConfigService) ,
                            deps: [CoreConfigurationService, CORE_CONFIG_URL],
                            multi: true
                        },
                        {
                            provide: MAT_DIALOG_DEFAULT_OPTIONS,
                            useValue: dialogDefaultOptions
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    CoreConfigurationModule.ctorParameters = function () { return [
        { type: CoreConfigurationModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return CoreConfigurationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NotificationService = /** @class */ (function () {
    function NotificationService(router, logger) {
        var _this = this;
        this.router = router;
        this.logger = logger;
        this.subject = new Subject();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof NavigationStart) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    /**
     * @param {?} message
     * @param {?=} keepAfterNavigationChange
     * @return {?}
     */
    NotificationService.prototype.success = /**
     * @param {?} message
     * @param {?=} keepAfterNavigationChange
     * @return {?}
     */
    function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    /**
     * @param {?} message
     * @param {?=} keepAfterNavigationChange
     * @return {?}
     */
    NotificationService.prototype.error = /**
     * @param {?} message
     * @param {?=} keepAfterNavigationChange
     * @return {?}
     */
    function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    /**
     * @return {?}
     */
    NotificationService.prototype.getMessage = /**
     * @return {?}
     */
    function () {
        return this.subject.asObservable();
    };
    NotificationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NotificationService.ctorParameters = function () { return [
        { type: Router },
        { type: LoggerService }
    ]; };
    /** @nocollapse */ NotificationService.ngInjectableDef = defineInjectable({ factory: function NotificationService_Factory() { return new NotificationService(inject(Router), inject(LoggerService)); }, token: NotificationService, providedIn: "root" });
    return NotificationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(logger, notificationService) {
        this.logger = logger;
        this.notificationService = notificationService;
    }
    /**
     * @return {?}
     */
    NotificationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.notificationService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    NotificationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-notification',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div *ngIf=\"message\" class=\"notification-container\" [class.bg-danger]=\"message.type==='error'\">\n  <span *ngIf=\"message.type==='error'\" class=\"icon-problem icon\">&nbsp;</span>\n  {{message.text}}\n</div>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.notification-container{position:absolute;left:50%;width:30em;-webkit-transform:translate(-50%);transform:translate(-50%);border:1px solid #a0a0a0;padding:.5rem 1.5rem;border-top:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px}"]
                },] },
    ];
    /** @nocollapse */
    NotificationComponent.ctorParameters = function () { return [
        { type: LoggerService },
        { type: NotificationService }
    ]; };
    return NotificationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciImprintDetailsService = /** @class */ (function () {
    function BciImprintDetailsService(httpClient, location) {
        this.httpClient = httpClient;
        this.location = location;
    }
    /**
     * Get imprint details for imprint view.
     */
    /**
     * Get imprint details for imprint view.
     * @return {?}
     */
    BciImprintDetailsService.prototype.getImprintDetails = /**
     * Get imprint details for imprint view.
     * @return {?}
     */
    function () {
        return this.httpClient.get(this.location.prepareExternalUrl('/assets/imprint-details.json'));
    };
    BciImprintDetailsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    BciImprintDetailsService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Location }
    ]; };
    /** @nocollapse */ BciImprintDetailsService.ngInjectableDef = defineInjectable({ factory: function BciImprintDetailsService_Factory() { return new BciImprintDetailsService(inject(HttpClient), inject(Location)); }, token: BciImprintDetailsService, providedIn: "root" });
    return BciImprintDetailsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Use this service to open dialogs/modal windows.
 * Future updates will ship with a standard dialog containing a header, content, action buttons and close icon button
 */
var ModalWindowService = /** @class */ (function () {
    function ModalWindowService(matDialog, document) {
        this.matDialog = matDialog;
        this.document = document;
    }
    /**
     * @return {?}
     */
    ModalWindowService.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * Opens a modal dialog containing the given component.
     * @template T, D, R
     * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param {?=} config Extra configuration options.
     * @param {?=} matDialog inject MatDialog in constructor in components contained in lazy-loaded Modules
     * @return {?} Reference to the newly-opened dialog.
     */
    ModalWindowService.prototype.openDialogWithComponent = /**
     * Opens a modal dialog containing the given component.
     * @template T, D, R
     * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param {?=} config Extra configuration options.
     * @param {?=} matDialog inject MatDialog in constructor in components contained in lazy-loaded Modules
     * @return {?} Reference to the newly-opened dialog.
     */
    function (componentOrTemplateRef, config, matDialog) {
        var _this = this;
        /** @type {?} */
        var matDialogUsed = (matDialog !== null && matDialog !== undefined) ? matDialog : this.matDialog;
        /** @type {?} */
        var dialogRef = matDialogUsed.open(componentOrTemplateRef, config);
        if (dialogRef && matDialogUsed.openDialogs.length > 0) {
            this.document.body.classList.remove('modal-closed');
            this.document.body.classList.add('modal');
            dialogRef.beforeClose().subscribe(function () {
                if (matDialogUsed.openDialogs.length === 1) {
                    _this.document.body.classList.remove('modal');
                    _this.document.body.classList.add('modal-closed');
                }
            });
        }
        return dialogRef;
    };
    ModalWindowService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    ModalWindowService.ctorParameters = function () { return [
        { type: MatDialog },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ ModalWindowService.ngInjectableDef = defineInjectable({ factory: function ModalWindowService_Factory() { return new ModalWindowService(inject(MatDialog), inject(DOCUMENT)); }, token: ModalWindowService, providedIn: "root" });
    return ModalWindowService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciImprintComponent = /** @class */ (function () {
    function BciImprintComponent(modalWindowService, imprintDetailsService, dialogRef) {
        this.modalWindowService = modalWindowService;
        this.imprintDetailsService = imprintDetailsService;
        this.dialogRef = dialogRef;
    }
    /**
     * @return {?}
     */
    BciImprintComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.imprintDetailsService.getImprintDetails().subscribe(function (imprintModel) {
            _this.data = imprintModel;
        });
    };
    /**
     * @return {?}
     */
    BciImprintComponent.prototype.clickCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    BciImprintComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-imprint',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"dialog-header\">\n  <h3 matDialogTitle>Imprint</h3>\n  <button class=\"close-button\" mat-icon-button tabindex=\"-1\" (click)=\"clickCancel()\">\n    <i class=\"Bosch-Ic Bosch-Ic-abort\"></i>\n  </button>\n</div>\n<mat-dialog-content>\n  <a class=\"header-logo\">\n    <img src=\"./assets/img/bosch-invented-for-life.svg\" alt=\"Bosch Invented For Life Logo\">\n  </a>\n\n  <table class=\"name-and-version-container\">\n    <tbody>\n    <tr>\n      <td>Name</td>\n      <td>{{ data?.name }}</td>\n    </tr>\n    <tr>\n      <td>Version</td>\n      <td>{{ data?.version || '0.0.0' }}</td>\n    </tr>\n    </tbody>\n  </table>\n\n  <table>\n    <tbody>\n    <tr>\n      <td>Name and address</td>\n      <td>\n        <p>{{data?.address?.name || 'Robert Bosch Manufacturing Solutions GmbH' }}</p>\n        <p>{{data?.address?.street || 'Postfach 30 02 20' }}</p>\n        <p>{{data?.address?.city || '70442 Stuttgart' }}</p>\n        <p>{{data?.address?.country || 'GERMANY' }}</p>\n      </td>\n    </tr>\n    <tr>\n      <td>Contact</td>\n      <td>\n        <p *ngIf=\"data?.contactAtBosch\">{{data.contactAtBosch}}</p>\n        <p>\n          <a href=\"mailto:{{data?.contactMail || 'kontakt@bosch.com'}}\">{{data?.contactMail || 'kontakt@bosch.com'}}</a>\n        </p>\n      </td>\n    </tr>\n    <tr>\n      <td>Board of management</td>\n      <td>{{ data?.boardOfManagement || 'Enno Scharphuis, Dierk G\u00F6ckel, Dr. Stefan A\u00DFmann'}}</td>\n    </tr>\n    </tbody>\n  </table>\n</mat-dialog-content>\n\n\n\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */mat-dialog-content{font-family:Bosch-Sans;font-weight:300;font-size:14px}.header-logo img{align-self:center;height:58.2px;width:180px;margin-bottom:64px;margin-top:16px}table{font-family:Bosch-Sans;font-weight:300;font-size:14px}table td{padding:0 32px 32px 0;border-bottom:0}table td p{margin:0;font-family:Bosch-Sans;font-weight:300;font-size:14px}table tr{border-bottom:none}table tr>td:first-child{font-family:Bosch-Sans;font-size:14px;font-weight:700;color:#525f6b;padding-right:32px;vertical-align:top}.name-and-version-container{margin-bottom:32px}a:focus{outline:0}"]
                },] },
    ];
    /** @nocollapse */
    BciImprintComponent.ctorParameters = function () { return [
        { type: ModalWindowService },
        { type: BciImprintDetailsService },
        { type: MatDialogRef }
    ]; };
    return BciImprintComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ENVIRONMENT_PROD = new InjectionToken('ENVIRONMENT_PROD');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Simple logout component to appear next to the user nav element. It will be properly aligned to the sidebar nav item.
 *
 * This component is dynamically created using portals, it must be included in the entryComponents of your NgModule!
 */
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
        /**
         * Informs that the component wishes to be closed. Used by the overlay handler.
         */
        this.onClose = new EventEmitter();
    }
    /**
     * @return {?}
     */
    LogoutComponent.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.close();
        this.config.onLogout();
    };
    /**
     * @return {?}
     */
    LogoutComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.onClose.emit();
    };
    LogoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-logout',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"bci-sidebar-nav-item-overlay\">\n  <div class=\"bci-sidebar-nav-item-overlay-header\">\n    <span>{{config?.title}}</span>\n    <button class=\"close-button\" mat-icon-button (click)=\"close()\">\n      <mat-icon fontIcon=\"Bosch-Ic-abort\"></mat-icon>\n    </button>\n  </div>\n  <div class=\"bci-sidebar-nav-item-overlay-buttons\">\n    <button class=\"button-primary\" (click)=\"logout()\">Logout</button>\n  </div>\n</div>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.bci-sidebar-nav-item-overlay{font-family:Bosch-Sans;font-weight:300;font-size:16px;background-color:#fff;position:relative;margin-left:8px;display:flex;flex-direction:column;align-items:flex-start;width:220px;padding:16px}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header{width:100%;display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;margin-bottom:16px}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header .close-button .mat-icon,.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header .close-button.mat-icon-button{line-height:unset;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header .close-button .Bosch-Ic{font-size:20px!important}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-buttons{width:100%;display:flex;flex-direction:row;justify-content:flex-end}.bci-sidebar-nav-item-overlay:after{right:100%;top:calc(100% - 24px);border:8px solid rgba(255,255,255,0);content:\" \";height:0;width:0;position:absolute;pointer-events:none;border-right-color:#fff;margin-top:-8px}"]
                },] },
    ];
    LogoutComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return LogoutComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DefaultCoreModuleConfig = {
    prod_environment: false,
    core_config_url: undefined
};
var BciCoreModule = /** @class */ (function () {
    function BciCoreModule(parentModule, iconRegistry) {
        this.iconRegistry = iconRegistry;
        throwIfAlreadyLoaded(parentModule, 'BciCoreModule');
        iconRegistry.registerFontClassAlias('bosch', 'Bosch-Ic')
            .setDefaultFontSetClass('Bosch-Ic');
    }
    /**
     * @param {?} config
     * @return {?}
     */
    BciCoreModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: BciCoreModule,
            providers: [
                {
                    provide: ENVIRONMENT_PROD,
                    useValue: config.prod_environment || DefaultCoreModuleConfig.prod_environment
                },
                {
                    provide: CORE_CONFIG_URL,
                    useValue: config.core_config_url
                }
            ]
        };
    };
    BciCoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        HttpClientModule,
                        CoreConfigurationModule,
                        FlexLayoutModule,
                        MatDialogModule,
                        MatButtonModule,
                        MatIconModule,
                        OverlayModule,
                        PortalModule
                    ],
                    declarations: [NotFoundComponent, NotificationComponent, BciImprintComponent, LogoutComponent],
                    exports: [NotFoundComponent, NotificationComponent, HttpClientModule, BciImprintComponent, FlexLayoutModule, LogoutComponent],
                    entryComponents: [BciImprintComponent, LogoutComponent]
                },] },
    ];
    /** @nocollapse */
    BciCoreModule.ctorParameters = function () { return [
        { type: BciCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
        { type: MatIconRegistry }
    ]; };
    return BciCoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CORE_CONFIG = new InjectionToken('CORE_CONFIG', {
    factory: function () { return inject(CoreConfigurationService).getConfig(); },
    providedIn: 'root'
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
/** @type {?} */
var BOSCH_COLORS = {
    BoschRed: '#E20015',
    BoschFuchsia: '#B90276',
    BoschFuchsia50: '#DC80BA',
    BoschViolet: '#50237F',
    BoschViolet50: '#A791BF',
    BoschDarkBlue: '#005691',
    BoschDarkBlue50: '#7FAAC8',
    BoschLightBlue: '#008ECF',
    BoschLightBlue50: '#7FC6E7',
    BoschTurquoise: '#00A8B0',
    BoschTurquoise50: '#7fd3d7',
    BoschLightGreen: '#78BE20',
    BoschLightGreen50: '#bbde8f',
    BoschDarkGreen: '#006249',
    BoschDarkGreen50: '#7fb0a4',
    BoschGreen: '#328D46',
    BoschWhite: '#FFFFFF',
    BoschLightGray: '#BFC0C2',
    /**
       * This gray scale should be used for dark UIs. Consider the light gray scale for your web application.
       */
    BoschDarkGray: '#525F6B',
    BoschBlack: '#000000',
    BoschSignalGreen: '#70bf54',
    BoschSignalYellow: '#FCAF17',
    BoschSignalRed: '#e11f26',
    BoschSignalOrange: '#ff6a00',
    /* Shades */
    BoschRedW75: '#F8BFC5',
    BoschRedW50: '#F17F8B',
    BoschRedW25: '#EA4051',
    BoschRedB25: '#A90010',
    BoschRedB50: '#71000B',
    BoschRedB75: '#390005',
    BoschFuchsiaW75: '#EDC0DD',
    BoschFuchsiaW50: '#DC80BA',
    BoschFuchsiaW25: '#CB4198',
    BoschFuchsiaB25: '#8B0158',
    BoschFuchsiaB50: '#5D013B',
    BoschFuchsiaB75: '#2E011E',
    BoschVioletW75: '#D3C8DF',
    BoschVioletW50: '#A791BF',
    BoschVioletW25: '#7C5A9F',
    BoschVioletB25: '#3C1A5F',
    BoschVioletB50: '#281240',
    BoschVioletB75: '#140920',
    BoschDarkBlueW75: '#BFD5E3',
    BoschDarkBlueW50: '#7FAAC8',
    BoschDarkBlueW25: '#4080AD',
    BoschDarkBlueB25: '#00406D',
    BoschDarkBlueB50: '#002B49',
    BoschDarkBlueB75: '#001624',
    BoschLightBlueW75: '#BFE3F3',
    BoschLightBlueW50: '#7FC6E7',
    BoschLightBlueW25: '#40AADB',
    BoschLightBlueB25: '#006A9B',
    BoschLightBlueB50: '#004768',
    BoschLightBlueB75: '#002434',
    BoschTurquoiseW75: '#BFE9EB',
    BoschTurquoiseW50: '#7FD3D7',
    BoschTurquoiseW25: '#40BEC4',
    BoschTurquoiseB25: '#007E84',
    BoschTurquoiseB50: '#005458',
    BoschTurquoiseB75: '#002A2C',
    BoschLightGreenW75: '#DDEFC7',
    BoschLightGreenW50: '#BBDE8F',
    BoschLightGreenW25: '#9ACE58',
    BoschLightGreenB25: '#5A8E18',
    BoschLightGreenB50: '#3C5F10',
    BoschLightGreenB75: '#1E3008',
    BoschDarkGreenW75: '#BFD8D1',
    BoschDarkGreenW50: '#7FB0A4',
    BoschDarkGreenW25: '#408977',
    BoschDarkGreenB25: '#004937',
    BoschDarkGreenB50: '#003125',
    BoschDarkGreenB75: '#001912',
    BoschLightGrayW75: '#EFEFF0',
    BoschLightGrayW50: '#DFDFE0',
    BoschLightGrayW25: '#CFD0D1',
    BoschLightGrayB25: '#8F9091',
    BoschLightGrayB50: '#606061',
    BoschLightGrayB75: '#303031',
    /**
       * This gray scale should be used for dark UIs. Consider the light gray scale for your web application.
       */
    BoschDarkGrayW75: '#D4D7DA',
    /**
       * This gray scale should be used for dark UIs. Consider the light gray scale for your web application.
       */
    BoschDarkGrayW50: '#A8AFB5',
    /**
       * This gray scale should be used for dark UIs. Consider the light gray scale for your web application.
       */
    BoschDarkGrayW25: '#7D8790',
    /**
       * This gray scale should be used for dark UIs. Consider the light gray scale for your web application.
       */
    BoschDarkGrayB25: '#3D4750',
    /**
       * This gray scale should be used for dark UIs. Consider the light gray scale for your web application.
       */
    BoschDarkGrayB50: '#293036',
    /**
       * This gray scale should be used for dark UIs. Consider the light gray scale for your web application.
       */
    BoschDarkGrayB75: '#15181B',
    BoschYellowW75: '#FEEBC5',
    BoschYellowW50: '#FDD78B',
    BoschYellowW25: '#FDC351',
    BoschYellowB25: '#BD8311',
    BoschYellowB50: '#7E580C',
    BoschYellowB75: '#3F2C06'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciContentComponent = /** @class */ (function () {
    function BciContentComponent() {
    }
    /**
     * @return {?}
     */
    BciContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BciContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-content',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"bci-content-container\">\n  <ng-content select=\"bci-sidebar\"></ng-content>\n  <ng-content>\n  </ng-content>\n\n  <div class=\"bci-content-container-main\">\n\n  </div>\n  <bci-loader></bci-loader>\n</div>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.bci-content-container{height:100%;width:100%;position:absolute;top:0;left:0;overflow:hidden}.bci-content-container:before{position:absolute;left:0;top:0;width:100%;height:16px;content:'';background-repeat:no-repeat;background-size:cover;background-position:center center;background-image:url(data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB4bWw6c3BhY2U9InByZXNlcnZlIgogIGhlaWdodD0iMzAwIgogIHdpZHRoPSI3MjAiCiAgdmVyc2lvbj0iMS4xIgogIHk9IjAiCiAgeD0iMCIKICB2aWV3Qm94PSIwIDAgNzIwIDMwMCI+CiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAgIC5zdDAgewogICAgICBmaWxsOiB1cmwoIiNTVkdJRF8xXyIpOwogICAgfQogICAgLnN0MSB7CiAgICAgIGZpbGw6IHVybCgiI1NWR0lEXzJfIik7CiAgICB9CiAgICAuc3QyIHsKICAgICAgZmlsbDogdXJsKCIjU1ZHSURfM18iKTsKICAgIH0KICAgIC5zdDMgewogICAgICBmaWxsOiB1cmwoIiNTVkdJRF80XyIpOwogICAgfQogICAgLnN0NCB7CiAgICAgIGZpbGw6IHVybCgiI1NWR0lEXzVfIik7CiAgICB9CiAgICAuc3Q1IHsKICAgICAgZmlsbDogI0FGMjAyNDsKICAgIH0KICAgIC5zdDYgewogICAgICBmaWxsOiB1cmwoIiNTVkdJRF82XyIpOwogICAgfQogICAgLnN0NyB7CiAgICAgIGZpbGw6ICM5NDFCMUU7CiAgICB9CiAgICAuc3Q4IHsKICAgICAgZmlsbDogI0IxMjczOTsKICAgIH0KICAgIC5zdDkgewogICAgICBmaWxsOiAjOTUyNDMyOwogICAgfQogICAgLnN0MTAgewogICAgICBmaWxsOiAjRDQyMDI3OwogICAgfQogICAgLnN0MTEgewogICAgICBmaWxsOiB1cmwoIiNTVkdJRF83XyIpOwogICAgfQogICAgLnN0MTIgewogICAgICBmaWxsOiB1cmwoIiNTVkdJRF84XyIpOwogICAgfQogICAgLnN0MTMgewogICAgICBmaWxsOiAjMUM5QTQ4OwogICAgfQogICAgLnN0MTQgewogICAgICBmaWxsOiB1cmwoIiNTVkdJRF85XyIpOwogICAgfQogICAgLnN0MTUgewogICAgICBmaWxsOiB1cmwoIiNTVkdJRF8xMF8iKTsKICAgIH0KICAgIC5zdDE2IHsKICAgICAgZmlsbDogIzJBMzg4NjsKICAgIH0KICAgIC5zdDE3IHsKICAgICAgZmlsbDogdXJsKCIjU1ZHSURfMTFfIik7CiAgICB9CiAgICAuc3QxOCB7CiAgICAgIGZpbGw6IHVybCgiI1NWR0lEXzEyXyIpOwogICAgfQogICAgLnN0MTkgewogICAgICBmaWxsOiB1cmwoIiNTVkdJRF8xM18iKTsKICAgIH0KICAgIC5zdDIwIHsKICAgICAgZmlsbDogdXJsKCIjU1ZHSURfMTRfIik7CiAgICB9CiAgPC9zdHlsZT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS41NSwtMy4zKSI+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiB5Mj0iLTMyLjY2MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMzIuNjYzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC0xMTguOTggMTIwLjU0KSIgeDI9Ijg0Mi4wOCIgeDE9IjExOC45OCI+PHN0b3Agc3RvcC1jb2xvcj0iIzk1MjMzMSIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzkyMUMxRCIgb2Zmc2V0PSIuMDM2MDk0Ii8+PHN0b3Agc3RvcC1jb2xvcj0iI0IwMjczOSIgb2Zmc2V0PSIuMDg0NjQ5Ii8+PHN0b3Agc3RvcC1jb2xvcj0iI0FEMUYyNCIgb2Zmc2V0PSIuMTIzNyIvPjxzdG9wIHN0b3AtY29sb3I9IiNDNzIwMjYiIG9mZnNldD0iLjE1MDkiLz48c3RvcCBzdG9wLWNvbG9yPSIjRDQyMDI3IiBvZmZzZXQ9Ii4xNjk3Ii8+PHN0b3Agc3RvcC1jb2xvcj0iI0NDMjQzMSIgb2Zmc2V0PSIuMTc1OCIvPjxzdG9wIHN0b3AtY29sb3I9IiNCNzJCNEMiIG9mZnNldD0iLjE4ODgiLz48c3RvcCBzdG9wLWNvbG9yPSIjOTUzMzcxIiBvZmZzZXQ9Ii4yMDc0Ii8+PHN0b3Agc3RvcC1jb2xvcj0iIzg4MzU3RiIgb2Zmc2V0PSIuMjE0MiIvPjxzdG9wIHN0b3AtY29sb3I9IiM4NTM2ODEiIG9mZnNldD0iLjI0MzYiLz48c3RvcCBzdG9wLWNvbG9yPSIjNkYzNjhCIiBvZmZzZXQ9Ii4yNjM4Ii8+PHN0b3Agc3RvcC1jb2xvcj0iIzM5NDI4RiIgb2Zmc2V0PSIuMjkxMSIvPjxzdG9wIHN0b3AtY29sb3I9IiMyMzNEN0QiIG9mZnNldD0iLjMyNDIiLz48c3RvcCBzdG9wLWNvbG9yPSIjMzIyQzZGIiBvZmZzZXQ9Ii40MTgxIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzJBMzg4NSIgb2Zmc2V0PSIuNDk0Ii8+PHN0b3Agc3RvcC1jb2xvcj0iIzFENjJBMSIgb2Zmc2V0PSIuNTU4MSIvPjxzdG9wIHN0b3AtY29sb3I9IiMyNzZDQTUiIG9mZnNldD0iLjU3MDIiLz48c3RvcCBzdG9wLWNvbG9yPSIjNDM4RUIzIiBvZmZzZXQ9Ii42MTAzIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzU1QTVCQyIgb2Zmc2V0PSIuNjM5OSIvPjxzdG9wIHN0b3AtY29sb3I9IiM1Q0FGQkYiIG9mZnNldD0iLjY1NTYiLz48c3RvcCBzdG9wLWNvbG9yPSIjNTZBQkJEIiBvZmZzZXQ9Ii42Nzc3Ii8+PHN0b3Agc3RvcC1jb2xvcj0iIzQzOUZCOCIgb2Zmc2V0PSIuNzA1OCIvPjxzdG9wIHN0b3AtY29sb3I9IiMxODhFQUYiIG9mZnNldD0iLjczNzIiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDM4QkFFIiBvZmZzZXQ9Ii43NDI2Ii8+PHN0b3Agc3RvcC1jb2xvcj0iIzA2OTI5MiIgb2Zmc2V0PSIuNzg5OCIvPjxzdG9wIHN0b3AtY29sb3I9IiMwNUExNEIiIG9mZnNldD0iLjg4NzUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDM5MjdFIiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IHdpZHRoPSI3MjMuMSIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIzMDYuNCIgY2xhc3M9InN0MCIgZmlsbD0idXJsKCNTVkdJRF8xXykiLz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIHkyPSItMTA5LjI2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9Ii0xMDkuMjYiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgLTExOC45OCAxMjAuNTQpIiB4Mj0iMjM1Ljk4IiB4MT0iMzI1LjA4Ij48c3RvcCBzdG9wLWNvbG9yPSIjODkzNjgwIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjODkzNjgwIiBvZmZzZXQ9Ii4zMzU0Ii8+PHN0b3Agc3RvcC1jb2xvcj0iIzhEMzE2RCIgb2Zmc2V0PSIuNTAyNSIvPjxzdG9wIHN0b3AtY29sb3I9IiM5MDI5NEQiIG9mZnNldD0iLjgzOTgiLz48c3RvcCBzdG9wLWNvbG9yPSIjOTAyNTQxIiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50Pjxwb2x5Z29uIHBvaW50cz0iMTc1LjEgMTUzLjIgMTE3IDMwNi40IDIwNi4xIDMwNi40IiBmaWxsPSJ1cmwoI1NWR0lEXzJfKSIgY2xhc3M9InN0MSIvPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8zXyIgeTI9Ii04Mi4yODQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iMTIwLjI0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC0xMTguOTggMTIwLjU0KSIgeDI9IjQ0Ni41NSIgeDE9IjQ3OC45MyI+PHN0b3Agc3RvcC1jb2xvcj0iIzMyMkM2RiIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzMyMkM2RiIgb2Zmc2V0PSIuMjQyNyIvPjxzdG9wIHN0b3AtY29sb3I9IiMzMDJGNzIiIG9mZnNldD0iLjQ1OTkiLz48c3RvcCBzdG9wLWNvbG9yPSIjMkEzQTdFIiBvZmZzZXQ9Ii43MTU1Ii8+PHN0b3Agc3RvcC1jb2xvcj0iIzE1NEE5MyIgb2Zmc2V0PSIuOTg5NiIvPjxzdG9wIHN0b3AtY29sb3I9IiMxMzRCOTQiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PHBvbHlnb24gcG9pbnRzPSIyODguNCAxNTMuMiAzMTAuNyAzMDYuNCAzNTguMSAzMDYuNCAzNTguMSAwIDMxMi45IDAiIGZpbGw9InVybCgjU1ZHSURfM18pIiBjbGFzcz0ic3QyIi8+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzRfIiB5Mj0iLTMyLjY2MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMzIuNjYzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC0xMTguOTggMTIwLjU0KSIgeDI9IjM3Mi44OCIgeDE9IjI5NC4wOCI+PHN0b3Agc3RvcC1jb2xvcj0iIzZGMzc4RCIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzNBNDI5MSIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cG9seWdvbiBwb2ludHM9IjE3NS4xIDE1My4yIDIwNi4xIDMwNi40IDI1My45IDE1My4yIDIwOS40IDAgMjA5LjQgMCIgZmlsbD0idXJsKCNTVkdJRF80XykiIGNsYXNzPSJzdDMiLz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfNV8iIHkyPSItMzIuNjYzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9Ii0zMi42NjMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgLTExOC45OCAxMjAuNTQpIiB4Mj0iMzI1LjA4IiB4MT0iNDMxLjg4Ij48c3RvcCBzdG9wLWNvbG9yPSIjMjMzRDdEIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjMjkzRDdEIiBvZmZzZXQ9Ii4yNDk1Ii8+PHN0b3Agc3RvcC1jb2xvcj0iIzNBM0M4MCIgb2Zmc2V0PSIuNTQ0NiIvPjxzdG9wIHN0b3AtY29sb3I9IiM1MTNCODQiIG9mZnNldD0iLjg2MTYiLz48c3RvcCBzdG9wLWNvbG9yPSIjNUQzQTg2IiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50Pjxwb2x5Z29uIHBvaW50cz0iMjUzLjkgMTUzLjIgMjA2LjEgMzA2LjQgMzEwLjcgMzA2LjQgMjg4LjQgMTUzLjIgMzEyLjkgMCAyMDkuNCAwIiBmaWxsPSJ1cmwoI1NWR0lEXzVfKSIgY2xhc3M9InN0NCIvPjxwb2x5Z29uIHBvaW50cz0iMTE2LjEgMCA1NS43IDAgNTUuNyA5NC44IDg5LjkgMTUzLjIgNTUuNyAyMTEuNiA1NS43IDMwNi40IDExNyAzMDYuNCA5NS4yIDE1My4yIiBmaWxsPSIjYWYyMDI0IiBjbGFzcz0ic3Q1Ii8+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzZfIiB5Mj0iNDMuOTM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9IjQzLjkzNyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtMTE4Ljk4IDEyMC41NCkiIHgyPSIyMzIuNjciIHgxPSIzMjkuMTEiPjxzdG9wIHN0b3AtY29sb3I9IiM4OTM2ODAiIG9mZnNldD0iMCIvPjxzdG9wIHN0b3AtY29sb3I9IiM4OTM2ODAiIG9mZnNldD0iLjMzNTQiLz48c3RvcCBzdG9wLWNvbG9yPSIjOEQzMTZEIiBvZmZzZXQ9Ii41MDI1Ii8+PHN0b3Agc3RvcC1jb2xvcj0iIzkwMjk0RCIgb2Zmc2V0PSIuODM5OCIvPjxzdG9wIHN0b3AtY29sb3I9IiM5MDI1NDEiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PHBvbHlnb24gcG9pbnRzPSIxNzUuMSAxNTMuMiAyMDkuNCAwIDExNi4xIDAiIGZpbGw9InVybCgjU1ZHSURfNl8pIiBjbGFzcz0ic3Q2Ii8+PHBvbHlnb24gcG9pbnRzPSI1NS43IDk0LjggNTUuNyAwIDAgMCIgZmlsbD0iIzk0MWIxZSIgY2xhc3M9InN0NyIvPjxwb2x5Z29uIHBvaW50cz0iNTUuNyAyMTEuNiA4OS45IDE1My4yIDU1LjcgOTQuOCIgZmlsbD0iI2IxMjczOSIgY2xhc3M9InN0OCIvPjxwb2x5Z29uIHBvaW50cz0iNTUuNyAyMTEuNiAwIDMwNi40IDU1LjcgMzA2LjQiIGZpbGw9IiM5NDFiMWUiIGNsYXNzPSJzdDciLz48cG9seWdvbiBwb2ludHM9IjU1LjcgOTQuOCAwIDAgMCAzMDYuNCA1NS43IDIxMS42IiBmaWxsPSIjOTUyNDMyIiBjbGFzcz0ic3Q5Ii8+PHBvbHlnb24gcG9pbnRzPSIxMTYuMSAwIDk1LjIgMTUzLjIgMTE3IDMwNi40IDE3NS4xIDE1My4yIiBmaWxsPSIjZDQyMDI3IiBjbGFzcz0ic3QxMCIvPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF83XyIgeTI9Ii0xODYuMDYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iMTIwLjQ0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC0xMTguOTggMTIwLjU0KSIgeDI9Ijc0OC45NiIgeDE9Ijc0OC45NiI+PHN0b3Agc3RvcC1jb2xvcj0iIzk0QkU1NSIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzkzQkQ1OCIgb2Zmc2V0PSIuMDQ0MzQwIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzhCQkM2QSIgb2Zmc2V0PSIuMzg5MSIvPjxzdG9wIHN0b3AtY29sb3I9IiM4NkJDNzUiIG9mZnNldD0iLjcxNDkiLz48c3RvcCBzdG9wLWNvbG9yPSIjODRCQzc5IiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoCiAgICAgIGQ9Im02NDEuNiAyNTkuNmMxLjctMjUuNCAxMC01NC42IDE4LjgtODUuNiAxLjQtNSAyLjgtMTAgNC4yLTE1LjEtMS40LTUuNS0yLjgtMTAuOS00LjItMTYuMi04LjgtMzMuMy0xNy02NC43LTE4LjgtOTItMS40LTIxLjIgMS40LTM3IDguOS01MC42aC00NS45Yy03LjUgMTguMy0xMC4zIDI5LjEtOC45IDUwLjMgMS43IDI3LjMgMTAgNTguNyAxOC44IDkyIDEzIDQ5LjMgMjggMTA2LjIgMjMuMiAxNjQuMmgxMi45Yy03LjYtMTIuOC0xMC40LTI3LjMtOS00N3oiCiAgICAgIGNsYXNzPSJzdDExIgogICAgICBmaWxsPSJ1cmwoI1NWR0lEXzdfKSIvPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF84XyIgeTI9Ii0xODQuNDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iMTE3LjI5IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC0xMTguOTggMTIwLjU0KSIgeDI9IjczMy40OSIgeDE9IjY1My43NiI+PHN0b3Agc3RvcC1jb2xvcj0iIzA4QTI0QiIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzBBQTE0RSIgb2Zmc2V0PSIuMTY3OCIvPjxzdG9wIHN0b3AtY29sb3I9IiMwQjlFNTciIG9mZnNldD0iLjQwNDciLz48c3RvcCBzdG9wLWNvbG9yPSIjMDk5QTY3IiBvZmZzZXQ9Ii42ODI3Ii8+PHN0b3Agc3RvcC1jb2xvcj0iIzA0OTQ3RCIgb2Zmc2V0PSIuOTg5OCIvPjxzdG9wIHN0b3AtY29sb3I9IiMwNDkzN0UiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0ibTYxNC41IDE0Mi4zYy04LjgtMzMuMy0xNy02NC43LTE4LjgtOTItMS40LTIxLjIgMS40LTMyIDguOS01MC4zaC0zNS40YzUuNyA1My45LTMuOCAxMDYuNy0xMy42IDE2Ni44LTUuNyAzNS0xMS43IDcxLjMtMTMuMiAxMDAuNi0xLjEgMjEuMSAwLjQgMzIuOCAxLjggMzloOTMuNWM0LjgtNTcuOS0xMC4zLTExNC44LTIzLjItMTY0LjF6IiBjbGFzcz0ic3QxMiIgZmlsbD0idXJsKCNTVkdJRF84XykiLz48cGF0aCBjbGFzcz0ic3QxMyIgZmlsbD0iIzFjOWE0OCIgZD0ibTY2NC42IDE1OC45Yy0xLjQgNS4xLTIuOCAxMC4xLTQuMiAxNS4xLTguOCAzMS0xNyA2MC4yLTE4LjggODUuNi0xLjQgMTkuNyAxLjQgMzQuMiA5IDQ2LjloMzNjNC4yLTUxLjgtNy4yLTEwMi4zLTE5LTE0Ny42eiIvPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF85XyIgeTI9Ii0xODUuOTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iMTIwLjU0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC0xMTguOTggMTIwLjU0KSIgeDI9IjgxMi44MyIgeDE9IjgxMi44MyI+PHN0b3Agc3RvcC1jb2xvcj0iIzY5QTA2MCIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzYzOUQ1QyIgb2Zmc2V0PSIuMDM5ODk1Ii8+PHN0b3Agc3RvcC1jb2xvcj0iIzRDOTQ0RiIgb2Zmc2V0PSIuMjE5MiIvPjxzdG9wIHN0b3AtY29sb3I9IiMzNzhFNDciIG9mZnNldD0iLjQxODQiLz48c3RvcCBzdG9wLWNvbG9yPSIjMjk4QjQ0IiBvZmZzZXQ9Ii42NTE1Ii8+PHN0b3Agc3RvcC1jb2xvcj0iIzIzOEE0MyIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJtNjgwLjUgMGMxMC43IDU1LjMtMi41IDExMC40LTE1LjkgMTU4LjkgMTEuNyA0NS4zIDIzLjIgOTUuOCAxOC45IDE0Ny42aDM5LjZ2LTMwNi41aC00Mi42eiIgY2xhc3M9InN0MTQiIGZpbGw9InVybCgjU1ZHSURfOV8pIi8+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzEwXyIgeTI9Ii0xODUuODYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iMTIwLjU0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC0xMTguOTggMTIwLjU0KSIgeDI9IjY1Mi40NSIgeDE9IjY1Mi40NSI+PHN0b3Agc3RvcC1jb2xvcj0iIzA1QjVEQyIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzA0QjBENyIgb2Zmc2V0PSIuMjE5NyIvPjxzdG9wIHN0b3AtY29sb3I9IiMwNUE0QzkiIG9mZnNldD0iLjUzNzEiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDU5MUI0IiBvZmZzZXQ9Ii45MTIyIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzA1OENBRSIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJtNTQyLjMgMjY3LjRjMS41LTI5LjQgNy41LTY1LjYgMTMuMi0xMDAuNiA5LjgtNjAuMSAxOS4zLTExMi44IDEzLjYtMTY2LjhoLTcwLjhjLTEuNCAxMS40LTIuOSAxOS4yLTEuOCA0MS44IDEuNSAzMS42IDcuNSA3MC41IDEzLjIgMTA4LjIgOC40IDU1LjQgMTYuNiAxMDguOCAxNS4xIDE1Ni40aDE5LjJjLTEuMy02LjItMi44LTE3LjktMS43LTM5eiIgY2xhc3M9InN0MTUiIGZpbGw9InVybCgjU1ZHSURfMTBfKSIvPjxwb2x5Z29uIHBvaW50cz0iMzc1LjcgMTUzLjIgMzU4LjEgMCAzNTguMSAzMDYuNCIgZmlsbD0iIzJhMzg4NiIgY2xhc3M9InN0MTYiLz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMTFfIiB5Mj0iNzcuMTM2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9Ii00LjMyODEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgLTExOC45OCAxMjAuNTQpIiB4Mj0iNzk2LjcxIiB4MT0iNzUxLjA1Ij48c3RvcCBzdG9wLWNvbG9yPSIjNjJCMTZFIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjODdCOTU3IiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Im02NDEuNiA1MC42YzEuNyAyNy4zIDEwIDU4LjcgMTguOCA5MiAxLjQgNS4zIDIuOCAxMC43IDQuMiAxNi4yIDEzLjUtNDguNCAyNi42LTEwMy41IDE1LjktMTU4LjhoLTMwYy03LjUgMTMuNi0xMC4zIDI5LjQtOC45IDUwLjZ6IiBjbGFzcz0ic3QxNyIgZmlsbD0idXJsKCNTVkdJRF8xMV8pIi8+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzEyXyIgeTI9Ii0xODkuMjgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iMTEzLjcxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC0xMTguOTggMTIwLjU0KSIgeDI9IjYzMS41OSIgeDE9IjU1MC40Ij48c3RvcCBzdG9wLWNvbG9yPSIjMDY5QUQ0IiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjMzBBMENFIiBvZmZzZXQ9Ii4zNTI1Ii8+PHN0b3Agc3RvcC1jb2xvcj0iIzVCQjBDMCIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJtNTA5LjggMTUwYy01LjctMzcuNy0xMS43LTc2LjYtMTMuMi0xMDguMi0xLjEtMjIuNyAwLjQtMzAuNCAxLjgtNDEuOGgtNDEuNWMxLjUgNDAuMS0xLjUgODUuMy03IDE2MC44LTMuMSA0My41LTggMTEwLjUtNyAxNDUuN2g4Mi4xYzEuNC00Ny43LTYuOC0xMDEuMS0xNS4yLTE1Ni41eiIgY2xhc3M9InN0MTgiIGZpbGw9InVybCgjU1ZHSURfMTJfKSIvPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xM18iIHkyPSItMTg1Ljg2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9IjEyMC41NCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtMTE4Ljk4IDEyMC41NCkiIHgyPSI1MDUuMzMiIHgxPSI1MDUuMzMiPjxzdG9wIHN0b3AtY29sb3I9IiMxRTQ1OEUiIG9mZnNldD0iMCIvPjxzdG9wIHN0b3AtY29sb3I9IiMxRjRGOTYiIG9mZnNldD0iLjI0MTEiLz48c3RvcCBzdG9wLWNvbG9yPSIjMkI2QUFCIiBvZmZzZXQ9Ii43MjkyIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzMzN0JCOSIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cG9seWdvbiBwb2ludHM9IjM1OC4xIDMwNi40IDQxNC42IDMwNi40IDQxNC42IDAgMzU4LjEgMCAzNzUuNyAxNTMuMiIgZmlsbD0idXJsKCNTVkdJRF8xM18pIiBjbGFzcz0ic3QxOSIvPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xNF8iIHkyPSIxMjAuNTQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iLTE4NS44NiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtMTE4Ljk4IDEyMC41NCkiIHgyPSI1NTQuOTIiIHgxPSI1NTQuOTIiPjxzdG9wIHN0b3AtY29sb3I9IiMzRjlBQzkiIG9mZnNldD0iMCIvPjxzdG9wIHN0b3AtY29sb3I9IiMyMDYyQTIiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0ibTQ0OS45IDE2MC44YzUuNS03NS41IDguNS0xMjAuNiA3LTE2MC44aC00Mi4ybC0wLjEgMzA2LjRoMjguM2MtMS0zNS4xIDMuOC0xMDIuMSA3LTE0NS42eiIgY2xhc3M9InN0MjAiIGZpbGw9InVybCgjU1ZHSURfMTRfKSIvPjwvZz4KPC9zdmc+Cg==);z-index:10000}::ng-deep body.modal .bci-content-container{-webkit-animation:.3s forwards body_blur;animation:.3s forwards body_blur}::ng-deep body.modal-closed .bci-content-container{-webkit-animation:.3s body_unblur;animation:.3s body_unblur}@-webkit-keyframes body_blur{from{-webkit-filter:blur(.3px);filter:blur(.3px)}to{-webkit-filter:blur(3px);filter:blur(3px)}}@keyframes body_blur{from{-webkit-filter:blur(.3px);filter:blur(.3px)}to{-webkit-filter:blur(3px);filter:blur(3px)}}@-webkit-keyframes body_unblur{from{-webkit-filter:blur(3px);filter:blur(3px)}to{-webkit-filter:blur(.3px);filter:blur(.3px)}}@keyframes body_unblur{from{-webkit-filter:blur(3px);filter:blur(3px)}to{-webkit-filter:blur(.3px);filter:blur(.3px)}}"]
                },] },
    ];
    /** @nocollapse */
    BciContentComponent.ctorParameters = function () { return []; };
    return BciContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciFooterComponent = /** @class */ (function () {
    function BciFooterComponent() {
    }
    /**
     * @return {?}
     */
    BciFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BciFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-footer',
                    template: "<p>\n  bsc-footer works!\n</p>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    BciFooterComponent.ctorParameters = function () { return []; };
    return BciFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Provides list of breadcrumbs for the currently active route.
 * HOW TO USE:
 * Import this module in app.module with "BreadcrumbsModule".
 * Position it on the page using the html tag <bci-breadcrumbs>.
 * Define custom titles and temporary titles, which will be cleared upon navigation.
 */
var BreadcrumbsService = /** @class */ (function () {
    function BreadcrumbsService(router, activatedRoute) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        /**
         * Always show "home"-route in breadcrumbs (default: false)
         */
        this.stickyRootBreadcrumb = false;
        this.breadcrumbs$ = new BehaviorSubject([]);
        /**
         * Observable providing the list of Breadcrumb (current as well as future lists)
         */
        this.breadcrumbs = this.breadcrumbs$.asObservable();
        this.pathToBreadcrumbMap = new Map();
        this.temporaryPathToBreadcrumbMap = new Map();
        this.ngUnsubscribe = new Subject();
        // update breadcrumbs after navgiation
        this.router.events.pipe(takeUntil(this.ngUnsubscribe), filter(function (event) { return event instanceof NavigationEnd; })).subscribe(function () { return _this.refresh(); });
        // clean up temporary path-to-title mappings upon start of navigation
        this.router.events.pipe(takeUntil(this.ngUnsubscribe), filter(function (event) { return event instanceof NavigationStart; })).subscribe(function (event) {
            /** @type {?} */
            var oldUrl = _this.normalizePath((/** @type {?} */ (event)).url);
            Array.from(_this.temporaryPathToBreadcrumbMap.keys(), function (path) {
                if (!oldUrl.startsWith(path)) {
                    _this.temporaryPathToBreadcrumbMap.delete(path);
                }
            });
        });
    }
    /**
     * @return {?}
     */
    BreadcrumbsService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    /**
     * @param {?} navItems
     * @return {?}
     */
    BreadcrumbsService.prototype.setNavigationItems = /**
     * @param {?} navItems
     * @return {?}
     */
    function (navItems) {
        this.processNavigationItems(navItems);
        this.refresh();
    };
    /**
     * Set title for a path, like setTitle('a/b/c', 'C');
     * @param {?} path relative path
     * @param {?} title breadcrumb title for the given path
     * @return {?}
     */
    BreadcrumbsService.prototype.setTitle = /**
     * Set title for a path, like setTitle('a/b/c', 'C');
     * @param {?} path relative path
     * @param {?} title breadcrumb title for the given path
     * @return {?}
     */
    function (path, title) {
        this.setBreadcrumb(this.normalizePath(path), {
            title: title,
            url: path,
        });
        this.refresh();
    };
    /**
     * Create a temporary breacrumb for a path, like 'C' for 'a/b/c'
     * @param {?} path relative path
     * @param {?} title breadcrumb title for the given path
     * @return {?}
     */
    BreadcrumbsService.prototype.setTemporaryTitle = /**
     * Create a temporary breacrumb for a path, like 'C' for 'a/b/c'
     * @param {?} path relative path
     * @param {?} title breadcrumb title for the given path
     * @return {?}
     */
    function (path, title) {
        this.temporaryPathToBreadcrumbMap.set(this.normalizePath(path), {
            title: title,
            url: path,
        });
        this.refresh();
    };
    /**
     * Create a temporary breacrumb for a route's url
     * @param {?} route the matched route
     * @param {?} title the desired title
     * @return {?}
     */
    BreadcrumbsService.prototype.setTemporaryTitleForRoute = /**
     * Create a temporary breacrumb for a route's url
     * @param {?} route the matched route
     * @param {?} title the desired title
     * @return {?}
     */
    function (route, title) {
        this.setTemporaryTitle(this.routeToPathFromRoot(route), title);
    };
    /**
     * Create a temporary breadcrumb for a route superpath containing all required segments.
     * E.g. a breadcrumb with the url [...]/a/b will be created for a route path /:A/:B/:C and the required segments [':A', ':B'] or [':B']
     * @param {?} route the matched route
     * @param {?} requiredPathSegments the required path segments, parameters prefixed with ':'
     * @param {?} title the desired title
     * @return {?}
     */
    BreadcrumbsService.prototype.setTemporaryTitleForPartialRoute = /**
     * Create a temporary breadcrumb for a route superpath containing all required segments.
     * E.g. a breadcrumb with the url [...]/a/b will be created for a route path /:A/:B/:C and the required segments [':A', ':B'] or [':B']
     * @param {?} route the matched route
     * @param {?} requiredPathSegments the required path segments, parameters prefixed with ':'
     * @param {?} title the desired title
     * @return {?}
     */
    function (route, requiredPathSegments, title) {
        /** @type {?} */
        var missingPathSegments = new Set(requiredPathSegments);
        /** @type {?} */
        var baseUrl = this.routeToPathFromRoot(route.parent);
        /** @type {?} */
        var pathSegments = this.getPathSegments(route);
        /** @type {?} */
        var relativeUrlSegments = [];
        for (var i = 0; i < pathSegments.length; i++) {
            /** @type {?} */
            var pathSegment = pathSegments[i].path;
            /** @type {?} */
            var urlSegment = route.url[i].path;
            missingPathSegments.delete(pathSegment);
            relativeUrlSegments.push(urlSegment);
            if (missingPathSegments.size === 0) {
                break;
            }
        }
        if (missingPathSegments.size > 0) {
            console.warn('Required path segments missing, no new breadcrumb has been defined: ' + Array.from(missingPathSegments));
            return;
        }
        /** @type {?} */
        var relativeUrl = relativeUrlSegments.length > 0 ? '/' + relativeUrlSegments.join('/') : '';
        this.setTemporaryTitle(baseUrl + relativeUrl, title);
    };
    /**
     * Build URL string from root to the given route (including).
     * @param {?} route last route part of the url.
     * @return {?} URL from root to route.
     */
    BreadcrumbsService.prototype.routeToPathFromRoot = /**
     * Build URL string from root to the given route (including).
     * @param {?} route last route part of the url.
     * @return {?} URL from root to route.
     */
    function (route) {
        return '/' + route.pathFromRoot.map(function (r) { return r.url.map(function (urlSegment) { return urlSegment.path; }).filter(function (s) { return !!s.length; }).join('/'); }).filter(function (s) { return !!s.length; }).join('/');
    };
    /**
     * Recompute breadcrumbs for currently activated route
     * @return {?}
     */
    BreadcrumbsService.prototype.refresh = /**
     * Recompute breadcrumbs for currently activated route
     * @return {?}
     */
    function () {
        this.breadcrumbs$.next(this.parseActivatedRoute());
    };
    /**
     * @param {?} route
     * @return {?}
     */
    BreadcrumbsService.prototype.getPathSegments = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (!route.routeConfig || !route.routeConfig.path) {
            return route.url;
        }
        /** @type {?} */
        var urlTree = this.router.parseUrl(route.routeConfig.path);
        if (urlTree.root && urlTree.root.children && urlTree.root.children["primary"]) {
            return urlTree.root.children["primary"].segments;
        }
        else {
            return [];
        }
    };
    /**
     * @param {?} navigationItems
     * @return {?}
     */
    BreadcrumbsService.prototype.processNavigationItems = /**
     * @param {?} navigationItems
     * @return {?}
     */
    function (navigationItems) {
        var _this = this;
        this.flattenNavigationItems(navigationItems).forEach(function (_a) {
            var url = _a.url, title = _a.title;
            return _this.setBreadcrumb(url, {
                title: title,
                url: url
            });
        });
    };
    /**
     * @param {?} navItems
     * @return {?}
     */
    BreadcrumbsService.prototype.flattenNavigationItems = /**
     * @param {?} navItems
     * @return {?}
     */
    function (navItems) {
        var _this = this;
        return navItems.map(function (navItem) {
            if (navItem.items && navItem.items.length > 0) {
                return _this.flattenNavigationItems(navItem.items).concat(navItem);
            }
            return [navItem];
        }).reduce(function (prev, cur) { return prev.concat(cur); });
    };
    /**
     * @return {?}
     */
    BreadcrumbsService.prototype.parseActivatedRoute = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var breadcrumbs = [];
        /** @type {?} */
        var pathSegments = [];
        // get path segments
        for (var route = this.activatedRoute.snapshot; route; route = route.firstChild) {
            pathSegments.push.apply(pathSegments, __spread(route.url.map(function (segment) { return segment.path; })));
        }
        // add "/" ("Home") to breadcrumbs
        if (this.stickyRootBreadcrumb || pathSegments.length === 0) {
            pathSegments.unshift('');
        }
        /** @type {?} */
        var superpathSegments = [];
        try {
            for (var pathSegments_1 = __values(pathSegments), pathSegments_1_1 = pathSegments_1.next(); !pathSegments_1_1.done; pathSegments_1_1 = pathSegments_1.next()) {
                var pathSegment = pathSegments_1_1.value;
                superpathSegments.push(pathSegment);
                /** @type {?} */
                var breadcrumbElement = this.getBreadcrumb(this.toPath(superpathSegments));
                if (!!breadcrumbElement) {
                    breadcrumbs.push(breadcrumbElement);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (pathSegments_1_1 && !pathSegments_1_1.done && (_a = pathSegments_1.return)) _a.call(pathSegments_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!!breadcrumbs.length) {
            /** @type {?} */
            var lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];
            if (lastBreadcrumb.url && this.normalizePath(lastBreadcrumb.url) === this.toPath(pathSegments)) {
                // do not link breadcrumb for currently activated route
                breadcrumbs[breadcrumbs.length - 1] = __assign({}, lastBreadcrumb, { url: undefined });
            }
        }
        return breadcrumbs;
        var e_1, _a;
    };
    /**
     * @param {?} path
     * @return {?}
     */
    BreadcrumbsService.prototype.getBreadcrumb = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this.temporaryPathToBreadcrumbMap.get(path) || this.pathToBreadcrumbMap.get(path);
    };
    /**
     * @param {?} path
     * @param {?} breadcrumb
     * @return {?}
     */
    BreadcrumbsService.prototype.setBreadcrumb = /**
     * @param {?} path
     * @param {?} breadcrumb
     * @return {?}
     */
    function (path, breadcrumb) {
        this.pathToBreadcrumbMap.set(this.normalizePath(path), breadcrumb);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    BreadcrumbsService.prototype.normalizePath = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        if (path === undefined) {
            return '';
        }
        /** @type {?} */
        var tempPath = path.startsWith('/') ? path : '/' + path;
        return tempPath.endsWith('/') ? tempPath : tempPath + '/';
    };
    /**
     * @param {?} pathSegments
     * @return {?}
     */
    BreadcrumbsService.prototype.toPath = /**
     * @param {?} pathSegments
     * @return {?}
     */
    function (pathSegments) {
        return this.normalizePath(pathSegments.join('/'));
    };
    BreadcrumbsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    BreadcrumbsService.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute }
    ]; };
    /** @nocollapse */ BreadcrumbsService.ngInjectableDef = defineInjectable({ factory: function BreadcrumbsService_Factory() { return new BreadcrumbsService(inject(Router), inject(ActivatedRoute)); }, token: BreadcrumbsService, providedIn: "root" });
    return BreadcrumbsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciHeaderComponent = /** @class */ (function () {
    function BciHeaderComponent(router, breadcrumbService) {
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this.header = '';
        this.logoRoute = '/';
    }
    /**
     * @return {?}
     */
    BciHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    BciHeaderComponent.prototype.onLogoClicked = /**
     * @return {?}
     */
    function () {
        // TODO: Cursor:pointer when logoLink or logoRoute is set
        if (this.logoRoute) {
            this.router.navigate([this.logoRoute]);
        }
    };
    BciHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-header',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"bci-header-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n  <ng-container *ngIf=\"header?.length;\">\n    <div class=\"header-title\">{{header}}</div>\n  </ng-container>\n  <div class=\"header-content\">\n    <bci-breadcrumbs fxHide.lt-md=\"true\" role=\"navigation\" aria-label=\"breadcrumbs\">\n      <bci-breadcrumb *ngFor=\"let breadcrumb of breadcrumbService.breadcrumbs | async; let last = last\"\n                      [attr.aria-current]=\"last ? 'page' : false\"\n                      [title]=\"breadcrumb.title\"\n                      [url]=\"breadcrumb.url\">\n      </bci-breadcrumb>\n    </bci-breadcrumbs>\n    <ng-content></ng-content>\n  </div>\n  <a class=\"header-logo\" (click)=\"onLogoClicked()\">\n    <img src=\"./assets/img/bosch-logo-only.svg\" alt=\"Bosch Invented For Life Logo\">\n  </a>\n</div>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.supergraphic{z-index:10}.bci-header-container{padding:0 32px;height:64px;border-width:0 0 1px;border-color:#dfdfe0;border-style:solid;border-radius:0}.bci-header-container .header-title{margin-right:32px;font-family:Bosch-Sans;font-weight:300;font-size:28px}.bci-header-container .header-content{margin-right:32px}.bci-header-container .header-logo{margin-left:auto;height:100%;width:140px}.bci-header-container .header-logo img{height:100%;width:140px}"]
                },] },
    ];
    /** @nocollapse */
    BciHeaderComponent.ctorParameters = function () { return [
        { type: Router },
        { type: BreadcrumbsService }
    ]; };
    BciHeaderComponent.propDecorators = {
        header: [{ type: Input }],
        logoRoute: [{ type: Input }]
    };
    return BciHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciLoaderService = /** @class */ (function () {
    function BciLoaderService() {
        this.loaderSubject = new Subject();
        this.loaderState = /** @type {?} */ (this.loaderSubject.asObservable());
        this.loaderQueueElements = [];
    }
    /**
     * @return {?}
     */
    BciLoaderService.prototype.showProgressBar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = {
            id: Date.now()
        };
        this.loaderQueueElements.push(element);
        this.loaderSubject.next(true);
        return element;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    BciLoaderService.prototype.hideProgressBar = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var index = this.loaderQueueElements.findIndex(function (el) { return element.id === el.id; });
        if (index > -1) {
            this.loaderQueueElements.splice(index, 1);
        }
        if (this.loaderQueueElements.length === 0) {
            this.loaderSubject.next(false);
        }
    };
    BciLoaderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    BciLoaderService.ctorParameters = function () { return []; };
    /** @nocollapse */ BciLoaderService.ngInjectableDef = defineInjectable({ factory: function BciLoaderService_Factory() { return new BciLoaderService(); }, token: BciLoaderService, providedIn: "root" });
    return BciLoaderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciLoaderComponent = /** @class */ (function () {
    function BciLoaderComponent(bciLoaderService) {
        this.bciLoaderService = bciLoaderService;
        this.show = false;
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    BciLoaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.bciLoaderService.loaderState.pipe(takeUntil(this.componentDestroyed$)).subscribe(function (state$$1) {
            _this.show = state$$1;
        });
    };
    /**
     * @return {?}
     */
    BciLoaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    };
    BciLoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-loader',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"loader-background-container\" *ngIf=\"show\">\n  <div class=\"loader-backdrop\"></div>\n  <div class=\"loader-overlay\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <img src=\"./assets/img/loading.gif\">\n  </div>\n</div>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.loader-hidden{visibility:hidden}.loader-overlay{left:0;right:0;top:0;bottom:0;position:absolute;z-index:10000;contain:strict}.loader-backdrop{left:0;top:0;position:absolute;z-index:2;display:block;width:100%;height:100%;background-color:#000;opacity:.3;-webkit-transform:translateZ(0);transform:translateZ(0)}"],
                },] },
    ];
    /** @nocollapse */
    BciLoaderComponent.ctorParameters = function () { return [
        { type: BciLoaderService }
    ]; };
    return BciLoaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciSidebarService = /** @class */ (function () {
    function BciSidebarService(router, location, locationStrategy) {
        this.router = router;
        this.location = location;
        this.locationStrategy = locationStrategy;
        this.sidebarState$ = new BehaviorSubject(true);
        this.sidebarVisibility$ = new BehaviorSubject(true);
    }
    /**
     * @param {?} open
     * @return {?}
     */
    BciSidebarService.prototype.setSidebarState = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.sidebarState$.next(open);
    };
    /**
     * @param {?} visible
     * @return {?}
     */
    BciSidebarService.prototype.setSidebarVisibility = /**
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        this.sidebarVisibility$.next(visible);
    };
    /**
     * @return {?}
     */
    BciSidebarService.prototype.getSidebarState = /**
     * @return {?}
     */
    function () {
        return this.sidebarState$.asObservable();
    };
    /**
     * @return {?}
     */
    BciSidebarService.prototype.getSidebarVisibility = /**
     * @return {?}
     */
    function () {
        return this.sidebarVisibility$.asObservable();
    };
    /**
     * Navigates to the URL either internally (with Angular Router) or externally (window.location).
     * If there is not http protocol or if the origin is the same and the route is part of the router config, navigate internally.
     * Else, navigate externally.
     * @param {?} url Absolute URL or internal route.
     * @param {?=} extras {\@link NavigationExtras}
     * @return {?} The {\@link router} navigate return
     */
    BciSidebarService.prototype.navigateToUrl = /**
     * Navigates to the URL either internally (with Angular Router) or externally (window.location).
     * If there is not http protocol or if the origin is the same and the route is part of the router config, navigate internally.
     * Else, navigate externally.
     * @param {?} url Absolute URL or internal route.
     * @param {?=} extras {\@link NavigationExtras}
     * @return {?} The {\@link router} navigate return
     */
    function (url, extras) {
        /** @type {?} */
        var urlObject;
        try {
            urlObject = new URL(url);
        }
        catch (e) {
            // assuming TypeError, Invalid URL -> navigate internally directly to URL
            return this.router.navigate([url], extras);
        }
        if (!!urlObject) {
            /** @type {?} */
            var baseHref = this.locationStrategy.getBaseHref();
            baseHref = baseHref.endsWith('/') ? baseHref : baseHref + "/";
            if (urlObject.origin === window.location.origin && urlObject.pathname.startsWith(baseHref)) {
                return this.router.navigate([urlObject.pathname], extras);
            }
            else {
                window.location.href = urlObject.href;
            }
        }
    };
    BciSidebarService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    BciSidebarService.ctorParameters = function () { return [
        { type: Router },
        { type: Location },
        { type: LocationStrategy }
    ]; };
    /** @nocollapse */ BciSidebarService.ngInjectableDef = defineInjectable({ factory: function BciSidebarService_Factory() { return new BciSidebarService(inject(Router), inject(Location), inject(LocationStrategy)); }, token: BciSidebarService, providedIn: "root" });
    return BciSidebarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciSidebarComponent = /** @class */ (function () {
    function BciSidebarComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.applicationTitle = '';
        this.open = true;
        this.visible = true;
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    BciSidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // TODO: remember sidebar state (opened/closed) in storage provider and load here
        this.sidebarService.getSidebarState().pipe(takeUntil(this.componentDestroyed$)).subscribe(function (state$$1) {
            _this.open = state$$1;
            if (state$$1 && _this.visible) {
                _this.sidenav.open();
            }
            else {
                _this.sidenav.close();
            }
        });
        this.sidebarService.getSidebarVisibility().pipe(takeUntil(this.componentDestroyed$)).subscribe(function (visible) {
            _this.visible = visible;
            if (visible && _this.open) {
                _this.sidenav.open();
            }
            else {
                _this.sidenav.close();
            }
        });
    };
    /**
     * @return {?}
     */
    BciSidebarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    };
    /**
     * @return {?}
     */
    BciSidebarComponent.prototype.toggleSideNavigationBar = /**
     * @return {?}
     */
    function () {
        this.sidebarService.setSidebarState(!this.open);
    };
    /**
     * @return {?}
     */
    BciSidebarComponent.prototype.isOpen = /**
     * @return {?}
     */
    function () {
        return this.open;
    };
    /**
     * @return {?}
     */
    BciSidebarComponent.prototype.isVisible = /**
     * @return {?}
     */
    function () {
        return this.visible;
    };
    BciSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-sidebar',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-sidenav-container class=\"\">\n\n\n  <mat-sidenav #sidenav mode=\"side\" [disableClose]=\"true\" fxLayout=\"column\"><!--[opened]=\"isOpen() && isVisible()\"-->\n    <div class=\"sidenav-header\">\n      <h1>{{applicationTitle}}</h1>\n      <div class=\"burger\" (click)=\"toggleSideNavigationBar();\">\n        <div class=\"burger-line\" [class.burgerTop]=\"isOpen()\"></div>\n        <div class=\"burger-line\" [class.burgerMiddle]=\"isOpen()\"></div>\n        <div class=\"burger-line\" [class.burgerBottom]=\"isOpen()\"></div>\n      </div>\n    </div>\n    <bci-sidebar-nav-list [navItems]=\"sidebarLinks\"\n                          *ngIf=\"sidebarLinks && sidebarLinks.length > 0\"></bci-sidebar-nav-list>\n\n    <ng-content select=\"bci-sidebar-footer\"></ng-content>\n  </mat-sidenav>\n\n  <div class=\"content-container\" fxLayout=\"row\">\n    <div class=\"sidenav-header closed-sidebar\" *ngIf=\"!isOpen() && isVisible()\" (click)=\"toggleSideNavigationBar();\">\n      <div class=\"burger\">\n        <div class=\"burger-line\" [class.burgerTop]=\"isOpen()\"></div>\n        <div class=\"burger-line\" [class.burgerMiddle]=\"isOpen()\"></div>\n        <div class=\"burger-line\" [class.burgerBottom]=\"isOpen()\"></div>\n      </div>\n    </div>\n    <div class=\"bci-content-container-main\" fxLayout=\"column\" fxFlex=\"grow\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</mat-sidenav-container>\n",
                    styles: ["@charset \"UTF-8\";/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */mat-sidenav-container{height:100vh}mat-sidenav-container mat-sidenav{background-color:#525f6b;margin-top:16px;width:300px}mat-sidenav-container mat-sidenav .sidenav-items{padding:0;border-width:0 0 1px;border-color:rgba(255,255,255,.05);border-style:solid;border-radius:0}mat-sidenav-container mat-sidenav .sidenav-items li{width:100%;margin:0;border-width:1px 0 0;border-color:rgba(255,255,255,.05);border-style:solid;border-radius:0}mat-sidenav-container mat-sidenav .sidenav-items .header-container,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item{padding:0 16px;display:inline-block;width:100%;line-height:48px;font-family:Bosch-Sans;font-weight:300;font-size:16px;border-width:0 0 0 4px;border-color:transparent;border-style:solid;border-radius:0}mat-sidenav-container mat-sidenav .sidenav-items .header-container:hover,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item:hover{background-color:rgba(0,0,0,.05);color:#bfc0c2}mat-sidenav-container mat-sidenav .sidenav-items .header-container.active,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item.active{border-color:#008ecf}mat-sidenav-container mat-sidenav .sidenav-items .header-container.has-items::before,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item.has-items::before{font-family:Bosch-Ic;content:\"\uF11D\";font-style:normal;font-size:24px}mat-sidenav-container mat-sidenav .sidenav-subitems{padding:0 0 0 16px}mat-sidenav-container ::ng-deep .mat-drawer-content{overflow:hidden}mat-sidenav-container .sidenav-header{cursor:default;position:relative;height:64px;border-width:0 0 1px;border-color:rgba(255,255,255,.05);border-style:solid;border-radius:0}mat-sidenav-container .sidenav-header.closed-sidebar{margin-top:16px;width:50px;height:100vh;background-color:#525f6b;cursor:pointer}mat-sidenav-container .sidenav-header .burger{display:inline-block;position:absolute;right:0;margin:25px 16px 0 0;cursor:pointer}mat-sidenav-container .sidenav-header .burger .burger-line{height:1px;width:24px;background-color:#fff;margin-bottom:6px;transition:.4s}mat-sidenav-container .sidenav-header .burger .burger-line.burgerMiddle{opacity:0}mat-sidenav-container .sidenav-header .burger .burger-line.burgerTop{-webkit-transform:rotate(-45deg) translateY(4px) translateX(-4px);transform:rotate(-45deg) translateY(4px) translateX(-4px);opacity:1!important}mat-sidenav-container .sidenav-header .burger .burger-line.burgerBottom{-webkit-transform:rotate(45deg) translateX(-6.5px) translateY(-6.5px);transform:rotate(45deg) translateX(-6.5px) translateY(-6.5px);opacity:1!important}mat-sidenav-container .sidenav-header h1{display:inline-block;margin:0 0 0 16px;line-height:64px;white-space:nowrap;width:220px;overflow:hidden;text-overflow:ellipsis;color:#bfc0c2;font-family:Bosch-Sans;font-weight:300;font-size:20px}.content-container{position:absolute;left:0;right:0;top:0;bottom:0}.bci-content-container-main{margin:16px 0 0;overflow:hidden}"]
                },] },
    ];
    /** @nocollapse */
    BciSidebarComponent.ctorParameters = function () { return [
        { type: BciSidebarService }
    ]; };
    BciSidebarComponent.propDecorators = {
        applicationTitle: [{ type: Input }],
        sidebarLinks: [{ type: Input }],
        sidenav: [{ type: ViewChild, args: ['sidenav',] }]
    };
    return BciSidebarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciSidebarFooterComponent = /** @class */ (function () {
    function BciSidebarFooterComponent() {
    }
    /**
     * @return {?}
     */
    BciSidebarFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BciSidebarFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-sidebar-footer',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"bci-sidebar-footer-container\">\n</div>\n<bci-sidebar-nav-list [navItems]=\"sidebarFooterLinks\"></bci-sidebar-nav-list>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{margin-top:auto}.bci-sidebar-footer-container{border-width:1px 0 0;border-color:#fff;border-style:solid;border-radius:0;margin:16px 16px 0;width:calc(100% - 32px)}"]
                },] },
    ];
    /** @nocollapse */
    BciSidebarFooterComponent.ctorParameters = function () { return []; };
    BciSidebarFooterComponent.propDecorators = {
        sidebarFooterLinks: [{ type: Input }]
    };
    return BciSidebarFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
var SidebarNavItem = /** @class */ (function () {
    function SidebarNavItem() {
    }
    return SidebarNavItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciSidebarExpanderComponent = /** @class */ (function () {
    function BciSidebarExpanderComponent() {
        this.header = '';
        this.expanded = false;
    }
    /**
     * @return {?}
     */
    BciSidebarExpanderComponent.prototype.toggleSidebar = /**
     * @return {?}
     */
    function () {
        this.expanded = !this.expanded;
    };
    BciSidebarExpanderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-sidebar-expander',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"module-container\">\n  <div class=\"header-container\" (click)=\"toggleSidebar()\">\n    {{header}}\n    <i class=\"expander-icon\" [ngClass]=\"{'expanded': expanded}\"></i>\n  </div>\n  <div class=\"content-container\" [ngClass]=\"{'expanded': expanded}\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: ["@charset \"UTF-8\";/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.header-container{padding:0 16px;display:inline-block;width:100%;line-height:48px;transition:all .2s ease;color:#fff;cursor:hand;font-family:Bosch-Sans;font-weight:300;font-size:16px;border-width:0 0 0 4px;border-color:transparent;border-style:solid;border-radius:0}.header-container:hover{background-color:rgba(0,0,0,.05);color:#bfc0c2}.header-container .expander-icon{position:absolute;right:16px;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out}.header-container .expander-icon:before{font-family:Bosch-Ic;content:\"\uF11D\";font-style:normal;font-size:20px}.header-container .expander-icon.expanded{display:inline-block;transition:-webkit-transform .2s ease-in;transition:transform .2s ease-in;transition:transform .2s ease-in,-webkit-transform .2s ease-in;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.content-container{max-height:0;overflow:hidden;transition:max-height .2s ease-out}.content-container.expanded{max-height:2000px;transition:max-height .6s ease-in}"]
                },] },
    ];
    BciSidebarExpanderComponent.propDecorators = {
        header: [{ type: Input }],
        expanded: [{ type: Input }]
    };
    return BciSidebarExpanderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Time and timing curve for expansion panel animations.
 *
  @type {?} */
var SIDENAV_LINKS_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/** @type {?} */
var ITEM_EXPANDED_STATES = { expanded: 'expanded', collapsed: 'collapsed' };
var BciSidebarNavItemComponent = /** @class */ (function () {
    function BciSidebarNavItemComponent(router, sidebarService, overlay, viewContainerRef, injector) {
        this.router = router;
        this.sidebarService = sidebarService;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.expanded = false;
    }
    /**
     * @return {?}
     */
    BciSidebarNavItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isActiveRoute(this.navItem)) {
            this.toggleExpanded();
        }
    };
    /**
     * @return {?}
     */
    BciSidebarNavItemComponent.prototype.hasItems = /**
     * @return {?}
     */
    function () {
        return this.navItem.items && this.navItem.items.length > 0;
    };
    /**
     * Check if the route of this {@link navItem} is in the active route (including parent routes, excluding the home route).
     * @returns true if it's the active route.
     */
    /**
     * Check if the route of this {\@link navItem} is in the active route (including parent routes, excluding the home route).
     * @param {?} navItem
     * @return {?} true if it's the active route.
     */
    BciSidebarNavItemComponent.prototype.isActiveRoute = /**
     * Check if the route of this {\@link navItem} is in the active route (including parent routes, excluding the home route).
     * @param {?} navItem
     * @return {?} true if it's the active route.
     */
    function (navItem) {
        /** @type {?} */
        var exact = navItem.routerLinkActiveOptions ? navItem.routerLinkActiveOptions.exact : false;
        /** @type {?} */
        var route = this.getRouteFromUrl(navItem.url);
        return !!route && this.router.isActive(route, exact);
    };
    /**
     * @return {?}
     */
    BciSidebarNavItemComponent.prototype.onFirstLevelClick = /**
     * @return {?}
     */
    function () {
        if (this.hasItems()) {
            this.toggleExpanded();
        }
        else if (this.navItem.url) {
            this.sidebarService.navigateToUrl(this.navItem.url, { queryParams: this.navItem.queryParams });
        }
        else if (this.navItem.cb) {
            this.navItem.cb();
        }
        else if (this.navItem.overlay) {
            this.openOverlay();
        }
    };
    /**
     * @param {?} navItem
     * @return {?}
     */
    BciSidebarNavItemComponent.prototype.onSecondLevelClick = /**
     * @param {?} navItem
     * @return {?}
     */
    function (navItem) {
        if (navItem.url) {
            this.sidebarService.navigateToUrl(navItem.url, { queryParams: navItem.queryParams });
        }
        else if (navItem.cb) {
            navItem.cb();
        }
    };
    /**
     * @return {?}
     */
    BciSidebarNavItemComponent.prototype.getExpandedState = /**
     * @return {?}
     */
    function () {
        return this.expanded ? 'expanded' : 'collapsed';
    };
    /**
     * @return {?}
     */
    BciSidebarNavItemComponent.prototype.openOverlay = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var strategy = this.overlay.position()
            .connectedTo(this.popoverOrigin.elementRef, { originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' });
        /** @type {?} */
        var config = new OverlayConfig({
            positionStrategy: strategy,
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop'
        });
        /** @type {?} */
        var overlayRef = this.overlay.create(config);
        /** @type {?} */
        var overlayComponent = this.navItem.overlay.component;
        /** @type {?} */
        var overlayConfig = this.navItem.overlay.config;
        /** @type {?} */
        var componentRef = overlayRef.attach(new ComponentPortal(overlayComponent, this.viewContainerRef));
        componentRef.instance.config = overlayConfig;
        componentRef.instance.onClose.subscribe(function () { return overlayRef.detach(); });
        overlayRef.backdropClick().subscribe(function () { return overlayRef.detach(); });
    };
    /**
     * @param {?} url
     * @return {?}
     */
    BciSidebarNavItemComponent.prototype.getRouteFromUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var urlObject;
        try {
            urlObject = new URL(url);
        }
        catch (e) {
            // assuming TypeError, Invalid URL -> navigate internally directly to URL
            return url;
        }
        if (!!urlObject) {
            if (urlObject.origin === window.location.origin) {
                // TODO: consider baseHref
                return urlObject.pathname;
            }
            else {
                // no internal route
                return undefined;
            }
        }
    };
    /**
     * @return {?}
     */
    BciSidebarNavItemComponent.prototype.toggleExpanded = /**
     * @return {?}
     */
    function () {
        this.expanded = !this.expanded;
    };
    BciSidebarNavItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-sidebar-nav-item',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-list-item [style.position]=\"'relative'\" [class.active]=\"isActiveRoute(navItem)\" (click)=\"onFirstLevelClick()\"\n               cdk-overlay-origin #popoverOrigin=\"cdkOverlayOrigin\">\n  <mat-icon matListIcon fontSet=\"bosch\" [fontIcon]=\"navItem?.icon\" *ngIf=\"navItem?.icon\"\n            class=\"nav-link-icon\"></mat-icon>\n  <p matLine>{{ navItem?.title }}</p>\n  <mat-icon *ngIf=\"hasItems()\" fontSet=\"bosch\" fontIcon=\"Bosch-Ic-arrow-expand-right\" class=\"expand-icon\"\n            [@indicatorRotate]=\"getExpandedState()\"></mat-icon>\n</mat-list-item>\n<ng-container *ngIf=\"hasItems()\">\n  <div [@bodyExpansion]=\"getExpandedState()\" class=\"sub-nav-links-container\" [class.sub-nav-links-expanded]=\"expanded\">\n    <!--<ng-content select=\"bci-sidebar-nav-item\" ></ng-content>-->\n    <mat-list-item class=\"sub-nav-link\" *ngFor=\"let item of navItem?.items\" (click)=\"onSecondLevelClick(item)\"\n                   [class.active]=\"isActiveRoute(item)\">\n      <p matLine>{{ item?.title }}</p>\n    </mat-list-item>\n  </div>\n</ng-container>\n",
                    styles: ["@charset \"UTF-8\";/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{display:block;border-width:0 0 1px;border-color:rgba(255,255,255,.05);border-style:solid;border-radius:0}:host:hover{background-color:rgba(0,0,0,.05)}:host:hover mat-icon,:host:hover p{color:#bfc0c2}:host .mat-list-item{border-width:0 0 0 4px;border-color:transparent;border-style:solid;border-radius:0}:host .mat-list-item.active{border-color:#008ecf}:host .mat-list-item.has-items::before{font-family:Bosch-Ic;content:\"\uF11D\";font-style:normal;font-size:24px}:host .mat-list-item.sub-nav-link{margin-left:36px}:host .mat-list-item mat-icon,:host .mat-list-item p{color:#fff}:host .mat-list-item mat-icon{font-size:20px}:host .mat-list-item p{font-family:Bosch-Sans;font-weight:300;font-size:16px}:host .mat-list-item ::ng-deep .mat-list-text{padding:0 8px}:host .mat-list-item ::ng-deep .mat-list-item-content{padding:0 16px 0 8px}.sub-nav-links-expanded .sub-nav-links-container{overflow:visible}.sub-nav-links-container,.sub-nav-links-container.ng-animating{overflow:hidden}"],
                    animations: [
                        trigger('bodyExpansion', [
                            state(ITEM_EXPANDED_STATES.collapsed, style({ height: '0px', visibility: 'hidden' })),
                            state(ITEM_EXPANDED_STATES.expanded, style({ height: '*', visibility: 'visible' })),
                            transition(ITEM_EXPANDED_STATES.expanded + " <=> " + ITEM_EXPANDED_STATES.collapsed, animate(SIDENAV_LINKS_ANIMATION_TIMING)),
                        ]),
                        trigger('indicatorRotate', [
                            state(ITEM_EXPANDED_STATES.collapsed, style({ transform: 'rotate(0deg)' })),
                            state(ITEM_EXPANDED_STATES.expanded, style({ transform: 'rotate(90deg)' })),
                            transition(ITEM_EXPANDED_STATES.expanded + " <=> " + ITEM_EXPANDED_STATES.collapsed, animate(SIDENAV_LINKS_ANIMATION_TIMING)),
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    BciSidebarNavItemComponent.ctorParameters = function () { return [
        { type: Router },
        { type: BciSidebarService },
        { type: Overlay },
        { type: ViewContainerRef },
        { type: Injector }
    ]; };
    BciSidebarNavItemComponent.propDecorators = {
        navItem: [{ type: Input }],
        popoverOrigin: [{ type: ViewChild, args: ['popoverOrigin',] }]
    };
    return BciSidebarNavItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciSidebarNavListComponent = /** @class */ (function () {
    function BciSidebarNavListComponent() {
        this.navItems = [];
        /**
         * \@todo enable skipSorting to be set (SidebarService? Configuration?)
         */
        this.skipSorting = false;
    }
    /**
     * @return {?}
     */
    BciSidebarNavListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BciSidebarNavListComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.skipSorting && changes["navItems"]) {
            this.navItems.sort(function (a, b) { return a.position - b.position; });
        }
    };
    BciSidebarNavListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-sidebar-nav-list',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-nav-list>\n  <bci-sidebar-nav-item *ngFor=\"let navItem of navItems\" [navItem]=\"navItem\">\n  </bci-sidebar-nav-item>\n</mat-nav-list>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.mat-nav-list{padding-top:0}"]
                },] },
    ];
    /** @nocollapse */
    BciSidebarNavListComponent.ctorParameters = function () { return []; };
    BciSidebarNavListComponent.propDecorators = {
        navItems: [{ type: Input }]
    };
    return BciSidebarNavListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(cdr) {
        this.cdr = cdr;
        this.titleAttribute = undefined;
        this._omitted = false;
    }
    Object.defineProperty(BreadcrumbComponent.prototype, "omitted", {
        get: /**
         * @return {?}
         */
        function () {
            return this._omitted;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._omitted = value;
            // handle ExpressionChangedAfterChecked issues for title
            setTimeout(function () { return _this.titleAttribute = _this.omitted ? _this.title : undefined; });
            // ...and displayed title
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-breadcrumb',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<a *ngIf=\"url !== undefined\" [routerLink]=\"url\">{{omitted ? '\u2026' : title}}</a>\n<ng-container *ngIf=\"url === undefined\">{{omitted ? '\u2026' : title}}</ng-container>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    BreadcrumbComponent.propDecorators = {
        title: [{ type: Input }],
        url: [{ type: Input }],
        titleAttribute: [{ type: HostBinding, args: ['attr.title',] }],
        omitted: [{ type: Input }]
    };
    return BreadcrumbComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent() {
        /**
         * Maximum number of breadcrumbs shown starting from the root.
         */
        this.fixedLead = 1;
        /**
         * Maximum number of breadscrumbs shown starting from the current page.
         */
        this.fixedTail = 2;
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    BreadcrumbsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    };
    /**
     * @return {?}
     */
    BreadcrumbsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.breadcrumbs.changes.pipe(takeUntil(this.componentDestroyed$)).subscribe(function () {
            _this.breadcrumbs.forEach(function (breadcrumb, index) { return breadcrumb.omitted = !_this.isShown(index); });
        });
    };
    /**
     * @param {?} index
     * @return {?}
     */
    BreadcrumbsComponent.prototype.isShown = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index < this.fixedLead || index >= this.breadcrumbs.length - this.fixedTail;
    };
    BreadcrumbsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-breadcrumbs',
                    template: "<ng-content></ng-content>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    BreadcrumbsComponent.ctorParameters = function () { return []; };
    BreadcrumbsComponent.propDecorators = {
        true: [{ type: HostBinding, args: ['class.breadcrumbs',] }],
        breadcrumbs: [{ type: ContentChildren, args: [BreadcrumbComponent,] }],
        fixedLead: [{ type: Input }],
        fixedTail: [{ type: Input }]
    };
    return BreadcrumbsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BreadcrumbsModule = /** @class */ (function () {
    function BreadcrumbsModule() {
    }
    BreadcrumbsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                    ],
                    declarations: [BreadcrumbsComponent, BreadcrumbComponent],
                    exports: [BreadcrumbsComponent, BreadcrumbComponent]
                },] },
    ];
    return BreadcrumbsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciAppComponent = /** @class */ (function () {
    function BciAppComponent(breadcrumbsService) {
        this.breadcrumbsService = breadcrumbsService;
        this.applicationTitle = '';
        this.sidebarLinks = [];
        this.sidebarFooterLinks = [];
        this.navigationItems = [];
    }
    /**
     * @return {?}
     */
    BciAppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BciAppComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["sidebarLinks"] || changes["sidebarFooterLinks"]) {
            this.navigationItems = __spread(this.sidebarLinks, this.sidebarFooterLinks);
            this.breadcrumbsService.setNavigationItems(this.navigationItems);
        }
    };
    BciAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-app',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<bci-content>\n  <bci-sidebar [sidebarLinks]=\"sidebarLinks\" [applicationTitle]=\"applicationTitle\">\n\n    <bci-sidebar-footer [sidebarFooterLinks]=\"sidebarFooterLinks\"></bci-sidebar-footer>\n\n\n    <bci-header>\n    </bci-header>\n\n    <div class=\"content\">\n      <ng-content></ng-content>\n    </div>\n  </bci-sidebar>\n\n</bci-content>\n",
                    styles: [".content{position:relative;overflow:auto;height:100%;width:100%}"]
                },] },
    ];
    /** @nocollapse */
    BciAppComponent.ctorParameters = function () { return [
        { type: BreadcrumbsService }
    ]; };
    BciAppComponent.propDecorators = {
        applicationTitle: [{ type: Input }],
        sidebarLinks: [{ type: Input }],
        sidebarFooterLinks: [{ type: Input }]
    };
    return BciAppComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciLayoutModule = /** @class */ (function () {
    function BciLayoutModule() {
    }
    BciLayoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        FlexLayoutModule,
                        BreadcrumbsModule,
                        MatSidenavModule,
                        MatExpansionModule,
                        MatIconModule,
                        MatListModule,
                        OverlayModule,
                        PortalModule
                    ],
                    declarations: [
                        BciHeaderComponent,
                        BciContentComponent,
                        BciFooterComponent,
                        BciSidebarComponent,
                        BciSidebarFooterComponent,
                        BciSidebarExpanderComponent,
                        BciLoaderComponent,
                        BciSidebarNavItemComponent,
                        BciSidebarNavListComponent,
                        BciAppComponent
                    ],
                    exports: [
                        BciHeaderComponent,
                        BciContentComponent,
                        BciFooterComponent,
                        BciSidebarComponent,
                        BciSidebarFooterComponent,
                        BciSidebarExpanderComponent,
                        BciLoaderComponent,
                        BciSidebarNavItemComponent,
                        BciSidebarNavListComponent,
                        BciAppComponent,
                        OverlayModule,
                        PortalModule
                    ]
                },] },
    ];
    return BciLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NavigationService = /** @class */ (function () {
    function NavigationService(http, location, config) {
        this.http = http;
        this.location = location;
        this.config = config;
        this.sidebarLinks = [];
    }
    /**
     * @return {?}
     */
    NavigationService.prototype.getNavigationItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config && this.config.endpointNavigation) {
            /** @type {?} */
            var normalizedUrl = this.location.prepareExternalUrl(this.config.endpointNavigation);
            return this.http.get(normalizedUrl)
                .pipe(map(function (links) {
                if (links instanceof Array) {
                    _this.sidebarLinks = links;
                }
                else {
                    _this.sidebarLinks = links.results;
                }
                return _this.sidebarLinks;
            }));
        }
        else {
            return throwError('NavigationService: no endpointNavigation provided in CORE_CONFIG');
        }
    };
    NavigationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NavigationService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Location },
        { type: CoreConfig, decorators: [{ type: Inject, args: [CORE_CONFIG,] }] }
    ]; };
    /** @nocollapse */ NavigationService.ngInjectableDef = defineInjectable({ factory: function NavigationService_Factory() { return new NavigationService(inject(HttpClient), inject(Location), inject(CORE_CONFIG)); }, token: NavigationService, providedIn: "root" });
    return NavigationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
var NavigationResponse = /** @class */ (function () {
    function NavigationResponse() {
    }
    return NavigationResponse;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent() {
    }
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SidePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-side-panel',
                    template: "<div class=\"side-panel\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.side-panel{position:absolute;width:250px;display:flex;flex-direction:column;top:0;right:100px;max-height:100%;height:100%}"]
                },] },
    ];
    /** @nocollapse */
    SidePanelComponent.ctorParameters = function () { return []; };
    return SidePanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FilterPanelComponent = /** @class */ (function () {
    function FilterPanelComponent() {
    }
    /**
     * @return {?}
     */
    FilterPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FilterPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-filter-panel',
                    template: "<div class=\"filter-panel-outer\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.filter-panel-outer{border:1px solid #ccc;padding:5px 10px;min-height:60px;line-height:50px}"]
                },] },
    ];
    /** @nocollapse */
    FilterPanelComponent.ctorParameters = function () { return []; };
    return FilterPanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SidePanelItemComponent = /** @class */ (function () {
    function SidePanelItemComponent() {
        this.fixed = false;
    }
    /**
     * @return {?}
     */
    SidePanelItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SidePanelItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-side-panel-item',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<!--<div class=\"side-panel-item\">\n  <h4>{{ title }}</h4>\n  <ng-content></ng-content>\n</div>-->\n<mat-card class=\"side-panel-item\">\n  <mat-card-header class=\"fixed-flex-item\">\n    <mat-card-title><h5>{{ title }}</h5></mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"scroll-container-vertical\">\n    <ng-content></ng-content>\n  </mat-card-content>\n</mat-card>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{margin:15px 0;overflow:hidden;display:flex}:host.fixed-flex-item{flex:0 0 auto}.fixed-flex-item{flex:0 0 auto}.side-panel-item{display:flex;flex-direction:column;flex:1 1 auto}.scroll-container-vertical{overflow-y:auto}"]
                },] },
    ];
    /** @nocollapse */
    SidePanelItemComponent.ctorParameters = function () { return []; };
    SidePanelItemComponent.propDecorators = {
        title: [{ type: Input }],
        fixed: [{ type: HostBinding, args: ['class.fixed-flex-item',] }, { type: Input }]
    };
    return SidePanelItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ContentWSidePanelComponent = /** @class */ (function () {
    function ContentWSidePanelComponent() {
    }
    /**
     * @return {?}
     */
    ContentWSidePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ContentWSidePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-content-w-side-panel',
                    template: "<ng-content></ng-content>",
                    styles: [":host {\n    position: relative;\n    flex: 1;\n    display: flex;\n  }"]
                },] },
    ];
    /** @nocollapse */
    ContentWSidePanelComponent.ctorParameters = function () { return []; };
    return ContentWSidePanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LoadingSpinnerDirective = /** @class */ (function () {
    function LoadingSpinnerDirective() {
        this.bciLoadingSpinner = true;
    }
    LoadingSpinnerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bciLoadingSpinner]'
                },] },
    ];
    /** @nocollapse */
    LoadingSpinnerDirective.ctorParameters = function () { return []; };
    LoadingSpinnerDirective.propDecorators = {
        bciLoadingSpinner: [{ type: HostBinding, args: ['class.loading',] }, { type: Input }]
    };
    return LoadingSpinnerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciTileComponent = /** @class */ (function () {
    function BciTileComponent() {
        this.addTile = false;
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    BciTileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    BciTileComponent.prototype.executeAction = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        this.action.emit(null);
    };
    BciTileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-tile',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"tile\" [ngClass]=\"{'add-tile': addTile}\" fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"center center\">\n  <div class=\"tile-icon\">\n    <i class=\"Bosch-Ic {{ iconName || 'Bosch-Ic-add' }}\"></i>\n  </div>\n  <div class=\"tile-details\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n    <div>\n      <div class=\"title\">\n        {{ title }}\n      </div>\n\n      <div *ngIf=\"!addTile\" class=\"description\">\n        {{ description }}\n      </div>\n    </div>\n\n    <div *ngIf=\"!addTile\" class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n      <div><a class=\"button-link\">{{ detailsButtonLabel }}</a></div>\n\n      <button mat-icon-button href=\"#\" *ngIf=canExecuteAction (click)=\"executeAction($event)\"\n              class=\"mat-icon-button Bosch-Ic {{actionIconName}}\"></button>\n    </div>\n\n  </div>\n</div>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.tile{margin-bottom:16px;background-color:#efeff0;padding:0 16px;box-sizing:border-box;width:400px;height:150px;color:#000;transition:all .25s ease}.tile:focus,.tile:hover{background-color:#dfdfe0;cursor:pointer}.tile:focus .tile-icon i,.tile:hover .tile-icon i{color:#bfc0c2}.tile .tile-icon{align-self:center}.tile .tile-icon i{font-size:80px;color:#cfd0d1}.tile .tile-details{width:100%}.tile .tile-details .title{font-size:20px;width:260px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.tile .tile-details .description{margin:4px 0;font-size:12px;line-height:16px;max-height:32px;height:32px;overflow:hidden;text-overflow:ellipsis}.tile .tile-details .actions{margin-bottom:-8px;width:100%}.tile .tile-details .actions .button-link{position:relative;font-size:12px;padding:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.tile .tile-details .actions .button-link:after{font-size:12px;margin-left:2px}.tile .tile-details .actions .mat-icon-button{font-size:24px;color:#525f6b}.tile.add-tile{background-color:transparent;color:#a8afb5;border:1px solid #bfc0c2;font-size:20px}.tile.add-tile .tile-icon i{font-size:48px}.tile.add-tile .tile-details,.tile.add-tile .tile-details .title{width:auto}.tile.add-tile:hover{color:#000;background-color:#f7f7f7;border:1px solid #dfdfe0;opacity:.75;cursor:pointer}.tile.add-tile:hover .tile-icon i{color:#525f6b}"],
                },] },
    ];
    /** @nocollapse */
    BciTileComponent.ctorParameters = function () { return []; };
    BciTileComponent.propDecorators = {
        title: [{ type: Input }],
        description: [{ type: Input }],
        iconName: [{ type: Input }],
        detailsButtonLabel: [{ type: Input }],
        addTile: [{ type: Input }],
        actionIconName: [{ type: Input }],
        canExecuteAction: [{ type: Input }],
        action: [{ type: Output }]
    };
    return BciTileComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ContentSidebarComponent = /** @class */ (function () {
    function ContentSidebarComponent() {
        this.position = 'end';
        this.mode = 'push';
        this.opened = true;
    }
    /**
     * @return {?}
     */
    ContentSidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ContentSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-content-sidebar',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-sidenav-container style=\"width: 300px\">\n  <mat-sidenav #sidenav [position]=\"position\" [mode]=\"mode\" [opened]=\"opened\" fxLayout=\"column\" fxFlex>\n    <ng-content></ng-content>\n  </mat-sidenav>\n</mat-sidenav-container>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{display:flex;border-width:0 0 0 1px;border-color:#dfdfe0;border-style:solid;border-radius:0}mat-sidenav{width:300px;padding:5px 10px}::ng-deep bci-content-sidebar-item:first-child{padding-top:0}::ng-deep bci-content-sidebar-item:last-child{padding-bottom:5px;border-bottom:none}"]
                },] },
    ];
    /** @nocollapse */
    ContentSidebarComponent.ctorParameters = function () { return []; };
    ContentSidebarComponent.propDecorators = {
        position: [{ type: Input }],
        mode: [{ type: Input }],
        opened: [{ type: Input }]
    };
    return ContentSidebarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ContentSidebarItemComponent = /** @class */ (function () {
    function ContentSidebarItemComponent() {
        this.fixed = false;
    }
    /**
     * @return {?}
     */
    ContentSidebarItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ContentSidebarItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-content-sidebar-item',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-card class=\"content-sidebar-item\">\n  <mat-card-header class=\"fixed-flex-item\">\n    <mat-card-title><h5>{{ title }}</h5></mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"scroll-container-vertical\">\n    <ng-content></ng-content>\n  </mat-card-content>\n</mat-card>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{padding:10px 5px 25px;overflow:hidden;display:flex;border-width:0 0 1px;border-color:#dfdfe0;border-style:solid;border-radius:0}:host.fixed-flex-item{flex:0 0 auto}.fixed-flex-item{flex:0 0 auto}.content-sidebar-item{display:flex;flex-direction:column;flex:1 1 auto;padding:0}.scroll-container-vertical{overflow-y:auto}"]
                },] },
    ];
    /** @nocollapse */
    ContentSidebarItemComponent.ctorParameters = function () { return []; };
    ContentSidebarItemComponent.propDecorators = {
        title: [{ type: Input }],
        fixed: [{ type: HostBinding, args: ['class.fixed-flex-item',] }, { type: Input }]
    };
    return ContentSidebarItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommandbarComponent = /** @class */ (function () {
    function CommandbarComponent(fb) {
        this.fb = fb;
        this.active = false;
        /**
         * The event emitter which propagates the text value of the search-box to subordinated components
         */
        this.search = new EventEmitter();
        /**
         * Subject being used to search immediately
         */
        this.submitSearch = new Subject();
        /**
         * The event emitter which propagates the click-event on the filter-icon to superordinated components
         */
        this.clickFilter = new EventEmitter();
        /**
         * The event emitter which propagates the click-event on the sort-icon to superordinated components
         */
        this.clickSort = new EventEmitter();
        /**
         * Flag to indicate whether the search-box is being displayed
         */
        this.showSearch = true;
        /**
         * Flag to indicate whether the filter-icon is being displayed
         */
        this.showFilter = false;
        /**
         * Flag to indicate whether the sort-icon is being displayed
         */
        this.showSort = false;
        /**
         * Integer value to display the number of selected Filters
         */
        this.filterCount = 0;
        /**
         * Input parameter to make the filter-icon configurable from superordinated components
         */
        this.sortIcon = 'Bosch-Ic-sort-alphabetically';
        this.componentDestroyed$ = new Subject();
        this.createSearchForm();
    }
    /**
     * @return {?}
     */
    CommandbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        merge(this.submitSearch, this.searchForm.controls["search"].valueChanges
            .pipe(takeUntil(this.componentDestroyed$), debounceTime(300))).pipe(distinctUntilChanged()).subscribe(function (searchString) { return _this.search.emit(searchString); });
    };
    /**
     * @return {?}
     */
    CommandbarComponent.prototype.searchSubmit = /**
     * @return {?}
     */
    function () {
        this.submitSearch.next(this.searchForm.controls["search"].value);
    };
    /**
     * @return {?}
     */
    CommandbarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    };
    /**
     * @return {?}
     */
    CommandbarComponent.prototype.createSearchForm = /**
     * @return {?}
     */
    function () {
        this.searchForm = this.fb.group({
            search: ''
        });
    };
    CommandbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-commandbar',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-toolbar>\n  <mat-toolbar-row>\n    <div class=\"group\">\n      <!-- Itemcount -->\n      <span class=\"entry-count\" [class.active]=\"selectedItemCount\" *ngIf=\"selectedItemCount || itemCount > -1\">\n        <ng-container *ngIf=\"selectedItemCount\">{{selectedItemCount}}</ng-container>\n        <ng-container *ngIf=\"selectedItemCount && itemCount > -1\"> of </ng-container>\n        <ng-container *ngIf=\"itemCount > -1\">{{itemCount}}</ng-container>\n        <ng-container [ngPlural]=\"(itemCount > -1 ? itemCount : selectedItemCount)\">\n          <ng-template ngPluralCase=\"one\"> entry</ng-template>\n          <ng-template ngPluralCase=\"other\"> entries</ng-template>\n        </ng-container>\n      </span>\n\n      <!-- Searchbar -->\n      <div class=\"commandbar-search-field\" *ngIf=\"showSearch\">\n        <form [formGroup]=\"searchForm\">\n          <mat-form-field floatLabel=\"never\">\n            <input matInput formControlName=\"search\" placeholder=\"Search\" (keyup.enter)=\"searchSubmit()\">\n            <button mat-icon-button type=\"button\" matSuffix (click)=\"searchSubmit()\">\n              <mat-icon class=\"toolbar-input-icon\" fontIcon=\"Bosch-Ic-search\"></mat-icon>\n            </button>\n          </mat-form-field>\n        </form>\n      </div>\n    </div>\n\n    <!-- Inline Filters -->\n    <div class=\"group\">\n      <ng-content select=\"bci-commandbar-inlinefilters\"></ng-content>\n    </div>\n\n    <!-- Quickfilters -->\n    <div class=\"group\">\n      <ng-content select=\"bci-commandbar-quickfilters\"></ng-content>\n    </div>\n\n    <!-- Filter -->\n    <div class=\"group\">\n      <bci-commandbar-button [render]=\"true\"\n                             *ngIf=\"showFilter\"\n                             icon=\"Bosch-Ic-filter\"\n                             [class.commandbar-button-active]=\"filterCount\"\n                             aria-label=\"filter\"\n                             (click)=\"clickFilter.emit()\">\n        Filter\n        <ng-container *ngIf=\"filterCount\"> ({{filterCount}})</ng-container>\n      </bci-commandbar-button>\n    </div>\n\n    <!-- Sort -->\n    <div class=\"group\">\n      <bci-commandbar-button [render]=\"true\"\n                             *ngIf=\"showSort\"\n                             icon=\"{{sortIcon}}\"\n                             aria-label=\"sort\"\n                             (click)=\"clickSort.emit()\">\n        Sort\n      </bci-commandbar-button>\n    </div>\n\n    <!-- Spacer -->\n    <div class=\"fill-space\"></div>\n\n    <!-- Actions -->\n    <div class=\"group\">\n      <ng-content select=\"bci-commandbar-actions\"></ng-content>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n<ng-content select=\"bci-commandbar-active-filters\"></ng-content>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host.active mat-toolbar{background:rgba(0,142,207,.15)}.fill-space{flex:1 1 auto}.group{display:inline-flex;vertical-align:middle}.group+.group{margin-left:10px}:host ::ng-deep .commandbar-item{display:inline-flex;vertical-align:middle}.entry-count.active,.entry-count.active.mat-icon-button.mat-icon-button,:host ::ng-deep .commandbar-button-active,:host ::ng-deep .commandbar-button-active.mat-icon-button.mat-icon-button{color:#008ecf}.mat-toolbar{font-size:14px}.mat-toolbar .entry-count{margin-right:32px;padding:4px 0}.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-label,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-label .mat-empty,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-label.mat-empty{color:#000}.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-prefix,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-suffix{background:#fff}.mat-toolbar .commandbar-search-field ::ng-deep .toolbar-input-field{border:none;outline:0;background:0 0;margin-bottom:0}.mat-toolbar .commandbar-search-field ::ng-deep .mat-input-element{background-color:#fff;background-image:none}.mat-toolbar .commandbar-search-field ::ng-deep .toolbar-input-container{background-color:#fff;padding:4px 12px 0;border-bottom:1px solid #bfc0c2}.mat-toolbar .commandbar-search-field ::ng-deep .toolbar-input-container button{vertical-align:middle}"]
                },] },
    ];
    /** @nocollapse */
    CommandbarComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    CommandbarComponent.propDecorators = {
        active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
        itemCount: [{ type: Input }],
        selectedItemCount: [{ type: Input }],
        search: [{ type: Output }],
        clickFilter: [{ type: Output }],
        clickSort: [{ type: Output }],
        showSearch: [{ type: Input }],
        showFilter: [{ type: Input }],
        showSort: [{ type: Input }],
        filterCount: [{ type: Input }],
        sortIcon: [{ type: Input }]
    };
    return CommandbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommandbarItemComponent = /** @class */ (function () {
    function CommandbarItemComponent() {
        /**
         * Set item-class on host element if rendered directly.
         */
        this.classCommandbarItem = true;
        /**
         * Whether to render the item in-place instead of using a template outlet.
         */
        this.render = false;
    }
    CommandbarItemComponent.decorators = [
        { type: Component, args: [{
                    selector: "bci-commandbar-item",
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<ng-template #template>\n  <div class=\"commandbar-item\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n<ng-container *ngIf=\"render\">\n  <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n</ng-container>\n",
                },] },
    ];
    CommandbarItemComponent.propDecorators = {
        classCommandbarItem: [{ type: HostBinding, args: ['class.commandbar-item',] }],
        render: [{ type: Input }],
        hide: [{ type: Input }],
        template: [{ type: ViewChild, args: ['template',] }]
    };
    return CommandbarItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommandbarActionsComponent = /** @class */ (function () {
    function CommandbarActionsComponent(observableMedia) {
        this.observableMedia = observableMedia;
        this.visibleItems = [];
        this.hiddenItems = [];
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    CommandbarActionsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CommandbarActionsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    };
    /**
     * @return {?}
     */
    CommandbarActionsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // listen to changes of viewport size
        merge(this.observableMedia.asObservable(), this.items.changes)
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(function () {
            _this.updateView();
        });
    };
    /**
     * @return {?}
     */
    CommandbarActionsComponent.prototype.updateView = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var visible = [];
        /** @type {?} */
        var hidden = [];
        this.items.forEach(function (item) { return _this.trueOrMatchesMediaState(item.hide) ? hidden.push(item) : visible.push(item); });
        this.visibleItems.length = 0;
        this.hiddenItems.length = 0;
        if (hidden.length === 1) {
            // no more-actions-menu for a single hidden action
            // no more-actions-menu for a single hidden action
            (_a = this.visibleItems).push.apply(_a, __spread(this.items.toArray()));
        }
        else {
            (_b = this.visibleItems).push.apply(_b, __spread(visible));
            (_c = this.hiddenItems).push.apply(_c, __spread(hidden));
        }
        var _a, _b, _c;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CommandbarActionsComponent.prototype.trueOrMatchesMediaState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === undefined) {
            return false;
        }
        else if (value === null) {
            return true;
        }
        else if (typeof value === 'boolean') {
            return value;
        }
        else {
            return value.length === 0 || this.observableMedia.isActive(value);
        }
    };
    CommandbarActionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-commandbar-actions',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<!-- Actions -->\n<ng-container *ngFor=\"let item of visibleItems\">\n  <ng-container *ngTemplateOutlet=\"item?.template\"></ng-container>\n</ng-container>\n\n<ng-container *ngIf=\"hiddenItems.length > 0\">\n  <!-- More-Actions-Button -->\n  <bci-commandbar-button [render]=\"true\"\n                         icon=\"Bosch-Ic-show-more-vertical\"\n                         aria-label=\"more actions\"\n                         [matMenuTriggerFor]=\"moreActionsMenu\">\n  </bci-commandbar-button>\n</ng-container>\n\n<!-- More Actions Menu -->\n<mat-menu #moreActionsMenu=\"matMenu\" [class]=\"'commandbar-more-action-menu'\">\n  <ng-container *ngFor=\"let item of hiddenItems\">\n    <div mat-menu-item>\n      <ng-container *ngTemplateOutlet=\"item?.template\"></ng-container>\n    </div>\n  </ng-container>\n</mat-menu>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{display:inherit;vertical-align:inherit}::ng-deep .mat-menu-panel.commandbar-more-action-menu{min-width:0}::ng-deep .commandbar-more-action-menu .mat-menu-item{padding:2px;line-height:1;height:auto}"]
                },] },
    ];
    /** @nocollapse */
    CommandbarActionsComponent.ctorParameters = function () { return [
        { type: ObservableMedia }
    ]; };
    CommandbarActionsComponent.propDecorators = {
        items: [{ type: ContentChildren, args: [forwardRef(function () { return CommandbarItemComponent; }),] }]
    };
    return CommandbarActionsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommandbarButtonComponent = /** @class */ (function (_super) {
    __extends(CommandbarButtonComponent, _super);
    function CommandbarButtonComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Whether the button shall be disabled.
         */
        _this.disabled = false;
        /**
         * The button's click event emitter.c
         */
        _this.click = new EventEmitter();
        _this._ngClass = {};
        _this._ngStyle = {};
        return _this;
    }
    Object.defineProperty(CommandbarButtonComponent.prototype, "ngClass", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._ngClass = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandbarButtonComponent.prototype, "ngStyle", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._ngStyle = v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    CommandbarButtonComponent.prototype.clickEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // only proxy click-event if there is an observer for the host's click event
        // this is necessary for e.g. the mat-menu trigger button to work
        if (this.click.observers.length > 0) {
            event.stopPropagation();
            this.click.next(event);
        }
    };
    CommandbarButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: "bci-commandbar-button",
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<ng-template #template>\n  <button mat-icon-button\n          class=\"commandbar-item\"\n          [ngClass]=\"_ngClass\"\n          [ngStyle]=\"_ngStyle\"\n          [disabled]=\"disabled\"\n          (click)=\"clickEvent($event)\">\n    <mat-icon [fontIcon]=\"icon\"></mat-icon>\n    <ng-content></ng-content>\n  </button>\n</ng-template>\n<ng-container *ngIf=\"render\">\n  <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n</ng-container>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.commandbar-button-active,.commandbar-button-active.mat-icon-button.mat-icon-button,:host.commandbar-button-active,:host.commandbar-button-active.mat-icon-button.mat-icon-button{color:#008ecf}::ng-deep .mat-icon-button.mat-icon-button{transition:.4s;cursor:pointer;width:auto;min-width:40px}::ng-deep .mat-icon-button.mat-icon-button:hover{color:#008ecf}::ng-deep .mat-icon-button.mat-icon-button.disabled,::ng-deep .mat-icon-button.mat-icon-button:disabled{color:#a8afb5;cursor:not-allowed}::ng-deep .mat-icon-button.mat-icon-button.disabled:hover,::ng-deep .mat-icon-button.mat-icon-button:disabled:hover{color:#a8afb5}::ng-deep .mat-icon-button.mat-icon-button .mat-ripple{width:40px}::ng-deep .mat-icon-button.mat-icon-button .mat-icon{margin-left:4px;margin-right:4px}"],
                    providers: [{ provide: CommandbarItemComponent, useExisting: forwardRef(function () { return CommandbarButtonComponent; }) }]
                },] },
    ];
    CommandbarButtonComponent.propDecorators = {
        icon: [{ type: Input }],
        disabled: [{ type: Input }],
        click: [{ type: Output }],
        ngClass: [{ type: Input }],
        ngStyle: [{ type: Input }]
    };
    return CommandbarButtonComponent;
}(CommandbarItemComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommandbarButtonsDirective = /** @class */ (function () {
    function CommandbarButtonsDirective(host) {
        this.host = host;
    }
    Object.defineProperty(CommandbarButtonsDirective.prototype, "buttonAdd", {
        set: /**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            this.setIcon('Bosch-Ic-add-outline');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandbarButtonsDirective.prototype, "buttonEdit", {
        set: /**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            this.setIcon('Bosch-Ic-edit');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandbarButtonsDirective.prototype, "buttonDelete", {
        set: /**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            this.setIcon('Bosch-Ic-delete');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CommandbarButtonsDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.host.icon = this.icon;
    };
    /**
     * @param {?} icon
     * @return {?}
     */
    CommandbarButtonsDirective.prototype.setIcon = /**
     * @param {?} icon
     * @return {?}
     */
    function (icon) {
        this.icon = icon;
    };
    CommandbarButtonsDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[bciCommandbarActionAdd],[bciCommandbarActionEdit],[bciCommandbarActionDelete]",
                },] },
    ];
    /** @nocollapse */
    CommandbarButtonsDirective.ctorParameters = function () { return [
        { type: CommandbarButtonComponent }
    ]; };
    CommandbarButtonsDirective.propDecorators = {
        buttonAdd: [{ type: Input, args: ['bciCommandbarActionAdd',] }],
        buttonEdit: [{ type: Input, args: ['bciCommandbarActionEdit',] }],
        buttonDelete: [{ type: Input, args: ['bciCommandbarActionDelete',] }]
    };
    return CommandbarButtonsDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommandbarInlinefilterComponent = /** @class */ (function (_super) {
    __extends(CommandbarInlinefilterComponent, _super);
    function CommandbarInlinefilterComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disableDefaultStyle = false;
        return _this;
    }
    CommandbarInlinefilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-commandbar-inlinefilter',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<ng-template #template>\n  <div class=\"commandbar-inline-filter\" [class.commandbar-default-style]=\"!disableDefaultStyle\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.commandbar-inline-filter{vertical-align:middle}.commandbar-inline-filter+.commandbar-inline-filter{margin-left:10px}.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-label,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-label .mat-empty,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-label.mat-empty{color:#000}.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-prefix,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-suffix{background:#fff}.commandbar-default-style ::ng-deep input,.commandbar-default-style ::ng-deep input:focus:enabled{background:#fff}.commandbar-default-style ::ng-deep ::-webkit-input-placeholder{color:#000}.commandbar-default-style ::ng-deep ::-ms-input-placeholder{color:#000}.commandbar-default-style ::ng-deep ::placeholder{color:#000}.commandbar-default-style ::ng-deep :-ms-input-placeholder{color:#000}.commandbar-default-style ::ng-deep .mat-form-field-flex,.commandbar-default-style ::ng-deep .mat-select-trigger{background-color:#fff;background-image:none}"],
                    providers: [{ provide: CommandbarItemComponent, useExisting: forwardRef(function () { return CommandbarInlinefilterComponent; }) }]
                },] },
    ];
    CommandbarInlinefilterComponent.propDecorators = {
        disableDefaultStyle: [{ type: Input }]
    };
    return CommandbarInlinefilterComponent;
}(CommandbarItemComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommandbarInlinefiltersComponent = /** @class */ (function () {
    function CommandbarInlinefiltersComponent(observableMedia) {
        this.observableMedia = observableMedia;
        this.visibleItems = [];
        this.hiddenItems = [];
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    CommandbarInlinefiltersComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CommandbarInlinefiltersComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    };
    /**
     * @return {?}
     */
    CommandbarInlinefiltersComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // listen to changes of viewport size
        merge(this.observableMedia.asObservable(), this.items.changes, of(true))
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(function () {
            _this.updateView();
        });
    };
    /**
     * @return {?}
     */
    CommandbarInlinefiltersComponent.prototype.updateView = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var visible = [];
        /** @type {?} */
        var hidden = [];
        this.items.forEach(function (item) { return _this.trueOrMatchesMediaState(item.hide) ? hidden.push(item) : visible.push(item); });
        this.visibleItems.length = 0;
        this.hiddenItems.length = 0;
        if (hidden.length === 1) {
            // no more-actions-menu for a single hidden action
            // no more-actions-menu for a single hidden action
            (_a = this.visibleItems).push.apply(_a, __spread(this.items.toArray()));
        }
        else {
            (_b = this.visibleItems).push.apply(_b, __spread(visible));
            (_c = this.hiddenItems).push.apply(_c, __spread(hidden));
        }
        var _a, _b, _c;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CommandbarInlinefiltersComponent.prototype.trueOrMatchesMediaState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === undefined) {
            return false;
        }
        else if (value === null) {
            return true;
        }
        else if (typeof value === 'boolean') {
            return value;
        }
        else {
            return value.length === 0 || this.observableMedia.isActive(value);
        }
    };
    CommandbarInlinefiltersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-commandbar-inlinefilters',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div fxLayout=\"row\">\n  <ng-container *ngFor=\"let item of visibleItems\">\n    <ng-container *ngTemplateOutlet=\"item?.template\"></ng-container>\n  </ng-container>\n</div>\n",
                    styles: [":host{vertical-align:middle;line-height:48px}"]
                },] },
    ];
    /** @nocollapse */
    CommandbarInlinefiltersComponent.ctorParameters = function () { return [
        { type: ObservableMedia }
    ]; };
    CommandbarInlinefiltersComponent.propDecorators = {
        items: [{ type: ContentChildren, args: [forwardRef(function () { return CommandbarInlinefilterComponent; }),] }]
    };
    return CommandbarInlinefiltersComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommandbarQuickfiltersDirective = /** @class */ (function () {
    function CommandbarQuickfiltersDirective() {
    }
    CommandbarQuickfiltersDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bciCommandbarQuickilters], bci-commandbar-quickfilters',
                },] },
    ];
    return CommandbarQuickfiltersDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ToggleButtonDirective = /** @class */ (function () {
    function ToggleButtonDirective() {
        this.active = false;
        this.toggle = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ToggleButtonDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.active = !this.active;
        this.toggle.emit(this.active);
    };
    ToggleButtonDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[bciToggleButton]"
                },] },
    ];
    ToggleButtonDirective.propDecorators = {
        active: [{ type: HostBinding, args: ['class.commandbar-button-active',] }, { type: Input }],
        toggle: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return ToggleButtonDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommandbarActiveFiltersComponent = /** @class */ (function () {
    function CommandbarActiveFiltersComponent() {
    }
    CommandbarActiveFiltersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-commandbar-active-filters',
                    template: "<mat-chip-list>\n  <ng-content></ng-content>\n</mat-chip-list>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    CommandbarActiveFiltersComponent.ctorParameters = function () { return []; };
    return CommandbarActiveFiltersComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciChipComponent = /** @class */ (function () {
    function BciChipComponent() {
        /**
         * The event emitter to propagate the removal-event
         */
        this.removed = new EventEmitter();
        /**
         * Flag to indicate whether the remove-icon is being displayed
         */
        this.removable = true;
    }
    BciChipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-chip',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-chip [removable]=\"removable\" [ngClass]=\"{ 'not-removable': !removable }\" (removed)=\"removed.next($event)\">\n  <ng-content></ng-content>\n  <mat-icon *ngIf=\"removable\" matChipRemove fontIcon=\"Bosch-Ic-abort\" aria-label=\"remove\"></mat-icon>\n</mat-chip>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{padding:0}:host .mat-chip.not-removable{background-color:#7d8790;background-image:none;color:#fff}"],
                },] },
    ];
    /** @nocollapse */
    BciChipComponent.ctorParameters = function () { return []; };
    BciChipComponent.propDecorators = {
        true: [{ type: HostBinding, args: ['class.bci-chip',] }],
        removed: [{ type: Output }],
        removable: [{ type: Input }]
    };
    return BciChipComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The detail part of the {\@link MasterDetailViewComponent}
 */
var DetailViewComponent = /** @class */ (function () {
    function DetailViewComponent() {
        // TODO: find a solution so that <bci-page-content> can be used in demo/solution instead of isPadded and still the sidebar is working
        this.isPadded = true;
    }
    DetailViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-detail-view',
                    template: "<ng-content></ng-content>\n",
                    styles: [""]
                },] },
    ];
    DetailViewComponent.propDecorators = {
        isPadded: [{ type: Input }]
    };
    return DetailViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The MasterDetailComponent contains a {\@link MasterViewComponent} and a {\@link DetailViewComponent}.
 *
 * In the {\@link MasterViewComponent} typically a collection of objects is shown.
 *
 * By click on one of these objects a {\@link DetailViewComponent} is made visible and shows the details of the selected object.
 *
 * to fill the {\@link MasterViewComponent} and the {\@link DetailViewComponent} that is shown when one of the objects is clicked.
 *
 */
var MasterDetailViewComponent = /** @class */ (function () {
    function MasterDetailViewComponent(modalWindowService, dialog, observableMedia) {
        this.modalWindowService = modalWindowService;
        this.dialog = dialog;
        this.observableMedia = observableMedia;
        /**
         * when true the details view is shown as dialog
         * else it is shown as modal dialog
         */
        this._useDialog = false;
        this.closed$ = new Subject();
        this.closed = this.closed$.asObservable();
        this.componentDestroyed$ = new Subject();
    }
    Object.defineProperty(MasterDetailViewComponent.prototype, "useDialog", {
        get: /**
         * @return {?}
         */
        function () {
            return this._useDialog;
        },
        set: /**
         * @param {?} use
         * @return {?}
         */
        function (use) {
            var _this = this;
            if (this.isDetailsShown) {
                this.closeDetails()
                    .pipe(takeUntil(this.componentDestroyed$), take(1))
                    .subscribe(function () {
                    _this._useDialog = use;
                    _this.openDetails();
                });
            }
            else {
                this._useDialog = use;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MasterDetailViewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    };
    /**
     * @return {?}
     */
    MasterDetailViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.useSlideoverSidebarMode === undefined) {
            // this BehaviorSubject emits changes to the viewport (and initially the current viewport state)
            this.observableMedia.asObservable().pipe(takeUntil(this.componentDestroyed$)).subscribe(function () {
                _this.useSlideoverSidebarMode = _this.observableMedia.isActive('lt-lg');
            });
        }
    };
    /**
     * Make the {@link DetailViewComponent} visible and show the details of the object identified by id
     */
    /**
     * Make the {\@link DetailViewComponent} visible and show the details of the object identified by id
     * @return {?}
     */
    MasterDetailViewComponent.prototype.openDetails = /**
     * Make the {\@link DetailViewComponent} visible and show the details of the object identified by id
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.useDialog) {
            /*
                 * Currently, there are several github issues on creating views in the ngAfterViewInit which isn't possible without error in Dev-Mode
                 * https://github.com/angular/angular/issues/15634
                 * https://github.com/angular/angular/issues/10131
                 * https://github.com/angular/angular/issues/17572
                 * ...
                 * TODO: This solution is one workaround for this issue, but should be fixed as soon as possible since its hacky!
                 */
            if (!this.isDetailsShown) {
                this.isDetailsShown = true;
                setTimeout(function () {
                    _this.openDetailsModal();
                });
            }
        }
        else {
            this.isDetailsShown = true;
        }
    };
    /**
     * Hide the {@link DetailViewComponent}
     * @returns an Observable that emits a single true when the details is finished closing
     */
    /**
     * Hide the {\@link DetailViewComponent}
     * @return {?} an Observable that emits a single true when the details is finished closing
     */
    MasterDetailViewComponent.prototype.closeDetails = /**
     * Hide the {\@link DetailViewComponent}
     * @return {?} an Observable that emits a single true when the details is finished closing
     */
    function () {
        var _this = this;
        if (!this.isDetailsShown || (this.useDialog && !this.detailsDialogRef)) {
            return of();
        }
        /** @type {?} */
        var closedObservable = this.useDialog ? this.detailsDialogRef.afterClosed() : from(this.sidenav.close());
        if (this.useDialog) {
            this.detailsDialogRef.close();
        }
        return closedObservable.pipe(tap(function () { return _this.closed$.next(); }), tap(function () { return _this.isDetailsShown = false; }), first());
    };
    /**
     * detailsClosed() is called when the  {\@link DetailViewComponent} is closed.
     * either when the details dialog is closed or when the sidebar has disappeared
     * @return {?}
     */
    MasterDetailViewComponent.prototype.detailsClosed = /**
     * detailsClosed() is called when the  {\@link DetailViewComponent} is closed.
     * either when the details dialog is closed or when the sidebar has disappeared
     * @return {?}
     */
    function () {
        this.isDetailsShown = false;
        this.closed$.next();
    };
    /**
     * @return {?}
     */
    MasterDetailViewComponent.prototype.openDetailsModal = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.detailsDialogRef = this.modalWindowService.openDialogWithComponent(this.detailsView, {
            disableClose: true,
            closeOnNavigation: false
        });
        this.detailsDialogRef.afterClosed()
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(function () {
            _this.detailsClosed();
        });
    };
    MasterDetailViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-master-detail-view',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<ng-template #masterView>\n  <ng-content select=\"bci-master-view\"></ng-content>\n</ng-template>\n\n<ng-template #detailView>\n  <ng-content select=\"bci-detail-view\"></ng-content>\n</ng-template>\n\n<mat-sidenav-container class=\"container\">\n  <mat-sidenav-content class=\"container-content\">\n    <!-- Master -->\n    <ng-container *ngTemplateOutlet=\"masterView\"></ng-container>\n  </mat-sidenav-content>\n\n  <mat-sidenav *ngIf=\"!useDialog\"\n               id=\"detailContainer\"\n               [opened]=\"isDetailsShown\"\n               [disableClose]=\"false\"\n               (closed)=\"detailsClosed()\"\n               [mode]=\"useSlideoverSidebarMode ? 'over' : 'side'\"\n               position=\"end\"\n               class=\"sidebar-content\"\n               [class.container-content-padded]=\"detailViewComponent?.isPadded\"\n               [class.sidebar-full-size]=\"useSlideoverSidebarMode\"\n               [class.sidebar-visible]=\"!useSlideoverSidebarMode\">\n    <ng-container *ngTemplateOutlet=\"detailView\"></ng-container>\n  </mat-sidenav>\n</mat-sidenav-container>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{height:100%;overflow:hidden}.container{width:100%;height:inherit}.container-content-padded{padding:32px}mat-sidenav-container .mat-drawer-content.container-content{overflow:auto}mat-sidenav-container .sidebar-content{overflow-x:hidden}.sidebar-full-size{left:0;border-left:unset}.sidebar-visible{border-left:1px solid #bfc0c2}"]
                },] },
    ];
    /** @nocollapse */
    MasterDetailViewComponent.ctorParameters = function () { return [
        { type: ModalWindowService },
        { type: MatDialog$1 },
        { type: ObservableMedia }
    ]; };
    MasterDetailViewComponent.propDecorators = {
        useSlideoverSidebarMode: [{ type: Input }],
        detailViewComponent: [{ type: ContentChild, args: [DetailViewComponent,] }],
        detailsView: [{ type: ViewChild, args: ['detailView',] }],
        sidenav: [{ type: ViewChild, args: [MatSidenav,] }],
        useDialog: [{ type: Input }]
    };
    return MasterDetailViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * The master part of the {\@link MasterDetailViewComponent}
 */
var MasterViewComponent = /** @class */ (function () {
    function MasterViewComponent() {
        // TODO: find a solution so that <bci-page-content> can be used in demo/solution instead of isPadded and still the sidebar is working
        this.isPadded = true;
    }
    MasterViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-master-view',
                    template: "<ng-content></ng-content>\n",
                    styles: [":host{display:block}:host.container-content-padded{padding:32px}"]
                },] },
    ];
    MasterViewComponent.propDecorators = {
        isPadded: [{ type: HostBinding, args: ['class.container-content-padded',] }, { type: Input }]
    };
    return MasterViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FilterPickerComponent = /** @class */ (function () {
    function FilterPickerComponent() {
        this.filter = new EventEmitter();
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FilterPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FilterPickerComponent.prototype.applyFilters = /**
     * @return {?}
     */
    function () {
        this.filter.emit();
    };
    /**
     * @return {?}
     */
    FilterPickerComponent.prototype.closeModal = /**
     * @return {?}
     */
    function () {
        this.close.emit();
    };
    FilterPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-filter-picker',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"dialog-header\">\n  <h3 matDialogTitle>Filter</h3>\n  <button class=\"close-button\" mat-icon-button tabindex=\"-1\" (click)=\"closeModal()\">\n    <i class=\"Bosch-Ic Bosch-Ic-abort\"></i>\n  </button>\n</div>\n<mat-dialog-content>\n  <div class=\"dialog-body\">\n    <mat-list>\n      <ng-content select=\"bci-filter-entry\"></ng-content>\n    </mat-list>\n\n    <mat-divider [vertical]=\"true\"></mat-divider>\n\n    <div class=\"filter-view\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"dialog-footer\">\n    <button class=\"button-primary\" (click)=\"applyFilters()\">Apply</button>\n    <button class=\"button-secondary\" (click)=\"closeModal()\">Cancel</button>\n  </div>\n</mat-dialog-content>\n\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.dialog-body{width:100%;display:flex;flex-direction:row}.dialog-body mat-list{flex-basis:calc(50% - 24px);height:400px;overflow:auto;background:linear-gradient(white 30%,rgba(255,255,255,0)),linear-gradient(rgba(255,255,255,0),#fff 70%) 0 100%,radial-gradient(farthest-side at 50% 0,rgba(0,0,0,.2),rgba(0,0,0,0)),radial-gradient(farthest-side at 50% 100%,rgba(0,0,0,.2),rgba(0,0,0,0)) 0 100%;background-repeat:no-repeat;background-color:#fff;background-size:100% 40px,100% 40px,100% 14px,100% 14px;background-attachment:local,local,scroll,scroll}.dialog-body mat-divider{margin:0 24px;flex-basis:auto}.dialog-body .filter-view{flex-basis:calc(50% - 24px)}.dialog-footer{margin-top:40px;display:flex;justify-content:flex-end}.dialog-footer button.button-secondary{margin-left:16px}"]
                },] },
    ];
    /** @nocollapse */
    FilterPickerComponent.ctorParameters = function () { return []; };
    FilterPickerComponent.propDecorators = {
        filter: [{ type: Output }],
        close: [{ type: Output }]
    };
    return FilterPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FilterEntryComponent = /** @class */ (function () {
    function FilterEntryComponent() {
        this.select = new EventEmitter();
        this.deactivate = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FilterEntryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FilterEntryComponent.prototype.showFilterDetails = /**
     * @return {?}
     */
    function () {
        this.select.emit(this.filterTitle);
    };
    /**
     * @return {?}
     */
    FilterEntryComponent.prototype.deactivateFilter = /**
     * @return {?}
     */
    function () {
        this.deactivate.emit((this.filterTitle));
    };
    FilterEntryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-filter-entry',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-list-item (click)=\"showFilterDetails()\" [ngClass]=\"{'active': isSelected}\">\n  <span matLine>{{ filterTitle }} </span>\n  <mat-icon *ngIf=\"isActive\" fontIcon=\"Bosch-Ic-checkmark\"></mat-icon>\n  <mat-icon *ngIf=\"isActive\" fontIcon=\"Bosch-Ic-delete\"\n            (click)=\"deactivateFilter()\"></mat-icon>\n</mat-list-item>\n\n\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{flex:1}mat-list-item{cursor:pointer}mat-list-item.active,mat-list-item:hover{background-color:rgba(0,142,207,.15)}mat-list-item .mat-icon{line-height:1!important;margin-left:8px}"]
                },] },
    ];
    /** @nocollapse */
    FilterEntryComponent.ctorParameters = function () { return []; };
    FilterEntryComponent.propDecorators = {
        filterTitle: [{ type: Input }],
        isSelected: [{ type: Input }],
        isActive: [{ type: Input }],
        select: [{ type: Output }],
        deactivate: [{ type: Output }]
    };
    return FilterEntryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PageContentComponent = /** @class */ (function () {
    function PageContentComponent() {
        /**
         * Sets width and height to 100% so that the complete content space is filled. Default: true
         */
        this.fullSpace = true;
        /**
         * Sets padding to 32px. To enable full-width content, set this to false. Default: true
         */
        this.padding = true;
    }
    /**
     * @return {?}
     */
    PageContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PageContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-page-content',
                    template: "\n    <ng-content></ng-content>",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{padding:0;flex:none;display:block;overflow:auto;position:absolute}:host.full-space{width:100%;height:100%}:host.full-space.padding{width:calc(100% - 2 * 32px);height:calc(100% - 2 * 32px)}:host.padding{padding:32px}"]
                },] },
    ];
    /** @nocollapse */
    PageContentComponent.ctorParameters = function () { return []; };
    PageContentComponent.propDecorators = {
        fullSpace: [{ type: HostBinding, args: ['class.full-space',] }, { type: Input }],
        padding: [{ type: HostBinding, args: ['class.padding',] }, { type: Input }]
    };
    return PageContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BciSharedModule = /** @class */ (function () {
    function BciSharedModule() {
    }
    BciSharedModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        FlexLayoutModule,
                        BreadcrumbsModule,
                        MatCardModule,
                        MatChipsModule,
                        MatButtonModule$1,
                        MatSidenavModule$1,
                        MatToolbarModule,
                        MatFormFieldModule,
                        MatIconModule$1,
                        MatInputModule,
                        MatMenuModule,
                        MatSnackBarModule,
                        MatDialogModule$1,
                        MatListModule$1
                    ],
                    declarations: [
                        FilterPanelComponent,
                        SidePanelComponent,
                        SidePanelItemComponent,
                        ContentSidebarComponent,
                        ContentSidebarItemComponent,
                        ContentWSidePanelComponent,
                        LoadingSpinnerDirective,
                        BciChipComponent,
                        BciTileComponent,
                        CommandbarItemComponent,
                        CommandbarButtonComponent,
                        CommandbarButtonsDirective,
                        CommandbarComponent,
                        CommandbarActionsComponent,
                        CommandbarComponent,
                        CommandbarInlinefiltersComponent,
                        CommandbarInlinefilterComponent,
                        CommandbarQuickfiltersDirective,
                        ToggleButtonDirective,
                        CommandbarActiveFiltersComponent,
                        MasterDetailViewComponent,
                        MasterViewComponent,
                        DetailViewComponent,
                        FilterPickerComponent,
                        FilterEntryComponent,
                        PageContentComponent
                    ],
                    exports: [
                        CommonModule,
                        FormsModule,
                        BreadcrumbsModule,
                        FilterPanelComponent,
                        SidePanelComponent,
                        SidePanelItemComponent,
                        ContentSidebarComponent,
                        ContentSidebarItemComponent,
                        ContentWSidePanelComponent,
                        LoadingSpinnerDirective,
                        BciTileComponent,
                        MasterDetailViewComponent,
                        MasterViewComponent,
                        DetailViewComponent,
                        BciChipComponent,
                        CommandbarItemComponent,
                        CommandbarButtonComponent,
                        CommandbarButtonsDirective,
                        CommandbarComponent,
                        CommandbarActionsComponent,
                        CommandbarComponent,
                        CommandbarInlinefiltersComponent,
                        CommandbarInlinefilterComponent,
                        CommandbarQuickfiltersDirective,
                        ToggleButtonDirective,
                        CommandbarActiveFiltersComponent,
                        FilterPickerComponent,
                        FilterEntryComponent,
                        PageContentComponent,
                        MatCardModule,
                        MatButtonModule$1,
                        MatSidenavModule$1,
                    ]
                },] },
    ];
    return BciSharedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CloseDetailsGuard = /** @class */ (function () {
    function CloseDetailsGuard() {
    }
    /**
     * @param {?} component
     * @param {?} currentRoute
     * @param {?} currentState
     * @param {?=} nextState
     * @return {?}
     */
    CloseDetailsGuard.prototype.canDeactivate = /**
     * @param {?} component
     * @param {?} currentRoute
     * @param {?} currentState
     * @param {?=} nextState
     * @return {?}
     */
    function (component, currentRoute, currentState, nextState) {
        if (component) {
            return this.canDeactivateDetailsComponent(/** @type {?} */ (component), nextState, currentState);
        }
        else {
            return false;
        }
    };
    /**
     * @template T
     * @param {?} value
     * @return {?}
     */
    CloseDetailsGuard.prototype.asObservable = /**
     * @template T
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value instanceof Observable) {
            return value;
        }
        return of(value);
    };
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    CloseDetailsGuard.prototype.areDetailRoutesWithSameMaster = /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    function (currentState, nextState) {
        if (!nextState) {
            return false;
        }
        /** @type {?} */
        var currentChild = currentState.root.firstChild;
        /** @type {?} */
        var nextChild = nextState.root.firstChild;
        while (!!currentChild && !!nextChild) {
            if (this.isDetailsComponentType(currentChild.component)) {
                if (!this.isDetailsComponentType(nextChild.component)) {
                    return false;
                }
                else {
                    return currentChild.parent.component === nextChild.parent.component;
                }
            }
            else {
                currentChild = currentChild.firstChild;
                nextChild = nextChild.firstChild;
            }
        }
        return false;
    };
    /**
     * @param {?} componentType
     * @return {?}
     */
    CloseDetailsGuard.prototype.isDetailsComponentType = /**
     * @param {?} componentType
     * @return {?}
     */
    function (componentType) {
        if (componentType instanceof Type) {
            return this.isDetailsComponent(componentType.prototype);
        }
        return false;
    };
    /**
     * @param {?} component
     * @return {?}
     */
    CloseDetailsGuard.prototype.isDetailsComponent = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return component.canCloseDetails !== undefined;
    };
    /**
     * @param {?} component
     * @param {?} nextState
     * @param {?} currentState
     * @return {?}
     */
    CloseDetailsGuard.prototype.canDeactivateDetailsComponent = /**
     * @param {?} component
     * @param {?} nextState
     * @param {?} currentState
     * @return {?}
     */
    function (component, nextState, currentState) {
        var _this = this;
        return this.asObservable(component.canCloseDetails()).pipe(filter(identity), flatMap(function () { return _this.areDetailRoutesWithSameMaster(currentState, nextState)
            ? of(true)
            : _this.asObservable(component.closeDetails()).pipe(map(function () { return true; })); }), defaultIfEmpty(false));
    };
    CloseDetailsGuard.decorators = [
        { type: Injectable },
    ];
    return CloseDetailsGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb() {
    }
    return Breadcrumb;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { BciCoreModule, CoreConfigurationModule, coreConfigInitializer, CoreConfig, CORE_CONFIG, BOSCH_COLORS, NotFoundComponent, NotificationService, NotificationComponent, LoggerService, NavigationService, NavigationResponse, BciImprintComponent, LogoutComponent, BciContentComponent, BciFooterComponent, BciHeaderComponent, BciLoaderComponent, BciLoaderService, BciSidebarComponent, BciSidebarService, BciSidebarFooterComponent, SidebarNavItem, BciLayoutModule, BciSidebarNavItemComponent, BciSidebarNavListComponent, BciAppComponent, ModalWindowService, BreadcrumbsService, BciSharedModule, CommandbarInlinefiltersComponent, CommandbarInlinefilterComponent, FilterPanelComponent, SidePanelComponent, SidePanelItemComponent, ContentSidebarComponent, ContentSidebarItemComponent, CommandbarComponent, CommandbarButtonComponent, CommandbarButtonsDirective, ToggleButtonDirective, CommandbarQuickfiltersDirective, MasterDetailViewComponent, MasterViewComponent, DetailViewComponent, CloseDetailsGuard, PageContentComponent, BreadcrumbsModule, BreadcrumbsComponent, BreadcrumbComponent, Breadcrumb, CORE_CONFIG_URL as ɵb, dialogDefaultOptions as ɵc, CoreConfigurationService as ɵe, DefaultCoreModuleConfig as ɵa, ENVIRONMENT_PROD as ɵg, BciImprintDetailsService as ɵf, BciSidebarExpanderComponent as ɵh, ITEM_EXPANDED_STATES as ɵd, BciChipComponent as ɵk, CommandbarActionsComponent as ɵn, CommandbarActiveFiltersComponent as ɵo, CommandbarItemComponent as ɵm, ContentWSidePanelComponent as ɵi, FilterEntryComponent as ɵq, FilterPickerComponent as ɵp, LoadingSpinnerDirective as ɵj, BciTileComponent as ɵl };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLW5nLWNvcmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9sb2dnZXIuc2VydmljZS50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvY29yZS1jb25maWd1cmF0aW9uL2NvcmUtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbW9kdWxlLWltcG9ydC1ndWFyZC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2NvcmUtY29uZmlndXJhdGlvbi9jb3JlLWNvbmZpZy50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2NvcmUtY29uZmlndXJhdGlvbi9jb3JlLWNvbmZpZ3VyYXRpb24ubW9kdWxlLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9pbXByaW50L2JjaS1pbXByaW50LWRldGFpbHMuc2VydmljZS50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL21vZGFsLXdpbmRvdy9tb2RhbC13aW5kb3cuc2VydmljZS50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2ltcHJpbnQvYmNpLWltcHJpbnQuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvZW52aXJvbm1lbnQtcHJvZC50b2tlbi50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvY29yZS5tb2R1bGUudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9jb3JlLWNvbmZpZ3VyYXRpb24vY29yZS1jb25maWcudG9rZW4udHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9jb3JlLWNvbmZpZ3VyYXRpb24vYm9zY2gtY29sb3JzLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbGF5b3V0L2JjaS1jb250ZW50L2JjaS1jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2xheW91dC9iY2ktZm9vdGVyL2JjaS1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvYnJlYWRjcnVtYnMuc2VydmljZS50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2xheW91dC9iY2ktaGVhZGVyL2JjaS1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbGF5b3V0L2JjaS1sb2FkZXIvYmNpLWxvYWRlci5zZXJ2aWNlLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbGF5b3V0L2JjaS1sb2FkZXIvYmNpLWxvYWRlci5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9sYXlvdXQvYmNpLXNpZGViYXIvYmNpLXNpZGViYXIuc2VydmljZS50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2xheW91dC9iY2ktc2lkZWJhci9iY2ktc2lkZWJhci5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9sYXlvdXQvYmNpLXNpZGViYXItZm9vdGVyL2JjaS1zaWRlYmFyLWZvb3Rlci5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9sYXlvdXQvYmNpLXNpZGViYXIvc2lkZWJhci1uYXYtaXRlbS5tb2RlbC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2xheW91dC9iY2ktc2lkZWJhci1leHBhbmRlci9iY2ktc2lkZWJhci1leHBhbmRlci5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9sYXlvdXQvYmNpLXNpZGViYXItbmF2LWl0ZW0vYmNpLXNpZGViYXItbmF2LWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbGF5b3V0L2JjaS1zaWRlYmFyLW5hdi1saXN0L2JjaS1zaWRlYmFyLW5hdi1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9icmVhZGNydW1icy9icmVhZGNydW1icy5tb2R1bGUudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9sYXlvdXQvYmNpLWFwcC9iY2ktYXBwLmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2xheW91dC9sYXlvdXQubW9kdWxlLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnNlcnZpY2UudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9uYXZpZ2F0aW9uL05hdmlnYXRpb25SZXNwb25zZS50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvZmlsdGVyLXBhbmVsL2ZpbHRlci1wYW5lbC5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvc2hhcmVkL3NpZGUtcGFuZWwtaXRlbS9zaWRlLXBhbmVsLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9jb250ZW50LXctc2lkZS1wYW5lbC9jb250ZW50LXctc2lkZS1wYW5lbC5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC90aWxlL3RpbGUuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9jb250ZW50LXNpZGViYXIvY29udGVudC1zaWRlYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvY29udGVudC1zaWRlYmFyLWl0ZW0vY29udGVudC1zaWRlYmFyLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9jb21tYW5kYmFyL2NvbW1hbmRiYXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9jb21tYW5kYmFyL2l0ZW0vY29tbWFuZGJhci1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvY29tbWFuZGJhci9hY3Rpb25zL2FjdGlvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9jb21tYW5kYmFyL2J1dHRvbi9jb21tYW5kYmFyLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvc2hhcmVkL2NvbW1hbmRiYXIvY29tbWFuZGJhci1idXR0b25zLmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvY29tbWFuZGJhci9pbmxpbmVmaWx0ZXIvY29tbWFuZGJhci1pbmxpbmVmaWx0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9jb21tYW5kYmFyL2lubGluZWZpbHRlcnMvY29tbWFuZGJhci1pbmxpbmVmaWx0ZXJzLmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvY29tbWFuZGJhci9jb21tYW5kYmFyLXF1aWNrZmlsdGVycy5kaXJlY3RpdmUudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvc2hhcmVkL2NvbW1hbmRiYXIvdG9nZ2xlLWJ1dHRvbi5kaXJlY3RpdmUudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvc2hhcmVkL2NvbW1hbmRiYXIvYWN0aXZlLWZpbHRlcnMvYWN0aXZlLWZpbHRlcnMuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9jaGlwL2NoaXAuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9tYXN0ZXItZGV0YWlsL2RldGFpbC9kZXRhaWwtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvc2hhcmVkL21hc3Rlci1kZXRhaWwvbWFzdGVyLWRldGFpbC12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvbWFzdGVyLWRldGFpbC9tYXN0ZXIvbWFzdGVyLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9maWx0ZXItcGlja2VyL2ZpbHRlci1waWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9maWx0ZXItcGlja2VyL2ZpbHRlci1lbnRyeS9maWx0ZXItZW50cnkuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9wYWdlLWNvbnRlbnQvcGFnZS1jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvbWFzdGVyLWRldGFpbC9jbG9zZS1kZXRhaWxzLmd1YXJkLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9icmVhZGNydW1icy9icmVhZGNydW1iL2JyZWFkY3J1bWIubW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2Uge1xuXG4gIGxvZyhtc2c6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gIH1cblxuICBlcnJvcihtc2c6IHN0cmluZykge1xuICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLW5vdC1mb3VuZCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPjxoMj5QYWdlIE5vdCBGb3VuZDwvaDI+XG4gIDxwPjwvcD5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4vY29yZS1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlQ29uZmlndXJhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZyA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikge1xuICB9XG5cbiAgcHVibGljIGxvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPENvcmVDb25maWc+IHtcblxuICAgIGNvbnN0IGNvbmZpZ0ZpbGVQYXRoID0gdGhpcy5sb2NhdGlvbi5wcmVwYXJlRXh0ZXJuYWxVcmwodXJsKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGNvbmZpZ0ZpbGVQYXRoKVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigoY29uZmlnOiBDb3JlQ29uZmlnKSA9PiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlOiBhbnksIG1vZHVsZU5hbWU6IHN0cmluZykge1xuICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke21vZHVsZU5hbWV9IGhhcyBhbHJlYWR5IGJlZW4gbG9hZGVkLiBJbXBvcnQgQ29yZSBtb2R1bGVzIGluIHRoZSBBcHBNb2R1bGUgb25seS5gKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENvcmVDb25maWcge1xuICBlbnZpcm9ubWVudDogc3RyaW5nO1xuICBlbmRwb2ludE5hdmlnYXRpb246IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIEluamVjdGlvblRva2VuLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb3JlLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyB0aHJvd0lmQWxyZWFkeUxvYWRlZCB9IGZyb20gJy4uL21vZHVsZS1pbXBvcnQtZ3VhcmQnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4vY29yZS1jb25maWcnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMsIE1hdERpYWxvZ0NvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGNvbnN0IENPUkVfQ09ORklHX1VSTCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdDT1JFX0NPTkZJR19VUkwnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvcmVDb25maWdJbml0aWFsaXplcihjb3JlQ29uZmlnU2VydmljZTogQ29yZUNvbmZpZ3VyYXRpb25TZXJ2aWNlLCBjb3JlQ29uZmlnVXJsOiBzdHJpbmcpOiAoKSA9PiBQcm9taXNlPENvcmVDb25maWc+IHtcbiAgaWYgKCFjb3JlQ29uZmlnVXJsIHx8IGNvcmVDb25maWdVcmwubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IENvcmVDb25maWcoKSk7XG4gICAgfTtcbiAgfVxuICBjb25zdCB0ID0gY29yZUNvbmZpZ1NlcnZpY2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHQubG9hZChjb3JlQ29uZmlnVXJsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGRpYWxvZ0RlZmF1bHRPcHRpb25zOiBNYXREaWFsb2dDb25maWc8YW55PiA9IHtcbiAgLi4uIG5ldyBNYXREaWFsb2dDb25maWcoKSxcbiAgLi4uIHtcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGhlaWdodDogJ2F1dG8nXG4gIH1cbn07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogY29yZUNvbmZpZ0luaXRpYWxpemVyLFxuICAgICAgLy8gdXNlRmFjdG9yeTogKGNvcmVDb25maWdTZXJ2aWNlOiBDb3JlQ29uZmlndXJhdGlvblNlcnZpY2UpID0+ICBjb3JlQ29uZmlnSW5pdGlhbGl6ZXIoY29yZUNvbmZpZ1NlcnZpY2UpICxcbiAgICAgIGRlcHM6IFtDb3JlQ29uZmlndXJhdGlvblNlcnZpY2UsIENPUkVfQ09ORklHX1VSTF0sXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMsXG4gICAgICB1c2VWYWx1ZTogZGlhbG9nRGVmYXVsdE9wdGlvbnNcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZUNvbmZpZ3VyYXRpb25Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvcmVDb25maWd1cmF0aW9uTW9kdWxlKSB7XG4gICAgdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlLCAnQ29yZUNvbmZpZ3VyYXRpb25Nb2R1bGUnKTtcbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSXRlbSB9IGZyb20gJy4vbm90aWZpY2F0aW9uLWl0ZW0nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlIHtcblxuICBwcml2YXRlIHN1YmplY3QgPSBuZXcgU3ViamVjdDxOb3RpZmljYXRpb25JdGVtPigpO1xuICBwcml2YXRlIGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSkge1xuICAgIC8vIGNsZWFyIGFsZXJ0IG1lc3NhZ2Ugb24gcm91dGUgY2hhbmdlXG4gICAgcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XG4gICAgICAgIGlmICh0aGlzLmtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UpIHtcbiAgICAgICAgICAvLyBvbmx5IGtlZXAgZm9yIGEgc2luZ2xlIGxvY2F0aW9uIGNoYW5nZVxuICAgICAgICAgIHRoaXMua2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNsZWFyIGFsZXJ0XG4gICAgICAgICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZSkge1xuICAgIHRoaXMua2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2U7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoeyB0eXBlOiAnc3VjY2VzcycsIHRleHQ6IG1lc3NhZ2UgfSk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZSkge1xuICAgIHRoaXMua2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2U7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoeyB0eXBlOiAnZXJyb3InLCB0ZXh0OiBtZXNzYWdlIH0pO1xuICB9XG5cbiAgZ2V0TWVzc2FnZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25JdGVtIH0gZnJvbSAnLi9ub3RpZmljYXRpb24taXRlbSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9ub3RpZmljYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1ub3RpZmljYXRpb24nLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48ZGl2ICpuZ0lmPVwibWVzc2FnZVwiIGNsYXNzPVwibm90aWZpY2F0aW9uLWNvbnRhaW5lclwiIFtjbGFzcy5iZy1kYW5nZXJdPVwibWVzc2FnZS50eXBlPT09J2Vycm9yJ1wiPlxuICA8c3BhbiAqbmdJZj1cIm1lc3NhZ2UudHlwZT09PSdlcnJvcidcIiBjbGFzcz1cImljb24tcHJvYmxlbSBpY29uXCI+Jm5ic3A7PC9zcGFuPlxuICB7e21lc3NhZ2UudGV4dH19XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy5ub3RpZmljYXRpb24tY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3dpZHRoOjMwZW07LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7Ym9yZGVyOjFweCBzb2xpZCAjYTBhMGEwO3BhZGRpbmc6LjVyZW0gMS41cmVtO2JvcmRlci10b3A6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWVzc2FnZTogTm90aWZpY2F0aW9uSXRlbTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSwgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZ2V0TWVzc2FnZSgpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfSk7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW1wcmludE1vZGVsIH0gZnJvbSAnLi9pbXByaW50Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmNpSW1wcmludERldGFpbHNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uKSB7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGltcHJpbnQgZGV0YWlscyBmb3IgaW1wcmludCB2aWV3LlxuICAgKi9cbiAgZ2V0SW1wcmludERldGFpbHMoKTogT2JzZXJ2YWJsZTxJbXByaW50TW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxJbXByaW50TW9kZWw+KHRoaXMubG9jYXRpb24ucHJlcGFyZUV4dGVybmFsVXJsKCcvYXNzZXRzL2ltcHJpbnQtZGV0YWlscy5qc29uJykpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nQ29uZmlnLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5cbi8qKlxuICogVXNlIHRoaXMgc2VydmljZSB0byBvcGVuIGRpYWxvZ3MvbW9kYWwgd2luZG93cy5cbiAqIEZ1dHVyZSB1cGRhdGVzIHdpbGwgc2hpcCB3aXRoIGEgc3RhbmRhcmQgZGlhbG9nIGNvbnRhaW5pbmcgYSBoZWFkZXIsIGNvbnRlbnQsIGFjdGlvbiBidXR0b25zIGFuZCBjbG9zZSBpY29uIGJ1dHRvblxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFdpbmRvd1NlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWF0RGlhbG9nOiBNYXREaWFsb2csIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBPcGVucyBhIG1vZGFsIGRpYWxvZyBjb250YWluaW5nIHRoZSBnaXZlbiBjb21wb25lbnQuXG4gICAqIEBwYXJhbSBjb21wb25lbnRPclRlbXBsYXRlUmVmIFR5cGUgb2YgdGhlIGNvbXBvbmVudCB0byBsb2FkIGludG8gdGhlIGRpYWxvZyxcbiAgICogICAgIG9yIGEgVGVtcGxhdGVSZWYgdG8gaW5zdGFudGlhdGUgYXMgdGhlIGRpYWxvZyBjb250ZW50LlxuICAgKiBAcGFyYW0gY29uZmlnIEV4dHJhIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAgICogQHBhcmFtIG1hdERpYWxvZyBpbmplY3QgTWF0RGlhbG9nIGluIGNvbnN0cnVjdG9yIGluIGNvbXBvbmVudHMgY29udGFpbmVkIGluIGxhenktbG9hZGVkIE1vZHVsZXNcbiAgICogQHJldHVybnMgUmVmZXJlbmNlIHRvIHRoZSBuZXdseS1vcGVuZWQgZGlhbG9nLlxuICAgKi9cbiAgcHVibGljIG9wZW5EaWFsb2dXaXRoQ29tcG9uZW50PFQsIEQgPSBhbnksIFIgPSBhbnk+KGNvbXBvbmVudE9yVGVtcGxhdGVSZWY6IENvbXBvbmVudFR5cGU8VD4gfCBUZW1wbGF0ZVJlZjxUPiwgY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnPEQ+LCBtYXREaWFsb2c/OiBNYXREaWFsb2cpOiBNYXREaWFsb2dSZWY8VCwgUj4ge1xuICAgIGNvbnN0IG1hdERpYWxvZ1VzZWQgPSAobWF0RGlhbG9nICE9PSBudWxsICYmIG1hdERpYWxvZyAhPT0gdW5kZWZpbmVkKSA/IG1hdERpYWxvZyA6IHRoaXMubWF0RGlhbG9nO1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IG1hdERpYWxvZ1VzZWQub3BlbjxULCBELCBSPihjb21wb25lbnRPclRlbXBsYXRlUmVmLCBjb25maWcpO1xuICAgIGlmIChkaWFsb2dSZWYgJiYgbWF0RGlhbG9nVXNlZC5vcGVuRGlhbG9ncy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtY2xvc2VkJyk7XG4gICAgICB0aGlzLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuICAgICAgZGlhbG9nUmVmLmJlZm9yZUNsb3NlKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKG1hdERpYWxvZ1VzZWQub3BlbkRpYWxvZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsJyk7XG4gICAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNsb3NlZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG59XG4iLCIvKipcbiAqIEBsaWNlbmNlXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY2lJbXByaW50RGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuL2JjaS1pbXByaW50LWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBJbXByaW50TW9kZWwgfSBmcm9tICcuL2ltcHJpbnQubW9kZWwnO1xuaW1wb3J0IHsgTW9kYWxXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kYWwtd2luZG93L21vZGFsLXdpbmRvdy5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWltcHJpbnQnLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48ZGl2IGNsYXNzPVwiZGlhbG9nLWhlYWRlclwiPlxuICA8aDMgbWF0RGlhbG9nVGl0bGU+SW1wcmludDwvaDM+XG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idXR0b25cIiBtYXQtaWNvbi1idXR0b24gdGFiaW5kZXg9XCItMVwiIChjbGljayk9XCJjbGlja0NhbmNlbCgpXCI+XG4gICAgPGkgY2xhc3M9XCJCb3NjaC1JYyBCb3NjaC1JYy1hYm9ydFwiPjwvaT5cbiAgPC9idXR0b24+XG48L2Rpdj5cbjxtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIDxhIGNsYXNzPVwiaGVhZGVyLWxvZ29cIj5cbiAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltZy9ib3NjaC1pbnZlbnRlZC1mb3ItbGlmZS5zdmdcIiBhbHQ9XCJCb3NjaCBJbnZlbnRlZCBGb3IgTGlmZSBMb2dvXCI+XG4gIDwvYT5cblxuICA8dGFibGUgY2xhc3M9XCJuYW1lLWFuZC12ZXJzaW9uLWNvbnRhaW5lclwiPlxuICAgIDx0Ym9keT5cbiAgICA8dHI+XG4gICAgICA8dGQ+TmFtZTwvdGQ+XG4gICAgICA8dGQ+e3sgZGF0YT8ubmFtZSB9fTwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+VmVyc2lvbjwvdGQ+XG4gICAgICA8dGQ+e3sgZGF0YT8udmVyc2lvbiB8fCAnMC4wLjAnIH19PC90ZD5cbiAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gIDwvdGFibGU+XG5cbiAgPHRhYmxlPlxuICAgIDx0Ym9keT5cbiAgICA8dHI+XG4gICAgICA8dGQ+TmFtZSBhbmQgYWRkcmVzczwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDxwPnt7ZGF0YT8uYWRkcmVzcz8ubmFtZSB8fCAnUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgnIH19PC9wPlxuICAgICAgICA8cD57e2RhdGE/LmFkZHJlc3M/LnN0cmVldCB8fCAnUG9zdGZhY2ggMzAgMDIgMjAnIH19PC9wPlxuICAgICAgICA8cD57e2RhdGE/LmFkZHJlc3M/LmNpdHkgfHwgJzcwNDQyIFN0dXR0Z2FydCcgfX08L3A+XG4gICAgICAgIDxwPnt7ZGF0YT8uYWRkcmVzcz8uY291bnRyeSB8fCAnR0VSTUFOWScgfX08L3A+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyPlxuICAgICAgPHRkPkNvbnRhY3Q8L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8cCAqbmdJZj1cImRhdGE/LmNvbnRhY3RBdEJvc2NoXCI+e3tkYXRhLmNvbnRhY3RBdEJvc2NofX08L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86e3tkYXRhPy5jb250YWN0TWFpbCB8fCAna29udGFrdEBib3NjaC5jb20nfX1cIj57e2RhdGE/LmNvbnRhY3RNYWlsIHx8ICdrb250YWt0QGJvc2NoLmNvbSd9fTwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZD5Cb2FyZCBvZiBtYW5hZ2VtZW50PC90ZD5cbiAgICAgIDx0ZD57eyBkYXRhPy5ib2FyZE9mTWFuYWdlbWVudCB8fCAnRW5ubyBTY2hhcnBodWlzLCBEaWVyayBHw4PCtmNrZWwsIERyLiBTdGVmYW4gQcODwp9tYW5uJ319PC90ZD5cbiAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gIDwvdGFibGU+XG48L21hdC1kaWFsb2ctY29udGVudD5cblxuXG5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL21hdC1kaWFsb2ctY29udGVudHtmb250LWZhbWlseTpCb3NjaC1TYW5zO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTRweH0uaGVhZGVyLWxvZ28gaW1ne2FsaWduLXNlbGY6Y2VudGVyO2hlaWdodDo1OC4ycHg7d2lkdGg6MTgwcHg7bWFyZ2luLWJvdHRvbTo2NHB4O21hcmdpbi10b3A6MTZweH10YWJsZXtmb250LWZhbWlseTpCb3NjaC1TYW5zO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTRweH10YWJsZSB0ZHtwYWRkaW5nOjAgMzJweCAzMnB4IDA7Ym9yZGVyLWJvdHRvbTowfXRhYmxlIHRkIHB7bWFyZ2luOjA7Zm9udC1mYW1pbHk6Qm9zY2gtU2Fucztmb250LXdlaWdodDozMDA7Zm9udC1zaXplOjE0cHh9dGFibGUgdHJ7Ym9yZGVyLWJvdHRvbTpub25lfXRhYmxlIHRyPnRkOmZpcnN0LWNoaWxke2ZvbnQtZmFtaWx5OkJvc2NoLVNhbnM7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiM1MjVmNmI7cGFkZGluZy1yaWdodDozMnB4O3ZlcnRpY2FsLWFsaWduOnRvcH0ubmFtZS1hbmQtdmVyc2lvbi1jb250YWluZXJ7bWFyZ2luLWJvdHRvbTozMnB4fWE6Zm9jdXN7b3V0bGluZTowfWBdXG59KVxuZXhwb3J0IGNsYXNzIEJjaUltcHJpbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkYXRhOiBJbXByaW50TW9kZWw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFdpbmRvd1NlcnZpY2U6IE1vZGFsV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBpbXByaW50RGV0YWlsc1NlcnZpY2U6IEJjaUltcHJpbnREZXRhaWxzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxCY2lJbXByaW50Q29tcG9uZW50Pikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbXByaW50RGV0YWlsc1NlcnZpY2UuZ2V0SW1wcmludERldGFpbHMoKS5zdWJzY3JpYmUoXG4gICAgICBpbXByaW50TW9kZWwgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBpbXByaW50TW9kZWw7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGlja0NhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGxldCBFTlZJUk9OTUVOVF9QUk9EID0gbmV3IEluamVjdGlvblRva2VuPEJvb2xlYW4+KCdFTlZJUk9OTUVOVF9QUk9EJyk7XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xvc2FibGVPdmVybGF5Q29tcG9uZW50TW9kZWwgfSBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50Q29uZmlnIH0gZnJvbSAnLi9sb2dvdXQuY29tcG9uZW50Lm1vZGVsJztcblxuLyoqXG4gKiBTaW1wbGUgbG9nb3V0IGNvbXBvbmVudCB0byBhcHBlYXIgbmV4dCB0byB0aGUgdXNlciBuYXYgZWxlbWVudC4gSXQgd2lsbCBiZSBwcm9wZXJseSBhbGlnbmVkIHRvIHRoZSBzaWRlYmFyIG5hdiBpdGVtLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIGR5bmFtaWNhbGx5IGNyZWF0ZWQgdXNpbmcgcG9ydGFscywgaXQgbXVzdCBiZSBpbmNsdWRlZCBpbiB0aGUgZW50cnlDb21wb25lbnRzIG9mIHlvdXIgTmdNb2R1bGUhXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1sb2dvdXQnLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48ZGl2IGNsYXNzPVwiYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheVwiPlxuICA8ZGl2IGNsYXNzPVwiYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheS1oZWFkZXJcIj5cbiAgICA8c3Bhbj57e2NvbmZpZz8udGl0bGV9fTwvc3Bhbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnV0dG9uXCIgbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICA8bWF0LWljb24gZm9udEljb249XCJCb3NjaC1JYy1hYm9ydFwiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheS1idXR0b25zXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi1wcmltYXJ5XCIgKGNsaWNrKT1cImxvZ291dCgpXCI+TG9nb3V0PC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8uYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheXtmb250LWZhbWlseTpCb3NjaC1TYW5zO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWxlZnQ6OHB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDt3aWR0aDoyMjBweDtwYWRkaW5nOjE2cHh9LmJjaS1zaWRlYmFyLW5hdi1pdGVtLW92ZXJsYXkgLmJjaS1zaWRlYmFyLW5hdi1pdGVtLW92ZXJsYXktaGVhZGVye3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO21hcmdpbi1ib3R0b206MTZweH0uYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheSAuYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheS1oZWFkZXIgLmNsb3NlLWJ1dHRvbiAubWF0LWljb24sLmJjaS1zaWRlYmFyLW5hdi1pdGVtLW92ZXJsYXkgLmJjaS1zaWRlYmFyLW5hdi1pdGVtLW92ZXJsYXktaGVhZGVyIC5jbG9zZS1idXR0b24ubWF0LWljb24tYnV0dG9ue2xpbmUtaGVpZ2h0OnVuc2V0O3dpZHRoOi13ZWJraXQtZml0LWNvbnRlbnQ7d2lkdGg6LW1vei1maXQtY29udGVudDt3aWR0aDpmaXQtY29udGVudDtoZWlnaHQ6LXdlYmtpdC1maXQtY29udGVudDtoZWlnaHQ6LW1vei1maXQtY29udGVudDtoZWlnaHQ6Zml0LWNvbnRlbnR9LmJjaS1zaWRlYmFyLW5hdi1pdGVtLW92ZXJsYXkgLmJjaS1zaWRlYmFyLW5hdi1pdGVtLW92ZXJsYXktaGVhZGVyIC5jbG9zZS1idXR0b24gLkJvc2NoLUlje2ZvbnQtc2l6ZToyMHB4IWltcG9ydGFudH0uYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheSAuYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheS1idXR0b25ze3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LmJjaS1zaWRlYmFyLW5hdi1pdGVtLW92ZXJsYXk6YWZ0ZXJ7cmlnaHQ6MTAwJTt0b3A6Y2FsYygxMDAlIC0gMjRweCk7Ym9yZGVyOjhweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDApO2NvbnRlbnQ6XCIgXCI7aGVpZ2h0OjA7d2lkdGg6MDtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO2JvcmRlci1yaWdodC1jb2xvcjojZmZmO21hcmdpbi10b3A6LThweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dvdXRDb21wb25lbnQgaW1wbGVtZW50cyBDbG9zYWJsZU92ZXJsYXlDb21wb25lbnRNb2RlbDxMb2dvdXRDb21wb25lbnRDb25maWc+IHtcblxuICAvKipcbiAgICogWW91IG11c3QgcHJvdmlkZSB0aGUgaGVhZGVyIHRleHQgYW5kIGEgbG9nb3V0IGNhbGxiYWNrXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgY29uZmlnOiBMb2dvdXRDb21wb25lbnRDb25maWc7XG5cbiAgLyoqXG4gICAqIEluZm9ybXMgdGhhdCB0aGUgY29tcG9uZW50IHdpc2hlcyB0byBiZSBjbG9zZWQuIFVzZWQgYnkgdGhlIG92ZXJsYXkgaGFuZGxlci5cbiAgICovXG4gIHB1YmxpYyBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLmNvbmZpZy5vbkxvZ291dCgpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDT1JFX0NPTkZJR19VUkwsIENvcmVDb25maWd1cmF0aW9uTW9kdWxlIH0gZnJvbSAnLi9jb3JlLWNvbmZpZ3VyYXRpb24vY29yZS1jb25maWd1cmF0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyB0aHJvd0lmQWxyZWFkeUxvYWRlZCB9IGZyb20gJy4vbW9kdWxlLWltcG9ydC1ndWFyZCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUsIE1hdEljb25SZWdpc3RyeSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgQmNpSW1wcmludENvbXBvbmVudCB9IGZyb20gJy4vaW1wcmludC9iY2ktaW1wcmludC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlRfUFJPRCB9IGZyb20gJy4vZW52aXJvbm1lbnQtcHJvZC50b2tlbic7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBJQ29yZU1vZHVsZUNvbmZpZyB7XG4gIHByb2RfZW52aXJvbm1lbnQ/OiBib29sZWFuO1xuICBjb3JlX2NvbmZpZ191cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0Q29yZU1vZHVsZUNvbmZpZzogSUNvcmVNb2R1bGVDb25maWcgPSB7XG4gIHByb2RfZW52aXJvbm1lbnQ6IGZhbHNlLFxuICBjb3JlX2NvbmZpZ191cmw6IHVuZGVmaW5lZFxufTtcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIC8vIFRPRE86IG5lZWRlZD9cbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIENvcmVDb25maWd1cmF0aW9uTW9kdWxlLFxuICAgIEZsZXhMYXlvdXRNb2R1bGUsXG4gICAgLyogQW5ndWxhciBNYXRlcmlhbCovXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIC8qIENESyAqL1xuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgUG9ydGFsTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05vdEZvdW5kQ29tcG9uZW50LCBOb3RpZmljYXRpb25Db21wb25lbnQsIEJjaUltcHJpbnRDb21wb25lbnQsIExvZ291dENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOb3RGb3VuZENvbXBvbmVudCwgTm90aWZpY2F0aW9uQ29tcG9uZW50LCBIdHRwQ2xpZW50TW9kdWxlLCBCY2lJbXByaW50Q29tcG9uZW50LCBGbGV4TGF5b3V0TW9kdWxlLCBMb2dvdXRDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtCY2lJbXByaW50Q29tcG9uZW50LCBMb2dvdXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJjaUNvcmVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IElDb3JlTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCY2lDb3JlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBFTlZJUk9OTUVOVF9QUk9ELFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcucHJvZF9lbnZpcm9ubWVudCB8fCBEZWZhdWx0Q29yZU1vZHVsZUNvbmZpZy5wcm9kX2Vudmlyb25tZW50XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDT1JFX0NPTkZJR19VUkwsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZy5jb3JlX2NvbmZpZ191cmxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEJjaUNvcmVNb2R1bGUsIHByaXZhdGUgaWNvblJlZ2lzdHJ5OiBNYXRJY29uUmVnaXN0cnkpIHtcbiAgICB0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGUsICdCY2lDb3JlTW9kdWxlJyk7XG5cbiAgICBpY29uUmVnaXN0cnkucmVnaXN0ZXJGb250Q2xhc3NBbGlhcygnYm9zY2gnLCAnQm9zY2gtSWMnKVxuICAgICAgLnNldERlZmF1bHRGb250U2V0Q2xhc3MoJ0Jvc2NoLUljJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdCwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vY29yZS1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4vY29yZS1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgQ09SRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29yZUNvbmZpZz4oJ0NPUkVfQ09ORklHJywge1xuICBmYWN0b3J5OiAoKSA9PiBpbmplY3QoQ29yZUNvbmZpZ3VyYXRpb25TZXJ2aWNlKS5nZXRDb25maWcoKSxcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuZXhwb3J0IGNvbnN0IEJPU0NIX0NPTE9SUyA9IHtcbiAgQm9zY2hSZWQ6ICcjRTIwMDE1JyxcbiAgQm9zY2hGdWNoc2lhOiAnI0I5MDI3NicsXG4gIEJvc2NoRnVjaHNpYTUwOiAnI0RDODBCQScsXG4gIEJvc2NoVmlvbGV0OiAnIzUwMjM3RicsXG4gIEJvc2NoVmlvbGV0NTA6ICcjQTc5MUJGJyxcbiAgQm9zY2hEYXJrQmx1ZTogJyMwMDU2OTEnLFxuICBCb3NjaERhcmtCbHVlNTA6ICcjN0ZBQUM4JyxcbiAgQm9zY2hMaWdodEJsdWU6ICcjMDA4RUNGJyxcbiAgQm9zY2hMaWdodEJsdWU1MDogJyM3RkM2RTcnLFxuICBCb3NjaFR1cnF1b2lzZTogJyMwMEE4QjAnLFxuICBCb3NjaFR1cnF1b2lzZTUwOiAnIzdmZDNkNycsXG4gIEJvc2NoTGlnaHRHcmVlbjogJyM3OEJFMjAnLFxuICBCb3NjaExpZ2h0R3JlZW41MDogJyNiYmRlOGYnLFxuICBCb3NjaERhcmtHcmVlbjogJyMwMDYyNDknLFxuICBCb3NjaERhcmtHcmVlbjUwOiAnIzdmYjBhNCcsXG4gIEJvc2NoR3JlZW46ICcjMzI4RDQ2JyxcblxuICBCb3NjaFdoaXRlOiAnI0ZGRkZGRicsXG4gIEJvc2NoTGlnaHRHcmF5OiAnI0JGQzBDMicsXG4gIC8qKlxuICAgKiBUaGlzIGdyYXkgc2NhbGUgc2hvdWxkIGJlIHVzZWQgZm9yIGRhcmsgVUlzLiBDb25zaWRlciB0aGUgbGlnaHQgZ3JheSBzY2FsZSBmb3IgeW91ciB3ZWIgYXBwbGljYXRpb24uXG4gICAqL1xuICBCb3NjaERhcmtHcmF5OiAnIzUyNUY2QicsXG4gIEJvc2NoQmxhY2s6ICcjMDAwMDAwJyxcblxuICBCb3NjaFNpZ25hbEdyZWVuOiAnIzcwYmY1NCcsXG4gIEJvc2NoU2lnbmFsWWVsbG93OiAnI0ZDQUYxNycsXG4gIEJvc2NoU2lnbmFsUmVkOiAnI2UxMWYyNicsXG4gIEJvc2NoU2lnbmFsT3JhbmdlOiAnI2ZmNmEwMCcsXG5cblxuICAvKiBTaGFkZXMgKi9cbiAgQm9zY2hSZWRXNzU6ICcjRjhCRkM1JyxcbiAgQm9zY2hSZWRXNTA6ICcjRjE3RjhCJyxcbiAgQm9zY2hSZWRXMjU6ICcjRUE0MDUxJyxcbiAgQm9zY2hSZWRCMjU6ICcjQTkwMDEwJyxcbiAgQm9zY2hSZWRCNTA6ICcjNzEwMDBCJyxcbiAgQm9zY2hSZWRCNzU6ICcjMzkwMDA1JyxcbiAgQm9zY2hGdWNoc2lhVzc1OiAnI0VEQzBERCcsXG4gIEJvc2NoRnVjaHNpYVc1MDogJyNEQzgwQkEnLFxuICBCb3NjaEZ1Y2hzaWFXMjU6ICcjQ0I0MTk4JyxcbiAgQm9zY2hGdWNoc2lhQjI1OiAnIzhCMDE1OCcsXG4gIEJvc2NoRnVjaHNpYUI1MDogJyM1RDAxM0InLFxuICBCb3NjaEZ1Y2hzaWFCNzU6ICcjMkUwMTFFJyxcbiAgQm9zY2hWaW9sZXRXNzU6ICcjRDNDOERGJyxcbiAgQm9zY2hWaW9sZXRXNTA6ICcjQTc5MUJGJyxcbiAgQm9zY2hWaW9sZXRXMjU6ICcjN0M1QTlGJyxcbiAgQm9zY2hWaW9sZXRCMjU6ICcjM0MxQTVGJyxcbiAgQm9zY2hWaW9sZXRCNTA6ICcjMjgxMjQwJyxcbiAgQm9zY2hWaW9sZXRCNzU6ICcjMTQwOTIwJyxcbiAgQm9zY2hEYXJrQmx1ZVc3NTogJyNCRkQ1RTMnLFxuICBCb3NjaERhcmtCbHVlVzUwOiAnIzdGQUFDOCcsXG4gIEJvc2NoRGFya0JsdWVXMjU6ICcjNDA4MEFEJyxcbiAgQm9zY2hEYXJrQmx1ZUIyNTogJyMwMDQwNkQnLFxuICBCb3NjaERhcmtCbHVlQjUwOiAnIzAwMkI0OScsXG4gIEJvc2NoRGFya0JsdWVCNzU6ICcjMDAxNjI0JyxcbiAgQm9zY2hMaWdodEJsdWVXNzU6ICcjQkZFM0YzJyxcbiAgQm9zY2hMaWdodEJsdWVXNTA6ICcjN0ZDNkU3JyxcbiAgQm9zY2hMaWdodEJsdWVXMjU6ICcjNDBBQURCJyxcbiAgQm9zY2hMaWdodEJsdWVCMjU6ICcjMDA2QTlCJyxcbiAgQm9zY2hMaWdodEJsdWVCNTA6ICcjMDA0NzY4JyxcbiAgQm9zY2hMaWdodEJsdWVCNzU6ICcjMDAyNDM0JyxcbiAgQm9zY2hUdXJxdW9pc2VXNzU6ICcjQkZFOUVCJyxcbiAgQm9zY2hUdXJxdW9pc2VXNTA6ICcjN0ZEM0Q3JyxcbiAgQm9zY2hUdXJxdW9pc2VXMjU6ICcjNDBCRUM0JyxcbiAgQm9zY2hUdXJxdW9pc2VCMjU6ICcjMDA3RTg0JyxcbiAgQm9zY2hUdXJxdW9pc2VCNTA6ICcjMDA1NDU4JyxcbiAgQm9zY2hUdXJxdW9pc2VCNzU6ICcjMDAyQTJDJyxcbiAgQm9zY2hMaWdodEdyZWVuVzc1OiAnI0RERUZDNycsXG4gIEJvc2NoTGlnaHRHcmVlblc1MDogJyNCQkRFOEYnLFxuICBCb3NjaExpZ2h0R3JlZW5XMjU6ICcjOUFDRTU4JyxcbiAgQm9zY2hMaWdodEdyZWVuQjI1OiAnIzVBOEUxOCcsXG4gIEJvc2NoTGlnaHRHcmVlbkI1MDogJyMzQzVGMTAnLFxuICBCb3NjaExpZ2h0R3JlZW5CNzU6ICcjMUUzMDA4JyxcbiAgQm9zY2hEYXJrR3JlZW5XNzU6ICcjQkZEOEQxJyxcbiAgQm9zY2hEYXJrR3JlZW5XNTA6ICcjN0ZCMEE0JyxcbiAgQm9zY2hEYXJrR3JlZW5XMjU6ICcjNDA4OTc3JyxcbiAgQm9zY2hEYXJrR3JlZW5CMjU6ICcjMDA0OTM3JyxcbiAgQm9zY2hEYXJrR3JlZW5CNTA6ICcjMDAzMTI1JyxcbiAgQm9zY2hEYXJrR3JlZW5CNzU6ICcjMDAxOTEyJyxcbiAgQm9zY2hMaWdodEdyYXlXNzU6ICcjRUZFRkYwJyxcbiAgQm9zY2hMaWdodEdyYXlXNTA6ICcjREZERkUwJyxcbiAgQm9zY2hMaWdodEdyYXlXMjU6ICcjQ0ZEMEQxJyxcbiAgQm9zY2hMaWdodEdyYXlCMjU6ICcjOEY5MDkxJyxcbiAgQm9zY2hMaWdodEdyYXlCNTA6ICcjNjA2MDYxJyxcbiAgQm9zY2hMaWdodEdyYXlCNzU6ICcjMzAzMDMxJyxcbiAgLyoqXG4gICAqIFRoaXMgZ3JheSBzY2FsZSBzaG91bGQgYmUgdXNlZCBmb3IgZGFyayBVSXMuIENvbnNpZGVyIHRoZSBsaWdodCBncmF5IHNjYWxlIGZvciB5b3VyIHdlYiBhcHBsaWNhdGlvbi5cbiAgICovXG4gIEJvc2NoRGFya0dyYXlXNzU6ICcjRDREN0RBJyxcbiAgLyoqXG4gICAqIFRoaXMgZ3JheSBzY2FsZSBzaG91bGQgYmUgdXNlZCBmb3IgZGFyayBVSXMuIENvbnNpZGVyIHRoZSBsaWdodCBncmF5IHNjYWxlIGZvciB5b3VyIHdlYiBhcHBsaWNhdGlvbi5cbiAgICovXG4gIEJvc2NoRGFya0dyYXlXNTA6ICcjQThBRkI1JyxcbiAgLyoqXG4gICAqIFRoaXMgZ3JheSBzY2FsZSBzaG91bGQgYmUgdXNlZCBmb3IgZGFyayBVSXMuIENvbnNpZGVyIHRoZSBsaWdodCBncmF5IHNjYWxlIGZvciB5b3VyIHdlYiBhcHBsaWNhdGlvbi5cbiAgICovXG4gIEJvc2NoRGFya0dyYXlXMjU6ICcjN0Q4NzkwJyxcbiAgLyoqXG4gICAqIFRoaXMgZ3JheSBzY2FsZSBzaG91bGQgYmUgdXNlZCBmb3IgZGFyayBVSXMuIENvbnNpZGVyIHRoZSBsaWdodCBncmF5IHNjYWxlIGZvciB5b3VyIHdlYiBhcHBsaWNhdGlvbi5cbiAgICovXG4gIEJvc2NoRGFya0dyYXlCMjU6ICcjM0Q0NzUwJyxcbiAgLyoqXG4gICAqIFRoaXMgZ3JheSBzY2FsZSBzaG91bGQgYmUgdXNlZCBmb3IgZGFyayBVSXMuIENvbnNpZGVyIHRoZSBsaWdodCBncmF5IHNjYWxlIGZvciB5b3VyIHdlYiBhcHBsaWNhdGlvbi5cbiAgICovXG4gIEJvc2NoRGFya0dyYXlCNTA6ICcjMjkzMDM2JyxcbiAgLyoqXG4gICAqIFRoaXMgZ3JheSBzY2FsZSBzaG91bGQgYmUgdXNlZCBmb3IgZGFyayBVSXMuIENvbnNpZGVyIHRoZSBsaWdodCBncmF5IHNjYWxlIGZvciB5b3VyIHdlYiBhcHBsaWNhdGlvbi5cbiAgICovXG4gIEJvc2NoRGFya0dyYXlCNzU6ICcjMTUxODFCJyxcbiAgQm9zY2hZZWxsb3dXNzU6ICcjRkVFQkM1JyxcbiAgQm9zY2hZZWxsb3dXNTA6ICcjRkRENzhCJyxcbiAgQm9zY2hZZWxsb3dXMjU6ICcjRkRDMzUxJyxcbiAgQm9zY2hZZWxsb3dCMjU6ICcjQkQ4MzExJyxcbiAgQm9zY2hZZWxsb3dCNTA6ICcjN0U1ODBDJyxcbiAgQm9zY2hZZWxsb3dCNzU6ICcjM0YyQzA2J1xufTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48ZGl2IGNsYXNzPVwiYmNpLWNvbnRlbnQtY29udGFpbmVyXCI+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImJjaS1zaWRlYmFyXCI+PC9uZy1jb250ZW50PlxuICA8bmctY29udGVudD5cbiAgPC9uZy1jb250ZW50PlxuXG4gIDxkaXYgY2xhc3M9XCJiY2ktY29udGVudC1jb250YWluZXItbWFpblwiPlxuXG4gIDwvZGl2PlxuICA8YmNpLWxvYWRlcj48L2JjaS1sb2FkZXI+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy5iY2ktY29udGVudC1jb250YWluZXJ7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7b3ZlcmZsb3c6aGlkZGVufS5iY2ktY29udGVudC1jb250YWluZXI6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxNnB4O2NvbnRlbnQ6Jyc7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWndvZ0lIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJS0lDQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJZ29nSUdobGFXZG9kRDBpTXpBd0lnb2dJSGRwWkhSb1BTSTNNakFpQ2lBZ2RtVnljMmx2YmowaU1TNHhJZ29nSUhrOUlqQWlDaUFnZUQwaU1DSUtJQ0IyYVdWM1FtOTRQU0l3SURBZ056SXdJRE13TUNJK0NpQWdQSE4wZVd4bElIUjVjR1U5SW5SbGVIUXZZM056SWo0S0lDQWdJQzV6ZERBZ2V3b2dJQ0FnSUNCbWFXeHNPaUIxY213b0lpTlRWa2RKUkY4eFh5SXBPd29nSUNBZ2ZRb2dJQ0FnTG5OME1TQjdDaUFnSUNBZ0lHWnBiR3c2SUhWeWJDZ2lJMU5XUjBsRVh6SmZJaWs3Q2lBZ0lDQjlDaUFnSUNBdWMzUXlJSHNLSUNBZ0lDQWdabWxzYkRvZ2RYSnNLQ0lqVTFaSFNVUmZNMThpS1RzS0lDQWdJSDBLSUNBZ0lDNXpkRE1nZXdvZ0lDQWdJQ0JtYVd4c09pQjFjbXdvSWlOVFZrZEpSRjgwWHlJcE93b2dJQ0FnZlFvZ0lDQWdMbk4wTkNCN0NpQWdJQ0FnSUdacGJHdzZJSFZ5YkNnaUkxTldSMGxFWHpWZklpazdDaUFnSUNCOUNpQWdJQ0F1YzNRMUlIc0tJQ0FnSUNBZ1ptbHNiRG9nSTBGR01qQXlORHNLSUNBZ0lIMEtJQ0FnSUM1emREWWdld29nSUNBZ0lDQm1hV3hzT2lCMWNtd29JaU5UVmtkSlJGODJYeUlwT3dvZ0lDQWdmUW9nSUNBZ0xuTjBOeUI3Q2lBZ0lDQWdJR1pwYkd3NklDTTVOREZDTVVVN0NpQWdJQ0I5Q2lBZ0lDQXVjM1E0SUhzS0lDQWdJQ0FnWm1sc2JEb2dJMEl4TWpjek9Uc0tJQ0FnSUgwS0lDQWdJQzV6ZERrZ2V3b2dJQ0FnSUNCbWFXeHNPaUFqT1RVeU5ETXlPd29nSUNBZ2ZRb2dJQ0FnTG5OME1UQWdld29nSUNBZ0lDQm1hV3hzT2lBalJEUXlNREkzT3dvZ0lDQWdmUW9nSUNBZ0xuTjBNVEVnZXdvZ0lDQWdJQ0JtYVd4c09pQjFjbXdvSWlOVFZrZEpSRjgzWHlJcE93b2dJQ0FnZlFvZ0lDQWdMbk4wTVRJZ2V3b2dJQ0FnSUNCbWFXeHNPaUIxY213b0lpTlRWa2RKUkY4NFh5SXBPd29nSUNBZ2ZRb2dJQ0FnTG5OME1UTWdld29nSUNBZ0lDQm1hV3hzT2lBak1VTTVRVFE0T3dvZ0lDQWdmUW9nSUNBZ0xuTjBNVFFnZXdvZ0lDQWdJQ0JtYVd4c09pQjFjbXdvSWlOVFZrZEpSRjg1WHlJcE93b2dJQ0FnZlFvZ0lDQWdMbk4wTVRVZ2V3b2dJQ0FnSUNCbWFXeHNPaUIxY213b0lpTlRWa2RKUkY4eE1GOGlLVHNLSUNBZ0lIMEtJQ0FnSUM1emRERTJJSHNLSUNBZ0lDQWdabWxzYkRvZ0l6SkJNemc0TmpzS0lDQWdJSDBLSUNBZ0lDNXpkREUzSUhzS0lDQWdJQ0FnWm1sc2JEb2dkWEpzS0NJalUxWkhTVVJmTVRGZklpazdDaUFnSUNCOUNpQWdJQ0F1YzNReE9DQjdDaUFnSUNBZ0lHWnBiR3c2SUhWeWJDZ2lJMU5XUjBsRVh6RXlYeUlwT3dvZ0lDQWdmUW9nSUNBZ0xuTjBNVGtnZXdvZ0lDQWdJQ0JtYVd4c09pQjFjbXdvSWlOVFZrZEpSRjh4TTE4aUtUc0tJQ0FnSUgwS0lDQWdJQzV6ZERJd0lIc0tJQ0FnSUNBZ1ptbHNiRG9nZFhKc0tDSWpVMVpIU1VSZk1UUmZJaWs3Q2lBZ0lDQjlDaUFnUEM5emRIbHNaVDRLSUNBOFp5QjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0TVM0MU5Td3RNeTR6S1NJK0NpQWdJQ0E4YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SWxOV1IwbEVYekZmSWlCNU1qMGlMVE15TGpZMk15SWdaM0poWkdsbGJuUlZibWwwY3owaWRYTmxjbE53WVdObFQyNVZjMlVpSUhreFBTSXRNekl1TmpZeklpQm5jbUZrYVdWdWRGUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElDMHhNVGd1T1RnZ01USXdMalUwS1NJZ2VESTlJamcwTWk0d09DSWdlREU5SWpFeE9DNDVPQ0krUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXprMU1qTXpNU0lnYjJabWMyVjBQU0l3SWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6a3lNVU14UkNJZ2IyWm1jMlYwUFNJdU1ETTJNRGswSWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUkwSXdNamN6T1NJZ2IyWm1jMlYwUFNJdU1EZzBOalE1SWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUkwRkVNVVl5TkNJZ2IyWm1jMlYwUFNJdU1USXpOeUl2UGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlORE56SXdNallpSUc5bVpuTmxkRDBpTGpFMU1Ea2lMejQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqUkRReU1ESTNJaUJ2Wm1aelpYUTlJaTR4TmprM0lpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJME5ETWpRek1TSWdiMlptYzJWMFBTSXVNVGMxT0NJdlBqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTkNOekpDTkVNaUlHOW1abk5sZEQwaUxqRTRPRGdpTHo0OGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak9UVXpNemN4SWlCdlptWnpaWFE5SWk0eU1EYzBJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpnNE16VTNSaUlnYjJabWMyVjBQU0l1TWpFME1pSXZQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU00TlRNMk9ERWlJRzltWm5ObGREMGlMakkwTXpZaUx6NDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpOa1l6TmpoQ0lpQnZabVp6WlhROUlpNHlOak00SWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6TTVOREk0UmlJZ2IyWm1jMlYwUFNJdU1qa3hNU0l2UGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNeU16TkVOMFFpSUc5bVpuTmxkRDBpTGpNeU5ESWlMejQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqTXpJeVF6WkdJaUJ2Wm1aelpYUTlJaTQwTVRneElpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJekpCTXpnNE5TSWdiMlptYzJWMFBTSXVORGswSWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6RkVOakpCTVNJZ2IyWm1jMlYwUFNJdU5UVTRNU0l2UGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNeU56WkRRVFVpSUc5bVpuTmxkRDBpTGpVM01ESWlMejQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqTkRNNFJVSXpJaUJ2Wm1aelpYUTlJaTQyTVRBeklpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJelUxUVRWQ1F5SWdiMlptYzJWMFBTSXVOak01T1NJdlBqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTTFRMEZHUWtZaUlHOW1abk5sZEQwaUxqWTFOVFlpTHo0OGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak5UWkJRa0pFSWlCdlptWnpaWFE5SWk0Mk56YzNJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpRek9VWkNPQ0lnYjJabWMyVjBQU0l1TnpBMU9DSXZQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU14T0RoRlFVWWlJRzltWm5ObGREMGlMamN6TnpJaUx6NDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpNRE00UWtGRklpQnZabVp6WlhROUlpNDNOREkySWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6QTJPVEk1TWlJZ2IyWm1jMlYwUFNJdU56ZzVPQ0l2UGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNd05VRXhORUlpSUc5bVpuTmxkRDBpTGpnNE56VWlMejQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqTURNNU1qZEZJaUJ2Wm1aelpYUTlJakVpTHo0OEwyeHBibVZoY2tkeVlXUnBaVzUwUGp4eVpXTjBJSGRwWkhSb1BTSTNNak11TVNJZ2VUMGlNQ0lnZUQwaU1DSWdhR1ZwWjJoMFBTSXpNRFl1TkNJZ1kyeGhjM005SW5OME1DSWdabWxzYkQwaWRYSnNLQ05UVmtkSlJGOHhYeWtpTHo0S0lDQWdJRHhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpVTFaSFNVUmZNbDhpSUhreVBTSXRNVEE1TGpJMklpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0lnZVRFOUlpMHhNRGt1TWpZaUlHZHlZV1JwWlc1MFZISmhibk5tYjNKdFBTSnRZWFJ5YVhnb01TQXdJREFnTFRFZ0xURXhPQzQ1T0NBeE1qQXVOVFFwSWlCNE1qMGlNak0xTGprNElpQjRNVDBpTXpJMUxqQTRJajQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqT0Rrek5qZ3dJaUJ2Wm1aelpYUTlJakFpTHo0OGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak9Ea3pOamd3SWlCdlptWnpaWFE5SWk0ek16VTBJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpoRU16RTJSQ0lnYjJabWMyVjBQU0l1TlRBeU5TSXZQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU01TURJNU5FUWlJRzltWm5ObGREMGlMamd6T1RnaUx6NDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpPVEF5TlRReElpQnZabVp6WlhROUlqRWlMejQ4TDJ4cGJtVmhja2R5WVdScFpXNTBQanh3YjJ4NVoyOXVJSEJ2YVc1MGN6MGlNVGMxTGpFZ01UVXpMaklnTVRFM0lETXdOaTQwSURJd05pNHhJRE13Tmk0MElpQm1hV3hzUFNKMWNtd29JMU5XUjBsRVh6SmZLU0lnWTJ4aGMzTTlJbk4wTVNJdlBnb2dJQ0FnUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKVFZrZEpSRjh6WHlJZ2VUSTlJaTA0TWk0eU9EUWlJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWlCNU1UMGlNVEl3TGpJMElpQm5jbUZrYVdWdWRGUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElDMHhNVGd1T1RnZ01USXdMalUwS1NJZ2VESTlJalEwTmk0MU5TSWdlREU5SWpRM09DNDVNeUkrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpNeU1rTTJSaUlnYjJabWMyVjBQU0l3SWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6TXlNa00yUmlJZ2IyWm1jMlYwUFNJdU1qUXlOeUl2UGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNek1ESkdOeklpSUc5bVpuTmxkRDBpTGpRMU9Ua2lMejQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqTWtFelFUZEZJaUJ2Wm1aelpYUTlJaTQzTVRVMUlpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJekUxTkVFNU15SWdiMlptYzJWMFBTSXVPVGc1TmlJdlBqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTXhNelJDT1RRaUlHOW1abk5sZEQwaU1TSXZQand2YkdsdVpXRnlSM0poWkdsbGJuUStQSEJ2YkhsbmIyNGdjRzlwYm5SelBTSXlPRGd1TkNBeE5UTXVNaUF6TVRBdU55QXpNRFl1TkNBek5UZ3VNU0F6TURZdU5DQXpOVGd1TVNBd0lETXhNaTQ1SURBaUlHWnBiR3c5SW5WeWJDZ2pVMVpIU1VSZk0xOHBJaUJqYkdGemN6MGljM1F5SWk4K0NpQWdJQ0E4YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SWxOV1IwbEVYelJmSWlCNU1qMGlMVE15TGpZMk15SWdaM0poWkdsbGJuUlZibWwwY3owaWRYTmxjbE53WVdObFQyNVZjMlVpSUhreFBTSXRNekl1TmpZeklpQm5jbUZrYVdWdWRGUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElDMHhNVGd1T1RnZ01USXdMalUwS1NJZ2VESTlJak0zTWk0NE9DSWdlREU5SWpJNU5DNHdPQ0krUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpaR016YzRSQ0lnYjJabWMyVjBQU0l3SWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6TkJOREk1TVNJZ2IyWm1jMlYwUFNJeElpOCtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENDhjRzlzZVdkdmJpQndiMmx1ZEhNOUlqRTNOUzR4SURFMU15NHlJREl3Tmk0eElETXdOaTQwSURJMU15NDVJREUxTXk0eUlESXdPUzQwSURBZ01qQTVMalFnTUNJZ1ptbHNiRDBpZFhKc0tDTlRWa2RKUkY4MFh5a2lJR05zWVhOelBTSnpkRE1pTHo0S0lDQWdJRHhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpVTFaSFNVUmZOVjhpSUhreVBTSXRNekl1TmpZeklpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0lnZVRFOUlpMHpNaTQyTmpNaUlHZHlZV1JwWlc1MFZISmhibk5tYjNKdFBTSnRZWFJ5YVhnb01TQXdJREFnTFRFZ0xURXhPQzQ1T0NBeE1qQXVOVFFwSWlCNE1qMGlNekkxTGpBNElpQjRNVDBpTkRNeExqZzRJajQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqTWpNelJEZEVJaUJ2Wm1aelpYUTlJakFpTHo0OGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak1qa3pSRGRFSWlCdlptWnpaWFE5SWk0eU5EazFJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpOQk0wTTRNQ0lnYjJabWMyVjBQU0l1TlRRME5pSXZQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU0xTVROQ09EUWlJRzltWm5ObGREMGlMamcyTVRZaUx6NDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpOVVF6UVRnMklpQnZabVp6WlhROUlqRWlMejQ4TDJ4cGJtVmhja2R5WVdScFpXNTBQanh3YjJ4NVoyOXVJSEJ2YVc1MGN6MGlNalV6TGprZ01UVXpMaklnTWpBMkxqRWdNekEyTGpRZ016RXdMamNnTXpBMkxqUWdNamc0TGpRZ01UVXpMaklnTXpFeUxqa2dNQ0F5TURrdU5DQXdJaUJtYVd4c1BTSjFjbXdvSTFOV1IwbEVYelZmS1NJZ1kyeGhjM005SW5OME5DSXZQanh3YjJ4NVoyOXVJSEJ2YVc1MGN6MGlNVEUyTGpFZ01DQTFOUzQzSURBZ05UVXVOeUE1TkM0NElEZzVMamtnTVRVekxqSWdOVFV1TnlBeU1URXVOaUExTlM0M0lETXdOaTQwSURFeE55QXpNRFl1TkNBNU5TNHlJREUxTXk0eUlpQm1hV3hzUFNJallXWXlNREkwSWlCamJHRnpjejBpYzNRMUlpOCtDaUFnSUNBOGJHbHVaV0Z5UjNKaFpHbGxiblFnYVdROUlsTldSMGxFWHpaZklpQjVNajBpTkRNdU9UTTNJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ2VURTlJalF6TGprek55SWdaM0poWkdsbGJuUlVjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3hJREFnTUNBdE1TQXRNVEU0TGprNElERXlNQzQxTkNraUlIZ3lQU0l5TXpJdU5qY2lJSGd4UFNJek1qa3VNVEVpUGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNNE9UTTJPREFpSUc5bVpuTmxkRDBpTUNJdlBqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTTRPVE0yT0RBaUlHOW1abk5sZEQwaUxqTXpOVFFpTHo0OGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak9FUXpNVFpFSWlCdlptWnpaWFE5SWk0MU1ESTFJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXprd01qazBSQ0lnYjJabWMyVjBQU0l1T0RNNU9DSXZQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU01TURJMU5ERWlJRzltWm5ObGREMGlNU0l2UGp3dmJHbHVaV0Z5UjNKaFpHbGxiblErUEhCdmJIbG5iMjRnY0c5cGJuUnpQU0l4TnpVdU1TQXhOVE11TWlBeU1Ea3VOQ0F3SURFeE5pNHhJREFpSUdacGJHdzlJblZ5YkNnalUxWkhTVVJmTmw4cElpQmpiR0Z6Y3owaWMzUTJJaTgrUEhCdmJIbG5iMjRnY0c5cGJuUnpQU0kxTlM0M0lEazBMamdnTlRVdU55QXdJREFnTUNJZ1ptbHNiRDBpSXprME1XSXhaU0lnWTJ4aGMzTTlJbk4wTnlJdlBqeHdiMng1WjI5dUlIQnZhVzUwY3owaU5UVXVOeUF5TVRFdU5pQTRPUzQ1SURFMU15NHlJRFUxTGpjZ09UUXVPQ0lnWm1sc2JEMGlJMkl4TWpjek9TSWdZMnhoYzNNOUluTjBPQ0l2UGp4d2IyeDVaMjl1SUhCdmFXNTBjejBpTlRVdU55QXlNVEV1TmlBd0lETXdOaTQwSURVMUxqY2dNekEyTGpRaUlHWnBiR3c5SWlNNU5ERmlNV1VpSUdOc1lYTnpQU0p6ZERjaUx6NDhjRzlzZVdkdmJpQndiMmx1ZEhNOUlqVTFMamNnT1RRdU9DQXdJREFnTUNBek1EWXVOQ0ExTlM0M0lESXhNUzQySWlCbWFXeHNQU0lqT1RVeU5ETXlJaUJqYkdGemN6MGljM1E1SWk4K1BIQnZiSGxuYjI0Z2NHOXBiblJ6UFNJeE1UWXVNU0F3SURrMUxqSWdNVFV6TGpJZ01URTNJRE13Tmk0MElERTNOUzR4SURFMU15NHlJaUJtYVd4c1BTSWpaRFF5TURJM0lpQmpiR0Z6Y3owaWMzUXhNQ0l2UGdvZ0lDQWdQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0pUVmtkSlJGODNYeUlnZVRJOUlpMHhPRFl1TURZaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJaUI1TVQwaU1USXdMalEwSWlCbmNtRmthV1Z1ZEZSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SUMweE1UZ3VPVGdnTVRJd0xqVTBLU0lnZURJOUlqYzBPQzQ1TmlJZ2VERTlJamMwT0M0NU5pSStQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJemswUWtVMU5TSWdiMlptYzJWMFBTSXdJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXprelFrUTFPQ0lnYjJabWMyVjBQU0l1TURRME16UXdJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpoQ1FrTTJRU0lnYjJabWMyVjBQU0l1TXpnNU1TSXZQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU00TmtKRE56VWlJRzltWm5ObGREMGlMamN4TkRraUx6NDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpPRFJDUXpjNUlpQnZabVp6WlhROUlqRWlMejQ4TDJ4cGJtVmhja2R5WVdScFpXNTBQanh3WVhSb0NpQWdJQ0FnSUdROUltMDJOREV1TmlBeU5Ua3VObU14TGpjdE1qVXVOQ0F4TUMwMU5DNDJJREU0TGpndE9EVXVOaUF4TGpRdE5TQXlMamd0TVRBZ05DNHlMVEUxTGpFdE1TNDBMVFV1TlMweUxqZ3RNVEF1T1MwMExqSXRNVFl1TWkwNExqZ3RNek11TXkweE55MDJOQzQzTFRFNExqZ3RPVEl0TVM0MExUSXhMaklnTVM0MExUTTNJRGd1T1MwMU1DNDJhQzAwTlM0NVl5MDNMalVnTVRndU15MHhNQzR6SURJNUxqRXRPQzQ1SURVd0xqTWdNUzQzSURJM0xqTWdNVEFnTlRndU55QXhPQzQ0SURreUlERXpJRFE1TGpNZ01qZ2dNVEEyTGpJZ01qTXVNaUF4TmpRdU1tZ3hNaTQ1WXkwM0xqWXRNVEl1T0MweE1DNDBMVEkzTGpNdE9TMDBOM29pQ2lBZ0lDQWdJR05zWVhOelBTSnpkREV4SWdvZ0lDQWdJQ0JtYVd4c1BTSjFjbXdvSTFOV1IwbEVYemRmS1NJdlBnb2dJQ0FnUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKVFZrZEpSRjg0WHlJZ2VUSTlJaTB4T0RRdU5EVWlJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWlCNU1UMGlNVEUzTGpJNUlpQm5jbUZrYVdWdWRGUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElDMHhNVGd1T1RnZ01USXdMalUwS1NJZ2VESTlJamN6TXk0ME9TSWdlREU5SWpZMU15NDNOaUkrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpBNFFUSTBRaUlnYjJabWMyVjBQU0l3SWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6QkJRVEUwUlNJZ2IyWm1jMlYwUFNJdU1UWTNPQ0l2UGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNd1FqbEZOVGNpSUc5bVpuTmxkRDBpTGpRd05EY2lMejQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqTURrNVFUWTNJaUJ2Wm1aelpYUTlJaTQyT0RJM0lpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJekEwT1RRM1JDSWdiMlptYzJWMFBTSXVPVGc1T0NJdlBqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTXdORGt6TjBVaUlHOW1abk5sZEQwaU1TSXZQand2YkdsdVpXRnlSM0poWkdsbGJuUStQSEJoZEdnZ1pEMGliVFl4TkM0MUlERTBNaTR6WXkwNExqZ3RNek11TXkweE55MDJOQzQzTFRFNExqZ3RPVEl0TVM0MExUSXhMaklnTVM0MExUTXlJRGd1T1MwMU1DNHphQzB6TlM0MFl6VXVOeUExTXk0NUxUTXVPQ0F4TURZdU55MHhNeTQySURFMk5pNDRMVFV1TnlBek5TMHhNUzQzSURjeExqTXRNVE11TWlBeE1EQXVOaTB4TGpFZ01qRXVNU0F3TGpRZ016SXVPQ0F4TGpnZ016bG9PVE11TldNMExqZ3ROVGN1T1MweE1DNHpMVEV4TkM0NExUSXpMakl0TVRZMExqRjZJaUJqYkdGemN6MGljM1F4TWlJZ1ptbHNiRDBpZFhKc0tDTlRWa2RKUkY4NFh5a2lMejQ4Y0dGMGFDQmpiR0Z6Y3owaWMzUXhNeUlnWm1sc2JEMGlJekZqT1dFME9DSWdaRDBpYlRZMk5DNDJJREUxT0M0NVl5MHhMalFnTlM0eExUSXVPQ0F4TUM0eExUUXVNaUF4TlM0eExUZ3VPQ0F6TVMweE55QTJNQzR5TFRFNExqZ2dPRFV1TmkweExqUWdNVGt1TnlBeExqUWdNelF1TWlBNUlEUTJMamxvTXpOak5DNHlMVFV4TGpndE55NHlMVEV3TWk0ekxURTVMVEUwTnk0MmVpSXZQZ29nSUNBZ1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSlRWa2RKUkY4NVh5SWdlVEk5SWkweE9EVXVPVFlpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElpQjVNVDBpTVRJd0xqVTBJaUJuY21Ga2FXVnVkRlJ5WVc1elptOXliVDBpYldGMGNtbDRLREVnTUNBd0lDMHhJQzB4TVRndU9UZ2dNVEl3TGpVMEtTSWdlREk5SWpneE1pNDRNeUlnZURFOUlqZ3hNaTQ0TXlJK1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6WTVRVEEyTUNJZ2IyWm1jMlYwUFNJd0lpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJell6T1VRMVF5SWdiMlptYzJWMFBTSXVNRE01T0RrMUlpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJelJET1RRMFJpSWdiMlptYzJWMFBTSXVNakU1TWlJdlBqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTXpOemhGTkRjaUlHOW1abk5sZEQwaUxqUXhPRFFpTHo0OGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak1qazRRalEwSWlCdlptWnpaWFE5SWk0Mk5URTFJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpJek9FRTBNeUlnYjJabWMyVjBQU0l4SWk4K1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0OGNHRjBhQ0JrUFNKdE5qZ3dMalVnTUdNeE1DNDNJRFUxTGpNdE1pNDFJREV4TUM0MExURTFMamtnTVRVNExqa2dNVEV1TnlBME5TNHpJREl6TGpJZ09UVXVPQ0F4T0M0NUlERTBOeTQyYURNNUxqWjJMVE13Tmk0MWFDMDBNaTQyZWlJZ1kyeGhjM005SW5OME1UUWlJR1pwYkd3OUluVnliQ2dqVTFaSFNVUmZPVjhwSWk4K0NpQWdJQ0E4YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SWxOV1IwbEVYekV3WHlJZ2VUSTlJaTB4T0RVdU9EWWlJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWlCNU1UMGlNVEl3TGpVMElpQm5jbUZrYVdWdWRGUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElDMHhNVGd1T1RnZ01USXdMalUwS1NJZ2VESTlJalkxTWk0ME5TSWdlREU5SWpZMU1pNDBOU0krUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpBMVFqVkVReUlnYjJabWMyVjBQU0l3SWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6QTBRakJFTnlJZ2IyWm1jMlYwUFNJdU1qRTVOeUl2UGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNd05VRTBRemtpSUc5bVpuTmxkRDBpTGpVek56RWlMejQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqTURVNU1VSTBJaUJ2Wm1aelpYUTlJaTQ1TVRJeUlpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJekExT0VOQlJTSWdiMlptYzJWMFBTSXhJaTgrUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDQ4Y0dGMGFDQmtQU0p0TlRReUxqTWdNalkzTGpSak1TNDFMVEk1TGpRZ055NDFMVFkxTGpZZ01UTXVNaTB4TURBdU5pQTVMamd0TmpBdU1TQXhPUzR6TFRFeE1pNDRJREV6TGpZdE1UWTJMamhvTFRjd0xqaGpMVEV1TkNBeE1TNDBMVEl1T1NBeE9TNHlMVEV1T0NBME1TNDRJREV1TlNBek1TNDJJRGN1TlNBM01DNDFJREV6TGpJZ01UQTRMaklnT0M0MElEVTFMalFnTVRZdU5pQXhNRGd1T0NBeE5TNHhJREUxTmk0MGFERTVMakpqTFRFdU15MDJMakl0TWk0NExURTNMamt0TVM0M0xUTTVlaUlnWTJ4aGMzTTlJbk4wTVRVaUlHWnBiR3c5SW5WeWJDZ2pVMVpIU1VSZk1UQmZLU0l2UGp4d2IyeDVaMjl1SUhCdmFXNTBjejBpTXpjMUxqY2dNVFV6TGpJZ016VTRMakVnTUNBek5UZ3VNU0F6TURZdU5DSWdabWxzYkQwaUl6SmhNemc0TmlJZ1kyeGhjM005SW5OME1UWWlMejRLSUNBZ0lEeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGlVMVpIU1VSZk1URmZJaUI1TWowaU56Y3VNVE0ySWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSWdlVEU5SWkwMExqTXlPREVpSUdkeVlXUnBaVzUwVkhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVNBd0lEQWdMVEVnTFRFeE9DNDVPQ0F4TWpBdU5UUXBJaUI0TWowaU56azJMamN4SWlCNE1UMGlOelV4TGpBMUlqNDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpOakpDTVRaRklpQnZabVp6WlhROUlqQWlMejQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqT0RkQ09UVTNJaUJ2Wm1aelpYUTlJakVpTHo0OEwyeHBibVZoY2tkeVlXUnBaVzUwUGp4d1lYUm9JR1E5SW0wMk5ERXVOaUExTUM0Mll6RXVOeUF5Tnk0eklERXdJRFU0TGpjZ01UZ3VPQ0E1TWlBeExqUWdOUzR6SURJdU9DQXhNQzQzSURRdU1pQXhOaTR5SURFekxqVXRORGd1TkNBeU5pNDJMVEV3TXk0MUlERTFMamt0TVRVNExqaG9MVE13WXkwM0xqVWdNVE11TmkweE1DNHpJREk1TGpRdE9DNDVJRFV3TGpaNklpQmpiR0Z6Y3owaWMzUXhOeUlnWm1sc2JEMGlkWEpzS0NOVFZrZEpSRjh4TVY4cElpOCtDaUFnSUNBOGJHbHVaV0Z5UjNKaFpHbGxiblFnYVdROUlsTldSMGxFWHpFeVh5SWdlVEk5SWkweE9Ea3VNamdpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElpQjVNVDBpTVRFekxqY3hJaUJuY21Ga2FXVnVkRlJ5WVc1elptOXliVDBpYldGMGNtbDRLREVnTUNBd0lDMHhJQzB4TVRndU9UZ2dNVEl3TGpVMEtTSWdlREk5SWpZek1TNDFPU0lnZURFOUlqVTFNQzQwSWo0OGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak1EWTVRVVEwSWlCdlptWnpaWFE5SWpBaUx6NDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpNekJCTUVORklpQnZabVp6WlhROUlpNHpOVEkxSWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6VkNRakJETUNJZ2IyWm1jMlYwUFNJeElpOCtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENDhjR0YwYUNCa1BTSnROVEE1TGpnZ01UVXdZeTAxTGpjdE16Y3VOeTB4TVM0M0xUYzJMall0TVRNdU1pMHhNRGd1TWkweExqRXRNakl1TnlBd0xqUXRNekF1TkNBeExqZ3ROREV1T0dndE5ERXVOV014TGpVZ05EQXVNUzB4TGpVZ09EVXVNeTAzSURFMk1DNDRMVE11TVNBME15NDFMVGdnTVRFd0xqVXROeUF4TkRVdU4yZzRNaTR4WXpFdU5DMDBOeTQzTFRZdU9DMHhNREV1TVMweE5TNHlMVEUxTmk0MWVpSWdZMnhoYzNNOUluTjBNVGdpSUdacGJHdzlJblZ5YkNnalUxWkhTVVJmTVRKZktTSXZQZ29nSUNBZ1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSlRWa2RKUkY4eE0xOGlJSGt5UFNJdE1UZzFMamcySWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSWdlVEU5SWpFeU1DNDFOQ0lnWjNKaFpHbGxiblJVY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d4SURBZ01DQXRNU0F0TVRFNExqazRJREV5TUM0MU5Da2lJSGd5UFNJMU1EVXVNek1pSUhneFBTSTFNRFV1TXpNaVBqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTXhSVFExT0VVaUlHOW1abk5sZEQwaU1DSXZQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU14UmpSR09UWWlJRzltWm5ObGREMGlMakkwTVRFaUx6NDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpNa0kyUVVGQ0lpQnZabVp6WlhROUlpNDNNamt5SWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6TXpOMEpDT1NJZ2IyWm1jMlYwUFNJeElpOCtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENDhjRzlzZVdkdmJpQndiMmx1ZEhNOUlqTTFPQzR4SURNd05pNDBJRFF4TkM0MklETXdOaTQwSURReE5DNDJJREFnTXpVNExqRWdNQ0F6TnpVdU55QXhOVE11TWlJZ1ptbHNiRDBpZFhKc0tDTlRWa2RKUkY4eE0xOHBJaUJqYkdGemN6MGljM1F4T1NJdlBnb2dJQ0FnUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKVFZrZEpSRjh4TkY4aUlIa3lQU0l4TWpBdU5UUWlJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWlCNU1UMGlMVEU0TlM0NE5pSWdaM0poWkdsbGJuUlVjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3hJREFnTUNBdE1TQXRNVEU0TGprNElERXlNQzQxTkNraUlIZ3lQU0kxTlRRdU9USWlJSGd4UFNJMU5UUXVPVElpUGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNelJqbEJRemtpSUc5bVpuTmxkRDBpTUNJdlBqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTXlNRFl5UVRJaUlHOW1abk5sZEQwaU1TSXZQand2YkdsdVpXRnlSM0poWkdsbGJuUStQSEJoZEdnZ1pEMGliVFEwT1M0NUlERTJNQzQ0WXpVdU5TMDNOUzQxSURndU5TMHhNakF1TmlBM0xURTJNQzQ0YUMwME1pNHliQzB3TGpFZ016QTJMalJvTWpndU0yTXRNUzB6TlM0eElETXVPQzB4TURJdU1TQTNMVEUwTlM0MmVpSWdZMnhoYzNNOUluTjBNakFpSUdacGJHdzlJblZ5YkNnalUxWkhTVVJmTVRSZktTSXZQand2Wno0S1BDOXpkbWMrQ2c9PSk7ei1pbmRleDoxMDAwMH06Om5nLWRlZXAgYm9keS5tb2RhbCAuYmNpLWNvbnRlbnQtY29udGFpbmVyey13ZWJraXQtYW5pbWF0aW9uOi4zcyBmb3J3YXJkcyBib2R5X2JsdXI7YW5pbWF0aW9uOi4zcyBmb3J3YXJkcyBib2R5X2JsdXJ9OjpuZy1kZWVwIGJvZHkubW9kYWwtY2xvc2VkIC5iY2ktY29udGVudC1jb250YWluZXJ7LXdlYmtpdC1hbmltYXRpb246LjNzIGJvZHlfdW5ibHVyO2FuaW1hdGlvbjouM3MgYm9keV91bmJsdXJ9QC13ZWJraXQta2V5ZnJhbWVzIGJvZHlfYmx1cntmcm9tey13ZWJraXQtZmlsdGVyOmJsdXIoLjNweCk7ZmlsdGVyOmJsdXIoLjNweCl9dG97LXdlYmtpdC1maWx0ZXI6Ymx1cigzcHgpO2ZpbHRlcjpibHVyKDNweCl9fUBrZXlmcmFtZXMgYm9keV9ibHVye2Zyb217LXdlYmtpdC1maWx0ZXI6Ymx1ciguM3B4KTtmaWx0ZXI6Ymx1ciguM3B4KX10b3std2Via2l0LWZpbHRlcjpibHVyKDNweCk7ZmlsdGVyOmJsdXIoM3B4KX19QC13ZWJraXQta2V5ZnJhbWVzIGJvZHlfdW5ibHVye2Zyb217LXdlYmtpdC1maWx0ZXI6Ymx1cigzcHgpO2ZpbHRlcjpibHVyKDNweCl9dG97LXdlYmtpdC1maWx0ZXI6Ymx1ciguM3B4KTtmaWx0ZXI6Ymx1ciguM3B4KX19QGtleWZyYW1lcyBib2R5X3VuYmx1cntmcm9tey13ZWJraXQtZmlsdGVyOmJsdXIoM3B4KTtmaWx0ZXI6Ymx1cigzcHgpfXRvey13ZWJraXQtZmlsdGVyOmJsdXIoLjNweCk7ZmlsdGVyOmJsdXIoLjNweCl9fWBdXG59KVxuZXhwb3J0IGNsYXNzIEJjaUNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktZm9vdGVyJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgYnNjLWZvb3RlciB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBCY2lGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvblN0YXJ0LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBub2luc3BlY3Rpb24gVHlwZVNjcmlwdFByZWZlclNob3J0SW1wb3J0IGR1ZSB0byBjeWNsaWMgZGVwZW5kZW5jeVxuaW1wb3J0IHsgU2lkZWJhck5hdkl0ZW0gfSBmcm9tICcuL2xheW91dC9pbmRleCc7XG5pbXBvcnQgeyBCcmVhZGNydW1iIH0gZnJvbSAnLi4vc2hhcmVkL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5tb2RlbCc7XG5cbi8qKlxuICogUHJvdmlkZXMgbGlzdCBvZiBicmVhZGNydW1icyBmb3IgdGhlIGN1cnJlbnRseSBhY3RpdmUgcm91dGUuXG4gKiBIT1cgVE8gVVNFOlxuICogSW1wb3J0IHRoaXMgbW9kdWxlIGluIGFwcC5tb2R1bGUgd2l0aCBcIkJyZWFkY3J1bWJzTW9kdWxlXCIuXG4gKiBQb3NpdGlvbiBpdCBvbiB0aGUgcGFnZSB1c2luZyB0aGUgaHRtbCB0YWcgPGJjaS1icmVhZGNydW1icz4uXG4gKiBEZWZpbmUgY3VzdG9tIHRpdGxlcyBhbmQgdGVtcG9yYXJ5IHRpdGxlcywgd2hpY2ggd2lsbCBiZSBjbGVhcmVkIHVwb24gbmF2aWdhdGlvbi5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYnNTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogQWx3YXlzIHNob3cgXCJob21lXCItcm91dGUgaW4gYnJlYWRjcnVtYnMgKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgcHVibGljIHN0aWNreVJvb3RCcmVhZGNydW1iID0gZmFsc2U7XG4gIHByaXZhdGUgYnJlYWRjcnVtYnMkOiBCZWhhdmlvclN1YmplY3Q8QnJlYWRjcnVtYltdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QnJlYWRjcnVtYltdPihbXSk7XG4gIC8qKlxuICAgKiBPYnNlcnZhYmxlIHByb3ZpZGluZyB0aGUgbGlzdCBvZiBCcmVhZGNydW1iIChjdXJyZW50IGFzIHdlbGwgYXMgZnV0dXJlIGxpc3RzKVxuICAgKi9cbiAgcHVibGljIGJyZWFkY3J1bWJzOiBPYnNlcnZhYmxlPEJyZWFkY3J1bWJbXT4gPSB0aGlzLmJyZWFkY3J1bWJzJC5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBwYXRoVG9CcmVhZGNydW1iTWFwID0gbmV3IE1hcDxzdHJpbmcsIEJyZWFkY3J1bWI+KCk7XG4gIHByaXZhdGUgdGVtcG9yYXJ5UGF0aFRvQnJlYWRjcnVtYk1hcCA9IG5ldyBNYXA8c3RyaW5nLCBCcmVhZGNydW1iPigpO1xuXG4gIHByaXZhdGUgbmdVbnN1YnNjcmliZTogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge1xuXG5cbiAgICAvLyB1cGRhdGUgYnJlYWRjcnVtYnMgYWZ0ZXIgbmF2Z2lhdGlvblxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMubmdVbnN1YnNjcmliZSksXG4gICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2goKSk7XG5cbiAgICAvLyBjbGVhbiB1cCB0ZW1wb3JhcnkgcGF0aC10by10aXRsZSBtYXBwaW5ncyB1cG9uIHN0YXJ0IG9mIG5hdmlnYXRpb25cbiAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLm5nVW5zdWJzY3JpYmUpLFxuICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSxcbiAgICApLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBjb25zdCBvbGRVcmwgPSB0aGlzLm5vcm1hbGl6ZVBhdGgoKGV2ZW50IGFzIE5hdmlnYXRpb25TdGFydCkudXJsKTtcbiAgICAgIEFycmF5LmZyb20odGhpcy50ZW1wb3JhcnlQYXRoVG9CcmVhZGNydW1iTWFwLmtleXMoKSwgKHBhdGgpID0+IHtcbiAgICAgICAgaWYgKCFvbGRVcmwuc3RhcnRzV2l0aChwYXRoKSkge1xuICAgICAgICAgIHRoaXMudGVtcG9yYXJ5UGF0aFRvQnJlYWRjcnVtYk1hcC5kZWxldGUocGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5uZ1Vuc3Vic2NyaWJlLm5leHQoKTtcbiAgICB0aGlzLm5nVW5zdWJzY3JpYmUuY29tcGxldGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXROYXZpZ2F0aW9uSXRlbXMobmF2SXRlbXM6IFNpZGViYXJOYXZJdGVtW10pIHtcbiAgICB0aGlzLnByb2Nlc3NOYXZpZ2F0aW9uSXRlbXMobmF2SXRlbXMpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aXRsZSBmb3IgYSBwYXRoLCBsaWtlIHNldFRpdGxlKCdhL2IvYycsICdDJyk7XG4gICAqIEBwYXJhbSBwYXRoIHJlbGF0aXZlIHBhdGhcbiAgICogQHBhcmFtIHRpdGxlIGJyZWFkY3J1bWIgdGl0bGUgZm9yIHRoZSBnaXZlbiBwYXRoXG4gICAqL1xuICBwdWJsaWMgc2V0VGl0bGUocGF0aDogc3RyaW5nLCB0aXRsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXRCcmVhZGNydW1iKHRoaXMubm9ybWFsaXplUGF0aChwYXRoKSwge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdXJsOiBwYXRoLFxuICAgIH0pO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRlbXBvcmFyeSBicmVhY3J1bWIgZm9yIGEgcGF0aCwgbGlrZSAnQycgZm9yICdhL2IvYydcbiAgICogQHBhcmFtIHBhdGggcmVsYXRpdmUgcGF0aFxuICAgKiBAcGFyYW0gdGl0bGUgYnJlYWRjcnVtYiB0aXRsZSBmb3IgdGhlIGdpdmVuIHBhdGhcbiAgICovXG4gIHB1YmxpYyBzZXRUZW1wb3JhcnlUaXRsZShwYXRoOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBvcmFyeVBhdGhUb0JyZWFkY3J1bWJNYXAuc2V0KHRoaXMubm9ybWFsaXplUGF0aChwYXRoKSwge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdXJsOiBwYXRoLFxuICAgIH0pO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRlbXBvcmFyeSBicmVhY3J1bWIgZm9yIGEgcm91dGUncyB1cmxcbiAgICogQHBhcmFtIHJvdXRlIHRoZSBtYXRjaGVkIHJvdXRlXG4gICAqIEBwYXJhbSB0aXRsZSB0aGUgZGVzaXJlZCB0aXRsZVxuICAgKi9cbiAgcHVibGljIHNldFRlbXBvcmFyeVRpdGxlRm9yUm91dGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNldFRlbXBvcmFyeVRpdGxlKHRoaXMucm91dGVUb1BhdGhGcm9tUm9vdChyb3V0ZSksIHRpdGxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0ZW1wb3JhcnkgYnJlYWRjcnVtYiBmb3IgYSByb3V0ZSBzdXBlcnBhdGggY29udGFpbmluZyBhbGwgcmVxdWlyZWQgc2VnbWVudHMuXG4gICAqIEUuZy4gYSBicmVhZGNydW1iIHdpdGggdGhlIHVybCBbLi4uXS9hL2Igd2lsbCBiZSBjcmVhdGVkIGZvciBhIHJvdXRlIHBhdGggLzpBLzpCLzpDIGFuZCB0aGUgcmVxdWlyZWQgc2VnbWVudHMgWyc6QScsICc6QiddIG9yIFsnOkInXVxuICAgKiBAcGFyYW0gcm91dGUgdGhlIG1hdGNoZWQgcm91dGVcbiAgICogQHBhcmFtIHJlcXVpcmVkUGF0aFNlZ21lbnRzIHRoZSByZXF1aXJlZCBwYXRoIHNlZ21lbnRzLCBwYXJhbWV0ZXJzIHByZWZpeGVkIHdpdGggJzonXG4gICAqIEBwYXJhbSB0aXRsZSB0aGUgZGVzaXJlZCB0aXRsZVxuICAgKi9cbiAgcHVibGljIHNldFRlbXBvcmFyeVRpdGxlRm9yUGFydGlhbFJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCByZXF1aXJlZFBhdGhTZWdtZW50czogc3RyaW5nW10sIHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtaXNzaW5nUGF0aFNlZ21lbnRzID0gbmV3IFNldChyZXF1aXJlZFBhdGhTZWdtZW50cyk7XG4gICAgY29uc3QgYmFzZVVybCA9IHRoaXMucm91dGVUb1BhdGhGcm9tUm9vdChyb3V0ZS5wYXJlbnQpO1xuICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IHRoaXMuZ2V0UGF0aFNlZ21lbnRzKHJvdXRlKTtcbiAgICBjb25zdCByZWxhdGl2ZVVybFNlZ21lbnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXRoU2VnbWVudCA9IHBhdGhTZWdtZW50c1tpXS5wYXRoO1xuICAgICAgY29uc3QgdXJsU2VnbWVudCA9IHJvdXRlLnVybFtpXS5wYXRoO1xuICAgICAgbWlzc2luZ1BhdGhTZWdtZW50cy5kZWxldGUocGF0aFNlZ21lbnQpO1xuICAgICAgcmVsYXRpdmVVcmxTZWdtZW50cy5wdXNoKHVybFNlZ21lbnQpO1xuXG4gICAgICBpZiAobWlzc2luZ1BhdGhTZWdtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtaXNzaW5nUGF0aFNlZ21lbnRzLnNpemUgPiAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1JlcXVpcmVkIHBhdGggc2VnbWVudHMgbWlzc2luZywgbm8gbmV3IGJyZWFkY3J1bWIgaGFzIGJlZW4gZGVmaW5lZDogJyArIEFycmF5LmZyb20obWlzc2luZ1BhdGhTZWdtZW50cykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0aXZlVXJsID0gcmVsYXRpdmVVcmxTZWdtZW50cy5sZW5ndGggPiAwID8gJy8nICsgcmVsYXRpdmVVcmxTZWdtZW50cy5qb2luKCcvJykgOiAnJztcbiAgICB0aGlzLnNldFRlbXBvcmFyeVRpdGxlKGJhc2VVcmwgKyByZWxhdGl2ZVVybCwgdGl0bGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIFVSTCBzdHJpbmcgZnJvbSByb290IHRvIHRoZSBnaXZlbiByb3V0ZSAoaW5jbHVkaW5nKS5cbiAgICogQHBhcmFtIHJvdXRlIGxhc3Qgcm91dGUgcGFydCBvZiB0aGUgdXJsLlxuICAgKiBAcmV0dXJucyBVUkwgZnJvbSByb290IHRvIHJvdXRlLlxuICAgKi9cbiAgcHVibGljIHJvdXRlVG9QYXRoRnJvbVJvb3Qocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLycgKyByb3V0ZS5wYXRoRnJvbVJvb3QubWFwKFxuICAgICAgciA9PiByLnVybC5tYXAodXJsU2VnbWVudCA9PiB1cmxTZWdtZW50LnBhdGgpLmZpbHRlcihzID0+ICEhcy5sZW5ndGgpLmpvaW4oJy8nKVxuICAgICkuZmlsdGVyKHMgPT4gISFzLmxlbmd0aCkuam9pbignLycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlY29tcHV0ZSBicmVhZGNydW1icyBmb3IgY3VycmVudGx5IGFjdGl2YXRlZCByb3V0ZVxuICAgKi9cbiAgcHVibGljIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5icmVhZGNydW1icyQubmV4dCh0aGlzLnBhcnNlQWN0aXZhdGVkUm91dGUoKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhdGhTZWdtZW50cyhyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICAgIGlmICghcm91dGUucm91dGVDb25maWcgfHwgIXJvdXRlLnJvdXRlQ29uZmlnLnBhdGgpIHtcbiAgICAgIHJldHVybiByb3V0ZS51cmw7XG4gICAgfVxuICAgIGNvbnN0IHVybFRyZWUgPSB0aGlzLnJvdXRlci5wYXJzZVVybChyb3V0ZS5yb3V0ZUNvbmZpZy5wYXRoKTtcbiAgICBpZiAodXJsVHJlZS5yb290ICYmIHVybFRyZWUucm9vdC5jaGlsZHJlbiAmJiB1cmxUcmVlLnJvb3QuY2hpbGRyZW4ucHJpbWFyeSkge1xuICAgICAgcmV0dXJuIHVybFRyZWUucm9vdC5jaGlsZHJlbi5wcmltYXJ5LnNlZ21lbnRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzTmF2aWdhdGlvbkl0ZW1zKG5hdmlnYXRpb25JdGVtczogU2lkZWJhck5hdkl0ZW1bXSkge1xuICAgIHRoaXMuZmxhdHRlbk5hdmlnYXRpb25JdGVtcyhuYXZpZ2F0aW9uSXRlbXMpLmZvckVhY2goKHt1cmwsIHRpdGxlfSkgPT4gdGhpcy5zZXRCcmVhZGNydW1iKHVybCwge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIGZsYXR0ZW5OYXZpZ2F0aW9uSXRlbXMobmF2SXRlbXM6IFNpZGViYXJOYXZJdGVtW10pOiBTaWRlYmFyTmF2SXRlbVtdIHtcbiAgICByZXR1cm4gbmF2SXRlbXMubWFwKG5hdkl0ZW0gPT4ge1xuICAgICAgaWYgKG5hdkl0ZW0uaXRlbXMgJiYgbmF2SXRlbS5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZsYXR0ZW5OYXZpZ2F0aW9uSXRlbXMobmF2SXRlbS5pdGVtcykuY29uY2F0KG5hdkl0ZW0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtuYXZJdGVtXTtcbiAgICB9KS5yZWR1Y2UoKHByZXYsIGN1cikgPT4gcHJldi5jb25jYXQoY3VyKSk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlQWN0aXZhdGVkUm91dGUoKTogQnJlYWRjcnVtYltdIHtcbiAgICBjb25zdCBicmVhZGNydW1iczogQnJlYWRjcnVtYltdID0gW107XG4gICAgY29uc3QgcGF0aFNlZ21lbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgLy8gZ2V0IHBhdGggc2VnbWVudHNcbiAgICBmb3IgKGxldCByb3V0ZSA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3Q7IHJvdXRlOyByb3V0ZSA9IHJvdXRlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhdGhTZWdtZW50cy5wdXNoKC4uLnJvdXRlLnVybC5tYXAoc2VnbWVudCA9PiBzZWdtZW50LnBhdGgpKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgXCIvXCIgKFwiSG9tZVwiKSB0byBicmVhZGNydW1ic1xuICAgIGlmICh0aGlzLnN0aWNreVJvb3RCcmVhZGNydW1iIHx8IHBhdGhTZWdtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHBhdGhTZWdtZW50cy51bnNoaWZ0KCcnKTtcbiAgICB9XG5cbiAgICAvLyBsb29rIGZvciBicmVhZGNydW1icyBtYXRjaGluZyBzdXBlcnBhdGhzIG9mIHRoZSBjdXJyZW50IHBhdGggc3RhcnRpbmcgZnJvbSB0aGUgcm9vdFxuICAgIGNvbnN0IHN1cGVycGF0aFNlZ21lbnRzID0gW107XG4gICAgZm9yIChjb25zdCBwYXRoU2VnbWVudCBvZiBwYXRoU2VnbWVudHMpIHtcbiAgICAgIHN1cGVycGF0aFNlZ21lbnRzLnB1c2gocGF0aFNlZ21lbnQpO1xuICAgICAgY29uc3QgYnJlYWRjcnVtYkVsZW1lbnQ6IEJyZWFkY3J1bWIgPSB0aGlzLmdldEJyZWFkY3J1bWIodGhpcy50b1BhdGgoc3VwZXJwYXRoU2VnbWVudHMpKTtcbiAgICAgIGlmICghIWJyZWFkY3J1bWJFbGVtZW50KSB7XG4gICAgICAgIGJyZWFkY3J1bWJzLnB1c2goYnJlYWRjcnVtYkVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghIWJyZWFkY3J1bWJzLmxlbmd0aCkge1xuICAgICAgY29uc3QgbGFzdEJyZWFkY3J1bWIgPSBicmVhZGNydW1ic1ticmVhZGNydW1icy5sZW5ndGggLSAxXTtcbiAgICAgIGlmIChsYXN0QnJlYWRjcnVtYi51cmwgJiYgdGhpcy5ub3JtYWxpemVQYXRoKGxhc3RCcmVhZGNydW1iLnVybCkgPT09IHRoaXMudG9QYXRoKHBhdGhTZWdtZW50cykpIHtcbiAgICAgICAgLy8gZG8gbm90IGxpbmsgYnJlYWRjcnVtYiBmb3IgY3VycmVudGx5IGFjdGl2YXRlZCByb3V0ZVxuICAgICAgICBicmVhZGNydW1ic1ticmVhZGNydW1icy5sZW5ndGggLSAxXSA9IHtcbiAgICAgICAgICAuLi5sYXN0QnJlYWRjcnVtYixcbiAgICAgICAgICB1cmw6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnJlYWRjcnVtYnM7XG4gIH1cblxuICBwcml2YXRlIGdldEJyZWFkY3J1bWIocGF0aDogc3RyaW5nKTogQnJlYWRjcnVtYiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudGVtcG9yYXJ5UGF0aFRvQnJlYWRjcnVtYk1hcC5nZXQocGF0aCkgfHwgdGhpcy5wYXRoVG9CcmVhZGNydW1iTWFwLmdldChwYXRoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0QnJlYWRjcnVtYihwYXRoOiBzdHJpbmcsIGJyZWFkY3J1bWI6IEJyZWFkY3J1bWIpOiB2b2lkIHtcbiAgICB0aGlzLnBhdGhUb0JyZWFkY3J1bWJNYXAuc2V0KHRoaXMubm9ybWFsaXplUGF0aChwYXRoKSwgYnJlYWRjcnVtYik7XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZVBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKHBhdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCB0ZW1wUGF0aCA9IHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA6ICcvJyArIHBhdGg7XG4gICAgcmV0dXJuIHRlbXBQYXRoLmVuZHNXaXRoKCcvJykgPyB0ZW1wUGF0aCA6IHRlbXBQYXRoICsgJy8nO1xuICB9XG5cbiAgcHJpdmF0ZSB0b1BhdGgocGF0aFNlZ21lbnRzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZVBhdGgocGF0aFNlZ21lbnRzLmpvaW4oJy8nKSk7XG4gIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQnJlYWRjcnVtYnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYnJlYWRjcnVtYnMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48ZGl2IGNsYXNzPVwiYmNpLWhlYWRlci1jb250YWluZXJcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGVhZGVyPy5sZW5ndGg7XCI+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZVwiPnt7aGVhZGVyfX08L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGVudFwiPlxuICAgIDxiY2ktYnJlYWRjcnVtYnMgZnhIaWRlLmx0LW1kPVwidHJ1ZVwiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJzXCI+XG4gICAgICA8YmNpLWJyZWFkY3J1bWIgKm5nRm9yPVwibGV0IGJyZWFkY3J1bWIgb2YgYnJlYWRjcnVtYlNlcnZpY2UuYnJlYWRjcnVtYnMgfCBhc3luYzsgbGV0IGxhc3QgPSBsYXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWN1cnJlbnRdPVwibGFzdCA/ICdwYWdlJyA6IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiYnJlYWRjcnVtYi50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW3VybF09XCJicmVhZGNydW1iLnVybFwiPlxuICAgICAgPC9iY2ktYnJlYWRjcnVtYj5cbiAgICA8L2JjaS1icmVhZGNydW1icz5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICA8YSBjbGFzcz1cImhlYWRlci1sb2dvXCIgKGNsaWNrKT1cIm9uTG9nb0NsaWNrZWQoKVwiPlxuICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1nL2Jvc2NoLWxvZ28tb25seS5zdmdcIiBhbHQ9XCJCb3NjaCBJbnZlbnRlZCBGb3IgTGlmZSBMb2dvXCI+XG4gIDwvYT5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLnN1cGVyZ3JhcGhpY3t6LWluZGV4OjEwfS5iY2ktaGVhZGVyLWNvbnRhaW5lcntwYWRkaW5nOjAgMzJweDtoZWlnaHQ6NjRweDtib3JkZXItd2lkdGg6MCAwIDFweDtib3JkZXItY29sb3I6I2RmZGZlMDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czowfS5iY2ktaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLXRpdGxle21hcmdpbi1yaWdodDozMnB4O2ZvbnQtZmFtaWx5OkJvc2NoLVNhbnM7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc2l6ZToyOHB4fS5iY2ktaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLWNvbnRlbnR7bWFyZ2luLXJpZ2h0OjMycHh9LmJjaS1oZWFkZXItY29udGFpbmVyIC5oZWFkZXItbG9nb3ttYXJnaW4tbGVmdDphdXRvO2hlaWdodDoxMDAlO3dpZHRoOjE0MHB4fS5iY2ktaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLWxvZ28gaW1ne2hlaWdodDoxMDAlO3dpZHRoOjE0MHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIEJjaUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcHVibGljIGhlYWRlciA9ICcnO1xuICBASW5wdXQoKSBwdWJsaWMgbG9nb1JvdXRlID0gJy8nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBicmVhZGNydW1iU2VydmljZTogQnJlYWRjcnVtYnNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uTG9nb0NsaWNrZWQoKSB7XG4gICAgLy8gVE9ETzogQ3Vyc29yOnBvaW50ZXIgd2hlbiBsb2dvTGluayBvciBsb2dvUm91dGUgaXMgc2V0XG4gICAgaWYgKHRoaXMubG9nb1JvdXRlKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5sb2dvUm91dGVdKTtcbiAgICB9XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJjaUxvYWRlclNlcnZpY2Uge1xuXG4gIHByaXZhdGUgbG9hZGVyU3ViamVjdCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHB1YmxpYyBsb2FkZXJTdGF0ZSA9IDxPYnNlcnZhYmxlPGJvb2xlYW4+PiB0aGlzLmxvYWRlclN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgbG9hZGVyUXVldWVFbGVtZW50czogQXJyYXk8TG9hZGVyUXVldWVFbGVtZW50PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgc2hvd1Byb2dyZXNzQmFyKCk6IExvYWRlclF1ZXVlRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudDogTG9hZGVyUXVldWVFbGVtZW50ID0ge1xuICAgICAgaWQ6IERhdGUubm93KClcbiAgICB9O1xuICAgIHRoaXMubG9hZGVyUXVldWVFbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIHRoaXMubG9hZGVyU3ViamVjdC5uZXh0KHRydWUpO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgaGlkZVByb2dyZXNzQmFyKGVsZW1lbnQ6IExvYWRlclF1ZXVlRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5sb2FkZXJRdWV1ZUVsZW1lbnRzLmZpbmRJbmRleChlbCA9PiBlbGVtZW50LmlkID09PSBlbC5pZCk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubG9hZGVyUXVldWVFbGVtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5sb2FkZXJRdWV1ZUVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5sb2FkZXJTdWJqZWN0Lm5leHQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkZXJRdWV1ZUVsZW1lbnQge1xuICBpZDogbnVtYmVyO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY2lMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9iY2ktbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktbG9hZGVyJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPGRpdiBjbGFzcz1cImxvYWRlci1iYWNrZ3JvdW5kLWNvbnRhaW5lclwiICpuZ0lmPVwic2hvd1wiPlxuICA8ZGl2IGNsYXNzPVwibG9hZGVyLWJhY2tkcm9wXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJsb2FkZXItb3ZlcmxheVwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cbiAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltZy9sb2FkaW5nLmdpZlwiPlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLmxvYWRlci1oaWRkZW57dmlzaWJpbGl0eTpoaWRkZW59LmxvYWRlci1vdmVybGF5e2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMDA7Y29udGFpbjpzdHJpY3R9LmxvYWRlci1iYWNrZHJvcHtsZWZ0OjA7dG9wOjA7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7b3BhY2l0eTouMzstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBCY2lMb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIHNob3cgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJjaUxvYWRlclNlcnZpY2U6IEJjaUxvYWRlclNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmNpTG9hZGVyU2VydmljZS5sb2FkZXJTdGF0ZS5waXBlKHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpKS5zdWJzY3JpYmUoKHN0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLnNob3cgPSBzdGF0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBMb2NhdGlvbiwgTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRXh0cmFzLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJjaVNpZGViYXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzaWRlYmFyU3RhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0cnVlKTtcbiAgcHJpdmF0ZSBzaWRlYmFyVmlzaWJpbGl0eSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIGxvY2F0aW9uU3RyYXRlZ3k6IExvY2F0aW9uU3RyYXRlZ3kpIHtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTaWRlYmFyU3RhdGUob3BlbjogYm9vbGVhbikge1xuICAgIHRoaXMuc2lkZWJhclN0YXRlJC5uZXh0KG9wZW4pO1xuICB9XG5cbiAgcHVibGljIHNldFNpZGViYXJWaXNpYmlsaXR5KHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNpZGViYXJWaXNpYmlsaXR5JC5uZXh0KHZpc2libGUpO1xuICB9XG5cbiAgcHVibGljIGdldFNpZGViYXJTdGF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlYmFyU3RhdGUkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHVibGljIGdldFNpZGViYXJWaXNpYmlsaXR5KCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnNpZGViYXJWaXNpYmlsaXR5JC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIFVSTCBlaXRoZXIgaW50ZXJuYWxseSAod2l0aCBBbmd1bGFyIFJvdXRlcikgb3IgZXh0ZXJuYWxseSAod2luZG93LmxvY2F0aW9uKS5cbiAgICogSWYgdGhlcmUgaXMgbm90IGh0dHAgcHJvdG9jb2wgb3IgaWYgdGhlIG9yaWdpbiBpcyB0aGUgc2FtZSBhbmQgdGhlIHJvdXRlIGlzIHBhcnQgb2YgdGhlIHJvdXRlciBjb25maWcsIG5hdmlnYXRlIGludGVybmFsbHkuXG4gICAqIEVsc2UsIG5hdmlnYXRlIGV4dGVybmFsbHkuXG4gICAqIEBwYXJhbSB1cmwgQWJzb2x1dGUgVVJMIG9yIGludGVybmFsIHJvdXRlLlxuICAgKiBAcGFyYW0gZXh0cmFzIHtAbGluayBOYXZpZ2F0aW9uRXh0cmFzfVxuICAgKiBAcmV0dXJucyBUaGUge0BsaW5rIHJvdXRlcn0gbmF2aWdhdGUgcmV0dXJuXG4gICAqL1xuICBwdWJsaWMgbmF2aWdhdGVUb1VybCh1cmw6IHN0cmluZywgZXh0cmFzPzogTmF2aWdhdGlvbkV4dHJhcyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGxldCB1cmxPYmplY3Q7XG4gICAgdHJ5IHtcbiAgICAgIHVybE9iamVjdCA9IG5ldyBVUkwodXJsKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBhc3N1bWluZyBUeXBlRXJyb3IsIEludmFsaWQgVVJMIC0+IG5hdmlnYXRlIGludGVybmFsbHkgZGlyZWN0bHkgdG8gVVJMXG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3VybF0sIGV4dHJhcyk7XG4gICAgfVxuICAgIGlmICghIXVybE9iamVjdCkge1xuICAgICAgbGV0IGJhc2VIcmVmID0gdGhpcy5sb2NhdGlvblN0cmF0ZWd5LmdldEJhc2VIcmVmKCk7XG4gICAgICBiYXNlSHJlZiA9IGJhc2VIcmVmLmVuZHNXaXRoKCcvJykgPyBiYXNlSHJlZiA6IGAke2Jhc2VIcmVmfS9gO1xuICAgICAgaWYgKHVybE9iamVjdC5vcmlnaW4gPT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gJiYgdXJsT2JqZWN0LnBhdGhuYW1lLnN0YXJ0c1dpdGgoYmFzZUhyZWYpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdXJsT2JqZWN0LnBhdGhuYW1lXSwgZXh0cmFzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsT2JqZWN0LmhyZWY7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2SXRlbSB9IGZyb20gJy4vc2lkZWJhci1uYXYtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBCY2lTaWRlYmFyU2VydmljZSB9IGZyb20gJy4vYmNpLXNpZGViYXIuc2VydmljZSc7XG5pbXBvcnQgeyBNYXRTaWRlbmF2IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1zaWRlYmFyJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cIlwiPlxuXG5cbiAgPG1hdC1zaWRlbmF2ICNzaWRlbmF2IG1vZGU9XCJzaWRlXCIgW2Rpc2FibGVDbG9zZV09XCJ0cnVlXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj48IS0tW29wZW5lZF09XCJpc09wZW4oKSAmJiBpc1Zpc2libGUoKVwiLS0+XG4gICAgPGRpdiBjbGFzcz1cInNpZGVuYXYtaGVhZGVyXCI+XG4gICAgICA8aDE+e3thcHBsaWNhdGlvblRpdGxlfX08L2gxPlxuICAgICAgPGRpdiBjbGFzcz1cImJ1cmdlclwiIChjbGljayk9XCJ0b2dnbGVTaWRlTmF2aWdhdGlvbkJhcigpO1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyLWxpbmVcIiBbY2xhc3MuYnVyZ2VyVG9wXT1cImlzT3BlbigpXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXJnZXItbGluZVwiIFtjbGFzcy5idXJnZXJNaWRkbGVdPVwiaXNPcGVuKClcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1cmdlci1saW5lXCIgW2NsYXNzLmJ1cmdlckJvdHRvbV09XCJpc09wZW4oKVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGJjaS1zaWRlYmFyLW5hdi1saXN0IFtuYXZJdGVtc109XCJzaWRlYmFyTGlua3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInNpZGViYXJMaW5rcyAmJiBzaWRlYmFyTGlua3MubGVuZ3RoID4gMFwiPjwvYmNpLXNpZGViYXItbmF2LWxpc3Q+XG5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJiY2ktc2lkZWJhci1mb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gIDwvbWF0LXNpZGVuYXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCIgZnhMYXlvdXQ9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2lkZW5hdi1oZWFkZXIgY2xvc2VkLXNpZGViYXJcIiAqbmdJZj1cIiFpc09wZW4oKSAmJiBpc1Zpc2libGUoKVwiIChjbGljayk9XCJ0b2dnbGVTaWRlTmF2aWdhdGlvbkJhcigpO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImJ1cmdlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyLWxpbmVcIiBbY2xhc3MuYnVyZ2VyVG9wXT1cImlzT3BlbigpXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXJnZXItbGluZVwiIFtjbGFzcy5idXJnZXJNaWRkbGVdPVwiaXNPcGVuKClcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1cmdlci1saW5lXCIgW2NsYXNzLmJ1cmdlckJvdHRvbV09XCJpc09wZW4oKVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJjaS1jb250ZW50LWNvbnRhaW5lci1tYWluXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCJncm93XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XG5gLFxuICBzdHlsZXM6IFtgQGNoYXJzZXQgXCJVVEYtOFwiOy8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovbWF0LXNpZGVuYXYtY29udGFpbmVye2hlaWdodDoxMDB2aH1tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXZ7YmFja2dyb3VuZC1jb2xvcjojNTI1ZjZiO21hcmdpbi10b3A6MTZweDt3aWR0aDozMDBweH1tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVuYXYtaXRlbXN7cGFkZGluZzowO2JvcmRlci13aWR0aDowIDAgMXB4O2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4wNSk7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6MH1tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVuYXYtaXRlbXMgbGl7d2lkdGg6MTAwJTttYXJnaW46MDtib3JkZXItd2lkdGg6MXB4IDAgMDtib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMDUpO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjB9bWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlbmF2LWl0ZW1zIC5oZWFkZXItY29udGFpbmVyLG1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZW5hdi1pdGVtcyAuc2lkZW5hdi1pdGVte3BhZGRpbmc6MCAxNnB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEwMCU7bGluZS1oZWlnaHQ6NDhweDtmb250LWZhbWlseTpCb3NjaC1TYW5zO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTZweDtib3JkZXItd2lkdGg6MCAwIDAgNHB4O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czowfW1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZW5hdi1pdGVtcyAuaGVhZGVyLWNvbnRhaW5lcjpob3ZlcixtYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVuYXYtaXRlbXMgLnNpZGVuYXYtaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA1KTtjb2xvcjojYmZjMGMyfW1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZW5hdi1pdGVtcyAuaGVhZGVyLWNvbnRhaW5lci5hY3RpdmUsbWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlbmF2LWl0ZW1zIC5zaWRlbmF2LWl0ZW0uYWN0aXZle2JvcmRlci1jb2xvcjojMDA4ZWNmfW1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZW5hdi1pdGVtcyAuaGVhZGVyLWNvbnRhaW5lci5oYXMtaXRlbXM6OmJlZm9yZSxtYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVuYXYtaXRlbXMgLnNpZGVuYXYtaXRlbS5oYXMtaXRlbXM6OmJlZm9yZXtmb250LWZhbWlseTpCb3NjaC1JYztjb250ZW50Olwiw6/ChMKdXCI7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC1zaXplOjI0cHh9bWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlbmF2LXN1Yml0ZW1ze3BhZGRpbmc6MCAwIDAgMTZweH1tYXQtc2lkZW5hdi1jb250YWluZXIgOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWNvbnRlbnR7b3ZlcmZsb3c6aGlkZGVufW1hdC1zaWRlbmF2LWNvbnRhaW5lciAuc2lkZW5hdi1oZWFkZXJ7Y3Vyc29yOmRlZmF1bHQ7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjY0cHg7Ym9yZGVyLXdpZHRoOjAgMCAxcHg7Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjA1KTtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czowfW1hdC1zaWRlbmF2LWNvbnRhaW5lciAuc2lkZW5hdi1oZWFkZXIuY2xvc2VkLXNpZGViYXJ7bWFyZ2luLXRvcDoxNnB4O3dpZHRoOjUwcHg7aGVpZ2h0OjEwMHZoO2JhY2tncm91bmQtY29sb3I6IzUyNWY2YjtjdXJzb3I6cG9pbnRlcn1tYXQtc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtaGVhZGVyIC5idXJnZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDttYXJnaW46MjVweCAxNnB4IDAgMDtjdXJzb3I6cG9pbnRlcn1tYXQtc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtaGVhZGVyIC5idXJnZXIgLmJ1cmdlci1saW5le2hlaWdodDoxcHg7d2lkdGg6MjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bWFyZ2luLWJvdHRvbTo2cHg7dHJhbnNpdGlvbjouNHN9bWF0LXNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWhlYWRlciAuYnVyZ2VyIC5idXJnZXItbGluZS5idXJnZXJNaWRkbGV7b3BhY2l0eTowfW1hdC1zaWRlbmF2LWNvbnRhaW5lciAuc2lkZW5hdi1oZWFkZXIgLmJ1cmdlciAuYnVyZ2VyLWxpbmUuYnVyZ2VyVG9wey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoNHB4KSB0cmFuc2xhdGVYKC00cHgpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKDRweCkgdHJhbnNsYXRlWCgtNHB4KTtvcGFjaXR5OjEhaW1wb3J0YW50fW1hdC1zaWRlbmF2LWNvbnRhaW5lciAuc2lkZW5hdi1oZWFkZXIgLmJ1cmdlciAuYnVyZ2VyLWxpbmUuYnVyZ2VyQm90dG9tey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWCgtNi41cHgpIHRyYW5zbGF0ZVkoLTYuNXB4KTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVYKC02LjVweCkgdHJhbnNsYXRlWSgtNi41cHgpO29wYWNpdHk6MSFpbXBvcnRhbnR9bWF0LXNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWhlYWRlciBoMXtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46MCAwIDAgMTZweDtsaW5lLWhlaWdodDo2NHB4O3doaXRlLXNwYWNlOm5vd3JhcDt3aWR0aDoyMjBweDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztjb2xvcjojYmZjMGMyO2ZvbnQtZmFtaWx5OkJvc2NoLVNhbnM7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc2l6ZToyMHB4fS5jb250ZW50LWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MH0uYmNpLWNvbnRlbnQtY29udGFpbmVyLW1haW57bWFyZ2luOjE2cHggMCAwO292ZXJmbG93OmhpZGRlbn1gXVxufSlcbmV4cG9ydCBjbGFzcyBCY2lTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwdWJsaWMgYXBwbGljYXRpb25UaXRsZSA9ICcnO1xuICBASW5wdXQoKSBwdWJsaWMgc2lkZWJhckxpbmtzOiBTaWRlYmFyTmF2SXRlbVtdO1xuICBAVmlld0NoaWxkKCdzaWRlbmF2JykgcHJpdmF0ZSBzaWRlbmF2OiBNYXRTaWRlbmF2O1xuICBwcml2YXRlIG9wZW4gPSB0cnVlO1xuICBwcml2YXRlIHZpc2libGUgPSB0cnVlO1xuICBwcml2YXRlIGNvbXBvbmVudERlc3Ryb3llZCQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IEJjaVNpZGViYXJTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBUT0RPOiByZW1lbWJlciBzaWRlYmFyIHN0YXRlIChvcGVuZWQvY2xvc2VkKSBpbiBzdG9yYWdlIHByb3ZpZGVyIGFuZCBsb2FkIGhlcmVcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLmdldFNpZGViYXJTdGF0ZSgpLnBpcGUodGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCkpLnN1YnNjcmliZShzdGF0ZSA9PiB7XG4gICAgICB0aGlzLm9wZW4gPSBzdGF0ZTtcbiAgICAgIGlmIChzdGF0ZSAmJiB0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5zaWRlbmF2Lm9wZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2lkZW5hdi5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS5nZXRTaWRlYmFyVmlzaWJpbGl0eSgpLnBpcGUodGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCkpLnN1YnNjcmliZSh2aXNpYmxlID0+IHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICBpZiAodmlzaWJsZSAmJiB0aGlzLm9wZW4pIHtcbiAgICAgICAgdGhpcy5zaWRlbmF2Lm9wZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2lkZW5hdi5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLm5leHQoKTtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGVOYXZpZ2F0aW9uQmFyKCkge1xuICAgIHRoaXMuc2lkZWJhclNlcnZpY2Uuc2V0U2lkZWJhclN0YXRlKCF0aGlzLm9wZW4pO1xuICB9XG5cbiAgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9wZW47XG4gIH1cblxuICBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZTtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkl0ZW0gfSBmcm9tICcuLi9iY2ktc2lkZWJhci9zaWRlYmFyLW5hdi1pdGVtLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLXNpZGViYXItZm9vdGVyJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPGRpdiBjbGFzcz1cImJjaS1zaWRlYmFyLWZvb3Rlci1jb250YWluZXJcIj5cbjwvZGl2PlxuPGJjaS1zaWRlYmFyLW5hdi1saXN0IFtuYXZJdGVtc109XCJzaWRlYmFyRm9vdGVyTGlua3NcIj48L2JjaS1zaWRlYmFyLW5hdi1saXN0PlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovOmhvc3R7bWFyZ2luLXRvcDphdXRvfS5iY2ktc2lkZWJhci1mb290ZXItY29udGFpbmVye2JvcmRlci13aWR0aDoxcHggMCAwO2JvcmRlci1jb2xvcjojZmZmO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjA7bWFyZ2luOjE2cHggMTZweCAwO3dpZHRoOmNhbGMoMTAwJSAtIDMycHgpfWBdXG59KVxuZXhwb3J0IGNsYXNzIEJjaVNpZGViYXJGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgc2lkZWJhckZvb3RlckxpbmtzOiBTaWRlYmFyTmF2SXRlbVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbG9zYWJsZU92ZXJsYXlDb21wb25lbnRNb2RlbCB9IGZyb20gJy4vY2xvc2FibGUtb3ZlcmxheS1jb21wb25lbnQubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdkl0ZW0ge1xuICBpZD86IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xuICBxdWVyeVBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHBvc2l0aW9uPzogbnVtYmVyO1xuICBpdGVtcz86IFNpZGViYXJOYXZJdGVtW107XG4gIGljb24/OiBzdHJpbmc7XG4gIGNiPzogKCkgPT4gdm9pZDtcbiAgcm91dGVyTGlua0FjdGl2ZU9wdGlvbnM/OiB7XG4gICAgZXhhY3Q6IGJvb2xlYW47XG4gIH07XG4gIG92ZXJsYXk/OiB7IGNvbXBvbmVudDogVHlwZTxDbG9zYWJsZU92ZXJsYXlDb21wb25lbnRNb2RlbDxhbnk+PiwgY29uZmlnOiBhbnkgfTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktc2lkZWJhci1leHBhbmRlcicsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxkaXYgY2xhc3M9XCJtb2R1bGUtY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCIgKGNsaWNrKT1cInRvZ2dsZVNpZGViYXIoKVwiPlxuICAgIHt7aGVhZGVyfX1cbiAgICA8aSBjbGFzcz1cImV4cGFuZGVyLWljb25cIiBbbmdDbGFzc109XCJ7J2V4cGFuZGVkJzogZXhwYW5kZWR9XCI+PC9pPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwieydleHBhbmRlZCc6IGV4cGFuZGVkfVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2BAY2hhcnNldCBcIlVURi04XCI7LyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8uaGVhZGVyLWNvbnRhaW5lcntwYWRkaW5nOjAgMTZweDtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxMDAlO2xpbmUtaGVpZ2h0OjQ4cHg7dHJhbnNpdGlvbjphbGwgLjJzIGVhc2U7Y29sb3I6I2ZmZjtjdXJzb3I6aGFuZDtmb250LWZhbWlseTpCb3NjaC1TYW5zO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTZweDtib3JkZXItd2lkdGg6MCAwIDAgNHB4O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czowfS5oZWFkZXItY29udGFpbmVyOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDUpO2NvbG9yOiNiZmMwYzJ9LmhlYWRlci1jb250YWluZXIgLmV4cGFuZGVyLWljb257cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MTZweDt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0LC13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLW91dH0uaGVhZGVyLWNvbnRhaW5lciAuZXhwYW5kZXItaWNvbjpiZWZvcmV7Zm9udC1mYW1pbHk6Qm9zY2gtSWM7Y29udGVudDpcIsOvwoTCnVwiO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtc2l6ZToyMHB4fS5oZWFkZXItY29udGFpbmVyIC5leHBhbmRlci1pY29uLmV4cGFuZGVke2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2UtaW47dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2UtaW47dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2UtaW4sLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2UtaW47LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0uY29udGVudC1jb250YWluZXJ7bWF4LWhlaWdodDowO292ZXJmbG93OmhpZGRlbjt0cmFuc2l0aW9uOm1heC1oZWlnaHQgLjJzIGVhc2Utb3V0fS5jb250ZW50LWNvbnRhaW5lci5leHBhbmRlZHttYXgtaGVpZ2h0OjIwMDBweDt0cmFuc2l0aW9uOm1heC1oZWlnaHQgLjZzIGVhc2UtaW59YF1cbn0pXG5leHBvcnQgY2xhc3MgQmNpU2lkZWJhckV4cGFuZGVyQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBoZWFkZXIgPSAnJztcbiAgQElucHV0KCkgZXhwYW5kZWQgPSBmYWxzZTtcblxuICB0b2dnbGVTaWRlYmFyKCkge1xuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudFJlZiwgSW5qZWN0b3IsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2SXRlbSB9IGZyb20gJy4uL2JjaS1zaWRlYmFyL3NpZGViYXItbmF2LWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgQmNpU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuLi9iY2ktc2lkZWJhci9iY2ktc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IENka092ZXJsYXlPcmlnaW4sIE92ZXJsYXksIE92ZXJsYXlDb25maWcgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENsb3NhYmxlT3ZlcmxheUNvbXBvbmVudE1vZGVsIH0gZnJvbSAnLi4vYmNpLXNpZGViYXIvY2xvc2FibGUtb3ZlcmxheS1jb21wb25lbnQubW9kZWwnO1xuXG4vKipcbiAqIFRpbWUgYW5kIHRpbWluZyBjdXJ2ZSBmb3IgZXhwYW5zaW9uIHBhbmVsIGFuaW1hdGlvbnMuXG4gKiovXG5leHBvcnQgY29uc3QgU0lERU5BVl9MSU5LU19BTklNQVRJT05fVElNSU5HID0gJzIyNW1zIGN1YmljLWJlemllcigwLjQsMC4wLDAuMiwxKSc7XG5cbmV4cG9ydCBjb25zdCBJVEVNX0VYUEFOREVEX1NUQVRFUyA9IHsgZXhwYW5kZWQ6ICdleHBhbmRlZCcsIGNvbGxhcHNlZDogJ2NvbGxhcHNlZCcgfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLXNpZGViYXItbmF2LWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bWF0LWxpc3QtaXRlbSBbc3R5bGUucG9zaXRpb25dPVwiJ3JlbGF0aXZlJ1wiIFtjbGFzcy5hY3RpdmVdPVwiaXNBY3RpdmVSb3V0ZShuYXZJdGVtKVwiIChjbGljayk9XCJvbkZpcnN0TGV2ZWxDbGljaygpXCJcbiAgICAgICAgICAgICAgIGNkay1vdmVybGF5LW9yaWdpbiAjcG9wb3Zlck9yaWdpbj1cImNka092ZXJsYXlPcmlnaW5cIj5cbiAgPG1hdC1pY29uIG1hdExpc3RJY29uIGZvbnRTZXQ9XCJib3NjaFwiIFtmb250SWNvbl09XCJuYXZJdGVtPy5pY29uXCIgKm5nSWY9XCJuYXZJdGVtPy5pY29uXCJcbiAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmstaWNvblwiPjwvbWF0LWljb24+XG4gIDxwIG1hdExpbmU+e3sgbmF2SXRlbT8udGl0bGUgfX08L3A+XG4gIDxtYXQtaWNvbiAqbmdJZj1cImhhc0l0ZW1zKClcIiBmb250U2V0PVwiYm9zY2hcIiBmb250SWNvbj1cIkJvc2NoLUljLWFycm93LWV4cGFuZC1yaWdodFwiIGNsYXNzPVwiZXhwYW5kLWljb25cIlxuICAgICAgICAgICAgW0BpbmRpY2F0b3JSb3RhdGVdPVwiZ2V0RXhwYW5kZWRTdGF0ZSgpXCI+PC9tYXQtaWNvbj5cbjwvbWF0LWxpc3QtaXRlbT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNJdGVtcygpXCI+XG4gIDxkaXYgW0Bib2R5RXhwYW5zaW9uXT1cImdldEV4cGFuZGVkU3RhdGUoKVwiIGNsYXNzPVwic3ViLW5hdi1saW5rcy1jb250YWluZXJcIiBbY2xhc3Muc3ViLW5hdi1saW5rcy1leHBhbmRlZF09XCJleHBhbmRlZFwiPlxuICAgIDwhLS08bmctY29udGVudCBzZWxlY3Q9XCJiY2ktc2lkZWJhci1uYXYtaXRlbVwiID48L25nLWNvbnRlbnQ+LS0+XG4gICAgPG1hdC1saXN0LWl0ZW0gY2xhc3M9XCJzdWItbmF2LWxpbmtcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBuYXZJdGVtPy5pdGVtc1wiIChjbGljayk9XCJvblNlY29uZExldmVsQ2xpY2soaXRlbSlcIlxuICAgICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiaXNBY3RpdmVSb3V0ZShpdGVtKVwiPlxuICAgICAgPHAgbWF0TGluZT57eyBpdGVtPy50aXRsZSB9fTwvcD5cbiAgICA8L21hdC1saXN0LWl0ZW0+XG4gIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG5gLFxuICBzdHlsZXM6IFtgQGNoYXJzZXQgXCJVVEYtOFwiOy8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovOmhvc3R7ZGlzcGxheTpibG9jaztib3JkZXItd2lkdGg6MCAwIDFweDtib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMDUpO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjB9Omhvc3Q6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNSl9Omhvc3Q6aG92ZXIgbWF0LWljb24sOmhvc3Q6aG92ZXIgcHtjb2xvcjojYmZjMGMyfTpob3N0IC5tYXQtbGlzdC1pdGVte2JvcmRlci13aWR0aDowIDAgMCA0cHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjB9Omhvc3QgLm1hdC1saXN0LWl0ZW0uYWN0aXZle2JvcmRlci1jb2xvcjojMDA4ZWNmfTpob3N0IC5tYXQtbGlzdC1pdGVtLmhhcy1pdGVtczo6YmVmb3Jle2ZvbnQtZmFtaWx5OkJvc2NoLUljO2NvbnRlbnQ6XCLDr8KEwp1cIjtmb250LXN0eWxlOm5vcm1hbDtmb250LXNpemU6MjRweH06aG9zdCAubWF0LWxpc3QtaXRlbS5zdWItbmF2LWxpbmt7bWFyZ2luLWxlZnQ6MzZweH06aG9zdCAubWF0LWxpc3QtaXRlbSBtYXQtaWNvbiw6aG9zdCAubWF0LWxpc3QtaXRlbSBwe2NvbG9yOiNmZmZ9Omhvc3QgLm1hdC1saXN0LWl0ZW0gbWF0LWljb257Zm9udC1zaXplOjIwcHh9Omhvc3QgLm1hdC1saXN0LWl0ZW0gcHtmb250LWZhbWlseTpCb3NjaC1TYW5zO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTZweH06aG9zdCAubWF0LWxpc3QtaXRlbSA6Om5nLWRlZXAgLm1hdC1saXN0LXRleHR7cGFkZGluZzowIDhweH06aG9zdCAubWF0LWxpc3QtaXRlbSA6Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW0tY29udGVudHtwYWRkaW5nOjAgMTZweCAwIDhweH0uc3ViLW5hdi1saW5rcy1leHBhbmRlZCAuc3ViLW5hdi1saW5rcy1jb250YWluZXJ7b3ZlcmZsb3c6dmlzaWJsZX0uc3ViLW5hdi1saW5rcy1jb250YWluZXIsLnN1Yi1uYXYtbGlua3MtY29udGFpbmVyLm5nLWFuaW1hdGluZ3tvdmVyZmxvdzpoaWRkZW59YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdib2R5RXhwYW5zaW9uJywgW1xuICAgICAgc3RhdGUoSVRFTV9FWFBBTkRFRF9TVEFURVMuY29sbGFwc2VkLCBzdHlsZSh7IGhlaWdodDogJzBweCcsIHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pKSxcbiAgICAgIHN0YXRlKElURU1fRVhQQU5ERURfU1RBVEVTLmV4cGFuZGVkLCBzdHlsZSh7IGhlaWdodDogJyonLCB2aXNpYmlsaXR5OiAndmlzaWJsZScgfSkpLFxuICAgICAgdHJhbnNpdGlvbihgJHtJVEVNX0VYUEFOREVEX1NUQVRFUy5leHBhbmRlZH0gPD0+ICR7SVRFTV9FWFBBTkRFRF9TVEFURVMuY29sbGFwc2VkfWAsIGFuaW1hdGUoU0lERU5BVl9MSU5LU19BTklNQVRJT05fVElNSU5HKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignaW5kaWNhdG9yUm90YXRlJywgW1xuICAgICAgc3RhdGUoSVRFTV9FWFBBTkRFRF9TVEFURVMuY29sbGFwc2VkLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScgfSkpLFxuICAgICAgc3RhdGUoSVRFTV9FWFBBTkRFRF9TVEFURVMuZXhwYW5kZWQsIHN0eWxlKHsgdHJhbnNmb3JtOiAncm90YXRlKDkwZGVnKScgfSkpLFxuICAgICAgdHJhbnNpdGlvbihgJHtJVEVNX0VYUEFOREVEX1NUQVRFUy5leHBhbmRlZH0gPD0+ICR7SVRFTV9FWFBBTkRFRF9TVEFURVMuY29sbGFwc2VkfWAsIGFuaW1hdGUoU0lERU5BVl9MSU5LU19BTklNQVRJT05fVElNSU5HKSksXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCY2lTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbmF2SXRlbTogU2lkZWJhck5hdkl0ZW07XG4gIHB1YmxpYyBleHBhbmRlZCA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ3BvcG92ZXJPcmlnaW4nKSBwb3BvdmVyT3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IEJjaVNpZGViYXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgb3ZlcmxheTogT3ZlcmxheSwgcHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZVJvdXRlKHRoaXMubmF2SXRlbSkpIHtcbiAgICAgIHRoaXMudG9nZ2xlRXhwYW5kZWQoKTtcbiAgICB9XG4gIH1cblxuICBoYXNJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZJdGVtLml0ZW1zICYmIHRoaXMubmF2SXRlbS5pdGVtcy5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSByb3V0ZSBvZiB0aGlzIHtAbGluayBuYXZJdGVtfSBpcyBpbiB0aGUgYWN0aXZlIHJvdXRlIChpbmNsdWRpbmcgcGFyZW50IHJvdXRlcywgZXhjbHVkaW5nIHRoZSBob21lIHJvdXRlKS5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiBpdCdzIHRoZSBhY3RpdmUgcm91dGUuXG4gICAqL1xuICBpc0FjdGl2ZVJvdXRlKG5hdkl0ZW06IFNpZGViYXJOYXZJdGVtKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZXhhY3QgPSBuYXZJdGVtLnJvdXRlckxpbmtBY3RpdmVPcHRpb25zID8gbmF2SXRlbS5yb3V0ZXJMaW5rQWN0aXZlT3B0aW9ucy5leGFjdCA6IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5nZXRSb3V0ZUZyb21VcmwobmF2SXRlbS51cmwpO1xuICAgIHJldHVybiAhIXJvdXRlICYmIHRoaXMucm91dGVyLmlzQWN0aXZlKHJvdXRlLCBleGFjdCk7XG4gIH1cblxuICBvbkZpcnN0TGV2ZWxDbGljaygpIHtcbiAgICBpZiAodGhpcy5oYXNJdGVtcygpKSB7XG4gICAgICB0aGlzLnRvZ2dsZUV4cGFuZGVkKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5hdkl0ZW0udXJsKSB7XG4gICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLm5hdmlnYXRlVG9VcmwodGhpcy5uYXZJdGVtLnVybCwgeyBxdWVyeVBhcmFtczogdGhpcy5uYXZJdGVtLnF1ZXJ5UGFyYW1zIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uYXZJdGVtLmNiKSB7XG4gICAgICB0aGlzLm5hdkl0ZW0uY2IoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmF2SXRlbS5vdmVybGF5KSB7XG4gICAgICB0aGlzLm9wZW5PdmVybGF5KCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWNvbmRMZXZlbENsaWNrKG5hdkl0ZW06IFNpZGViYXJOYXZJdGVtKSB7XG4gICAgaWYgKG5hdkl0ZW0udXJsKSB7XG4gICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLm5hdmlnYXRlVG9VcmwobmF2SXRlbS51cmwsIHsgcXVlcnlQYXJhbXM6IG5hdkl0ZW0ucXVlcnlQYXJhbXMgfSk7XG4gICAgfSBlbHNlIGlmIChuYXZJdGVtLmNiKSB7XG4gICAgICBuYXZJdGVtLmNiKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXhwYW5kZWRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZCA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJztcbiAgfVxuXG4gIG9wZW5PdmVybGF5KCkge1xuICAgIGNvbnN0IHN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcbiAgICAgIC5jb25uZWN0ZWRUbyhcbiAgICAgICAgdGhpcy5wb3BvdmVyT3JpZ2luLmVsZW1lbnRSZWYsXG4gICAgICAgIHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KTtcblxuICAgIGNvbnN0IGNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHN0cmF0ZWd5LFxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICBiYWNrZHJvcENsYXNzOiAnY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnXG4gICAgfSk7XG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoY29uZmlnKTtcblxuICAgIGNvbnN0IG92ZXJsYXlDb21wb25lbnQgPSB0aGlzLm5hdkl0ZW0ub3ZlcmxheS5jb21wb25lbnQ7XG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHRoaXMubmF2SXRlbS5vdmVybGF5LmNvbmZpZztcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPENsb3NhYmxlT3ZlcmxheUNvbXBvbmVudE1vZGVsPHR5cGVvZiBvdmVybGF5Q29uZmlnPj4gPSBvdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKG92ZXJsYXlDb21wb25lbnQsIHRoaXMudmlld0NvbnRhaW5lclJlZikpO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb25maWcgPSBvdmVybGF5Q29uZmlnO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5vbkNsb3NlLnN1YnNjcmliZSgoKSA9PiBvdmVybGF5UmVmLmRldGFjaCgpKTtcbiAgICBvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gb3ZlcmxheVJlZi5kZXRhY2goKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFJvdXRlRnJvbVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHVybE9iamVjdDtcbiAgICB0cnkge1xuICAgICAgdXJsT2JqZWN0ID0gbmV3IFVSTCh1cmwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGFzc3VtaW5nIFR5cGVFcnJvciwgSW52YWxpZCBVUkwgLT4gbmF2aWdhdGUgaW50ZXJuYWxseSBkaXJlY3RseSB0byBVUkxcbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIGlmICghIXVybE9iamVjdCkge1xuICAgICAgaWYgKHVybE9iamVjdC5vcmlnaW4gPT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgICAgLy8gVE9ETzogY29uc2lkZXIgYmFzZUhyZWZcbiAgICAgICAgcmV0dXJuIHVybE9iamVjdC5wYXRobmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vIGludGVybmFsIHJvdXRlXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZUV4cGFuZGVkKCkge1xuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2SXRlbSB9IGZyb20gJy4uL2JjaS1zaWRlYmFyL3NpZGViYXItbmF2LWl0ZW0ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktc2lkZWJhci1uYXYtbGlzdCcsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxtYXQtbmF2LWxpc3Q+XG4gIDxiY2ktc2lkZWJhci1uYXYtaXRlbSAqbmdGb3I9XCJsZXQgbmF2SXRlbSBvZiBuYXZJdGVtc1wiIFtuYXZJdGVtXT1cIm5hdkl0ZW1cIj5cbiAgPC9iY2ktc2lkZWJhci1uYXYtaXRlbT5cbjwvbWF0LW5hdi1saXN0PlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLm1hdC1uYXYtbGlzdHtwYWRkaW5nLXRvcDowfWBdXG59KVxuZXhwb3J0IGNsYXNzIEJjaVNpZGViYXJOYXZMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIG5hdkl0ZW1zOiBTaWRlYmFyTmF2SXRlbVtdID0gW107XG4gIC8qKlxuICAgKiBAdG9kbyBlbmFibGUgc2tpcFNvcnRpbmcgdG8gYmUgc2V0IChTaWRlYmFyU2VydmljZT8gQ29uZmlndXJhdGlvbj8pXG4gICAqL1xuICBza2lwU29ydGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNraXBTb3J0aW5nICYmIGNoYW5nZXMubmF2SXRlbXMpIHtcbiAgICAgIHRoaXMubmF2SXRlbXMuc29ydCgoYSwgYikgPT4gYS5wb3NpdGlvbiAtIGIucG9zaXRpb24pO1xuICAgIH1cbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxhICpuZ0lmPVwidXJsICE9PSB1bmRlZmluZWRcIiBbcm91dGVyTGlua109XCJ1cmxcIj57e29taXR0ZWQgPyAnw6LCgMKmJyA6IHRpdGxlfX08L2E+XG48bmctY29udGFpbmVyICpuZ0lmPVwidXJsID09PSB1bmRlZmluZWRcIj57e29taXR0ZWQgPyAnw6LCgMKmJyA6IHRpdGxlfX08L25nLWNvbnRhaW5lcj5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGl0bGUnKSB0aXRsZUF0dHJpYnV0ZSA9IHVuZGVmaW5lZDtcblxuICBwcml2YXRlIF9vbWl0dGVkID0gZmFsc2U7XG5cbiAgZ2V0IG9taXR0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29taXR0ZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgb21pdHRlZCh2YWx1ZSkge1xuICAgIHRoaXMuX29taXR0ZWQgPSB2YWx1ZTtcblxuICAgIC8vIGhhbmRsZSBFeHByZXNzaW9uQ2hhbmdlZEFmdGVyQ2hlY2tlZCBpc3N1ZXMgZm9yIHRpdGxlXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRpdGxlQXR0cmlidXRlID0gdGhpcy5vbWl0dGVkID8gdGhpcy50aXRsZSA6IHVuZGVmaW5lZCk7XG4gICAgLy8gLi4uYW5kIGRpc3BsYXllZCB0aXRsZVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWJyZWFkY3J1bWJzJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5cbi8qKlxuICogRGlzcGxheSBicmVhZGNydW1icywgb3IgZWxsaXBzaXMgZm9yIGludGVybWVkaWF0ZSBicmVhZGNydW1icyBpZiB0aGVyZSBhcmUgdG9vIG1hbnkuXG4gKi9cbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5icmVhZGNydW1icycpIHRydWU7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihCcmVhZGNydW1iQ29tcG9uZW50KSBwcml2YXRlIGJyZWFkY3J1bWJzOiBRdWVyeUxpc3Q8QnJlYWRjcnVtYkNvbXBvbmVudD47XG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIGJyZWFkY3J1bWJzIHNob3duIHN0YXJ0aW5nIGZyb20gdGhlIHJvb3QuXG4gICAqL1xuICBASW5wdXQoKSBmaXhlZExlYWQgPSAxO1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBicmVhZHNjcnVtYnMgc2hvd24gc3RhcnRpbmcgZnJvbSB0aGUgY3VycmVudCBwYWdlLlxuICAgKi9cbiAgQElucHV0KCkgZml4ZWRUYWlsID0gMjtcblxuICBwcml2YXRlIGNvbXBvbmVudERlc3Ryb3llZCQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLm5leHQoKTtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJyZWFkY3J1bWJzLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuYnJlYWRjcnVtYnMuZm9yRWFjaCgoYnJlYWRjcnVtYiwgaW5kZXgpID0+IGJyZWFkY3J1bWIub21pdHRlZCA9ICF0aGlzLmlzU2hvd24oaW5kZXgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc1Nob3duKGluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gaW5kZXggPCB0aGlzLmZpeGVkTGVhZCB8fCBpbmRleCA+PSB0aGlzLmJyZWFkY3J1bWJzLmxlbmd0aCAtIHRoaXMuZml4ZWRUYWlsO1xuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJlYWRjcnVtYnNDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtCcmVhZGNydW1ic0NvbXBvbmVudCwgQnJlYWRjcnVtYkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtCcmVhZGNydW1ic0NvbXBvbmVudCwgQnJlYWRjcnVtYkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYnNNb2R1bGUge1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkl0ZW0gfSBmcm9tICcuLi9iY2ktc2lkZWJhci9zaWRlYmFyLW5hdi1pdGVtLm1vZGVsJztcbmltcG9ydCB7IEJyZWFkY3J1bWJzU2VydmljZSB9IGZyb20gJy4uLy4uL2JyZWFkY3J1bWJzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktYXBwJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPGJjaS1jb250ZW50PlxuICA8YmNpLXNpZGViYXIgW3NpZGViYXJMaW5rc109XCJzaWRlYmFyTGlua3NcIiBbYXBwbGljYXRpb25UaXRsZV09XCJhcHBsaWNhdGlvblRpdGxlXCI+XG5cbiAgICA8YmNpLXNpZGViYXItZm9vdGVyIFtzaWRlYmFyRm9vdGVyTGlua3NdPVwic2lkZWJhckZvb3RlckxpbmtzXCI+PC9iY2ktc2lkZWJhci1mb290ZXI+XG5cblxuICAgIDxiY2ktaGVhZGVyPlxuICAgIDwvYmNpLWhlYWRlcj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvYmNpLXNpZGViYXI+XG5cbjwvYmNpLWNvbnRlbnQ+XG5gLFxuICBzdHlsZXM6IFtgLmNvbnRlbnR7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6YXV0bztoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfWBdXG59KVxuZXhwb3J0IGNsYXNzIEJjaUFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgYXBwbGljYXRpb25UaXRsZSA9ICcnO1xuICBASW5wdXQoKSBzaWRlYmFyTGlua3M6IFNpZGViYXJOYXZJdGVtW10gPSBbXTtcbiAgQElucHV0KCkgc2lkZWJhckZvb3RlckxpbmtzOiBTaWRlYmFyTmF2SXRlbVtdID0gW107XG5cbiAgcHVibGljIG5hdmlnYXRpb25JdGVtcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJlYWRjcnVtYnNTZXJ2aWNlOiBCcmVhZGNydW1ic1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnNpZGViYXJMaW5rcyB8fCBjaGFuZ2VzLnNpZGViYXJGb290ZXJMaW5rcykge1xuICAgICAgdGhpcy5uYXZpZ2F0aW9uSXRlbXMgPSBbLi4udGhpcy5zaWRlYmFyTGlua3MsIC4uLnRoaXMuc2lkZWJhckZvb3RlckxpbmtzXTtcbiAgICAgIHRoaXMuYnJlYWRjcnVtYnNTZXJ2aWNlLnNldE5hdmlnYXRpb25JdGVtcyh0aGlzLm5hdmlnYXRpb25JdGVtcyk7XG4gICAgfVxuICB9XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCY2lIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2JjaS1oZWFkZXIvYmNpLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNpQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vYmNpLWNvbnRlbnQvYmNpLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEJjaUZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vYmNpLWZvb3Rlci9iY2ktZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY2lTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9iY2ktc2lkZWJhci9iY2ktc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNpU2lkZWJhckZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vYmNpLXNpZGViYXItZm9vdGVyL2JjaS1zaWRlYmFyLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNpU2lkZWJhckV4cGFuZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9iY2ktc2lkZWJhci1leHBhbmRlci9iY2ktc2lkZWJhci1leHBhbmRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNpTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9iY2ktbG9hZGVyL2JjaS1sb2FkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEV4cGFuc2lvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQgeyBNYXRTaWRlbmF2TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5pbXBvcnQgeyBCY2lTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYmNpLXNpZGViYXItbmF2LWl0ZW0vYmNpLXNpZGViYXItbmF2LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEJjaVNpZGViYXJOYXZMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9iY2ktc2lkZWJhci1uYXYtbGlzdC9iY2ktc2lkZWJhci1uYXYtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IEJyZWFkY3J1bWJzTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLm1vZHVsZSc7XG5pbXBvcnQgeyBCY2lBcHBDb21wb25lbnQgfSBmcm9tICcuL2JjaS1hcHAvYmNpLWFwcC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBGbGV4TGF5b3V0TW9kdWxlLFxuICAgIEJyZWFkY3J1bWJzTW9kdWxlLFxuICAgIC8qIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgLyogQ0RLICovXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBQb3J0YWxNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQmNpSGVhZGVyQ29tcG9uZW50LFxuICAgIEJjaUNvbnRlbnRDb21wb25lbnQsXG4gICAgQmNpRm9vdGVyQ29tcG9uZW50LFxuICAgIEJjaVNpZGViYXJDb21wb25lbnQsXG4gICAgQmNpU2lkZWJhckZvb3RlckNvbXBvbmVudCxcbiAgICBCY2lTaWRlYmFyRXhwYW5kZXJDb21wb25lbnQsXG4gICAgQmNpTG9hZGVyQ29tcG9uZW50LFxuICAgIEJjaVNpZGViYXJOYXZJdGVtQ29tcG9uZW50LFxuICAgIEJjaVNpZGViYXJOYXZMaXN0Q29tcG9uZW50LFxuICAgIEJjaUFwcENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQmNpSGVhZGVyQ29tcG9uZW50LFxuICAgIEJjaUNvbnRlbnRDb21wb25lbnQsXG4gICAgQmNpRm9vdGVyQ29tcG9uZW50LFxuICAgIEJjaVNpZGViYXJDb21wb25lbnQsXG4gICAgQmNpU2lkZWJhckZvb3RlckNvbXBvbmVudCxcbiAgICBCY2lTaWRlYmFyRXhwYW5kZXJDb21wb25lbnQsXG4gICAgQmNpTG9hZGVyQ29tcG9uZW50LFxuICAgIEJjaVNpZGViYXJOYXZJdGVtQ29tcG9uZW50LFxuICAgIEJjaVNpZGViYXJOYXZMaXN0Q29tcG9uZW50LFxuICAgIEJjaUFwcENvbXBvbmVudCxcbiAgICAvKiBDREsgKi9cbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJjaUxheW91dE1vZHVsZSB7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkl0ZW0gfSBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblJlc3BvbnNlIH0gZnJvbSAnLi9OYXZpZ2F0aW9uUmVzcG9uc2UnO1xuaW1wb3J0IHsgQ09SRV9DT05GSUcgfSBmcm9tICcuLi9jb3JlLWNvbmZpZ3VyYXRpb24vY29yZS1jb25maWcudG9rZW4nO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uL2NvcmUtY29uZmlndXJhdGlvbi9jb3JlLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgc2lkZWJhckxpbmtzOiBTaWRlYmFyTmF2SXRlbVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgQEluamVjdChDT1JFX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcpIHtcbiAgfVxuXG4gIGdldE5hdmlnYXRpb25JdGVtcygpOiBPYnNlcnZhYmxlPFNpZGViYXJOYXZJdGVtW10+IHtcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuZW5kcG9pbnROYXZpZ2F0aW9uKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gdGhpcy5sb2NhdGlvbi5wcmVwYXJlRXh0ZXJuYWxVcmwodGhpcy5jb25maWcuZW5kcG9pbnROYXZpZ2F0aW9uKTtcblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQobm9ybWFsaXplZFVybClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChsaW5rczogTmF2aWdhdGlvblJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAobGlua3MgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICB0aGlzLnNpZGViYXJMaW5rcyA9IGxpbmtzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zaWRlYmFyTGlua3MgPSBsaW5rcy5yZXN1bHRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lkZWJhckxpbmtzO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKCdOYXZpZ2F0aW9uU2VydmljZTogbm8gZW5kcG9pbnROYXZpZ2F0aW9uIHByb3ZpZGVkIGluIENPUkVfQ09ORklHJyk7XG4gICAgfVxuICB9XG5cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBTaWRlYmFyTmF2SXRlbSB9IGZyb20gJy4uL2xheW91dCc7XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uUmVzcG9uc2Uge1xuICByZXN1bHRzOiBTaWRlYmFyTmF2SXRlbVtdO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktc2lkZS1wYW5lbCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNpZGUtcGFuZWxcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8uc2lkZS1wYW5lbHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyNTBweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3RvcDowO3JpZ2h0OjEwMHB4O21heC1oZWlnaHQ6MTAwJTtoZWlnaHQ6MTAwJX1gXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktZmlsdGVyLXBhbmVsJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZmlsdGVyLXBhbmVsLW91dGVyXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLmZpbHRlci1wYW5lbC1vdXRlcntib3JkZXI6MXB4IHNvbGlkICNjY2M7cGFkZGluZzo1cHggMTBweDttaW4taGVpZ2h0OjYwcHg7bGluZS1oZWlnaHQ6NTBweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLXNpZGUtcGFuZWwtaXRlbScsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjwhLS08ZGl2IGNsYXNzPVwic2lkZS1wYW5lbC1pdGVtXCI+XG4gIDxoND57eyB0aXRsZSB9fTwvaDQ+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2Pi0tPlxuPG1hdC1jYXJkIGNsYXNzPVwic2lkZS1wYW5lbC1pdGVtXCI+XG4gIDxtYXQtY2FyZC1oZWFkZXIgY2xhc3M9XCJmaXhlZC1mbGV4LWl0ZW1cIj5cbiAgICA8bWF0LWNhcmQtdGl0bGU+PGg1Pnt7IHRpdGxlIH19PC9oNT48L21hdC1jYXJkLXRpdGxlPlxuICA8L21hdC1jYXJkLWhlYWRlcj5cbiAgPG1hdC1jYXJkLWNvbnRlbnQgY2xhc3M9XCJzY3JvbGwtY29udGFpbmVyLXZlcnRpY2FsXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovOmhvc3R7bWFyZ2luOjE1cHggMDtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTpmbGV4fTpob3N0LmZpeGVkLWZsZXgtaXRlbXtmbGV4OjAgMCBhdXRvfS5maXhlZC1mbGV4LWl0ZW17ZmxleDowIDAgYXV0b30uc2lkZS1wYW5lbC1pdGVte2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleDoxIDEgYXV0b30uc2Nyb2xsLWNvbnRhaW5lci12ZXJ0aWNhbHtvdmVyZmxvdy15OmF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZVBhbmVsSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5maXhlZC1mbGV4LWl0ZW0nKVxuICBASW5wdXQoKSBmaXhlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktY29udGVudC13LXNpZGUtcGFuZWwnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBzdHlsZXM6IFtgOmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1gXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50V1NpZGVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiY2lMb2FkaW5nU3Bpbm5lcl0nXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdTcGlubmVyRGlyZWN0aXZlIHtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxvYWRpbmcnKSBASW5wdXQoKSBiY2lMb2FkaW5nU3Bpbm5lciA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS10aWxlJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPGRpdiBjbGFzcz1cInRpbGVcIiBbbmdDbGFzc109XCJ7J2FkZC10aWxlJzogYWRkVGlsZX1cIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiMTZweFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJ0aWxlLWljb25cIj5cbiAgICA8aSBjbGFzcz1cIkJvc2NoLUljIHt7IGljb25OYW1lIHx8ICdCb3NjaC1JYy1hZGQnIH19XCI+PC9pPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInRpbGUtZGV0YWlsc1wiIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBzdGFydFwiPlxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAge3sgdGl0bGUgfX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2ICpuZ0lmPVwiIWFkZFRpbGVcIiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgIHt7IGRlc2NyaXB0aW9uIH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCIhYWRkVGlsZVwiIGNsYXNzPVwiYWN0aW9uc1wiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gc3RhcnRcIj5cbiAgICAgIDxkaXY+PGEgY2xhc3M9XCJidXR0b24tbGlua1wiPnt7IGRldGFpbHNCdXR0b25MYWJlbCB9fTwvYT48L2Rpdj5cblxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gaHJlZj1cIiNcIiAqbmdJZj1jYW5FeGVjdXRlQWN0aW9uIChjbGljayk9XCJleGVjdXRlQWN0aW9uKCRldmVudClcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm1hdC1pY29uLWJ1dHRvbiBCb3NjaC1JYyB7e2FjdGlvbkljb25OYW1lfX1cIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLnRpbGV7bWFyZ2luLWJvdHRvbToxNnB4O2JhY2tncm91bmQtY29sb3I6I2VmZWZmMDtwYWRkaW5nOjAgMTZweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6NDAwcHg7aGVpZ2h0OjE1MHB4O2NvbG9yOiMwMDA7dHJhbnNpdGlvbjphbGwgLjI1cyBlYXNlfS50aWxlOmZvY3VzLC50aWxlOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2RmZGZlMDtjdXJzb3I6cG9pbnRlcn0udGlsZTpmb2N1cyAudGlsZS1pY29uIGksLnRpbGU6aG92ZXIgLnRpbGUtaWNvbiBpe2NvbG9yOiNiZmMwYzJ9LnRpbGUgLnRpbGUtaWNvbnthbGlnbi1zZWxmOmNlbnRlcn0udGlsZSAudGlsZS1pY29uIGl7Zm9udC1zaXplOjgwcHg7Y29sb3I6I2NmZDBkMX0udGlsZSAudGlsZS1kZXRhaWxze3dpZHRoOjEwMCV9LnRpbGUgLnRpbGUtZGV0YWlscyAudGl0bGV7Zm9udC1zaXplOjIwcHg7d2lkdGg6MjYwcHg7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3c6aGlkZGVufS50aWxlIC50aWxlLWRldGFpbHMgLmRlc2NyaXB0aW9ue21hcmdpbjo0cHggMDtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxNnB4O21heC1oZWlnaHQ6MzJweDtoZWlnaHQ6MzJweDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpc30udGlsZSAudGlsZS1kZXRhaWxzIC5hY3Rpb25ze21hcmdpbi1ib3R0b206LThweDt3aWR0aDoxMDAlfS50aWxlIC50aWxlLWRldGFpbHMgLmFjdGlvbnMgLmJ1dHRvbi1saW5re3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmc6MDstd2Via2l0LXRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2R9LnRpbGUgLnRpbGUtZGV0YWlscyAuYWN0aW9ucyAuYnV0dG9uLWxpbms6YWZ0ZXJ7Zm9udC1zaXplOjEycHg7bWFyZ2luLWxlZnQ6MnB4fS50aWxlIC50aWxlLWRldGFpbHMgLmFjdGlvbnMgLm1hdC1pY29uLWJ1dHRvbntmb250LXNpemU6MjRweDtjb2xvcjojNTI1ZjZifS50aWxlLmFkZC10aWxle2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2E4YWZiNTtib3JkZXI6MXB4IHNvbGlkICNiZmMwYzI7Zm9udC1zaXplOjIwcHh9LnRpbGUuYWRkLXRpbGUgLnRpbGUtaWNvbiBpe2ZvbnQtc2l6ZTo0OHB4fS50aWxlLmFkZC10aWxlIC50aWxlLWRldGFpbHMsLnRpbGUuYWRkLXRpbGUgLnRpbGUtZGV0YWlscyAudGl0bGV7d2lkdGg6YXV0b30udGlsZS5hZGQtdGlsZTpob3Zlcntjb2xvcjojMDAwO2JhY2tncm91bmQtY29sb3I6I2Y3ZjdmNztib3JkZXI6MXB4IHNvbGlkICNkZmRmZTA7b3BhY2l0eTouNzU7Y3Vyc29yOnBvaW50ZXJ9LnRpbGUuYWRkLXRpbGU6aG92ZXIgLnRpbGUtaWNvbiBpe2NvbG9yOiM1MjVmNmJ9YF0sXG59KVxuZXhwb3J0IGNsYXNzIEJjaVRpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBkZXRhaWxzQnV0dG9uTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgYWRkVGlsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBhY3Rpb25JY29uTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjYW5FeGVjdXRlQWN0aW9uOiBib29sZWFuO1xuICBAT3V0cHV0KCkgYWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBleGVjdXRlQWN0aW9uKCRldmVudDogRXZlbnQpIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5hY3Rpb24uZW1pdChudWxsKTtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktY29udGVudC1zaWRlYmFyJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBzdHlsZT1cIndpZHRoOiAzMDBweFwiPlxuICA8bWF0LXNpZGVuYXYgI3NpZGVuYXYgW3Bvc2l0aW9uXT1cInBvc2l0aW9uXCIgW21vZGVdPVwibW9kZVwiIFtvcGVuZWRdPVwib3BlbmVkXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L21hdC1zaWRlbmF2PlxuPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi86aG9zdHtkaXNwbGF5OmZsZXg7Ym9yZGVyLXdpZHRoOjAgMCAwIDFweDtib3JkZXItY29sb3I6I2RmZGZlMDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czowfW1hdC1zaWRlbmF2e3dpZHRoOjMwMHB4O3BhZGRpbmc6NXB4IDEwcHh9OjpuZy1kZWVwIGJjaS1jb250ZW50LXNpZGViYXItaXRlbTpmaXJzdC1jaGlsZHtwYWRkaW5nLXRvcDowfTo6bmctZGVlcCBiY2ktY29udGVudC1zaWRlYmFyLWl0ZW06bGFzdC1jaGlsZHtwYWRkaW5nLWJvdHRvbTo1cHg7Ym9yZGVyLWJvdHRvbTpub25lfWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwb3NpdGlvbiA9ICdlbmQnO1xuICBASW5wdXQoKSBtb2RlID0gJ3B1c2gnO1xuICBASW5wdXQoKSBvcGVuZWQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1jb250ZW50LXNpZGViYXItaXRlbScsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxtYXQtY2FyZCBjbGFzcz1cImNvbnRlbnQtc2lkZWJhci1pdGVtXCI+XG4gIDxtYXQtY2FyZC1oZWFkZXIgY2xhc3M9XCJmaXhlZC1mbGV4LWl0ZW1cIj5cbiAgICA8bWF0LWNhcmQtdGl0bGU+PGg1Pnt7IHRpdGxlIH19PC9oNT48L21hdC1jYXJkLXRpdGxlPlxuICA8L21hdC1jYXJkLWhlYWRlcj5cbiAgPG1hdC1jYXJkLWNvbnRlbnQgY2xhc3M9XCJzY3JvbGwtY29udGFpbmVyLXZlcnRpY2FsXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovOmhvc3R7cGFkZGluZzoxMHB4IDVweCAyNXB4O292ZXJmbG93OmhpZGRlbjtkaXNwbGF5OmZsZXg7Ym9yZGVyLXdpZHRoOjAgMCAxcHg7Ym9yZGVyLWNvbG9yOiNkZmRmZTA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6MH06aG9zdC5maXhlZC1mbGV4LWl0ZW17ZmxleDowIDAgYXV0b30uZml4ZWQtZmxleC1pdGVte2ZsZXg6MCAwIGF1dG99LmNvbnRlbnQtc2lkZWJhci1pdGVte2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleDoxIDEgYXV0bztwYWRkaW5nOjB9LnNjcm9sbC1jb250YWluZXItdmVydGljYWx7b3ZlcmZsb3cteTphdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRTaWRlYmFySXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZml4ZWQtZmxleC1pdGVtJylcbiAgQElucHV0KCkgZml4ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1jb21tYW5kYmFyJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPG1hdC10b29sYmFyPlxuICA8bWF0LXRvb2xiYXItcm93PlxuICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgPCEtLSBJdGVtY291bnQgLS0+XG4gICAgICA8c3BhbiBjbGFzcz1cImVudHJ5LWNvdW50XCIgW2NsYXNzLmFjdGl2ZV09XCJzZWxlY3RlZEl0ZW1Db3VudFwiICpuZ0lmPVwic2VsZWN0ZWRJdGVtQ291bnQgfHwgaXRlbUNvdW50ID4gLTFcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkSXRlbUNvdW50XCI+e3tzZWxlY3RlZEl0ZW1Db3VudH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3RlZEl0ZW1Db3VudCAmJiBpdGVtQ291bnQgPiAtMVwiPiBvZiA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW1Db3VudCA+IC0xXCI+e3tpdGVtQ291bnR9fTwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1BsdXJhbF09XCIoaXRlbUNvdW50ID4gLTEgPyBpdGVtQ291bnQgOiBzZWxlY3RlZEl0ZW1Db3VudClcIj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgbmdQbHVyYWxDYXNlPVwib25lXCI+IGVudHJ5PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgbmdQbHVyYWxDYXNlPVwib3RoZXJcIj4gZW50cmllczwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9zcGFuPlxuXG4gICAgICA8IS0tIFNlYXJjaGJhciAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tYW5kYmFyLXNlYXJjaC1maWVsZFwiICpuZ0lmPVwic2hvd1NlYXJjaFwiPlxuICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNlYXJjaEZvcm1cIj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZmxvYXRMYWJlbD1cIm5ldmVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAoa2V5dXAuZW50ZXIpPVwic2VhcmNoU3VibWl0KClcIj5cbiAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIHR5cGU9XCJidXR0b25cIiBtYXRTdWZmaXggKGNsaWNrKT1cInNlYXJjaFN1Ym1pdCgpXCI+XG4gICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInRvb2xiYXItaW5wdXQtaWNvblwiIGZvbnRJY29uPVwiQm9zY2gtSWMtc2VhcmNoXCI+PC9tYXQtaWNvbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBJbmxpbmUgRmlsdGVycyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJjaS1jb21tYW5kYmFyLWlubGluZWZpbHRlcnNcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIFF1aWNrZmlsdGVycyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJjaS1jb21tYW5kYmFyLXF1aWNrZmlsdGVyc1wiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gRmlsdGVyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgPGJjaS1jb21tYW5kYmFyLWJ1dHRvbiBbcmVuZGVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInNob3dGaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiQm9zY2gtSWMtZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNvbW1hbmRiYXItYnV0dG9uLWFjdGl2ZV09XCJmaWx0ZXJDb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tGaWx0ZXIuZW1pdCgpXCI+XG4gICAgICAgIEZpbHRlclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmlsdGVyQ291bnRcIj4gKHt7ZmlsdGVyQ291bnR9fSk8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvYmNpLWNvbW1hbmRiYXItYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBTb3J0IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgPGJjaS1jb21tYW5kYmFyLWJ1dHRvbiBbcmVuZGVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInNob3dTb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInt7c29ydEljb259fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrU29ydC5lbWl0KClcIj5cbiAgICAgICAgU29ydFxuICAgICAgPC9iY2ktY29tbWFuZGJhci1idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIFNwYWNlciAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiZmlsbC1zcGFjZVwiPjwvZGl2PlxuXG4gICAgPCEtLSBBY3Rpb25zIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYmNpLWNvbW1hbmRiYXItYWN0aW9uc1wiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtdG9vbGJhci1yb3c+XG48L21hdC10b29sYmFyPlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiYmNpLWNvbW1hbmRiYXItYWN0aXZlLWZpbHRlcnNcIj48L25nLWNvbnRlbnQ+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8vKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLzpob3N0LmFjdGl2ZSBtYXQtdG9vbGJhcntiYWNrZ3JvdW5kOnJnYmEoMCwxNDIsMjA3LC4xNSl9LmZpbGwtc3BhY2V7ZmxleDoxIDEgYXV0b30uZ3JvdXB7ZGlzcGxheTppbmxpbmUtZmxleDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lmdyb3VwKy5ncm91cHttYXJnaW4tbGVmdDoxMHB4fTpob3N0IDo6bmctZGVlcCAuY29tbWFuZGJhci1pdGVte2Rpc3BsYXk6aW5saW5lLWZsZXg7dmVydGljYWwtYWxpZ246bWlkZGxlfS5lbnRyeS1jb3VudC5hY3RpdmUsLmVudHJ5LWNvdW50LmFjdGl2ZS5tYXQtaWNvbi1idXR0b24ubWF0LWljb24tYnV0dG9uLDpob3N0IDo6bmctZGVlcCAuY29tbWFuZGJhci1idXR0b24tYWN0aXZlLDpob3N0IDo6bmctZGVlcCAuY29tbWFuZGJhci1idXR0b24tYWN0aXZlLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b257Y29sb3I6IzAwOGVjZn0ubWF0LXRvb2xiYXJ7Zm9udC1zaXplOjE0cHh9Lm1hdC10b29sYmFyIC5lbnRyeS1jb3VudHttYXJnaW4tcmlnaHQ6MzJweDtwYWRkaW5nOjRweCAwfS5tYXQtdG9vbGJhciAuY29tbWFuZGJhci1zZWFyY2gtZmllbGQgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLmNvbW1hbmRiYXItc2VhcmNoLWZpZWxkIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtbGFiZWwgLm1hdC1lbXB0eSwubWF0LXRvb2xiYXIgLmNvbW1hbmRiYXItc2VhcmNoLWZpZWxkIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWVtcHR5e2NvbG9yOiMwMDB9Lm1hdC10b29sYmFyIC5jb21tYW5kYmFyLXNlYXJjaC1maWVsZCA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLC5tYXQtdG9vbGJhciAuY29tbWFuZGJhci1zZWFyY2gtZmllbGQgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgsLm1hdC10b29sYmFyIC5jb21tYW5kYmFyLXNlYXJjaC1maWVsZCA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC10b29sYmFyIC5jb21tYW5kYmFyLXNlYXJjaC1maWVsZCA6Om5nLWRlZXAgLnRvb2xiYXItaW5wdXQtZmllbGR7Ym9yZGVyOm5vbmU7b3V0bGluZTowO2JhY2tncm91bmQ6MCAwO21hcmdpbi1ib3R0b206MH0ubWF0LXRvb2xiYXIgLmNvbW1hbmRiYXItc2VhcmNoLWZpZWxkIDo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JhY2tncm91bmQtaW1hZ2U6bm9uZX0ubWF0LXRvb2xiYXIgLmNvbW1hbmRiYXItc2VhcmNoLWZpZWxkIDo6bmctZGVlcCAudG9vbGJhci1pbnB1dC1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6NHB4IDEycHggMDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYmZjMGMyfS5tYXQtdG9vbGJhciAuY29tbWFuZGJhci1zZWFyY2gtZmllbGQgOjpuZy1kZWVwIC50b29sYmFyLWlucHV0LWNvbnRhaW5lciBidXR0b257dmVydGljYWwtYWxpZ246bWlkZGxlfWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1hbmRiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKSBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcblxuICAvKipcbiAgICogTnVtYmVyIG9mIG1hdGNoZWQgLyBzaG93biBpdGVtc1xuICAgKi9cbiAgQElucHV0KCkgaXRlbUNvdW50OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBzZWxlY3RlZCBpdGVtc1xuICAgKi9cbiAgQElucHV0KCkgc2VsZWN0ZWRJdGVtQ291bnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGV2ZW50IGVtaXR0ZXIgd2hpY2ggcHJvcGFnYXRlcyB0aGUgdGV4dCB2YWx1ZSBvZiB0aGUgc2VhcmNoLWJveCB0byBzdWJvcmRpbmF0ZWQgY29tcG9uZW50c1xuICAgKi9cbiAgQE91dHB1dCgpIHNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBTdWJqZWN0IGJlaW5nIHVzZWQgdG8gc2VhcmNoIGltbWVkaWF0ZWx5XG4gICAqL1xuICBzdWJtaXRTZWFyY2ggPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIFRoZSBldmVudCBlbWl0dGVyIHdoaWNoIHByb3BhZ2F0ZXMgdGhlIGNsaWNrLWV2ZW50IG9uIHRoZSBmaWx0ZXItaWNvbiB0byBzdXBlcm9yZGluYXRlZCBjb21wb25lbnRzXG4gICAqL1xuICBAT3V0cHV0KCkgY2xpY2tGaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoZSBldmVudCBlbWl0dGVyIHdoaWNoIHByb3BhZ2F0ZXMgdGhlIGNsaWNrLWV2ZW50IG9uIHRoZSBzb3J0LWljb24gdG8gc3VwZXJvcmRpbmF0ZWQgY29tcG9uZW50c1xuICAgKi9cbiAgQE91dHB1dCgpIGNsaWNrU29ydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBzZWFyY2gtYm94IGlzIGJlaW5nIGRpc3BsYXllZFxuICAgKi9cbiAgQElucHV0KCkgc2hvd1NlYXJjaCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgZmlsdGVyLWljb24gaXMgYmVpbmcgZGlzcGxheWVkXG4gICAqL1xuICBASW5wdXQoKSBzaG93RmlsdGVyID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgc29ydC1pY29uIGlzIGJlaW5nIGRpc3BsYXllZFxuICAgKi9cbiAgQElucHV0KCkgc2hvd1NvcnQgPSBmYWxzZTtcblxuICAvKipcbiAgICogSW50ZWdlciB2YWx1ZSB0byBkaXNwbGF5IHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgRmlsdGVyc1xuICAgKi9cbiAgQElucHV0KCkgZmlsdGVyQ291bnQgPSAwO1xuXG4gIC8qKlxuICAgKiBJbnB1dCBwYXJhbWV0ZXIgdG8gbWFrZSB0aGUgZmlsdGVyLWljb24gY29uZmlndXJhYmxlIGZyb20gc3VwZXJvcmRpbmF0ZWQgY29tcG9uZW50c1xuICAgKi9cbiAgQElucHV0KCkgc29ydEljb24gPSAnQm9zY2gtSWMtc29ydC1hbHBoYWJldGljYWxseSc7XG5cbiAgc2VhcmNoRm9ybTogRm9ybUdyb3VwO1xuICBwcml2YXRlIGNvbXBvbmVudERlc3Ryb3llZCQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5jcmVhdGVTZWFyY2hGb3JtKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBtZXJnZSh0aGlzLnN1Ym1pdFNlYXJjaCxcbiAgICAgIHRoaXMuc2VhcmNoRm9ybS5jb250cm9scy5zZWFyY2gudmFsdWVDaGFuZ2VzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpLFxuICAgICAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgICApXG4gICAgKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZShzZWFyY2hTdHJpbmcgPT4gdGhpcy5zZWFyY2guZW1pdChzZWFyY2hTdHJpbmcpKTtcbiAgfVxuXG4gIHNlYXJjaFN1Ym1pdCgpIHtcbiAgICB0aGlzLnN1Ym1pdFNlYXJjaC5uZXh0KHRoaXMuc2VhcmNoRm9ybS5jb250cm9scy5zZWFyY2gudmFsdWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLm5leHQoKTtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlU2VhcmNoRm9ybSgpIHtcbiAgICB0aGlzLnNlYXJjaEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHNlYXJjaDogJydcbiAgICB9KTtcbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBiY2ktY29tbWFuZGJhci1pdGVtYCxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbW1hbmRiYXItaXRlbVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlbmRlclwiPlxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29tbWFuZGJhckl0ZW1Db21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBTZXQgaXRlbS1jbGFzcyBvbiBob3N0IGVsZW1lbnQgaWYgcmVuZGVyZWQgZGlyZWN0bHkuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbW1hbmRiYXItaXRlbScpIGNsYXNzQ29tbWFuZGJhckl0ZW0gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHJlbmRlciB0aGUgaXRlbSBpbi1wbGFjZSBpbnN0ZWFkIG9mIHVzaW5nIGEgdGVtcGxhdGUgb3V0bGV0LlxuICAgKi9cbiAgQElucHV0KCkgcmVuZGVyID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFdoZW4gdG8gaGlkZSB0aGUgaXRlbSBpbiBhIHN1Ym1lbnUuIFZhbGlkIHZhbHVlcyBhcmU6XG4gICAqICogZW1wdHk6IGFsd2F5cyBoaWRkZW5cbiAgICogKiBib29sZWFuOiBoaWRkZW4gaWYgdHJ1ZSwgc2hvd24gb3RoZXJ3aXNlXG4gICAqICogbm9uLWVtcHR5IHN0cmluZzogQ2hlY2tlZCBhZ2FpbnN0IE9ic2VydmFibGVNZWRpYS5pc0FjdGl2ZSAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2ZsZXgtbGF5b3V0L3dpa2kvT2JzZXJ2YWJsZU1lZGlhKVxuICAgKiAgICAgICAgICAgICAgICAgICAgIGVpdGhlciBzdXBwb3J0aW5nIGNzcy1tZWRpYS1xdWVyaWVzIG9yIHByZWRlZmluZWQgYWxpYXNlcyBsaWtlIHhzLCBsdC1tZCwgZ3QtbGcuXG4gICAqL1xuICBASW5wdXQoKSBoaWRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSByZWZlcmVuY2UgdG8gdGhlIGl0ZW0ncyB0ZW1wbGF0ZS5cbiAgICovXG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlJykgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBmb3J3YXJkUmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlTWVkaWEgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29tbWFuZGJhckl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9pdGVtL2NvbW1hbmRiYXItaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktY29tbWFuZGJhci1hY3Rpb25zJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPCEtLSBBY3Rpb25zIC0tPlxuPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB2aXNpYmxlSXRlbXNcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml0ZW0/LnRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImhpZGRlbkl0ZW1zLmxlbmd0aCA+IDBcIj5cbiAgPCEtLSBNb3JlLUFjdGlvbnMtQnV0dG9uIC0tPlxuICA8YmNpLWNvbW1hbmRiYXItYnV0dG9uIFtyZW5kZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIkJvc2NoLUljLXNob3ctbW9yZS12ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1vcmUgYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1vcmVBY3Rpb25zTWVudVwiPlxuICA8L2JjaS1jb21tYW5kYmFyLWJ1dHRvbj5cbjwvbmctY29udGFpbmVyPlxuXG48IS0tIE1vcmUgQWN0aW9ucyBNZW51IC0tPlxuPG1hdC1tZW51ICNtb3JlQWN0aW9uc01lbnU9XCJtYXRNZW51XCIgW2NsYXNzXT1cIidjb21tYW5kYmFyLW1vcmUtYWN0aW9uLW1lbnUnXCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaGlkZGVuSXRlbXNcIj5cbiAgICA8ZGl2IG1hdC1tZW51LWl0ZW0+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbT8udGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG48L21hdC1tZW51PlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovOmhvc3R7ZGlzcGxheTppbmhlcml0O3ZlcnRpY2FsLWFsaWduOmluaGVyaXR9OjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbC5jb21tYW5kYmFyLW1vcmUtYWN0aW9uLW1lbnV7bWluLXdpZHRoOjB9OjpuZy1kZWVwIC5jb21tYW5kYmFyLW1vcmUtYWN0aW9uLW1lbnUgLm1hdC1tZW51LWl0ZW17cGFkZGluZzoycHg7bGluZS1oZWlnaHQ6MTtoZWlnaHQ6YXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tYW5kYmFyQWN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcblxuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gQ29tbWFuZGJhckl0ZW1Db21wb25lbnQpKSBpdGVtczogUXVlcnlMaXN0PENvbW1hbmRiYXJJdGVtQ29tcG9uZW50PjtcblxuICBwdWJsaWMgdmlzaWJsZUl0ZW1zOiBDb21tYW5kYmFySXRlbUNvbXBvbmVudFtdID0gW107XG4gIHB1YmxpYyBoaWRkZW5JdGVtczogQ29tbWFuZGJhckl0ZW1Db21wb25lbnRbXSA9IFtdO1xuXG4gIHByaXZhdGUgY29tcG9uZW50RGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvYnNlcnZhYmxlTWVkaWE6IE9ic2VydmFibGVNZWRpYSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQubmV4dCgpO1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8vIGxpc3RlbiB0byBjaGFuZ2VzIG9mIHZpZXdwb3J0IHNpemVcbiAgICBtZXJnZSh0aGlzLm9ic2VydmFibGVNZWRpYS5hc09ic2VydmFibGUoKSwgdGhpcy5pdGVtcy5jaGFuZ2VzKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZpZXcoKSB7XG4gICAgY29uc3QgdmlzaWJsZSA9IFtdO1xuICAgIGNvbnN0IGhpZGRlbiA9IFtdO1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHRoaXMudHJ1ZU9yTWF0Y2hlc01lZGlhU3RhdGUoaXRlbS5oaWRlKSA/IGhpZGRlbi5wdXNoKGl0ZW0pIDogdmlzaWJsZS5wdXNoKGl0ZW0pKTtcblxuICAgIHRoaXMudmlzaWJsZUl0ZW1zLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5oaWRkZW5JdGVtcy5sZW5ndGggPSAwO1xuICAgIGlmIChoaWRkZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBubyBtb3JlLWFjdGlvbnMtbWVudSBmb3IgYSBzaW5nbGUgaGlkZGVuIGFjdGlvblxuICAgICAgdGhpcy52aXNpYmxlSXRlbXMucHVzaCguLi50aGlzLml0ZW1zLnRvQXJyYXkoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlzaWJsZUl0ZW1zLnB1c2goLi4udmlzaWJsZSk7XG4gICAgICB0aGlzLmhpZGRlbkl0ZW1zLnB1c2goLi4uaGlkZGVuKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRydWVPck1hdGNoZXNNZWRpYVN0YXRlKHZhbHVlOiBzdHJpbmcgfCBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDAgfHwgdGhpcy5vYnNlcnZhYmxlTWVkaWEuaXNBY3RpdmUodmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbWFuZGJhckl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9pdGVtL2NvbW1hbmRiYXItaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBiY2ktY29tbWFuZGJhci1idXR0b25gLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bmctdGVtcGxhdGUgI3RlbXBsYXRlPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwiY29tbWFuZGJhci1pdGVtXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJfbmdDbGFzc1wiXG4gICAgICAgICAgW25nU3R5bGVdPVwiX25nU3R5bGVcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgKGNsaWNrKT1cImNsaWNrRXZlbnQoJGV2ZW50KVwiPlxuICAgIDxtYXQtaWNvbiBbZm9udEljb25dPVwiaWNvblwiPjwvbWF0LWljb24+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2J1dHRvbj5cbjwvbmctdGVtcGxhdGU+XG48bmctY29udGFpbmVyICpuZ0lmPVwicmVuZGVyXCI+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8uY29tbWFuZGJhci1idXR0b24tYWN0aXZlLC5jb21tYW5kYmFyLWJ1dHRvbi1hY3RpdmUubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbiw6aG9zdC5jb21tYW5kYmFyLWJ1dHRvbi1hY3RpdmUsOmhvc3QuY29tbWFuZGJhci1idXR0b24tYWN0aXZlLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b257Y29sb3I6IzAwOGVjZn06Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b257dHJhbnNpdGlvbjouNHM7Y3Vyc29yOnBvaW50ZXI7d2lkdGg6YXV0bzttaW4td2lkdGg6NDBweH06Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b246aG92ZXJ7Y29sb3I6IzAwOGVjZn06Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b24uZGlzYWJsZWQsOjpuZy1kZWVwIC5tYXQtaWNvbi1idXR0b24ubWF0LWljb24tYnV0dG9uOmRpc2FibGVke2NvbG9yOiNhOGFmYjU7Y3Vyc29yOm5vdC1hbGxvd2VkfTo6bmctZGVlcCAubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbi5kaXNhYmxlZDpob3Zlciw6Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b246ZGlzYWJsZWQ6aG92ZXJ7Y29sb3I6I2E4YWZiNX06Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b24gLm1hdC1yaXBwbGV7d2lkdGg6NDBweH06Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29ue21hcmdpbi1sZWZ0OjRweDttYXJnaW4tcmlnaHQ6NHB4fWBdLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENvbW1hbmRiYXJJdGVtQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDb21tYW5kYmFyQnV0dG9uQ29tcG9uZW50KSB9XVxufSlcbmV4cG9ydCBjbGFzcyBDb21tYW5kYmFyQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQ29tbWFuZGJhckl0ZW1Db21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBUaGUgYnV0dG9ucyBmb250LWljb24uXG4gICAqL1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGJ1dHRvbiBzaGFsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBidXR0b24ncyBjbGljayBldmVudCBlbWl0dGVyLmNcbiAgICovXG4gIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIF9uZ0NsYXNzOiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBba2xhc3M6IHN0cmluZ106IGFueSB9ID0ge307XG4gIF9uZ1N0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgQElucHV0KClcbiAgc2V0IG5nQ2xhc3Modjogc3RyaW5nIHwgc3RyaW5nW10gfCBTZXQ8c3RyaW5nPiB8IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHRoaXMuX25nQ2xhc3MgPSB2O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG5nU3R5bGUodjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX25nU3R5bGUgPSB2O1xuICB9XG5cbiAgY2xpY2tFdmVudChldmVudDogRXZlbnQpIHtcbiAgICAvLyBvbmx5IHByb3h5IGNsaWNrLWV2ZW50IGlmIHRoZXJlIGlzIGFuIG9ic2VydmVyIGZvciB0aGUgaG9zdCdzIGNsaWNrIGV2ZW50XG4gICAgLy8gdGhpcyBpcyBuZWNlc3NhcnkgZm9yIGUuZy4gdGhlIG1hdC1tZW51IHRyaWdnZXIgYnV0dG9uIHRvIHdvcmtcbiAgICBpZiAodGhpcy5jbGljay5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmNsaWNrLm5leHQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1hbmRiYXJCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi9jb21tYW5kYmFyLWJ1dHRvbi5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbYmNpQ29tbWFuZGJhckFjdGlvbkFkZF0sW2JjaUNvbW1hbmRiYXJBY3Rpb25FZGl0XSxbYmNpQ29tbWFuZGJhckFjdGlvbkRlbGV0ZV1gLFxufSlcbmV4cG9ydCBjbGFzcyBDb21tYW5kYmFyQnV0dG9uc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBpY29uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBDb21tYW5kYmFyQnV0dG9uQ29tcG9uZW50KSB7XG4gIH1cblxuICBASW5wdXQoJ2JjaUNvbW1hbmRiYXJBY3Rpb25BZGQnKVxuICBzZXQgYnV0dG9uQWRkKF8pIHtcbiAgICB0aGlzLnNldEljb24oJ0Jvc2NoLUljLWFkZC1vdXRsaW5lJyk7XG4gIH1cblxuICBASW5wdXQoJ2JjaUNvbW1hbmRiYXJBY3Rpb25FZGl0JylcbiAgc2V0IGJ1dHRvbkVkaXQoXykge1xuICAgIHRoaXMuc2V0SWNvbignQm9zY2gtSWMtZWRpdCcpO1xuICB9XG5cbiAgQElucHV0KCdiY2lDb21tYW5kYmFyQWN0aW9uRGVsZXRlJylcbiAgc2V0IGJ1dHRvbkRlbGV0ZShfKSB7XG4gICAgdGhpcy5zZXRJY29uKCdCb3NjaC1JYy1kZWxldGUnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaG9zdC5pY29uID0gdGhpcy5pY29uO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRJY29uKGljb246IHN0cmluZykge1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbWFuZGJhckl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9pdGVtL2NvbW1hbmRiYXItaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktY29tbWFuZGJhci1pbmxpbmVmaWx0ZXInLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bmctdGVtcGxhdGUgI3RlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29tbWFuZGJhci1pbmxpbmUtZmlsdGVyXCIgW2NsYXNzLmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZV09XCIhZGlzYWJsZURlZmF1bHRTdHlsZVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8uY29tbWFuZGJhci1pbmxpbmUtZmlsdGVye3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uY29tbWFuZGJhci1pbmxpbmUtZmlsdGVyKy5jb21tYW5kYmFyLWlubGluZS1maWx0ZXJ7bWFyZ2luLWxlZnQ6MTBweH0uY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIC5tYXQtZW1wdHksLmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1lbXB0eXtjb2xvcjojMDAwfS5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZCwuY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtcHJlZml4LC5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1zdWZmaXh7YmFja2dyb3VuZDojZmZmfS5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIGlucHV0LC5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIGlucHV0OmZvY3VzOmVuYWJsZWR7YmFja2dyb3VuZDojZmZmfS5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojMDAwfS5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiMwMDB9LmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgOjpwbGFjZWhvbGRlcntjb2xvcjojMDAwfS5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIDotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6IzAwMH0uY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCwuY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCAubWF0LXNlbGVjdC10cmlnZ2Vye2JhY2tncm91bmQtY29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWltYWdlOm5vbmV9YF0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ29tbWFuZGJhckl0ZW1Db21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJDb21wb25lbnQpIH1dXG59KVxuZXhwb3J0IGNsYXNzIENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21tYW5kYmFySXRlbUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZGlzYWJsZURlZmF1bHRTdHlsZSA9IGZhbHNlO1xuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBmb3J3YXJkUmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tYW5kYmFySW5saW5lZmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vaW5saW5lZmlsdGVyL2NvbW1hbmRiYXItaW5saW5lZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBtZXJnZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGVNZWRpYSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWNvbW1hbmRiYXItaW5saW5lZmlsdGVycycsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxkaXYgZnhMYXlvdXQ9XCJyb3dcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB2aXNpYmxlSXRlbXNcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbT8udGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2A6aG9zdHt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7bGluZS1oZWlnaHQ6NDhweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tYW5kYmFySW5saW5lZmlsdGVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcblxuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gQ29tbWFuZGJhcklubGluZWZpbHRlckNvbXBvbmVudCkpIGl0ZW1zOiBRdWVyeUxpc3Q8Q29tbWFuZGJhcklubGluZWZpbHRlckNvbXBvbmVudD47XG4gIHB1YmxpYyB2aXNpYmxlSXRlbXM6IENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJDb21wb25lbnRbXSA9IFtdO1xuICBwdWJsaWMgaGlkZGVuSXRlbXM6IENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJDb21wb25lbnRbXSA9IFtdO1xuXG4gIHByaXZhdGUgY29tcG9uZW50RGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvYnNlcnZhYmxlTWVkaWE6IE9ic2VydmFibGVNZWRpYSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQubmV4dCgpO1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8vIGxpc3RlbiB0byBjaGFuZ2VzIG9mIHZpZXdwb3J0IHNpemVcbiAgICBtZXJnZSh0aGlzLm9ic2VydmFibGVNZWRpYS5hc09ic2VydmFibGUoKSwgdGhpcy5pdGVtcy5jaGFuZ2VzLCBvZih0cnVlKSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZpZXcoKSB7XG4gICAgY29uc3QgdmlzaWJsZSA9IFtdO1xuICAgIGNvbnN0IGhpZGRlbiA9IFtdO1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHRoaXMudHJ1ZU9yTWF0Y2hlc01lZGlhU3RhdGUoaXRlbS5oaWRlKSA/IGhpZGRlbi5wdXNoKGl0ZW0pIDogdmlzaWJsZS5wdXNoKGl0ZW0pKTtcblxuICAgIHRoaXMudmlzaWJsZUl0ZW1zLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5oaWRkZW5JdGVtcy5sZW5ndGggPSAwO1xuICAgIGlmIChoaWRkZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBubyBtb3JlLWFjdGlvbnMtbWVudSBmb3IgYSBzaW5nbGUgaGlkZGVuIGFjdGlvblxuICAgICAgdGhpcy52aXNpYmxlSXRlbXMucHVzaCguLi50aGlzLml0ZW1zLnRvQXJyYXkoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlzaWJsZUl0ZW1zLnB1c2goLi4udmlzaWJsZSk7XG4gICAgICB0aGlzLmhpZGRlbkl0ZW1zLnB1c2goLi4uaGlkZGVuKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRydWVPck1hdGNoZXNNZWRpYVN0YXRlKHZhbHVlOiBzdHJpbmcgfCBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDAgfHwgdGhpcy5vYnNlcnZhYmxlTWVkaWEuaXNBY3RpdmUodmFsdWUpO1xuICAgIH1cbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmNpQ29tbWFuZGJhclF1aWNraWx0ZXJzXSwgYmNpLWNvbW1hbmRiYXItcXVpY2tmaWx0ZXJzJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29tbWFuZGJhclF1aWNrZmlsdGVyc0RpcmVjdGl2ZSB7XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW2JjaVRvZ2dsZUJ1dHRvbl1gXG59KVxuZXhwb3J0IGNsYXNzIFRvZ2dsZUJ1dHRvbkRpcmVjdGl2ZSB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29tbWFuZGJhci1idXR0b24tYWN0aXZlJylcbiAgQElucHV0KClcbiAgYWN0aXZlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XG4gICAgdGhpcy50b2dnbGUuZW1pdCh0aGlzLmFjdGl2ZSk7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWNvbW1hbmRiYXItYWN0aXZlLWZpbHRlcnMnLFxuICB0ZW1wbGF0ZTogYDxtYXQtY2hpcC1saXN0PlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L21hdC1jaGlwLWxpc3Q+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tbWFuZGJhckFjdGl2ZUZpbHRlcnNDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktY2hpcCcsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxtYXQtY2hpcCBbcmVtb3ZhYmxlXT1cInJlbW92YWJsZVwiIFtuZ0NsYXNzXT1cInsgJ25vdC1yZW1vdmFibGUnOiAhcmVtb3ZhYmxlIH1cIiAocmVtb3ZlZCk9XCJyZW1vdmVkLm5leHQoJGV2ZW50KVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDxtYXQtaWNvbiAqbmdJZj1cInJlbW92YWJsZVwiIG1hdENoaXBSZW1vdmUgZm9udEljb249XCJCb3NjaC1JYy1hYm9ydFwiIGFyaWEtbGFiZWw9XCJyZW1vdmVcIj48L21hdC1pY29uPlxuPC9tYXQtY2hpcD5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLzpob3N0e3BhZGRpbmc6MH06aG9zdCAubWF0LWNoaXAubm90LXJlbW92YWJsZXtiYWNrZ3JvdW5kLWNvbG9yOiM3ZDg3OTA7YmFja2dyb3VuZC1pbWFnZTpub25lO2NvbG9yOiNmZmZ9YF0sXG59KVxuZXhwb3J0IGNsYXNzIEJjaUNoaXBDb21wb25lbnQge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYmNpLWNoaXAnKSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgZXZlbnQgZW1pdHRlciB0byBwcm9wYWdhdGUgdGhlIHJlbW92YWwtZXZlbnRcbiAgICovXG4gIEBPdXRwdXQoKSByZW1vdmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSByZW1vdmUtaWNvbiBpcyBiZWluZyBkaXNwbGF5ZWRcbiAgICovXG4gIEBJbnB1dCgpIHJlbW92YWJsZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXN0ZXJEZXRhaWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbWFzdGVyLWRldGFpbC12aWV3LmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIGRldGFpbCBwYXJ0IG9mIHRoZSB7QGxpbmsgTWFzdGVyRGV0YWlsVmlld0NvbXBvbmVudH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWRldGFpbC12aWV3JyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsVmlld0NvbXBvbmVudCB7XG5cbiAgLy8gVE9ETzogZmluZCBhIHNvbHV0aW9uIHNvIHRoYXQgPGJjaS1wYWdlLWNvbnRlbnQ+IGNhbiBiZSB1c2VkIGluIGRlbW8vc29sdXRpb24gaW5zdGVhZCBvZiBpc1BhZGRlZCBhbmQgc3RpbGwgdGhlIHNpZGViYXIgaXMgd29ya2luZ1xuICBASW5wdXQoKSBwdWJsaWMgaXNQYWRkZWQgPSB0cnVlO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlTWVkaWEgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTWF0U2lkZW5hdiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCwgdGFrZSwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNb2RhbFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL21vZGFsLXdpbmRvdy9tb2RhbC13aW5kb3cuc2VydmljZSc7XG5pbXBvcnQgeyBEZXRhaWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9kZXRhaWwvZGV0YWlsLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE1hc3RlclZpZXdDb21wb25lbnQgfSBmcm9tICcuL21hc3Rlci9tYXN0ZXItdmlldy5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRoZSBNYXN0ZXJEZXRhaWxDb21wb25lbnQgY29udGFpbnMgYSB7QGxpbmsgTWFzdGVyVmlld0NvbXBvbmVudH0gYW5kIGEge0BsaW5rIERldGFpbFZpZXdDb21wb25lbnR9LlxuICpcbiAqIEluIHRoZSB7QGxpbmsgTWFzdGVyVmlld0NvbXBvbmVudH0gdHlwaWNhbGx5IGEgY29sbGVjdGlvbiBvZiBvYmplY3RzIGlzIHNob3duLlxuICpcbiAqIEJ5IGNsaWNrIG9uIG9uZSBvZiB0aGVzZSBvYmplY3RzIGEge0BsaW5rIERldGFpbFZpZXdDb21wb25lbnR9IGlzIG1hZGUgdmlzaWJsZSBhbmQgc2hvd3MgdGhlIGRldGFpbHMgb2YgdGhlIHNlbGVjdGVkIG9iamVjdC5cbiAqXG4gKiB0byBmaWxsIHRoZSB7QGxpbmsgTWFzdGVyVmlld0NvbXBvbmVudH0gYW5kIHRoZSB7QGxpbmsgRGV0YWlsVmlld0NvbXBvbmVudH0gdGhhdCBpcyBzaG93biB3aGVuIG9uZSBvZiB0aGUgb2JqZWN0cyBpcyBjbGlja2VkLlxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLW1hc3Rlci1kZXRhaWwtdmlldycsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxuZy10ZW1wbGF0ZSAjbWFzdGVyVmlldz5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYmNpLW1hc3Rlci12aWV3XCI+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNkZXRhaWxWaWV3PlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJiY2ktZGV0YWlsLXZpZXdcIj48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPlxuXG48bWF0LXNpZGVuYXYtY29udGFpbmVyIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxtYXQtc2lkZW5hdi1jb250ZW50IGNsYXNzPVwiY29udGFpbmVyLWNvbnRlbnRcIj5cbiAgICA8IS0tIE1hc3RlciAtLT5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWFzdGVyVmlld1wiPjwvbmctY29udGFpbmVyPlxuICA8L21hdC1zaWRlbmF2LWNvbnRlbnQ+XG5cbiAgPG1hdC1zaWRlbmF2ICpuZ0lmPVwiIXVzZURpYWxvZ1wiXG4gICAgICAgICAgICAgICBpZD1cImRldGFpbENvbnRhaW5lclwiXG4gICAgICAgICAgICAgICBbb3BlbmVkXT1cImlzRGV0YWlsc1Nob3duXCJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlQ2xvc2VdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgKGNsb3NlZCk9XCJkZXRhaWxzQ2xvc2VkKClcIlxuICAgICAgICAgICAgICAgW21vZGVdPVwidXNlU2xpZGVvdmVyU2lkZWJhck1vZGUgPyAnb3ZlcicgOiAnc2lkZSdcIlxuICAgICAgICAgICAgICAgcG9zaXRpb249XCJlbmRcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJzaWRlYmFyLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgW2NsYXNzLmNvbnRhaW5lci1jb250ZW50LXBhZGRlZF09XCJkZXRhaWxWaWV3Q29tcG9uZW50Py5pc1BhZGRlZFwiXG4gICAgICAgICAgICAgICBbY2xhc3Muc2lkZWJhci1mdWxsLXNpemVdPVwidXNlU2xpZGVvdmVyU2lkZWJhck1vZGVcIlxuICAgICAgICAgICAgICAgW2NsYXNzLnNpZGViYXItdmlzaWJsZV09XCIhdXNlU2xpZGVvdmVyU2lkZWJhck1vZGVcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZGV0YWlsVmlld1wiPjwvbmctY29udGFpbmVyPlxuICA8L21hdC1zaWRlbmF2PlxuPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi86aG9zdHtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW59LmNvbnRhaW5lcnt3aWR0aDoxMDAlO2hlaWdodDppbmhlcml0fS5jb250YWluZXItY29udGVudC1wYWRkZWR7cGFkZGluZzozMnB4fW1hdC1zaWRlbmF2LWNvbnRhaW5lciAubWF0LWRyYXdlci1jb250ZW50LmNvbnRhaW5lci1jb250ZW50e292ZXJmbG93OmF1dG99bWF0LXNpZGVuYXYtY29udGFpbmVyIC5zaWRlYmFyLWNvbnRlbnR7b3ZlcmZsb3cteDpoaWRkZW59LnNpZGViYXItZnVsbC1zaXple2xlZnQ6MDtib3JkZXItbGVmdDp1bnNldH0uc2lkZWJhci12aXNpYmxle2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjYmZjMGMyfWBdXG59KVxuZXhwb3J0IGNsYXNzIE1hc3RlckRldGFpbFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIHRydWUgd2hlbiB0aGUgZGV0YWlscyB2aWV3IGlzIHNob3duIGFzIGRpYWxvZyBvciBhcyBzaWRlYmFyXG4gICAqL1xuICBwdWJsaWMgaXNEZXRhaWxzU2hvd246IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUaGUge0BsaW5rIERldGFpbFZpZXdDb21wb25lbnR9IGNhbiBiZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBuZXh0IHRvIHRoZSB7QGxpbmsgTWFzdGVyVmlld0NvbXBvbmVudH0gb3IgYXMgYSBzbGlkZW91dC9zbGlkZW92ZXIgYWJvdmUgaXQuXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgdXNlU2xpZGVvdmVyU2lkZWJhck1vZGU6IGJvb2xlYW47XG4gIC8qKlxuICAgKiByZWZlcmVuY2VzIHRoZSB7QGxpbmsgRGV0YWlsVmlld0NvbXBvbmVudH0gc2hvd24gaW4gdGhlIHNpZGViYXJcbiAgICovXG4gIEBDb250ZW50Q2hpbGQoRGV0YWlsVmlld0NvbXBvbmVudCkgcHVibGljIGRldGFpbFZpZXdDb21wb25lbnQ6IERldGFpbFZpZXdDb21wb25lbnQ7XG5cbiAgLyoqXG4gICAqIHdoZW4gdHJ1ZSB0aGUgZGV0YWlscyB2aWV3IGlzIHNob3duIGFzIGRpYWxvZ1xuICAgKiBlbHNlIGl0IGlzIHNob3duIGFzIG1vZGFsIGRpYWxvZ1xuICAgKi9cbiAgcHJpdmF0ZSBfdXNlRGlhbG9nID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBkZXRhaWxzRGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGV0YWlsVmlld0NvbXBvbmVudD47XG4gIC8qKlxuICAgKiByZWZlcmVuY2VzIHRoZSB0ZW1wbGF0ZSBjb250YWluaW5nIHRoZSB7QGxpbmsgRGV0YWlsVmlld0NvbXBvbmVudH0gb2YgdGhpcyBNYXN0ZXJEZXRhaWxWaWV3Q29tcG9uZW50XG4gICAqL1xuICBAVmlld0NoaWxkKCdkZXRhaWxWaWV3JykgcHJpdmF0ZSBkZXRhaWxzVmlldzogVGVtcGxhdGVSZWY8RGV0YWlsVmlld0NvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGQoTWF0U2lkZW5hdikgcHJpdmF0ZSBzaWRlbmF2OiBNYXRTaWRlbmF2O1xuICBwcml2YXRlIGNsb3NlZCQ6IFN1YmplY3Q8dW5kZWZpbmVkPiA9IG5ldyBTdWJqZWN0KCk7XG4gIGNsb3NlZCA9IHRoaXMuY2xvc2VkJC5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxXaW5kb3dTZXJ2aWNlOiBNb2RhbFdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgICAgICAgICAgIHByaXZhdGUgb2JzZXJ2YWJsZU1lZGlhOiBPYnNlcnZhYmxlTWVkaWEpIHtcbiAgfVxuXG4gIGdldCB1c2VEaWFsb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZURpYWxvZztcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCB1c2VEaWFsb2codXNlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuaXNEZXRhaWxzU2hvd24pIHtcbiAgICAgIHRoaXMuY2xvc2VEZXRhaWxzKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCksXG4gICAgICAgICAgdGFrZSgxKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3VzZURpYWxvZyA9IHVzZTtcbiAgICAgICAgICB0aGlzLm9wZW5EZXRhaWxzKCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91c2VEaWFsb2cgPSB1c2U7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLm5leHQoKTtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnVzZVNsaWRlb3ZlclNpZGViYXJNb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIHRoaXMgQmVoYXZpb3JTdWJqZWN0IGVtaXRzIGNoYW5nZXMgdG8gdGhlIHZpZXdwb3J0IChhbmQgaW5pdGlhbGx5IHRoZSBjdXJyZW50IHZpZXdwb3J0IHN0YXRlKVxuICAgICAgdGhpcy5vYnNlcnZhYmxlTWVkaWEuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51c2VTbGlkZW92ZXJTaWRlYmFyTW9kZSA9IHRoaXMub2JzZXJ2YWJsZU1lZGlhLmlzQWN0aXZlKCdsdC1sZycpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgdGhlIHtAbGluayBEZXRhaWxWaWV3Q29tcG9uZW50fSB2aXNpYmxlIGFuZCBzaG93IHRoZSBkZXRhaWxzIG9mIHRoZSBvYmplY3QgaWRlbnRpZmllZCBieSBpZFxuICAgKi9cbiAgb3BlbkRldGFpbHMoKSB7XG4gICAgaWYgKHRoaXMudXNlRGlhbG9nKSB7XG4gICAgICAvKlxuICAgICAqIEN1cnJlbnRseSwgdGhlcmUgYXJlIHNldmVyYWwgZ2l0aHViIGlzc3VlcyBvbiBjcmVhdGluZyB2aWV3cyBpbiB0aGUgbmdBZnRlclZpZXdJbml0IHdoaWNoIGlzbid0IHBvc3NpYmxlIHdpdGhvdXQgZXJyb3IgaW4gRGV2LU1vZGVcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNTYzNFxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwMTMxXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTc1NzJcbiAgICAgKiAuLi5cbiAgICAgKiBUT0RPOiBUaGlzIHNvbHV0aW9uIGlzIG9uZSB3b3JrYXJvdW5kIGZvciB0aGlzIGlzc3VlLCBidXQgc2hvdWxkIGJlIGZpeGVkIGFzIHNvb24gYXMgcG9zc2libGUgc2luY2UgaXRzIGhhY2t5IVxuICAgICAqL1xuICAgICAgaWYgKCF0aGlzLmlzRGV0YWlsc1Nob3duKSB7XG4gICAgICAgIHRoaXMuaXNEZXRhaWxzU2hvd24gPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9wZW5EZXRhaWxzTW9kYWwoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNEZXRhaWxzU2hvd24gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSB7QGxpbmsgRGV0YWlsVmlld0NvbXBvbmVudH1cbiAgICogQHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGEgc2luZ2xlIHRydWUgd2hlbiB0aGUgZGV0YWlscyBpcyBmaW5pc2hlZCBjbG9zaW5nXG4gICAqL1xuICBjbG9zZURldGFpbHMoKTogT2JzZXJ2YWJsZTx1bmRlZmluZWQ+IHtcbiAgICBpZiAoIXRoaXMuaXNEZXRhaWxzU2hvd24gfHwgKHRoaXMudXNlRGlhbG9nICYmICF0aGlzLmRldGFpbHNEaWFsb2dSZWYpKSB7XG4gICAgICByZXR1cm4gb2YoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZWRPYnNlcnZhYmxlID0gdGhpcy51c2VEaWFsb2cgPyB0aGlzLmRldGFpbHNEaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKSA6IGZyb20odGhpcy5zaWRlbmF2LmNsb3NlKCkpO1xuICAgIGlmICh0aGlzLnVzZURpYWxvZykge1xuICAgICAgdGhpcy5kZXRhaWxzRGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgfVxuICAgIHJldHVybiBjbG9zZWRPYnNlcnZhYmxlLnBpcGUoXG4gICAgICB0YXAoKCkgPT4gdGhpcy5jbG9zZWQkLm5leHQoKSksXG4gICAgICB0YXAoKCkgPT4gdGhpcy5pc0RldGFpbHNTaG93biA9IGZhbHNlKSxcbiAgICAgIGZpcnN0KCksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZXRhaWxzQ2xvc2VkKCkgaXMgY2FsbGVkIHdoZW4gdGhlICB7QGxpbmsgRGV0YWlsVmlld0NvbXBvbmVudH0gaXMgY2xvc2VkLlxuICAgKiBlaXRoZXIgd2hlbiB0aGUgZGV0YWlscyBkaWFsb2cgaXMgY2xvc2VkIG9yIHdoZW4gdGhlIHNpZGViYXIgaGFzIGRpc2FwcGVhcmVkXG4gICAqL1xuICBwdWJsaWMgZGV0YWlsc0Nsb3NlZCgpIHtcbiAgICB0aGlzLmlzRGV0YWlsc1Nob3duID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zZWQkLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgb3BlbkRldGFpbHNNb2RhbCgpIHtcbiAgICB0aGlzLmRldGFpbHNEaWFsb2dSZWYgPSB0aGlzLm1vZGFsV2luZG93U2VydmljZS5vcGVuRGlhbG9nV2l0aENvbXBvbmVudCh0aGlzLmRldGFpbHNWaWV3LCB7XG4gICAgICBkaXNhYmxlQ2xvc2U6IHRydWUsXG4gICAgICBjbG9zZU9uTmF2aWdhdGlvbjogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLmRldGFpbHNEaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5kZXRhaWxzQ2xvc2VkKCk7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFzdGVyRGV0YWlsVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL21hc3Rlci1kZXRhaWwtdmlldy5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRoZSBtYXN0ZXIgcGFydCBvZiB0aGUge0BsaW5rIE1hc3RlckRldGFpbFZpZXdDb21wb25lbnR9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1tYXN0ZXItdmlldycsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Omhvc3QuY29udGFpbmVyLWNvbnRlbnQtcGFkZGVke3BhZGRpbmc6MzJweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBNYXN0ZXJWaWV3Q29tcG9uZW50IHtcblxuICAvLyBUT0RPOiBmaW5kIGEgc29sdXRpb24gc28gdGhhdCA8YmNpLXBhZ2UtY29udGVudD4gY2FuIGJlIHVzZWQgaW4gZGVtby9zb2x1dGlvbiBpbnN0ZWFkIG9mIGlzUGFkZGVkIGFuZCBzdGlsbCB0aGUgc2lkZWJhciBpcyB3b3JraW5nXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29udGFpbmVyLWNvbnRlbnQtcGFkZGVkJylcbiAgQElucHV0KClcbiAgcHVibGljIGlzUGFkZGVkID0gdHJ1ZTtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1maWx0ZXItcGlja2VyJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPGRpdiBjbGFzcz1cImRpYWxvZy1oZWFkZXJcIj5cbiAgPGgzIG1hdERpYWxvZ1RpdGxlPkZpbHRlcjwvaDM+XG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idXR0b25cIiBtYXQtaWNvbi1idXR0b24gdGFiaW5kZXg9XCItMVwiIChjbGljayk9XCJjbG9zZU1vZGFsKClcIj5cbiAgICA8aSBjbGFzcz1cIkJvc2NoLUljIEJvc2NoLUljLWFib3J0XCI+PC9pPlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuPG1hdC1kaWFsb2ctY29udGVudD5cbiAgPGRpdiBjbGFzcz1cImRpYWxvZy1ib2R5XCI+XG4gICAgPG1hdC1saXN0PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYmNpLWZpbHRlci1lbnRyeVwiPjwvbmctY29udGVudD5cbiAgICA8L21hdC1saXN0PlxuXG4gICAgPG1hdC1kaXZpZGVyIFt2ZXJ0aWNhbF09XCJ0cnVlXCI+PC9tYXQtZGl2aWRlcj5cblxuICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItdmlld1wiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWZvb3RlclwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tcHJpbWFyeVwiIChjbGljayk9XCJhcHBseUZpbHRlcnMoKVwiPkFwcGx5PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi1zZWNvbmRhcnlcIiAoY2xpY2spPVwiY2xvc2VNb2RhbCgpXCI+Q2FuY2VsPC9idXR0b24+XG4gIDwvZGl2PlxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+XG5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy5kaWFsb2ctYm9keXt3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3d9LmRpYWxvZy1ib2R5IG1hdC1saXN0e2ZsZXgtYmFzaXM6Y2FsYyg1MCUgLSAyNHB4KTtoZWlnaHQ6NDAwcHg7b3ZlcmZsb3c6YXV0bztiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh3aGl0ZSAzMCUscmdiYSgyNTUsMjU1LDI1NSwwKSksbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMCksI2ZmZiA3MCUpIDAgMTAwJSxyYWRpYWwtZ3JhZGllbnQoZmFydGhlc3Qtc2lkZSBhdCA1MCUgMCxyZ2JhKDAsMCwwLC4yKSxyZ2JhKDAsMCwwLDApKSxyYWRpYWwtZ3JhZGllbnQoZmFydGhlc3Qtc2lkZSBhdCA1MCUgMTAwJSxyZ2JhKDAsMCwwLC4yKSxyZ2JhKDAsMCwwLDApKSAwIDEwMCU7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtY29sb3I6I2ZmZjtiYWNrZ3JvdW5kLXNpemU6MTAwJSA0MHB4LDEwMCUgNDBweCwxMDAlIDE0cHgsMTAwJSAxNHB4O2JhY2tncm91bmQtYXR0YWNobWVudDpsb2NhbCxsb2NhbCxzY3JvbGwsc2Nyb2xsfS5kaWFsb2ctYm9keSBtYXQtZGl2aWRlcnttYXJnaW46MCAyNHB4O2ZsZXgtYmFzaXM6YXV0b30uZGlhbG9nLWJvZHkgLmZpbHRlci12aWV3e2ZsZXgtYmFzaXM6Y2FsYyg1MCUgLSAyNHB4KX0uZGlhbG9nLWZvb3RlcnttYXJnaW4tdG9wOjQwcHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uZGlhbG9nLWZvb3RlciBidXR0b24uYnV0dG9uLXNlY29uZGFyeXttYXJnaW4tbGVmdDoxNnB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBmaWx0ZXI6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjbG9zZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgYXBwbHlGaWx0ZXJzKCkge1xuICAgIHRoaXMuZmlsdGVyLmVtaXQoKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5jbG9zZS5lbWl0KCk7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1maWx0ZXItZW50cnknLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bWF0LWxpc3QtaXRlbSAoY2xpY2spPVwic2hvd0ZpbHRlckRldGFpbHMoKVwiIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogaXNTZWxlY3RlZH1cIj5cbiAgPHNwYW4gbWF0TGluZT57eyBmaWx0ZXJUaXRsZSB9fSA8L3NwYW4+XG4gIDxtYXQtaWNvbiAqbmdJZj1cImlzQWN0aXZlXCIgZm9udEljb249XCJCb3NjaC1JYy1jaGVja21hcmtcIj48L21hdC1pY29uPlxuICA8bWF0LWljb24gKm5nSWY9XCJpc0FjdGl2ZVwiIGZvbnRJY29uPVwiQm9zY2gtSWMtZGVsZXRlXCJcbiAgICAgICAgICAgIChjbGljayk9XCJkZWFjdGl2YXRlRmlsdGVyKClcIj48L21hdC1pY29uPlxuPC9tYXQtbGlzdC1pdGVtPlxuXG5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLzpob3N0e2ZsZXg6MX1tYXQtbGlzdC1pdGVte2N1cnNvcjpwb2ludGVyfW1hdC1saXN0LWl0ZW0uYWN0aXZlLG1hdC1saXN0LWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMTQyLDIwNywuMTUpfW1hdC1saXN0LWl0ZW0gLm1hdC1pY29ue2xpbmUtaGVpZ2h0OjEhaW1wb3J0YW50O21hcmdpbi1sZWZ0OjhweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJFbnRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGZpbHRlclRpdGxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgcHVibGljIGlzQWN0aXZlOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2VsZWN0OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2hvd0ZpbHRlckRldGFpbHMoKSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLmZpbHRlclRpdGxlKTtcbiAgfVxuXG4gIGRlYWN0aXZhdGVGaWx0ZXIoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQoKHRoaXMuZmlsdGVyVGl0bGUpKTtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLXBhZ2UtY29udGVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLzpob3N0e3BhZGRpbmc6MDtmbGV4Om5vbmU7ZGlzcGxheTpibG9jaztvdmVyZmxvdzphdXRvO3Bvc2l0aW9uOmFic29sdXRlfTpob3N0LmZ1bGwtc3BhY2V7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX06aG9zdC5mdWxsLXNwYWNlLnBhZGRpbmd7d2lkdGg6Y2FsYygxMDAlIC0gMiAqIDMycHgpO2hlaWdodDpjYWxjKDEwMCUgLSAyICogMzJweCl9Omhvc3QucGFkZGluZ3twYWRkaW5nOjMycHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZUNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8qKlxuICAgKiBTZXRzIHdpZHRoIGFuZCBoZWlnaHQgdG8gMTAwJSBzbyB0aGF0IHRoZSBjb21wbGV0ZSBjb250ZW50IHNwYWNlIGlzIGZpbGxlZC4gRGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mdWxsLXNwYWNlJykgQElucHV0KCkgZnVsbFNwYWNlID0gdHJ1ZTtcbiAgLyoqXG4gICAqIFNldHMgcGFkZGluZyB0byAzMnB4LiBUbyBlbmFibGUgZnVsbC13aWR0aCBjb250ZW50LCBzZXQgdGhpcyB0byBmYWxzZS4gRGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wYWRkaW5nJykgQElucHV0KCkgcGFkZGluZyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTaWRlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3NpZGUtcGFuZWwvc2lkZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1wYW5lbC9maWx0ZXItcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGVQYW5lbEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NpZGUtcGFuZWwtaXRlbS9zaWRlLXBhbmVsLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlbnRXU2lkZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50LXctc2lkZS1wYW5lbC9jb250ZW50LXctc2lkZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ1NwaW5uZXJEaXJlY3RpdmUgfSBmcm9tICcuL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcblxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlLCBNYXRDaGlwc01vZHVsZSwgTWF0RGlhbG9nTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRMaXN0TW9kdWxlLCBNYXRNZW51TW9kdWxlLCBNYXRTaWRlbmF2TW9kdWxlLCBNYXRTbmFja0Jhck1vZHVsZSwgTWF0VG9vbGJhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5pbXBvcnQgeyBCY2lUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi90aWxlL3RpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlbnRTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50LXNpZGViYXIvY29udGVudC1zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZW50U2lkZWJhckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQtc2lkZWJhci1pdGVtL2NvbnRlbnQtc2lkZWJhci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tYW5kYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tYW5kYmFyL2NvbW1hbmRiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1hbmRiYXJBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tYW5kYmFyL2FjdGlvbnMvYWN0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbWFuZGJhckJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tbWFuZGJhci9idXR0b24vY29tbWFuZGJhci1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1hbmRiYXJCdXR0b25zRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21tYW5kYmFyL2NvbW1hbmRiYXItYnV0dG9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbWFuZGJhckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbW1hbmRiYXIvaXRlbS9jb21tYW5kYmFyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tYW5kYmFyL2lubGluZWZpbHRlcnMvY29tbWFuZGJhci1pbmxpbmVmaWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tYW5kYmFySW5saW5lZmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tYW5kYmFyL2lubGluZWZpbHRlci9jb21tYW5kYmFyLWlubGluZWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbWFuZGJhclF1aWNrZmlsdGVyc0RpcmVjdGl2ZSB9IGZyb20gJy4vY29tbWFuZGJhci9jb21tYW5kYmFyLXF1aWNrZmlsdGVycy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVG9nZ2xlQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21tYW5kYmFyL3RvZ2dsZS1idXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbW1hbmRiYXJBY3RpdmVGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tYW5kYmFyL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY2lDaGlwQ29tcG9uZW50IH0gZnJvbSAnLi9jaGlwL2NoaXAuY29tcG9uZW50JztcbmltcG9ydCB7IERldGFpbFZpZXdDb21wb25lbnQgfSBmcm9tICcuL21hc3Rlci1kZXRhaWwvZGV0YWlsL2RldGFpbC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXN0ZXJEZXRhaWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9tYXN0ZXItZGV0YWlsL21hc3Rlci1kZXRhaWwtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFzdGVyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbWFzdGVyLWRldGFpbC9tYXN0ZXIvbWFzdGVyLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXBpY2tlci9maWx0ZXItcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJFbnRyeUNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXBpY2tlci9maWx0ZXItZW50cnkvZmlsdGVyLWVudHJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1jb250ZW50L3BhZ2UtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYnNNb2R1bGUgfSBmcm9tICcuL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgLy8gVE9ETzogbmVlZGVkP1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRmxleExheW91dE1vZHVsZSxcbiAgICBCcmVhZGNydW1ic01vZHVsZSxcbiAgICAvKiBBbmd1bGFyIE1hdGVyaWFsICovXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRmlsdGVyUGFuZWxDb21wb25lbnQsXG4gICAgU2lkZVBhbmVsQ29tcG9uZW50LFxuICAgIFNpZGVQYW5lbEl0ZW1Db21wb25lbnQsXG4gICAgQ29udGVudFNpZGViYXJDb21wb25lbnQsXG4gICAgQ29udGVudFNpZGViYXJJdGVtQ29tcG9uZW50LFxuICAgIENvbnRlbnRXU2lkZVBhbmVsQ29tcG9uZW50LFxuICAgIExvYWRpbmdTcGlubmVyRGlyZWN0aXZlLFxuICAgIEJjaUNoaXBDb21wb25lbnQsXG4gICAgQmNpVGlsZUNvbXBvbmVudCxcbiAgICBDb21tYW5kYmFySXRlbUNvbXBvbmVudCxcbiAgICBDb21tYW5kYmFyQnV0dG9uQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJCdXR0b25zRGlyZWN0aXZlLFxuICAgIENvbW1hbmRiYXJDb21wb25lbnQsXG4gICAgQ29tbWFuZGJhckFjdGlvbnNDb21wb25lbnQsXG4gICAgQ29tbWFuZGJhckNvbXBvbmVudCxcbiAgICBDb21tYW5kYmFySW5saW5lZmlsdGVyc0NvbXBvbmVudCxcbiAgICBDb21tYW5kYmFySW5saW5lZmlsdGVyQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJRdWlja2ZpbHRlcnNEaXJlY3RpdmUsXG4gICAgVG9nZ2xlQnV0dG9uRGlyZWN0aXZlLFxuICAgIENvbW1hbmRiYXJBY3RpdmVGaWx0ZXJzQ29tcG9uZW50LFxuICAgIE1hc3RlckRldGFpbFZpZXdDb21wb25lbnQsXG4gICAgTWFzdGVyVmlld0NvbXBvbmVudCxcbiAgICBEZXRhaWxWaWV3Q29tcG9uZW50LFxuICAgIEZpbHRlclBpY2tlckNvbXBvbmVudCxcbiAgICBGaWx0ZXJFbnRyeUNvbXBvbmVudCxcbiAgICBQYWdlQ29udGVudENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEJyZWFkY3J1bWJzTW9kdWxlLFxuICAgIEZpbHRlclBhbmVsQ29tcG9uZW50LFxuICAgIFNpZGVQYW5lbENvbXBvbmVudCxcbiAgICBTaWRlUGFuZWxJdGVtQ29tcG9uZW50LFxuICAgIENvbnRlbnRTaWRlYmFyQ29tcG9uZW50LFxuICAgIENvbnRlbnRTaWRlYmFySXRlbUNvbXBvbmVudCxcbiAgICBDb250ZW50V1NpZGVQYW5lbENvbXBvbmVudCxcbiAgICBMb2FkaW5nU3Bpbm5lckRpcmVjdGl2ZSxcbiAgICBCY2lUaWxlQ29tcG9uZW50LFxuICAgIE1hc3RlckRldGFpbFZpZXdDb21wb25lbnQsXG4gICAgTWFzdGVyVmlld0NvbXBvbmVudCxcbiAgICBEZXRhaWxWaWV3Q29tcG9uZW50LFxuICAgIEJjaUNoaXBDb21wb25lbnQsXG4gICAgQ29tbWFuZGJhckl0ZW1Db21wb25lbnQsXG4gICAgQ29tbWFuZGJhckJ1dHRvbkNvbXBvbmVudCxcbiAgICBDb21tYW5kYmFyQnV0dG9uc0RpcmVjdGl2ZSxcbiAgICBDb21tYW5kYmFyQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJBY3Rpb25zQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJDb21wb25lbnQsXG4gICAgQ29tbWFuZGJhcklubGluZWZpbHRlcnNDb21wb25lbnQsXG4gICAgQ29tbWFuZGJhcklubGluZWZpbHRlckNvbXBvbmVudCxcbiAgICBDb21tYW5kYmFyUXVpY2tmaWx0ZXJzRGlyZWN0aXZlLFxuICAgIFRvZ2dsZUJ1dHRvbkRpcmVjdGl2ZSxcbiAgICBDb21tYW5kYmFyQWN0aXZlRmlsdGVyc0NvbXBvbmVudCxcbiAgICBGaWx0ZXJQaWNrZXJDb21wb25lbnQsXG4gICAgRmlsdGVyRW50cnlDb21wb25lbnQsXG4gICAgUGFnZUNvbnRlbnRDb21wb25lbnQsXG4gICAgLyogQW5ndWxhciBNYXRlcmlhbCAqL1xuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQmNpU2hhcmVkTW9kdWxlIHtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ2FuRGVhY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpZGVudGl0eSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3JvdXRlcl9zdGF0ZSc7XG5cbmltcG9ydCB7IGRlZmF1bHRJZkVtcHR5LCBmaWx0ZXIsIGZsYXRNYXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2RldGFpbHMtY29tcG9uZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xvc2VEZXRhaWxzR3VhcmQgaW1wbGVtZW50cyBDYW5EZWFjdGl2YXRlPERldGFpbHNDb21wb25lbnQ+IHtcblxuICBjYW5EZWFjdGl2YXRlKGNvbXBvbmVudDogRGV0YWlsc0NvbXBvbmVudCwgY3VycmVudFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBjdXJyZW50U3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsIG5leHRTdGF0ZT86IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbkRlYWN0aXZhdGVEZXRhaWxzQ29tcG9uZW50KDxEZXRhaWxzQ29tcG9uZW50PiBjb21wb25lbnQsIG5leHRTdGF0ZSwgY3VycmVudFN0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhc09ic2VydmFibGU8VD4odmFsdWU6IFQgfCBPYnNlcnZhYmxlPFQ+KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2YodmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFyZURldGFpbFJvdXRlc1dpdGhTYW1lTWFzdGVyKGN1cnJlbnRTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCwgbmV4dFN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XG4gICAgaWYgKCFuZXh0U3RhdGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudENoaWxkID0gY3VycmVudFN0YXRlLnJvb3QuZmlyc3RDaGlsZDtcbiAgICBsZXQgbmV4dENoaWxkID0gbmV4dFN0YXRlLnJvb3QuZmlyc3RDaGlsZDtcbiAgICB3aGlsZSAoISFjdXJyZW50Q2hpbGQgJiYgISFuZXh0Q2hpbGQpIHtcbiAgICAgIGlmICh0aGlzLmlzRGV0YWlsc0NvbXBvbmVudFR5cGUoY3VycmVudENoaWxkLmNvbXBvbmVudCkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGV0YWlsc0NvbXBvbmVudFR5cGUobmV4dENoaWxkLmNvbXBvbmVudCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnRDaGlsZC5wYXJlbnQuY29tcG9uZW50ID09PSBuZXh0Q2hpbGQucGFyZW50LmNvbXBvbmVudDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudENoaWxkID0gY3VycmVudENoaWxkLmZpcnN0Q2hpbGQ7XG4gICAgICAgIG5leHRDaGlsZCA9IG5leHRDaGlsZC5maXJzdENoaWxkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNEZXRhaWxzQ29tcG9uZW50VHlwZShjb21wb25lbnRUeXBlOiBUeXBlPGFueT4gfCBzdHJpbmcgfCBudWxsKSB7XG4gICAgaWYgKGNvbXBvbmVudFR5cGUgaW5zdGFuY2VvZiBUeXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0RldGFpbHNDb21wb25lbnQoY29tcG9uZW50VHlwZS5wcm90b3R5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNEZXRhaWxzQ29tcG9uZW50KGNvbXBvbmVudDogYW55KTogY29tcG9uZW50IGlzIERldGFpbHNDb21wb25lbnQge1xuICAgIHJldHVybiBjb21wb25lbnQuY2FuQ2xvc2VEZXRhaWxzICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGNhbkRlYWN0aXZhdGVEZXRhaWxzQ29tcG9uZW50KGNvbXBvbmVudDogRGV0YWlsc0NvbXBvbmVudCwgbmV4dFN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBjdXJyZW50U3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICByZXR1cm4gdGhpcy5hc09ic2VydmFibGUoY29tcG9uZW50LmNhbkNsb3NlRGV0YWlscygpKS5waXBlKFxuICAgICAgZmlsdGVyKGlkZW50aXR5KSxcbiAgICAgIGZsYXRNYXAoKCkgPT4gdGhpcy5hcmVEZXRhaWxSb3V0ZXNXaXRoU2FtZU1hc3RlcihjdXJyZW50U3RhdGUsIG5leHRTdGF0ZSlcbiAgICAgICAgPyBvZih0cnVlKVxuICAgICAgICA6IHRoaXMuYXNPYnNlcnZhYmxlKGNvbXBvbmVudC5jbG9zZURldGFpbHMoKSkucGlwZShtYXAoKCkgPT4gdHJ1ZSkpKSxcbiAgICAgIGRlZmF1bHRJZkVtcHR5KGZhbHNlKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBCcmVhZGNydW1iIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiLCJzdGF0ZSIsInRzbGliXzEuX19leHRlbmRzIiwiTWF0RGlhbG9nIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0U2lkZW5hdk1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXREaWFsb2dNb2R1bGUiLCJNYXRMaXN0TW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVdFLDJCQUFHOzs7O0lBQUgsVUFBSSxHQUFXO1FBQ2IsT0FBTyxD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RUFBRSxTQUFTO0lBQzFCLGVBQWUsRUFBRSxTQUFTO0lBQzFCLGVBQWUsRUFBRSxTQUFTO0lBQzFCLGVBQWUsRUFBRSxTQUFTO0lBQzFCLGVBQWUsRUFBRSxTQUFTO0lBQzFCLGVBQWUsRUFBRSxTQUFTO0lBQzFCLGNBQWMsRUFBRSxTQUFTO0lBQ3pCLGNBQWMsRUFBRSxTQUFTO0lBQ3pCLGNBQWMsRUFBRSxTQUFTO0lBQ3pCLGNBQWMsRUFBRSxTQUFTO0lBQ3pCLGNBQWMsRUFBRSxTQUFTO0lBQ3pCLGNBQWMsRUFBRSxTQUFTO0lBQ3pCLGdCQUFnQixFQUFFLFNBQVM7SUFDM0IsZ0JBQWdCLEVBQUUsU0FBUztJQUMzQixnQkFBZ0IsRUFBRSxTQUFTO0lBQzNCLGdCQUFnQixFQUFFLFNBQVM7SUFDM0IsZ0JBQWdCLEVBQUUsU0FBUztJQUMzQixnQkFBZ0IsRUFBRSxTQUFTO0lBQzNCLGlCQUFpQixFQUFFLFNBQVM7SUFDNUIsaUJBQWlCLEVBQUUsU0FBUztJQUM1QixpQkFBaUIsRUFBRSxTQUFTO0lBQzVCLGlCQUFpQixFQUFFLFNBQVM7SUFDNUIsaUJBQWlCLEVBQUUsU0FBUztJQUM1QixpQkFBaUIsRUFBRSxTQUFTO0lBQzVCLGlCQUFpQixFQUFFLFNBQVM7SUFDNUIsaUJBQWlCLEVBQUUsU0FBUztJQUM1QixpQkFBaUIsRUFBRSxTQUFTO0lBQzVCLGlCQUFpQixFQUFFLFNBQVM7SUFDNUIsaUJBQWlCLEVBQUUsU0FBUztJQUM1QixpQkFBaUIsRUFBRSxTQUFTO0lBQzVCLGtCQUFrQixFQUFFLFNBQVM7SUFDN0Isa0JBQWtCLEVBQUUsU0FBUztJQUM3QixrQkFBa0IsRUFBRSxTQUFTO0lBQzdCLGtCQUFrQixFQUFFLFNBQVM7SUFDN0Isa0JBQWtCLEVBQUUsU0FBUztJQUM3QixrQkFBa0IsRUFBRSxTQUFTO0lBQzdCLGlCQUFpQixFQUFFLFNBQVM7SUFDNUIsaUJBQWlCLEVBQUUsU0FBUztJQUM1QixpQkFBaUIsRUFBRSxTQUFTO0lBQzVCLGlCQUFpQixFQUFFLFNBQVM7SUFDNUIsaUJBQWlCLEVB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