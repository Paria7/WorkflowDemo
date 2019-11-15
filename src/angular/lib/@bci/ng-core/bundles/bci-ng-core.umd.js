(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common'), require('@angular/material'), require('@angular/router'), require('rxjs'), require('@angular/material/dialog'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/flex-layout'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('rxjs/operators'), require('@angular/animations'), require('@angular/material/expansion'), require('@angular/material/list'), require('@angular/material/sidenav'), require('@angular/material/card')) :
    typeof define === 'function' && define.amd ? define('@bci/ng-core', ['exports', '@angular/core', '@angular/common/http', '@angular/common', '@angular/material', '@angular/router', 'rxjs', '@angular/material/dialog', '@angular/forms', '@angular/material/button', '@angular/material/icon', '@angular/flex-layout', '@angular/cdk/overlay', '@angular/cdk/portal', 'rxjs/operators', '@angular/animations', '@angular/material/expansion', '@angular/material/list', '@angular/material/sidenav', '@angular/material/card'], factory) :
    (factory((global.bci = global.bci || {}, global.bci['ng-core'] = {}),global.ng.core,global.ng.common.http,global.ng.common,global.ng.material,global.ng.router,global.rxjs,global.ng.material.dialog,global.ng.forms,global.ng.material.button,global.ng.material.icon,global.ng['flex-layout'],global.ng.cdk.overlay,global.ng.cdk.portal,global.rxjs.operators,global.ng.animations,global.ng.material.expansion,global.ng.material.list,global.ng.material.sidenav,global.ng.material.card));
}(this, (function (exports,i0,i1,i2,material,i1$1,rxjs,i1$2,forms,button,icon,flexLayout,overlay,portal,operators,animations,expansion,list,sidenav,card) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LoggerService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */ LoggerService.ngInjectableDef = i0.defineInjectable({ factory: function LoggerService_Factory() { return new LoggerService(); }, token: LoggerService, providedIn: "root" });
        return LoggerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NotFoundComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'bci-not-found',
                        template: "<div class=\"container\"><h2>Page Not Found</h2>\n  <p></p>\n</div>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        NotFoundComponent.ctorParameters = function () {
            return [
                { type: LoggerService }
            ];
        };
        return NotFoundComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CoreConfigurationService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        CoreConfigurationService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.Location }
            ];
        };
        /** @nocollapse */ CoreConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function CoreConfigurationService_Factory() { return new CoreConfigurationService(i0.inject(i1.HttpClient), i0.inject(i2.Location)); }, token: CoreConfigurationService, providedIn: "root" });
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
    var CoreConfig = (function () {
        function CoreConfig() {
        }
        return CoreConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CORE_CONFIG_URL = new i0.InjectionToken('CORE_CONFIG_URL');
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
    var dialogDefaultOptions = __assign({}, new material.MatDialogConfig(), {
        width: 'auto',
        height: 'auto'
    });
    var CoreConfigurationModule = (function () {
        function CoreConfigurationModule(parentModule) {
            throwIfAlreadyLoaded(parentModule, 'CoreConfigurationModule');
        }
        CoreConfigurationModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [i1.HttpClientModule],
                        providers: [
                            {
                                provide: i0.APP_INITIALIZER,
                                useFactory: coreConfigInitializer,
                                // useFactory: (coreConfigService: CoreConfigurationService) =>  coreConfigInitializer(coreConfigService) ,
                                deps: [CoreConfigurationService, CORE_CONFIG_URL],
                                multi: true
                            },
                            {
                                provide: material.MAT_DIALOG_DEFAULT_OPTIONS,
                                useValue: dialogDefaultOptions
                            }
                        ]
                    },] },
        ];
        /** @nocollapse */
        CoreConfigurationModule.ctorParameters = function () {
            return [
                { type: CoreConfigurationModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
            ];
        };
        return CoreConfigurationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NotificationService = (function () {
        function NotificationService(router, logger) {
            var _this = this;
            this.router = router;
            this.logger = logger;
            this.subject = new rxjs.Subject();
            this.keepAfterNavigationChange = false;
            // clear alert message on route change
            router.events.subscribe(function (event) {
                if (event instanceof i1$1.NavigationStart) {
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
                if (keepAfterNavigationChange === void 0) {
                    keepAfterNavigationChange = false;
                }
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
                if (keepAfterNavigationChange === void 0) {
                    keepAfterNavigationChange = false;
                }
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        NotificationService.ctorParameters = function () {
            return [
                { type: i1$1.Router },
                { type: LoggerService }
            ];
        };
        /** @nocollapse */ NotificationService.ngInjectableDef = i0.defineInjectable({ factory: function NotificationService_Factory() { return new NotificationService(i0.inject(i1$1.Router), i0.inject(LoggerService)); }, token: NotificationService, providedIn: "root" });
        return NotificationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NotificationComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'bci-notification',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div *ngIf=\"message\" class=\"notification-container\" [class.bg-danger]=\"message.type==='error'\">\n  <span *ngIf=\"message.type==='error'\" class=\"icon-problem icon\">&nbsp;</span>\n  {{message.text}}\n</div>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.notification-container{position:absolute;left:50%;width:30em;-webkit-transform:translate(-50%);transform:translate(-50%);border:1px solid #a0a0a0;padding:.5rem 1.5rem;border-top:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px}"]
                    },] },
        ];
        /** @nocollapse */
        NotificationComponent.ctorParameters = function () {
            return [
                { type: LoggerService },
                { type: NotificationService }
            ];
        };
        return NotificationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BciImprintDetailsService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        BciImprintDetailsService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.Location }
            ];
        };
        /** @nocollapse */ BciImprintDetailsService.ngInjectableDef = i0.defineInjectable({ factory: function BciImprintDetailsService_Factory() { return new BciImprintDetailsService(i0.inject(i1.HttpClient), i0.inject(i2.Location)); }, token: BciImprintDetailsService, providedIn: "root" });
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
    var ModalWindowService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        ModalWindowService.ctorParameters = function () {
            return [
                { type: i1$2.MatDialog },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i2.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ ModalWindowService.ngInjectableDef = i0.defineInjectable({ factory: function ModalWindowService_Factory() { return new ModalWindowService(i0.inject(i1$2.MatDialog), i0.inject(i2.DOCUMENT)); }, token: ModalWindowService, providedIn: "root" });
        return ModalWindowService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BciImprintComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'bci-imprint',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"dialog-header\">\n  <h3 matDialogTitle>Imprint</h3>\n  <button class=\"close-button\" mat-icon-button tabindex=\"-1\" (click)=\"clickCancel()\">\n    <i class=\"Bosch-Ic Bosch-Ic-abort\"></i>\n  </button>\n</div>\n<mat-dialog-content>\n  <a class=\"header-logo\">\n    <img src=\"./assets/img/bosch-invented-for-life.svg\" alt=\"Bosch Invented For Life Logo\">\n  </a>\n\n  <table class=\"name-and-version-container\">\n    <tbody>\n    <tr>\n      <td>Name</td>\n      <td>{{ data?.name }}</td>\n    </tr>\n    <tr>\n      <td>Version</td>\n      <td>{{ data?.version || '0.0.0' }}</td>\n    </tr>\n    </tbody>\n  </table>\n\n  <table>\n    <tbody>\n    <tr>\n      <td>Name and address</td>\n      <td>\n        <p>{{data?.address?.name || 'Robert Bosch Manufacturing Solutions GmbH' }}</p>\n        <p>{{data?.address?.street || 'Postfach 30 02 20' }}</p>\n        <p>{{data?.address?.city || '70442 Stuttgart' }}</p>\n        <p>{{data?.address?.country || 'GERMANY' }}</p>\n      </td>\n    </tr>\n    <tr>\n      <td>Contact</td>\n      <td>\n        <p *ngIf=\"data?.contactAtBosch\">{{data.contactAtBosch}}</p>\n        <p>\n          <a href=\"mailto:{{data?.contactMail || 'kontakt@bosch.com'}}\">{{data?.contactMail || 'kontakt@bosch.com'}}</a>\n        </p>\n      </td>\n    </tr>\n    <tr>\n      <td>Board of management</td>\n      <td>{{ data?.boardOfManagement || 'Enno Scharphuis, Dierk G\u00F6ckel, Dr. Stefan A\u00DFmann'}}</td>\n    </tr>\n    </tbody>\n  </table>\n</mat-dialog-content>\n\n\n\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */mat-dialog-content{font-family:Bosch-Sans;font-weight:300;font-size:14px}.header-logo img{align-self:center;height:58.2px;width:180px;margin-bottom:64px;margin-top:16px}table{font-family:Bosch-Sans;font-weight:300;font-size:14px}table td{padding:0 32px 32px 0;border-bottom:0}table td p{margin:0;font-family:Bosch-Sans;font-weight:300;font-size:14px}table tr{border-bottom:none}table tr>td:first-child{font-family:Bosch-Sans;font-size:14px;font-weight:700;color:#525f6b;padding-right:32px;vertical-align:top}.name-and-version-container{margin-bottom:32px}a:focus{outline:0}"]
                    },] },
        ];
        /** @nocollapse */
        BciImprintComponent.ctorParameters = function () {
            return [
                { type: ModalWindowService },
                { type: BciImprintDetailsService },
                { type: material.MatDialogRef }
            ];
        };
        return BciImprintComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ENVIRONMENT_PROD = new i0.InjectionToken('ENVIRONMENT_PROD');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Simple logout component to appear next to the user nav element. It will be properly aligned to the sidebar nav item.
     *
     * This component is dynamically created using portals, it must be included in the entryComponents of your NgModule!
     */
    var LogoutComponent = (function () {
        function LogoutComponent() {
            /**
             * Informs that the component wishes to be closed. Used by the overlay handler.
             */
            this.onClose = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'bci-logout',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"bci-sidebar-nav-item-overlay\">\n  <div class=\"bci-sidebar-nav-item-overlay-header\">\n    <span>{{config?.title}}</span>\n    <button class=\"close-button\" mat-icon-button (click)=\"close()\">\n      <mat-icon fontIcon=\"Bosch-Ic-abort\"></mat-icon>\n    </button>\n  </div>\n  <div class=\"bci-sidebar-nav-item-overlay-buttons\">\n    <button class=\"button-primary\" (click)=\"logout()\">Logout</button>\n  </div>\n</div>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.bci-sidebar-nav-item-overlay{font-family:Bosch-Sans;font-weight:300;font-size:16px;background-color:#fff;position:relative;margin-left:8px;display:flex;flex-direction:column;align-items:flex-start;width:220px;padding:16px}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header{width:100%;display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;margin-bottom:16px}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header .close-button .mat-icon,.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header .close-button.mat-icon-button{line-height:unset;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header .close-button .Bosch-Ic{font-size:20px!important}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-buttons{width:100%;display:flex;flex-direction:row;justify-content:flex-end}.bci-sidebar-nav-item-overlay:after{right:100%;top:calc(100% - 24px);border:8px solid rgba(255,255,255,0);content:\" \";height:0;width:0;position:absolute;pointer-events:none;border-right-color:#fff;margin-top:-8px}"]
                    },] },
        ];
        LogoutComponent.propDecorators = {
            config: [{ type: i0.Input }]
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
    var BciCoreModule = (function () {
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
            { type: i0.NgModule, args: [{
                        imports: [
                            i2.CommonModule,
                            forms.FormsModule,
                            i1.HttpClientModule,
                            CoreConfigurationModule,
                            flexLayout.FlexLayoutModule,
                            i1$2.MatDialogModule,
                            button.MatButtonModule,
                            icon.MatIconModule,
                            overlay.OverlayModule,
                            portal.PortalModule
                        ],
                        declarations: [NotFoundComponent, NotificationComponent, BciImprintComponent, LogoutComponent],
                        exports: [NotFoundComponent, NotificationComponent, i1.HttpClientModule, BciImprintComponent, flexLayout.FlexLayoutModule, LogoutComponent],
                        entryComponents: [BciImprintComponent, LogoutComponent]
                    },] },
        ];
        /** @nocollapse */
        BciCoreModule.ctorParameters = function () {
            return [
                { type: BciCoreModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] },
                { type: icon.MatIconRegistry }
            ];
        };
        return BciCoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CORE_CONFIG = new i0.InjectionToken('CORE_CONFIG', {
        factory: function () { return i0.inject(CoreConfigurationService).getConfig(); },
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
    var BciContentComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var BciFooterComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var BreadcrumbsService = (function () {
        function BreadcrumbsService(router, activatedRoute) {
            var _this = this;
            this.router = router;
            this.activatedRoute = activatedRoute;
            /**
             * Always show "home"-route in breadcrumbs (default: false)
             */
            this.stickyRootBreadcrumb = false;
            this.breadcrumbs$ = new rxjs.BehaviorSubject([]);
            /**
             * Observable providing the list of Breadcrumb (current as well as future lists)
             */
            this.breadcrumbs = this.breadcrumbs$.asObservable();
            this.pathToBreadcrumbMap = new Map();
            this.temporaryPathToBreadcrumbMap = new Map();
            this.ngUnsubscribe = new rxjs.Subject();
            // update breadcrumbs after navgiation
            this.router.events.pipe(operators.takeUntil(this.ngUnsubscribe), operators.filter(function (event) { return event instanceof i1$1.NavigationEnd; })).subscribe(function () { return _this.refresh(); });
            // clean up temporary path-to-title mappings upon start of navigation
            this.router.events.pipe(operators.takeUntil(this.ngUnsubscribe), operators.filter(function (event) { return event instanceof i1$1.NavigationStart; })).subscribe(function (event) {
                /** @type {?} */
                var oldUrl = _this.normalizePath(((event)).url);
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (pathSegments_1_1 && !pathSegments_1_1.done && (_a = pathSegments_1.return))
                            _a.call(pathSegments_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        BreadcrumbsService.ctorParameters = function () {
            return [
                { type: i1$1.Router },
                { type: i1$1.ActivatedRoute }
            ];
        };
        /** @nocollapse */ BreadcrumbsService.ngInjectableDef = i0.defineInjectable({ factory: function BreadcrumbsService_Factory() { return new BreadcrumbsService(i0.inject(i1$1.Router), i0.inject(i1$1.ActivatedRoute)); }, token: BreadcrumbsService, providedIn: "root" });
        return BreadcrumbsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BciHeaderComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'bci-header',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"bci-header-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n  <ng-container *ngIf=\"header?.length;\">\n    <div class=\"header-title\">{{header}}</div>\n  </ng-container>\n  <div class=\"header-content\">\n    <bci-breadcrumbs fxHide.lt-md=\"true\" role=\"navigation\" aria-label=\"breadcrumbs\">\n      <bci-breadcrumb *ngFor=\"let breadcrumb of breadcrumbService.breadcrumbs | async; let last = last\"\n                      [attr.aria-current]=\"last ? 'page' : false\"\n                      [title]=\"breadcrumb.title\"\n                      [url]=\"breadcrumb.url\">\n      </bci-breadcrumb>\n    </bci-breadcrumbs>\n    <ng-content></ng-content>\n  </div>\n  <a class=\"header-logo\" (click)=\"onLogoClicked()\">\n    <img src=\"./assets/img/bosch-logo-only.svg\" alt=\"Bosch Invented For Life Logo\">\n  </a>\n</div>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.supergraphic{z-index:10}.bci-header-container{padding:0 32px;height:64px;border-width:0 0 1px;border-color:#dfdfe0;border-style:solid;border-radius:0}.bci-header-container .header-title{margin-right:32px;font-family:Bosch-Sans;font-weight:300;font-size:28px}.bci-header-container .header-content{margin-right:32px}.bci-header-container .header-logo{margin-left:auto;height:100%;width:140px}.bci-header-container .header-logo img{height:100%;width:140px}"]
                    },] },
        ];
        /** @nocollapse */
        BciHeaderComponent.ctorParameters = function () {
            return [
                { type: i1$1.Router },
                { type: BreadcrumbsService }
            ];
        };
        BciHeaderComponent.propDecorators = {
            header: [{ type: i0.Input }],
            logoRoute: [{ type: i0.Input }]
        };
        return BciHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BciLoaderService = (function () {
        function BciLoaderService() {
            this.loaderSubject = new rxjs.Subject();
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        BciLoaderService.ctorParameters = function () { return []; };
        /** @nocollapse */ BciLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function BciLoaderService_Factory() { return new BciLoaderService(); }, token: BciLoaderService, providedIn: "root" });
        return BciLoaderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BciLoaderComponent = (function () {
        function BciLoaderComponent(bciLoaderService) {
            this.bciLoaderService = bciLoaderService;
            this.show = false;
            this.componentDestroyed$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        BciLoaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.bciLoaderService.loaderState.pipe(operators.takeUntil(this.componentDestroyed$)).subscribe(function (state) {
                    _this.show = state;
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
            { type: i0.Component, args: [{
                        selector: 'bci-loader',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"loader-background-container\" *ngIf=\"show\">\n  <div class=\"loader-backdrop\"></div>\n  <div class=\"loader-overlay\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <img src=\"./assets/img/loading.gif\">\n  </div>\n</div>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.loader-hidden{visibility:hidden}.loader-overlay{left:0;right:0;top:0;bottom:0;position:absolute;z-index:10000;contain:strict}.loader-backdrop{left:0;top:0;position:absolute;z-index:2;display:block;width:100%;height:100%;background-color:#000;opacity:.3;-webkit-transform:translateZ(0);transform:translateZ(0)}"],
                    },] },
        ];
        /** @nocollapse */
        BciLoaderComponent.ctorParameters = function () {
            return [
                { type: BciLoaderService }
            ];
        };
        return BciLoaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BciSidebarService = (function () {
        function BciSidebarService(router, location, locationStrategy) {
            this.router = router;
            this.location = location;
            this.locationStrategy = locationStrategy;
            this.sidebarState$ = new rxjs.BehaviorSubject(true);
            this.sidebarVisibility$ = new rxjs.BehaviorSubject(true);
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        BciSidebarService.ctorParameters = function () {
            return [
                { type: i1$1.Router },
                { type: i2.Location },
                { type: i2.LocationStrategy }
            ];
        };
        /** @nocollapse */ BciSidebarService.ngInjectableDef = i0.defineInjectable({ factory: function BciSidebarService_Factory() { return new BciSidebarService(i0.inject(i1$1.Router), i0.inject(i2.Location), i0.inject(i2.LocationStrategy)); }, token: BciSidebarService, providedIn: "root" });
        return BciSidebarService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BciSidebarComponent = (function () {
        function BciSidebarComponent(sidebarService) {
            this.sidebarService = sidebarService;
            this.applicationTitle = '';
            this.open = true;
            this.visible = true;
            this.componentDestroyed$ = new rxjs.Subject();
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
                this.sidebarService.getSidebarState().pipe(operators.takeUntil(this.componentDestroyed$)).subscribe(function (state) {
                    _this.open = state;
                    if (state && _this.visible) {
                        _this.sidenav.open();
                    }
                    else {
                        _this.sidenav.close();
                    }
                });
                this.sidebarService.getSidebarVisibility().pipe(operators.takeUntil(this.componentDestroyed$)).subscribe(function (visible) {
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
            { type: i0.Component, args: [{
                        selector: 'bci-sidebar',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-sidenav-container class=\"\">\n\n\n  <mat-sidenav #sidenav mode=\"side\" [disableClose]=\"true\" fxLayout=\"column\"><!--[opened]=\"isOpen() && isVisible()\"-->\n    <div class=\"sidenav-header\">\n      <h1>{{applicationTitle}}</h1>\n      <div class=\"burger\" (click)=\"toggleSideNavigationBar();\">\n        <div class=\"burger-line\" [class.burgerTop]=\"isOpen()\"></div>\n        <div class=\"burger-line\" [class.burgerMiddle]=\"isOpen()\"></div>\n        <div class=\"burger-line\" [class.burgerBottom]=\"isOpen()\"></div>\n      </div>\n    </div>\n    <bci-sidebar-nav-list [navItems]=\"sidebarLinks\"\n                          *ngIf=\"sidebarLinks && sidebarLinks.length > 0\"></bci-sidebar-nav-list>\n\n    <ng-content select=\"bci-sidebar-footer\"></ng-content>\n  </mat-sidenav>\n\n  <div class=\"content-container\" fxLayout=\"row\">\n    <div class=\"sidenav-header closed-sidebar\" *ngIf=\"!isOpen() && isVisible()\" (click)=\"toggleSideNavigationBar();\">\n      <div class=\"burger\">\n        <div class=\"burger-line\" [class.burgerTop]=\"isOpen()\"></div>\n        <div class=\"burger-line\" [class.burgerMiddle]=\"isOpen()\"></div>\n        <div class=\"burger-line\" [class.burgerBottom]=\"isOpen()\"></div>\n      </div>\n    </div>\n    <div class=\"bci-content-container-main\" fxLayout=\"column\" fxFlex=\"grow\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</mat-sidenav-container>\n",
                        styles: ["@charset \"UTF-8\";/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */mat-sidenav-container{height:100vh}mat-sidenav-container mat-sidenav{background-color:#525f6b;margin-top:16px;width:300px}mat-sidenav-container mat-sidenav .sidenav-items{padding:0;border-width:0 0 1px;border-color:rgba(255,255,255,.05);border-style:solid;border-radius:0}mat-sidenav-container mat-sidenav .sidenav-items li{width:100%;margin:0;border-width:1px 0 0;border-color:rgba(255,255,255,.05);border-style:solid;border-radius:0}mat-sidenav-container mat-sidenav .sidenav-items .header-container,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item{padding:0 16px;display:inline-block;width:100%;line-height:48px;font-family:Bosch-Sans;font-weight:300;font-size:16px;border-width:0 0 0 4px;border-color:transparent;border-style:solid;border-radius:0}mat-sidenav-container mat-sidenav .sidenav-items .header-container:hover,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item:hover{background-color:rgba(0,0,0,.05);color:#bfc0c2}mat-sidenav-container mat-sidenav .sidenav-items .header-container.active,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item.active{border-color:#008ecf}mat-sidenav-container mat-sidenav .sidenav-items .header-container.has-items::before,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item.has-items::before{font-family:Bosch-Ic;content:\"\uF11D\";font-style:normal;font-size:24px}mat-sidenav-container mat-sidenav .sidenav-subitems{padding:0 0 0 16px}mat-sidenav-container ::ng-deep .mat-drawer-content{overflow:hidden}mat-sidenav-container .sidenav-header{cursor:default;position:relative;height:64px;border-width:0 0 1px;border-color:rgba(255,255,255,.05);border-style:solid;border-radius:0}mat-sidenav-container .sidenav-header.closed-sidebar{margin-top:16px;width:50px;height:100vh;background-color:#525f6b;cursor:pointer}mat-sidenav-container .sidenav-header .burger{display:inline-block;position:absolute;right:0;margin:25px 16px 0 0;cursor:pointer}mat-sidenav-container .sidenav-header .burger .burger-line{height:1px;width:24px;background-color:#fff;margin-bottom:6px;transition:.4s}mat-sidenav-container .sidenav-header .burger .burger-line.burgerMiddle{opacity:0}mat-sidenav-container .sidenav-header .burger .burger-line.burgerTop{-webkit-transform:rotate(-45deg) translateY(4px) translateX(-4px);transform:rotate(-45deg) translateY(4px) translateX(-4px);opacity:1!important}mat-sidenav-container .sidenav-header .burger .burger-line.burgerBottom{-webkit-transform:rotate(45deg) translateX(-6.5px) translateY(-6.5px);transform:rotate(45deg) translateX(-6.5px) translateY(-6.5px);opacity:1!important}mat-sidenav-container .sidenav-header h1{display:inline-block;margin:0 0 0 16px;line-height:64px;white-space:nowrap;width:220px;overflow:hidden;text-overflow:ellipsis;color:#bfc0c2;font-family:Bosch-Sans;font-weight:300;font-size:20px}.content-container{position:absolute;left:0;right:0;top:0;bottom:0}.bci-content-container-main{margin:16px 0 0;overflow:hidden}"]
                    },] },
        ];
        /** @nocollapse */
        BciSidebarComponent.ctorParameters = function () {
            return [
                { type: BciSidebarService }
            ];
        };
        BciSidebarComponent.propDecorators = {
            applicationTitle: [{ type: i0.Input }],
            sidebarLinks: [{ type: i0.Input }],
            sidenav: [{ type: i0.ViewChild, args: ['sidenav',] }]
        };
        return BciSidebarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BciSidebarFooterComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'bci-sidebar-footer',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"bci-sidebar-footer-container\">\n</div>\n<bci-sidebar-nav-list [navItems]=\"sidebarFooterLinks\"></bci-sidebar-nav-list>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{margin-top:auto}.bci-sidebar-footer-container{border-width:1px 0 0;border-color:#fff;border-style:solid;border-radius:0;margin:16px 16px 0;width:calc(100% - 32px)}"]
                    },] },
        ];
        /** @nocollapse */
        BciSidebarFooterComponent.ctorParameters = function () { return []; };
        BciSidebarFooterComponent.propDecorators = {
            sidebarFooterLinks: [{ type: i0.Input }]
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
    var SidebarNavItem = (function () {
        function SidebarNavItem() {
        }
        return SidebarNavItem;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BciSidebarExpanderComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'bci-sidebar-expander',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"module-container\">\n  <div class=\"header-container\" (click)=\"toggleSidebar()\">\n    {{header}}\n    <i class=\"expander-icon\" [ngClass]=\"{'expanded': expanded}\"></i>\n  </div>\n  <div class=\"content-container\" [ngClass]=\"{'expanded': expanded}\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                        styles: ["@charset \"UTF-8\";/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.header-container{padding:0 16px;display:inline-block;width:100%;line-height:48px;transition:all .2s ease;color:#fff;cursor:hand;font-family:Bosch-Sans;font-weight:300;font-size:16px;border-width:0 0 0 4px;border-color:transparent;border-style:solid;border-radius:0}.header-container:hover{background-color:rgba(0,0,0,.05);color:#bfc0c2}.header-container .expander-icon{position:absolute;right:16px;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out}.header-container .expander-icon:before{font-family:Bosch-Ic;content:\"\uF11D\";font-style:normal;font-size:20px}.header-container .expander-icon.expanded{display:inline-block;transition:-webkit-transform .2s ease-in;transition:transform .2s ease-in;transition:transform .2s ease-in,-webkit-transform .2s ease-in;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.content-container{max-height:0;overflow:hidden;transition:max-height .2s ease-out}.content-container.expanded{max-height:2000px;transition:max-height .6s ease-in}"]
                    },] },
        ];
        BciSidebarExpanderComponent.propDecorators = {
            header: [{ type: i0.Input }],
            expanded: [{ type: i0.Input }]
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
    var BciSidebarNavItemComponent = (function () {
        function BciSidebarNavItemComponent(router, sidebarService, overlay$$1, viewContainerRef, injector) {
            this.router = router;
            this.sidebarService = sidebarService;
            this.overlay = overlay$$1;
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
                var config = new overlay.OverlayConfig({
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
                var componentRef = overlayRef.attach(new portal.ComponentPortal(overlayComponent, this.viewContainerRef));
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
            { type: i0.Component, args: [{
                        selector: 'bci-sidebar-nav-item',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-list-item [style.position]=\"'relative'\" [class.active]=\"isActiveRoute(navItem)\" (click)=\"onFirstLevelClick()\"\n               cdk-overlay-origin #popoverOrigin=\"cdkOverlayOrigin\">\n  <mat-icon matListIcon fontSet=\"bosch\" [fontIcon]=\"navItem?.icon\" *ngIf=\"navItem?.icon\"\n            class=\"nav-link-icon\"></mat-icon>\n  <p matLine>{{ navItem?.title }}</p>\n  <mat-icon *ngIf=\"hasItems()\" fontSet=\"bosch\" fontIcon=\"Bosch-Ic-arrow-expand-right\" class=\"expand-icon\"\n            [@indicatorRotate]=\"getExpandedState()\"></mat-icon>\n</mat-list-item>\n<ng-container *ngIf=\"hasItems()\">\n  <div [@bodyExpansion]=\"getExpandedState()\" class=\"sub-nav-links-container\" [class.sub-nav-links-expanded]=\"expanded\">\n    <!--<ng-content select=\"bci-sidebar-nav-item\" ></ng-content>-->\n    <mat-list-item class=\"sub-nav-link\" *ngFor=\"let item of navItem?.items\" (click)=\"onSecondLevelClick(item)\"\n                   [class.active]=\"isActiveRoute(item)\">\n      <p matLine>{{ item?.title }}</p>\n    </mat-list-item>\n  </div>\n</ng-container>\n",
                        styles: ["@charset \"UTF-8\";/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{display:block;border-width:0 0 1px;border-color:rgba(255,255,255,.05);border-style:solid;border-radius:0}:host:hover{background-color:rgba(0,0,0,.05)}:host:hover mat-icon,:host:hover p{color:#bfc0c2}:host .mat-list-item{border-width:0 0 0 4px;border-color:transparent;border-style:solid;border-radius:0}:host .mat-list-item.active{border-color:#008ecf}:host .mat-list-item.has-items::before{font-family:Bosch-Ic;content:\"\uF11D\";font-style:normal;font-size:24px}:host .mat-list-item.sub-nav-link{margin-left:36px}:host .mat-list-item mat-icon,:host .mat-list-item p{color:#fff}:host .mat-list-item mat-icon{font-size:20px}:host .mat-list-item p{font-family:Bosch-Sans;font-weight:300;font-size:16px}:host .mat-list-item ::ng-deep .mat-list-text{padding:0 8px}:host .mat-list-item ::ng-deep .mat-list-item-content{padding:0 16px 0 8px}.sub-nav-links-expanded .sub-nav-links-container{overflow:visible}.sub-nav-links-container,.sub-nav-links-container.ng-animating{overflow:hidden}"],
                        animations: [
                            animations.trigger('bodyExpansion', [
                                animations.state(ITEM_EXPANDED_STATES.collapsed, animations.style({ height: '0px', visibility: 'hidden' })),
                                animations.state(ITEM_EXPANDED_STATES.expanded, animations.style({ height: '*', visibility: 'visible' })),
                                animations.transition(ITEM_EXPANDED_STATES.expanded + " <=> " + ITEM_EXPANDED_STATES.collapsed, animations.animate(SIDENAV_LINKS_ANIMATION_TIMING)),
                            ]),
                            animations.trigger('indicatorRotate', [
                                animations.state(ITEM_EXPANDED_STATES.collapsed, animations.style({ transform: 'rotate(0deg)' })),
                                animations.state(ITEM_EXPANDED_STATES.expanded, animations.style({ transform: 'rotate(90deg)' })),
                                animations.transition(ITEM_EXPANDED_STATES.expanded + " <=> " + ITEM_EXPANDED_STATES.collapsed, animations.animate(SIDENAV_LINKS_ANIMATION_TIMING)),
                            ])
                        ]
                    },] },
        ];
        /** @nocollapse */
        BciSidebarNavItemComponent.ctorParameters = function () {
            return [
                { type: i1$1.Router },
                { type: BciSidebarService },
                { type: overlay.Overlay },
                { type: i0.ViewContainerRef },
                { type: i0.Injector }
            ];
        };
        BciSidebarNavItemComponent.propDecorators = {
            navItem: [{ type: i0.Input }],
            popoverOrigin: [{ type: i0.ViewChild, args: ['popoverOrigin',] }]
        };
        return BciSidebarNavItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BciSidebarNavListComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'bci-sidebar-nav-list',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-nav-list>\n  <bci-sidebar-nav-item *ngFor=\"let navItem of navItems\" [navItem]=\"navItem\">\n  </bci-sidebar-nav-item>\n</mat-nav-list>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.mat-nav-list{padding-top:0}"]
                    },] },
        ];
        /** @nocollapse */
        BciSidebarNavListComponent.ctorParameters = function () { return []; };
        BciSidebarNavListComponent.propDecorators = {
            navItems: [{ type: i0.Input }]
        };
        return BciSidebarNavListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BreadcrumbComponent = (function () {
        function BreadcrumbComponent(cdr) {
            this.cdr = cdr;
            this.titleAttribute = undefined;
            this._omitted = false;
        }
        Object.defineProperty(BreadcrumbComponent.prototype, "omitted", {
            get: /**
             * @return {?}
             */ function () {
                return this._omitted;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: i0.Component, args: [{
                        selector: 'bci-breadcrumb',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<a *ngIf=\"url !== undefined\" [routerLink]=\"url\">{{omitted ? '\u2026' : title}}</a>\n<ng-container *ngIf=\"url === undefined\">{{omitted ? '\u2026' : title}}</ng-container>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        BreadcrumbComponent.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef }
            ];
        };
        BreadcrumbComponent.propDecorators = {
            title: [{ type: i0.Input }],
            url: [{ type: i0.Input }],
            titleAttribute: [{ type: i0.HostBinding, args: ['attr.title',] }],
            omitted: [{ type: i0.Input }]
        };
        return BreadcrumbComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BreadcrumbsComponent = (function () {
        function BreadcrumbsComponent() {
            /**
             * Maximum number of breadcrumbs shown starting from the root.
             */
            this.fixedLead = 1;
            /**
             * Maximum number of breadscrumbs shown starting from the current page.
             */
            this.fixedTail = 2;
            this.componentDestroyed$ = new rxjs.Subject();
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
                this.breadcrumbs.changes.pipe(operators.takeUntil(this.componentDestroyed$)).subscribe(function () {
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
            { type: i0.Component, args: [{
                        selector: 'bci-breadcrumbs',
                        template: "<ng-content></ng-content>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        BreadcrumbsComponent.ctorParameters = function () { return []; };
        BreadcrumbsComponent.propDecorators = {
            true: [{ type: i0.HostBinding, args: ['class.breadcrumbs',] }],
            breadcrumbs: [{ type: i0.ContentChildren, args: [BreadcrumbComponent,] }],
            fixedLead: [{ type: i0.Input }],
            fixedTail: [{ type: i0.Input }]
        };
        return BreadcrumbsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BreadcrumbsModule = (function () {
        function BreadcrumbsModule() {
        }
        BreadcrumbsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i2.CommonModule,
                            i1$1.RouterModule,
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
    var BciAppComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'bci-app',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<bci-content>\n  <bci-sidebar [sidebarLinks]=\"sidebarLinks\" [applicationTitle]=\"applicationTitle\">\n\n    <bci-sidebar-footer [sidebarFooterLinks]=\"sidebarFooterLinks\"></bci-sidebar-footer>\n\n\n    <bci-header>\n    </bci-header>\n\n    <div class=\"content\">\n      <ng-content></ng-content>\n    </div>\n  </bci-sidebar>\n\n</bci-content>\n",
                        styles: [".content{position:relative;overflow:auto;height:100%;width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        BciAppComponent.ctorParameters = function () {
            return [
                { type: BreadcrumbsService }
            ];
        };
        BciAppComponent.propDecorators = {
            applicationTitle: [{ type: i0.Input }],
            sidebarLinks: [{ type: i0.Input }],
            sidebarFooterLinks: [{ type: i0.Input }]
        };
        return BciAppComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BciLayoutModule = (function () {
        function BciLayoutModule() {
        }
        BciLayoutModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i2.CommonModule,
                            i1$1.RouterModule,
                            flexLayout.FlexLayoutModule,
                            BreadcrumbsModule,
                            sidenav.MatSidenavModule,
                            expansion.MatExpansionModule,
                            icon.MatIconModule,
                            list.MatListModule,
                            overlay.OverlayModule,
                            portal.PortalModule
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
                            overlay.OverlayModule,
                            portal.PortalModule
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
    var NavigationService = (function () {
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
                        .pipe(operators.map(function (links) {
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
                    return rxjs.throwError('NavigationService: no endpointNavigation provided in CORE_CONFIG');
                }
            };
        NavigationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        NavigationService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.Location },
                { type: CoreConfig, decorators: [{ type: i0.Inject, args: [CORE_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ NavigationService.ngInjectableDef = i0.defineInjectable({ factory: function NavigationService_Factory() { return new NavigationService(i0.inject(i1.HttpClient), i0.inject(i2.Location), i0.inject(CORE_CONFIG)); }, token: NavigationService, providedIn: "root" });
        return NavigationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /*
     * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
     */
    var NavigationResponse = (function () {
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
    var SidePanelComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var FilterPanelComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var SidePanelItemComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'bci-side-panel-item',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<!--<div class=\"side-panel-item\">\n  <h4>{{ title }}</h4>\n  <ng-content></ng-content>\n</div>-->\n<mat-card class=\"side-panel-item\">\n  <mat-card-header class=\"fixed-flex-item\">\n    <mat-card-title><h5>{{ title }}</h5></mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"scroll-container-vertical\">\n    <ng-content></ng-content>\n  </mat-card-content>\n</mat-card>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{margin:15px 0;overflow:hidden;display:flex}:host.fixed-flex-item{flex:0 0 auto}.fixed-flex-item{flex:0 0 auto}.side-panel-item{display:flex;flex-direction:column;flex:1 1 auto}.scroll-container-vertical{overflow-y:auto}"]
                    },] },
        ];
        /** @nocollapse */
        SidePanelItemComponent.ctorParameters = function () { return []; };
        SidePanelItemComponent.propDecorators = {
            title: [{ type: i0.Input }],
            fixed: [{ type: i0.HostBinding, args: ['class.fixed-flex-item',] }, { type: i0.Input }]
        };
        return SidePanelItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ContentWSidePanelComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var LoadingSpinnerDirective = (function () {
        function LoadingSpinnerDirective() {
            this.bciLoadingSpinner = true;
        }
        LoadingSpinnerDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[bciLoadingSpinner]'
                    },] },
        ];
        /** @nocollapse */
        LoadingSpinnerDirective.ctorParameters = function () { return []; };
        LoadingSpinnerDirective.propDecorators = {
            bciLoadingSpinner: [{ type: i0.HostBinding, args: ['class.loading',] }, { type: i0.Input }]
        };
        return LoadingSpinnerDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BciTileComponent = (function () {
        function BciTileComponent() {
            this.addTile = false;
            this.action = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'bci-tile',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"tile\" [ngClass]=\"{'add-tile': addTile}\" fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"center center\">\n  <div class=\"tile-icon\">\n    <i class=\"Bosch-Ic {{ iconName || 'Bosch-Ic-add' }}\"></i>\n  </div>\n  <div class=\"tile-details\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n    <div>\n      <div class=\"title\">\n        {{ title }}\n      </div>\n\n      <div *ngIf=\"!addTile\" class=\"description\">\n        {{ description }}\n      </div>\n    </div>\n\n    <div *ngIf=\"!addTile\" class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n      <div><a class=\"button-link\">{{ detailsButtonLabel }}</a></div>\n\n      <button mat-icon-button href=\"#\" *ngIf=canExecuteAction (click)=\"executeAction($event)\"\n              class=\"mat-icon-button Bosch-Ic {{actionIconName}}\"></button>\n    </div>\n\n  </div>\n</div>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.tile{margin-bottom:16px;background-color:#efeff0;padding:0 16px;box-sizing:border-box;width:400px;height:150px;color:#000;transition:all .25s ease}.tile:focus,.tile:hover{background-color:#dfdfe0;cursor:pointer}.tile:focus .tile-icon i,.tile:hover .tile-icon i{color:#bfc0c2}.tile .tile-icon{align-self:center}.tile .tile-icon i{font-size:80px;color:#cfd0d1}.tile .tile-details{width:100%}.tile .tile-details .title{font-size:20px;width:260px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.tile .tile-details .description{margin:4px 0;font-size:12px;line-height:16px;max-height:32px;height:32px;overflow:hidden;text-overflow:ellipsis}.tile .tile-details .actions{margin-bottom:-8px;width:100%}.tile .tile-details .actions .button-link{position:relative;font-size:12px;padding:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.tile .tile-details .actions .button-link:after{font-size:12px;margin-left:2px}.tile .tile-details .actions .mat-icon-button{font-size:24px;color:#525f6b}.tile.add-tile{background-color:transparent;color:#a8afb5;border:1px solid #bfc0c2;font-size:20px}.tile.add-tile .tile-icon i{font-size:48px}.tile.add-tile .tile-details,.tile.add-tile .tile-details .title{width:auto}.tile.add-tile:hover{color:#000;background-color:#f7f7f7;border:1px solid #dfdfe0;opacity:.75;cursor:pointer}.tile.add-tile:hover .tile-icon i{color:#525f6b}"],
                    },] },
        ];
        /** @nocollapse */
        BciTileComponent.ctorParameters = function () { return []; };
        BciTileComponent.propDecorators = {
            title: [{ type: i0.Input }],
            description: [{ type: i0.Input }],
            iconName: [{ type: i0.Input }],
            detailsButtonLabel: [{ type: i0.Input }],
            addTile: [{ type: i0.Input }],
            actionIconName: [{ type: i0.Input }],
            canExecuteAction: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return BciTileComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ContentSidebarComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'bci-content-sidebar',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-sidenav-container style=\"width: 300px\">\n  <mat-sidenav #sidenav [position]=\"position\" [mode]=\"mode\" [opened]=\"opened\" fxLayout=\"column\" fxFlex>\n    <ng-content></ng-content>\n  </mat-sidenav>\n</mat-sidenav-container>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{display:flex;border-width:0 0 0 1px;border-color:#dfdfe0;border-style:solid;border-radius:0}mat-sidenav{width:300px;padding:5px 10px}::ng-deep bci-content-sidebar-item:first-child{padding-top:0}::ng-deep bci-content-sidebar-item:last-child{padding-bottom:5px;border-bottom:none}"]
                    },] },
        ];
        /** @nocollapse */
        ContentSidebarComponent.ctorParameters = function () { return []; };
        ContentSidebarComponent.propDecorators = {
            position: [{ type: i0.Input }],
            mode: [{ type: i0.Input }],
            opened: [{ type: i0.Input }]
        };
        return ContentSidebarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ContentSidebarItemComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'bci-content-sidebar-item',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-card class=\"content-sidebar-item\">\n  <mat-card-header class=\"fixed-flex-item\">\n    <mat-card-title><h5>{{ title }}</h5></mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"scroll-container-vertical\">\n    <ng-content></ng-content>\n  </mat-card-content>\n</mat-card>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{padding:10px 5px 25px;overflow:hidden;display:flex;border-width:0 0 1px;border-color:#dfdfe0;border-style:solid;border-radius:0}:host.fixed-flex-item{flex:0 0 auto}.fixed-flex-item{flex:0 0 auto}.content-sidebar-item{display:flex;flex-direction:column;flex:1 1 auto;padding:0}.scroll-container-vertical{overflow-y:auto}"]
                    },] },
        ];
        /** @nocollapse */
        ContentSidebarItemComponent.ctorParameters = function () { return []; };
        ContentSidebarItemComponent.propDecorators = {
            title: [{ type: i0.Input }],
            fixed: [{ type: i0.HostBinding, args: ['class.fixed-flex-item',] }, { type: i0.Input }]
        };
        return ContentSidebarItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommandbarComponent = (function () {
        function CommandbarComponent(fb) {
            this.fb = fb;
            this.active = false;
            /**
             * The event emitter which propagates the text value of the search-box to subordinated components
             */
            this.search = new i0.EventEmitter();
            /**
             * Subject being used to search immediately
             */
            this.submitSearch = new rxjs.Subject();
            /**
             * The event emitter which propagates the click-event on the filter-icon to superordinated components
             */
            this.clickFilter = new i0.EventEmitter();
            /**
             * The event emitter which propagates the click-event on the sort-icon to superordinated components
             */
            this.clickSort = new i0.EventEmitter();
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
            this.componentDestroyed$ = new rxjs.Subject();
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
                rxjs.merge(this.submitSearch, this.searchForm.controls["search"].valueChanges
                    .pipe(operators.takeUntil(this.componentDestroyed$), operators.debounceTime(300))).pipe(operators.distinctUntilChanged()).subscribe(function (searchString) { return _this.search.emit(searchString); });
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
            { type: i0.Component, args: [{
                        selector: 'bci-commandbar',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-toolbar>\n  <mat-toolbar-row>\n    <div class=\"group\">\n      <!-- Itemcount -->\n      <span class=\"entry-count\" [class.active]=\"selectedItemCount\" *ngIf=\"selectedItemCount || itemCount > -1\">\n        <ng-container *ngIf=\"selectedItemCount\">{{selectedItemCount}}</ng-container>\n        <ng-container *ngIf=\"selectedItemCount && itemCount > -1\"> of </ng-container>\n        <ng-container *ngIf=\"itemCount > -1\">{{itemCount}}</ng-container>\n        <ng-container [ngPlural]=\"(itemCount > -1 ? itemCount : selectedItemCount)\">\n          <ng-template ngPluralCase=\"one\"> entry</ng-template>\n          <ng-template ngPluralCase=\"other\"> entries</ng-template>\n        </ng-container>\n      </span>\n\n      <!-- Searchbar -->\n      <div class=\"commandbar-search-field\" *ngIf=\"showSearch\">\n        <form [formGroup]=\"searchForm\">\n          <mat-form-field floatLabel=\"never\">\n            <input matInput formControlName=\"search\" placeholder=\"Search\" (keyup.enter)=\"searchSubmit()\">\n            <button mat-icon-button type=\"button\" matSuffix (click)=\"searchSubmit()\">\n              <mat-icon class=\"toolbar-input-icon\" fontIcon=\"Bosch-Ic-search\"></mat-icon>\n            </button>\n          </mat-form-field>\n        </form>\n      </div>\n    </div>\n\n    <!-- Inline Filters -->\n    <div class=\"group\">\n      <ng-content select=\"bci-commandbar-inlinefilters\"></ng-content>\n    </div>\n\n    <!-- Quickfilters -->\n    <div class=\"group\">\n      <ng-content select=\"bci-commandbar-quickfilters\"></ng-content>\n    </div>\n\n    <!-- Filter -->\n    <div class=\"group\">\n      <bci-commandbar-button [render]=\"true\"\n                             *ngIf=\"showFilter\"\n                             icon=\"Bosch-Ic-filter\"\n                             [class.commandbar-button-active]=\"filterCount\"\n                             aria-label=\"filter\"\n                             (click)=\"clickFilter.emit()\">\n        Filter\n        <ng-container *ngIf=\"filterCount\"> ({{filterCount}})</ng-container>\n      </bci-commandbar-button>\n    </div>\n\n    <!-- Sort -->\n    <div class=\"group\">\n      <bci-commandbar-button [render]=\"true\"\n                             *ngIf=\"showSort\"\n                             icon=\"{{sortIcon}}\"\n                             aria-label=\"sort\"\n                             (click)=\"clickSort.emit()\">\n        Sort\n      </bci-commandbar-button>\n    </div>\n\n    <!-- Spacer -->\n    <div class=\"fill-space\"></div>\n\n    <!-- Actions -->\n    <div class=\"group\">\n      <ng-content select=\"bci-commandbar-actions\"></ng-content>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n<ng-content select=\"bci-commandbar-active-filters\"></ng-content>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host.active mat-toolbar{background:rgba(0,142,207,.15)}.fill-space{flex:1 1 auto}.group{display:inline-flex;vertical-align:middle}.group+.group{margin-left:10px}:host ::ng-deep .commandbar-item{display:inline-flex;vertical-align:middle}.entry-count.active,.entry-count.active.mat-icon-button.mat-icon-button,:host ::ng-deep .commandbar-button-active,:host ::ng-deep .commandbar-button-active.mat-icon-button.mat-icon-button{color:#008ecf}.mat-toolbar{font-size:14px}.mat-toolbar .entry-count{margin-right:32px;padding:4px 0}.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-label,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-label .mat-empty,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-label.mat-empty{color:#000}.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-prefix,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-suffix{background:#fff}.mat-toolbar .commandbar-search-field ::ng-deep .toolbar-input-field{border:none;outline:0;background:0 0;margin-bottom:0}.mat-toolbar .commandbar-search-field ::ng-deep .mat-input-element{background-color:#fff;background-image:none}.mat-toolbar .commandbar-search-field ::ng-deep .toolbar-input-container{background-color:#fff;padding:4px 12px 0;border-bottom:1px solid #bfc0c2}.mat-toolbar .commandbar-search-field ::ng-deep .toolbar-input-container button{vertical-align:middle}"]
                    },] },
        ];
        /** @nocollapse */
        CommandbarComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder }
            ];
        };
        CommandbarComponent.propDecorators = {
            active: [{ type: i0.HostBinding, args: ['class.active',] }, { type: i0.Input }],
            itemCount: [{ type: i0.Input }],
            selectedItemCount: [{ type: i0.Input }],
            search: [{ type: i0.Output }],
            clickFilter: [{ type: i0.Output }],
            clickSort: [{ type: i0.Output }],
            showSearch: [{ type: i0.Input }],
            showFilter: [{ type: i0.Input }],
            showSort: [{ type: i0.Input }],
            filterCount: [{ type: i0.Input }],
            sortIcon: [{ type: i0.Input }]
        };
        return CommandbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommandbarItemComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: "bci-commandbar-item",
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<ng-template #template>\n  <div class=\"commandbar-item\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n<ng-container *ngIf=\"render\">\n  <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n</ng-container>\n",
                    },] },
        ];
        CommandbarItemComponent.propDecorators = {
            classCommandbarItem: [{ type: i0.HostBinding, args: ['class.commandbar-item',] }],
            render: [{ type: i0.Input }],
            hide: [{ type: i0.Input }],
            template: [{ type: i0.ViewChild, args: ['template',] }]
        };
        return CommandbarItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommandbarActionsComponent = (function () {
        function CommandbarActionsComponent(observableMedia) {
            this.observableMedia = observableMedia;
            this.visibleItems = [];
            this.hiddenItems = [];
            this.componentDestroyed$ = new rxjs.Subject();
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
                rxjs.merge(this.observableMedia.asObservable(), this.items.changes)
                    .pipe(operators.takeUntil(this.componentDestroyed$))
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
            { type: i0.Component, args: [{
                        selector: 'bci-commandbar-actions',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<!-- Actions -->\n<ng-container *ngFor=\"let item of visibleItems\">\n  <ng-container *ngTemplateOutlet=\"item?.template\"></ng-container>\n</ng-container>\n\n<ng-container *ngIf=\"hiddenItems.length > 0\">\n  <!-- More-Actions-Button -->\n  <bci-commandbar-button [render]=\"true\"\n                         icon=\"Bosch-Ic-show-more-vertical\"\n                         aria-label=\"more actions\"\n                         [matMenuTriggerFor]=\"moreActionsMenu\">\n  </bci-commandbar-button>\n</ng-container>\n\n<!-- More Actions Menu -->\n<mat-menu #moreActionsMenu=\"matMenu\" [class]=\"'commandbar-more-action-menu'\">\n  <ng-container *ngFor=\"let item of hiddenItems\">\n    <div mat-menu-item>\n      <ng-container *ngTemplateOutlet=\"item?.template\"></ng-container>\n    </div>\n  </ng-container>\n</mat-menu>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{display:inherit;vertical-align:inherit}::ng-deep .mat-menu-panel.commandbar-more-action-menu{min-width:0}::ng-deep .commandbar-more-action-menu .mat-menu-item{padding:2px;line-height:1;height:auto}"]
                    },] },
        ];
        /** @nocollapse */
        CommandbarActionsComponent.ctorParameters = function () {
            return [
                { type: flexLayout.ObservableMedia }
            ];
        };
        CommandbarActionsComponent.propDecorators = {
            items: [{ type: i0.ContentChildren, args: [i0.forwardRef(function () { return CommandbarItemComponent; }),] }]
        };
        return CommandbarActionsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommandbarButtonComponent = (function (_super) {
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
            _this.click = new i0.EventEmitter();
            _this._ngClass = {};
            _this._ngStyle = {};
            return _this;
        }
        Object.defineProperty(CommandbarButtonComponent.prototype, "ngClass", {
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
                this._ngClass = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CommandbarButtonComponent.prototype, "ngStyle", {
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
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
            { type: i0.Component, args: [{
                        selector: "bci-commandbar-button",
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<ng-template #template>\n  <button mat-icon-button\n          class=\"commandbar-item\"\n          [ngClass]=\"_ngClass\"\n          [ngStyle]=\"_ngStyle\"\n          [disabled]=\"disabled\"\n          (click)=\"clickEvent($event)\">\n    <mat-icon [fontIcon]=\"icon\"></mat-icon>\n    <ng-content></ng-content>\n  </button>\n</ng-template>\n<ng-container *ngIf=\"render\">\n  <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n</ng-container>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.commandbar-button-active,.commandbar-button-active.mat-icon-button.mat-icon-button,:host.commandbar-button-active,:host.commandbar-button-active.mat-icon-button.mat-icon-button{color:#008ecf}::ng-deep .mat-icon-button.mat-icon-button{transition:.4s;cursor:pointer;width:auto;min-width:40px}::ng-deep .mat-icon-button.mat-icon-button:hover{color:#008ecf}::ng-deep .mat-icon-button.mat-icon-button.disabled,::ng-deep .mat-icon-button.mat-icon-button:disabled{color:#a8afb5;cursor:not-allowed}::ng-deep .mat-icon-button.mat-icon-button.disabled:hover,::ng-deep .mat-icon-button.mat-icon-button:disabled:hover{color:#a8afb5}::ng-deep .mat-icon-button.mat-icon-button .mat-ripple{width:40px}::ng-deep .mat-icon-button.mat-icon-button .mat-icon{margin-left:4px;margin-right:4px}"],
                        providers: [{ provide: CommandbarItemComponent, useExisting: i0.forwardRef(function () { return CommandbarButtonComponent; }) }]
                    },] },
        ];
        CommandbarButtonComponent.propDecorators = {
            icon: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            click: [{ type: i0.Output }],
            ngClass: [{ type: i0.Input }],
            ngStyle: [{ type: i0.Input }]
        };
        return CommandbarButtonComponent;
    }(CommandbarItemComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommandbarButtonsDirective = (function () {
        function CommandbarButtonsDirective(host) {
            this.host = host;
        }
        Object.defineProperty(CommandbarButtonsDirective.prototype, "buttonAdd", {
            set: /**
             * @param {?} _
             * @return {?}
             */ function (_) {
                this.setIcon('Bosch-Ic-add-outline');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CommandbarButtonsDirective.prototype, "buttonEdit", {
            set: /**
             * @param {?} _
             * @return {?}
             */ function (_) {
                this.setIcon('Bosch-Ic-edit');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CommandbarButtonsDirective.prototype, "buttonDelete", {
            set: /**
             * @param {?} _
             * @return {?}
             */ function (_) {
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
            function (icon$$1) {
                this.icon = icon$$1;
            };
        CommandbarButtonsDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: "[bciCommandbarActionAdd],[bciCommandbarActionEdit],[bciCommandbarActionDelete]",
                    },] },
        ];
        /** @nocollapse */
        CommandbarButtonsDirective.ctorParameters = function () {
            return [
                { type: CommandbarButtonComponent }
            ];
        };
        CommandbarButtonsDirective.propDecorators = {
            buttonAdd: [{ type: i0.Input, args: ['bciCommandbarActionAdd',] }],
            buttonEdit: [{ type: i0.Input, args: ['bciCommandbarActionEdit',] }],
            buttonDelete: [{ type: i0.Input, args: ['bciCommandbarActionDelete',] }]
        };
        return CommandbarButtonsDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommandbarInlinefilterComponent = (function (_super) {
        __extends(CommandbarInlinefilterComponent, _super);
        function CommandbarInlinefilterComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.disableDefaultStyle = false;
            return _this;
        }
        CommandbarInlinefilterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'bci-commandbar-inlinefilter',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<ng-template #template>\n  <div class=\"commandbar-inline-filter\" [class.commandbar-default-style]=\"!disableDefaultStyle\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.commandbar-inline-filter{vertical-align:middle}.commandbar-inline-filter+.commandbar-inline-filter{margin-left:10px}.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-label,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-label .mat-empty,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-label.mat-empty{color:#000}.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-prefix,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-suffix{background:#fff}.commandbar-default-style ::ng-deep input,.commandbar-default-style ::ng-deep input:focus:enabled{background:#fff}.commandbar-default-style ::ng-deep ::-webkit-input-placeholder{color:#000}.commandbar-default-style ::ng-deep ::-ms-input-placeholder{color:#000}.commandbar-default-style ::ng-deep ::placeholder{color:#000}.commandbar-default-style ::ng-deep :-ms-input-placeholder{color:#000}.commandbar-default-style ::ng-deep .mat-form-field-flex,.commandbar-default-style ::ng-deep .mat-select-trigger{background-color:#fff;background-image:none}"],
                        providers: [{ provide: CommandbarItemComponent, useExisting: i0.forwardRef(function () { return CommandbarInlinefilterComponent; }) }]
                    },] },
        ];
        CommandbarInlinefilterComponent.propDecorators = {
            disableDefaultStyle: [{ type: i0.Input }]
        };
        return CommandbarInlinefilterComponent;
    }(CommandbarItemComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommandbarInlinefiltersComponent = (function () {
        function CommandbarInlinefiltersComponent(observableMedia) {
            this.observableMedia = observableMedia;
            this.visibleItems = [];
            this.hiddenItems = [];
            this.componentDestroyed$ = new rxjs.Subject();
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
                rxjs.merge(this.observableMedia.asObservable(), this.items.changes, rxjs.of(true))
                    .pipe(operators.takeUntil(this.componentDestroyed$))
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
            { type: i0.Component, args: [{
                        selector: 'bci-commandbar-inlinefilters',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div fxLayout=\"row\">\n  <ng-container *ngFor=\"let item of visibleItems\">\n    <ng-container *ngTemplateOutlet=\"item?.template\"></ng-container>\n  </ng-container>\n</div>\n",
                        styles: [":host{vertical-align:middle;line-height:48px}"]
                    },] },
        ];
        /** @nocollapse */
        CommandbarInlinefiltersComponent.ctorParameters = function () {
            return [
                { type: flexLayout.ObservableMedia }
            ];
        };
        CommandbarInlinefiltersComponent.propDecorators = {
            items: [{ type: i0.ContentChildren, args: [i0.forwardRef(function () { return CommandbarInlinefilterComponent; }),] }]
        };
        return CommandbarInlinefiltersComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommandbarQuickfiltersDirective = (function () {
        function CommandbarQuickfiltersDirective() {
        }
        CommandbarQuickfiltersDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[bciCommandbarQuickilters], bci-commandbar-quickfilters',
                    },] },
        ];
        return CommandbarQuickfiltersDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToggleButtonDirective = (function () {
        function ToggleButtonDirective() {
            this.active = false;
            this.toggle = new i0.EventEmitter();
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
            { type: i0.Directive, args: [{
                        selector: "[bciToggleButton]"
                    },] },
        ];
        ToggleButtonDirective.propDecorators = {
            active: [{ type: i0.HostBinding, args: ['class.commandbar-button-active',] }, { type: i0.Input }],
            toggle: [{ type: i0.Output }],
            onClick: [{ type: i0.HostListener, args: ['click',] }]
        };
        return ToggleButtonDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommandbarActiveFiltersComponent = (function () {
        function CommandbarActiveFiltersComponent() {
        }
        CommandbarActiveFiltersComponent.decorators = [
            { type: i0.Component, args: [{
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
    var BciChipComponent = (function () {
        function BciChipComponent() {
            /**
             * The event emitter to propagate the removal-event
             */
            this.removed = new i0.EventEmitter();
            /**
             * Flag to indicate whether the remove-icon is being displayed
             */
            this.removable = true;
        }
        BciChipComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'bci-chip',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-chip [removable]=\"removable\" [ngClass]=\"{ 'not-removable': !removable }\" (removed)=\"removed.next($event)\">\n  <ng-content></ng-content>\n  <mat-icon *ngIf=\"removable\" matChipRemove fontIcon=\"Bosch-Ic-abort\" aria-label=\"remove\"></mat-icon>\n</mat-chip>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{padding:0}:host .mat-chip.not-removable{background-color:#7d8790;background-image:none;color:#fff}"],
                    },] },
        ];
        /** @nocollapse */
        BciChipComponent.ctorParameters = function () { return []; };
        BciChipComponent.propDecorators = {
            true: [{ type: i0.HostBinding, args: ['class.bci-chip',] }],
            removed: [{ type: i0.Output }],
            removable: [{ type: i0.Input }]
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
    var DetailViewComponent = (function () {
        function DetailViewComponent() {
            // TODO: find a solution so that <bci-page-content> can be used in demo/solution instead of isPadded and still the sidebar is working
            this.isPadded = true;
        }
        DetailViewComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'bci-detail-view',
                        template: "<ng-content></ng-content>\n",
                        styles: [""]
                    },] },
        ];
        DetailViewComponent.propDecorators = {
            isPadded: [{ type: i0.Input }]
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
    var MasterDetailViewComponent = (function () {
        function MasterDetailViewComponent(modalWindowService, dialog, observableMedia) {
            this.modalWindowService = modalWindowService;
            this.dialog = dialog;
            this.observableMedia = observableMedia;
            /**
             * when true the details view is shown as dialog
             * else it is shown as modal dialog
             */
            this._useDialog = false;
            this.closed$ = new rxjs.Subject();
            this.closed = this.closed$.asObservable();
            this.componentDestroyed$ = new rxjs.Subject();
        }
        Object.defineProperty(MasterDetailViewComponent.prototype, "useDialog", {
            get: /**
             * @return {?}
             */ function () {
                return this._useDialog;
            },
            set: /**
             * @param {?} use
             * @return {?}
             */ function (use) {
                var _this = this;
                if (this.isDetailsShown) {
                    this.closeDetails()
                        .pipe(operators.takeUntil(this.componentDestroyed$), operators.take(1))
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
                    this.observableMedia.asObservable().pipe(operators.takeUntil(this.componentDestroyed$)).subscribe(function () {
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
                    return rxjs.of();
                }
                /** @type {?} */
                var closedObservable = this.useDialog ? this.detailsDialogRef.afterClosed() : rxjs.from(this.sidenav.close());
                if (this.useDialog) {
                    this.detailsDialogRef.close();
                }
                return closedObservable.pipe(operators.tap(function () { return _this.closed$.next(); }), operators.tap(function () { return _this.isDetailsShown = false; }), operators.first());
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
                    .pipe(operators.takeUntil(this.componentDestroyed$))
                    .subscribe(function () {
                    _this.detailsClosed();
                });
            };
        MasterDetailViewComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'bci-master-detail-view',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<ng-template #masterView>\n  <ng-content select=\"bci-master-view\"></ng-content>\n</ng-template>\n\n<ng-template #detailView>\n  <ng-content select=\"bci-detail-view\"></ng-content>\n</ng-template>\n\n<mat-sidenav-container class=\"container\">\n  <mat-sidenav-content class=\"container-content\">\n    <!-- Master -->\n    <ng-container *ngTemplateOutlet=\"masterView\"></ng-container>\n  </mat-sidenav-content>\n\n  <mat-sidenav *ngIf=\"!useDialog\"\n               id=\"detailContainer\"\n               [opened]=\"isDetailsShown\"\n               [disableClose]=\"false\"\n               (closed)=\"detailsClosed()\"\n               [mode]=\"useSlideoverSidebarMode ? 'over' : 'side'\"\n               position=\"end\"\n               class=\"sidebar-content\"\n               [class.container-content-padded]=\"detailViewComponent?.isPadded\"\n               [class.sidebar-full-size]=\"useSlideoverSidebarMode\"\n               [class.sidebar-visible]=\"!useSlideoverSidebarMode\">\n    <ng-container *ngTemplateOutlet=\"detailView\"></ng-container>\n  </mat-sidenav>\n</mat-sidenav-container>\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{height:100%;overflow:hidden}.container{width:100%;height:inherit}.container-content-padded{padding:32px}mat-sidenav-container .mat-drawer-content.container-content{overflow:auto}mat-sidenav-container .sidebar-content{overflow-x:hidden}.sidebar-full-size{left:0;border-left:unset}.sidebar-visible{border-left:1px solid #bfc0c2}"]
                    },] },
        ];
        /** @nocollapse */
        MasterDetailViewComponent.ctorParameters = function () {
            return [
                { type: ModalWindowService },
                { type: material.MatDialog },
                { type: flexLayout.ObservableMedia }
            ];
        };
        MasterDetailViewComponent.propDecorators = {
            useSlideoverSidebarMode: [{ type: i0.Input }],
            detailViewComponent: [{ type: i0.ContentChild, args: [DetailViewComponent,] }],
            detailsView: [{ type: i0.ViewChild, args: ['detailView',] }],
            sidenav: [{ type: i0.ViewChild, args: [material.MatSidenav,] }],
            useDialog: [{ type: i0.Input }]
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
    var MasterViewComponent = (function () {
        function MasterViewComponent() {
            // TODO: find a solution so that <bci-page-content> can be used in demo/solution instead of isPadded and still the sidebar is working
            this.isPadded = true;
        }
        MasterViewComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'bci-master-view',
                        template: "<ng-content></ng-content>\n",
                        styles: [":host{display:block}:host.container-content-padded{padding:32px}"]
                    },] },
        ];
        MasterViewComponent.propDecorators = {
            isPadded: [{ type: i0.HostBinding, args: ['class.container-content-padded',] }, { type: i0.Input }]
        };
        return MasterViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FilterPickerComponent = (function () {
        function FilterPickerComponent() {
            this.filter = new i0.EventEmitter();
            this.close = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'bci-filter-picker',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"dialog-header\">\n  <h3 matDialogTitle>Filter</h3>\n  <button class=\"close-button\" mat-icon-button tabindex=\"-1\" (click)=\"closeModal()\">\n    <i class=\"Bosch-Ic Bosch-Ic-abort\"></i>\n  </button>\n</div>\n<mat-dialog-content>\n  <div class=\"dialog-body\">\n    <mat-list>\n      <ng-content select=\"bci-filter-entry\"></ng-content>\n    </mat-list>\n\n    <mat-divider [vertical]=\"true\"></mat-divider>\n\n    <div class=\"filter-view\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"dialog-footer\">\n    <button class=\"button-primary\" (click)=\"applyFilters()\">Apply</button>\n    <button class=\"button-secondary\" (click)=\"closeModal()\">Cancel</button>\n  </div>\n</mat-dialog-content>\n\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.dialog-body{width:100%;display:flex;flex-direction:row}.dialog-body mat-list{flex-basis:calc(50% - 24px);height:400px;overflow:auto;background:linear-gradient(white 30%,rgba(255,255,255,0)),linear-gradient(rgba(255,255,255,0),#fff 70%) 0 100%,radial-gradient(farthest-side at 50% 0,rgba(0,0,0,.2),rgba(0,0,0,0)),radial-gradient(farthest-side at 50% 100%,rgba(0,0,0,.2),rgba(0,0,0,0)) 0 100%;background-repeat:no-repeat;background-color:#fff;background-size:100% 40px,100% 40px,100% 14px,100% 14px;background-attachment:local,local,scroll,scroll}.dialog-body mat-divider{margin:0 24px;flex-basis:auto}.dialog-body .filter-view{flex-basis:calc(50% - 24px)}.dialog-footer{margin-top:40px;display:flex;justify-content:flex-end}.dialog-footer button.button-secondary{margin-left:16px}"]
                    },] },
        ];
        /** @nocollapse */
        FilterPickerComponent.ctorParameters = function () { return []; };
        FilterPickerComponent.propDecorators = {
            filter: [{ type: i0.Output }],
            close: [{ type: i0.Output }]
        };
        return FilterPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FilterEntryComponent = (function () {
        function FilterEntryComponent() {
            this.select = new i0.EventEmitter();
            this.deactivate = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'bci-filter-entry',
                        template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-list-item (click)=\"showFilterDetails()\" [ngClass]=\"{'active': isSelected}\">\n  <span matLine>{{ filterTitle }} </span>\n  <mat-icon *ngIf=\"isActive\" fontIcon=\"Bosch-Ic-checkmark\"></mat-icon>\n  <mat-icon *ngIf=\"isActive\" fontIcon=\"Bosch-Ic-delete\"\n            (click)=\"deactivateFilter()\"></mat-icon>\n</mat-list-item>\n\n\n",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{flex:1}mat-list-item{cursor:pointer}mat-list-item.active,mat-list-item:hover{background-color:rgba(0,142,207,.15)}mat-list-item .mat-icon{line-height:1!important;margin-left:8px}"]
                    },] },
        ];
        /** @nocollapse */
        FilterEntryComponent.ctorParameters = function () { return []; };
        FilterEntryComponent.propDecorators = {
            filterTitle: [{ type: i0.Input }],
            isSelected: [{ type: i0.Input }],
            isActive: [{ type: i0.Input }],
            select: [{ type: i0.Output }],
            deactivate: [{ type: i0.Output }]
        };
        return FilterEntryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PageContentComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'bci-page-content',
                        template: "\n    <ng-content></ng-content>",
                        styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{padding:0;flex:none;display:block;overflow:auto;position:absolute}:host.full-space{width:100%;height:100%}:host.full-space.padding{width:calc(100% - 2 * 32px);height:calc(100% - 2 * 32px)}:host.padding{padding:32px}"]
                    },] },
        ];
        /** @nocollapse */
        PageContentComponent.ctorParameters = function () { return []; };
        PageContentComponent.propDecorators = {
            fullSpace: [{ type: i0.HostBinding, args: ['class.full-space',] }, { type: i0.Input }],
            padding: [{ type: i0.HostBinding, args: ['class.padding',] }, { type: i0.Input }]
        };
        return PageContentComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BciSharedModule = (function () {
        function BciSharedModule() {
        }
        BciSharedModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i2.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            flexLayout.FlexLayoutModule,
                            BreadcrumbsModule,
                            card.MatCardModule,
                            material.MatChipsModule,
                            material.MatButtonModule,
                            material.MatSidenavModule,
                            material.MatToolbarModule,
                            material.MatFormFieldModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatMenuModule,
                            material.MatSnackBarModule,
                            material.MatDialogModule,
                            material.MatListModule
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
                            i2.CommonModule,
                            forms.FormsModule,
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
                            card.MatCardModule,
                            material.MatButtonModule,
                            material.MatSidenavModule,
                        ]
                    },] },
        ];
        return BciSharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CloseDetailsGuard = (function () {
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
                if (value instanceof rxjs.Observable) {
                    return value;
                }
                return rxjs.of(value);
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
                if (componentType instanceof i0.Type) {
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
                return this.asObservable(component.canCloseDetails()).pipe(operators.filter(rxjs.identity), operators.flatMap(function () {
                    return _this.areDetailRoutesWithSameMaster(currentState, nextState)
                        ? rxjs.of(true)
                        : _this.asObservable(component.closeDetails()).pipe(operators.map(function () { return true; }));
                }), operators.defaultIfEmpty(false));
            };
        CloseDetailsGuard.decorators = [
            { type: i0.Injectable },
        ];
        return CloseDetailsGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Breadcrumb = (function () {
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

    exports.BciCoreModule = BciCoreModule;
    exports.CoreConfigurationModule = CoreConfigurationModule;
    exports.coreConfigInitializer = coreConfigInitializer;
    exports.CoreConfig = CoreConfig;
    exports.CORE_CONFIG = CORE_CONFIG;
    exports.BOSCH_COLORS = BOSCH_COLORS;
    exports.NotFoundComponent = NotFoundComponent;
    exports.NotificationService = NotificationService;
    exports.NotificationComponent = NotificationComponent;
    exports.LoggerService = LoggerService;
    exports.NavigationService = NavigationService;
    exports.NavigationResponse = NavigationResponse;
    exports.BciImprintComponent = BciImprintComponent;
    exports.LogoutComponent = LogoutComponent;
    exports.BciContentComponent = BciContentComponent;
    exports.BciFooterComponent = BciFooterComponent;
    exports.BciHeaderComponent = BciHeaderComponent;
    exports.BciLoaderComponent = BciLoaderComponent;
    exports.BciLoaderService = BciLoaderService;
    exports.BciSidebarComponent = BciSidebarComponent;
    exports.BciSidebarService = BciSidebarService;
    exports.BciSidebarFooterComponent = BciSidebarFooterComponent;
    exports.SidebarNavItem = SidebarNavItem;
    exports.BciLayoutModule = BciLayoutModule;
    exports.BciSidebarNavItemComponent = BciSidebarNavItemComponent;
    exports.BciSidebarNavListComponent = BciSidebarNavListComponent;
    exports.BciAppComponent = BciAppComponent;
    exports.ModalWindowService = ModalWindowService;
    exports.BreadcrumbsService = BreadcrumbsService;
    exports.BciSharedModule = BciSharedModule;
    exports.CommandbarInlinefiltersComponent = CommandbarInlinefiltersComponent;
    exports.CommandbarInlinefilterComponent = CommandbarInlinefilterComponent;
    exports.FilterPanelComponent = FilterPanelComponent;
    exports.SidePanelComponent = SidePanelComponent;
    exports.SidePanelItemComponent = SidePanelItemComponent;
    exports.ContentSidebarComponent = ContentSidebarComponent;
    exports.ContentSidebarItemComponent = ContentSidebarItemComponent;
    exports.CommandbarComponent = CommandbarComponent;
    exports.CommandbarButtonComponent = CommandbarButtonComponent;
    exports.CommandbarButtonsDirective = CommandbarButtonsDirective;
    exports.ToggleButtonDirective = ToggleButtonDirective;
    exports.CommandbarQuickfiltersDirective = CommandbarQuickfiltersDirective;
    exports.MasterDetailViewComponent = MasterDetailViewComponent;
    exports.MasterViewComponent = MasterViewComponent;
    exports.DetailViewComponent = DetailViewComponent;
    exports.CloseDetailsGuard = CloseDetailsGuard;
    exports.PageContentComponent = PageContentComponent;
    exports.BreadcrumbsModule = BreadcrumbsModule;
    exports.BreadcrumbsComponent = BreadcrumbsComponent;
    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.Breadcrumb = Breadcrumb;
    exports.ɵb = CORE_CONFIG_URL;
    exports.ɵc = dialogDefaultOptions;
    exports.ɵe = CoreConfigurationService;
    exports.ɵa = DefaultCoreModuleConfig;
    exports.ɵg = ENVIRONMENT_PROD;
    exports.ɵf = BciImprintDetailsService;
    exports.ɵh = BciSidebarExpanderComponent;
    exports.ɵd = ITEM_EXPANDED_STATES;
    exports.ɵk = BciChipComponent;
    exports.ɵn = CommandbarActionsComponent;
    exports.ɵo = CommandbarActiveFiltersComponent;
    exports.ɵm = CommandbarItemComponent;
    exports.ɵi = ContentWSidePanelComponent;
    exports.ɵq = FilterEntryComponent;
    exports.ɵp = FilterPickerComponent;
    exports.ɵj = LoadingSpinnerDirective;
    exports.ɵl = BciTileComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLW5nLWNvcmUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbG9nZ2VyLnNlcnZpY2UudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC50cyIsbnVsbCwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvY29yZS1jb25maWd1cmF0aW9uL2NvcmUtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbW9kdWxlLWltcG9ydC1ndWFyZC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2NvcmUtY29uZmlndXJhdGlvbi9jb3JlLWNvbmZpZy50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2NvcmUtY29uZmlndXJhdGlvbi9jb3JlLWNvbmZpZ3VyYXRpb24ubW9kdWxlLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9pbXByaW50L2JjaS1pbXByaW50LWRldGFpbHMuc2VydmljZS50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL21vZGFsLXdpbmRvdy9tb2RhbC13aW5kb3cuc2VydmljZS50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2ltcHJpbnQvYmNpLWltcHJpbnQuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvZW52aXJvbm1lbnQtcHJvZC50b2tlbi50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvY29yZS5tb2R1bGUudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9jb3JlLWNvbmZpZ3VyYXRpb24vY29yZS1jb25maWcudG9rZW4udHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9jb3JlLWNvbmZpZ3VyYXRpb24vYm9zY2gtY29sb3JzLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbGF5b3V0L2JjaS1jb250ZW50L2JjaS1jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2xheW91dC9iY2ktZm9vdGVyL2JjaS1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvYnJlYWRjcnVtYnMuc2VydmljZS50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2xheW91dC9iY2ktaGVhZGVyL2JjaS1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbGF5b3V0L2JjaS1sb2FkZXIvYmNpLWxvYWRlci5zZXJ2aWNlLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbGF5b3V0L2JjaS1sb2FkZXIvYmNpLWxvYWRlci5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9sYXlvdXQvYmNpLXNpZGViYXIvYmNpLXNpZGViYXIuc2VydmljZS50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2xheW91dC9iY2ktc2lkZWJhci9iY2ktc2lkZWJhci5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9sYXlvdXQvYmNpLXNpZGViYXItZm9vdGVyL2JjaS1zaWRlYmFyLWZvb3Rlci5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9sYXlvdXQvYmNpLXNpZGViYXIvc2lkZWJhci1uYXYtaXRlbS5tb2RlbC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2xheW91dC9iY2ktc2lkZWJhci1leHBhbmRlci9iY2ktc2lkZWJhci1leHBhbmRlci5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9sYXlvdXQvYmNpLXNpZGViYXItbmF2LWl0ZW0vYmNpLXNpZGViYXItbmF2LWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbGF5b3V0L2JjaS1zaWRlYmFyLW5hdi1saXN0L2JjaS1zaWRlYmFyLW5hdi1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9icmVhZGNydW1icy9icmVhZGNydW1icy5tb2R1bGUudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9sYXlvdXQvYmNpLWFwcC9iY2ktYXBwLmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9jb3JlL2xheW91dC9sYXlvdXQubW9kdWxlLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL2NvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnNlcnZpY2UudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvY29yZS9uYXZpZ2F0aW9uL05hdmlnYXRpb25SZXNwb25zZS50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvZmlsdGVyLXBhbmVsL2ZpbHRlci1wYW5lbC5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvc2hhcmVkL3NpZGUtcGFuZWwtaXRlbS9zaWRlLXBhbmVsLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9jb250ZW50LXctc2lkZS1wYW5lbC9jb250ZW50LXctc2lkZS1wYW5lbC5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC90aWxlL3RpbGUuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9jb250ZW50LXNpZGViYXIvY29udGVudC1zaWRlYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvY29udGVudC1zaWRlYmFyLWl0ZW0vY29udGVudC1zaWRlYmFyLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9jb21tYW5kYmFyL2NvbW1hbmRiYXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9jb21tYW5kYmFyL2l0ZW0vY29tbWFuZGJhci1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvY29tbWFuZGJhci9hY3Rpb25zL2FjdGlvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9jb21tYW5kYmFyL2J1dHRvbi9jb21tYW5kYmFyLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvc2hhcmVkL2NvbW1hbmRiYXIvY29tbWFuZGJhci1idXR0b25zLmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvY29tbWFuZGJhci9pbmxpbmVmaWx0ZXIvY29tbWFuZGJhci1pbmxpbmVmaWx0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9jb21tYW5kYmFyL2lubGluZWZpbHRlcnMvY29tbWFuZGJhci1pbmxpbmVmaWx0ZXJzLmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvY29tbWFuZGJhci9jb21tYW5kYmFyLXF1aWNrZmlsdGVycy5kaXJlY3RpdmUudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvc2hhcmVkL2NvbW1hbmRiYXIvdG9nZ2xlLWJ1dHRvbi5kaXJlY3RpdmUudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvc2hhcmVkL2NvbW1hbmRiYXIvYWN0aXZlLWZpbHRlcnMvYWN0aXZlLWZpbHRlcnMuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9jaGlwL2NoaXAuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9tYXN0ZXItZGV0YWlsL2RldGFpbC9kZXRhaWwtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0BiY2kvbmctY29yZS9saWIvc2hhcmVkL21hc3Rlci1kZXRhaWwvbWFzdGVyLWRldGFpbC12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvbWFzdGVyLWRldGFpbC9tYXN0ZXIvbWFzdGVyLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9maWx0ZXItcGlja2VyL2ZpbHRlci1waWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9maWx0ZXItcGlja2VyL2ZpbHRlci1lbnRyeS9maWx0ZXItZW50cnkuY29tcG9uZW50LnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9wYWdlLWNvbnRlbnQvcGFnZS1jb250ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIm5nOi8vQGJjaS9uZy1jb3JlL2xpYi9zaGFyZWQvbWFzdGVyLWRldGFpbC9jbG9zZS1kZXRhaWxzLmd1YXJkLnRzIiwibmc6Ly9AYmNpL25nLWNvcmUvbGliL3NoYXJlZC9icmVhZGNydW1icy9icmVhZGNydW1iL2JyZWFkY3J1bWIubW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2Uge1xuXG4gIGxvZyhtc2c6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gIH1cblxuICBlcnJvcihtc2c6IHN0cmluZykge1xuICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLW5vdC1mb3VuZCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPjxoMj5QYWdlIE5vdCBGb3VuZDwvaDI+XG4gIDxwPjwvcD5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi9jb3JlLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVDb25maWd1cmF0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uKSB7XG4gIH1cblxuICBwdWJsaWMgbG9hZCh1cmw6IHN0cmluZyk6IFByb21pc2U8Q29yZUNvbmZpZz4ge1xuXG4gICAgY29uc3QgY29uZmlnRmlsZVBhdGggPSB0aGlzLmxvY2F0aW9uLnByZXBhcmVFeHRlcm5hbFVybCh1cmwpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoY29uZmlnRmlsZVBhdGgpXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChjb25maWc6IENvcmVDb25maWcpID0+IHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGU6IGFueSwgbW9kdWxlTmFtZTogc3RyaW5nKSB7XG4gIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bW9kdWxlTmFtZX0gaGFzIGFscmVhZHkgYmVlbiBsb2FkZWQuIEltcG9ydCBDb3JlIG1vZHVsZXMgaW4gdGhlIEFwcE1vZHVsZSBvbmx5LmApO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29yZUNvbmZpZyB7XG4gIGVudmlyb25tZW50OiBzdHJpbmc7XG4gIGVuZHBvaW50TmF2aWdhdGlvbjogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgSW5qZWN0aW9uVG9rZW4sIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL2NvcmUtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHRocm93SWZBbHJlYWR5TG9hZGVkIH0gZnJvbSAnLi4vbW9kdWxlLWltcG9ydC1ndWFyZCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi9jb3JlLWNvbmZpZyc7XG5pbXBvcnQgeyBNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUywgTWF0RGlhbG9nQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgY29uc3QgQ09SRV9DT05GSUdfVVJMID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ0NPUkVfQ09ORklHX1VSTCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gY29yZUNvbmZpZ0luaXRpYWxpemVyKGNvcmVDb25maWdTZXJ2aWNlOiBDb3JlQ29uZmlndXJhdGlvblNlcnZpY2UsIGNvcmVDb25maWdVcmw6IHN0cmluZyk6ICgpID0+IFByb21pc2U8Q29yZUNvbmZpZz4ge1xuICBpZiAoIWNvcmVDb25maWdVcmwgfHwgY29yZUNvbmZpZ1VybC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQ29yZUNvbmZpZygpKTtcbiAgICB9O1xuICB9XG4gIGNvbnN0IHQgPSBjb3JlQ29uZmlnU2VydmljZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdC5sb2FkKGNvcmVDb25maWdVcmwpO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZGlhbG9nRGVmYXVsdE9wdGlvbnM6IE1hdERpYWxvZ0NvbmZpZzxhbnk+ID0ge1xuICAuLi4gbmV3IE1hdERpYWxvZ0NvbmZpZygpLFxuICAuLi4ge1xuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgaGVpZ2h0OiAnYXV0bydcbiAgfVxufTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0h0dHBDbGllbnRNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBjb3JlQ29uZmlnSW5pdGlhbGl6ZXIsXG4gICAgICAvLyB1c2VGYWN0b3J5OiAoY29yZUNvbmZpZ1NlcnZpY2U6IENvcmVDb25maWd1cmF0aW9uU2VydmljZSkgPT4gIGNvcmVDb25maWdJbml0aWFsaXplcihjb3JlQ29uZmlnU2VydmljZSkgLFxuICAgICAgZGVwczogW0NvcmVDb25maWd1cmF0aW9uU2VydmljZSwgQ09SRV9DT05GSUdfVVJMXSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUyxcbiAgICAgIHVzZVZhbHVlOiBkaWFsb2dEZWZhdWx0T3B0aW9uc1xuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb3JlQ29uZmlndXJhdGlvbk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29yZUNvbmZpZ3VyYXRpb25Nb2R1bGUpIHtcbiAgICB0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGUsICdDb3JlQ29uZmlndXJhdGlvbk1vZHVsZScpO1xuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TdGFydCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25JdGVtIH0gZnJvbSAnLi9ub3RpZmljYXRpb24taXRlbSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2Uge1xuXG4gIHByaXZhdGUgc3ViamVjdCA9IG5ldyBTdWJqZWN0PE5vdGlmaWNhdGlvbkl0ZW0+KCk7XG4gIHByaXZhdGUga2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlKSB7XG4gICAgLy8gY2xlYXIgYWxlcnQgbWVzc2FnZSBvbiByb3V0ZSBjaGFuZ2VcbiAgICByb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcbiAgICAgICAgaWYgKHRoaXMua2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSkge1xuICAgICAgICAgIC8vIG9ubHkga2VlcCBmb3IgYSBzaW5nbGUgbG9jYXRpb24gY2hhbmdlXG4gICAgICAgICAgdGhpcy5rZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2xlYXIgYWxlcnRcbiAgICAgICAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5rZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlID0ga2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCh7IHR5cGU6ICdzdWNjZXNzJywgdGV4dDogbWVzc2FnZSB9KTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5rZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlID0ga2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZTtcbiAgICB0aGlzLnN1YmplY3QubmV4dCh7IHR5cGU6ICdlcnJvcicsIHRleHQ6IG1lc3NhZ2UgfSk7XG4gIH1cblxuICBnZXRNZXNzYWdlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkl0ZW0gfSBmcm9tICcuL25vdGlmaWNhdGlvbi1pdGVtJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLW5vdGlmaWNhdGlvbicsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxkaXYgKm5nSWY9XCJtZXNzYWdlXCIgY2xhc3M9XCJub3RpZmljYXRpb24tY29udGFpbmVyXCIgW2NsYXNzLmJnLWRhbmdlcl09XCJtZXNzYWdlLnR5cGU9PT0nZXJyb3InXCI+XG4gIDxzcGFuICpuZ0lmPVwibWVzc2FnZS50eXBlPT09J2Vycm9yJ1wiIGNsYXNzPVwiaWNvbi1wcm9ibGVtIGljb25cIj4mbmJzcDs8L3NwYW4+XG4gIHt7bWVzc2FnZS50ZXh0fX1cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLm5vdGlmaWNhdGlvbi1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7d2lkdGg6MzBlbTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlKTtib3JkZXI6MXB4IHNvbGlkICNhMGEwYTA7cGFkZGluZzouNXJlbSAxLjVyZW07Ym9yZGVyLXRvcDowO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6M3B4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtZXNzYWdlOiBOb3RpZmljYXRpb25JdGVtO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXRNZXNzYWdlKCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB9KTtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbXByaW50TW9kZWwgfSBmcm9tICcuL2ltcHJpbnQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCY2lJbXByaW50RGV0YWlsc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24pIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW1wcmludCBkZXRhaWxzIGZvciBpbXByaW50IHZpZXcuXG4gICAqL1xuICBnZXRJbXByaW50RGV0YWlscygpOiBPYnNlcnZhYmxlPEltcHJpbnRNb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PEltcHJpbnRNb2RlbD4odGhpcy5sb2NhdGlvbi5wcmVwYXJlRXh0ZXJuYWxVcmwoJy9hc3NldHMvaW1wcmludC1kZXRhaWxzLmpzb24nKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dDb25maWcsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cblxuLyoqXG4gKiBVc2UgdGhpcyBzZXJ2aWNlIHRvIG9wZW4gZGlhbG9ncy9tb2RhbCB3aW5kb3dzLlxuICogRnV0dXJlIHVwZGF0ZXMgd2lsbCBzaGlwIHdpdGggYSBzdGFuZGFyZCBkaWFsb2cgY29udGFpbmluZyBhIGhlYWRlciwgY29udGVudCwgYWN0aW9uIGJ1dHRvbnMgYW5kIGNsb3NlIGljb24gYnV0dG9uXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsV2luZG93U2VydmljZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXREaWFsb2c6IE1hdERpYWxvZywgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIE9wZW5zIGEgbW9kYWwgZGlhbG9nIGNvbnRhaW5pbmcgdGhlIGdpdmVuIGNvbXBvbmVudC5cbiAgICogQHBhcmFtIGNvbXBvbmVudE9yVGVtcGxhdGVSZWYgVHlwZSBvZiB0aGUgY29tcG9uZW50IHRvIGxvYWQgaW50byB0aGUgZGlhbG9nLFxuICAgKiAgICAgb3IgYSBUZW1wbGF0ZVJlZiB0byBpbnN0YW50aWF0ZSBhcyB0aGUgZGlhbG9nIGNvbnRlbnQuXG4gICAqIEBwYXJhbSBjb25maWcgRXh0cmEgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgKiBAcGFyYW0gbWF0RGlhbG9nIGluamVjdCBNYXREaWFsb2cgaW4gY29uc3RydWN0b3IgaW4gY29tcG9uZW50cyBjb250YWluZWQgaW4gbGF6eS1sb2FkZWQgTW9kdWxlc1xuICAgKiBAcmV0dXJucyBSZWZlcmVuY2UgdG8gdGhlIG5ld2x5LW9wZW5lZCBkaWFsb2cuXG4gICAqL1xuICBwdWJsaWMgb3BlbkRpYWxvZ1dpdGhDb21wb25lbnQ8VCwgRCA9IGFueSwgUiA9IGFueT4oY29tcG9uZW50T3JUZW1wbGF0ZVJlZjogQ29tcG9uZW50VHlwZTxUPiB8IFRlbXBsYXRlUmVmPFQ+LCBjb25maWc/OiBNYXREaWFsb2dDb25maWc8RD4sIG1hdERpYWxvZz86IE1hdERpYWxvZyk6IE1hdERpYWxvZ1JlZjxULCBSPiB7XG4gICAgY29uc3QgbWF0RGlhbG9nVXNlZCA9IChtYXREaWFsb2cgIT09IG51bGwgJiYgbWF0RGlhbG9nICE9PSB1bmRlZmluZWQpID8gbWF0RGlhbG9nIDogdGhpcy5tYXREaWFsb2c7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gbWF0RGlhbG9nVXNlZC5vcGVuPFQsIEQsIFI+KGNvbXBvbmVudE9yVGVtcGxhdGVSZWYsIGNvbmZpZyk7XG4gICAgaWYgKGRpYWxvZ1JlZiAmJiBtYXREaWFsb2dVc2VkLm9wZW5EaWFsb2dzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1jbG9zZWQnKTtcbiAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuXG4gICAgICBkaWFsb2dSZWYuYmVmb3JlQ2xvc2UoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAobWF0RGlhbG9nVXNlZC5vcGVuRGlhbG9ncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwnKTtcbiAgICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY2xvc2VkJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbn1cbiIsIi8qKlxuICogQGxpY2VuY2VcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjaUltcHJpbnREZXRhaWxzU2VydmljZSB9IGZyb20gJy4vYmNpLWltcHJpbnQtZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7IEltcHJpbnRNb2RlbCB9IGZyb20gJy4vaW1wcmludC5tb2RlbCc7XG5pbXBvcnQgeyBNb2RhbFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuLi9tb2RhbC13aW5kb3cvbW9kYWwtd2luZG93LnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktaW1wcmludCcsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxkaXYgY2xhc3M9XCJkaWFsb2ctaGVhZGVyXCI+XG4gIDxoMyBtYXREaWFsb2dUaXRsZT5JbXByaW50PC9oMz5cbiAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLWJ1dHRvblwiIG1hdC1pY29uLWJ1dHRvbiB0YWJpbmRleD1cIi0xXCIgKGNsaWNrKT1cImNsaWNrQ2FuY2VsKClcIj5cbiAgICA8aSBjbGFzcz1cIkJvc2NoLUljIEJvc2NoLUljLWFib3J0XCI+PC9pPlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuPG1hdC1kaWFsb2ctY29udGVudD5cbiAgPGEgY2xhc3M9XCJoZWFkZXItbG9nb1wiPlxuICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1nL2Jvc2NoLWludmVudGVkLWZvci1saWZlLnN2Z1wiIGFsdD1cIkJvc2NoIEludmVudGVkIEZvciBMaWZlIExvZ29cIj5cbiAgPC9hPlxuXG4gIDx0YWJsZSBjbGFzcz1cIm5hbWUtYW5kLXZlcnNpb24tY29udGFpbmVyXCI+XG4gICAgPHRib2R5PlxuICAgIDx0cj5cbiAgICAgIDx0ZD5OYW1lPC90ZD5cbiAgICAgIDx0ZD57eyBkYXRhPy5uYW1lIH19PC90ZD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZD5WZXJzaW9uPC90ZD5cbiAgICAgIDx0ZD57eyBkYXRhPy52ZXJzaW9uIHx8ICcwLjAuMCcgfX08L3RkPlxuICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbiAgPC90YWJsZT5cblxuICA8dGFibGU+XG4gICAgPHRib2R5PlxuICAgIDx0cj5cbiAgICAgIDx0ZD5OYW1lIGFuZCBhZGRyZXNzPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHA+e3tkYXRhPy5hZGRyZXNzPy5uYW1lIHx8ICdSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCcgfX08L3A+XG4gICAgICAgIDxwPnt7ZGF0YT8uYWRkcmVzcz8uc3RyZWV0IHx8ICdQb3N0ZmFjaCAzMCAwMiAyMCcgfX08L3A+XG4gICAgICAgIDxwPnt7ZGF0YT8uYWRkcmVzcz8uY2l0eSB8fCAnNzA0NDIgU3R1dHRnYXJ0JyB9fTwvcD5cbiAgICAgICAgPHA+e3tkYXRhPy5hZGRyZXNzPy5jb3VudHJ5IHx8ICdHRVJNQU5ZJyB9fTwvcD5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+Q29udGFjdDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDxwICpuZ0lmPVwiZGF0YT8uY29udGFjdEF0Qm9zY2hcIj57e2RhdGEuY29udGFjdEF0Qm9zY2h9fTwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzp7e2RhdGE/LmNvbnRhY3RNYWlsIHx8ICdrb250YWt0QGJvc2NoLmNvbSd9fVwiPnt7ZGF0YT8uY29udGFjdE1haWwgfHwgJ2tvbnRha3RAYm9zY2guY29tJ319PC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyPlxuICAgICAgPHRkPkJvYXJkIG9mIG1hbmFnZW1lbnQ8L3RkPlxuICAgICAgPHRkPnt7IGRhdGE/LmJvYXJkT2ZNYW5hZ2VtZW50IHx8ICdFbm5vIFNjaGFycGh1aXMsIERpZXJrIEfDg8K2Y2tlbCwgRHIuIFN0ZWZhbiBBw4PCn21hbm4nfX08L3RkPlxuICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbiAgPC90YWJsZT5cbjwvbWF0LWRpYWxvZy1jb250ZW50PlxuXG5cblxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovbWF0LWRpYWxvZy1jb250ZW50e2ZvbnQtZmFtaWx5OkJvc2NoLVNhbnM7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc2l6ZToxNHB4fS5oZWFkZXItbG9nbyBpbWd7YWxpZ24tc2VsZjpjZW50ZXI7aGVpZ2h0OjU4LjJweDt3aWR0aDoxODBweDttYXJnaW4tYm90dG9tOjY0cHg7bWFyZ2luLXRvcDoxNnB4fXRhYmxle2ZvbnQtZmFtaWx5OkJvc2NoLVNhbnM7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc2l6ZToxNHB4fXRhYmxlIHRke3BhZGRpbmc6MCAzMnB4IDMycHggMDtib3JkZXItYm90dG9tOjB9dGFibGUgdGQgcHttYXJnaW46MDtmb250LWZhbWlseTpCb3NjaC1TYW5zO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTRweH10YWJsZSB0cntib3JkZXItYm90dG9tOm5vbmV9dGFibGUgdHI+dGQ6Zmlyc3QtY2hpbGR7Zm9udC1mYW1pbHk6Qm9zY2gtU2Fucztmb250LXNpemU6MTRweDtmb250LXdlaWdodDo3MDA7Y29sb3I6IzUyNWY2YjtwYWRkaW5nLXJpZ2h0OjMycHg7dmVydGljYWwtYWxpZ246dG9wfS5uYW1lLWFuZC12ZXJzaW9uLWNvbnRhaW5lcnttYXJnaW4tYm90dG9tOjMycHh9YTpmb2N1c3tvdXRsaW5lOjB9YF1cbn0pXG5leHBvcnQgY2xhc3MgQmNpSW1wcmludENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRhdGE6IEltcHJpbnRNb2RlbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsV2luZG93U2VydmljZTogTW9kYWxXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGltcHJpbnREZXRhaWxzU2VydmljZTogQmNpSW1wcmludERldGFpbHNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEJjaUltcHJpbnRDb21wb25lbnQ+KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmltcHJpbnREZXRhaWxzU2VydmljZS5nZXRJbXByaW50RGV0YWlscygpLnN1YnNjcmliZShcbiAgICAgIGltcHJpbnRNb2RlbCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGltcHJpbnRNb2RlbDtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNsaWNrQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgbGV0IEVOVklST05NRU5UX1BST0QgPSBuZXcgSW5qZWN0aW9uVG9rZW48Qm9vbGVhbj4oJ0VOVklST05NRU5UX1BST0QnKTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbG9zYWJsZU92ZXJsYXlDb21wb25lbnRNb2RlbCB9IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnRDb25maWcgfSBmcm9tICcuL2xvZ291dC5jb21wb25lbnQubW9kZWwnO1xuXG4vKipcbiAqIFNpbXBsZSBsb2dvdXQgY29tcG9uZW50IHRvIGFwcGVhciBuZXh0IHRvIHRoZSB1c2VyIG5hdiBlbGVtZW50LiBJdCB3aWxsIGJlIHByb3Blcmx5IGFsaWduZWQgdG8gdGhlIHNpZGViYXIgbmF2IGl0ZW0uXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgZHluYW1pY2FsbHkgY3JlYXRlZCB1c2luZyBwb3J0YWxzLCBpdCBtdXN0IGJlIGluY2x1ZGVkIGluIHRoZSBlbnRyeUNvbXBvbmVudHMgb2YgeW91ciBOZ01vZHVsZSFcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWxvZ291dCcsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxkaXYgY2xhc3M9XCJiY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5XCI+XG4gIDxkaXYgY2xhc3M9XCJiY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5LWhlYWRlclwiPlxuICAgIDxzcGFuPnt7Y29uZmlnPy50aXRsZX19PC9zcGFuPlxuICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idXR0b25cIiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICAgIDxtYXQtaWNvbiBmb250SWNvbj1cIkJvc2NoLUljLWFib3J0XCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJiY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5LWJ1dHRvbnNcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLXByaW1hcnlcIiAoY2xpY2spPVwibG9nb3V0KClcIj5Mb2dvdXQ8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy5iY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5e2ZvbnQtZmFtaWx5OkJvc2NoLVNhbnM7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc2l6ZToxNnB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tbGVmdDo4cHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3dpZHRoOjIyMHB4O3BhZGRpbmc6MTZweH0uYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheSAuYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheS1oZWFkZXJ7d2lkdGg6MTAwJTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47bWFyZ2luLWJvdHRvbToxNnB4fS5iY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5IC5iY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5LWhlYWRlciAuY2xvc2UtYnV0dG9uIC5tYXQtaWNvbiwuYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheSAuYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheS1oZWFkZXIgLmNsb3NlLWJ1dHRvbi5tYXQtaWNvbi1idXR0b257bGluZS1oZWlnaHQ6dW5zZXQ7d2lkdGg6LXdlYmtpdC1maXQtY29udGVudDt3aWR0aDotbW96LWZpdC1jb250ZW50O3dpZHRoOmZpdC1jb250ZW50O2hlaWdodDotd2Via2l0LWZpdC1jb250ZW50O2hlaWdodDotbW96LWZpdC1jb250ZW50O2hlaWdodDpmaXQtY29udGVudH0uYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheSAuYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheS1oZWFkZXIgLmNsb3NlLWJ1dHRvbiAuQm9zY2gtSWN7Zm9udC1zaXplOjIwcHghaW1wb3J0YW50fS5iY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5IC5iY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5LWJ1dHRvbnN7d2lkdGg6MTAwJTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheTphZnRlcntyaWdodDoxMDAlO3RvcDpjYWxjKDEwMCUgLSAyNHB4KTtib3JkZXI6OHB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMCk7Y29udGVudDpcIiBcIjtoZWlnaHQ6MDt3aWR0aDowO3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7Ym9yZGVyLXJpZ2h0LWNvbG9yOiNmZmY7bWFyZ2luLXRvcDotOHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dENvbXBvbmVudCBpbXBsZW1lbnRzIENsb3NhYmxlT3ZlcmxheUNvbXBvbmVudE1vZGVsPExvZ291dENvbXBvbmVudENvbmZpZz4ge1xuXG4gIC8qKlxuICAgKiBZb3UgbXVzdCBwcm92aWRlIHRoZSBoZWFkZXIgdGV4dCBhbmQgYSBsb2dvdXQgY2FsbGJhY2tcbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBjb25maWc6IExvZ291dENvbXBvbmVudENvbmZpZztcblxuICAvKipcbiAgICogSW5mb3JtcyB0aGF0IHRoZSBjb21wb25lbnQgd2lzaGVzIHRvIGJlIGNsb3NlZC4gVXNlZCBieSB0aGUgb3ZlcmxheSBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuY29uZmlnLm9uTG9nb3V0KCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENPUkVfQ09ORklHX1VSTCwgQ29yZUNvbmZpZ3VyYXRpb25Nb2R1bGUgfSBmcm9tICcuL2NvcmUtY29uZmlndXJhdGlvbi9jb3JlLWNvbmZpZ3VyYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IHRocm93SWZBbHJlYWR5TG9hZGVkIH0gZnJvbSAnLi9tb2R1bGUtaW1wb3J0LWd1YXJkJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSwgTWF0SWNvblJlZ2lzdHJ5IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBCY2lJbXByaW50Q29tcG9uZW50IH0gZnJvbSAnLi9pbXByaW50L2JjaS1pbXByaW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVF9QUk9EIH0gZnJvbSAnLi9lbnZpcm9ubWVudC1wcm9kLnRva2VuJztcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tICcuL2xvZ291dC9sb2dvdXQuY29tcG9uZW50JztcblxuXG5leHBvcnQgaW50ZXJmYWNlIElDb3JlTW9kdWxlQ29uZmlnIHtcbiAgcHJvZF9lbnZpcm9ubWVudD86IGJvb2xlYW47XG4gIGNvcmVfY29uZmlnX3VybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRDb3JlTW9kdWxlQ29uZmlnOiBJQ29yZU1vZHVsZUNvbmZpZyA9IHtcbiAgcHJvZF9lbnZpcm9ubWVudDogZmFsc2UsXG4gIGNvcmVfY29uZmlnX3VybDogdW5kZWZpbmVkXG59O1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgLy8gVE9ETzogbmVlZGVkP1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQ29yZUNvbmZpZ3VyYXRpb25Nb2R1bGUsXG4gICAgRmxleExheW91dE1vZHVsZSxcbiAgICAvKiBBbmd1bGFyIE1hdGVyaWFsKi9cbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgLyogQ0RLICovXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBQb3J0YWxNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTm90Rm91bmRDb21wb25lbnQsIE5vdGlmaWNhdGlvbkNvbXBvbmVudCwgQmNpSW1wcmludENvbXBvbmVudCwgTG9nb3V0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW05vdEZvdW5kQ29tcG9uZW50LCBOb3RpZmljYXRpb25Db21wb25lbnQsIEh0dHBDbGllbnRNb2R1bGUsIEJjaUltcHJpbnRDb21wb25lbnQsIEZsZXhMYXlvdXRNb2R1bGUsIExvZ291dENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0JjaUltcHJpbnRDb21wb25lbnQsIExvZ291dENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQmNpQ29yZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogSUNvcmVNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEJjaUNvcmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEVOVklST05NRU5UX1BST0QsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZy5wcm9kX2Vudmlyb25tZW50IHx8IERlZmF1bHRDb3JlTW9kdWxlQ29uZmlnLnByb2RfZW52aXJvbm1lbnRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENPUkVfQ09ORklHX1VSTCxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnLmNvcmVfY29uZmlnX3VybFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQmNpQ29yZU1vZHVsZSwgcHJpdmF0ZSBpY29uUmVnaXN0cnk6IE1hdEljb25SZWdpc3RyeSkge1xuICAgIHRocm93SWZBbHJlYWR5TG9hZGVkKHBhcmVudE1vZHVsZSwgJ0JjaUNvcmVNb2R1bGUnKTtcblxuICAgIGljb25SZWdpc3RyeS5yZWdpc3RlckZvbnRDbGFzc0FsaWFzKCdib3NjaCcsICdCb3NjaC1JYycpXG4gICAgICAuc2V0RGVmYXVsdEZvbnRTZXRDbGFzcygnQm9zY2gtSWMnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb3JlLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi9jb3JlLWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBDT1JFX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb3JlQ29uZmlnPignQ09SRV9DT05GSUcnLCB7XG4gIGZhY3Rvcnk6ICgpID0+IGluamVjdChDb3JlQ29uZmlndXJhdGlvblNlcnZpY2UpLmdldENvbmZpZygpLFxuICBwcm92aWRlZEluOiAncm9vdCdcbn0pO1xuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5leHBvcnQgY29uc3QgQk9TQ0hfQ09MT1JTID0ge1xuICBCb3NjaFJlZDogJyNFMjAwMTUnLFxuICBCb3NjaEZ1Y2hzaWE6ICcjQjkwMjc2JyxcbiAgQm9zY2hGdWNoc2lhNTA6ICcjREM4MEJBJyxcbiAgQm9zY2hWaW9sZXQ6ICcjNTAyMzdGJyxcbiAgQm9zY2hWaW9sZXQ1MDogJyNBNzkxQkYnLFxuICBCb3NjaERhcmtCbHVlOiAnIzAwNTY5MScsXG4gIEJvc2NoRGFya0JsdWU1MDogJyM3RkFBQzgnLFxuICBCb3NjaExpZ2h0Qmx1ZTogJyMwMDhFQ0YnLFxuICBCb3NjaExpZ2h0Qmx1ZTUwOiAnIzdGQzZFNycsXG4gIEJvc2NoVHVycXVvaXNlOiAnIzAwQThCMCcsXG4gIEJvc2NoVHVycXVvaXNlNTA6ICcjN2ZkM2Q3JyxcbiAgQm9zY2hMaWdodEdyZWVuOiAnIzc4QkUyMCcsXG4gIEJvc2NoTGlnaHRHcmVlbjUwOiAnI2JiZGU4ZicsXG4gIEJvc2NoRGFya0dyZWVuOiAnIzAwNjI0OScsXG4gIEJvc2NoRGFya0dyZWVuNTA6ICcjN2ZiMGE0JyxcbiAgQm9zY2hHcmVlbjogJyMzMjhENDYnLFxuXG4gIEJvc2NoV2hpdGU6ICcjRkZGRkZGJyxcbiAgQm9zY2hMaWdodEdyYXk6ICcjQkZDMEMyJyxcbiAgLyoqXG4gICAqIFRoaXMgZ3JheSBzY2FsZSBzaG91bGQgYmUgdXNlZCBmb3IgZGFyayBVSXMuIENvbnNpZGVyIHRoZSBsaWdodCBncmF5IHNjYWxlIGZvciB5b3VyIHdlYiBhcHBsaWNhdGlvbi5cbiAgICovXG4gIEJvc2NoRGFya0dyYXk6ICcjNTI1RjZCJyxcbiAgQm9zY2hCbGFjazogJyMwMDAwMDAnLFxuXG4gIEJvc2NoU2lnbmFsR3JlZW46ICcjNzBiZjU0JyxcbiAgQm9zY2hTaWduYWxZZWxsb3c6ICcjRkNBRjE3JyxcbiAgQm9zY2hTaWduYWxSZWQ6ICcjZTExZjI2JyxcbiAgQm9zY2hTaWduYWxPcmFuZ2U6ICcjZmY2YTAwJyxcblxuXG4gIC8qIFNoYWRlcyAqL1xuICBCb3NjaFJlZFc3NTogJyNGOEJGQzUnLFxuICBCb3NjaFJlZFc1MDogJyNGMTdGOEInLFxuICBCb3NjaFJlZFcyNTogJyNFQTQwNTEnLFxuICBCb3NjaFJlZEIyNTogJyNBOTAwMTAnLFxuICBCb3NjaFJlZEI1MDogJyM3MTAwMEInLFxuICBCb3NjaFJlZEI3NTogJyMzOTAwMDUnLFxuICBCb3NjaEZ1Y2hzaWFXNzU6ICcjRURDMEREJyxcbiAgQm9zY2hGdWNoc2lhVzUwOiAnI0RDODBCQScsXG4gIEJvc2NoRnVjaHNpYVcyNTogJyNDQjQxOTgnLFxuICBCb3NjaEZ1Y2hzaWFCMjU6ICcjOEIwMTU4JyxcbiAgQm9zY2hGdWNoc2lhQjUwOiAnIzVEMDEzQicsXG4gIEJvc2NoRnVjaHNpYUI3NTogJyMyRTAxMUUnLFxuICBCb3NjaFZpb2xldFc3NTogJyNEM0M4REYnLFxuICBCb3NjaFZpb2xldFc1MDogJyNBNzkxQkYnLFxuICBCb3NjaFZpb2xldFcyNTogJyM3QzVBOUYnLFxuICBCb3NjaFZpb2xldEIyNTogJyMzQzFBNUYnLFxuICBCb3NjaFZpb2xldEI1MDogJyMyODEyNDAnLFxuICBCb3NjaFZpb2xldEI3NTogJyMxNDA5MjAnLFxuICBCb3NjaERhcmtCbHVlVzc1OiAnI0JGRDVFMycsXG4gIEJvc2NoRGFya0JsdWVXNTA6ICcjN0ZBQUM4JyxcbiAgQm9zY2hEYXJrQmx1ZVcyNTogJyM0MDgwQUQnLFxuICBCb3NjaERhcmtCbHVlQjI1OiAnIzAwNDA2RCcsXG4gIEJvc2NoRGFya0JsdWVCNTA6ICcjMDAyQjQ5JyxcbiAgQm9zY2hEYXJrQmx1ZUI3NTogJyMwMDE2MjQnLFxuICBCb3NjaExpZ2h0Qmx1ZVc3NTogJyNCRkUzRjMnLFxuICBCb3NjaExpZ2h0Qmx1ZVc1MDogJyM3RkM2RTcnLFxuICBCb3NjaExpZ2h0Qmx1ZVcyNTogJyM0MEFBREInLFxuICBCb3NjaExpZ2h0Qmx1ZUIyNTogJyMwMDZBOUInLFxuICBCb3NjaExpZ2h0Qmx1ZUI1MDogJyMwMDQ3NjgnLFxuICBCb3NjaExpZ2h0Qmx1ZUI3NTogJyMwMDI0MzQnLFxuICBCb3NjaFR1cnF1b2lzZVc3NTogJyNCRkU5RUInLFxuICBCb3NjaFR1cnF1b2lzZVc1MDogJyM3RkQzRDcnLFxuICBCb3NjaFR1cnF1b2lzZVcyNTogJyM0MEJFQzQnLFxuICBCb3NjaFR1cnF1b2lzZUIyNTogJyMwMDdFODQnLFxuICBCb3NjaFR1cnF1b2lzZUI1MDogJyMwMDU0NTgnLFxuICBCb3NjaFR1cnF1b2lzZUI3NTogJyMwMDJBMkMnLFxuICBCb3NjaExpZ2h0R3JlZW5XNzU6ICcjRERFRkM3JyxcbiAgQm9zY2hMaWdodEdyZWVuVzUwOiAnI0JCREU4RicsXG4gIEJvc2NoTGlnaHRHcmVlblcyNTogJyM5QUNFNTgnLFxuICBCb3NjaExpZ2h0R3JlZW5CMjU6ICcjNUE4RTE4JyxcbiAgQm9zY2hMaWdodEdyZWVuQjUwOiAnIzNDNUYxMCcsXG4gIEJvc2NoTGlnaHRHcmVlbkI3NTogJyMxRTMwMDgnLFxuICBCb3NjaERhcmtHcmVlblc3NTogJyNCRkQ4RDEnLFxuICBCb3NjaERhcmtHcmVlblc1MDogJyM3RkIwQTQnLFxuICBCb3NjaERhcmtHcmVlblcyNTogJyM0MDg5NzcnLFxuICBCb3NjaERhcmtHcmVlbkIyNTogJyMwMDQ5MzcnLFxuICBCb3NjaERhcmtHcmVlbkI1MDogJyMwMDMxMjUnLFxuICBCb3NjaERhcmtHcmVlbkI3NTogJyMwMDE5MTInLFxuICBCb3NjaExpZ2h0R3JheVc3NTogJyNFRkVGRjAnLFxuICBCb3NjaExpZ2h0R3JheVc1MDogJyNERkRGRTAnLFxuICBCb3NjaExpZ2h0R3JheVcyNTogJyNDRkQwRDEnLFxuICBCb3NjaExpZ2h0R3JheUIyNTogJyM4RjkwOTEnLFxuICBCb3NjaExpZ2h0R3JheUI1MDogJyM2MDYwNjEnLFxuICBCb3NjaExpZ2h0R3JheUI3NTogJyMzMDMwMzEnLFxuICAvKipcbiAgICogVGhpcyBncmF5IHNjYWxlIHNob3VsZCBiZSB1c2VkIGZvciBkYXJrIFVJcy4gQ29uc2lkZXIgdGhlIGxpZ2h0IGdyYXkgc2NhbGUgZm9yIHlvdXIgd2ViIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgQm9zY2hEYXJrR3JheVc3NTogJyNENEQ3REEnLFxuICAvKipcbiAgICogVGhpcyBncmF5IHNjYWxlIHNob3VsZCBiZSB1c2VkIGZvciBkYXJrIFVJcy4gQ29uc2lkZXIgdGhlIGxpZ2h0IGdyYXkgc2NhbGUgZm9yIHlvdXIgd2ViIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgQm9zY2hEYXJrR3JheVc1MDogJyNBOEFGQjUnLFxuICAvKipcbiAgICogVGhpcyBncmF5IHNjYWxlIHNob3VsZCBiZSB1c2VkIGZvciBkYXJrIFVJcy4gQ29uc2lkZXIgdGhlIGxpZ2h0IGdyYXkgc2NhbGUgZm9yIHlvdXIgd2ViIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgQm9zY2hEYXJrR3JheVcyNTogJyM3RDg3OTAnLFxuICAvKipcbiAgICogVGhpcyBncmF5IHNjYWxlIHNob3VsZCBiZSB1c2VkIGZvciBkYXJrIFVJcy4gQ29uc2lkZXIgdGhlIGxpZ2h0IGdyYXkgc2NhbGUgZm9yIHlvdXIgd2ViIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgQm9zY2hEYXJrR3JheUIyNTogJyMzRDQ3NTAnLFxuICAvKipcbiAgICogVGhpcyBncmF5IHNjYWxlIHNob3VsZCBiZSB1c2VkIGZvciBkYXJrIFVJcy4gQ29uc2lkZXIgdGhlIGxpZ2h0IGdyYXkgc2NhbGUgZm9yIHlvdXIgd2ViIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgQm9zY2hEYXJrR3JheUI1MDogJyMyOTMwMzYnLFxuICAvKipcbiAgICogVGhpcyBncmF5IHNjYWxlIHNob3VsZCBiZSB1c2VkIGZvciBkYXJrIFVJcy4gQ29uc2lkZXIgdGhlIGxpZ2h0IGdyYXkgc2NhbGUgZm9yIHlvdXIgd2ViIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgQm9zY2hEYXJrR3JheUI3NTogJyMxNTE4MUInLFxuICBCb3NjaFllbGxvd1c3NTogJyNGRUVCQzUnLFxuICBCb3NjaFllbGxvd1c1MDogJyNGREQ3OEInLFxuICBCb3NjaFllbGxvd1cyNTogJyNGREMzNTEnLFxuICBCb3NjaFllbGxvd0IyNTogJyNCRDgzMTEnLFxuICBCb3NjaFllbGxvd0I1MDogJyM3RTU4MEMnLFxuICBCb3NjaFllbGxvd0I3NTogJyMzRjJDMDYnXG59O1xuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktY29udGVudCcsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxkaXYgY2xhc3M9XCJiY2ktY29udGVudC1jb250YWluZXJcIj5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYmNpLXNpZGViYXJcIj48L25nLWNvbnRlbnQ+XG4gIDxuZy1jb250ZW50PlxuICA8L25nLWNvbnRlbnQ+XG5cbiAgPGRpdiBjbGFzcz1cImJjaS1jb250ZW50LWNvbnRhaW5lci1tYWluXCI+XG5cbiAgPC9kaXY+XG4gIDxiY2ktbG9hZGVyPjwvYmNpLWxvYWRlcj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLmJjaS1jb250ZW50LWNvbnRhaW5lcntoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtvdmVyZmxvdzpoaWRkZW59LmJjaS1jb250ZW50LWNvbnRhaW5lcjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjE2cHg7Y29udGVudDonJztiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOmNvdmVyO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyIGNlbnRlcjtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJad29nSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlLSUNCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElnb2dJR2hsYVdkb2REMGlNekF3SWdvZ0lIZHBaSFJvUFNJM01qQWlDaUFnZG1WeWMybHZiajBpTVM0eElnb2dJSGs5SWpBaUNpQWdlRDBpTUNJS0lDQjJhV1YzUW05NFBTSXdJREFnTnpJd0lETXdNQ0krQ2lBZ1BITjBlV3hsSUhSNWNHVTlJblJsZUhRdlkzTnpJajRLSUNBZ0lDNXpkREFnZXdvZ0lDQWdJQ0JtYVd4c09pQjFjbXdvSWlOVFZrZEpSRjh4WHlJcE93b2dJQ0FnZlFvZ0lDQWdMbk4wTVNCN0NpQWdJQ0FnSUdacGJHdzZJSFZ5YkNnaUkxTldSMGxFWHpKZklpazdDaUFnSUNCOUNpQWdJQ0F1YzNReUlIc0tJQ0FnSUNBZ1ptbHNiRG9nZFhKc0tDSWpVMVpIU1VSZk0xOGlLVHNLSUNBZ0lIMEtJQ0FnSUM1emRETWdld29nSUNBZ0lDQm1hV3hzT2lCMWNtd29JaU5UVmtkSlJGODBYeUlwT3dvZ0lDQWdmUW9nSUNBZ0xuTjBOQ0I3Q2lBZ0lDQWdJR1pwYkd3NklIVnliQ2dpSTFOV1IwbEVYelZmSWlrN0NpQWdJQ0I5Q2lBZ0lDQXVjM1ExSUhzS0lDQWdJQ0FnWm1sc2JEb2dJMEZHTWpBeU5Ec0tJQ0FnSUgwS0lDQWdJQzV6ZERZZ2V3b2dJQ0FnSUNCbWFXeHNPaUIxY213b0lpTlRWa2RKUkY4Mlh5SXBPd29nSUNBZ2ZRb2dJQ0FnTG5OME55QjdDaUFnSUNBZ0lHWnBiR3c2SUNNNU5ERkNNVVU3Q2lBZ0lDQjlDaUFnSUNBdWMzUTRJSHNLSUNBZ0lDQWdabWxzYkRvZ0kwSXhNamN6T1RzS0lDQWdJSDBLSUNBZ0lDNXpkRGtnZXdvZ0lDQWdJQ0JtYVd4c09pQWpPVFV5TkRNeU93b2dJQ0FnZlFvZ0lDQWdMbk4wTVRBZ2V3b2dJQ0FnSUNCbWFXeHNPaUFqUkRReU1ESTNPd29nSUNBZ2ZRb2dJQ0FnTG5OME1URWdld29nSUNBZ0lDQm1hV3hzT2lCMWNtd29JaU5UVmtkSlJGODNYeUlwT3dvZ0lDQWdmUW9nSUNBZ0xuTjBNVElnZXdvZ0lDQWdJQ0JtYVd4c09pQjFjbXdvSWlOVFZrZEpSRjg0WHlJcE93b2dJQ0FnZlFvZ0lDQWdMbk4wTVRNZ2V3b2dJQ0FnSUNCbWFXeHNPaUFqTVVNNVFUUTRPd29nSUNBZ2ZRb2dJQ0FnTG5OME1UUWdld29nSUNBZ0lDQm1hV3hzT2lCMWNtd29JaU5UVmtkSlJGODVYeUlwT3dvZ0lDQWdmUW9nSUNBZ0xuTjBNVFVnZXdvZ0lDQWdJQ0JtYVd4c09pQjFjbXdvSWlOVFZrZEpSRjh4TUY4aUtUc0tJQ0FnSUgwS0lDQWdJQzV6ZERFMklIc0tJQ0FnSUNBZ1ptbHNiRG9nSXpKQk16ZzROanNLSUNBZ0lIMEtJQ0FnSUM1emRERTNJSHNLSUNBZ0lDQWdabWxzYkRvZ2RYSnNLQ0lqVTFaSFNVUmZNVEZmSWlrN0NpQWdJQ0I5Q2lBZ0lDQXVjM1F4T0NCN0NpQWdJQ0FnSUdacGJHdzZJSFZ5YkNnaUkxTldSMGxFWHpFeVh5SXBPd29nSUNBZ2ZRb2dJQ0FnTG5OME1Ua2dld29nSUNBZ0lDQm1hV3hzT2lCMWNtd29JaU5UVmtkSlJGOHhNMThpS1RzS0lDQWdJSDBLSUNBZ0lDNXpkREl3SUhzS0lDQWdJQ0FnWm1sc2JEb2dkWEpzS0NJalUxWkhTVVJmTVRSZklpazdDaUFnSUNCOUNpQWdQQzl6ZEhsc1pUNEtJQ0E4WnlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3RNUzQxTlN3dE15NHpLU0krQ2lBZ0lDQThiR2x1WldGeVIzSmhaR2xsYm5RZ2FXUTlJbE5XUjBsRVh6RmZJaUI1TWowaUxUTXlMalkyTXlJZ1ozSmhaR2xsYm5SVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlJSGt4UFNJdE16SXVOall6SWlCbmNtRmthV1Z1ZEZSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SUMweE1UZ3VPVGdnTVRJd0xqVTBLU0lnZURJOUlqZzBNaTR3T0NJZ2VERTlJakV4T0M0NU9DSStQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJemsxTWpNek1TSWdiMlptYzJWMFBTSXdJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpreU1VTXhSQ0lnYjJabWMyVjBQU0l1TURNMk1EazBJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSTBJd01qY3pPU0lnYjJabWMyVjBQU0l1TURnME5qUTVJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSTBGRU1VWXlOQ0lnYjJabWMyVjBQU0l1TVRJek55SXZQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU5ETnpJd01qWWlJRzltWm5ObGREMGlMakUxTURraUx6NDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpSRFF5TURJM0lpQnZabVp6WlhROUlpNHhOamszSWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUkwTkRNalF6TVNJZ2IyWm1jMlYwUFNJdU1UYzFPQ0l2UGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlOQ056SkNORU1pSUc5bVpuTmxkRDBpTGpFNE9EZ2lMejQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqT1RVek16Y3hJaUJ2Wm1aelpYUTlJaTR5TURjMElpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJemc0TXpVM1JpSWdiMlptYzJWMFBTSXVNakUwTWlJdlBqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTTROVE0yT0RFaUlHOW1abk5sZEQwaUxqSTBNellpTHo0OGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak5rWXpOamhDSWlCdlptWnpaWFE5SWk0eU5qTTRJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpNNU5ESTRSaUlnYjJabWMyVjBQU0l1TWpreE1TSXZQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU15TXpORU4wUWlJRzltWm5ObGREMGlMak15TkRJaUx6NDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpNekl5UXpaR0lpQnZabVp6WlhROUlpNDBNVGd4SWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6SkJNemc0TlNJZ2IyWm1jMlYwUFNJdU5EazBJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpGRU5qSkJNU0lnYjJabWMyVjBQU0l1TlRVNE1TSXZQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU15TnpaRFFUVWlJRzltWm5ObGREMGlMalUzTURJaUx6NDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpORE00UlVJeklpQnZabVp6WlhROUlpNDJNVEF6SWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6VTFRVFZDUXlJZ2IyWm1jMlYwUFNJdU5qTTVPU0l2UGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNMVEwRkdRa1lpSUc5bVpuTmxkRDBpTGpZMU5UWWlMejQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqTlRaQlFrSkVJaUJ2Wm1aelpYUTlJaTQyTnpjM0lpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJelF6T1VaQ09DSWdiMlptYzJWMFBTSXVOekExT0NJdlBqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTXhPRGhGUVVZaUlHOW1abk5sZEQwaUxqY3pOeklpTHo0OGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak1ETTRRa0ZGSWlCdlptWnpaWFE5SWk0M05ESTJJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpBMk9USTVNaUlnYjJabWMyVjBQU0l1TnpnNU9DSXZQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU13TlVFeE5FSWlJRzltWm5ObGREMGlMamc0TnpVaUx6NDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpNRE01TWpkRklpQnZabVp6WlhROUlqRWlMejQ4TDJ4cGJtVmhja2R5WVdScFpXNTBQanh5WldOMElIZHBaSFJvUFNJM01qTXVNU0lnZVQwaU1DSWdlRDBpTUNJZ2FHVnBaMmgwUFNJek1EWXVOQ0lnWTJ4aGMzTTlJbk4wTUNJZ1ptbHNiRDBpZFhKc0tDTlRWa2RKUkY4eFh5a2lMejRLSUNBZ0lEeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGlVMVpIU1VSZk1sOGlJSGt5UFNJdE1UQTVMakkySWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSWdlVEU5SWkweE1Ea3VNallpSUdkeVlXUnBaVzUwVkhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVNBd0lEQWdMVEVnTFRFeE9DNDVPQ0F4TWpBdU5UUXBJaUI0TWowaU1qTTFMams0SWlCNE1UMGlNekkxTGpBNElqNDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpPRGt6Tmpnd0lpQnZabVp6WlhROUlqQWlMejQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqT0Rrek5qZ3dJaUJ2Wm1aelpYUTlJaTR6TXpVMElpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJemhFTXpFMlJDSWdiMlptYzJWMFBTSXVOVEF5TlNJdlBqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTTVNREk1TkVRaUlHOW1abk5sZEQwaUxqZ3pPVGdpTHo0OGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak9UQXlOVFF4SWlCdlptWnpaWFE5SWpFaUx6NDhMMnhwYm1WaGNrZHlZV1JwWlc1MFBqeHdiMng1WjI5dUlIQnZhVzUwY3owaU1UYzFMakVnTVRVekxqSWdNVEUzSURNd05pNDBJREl3Tmk0eElETXdOaTQwSWlCbWFXeHNQU0oxY213b0kxTldSMGxFWHpKZktTSWdZMnhoYzNNOUluTjBNU0l2UGdvZ0lDQWdQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0pUVmtkSlJGOHpYeUlnZVRJOUlpMDRNaTR5T0RRaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJaUI1TVQwaU1USXdMakkwSWlCbmNtRmthV1Z1ZEZSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SUMweE1UZ3VPVGdnTVRJd0xqVTBLU0lnZURJOUlqUTBOaTQxTlNJZ2VERTlJalEzT0M0NU15SStQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJek15TWtNMlJpSWdiMlptYzJWMFBTSXdJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpNeU1rTTJSaUlnYjJabWMyVjBQU0l1TWpReU55SXZQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU16TURKR056SWlJRzltWm5ObGREMGlMalExT1RraUx6NDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpNa0V6UVRkRklpQnZabVp6WlhROUlpNDNNVFUxSWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6RTFORUU1TXlJZ2IyWm1jMlYwUFNJdU9UZzVOaUl2UGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNeE16UkNPVFFpSUc5bVpuTmxkRDBpTVNJdlBqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK1BIQnZiSGxuYjI0Z2NHOXBiblJ6UFNJeU9EZ3VOQ0F4TlRNdU1pQXpNVEF1TnlBek1EWXVOQ0F6TlRndU1TQXpNRFl1TkNBek5UZ3VNU0F3SURNeE1pNDVJREFpSUdacGJHdzlJblZ5YkNnalUxWkhTVVJmTTE4cElpQmpiR0Z6Y3owaWMzUXlJaTgrQ2lBZ0lDQThiR2x1WldGeVIzSmhaR2xsYm5RZ2FXUTlJbE5XUjBsRVh6UmZJaUI1TWowaUxUTXlMalkyTXlJZ1ozSmhaR2xsYm5SVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlJSGt4UFNJdE16SXVOall6SWlCbmNtRmthV1Z1ZEZSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SUMweE1UZ3VPVGdnTVRJd0xqVTBLU0lnZURJOUlqTTNNaTQ0T0NJZ2VERTlJakk1TkM0d09DSStQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJelpHTXpjNFJDSWdiMlptYzJWMFBTSXdJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpOQk5ESTVNU0lnYjJabWMyVjBQU0l4SWk4K1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0OGNHOXNlV2R2YmlCd2IybHVkSE05SWpFM05TNHhJREUxTXk0eUlESXdOaTR4SURNd05pNDBJREkxTXk0NUlERTFNeTR5SURJd09TNDBJREFnTWpBNUxqUWdNQ0lnWm1sc2JEMGlkWEpzS0NOVFZrZEpSRjgwWHlraUlHTnNZWE56UFNKemRETWlMejRLSUNBZ0lEeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGlVMVpIU1VSZk5WOGlJSGt5UFNJdE16SXVOall6SWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSWdlVEU5SWkwek1pNDJOak1pSUdkeVlXUnBaVzUwVkhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVNBd0lEQWdMVEVnTFRFeE9DNDVPQ0F4TWpBdU5UUXBJaUI0TWowaU16STFMakE0SWlCNE1UMGlORE14TGpnNElqNDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpNak16UkRkRUlpQnZabVp6WlhROUlqQWlMejQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqTWprelJEZEVJaUJ2Wm1aelpYUTlJaTR5TkRrMUlpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJek5CTTBNNE1DSWdiMlptYzJWMFBTSXVOVFEwTmlJdlBqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTTFNVE5DT0RRaUlHOW1abk5sZEQwaUxqZzJNVFlpTHo0OGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak5VUXpRVGcySWlCdlptWnpaWFE5SWpFaUx6NDhMMnhwYm1WaGNrZHlZV1JwWlc1MFBqeHdiMng1WjI5dUlIQnZhVzUwY3owaU1qVXpMamtnTVRVekxqSWdNakEyTGpFZ016QTJMalFnTXpFd0xqY2dNekEyTGpRZ01qZzRMalFnTVRVekxqSWdNekV5TGprZ01DQXlNRGt1TkNBd0lpQm1hV3hzUFNKMWNtd29JMU5XUjBsRVh6VmZLU0lnWTJ4aGMzTTlJbk4wTkNJdlBqeHdiMng1WjI5dUlIQnZhVzUwY3owaU1URTJMakVnTUNBMU5TNDNJREFnTlRVdU55QTVOQzQ0SURnNUxqa2dNVFV6TGpJZ05UVXVOeUF5TVRFdU5pQTFOUzQzSURNd05pNDBJREV4TnlBek1EWXVOQ0E1TlM0eUlERTFNeTR5SWlCbWFXeHNQU0lqWVdZeU1ESTBJaUJqYkdGemN6MGljM1ExSWk4K0NpQWdJQ0E4YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SWxOV1IwbEVYelpmSWlCNU1qMGlORE11T1RNM0lpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0lnZVRFOUlqUXpMamt6TnlJZ1ozSmhaR2xsYm5SVWNtRnVjMlp2Y20wOUltMWhkSEpwZUNneElEQWdNQ0F0TVNBdE1URTRMams0SURFeU1DNDFOQ2tpSUhneVBTSXlNekl1TmpjaUlIZ3hQU0l6TWprdU1URWlQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU00T1RNMk9EQWlJRzltWm5ObGREMGlNQ0l2UGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNNE9UTTJPREFpSUc5bVpuTmxkRDBpTGpNek5UUWlMejQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqT0VRek1UWkVJaUJ2Wm1aelpYUTlJaTQxTURJMUlpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJemt3TWprMFJDSWdiMlptYzJWMFBTSXVPRE01T0NJdlBqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTTVNREkxTkRFaUlHOW1abk5sZEQwaU1TSXZQand2YkdsdVpXRnlSM0poWkdsbGJuUStQSEJ2YkhsbmIyNGdjRzlwYm5SelBTSXhOelV1TVNBeE5UTXVNaUF5TURrdU5DQXdJREV4Tmk0eElEQWlJR1pwYkd3OUluVnliQ2dqVTFaSFNVUmZObDhwSWlCamJHRnpjejBpYzNRMklpOCtQSEJ2YkhsbmIyNGdjRzlwYm5SelBTSTFOUzQzSURrMExqZ2dOVFV1TnlBd0lEQWdNQ0lnWm1sc2JEMGlJemswTVdJeFpTSWdZMnhoYzNNOUluTjBOeUl2UGp4d2IyeDVaMjl1SUhCdmFXNTBjejBpTlRVdU55QXlNVEV1TmlBNE9TNDVJREUxTXk0eUlEVTFMamNnT1RRdU9DSWdabWxzYkQwaUkySXhNamN6T1NJZ1kyeGhjM005SW5OME9DSXZQanh3YjJ4NVoyOXVJSEJ2YVc1MGN6MGlOVFV1TnlBeU1URXVOaUF3SURNd05pNDBJRFUxTGpjZ016QTJMalFpSUdacGJHdzlJaU01TkRGaU1XVWlJR05zWVhOelBTSnpkRGNpTHo0OGNHOXNlV2R2YmlCd2IybHVkSE05SWpVMUxqY2dPVFF1T0NBd0lEQWdNQ0F6TURZdU5DQTFOUzQzSURJeE1TNDJJaUJtYVd4c1BTSWpPVFV5TkRNeUlpQmpiR0Z6Y3owaWMzUTVJaTgrUEhCdmJIbG5iMjRnY0c5cGJuUnpQU0l4TVRZdU1TQXdJRGsxTGpJZ01UVXpMaklnTVRFM0lETXdOaTQwSURFM05TNHhJREUxTXk0eUlpQm1hV3hzUFNJalpEUXlNREkzSWlCamJHRnpjejBpYzNReE1DSXZQZ29nSUNBZ1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSlRWa2RKUkY4M1h5SWdlVEk5SWkweE9EWXVNRFlpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElpQjVNVDBpTVRJd0xqUTBJaUJuY21Ga2FXVnVkRlJ5WVc1elptOXliVDBpYldGMGNtbDRLREVnTUNBd0lDMHhJQzB4TVRndU9UZ2dNVEl3TGpVMEtTSWdlREk5SWpjME9DNDVOaUlnZURFOUlqYzBPQzQ1TmlJK1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6azBRa1UxTlNJZ2IyWm1jMlYwUFNJd0lpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJemt6UWtRMU9DSWdiMlptYzJWMFBTSXVNRFEwTXpRd0lpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJemhDUWtNMlFTSWdiMlptYzJWMFBTSXVNemc1TVNJdlBqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTTROa0pETnpVaUlHOW1abk5sZEQwaUxqY3hORGtpTHo0OGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak9EUkNRemM1SWlCdlptWnpaWFE5SWpFaUx6NDhMMnhwYm1WaGNrZHlZV1JwWlc1MFBqeHdZWFJvQ2lBZ0lDQWdJR1E5SW0wMk5ERXVOaUF5TlRrdU5tTXhMamN0TWpVdU5DQXhNQzAxTkM0MklERTRMamd0T0RVdU5pQXhMalF0TlNBeUxqZ3RNVEFnTkM0eUxURTFMakV0TVM0MExUVXVOUzB5TGpndE1UQXVPUzAwTGpJdE1UWXVNaTA0TGpndE16TXVNeTB4TnkwMk5DNDNMVEU0TGpndE9USXRNUzQwTFRJeExqSWdNUzQwTFRNM0lEZ3VPUzAxTUM0MmFDMDBOUzQ1WXkwM0xqVWdNVGd1TXkweE1DNHpJREk1TGpFdE9DNDVJRFV3TGpNZ01TNDNJREkzTGpNZ01UQWdOVGd1TnlBeE9DNDRJRGt5SURFeklEUTVMak1nTWpnZ01UQTJMaklnTWpNdU1pQXhOalF1TW1neE1pNDVZeTAzTGpZdE1USXVPQzB4TUM0MExUSTNMak10T1MwME4zb2lDaUFnSUNBZ0lHTnNZWE56UFNKemRERXhJZ29nSUNBZ0lDQm1hV3hzUFNKMWNtd29JMU5XUjBsRVh6ZGZLU0l2UGdvZ0lDQWdQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0pUVmtkSlJGODRYeUlnZVRJOUlpMHhPRFF1TkRVaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJaUI1TVQwaU1URTNMakk1SWlCbmNtRmthV1Z1ZEZSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SUMweE1UZ3VPVGdnTVRJd0xqVTBLU0lnZURJOUlqY3pNeTQwT1NJZ2VERTlJalkxTXk0M05pSStQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJekE0UVRJMFFpSWdiMlptYzJWMFBTSXdJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpCQlFURTBSU0lnYjJabWMyVjBQU0l1TVRZM09DSXZQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU13UWpsRk5UY2lJRzltWm5ObGREMGlMalF3TkRjaUx6NDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpNRGs1UVRZM0lpQnZabVp6WlhROUlpNDJPREkzSWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6QTBPVFEzUkNJZ2IyWm1jMlYwUFNJdU9UZzVPQ0l2UGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNd05Ea3pOMFVpSUc5bVpuTmxkRDBpTVNJdlBqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK1BIQmhkR2dnWkQwaWJUWXhOQzQxSURFME1pNHpZeTA0TGpndE16TXVNeTB4TnkwMk5DNDNMVEU0TGpndE9USXRNUzQwTFRJeExqSWdNUzQwTFRNeUlEZ3VPUzAxTUM0emFDMHpOUzQwWXpVdU55QTFNeTQ1TFRNdU9DQXhNRFl1TnkweE15NDJJREUyTmk0NExUVXVOeUF6TlMweE1TNDNJRGN4TGpNdE1UTXVNaUF4TURBdU5pMHhMakVnTWpFdU1TQXdMalFnTXpJdU9DQXhMamdnTXpsb09UTXVOV00wTGpndE5UY3VPUzB4TUM0ekxURXhOQzQ0TFRJekxqSXRNVFkwTGpGNklpQmpiR0Z6Y3owaWMzUXhNaUlnWm1sc2JEMGlkWEpzS0NOVFZrZEpSRjg0WHlraUx6NDhjR0YwYUNCamJHRnpjejBpYzNReE15SWdabWxzYkQwaUl6RmpPV0UwT0NJZ1pEMGliVFkyTkM0MklERTFPQzQ1WXkweExqUWdOUzR4TFRJdU9DQXhNQzR4TFRRdU1pQXhOUzR4TFRndU9DQXpNUzB4TnlBMk1DNHlMVEU0TGpnZ09EVXVOaTB4TGpRZ01Ua3VOeUF4TGpRZ016UXVNaUE1SURRMkxqbG9Nek5qTkM0eUxUVXhMamd0Tnk0eUxURXdNaTR6TFRFNUxURTBOeTQyZWlJdlBnb2dJQ0FnUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKVFZrZEpSRjg1WHlJZ2VUSTlJaTB4T0RVdU9UWWlJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWlCNU1UMGlNVEl3TGpVMElpQm5jbUZrYVdWdWRGUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElDMHhNVGd1T1RnZ01USXdMalUwS1NJZ2VESTlJamd4TWk0NE15SWdlREU5SWpneE1pNDRNeUkrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpZNVFUQTJNQ0lnYjJabWMyVjBQU0l3SWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6WXpPVVExUXlJZ2IyWm1jMlYwUFNJdU1ETTVPRGsxSWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6UkRPVFEwUmlJZ2IyWm1jMlYwUFNJdU1qRTVNaUl2UGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNek56aEZORGNpSUc5bVpuTmxkRDBpTGpReE9EUWlMejQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqTWprNFFqUTBJaUJ2Wm1aelpYUTlJaTQyTlRFMUlpOCtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJekl6T0VFME15SWdiMlptYzJWMFBTSXhJaTgrUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDQ4Y0dGMGFDQmtQU0p0Tmpnd0xqVWdNR014TUM0M0lEVTFMak10TWk0MUlERXhNQzQwTFRFMUxqa2dNVFU0TGprZ01URXVOeUEwTlM0eklESXpMaklnT1RVdU9DQXhPQzQ1SURFME55NDJhRE01TGpaMkxUTXdOaTQxYUMwME1pNDJlaUlnWTJ4aGMzTTlJbk4wTVRRaUlHWnBiR3c5SW5WeWJDZ2pVMVpIU1VSZk9WOHBJaTgrQ2lBZ0lDQThiR2x1WldGeVIzSmhaR2xsYm5RZ2FXUTlJbE5XUjBsRVh6RXdYeUlnZVRJOUlpMHhPRFV1T0RZaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJaUI1TVQwaU1USXdMalUwSWlCbmNtRmthV1Z1ZEZSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RFZ01DQXdJQzB4SUMweE1UZ3VPVGdnTVRJd0xqVTBLU0lnZURJOUlqWTFNaTQwTlNJZ2VERTlJalkxTWk0ME5TSStQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJekExUWpWRVF5SWdiMlptYzJWMFBTSXdJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpBMFFqQkVOeUlnYjJabWMyVjBQU0l1TWpFNU55SXZQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU13TlVFMFF6a2lJRzltWm5ObGREMGlMalV6TnpFaUx6NDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpNRFU1TVVJMElpQnZabVp6WlhROUlpNDVNVEl5SWk4K1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6QTFPRU5CUlNJZ2IyWm1jMlYwUFNJeElpOCtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENDhjR0YwYUNCa1BTSnROVFF5TGpNZ01qWTNMalJqTVM0MUxUSTVMalFnTnk0MUxUWTFMallnTVRNdU1pMHhNREF1TmlBNUxqZ3ROakF1TVNBeE9TNHpMVEV4TWk0NElERXpMall0TVRZMkxqaG9MVGN3TGpoakxURXVOQ0F4TVM0MExUSXVPU0F4T1M0eUxURXVPQ0EwTVM0NElERXVOU0F6TVM0MklEY3VOU0EzTUM0MUlERXpMaklnTVRBNExqSWdPQzQwSURVMUxqUWdNVFl1TmlBeE1EZ3VPQ0F4TlM0eElERTFOaTQwYURFNUxqSmpMVEV1TXkwMkxqSXRNaTQ0TFRFM0xqa3RNUzQzTFRNNWVpSWdZMnhoYzNNOUluTjBNVFVpSUdacGJHdzlJblZ5YkNnalUxWkhTVVJmTVRCZktTSXZQanh3YjJ4NVoyOXVJSEJ2YVc1MGN6MGlNemMxTGpjZ01UVXpMaklnTXpVNExqRWdNQ0F6TlRndU1TQXpNRFl1TkNJZ1ptbHNiRDBpSXpKaE16ZzROaUlnWTJ4aGMzTTlJbk4wTVRZaUx6NEtJQ0FnSUR4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaVUxWkhTVVJmTVRGZklpQjVNajBpTnpjdU1UTTJJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ2VURTlJaTAwTGpNeU9ERWlJR2R5WVdScFpXNTBWSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NU0F3SURBZ0xURWdMVEV4T0M0NU9DQXhNakF1TlRRcElpQjRNajBpTnprMkxqY3hJaUI0TVQwaU56VXhMakExSWo0OGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak5qSkNNVFpGSWlCdlptWnpaWFE5SWpBaUx6NDhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpPRGRDT1RVM0lpQnZabVp6WlhROUlqRWlMejQ4TDJ4cGJtVmhja2R5WVdScFpXNTBQanh3WVhSb0lHUTlJbTAyTkRFdU5pQTFNQzQyWXpFdU55QXlOeTR6SURFd0lEVTRMamNnTVRndU9DQTVNaUF4TGpRZ05TNHpJREl1T0NBeE1DNDNJRFF1TWlBeE5pNHlJREV6TGpVdE5EZ3VOQ0F5Tmk0MkxURXdNeTQxSURFMUxqa3RNVFU0TGpob0xUTXdZeTAzTGpVZ01UTXVOaTB4TUM0eklESTVMalF0T0M0NUlEVXdMalo2SWlCamJHRnpjejBpYzNReE55SWdabWxzYkQwaWRYSnNLQ05UVmtkSlJGOHhNVjhwSWk4K0NpQWdJQ0E4YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SWxOV1IwbEVYekV5WHlJZ2VUSTlJaTB4T0RrdU1qZ2lJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWlCNU1UMGlNVEV6TGpjeElpQm5jbUZrYVdWdWRGUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERWdNQ0F3SUMweElDMHhNVGd1T1RnZ01USXdMalUwS1NJZ2VESTlJall6TVM0MU9TSWdlREU5SWpVMU1DNDBJajQ4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqTURZNVFVUTBJaUJ2Wm1aelpYUTlJakFpTHo0OGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak16QkJNRU5GSWlCdlptWnpaWFE5SWk0ek5USTFJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpWQ1FqQkRNQ0lnYjJabWMyVjBQU0l4SWk4K1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0OGNHRjBhQ0JrUFNKdE5UQTVMamdnTVRVd1l5MDFMamN0TXpjdU55MHhNUzQzTFRjMkxqWXRNVE11TWkweE1EZ3VNaTB4TGpFdE1qSXVOeUF3TGpRdE16QXVOQ0F4TGpndE5ERXVPR2d0TkRFdU5XTXhMalVnTkRBdU1TMHhMalVnT0RVdU15MDNJREUyTUM0NExUTXVNU0EwTXk0MUxUZ2dNVEV3TGpVdE55QXhORFV1TjJnNE1pNHhZekV1TkMwME55NDNMVFl1T0MweE1ERXVNUzB4TlM0eUxURTFOaTQxZWlJZ1kyeGhjM005SW5OME1UZ2lJR1pwYkd3OUluVnliQ2dqVTFaSFNVUmZNVEpmS1NJdlBnb2dJQ0FnUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKVFZrZEpSRjh4TTE4aUlIa3lQU0l0TVRnMUxqZzJJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ2VURTlJakV5TUM0MU5DSWdaM0poWkdsbGJuUlVjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3hJREFnTUNBdE1TQXRNVEU0TGprNElERXlNQzQxTkNraUlIZ3lQU0kxTURVdU16TWlJSGd4UFNJMU1EVXVNek1pUGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNeFJUUTFPRVVpSUc5bVpuTmxkRDBpTUNJdlBqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTXhSalJHT1RZaUlHOW1abk5sZEQwaUxqSTBNVEVpTHo0OGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak1rSTJRVUZDSWlCdlptWnpaWFE5SWk0M01qa3lJaTgrUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSXpNek4wSkNPU0lnYjJabWMyVjBQU0l4SWk4K1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0OGNHOXNlV2R2YmlCd2IybHVkSE05SWpNMU9DNHhJRE13Tmk0MElEUXhOQzQySURNd05pNDBJRFF4TkM0MklEQWdNelU0TGpFZ01DQXpOelV1TnlBeE5UTXVNaUlnWm1sc2JEMGlkWEpzS0NOVFZrZEpSRjh4TTE4cElpQmpiR0Z6Y3owaWMzUXhPU0l2UGdvZ0lDQWdQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0pUVmtkSlJGOHhORjhpSUhreVBTSXhNakF1TlRRaUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJaUI1TVQwaUxURTROUzQ0TmlJZ1ozSmhaR2xsYm5SVWNtRnVjMlp2Y20wOUltMWhkSEpwZUNneElEQWdNQ0F0TVNBdE1URTRMams0SURFeU1DNDFOQ2tpSUhneVBTSTFOVFF1T1RJaUlIZ3hQU0kxTlRRdU9USWlQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU16UmpsQlF6a2lJRzltWm5ObGREMGlNQ0l2UGp4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNeU1EWXlRVElpSUc5bVpuTmxkRDBpTVNJdlBqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK1BIQmhkR2dnWkQwaWJUUTBPUzQ1SURFMk1DNDRZelV1TlMwM05TNDFJRGd1TlMweE1qQXVOaUEzTFRFMk1DNDRhQzAwTWk0eWJDMHdMakVnTXpBMkxqUm9Namd1TTJNdE1TMHpOUzR4SURNdU9DMHhNREl1TVNBM0xURTBOUzQyZWlJZ1kyeGhjM005SW5OME1qQWlJR1pwYkd3OUluVnliQ2dqVTFaSFNVUmZNVFJmS1NJdlBqd3ZaejRLUEM5emRtYytDZz09KTt6LWluZGV4OjEwMDAwfTo6bmctZGVlcCBib2R5Lm1vZGFsIC5iY2ktY29udGVudC1jb250YWluZXJ7LXdlYmtpdC1hbmltYXRpb246LjNzIGZvcndhcmRzIGJvZHlfYmx1cjthbmltYXRpb246LjNzIGZvcndhcmRzIGJvZHlfYmx1cn06Om5nLWRlZXAgYm9keS5tb2RhbC1jbG9zZWQgLmJjaS1jb250ZW50LWNvbnRhaW5lcnstd2Via2l0LWFuaW1hdGlvbjouM3MgYm9keV91bmJsdXI7YW5pbWF0aW9uOi4zcyBib2R5X3VuYmx1cn1ALXdlYmtpdC1rZXlmcmFtZXMgYm9keV9ibHVye2Zyb217LXdlYmtpdC1maWx0ZXI6Ymx1ciguM3B4KTtmaWx0ZXI6Ymx1ciguM3B4KX10b3std2Via2l0LWZpbHRlcjpibHVyKDNweCk7ZmlsdGVyOmJsdXIoM3B4KX19QGtleWZyYW1lcyBib2R5X2JsdXJ7ZnJvbXstd2Via2l0LWZpbHRlcjpibHVyKC4zcHgpO2ZpbHRlcjpibHVyKC4zcHgpfXRvey13ZWJraXQtZmlsdGVyOmJsdXIoM3B4KTtmaWx0ZXI6Ymx1cigzcHgpfX1ALXdlYmtpdC1rZXlmcmFtZXMgYm9keV91bmJsdXJ7ZnJvbXstd2Via2l0LWZpbHRlcjpibHVyKDNweCk7ZmlsdGVyOmJsdXIoM3B4KX10b3std2Via2l0LWZpbHRlcjpibHVyKC4zcHgpO2ZpbHRlcjpibHVyKC4zcHgpfX1Aa2V5ZnJhbWVzIGJvZHlfdW5ibHVye2Zyb217LXdlYmtpdC1maWx0ZXI6Ymx1cigzcHgpO2ZpbHRlcjpibHVyKDNweCl9dG97LXdlYmtpdC1maWx0ZXI6Ymx1ciguM3B4KTtmaWx0ZXI6Ymx1ciguM3B4KX19YF1cbn0pXG5leHBvcnQgY2xhc3MgQmNpQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1mb290ZXInLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBic2MtZm9vdGVyIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIEJjaUZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIG5vaW5zcGVjdGlvbiBUeXBlU2NyaXB0UHJlZmVyU2hvcnRJbXBvcnQgZHVlIHRvIGN5Y2xpYyBkZXBlbmRlbmN5XG5pbXBvcnQgeyBTaWRlYmFyTmF2SXRlbSB9IGZyb20gJy4vbGF5b3V0L2luZGV4JztcbmltcG9ydCB7IEJyZWFkY3J1bWIgfSBmcm9tICcuLi9zaGFyZWQvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi9icmVhZGNydW1iLm1vZGVsJztcblxuLyoqXG4gKiBQcm92aWRlcyBsaXN0IG9mIGJyZWFkY3J1bWJzIGZvciB0aGUgY3VycmVudGx5IGFjdGl2ZSByb3V0ZS5cbiAqIEhPVyBUTyBVU0U6XG4gKiBJbXBvcnQgdGhpcyBtb2R1bGUgaW4gYXBwLm1vZHVsZSB3aXRoIFwiQnJlYWRjcnVtYnNNb2R1bGVcIi5cbiAqIFBvc2l0aW9uIGl0IG9uIHRoZSBwYWdlIHVzaW5nIHRoZSBodG1sIHRhZyA8YmNpLWJyZWFkY3J1bWJzPi5cbiAqIERlZmluZSBjdXN0b20gdGl0bGVzIGFuZCB0ZW1wb3JhcnkgdGl0bGVzLCB3aGljaCB3aWxsIGJlIGNsZWFyZWQgdXBvbiBuYXZpZ2F0aW9uLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1ic1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBBbHdheXMgc2hvdyBcImhvbWVcIi1yb3V0ZSBpbiBicmVhZGNydW1icyAoZGVmYXVsdDogZmFsc2UpXG4gICAqL1xuICBwdWJsaWMgc3RpY2t5Um9vdEJyZWFkY3J1bWIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBicmVhZGNydW1icyQ6IEJlaGF2aW9yU3ViamVjdDxCcmVhZGNydW1iW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxCcmVhZGNydW1iW10+KFtdKTtcbiAgLyoqXG4gICAqIE9ic2VydmFibGUgcHJvdmlkaW5nIHRoZSBsaXN0IG9mIEJyZWFkY3J1bWIgKGN1cnJlbnQgYXMgd2VsbCBhcyBmdXR1cmUgbGlzdHMpXG4gICAqL1xuICBwdWJsaWMgYnJlYWRjcnVtYnM6IE9ic2VydmFibGU8QnJlYWRjcnVtYltdPiA9IHRoaXMuYnJlYWRjcnVtYnMkLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIHBhdGhUb0JyZWFkY3J1bWJNYXAgPSBuZXcgTWFwPHN0cmluZywgQnJlYWRjcnVtYj4oKTtcbiAgcHJpdmF0ZSB0ZW1wb3JhcnlQYXRoVG9CcmVhZGNydW1iTWFwID0gbmV3IE1hcDxzdHJpbmcsIEJyZWFkY3J1bWI+KCk7XG5cbiAgcHJpdmF0ZSBuZ1Vuc3Vic2NyaWJlOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7XG5cblxuICAgIC8vIHVwZGF0ZSBicmVhZGNydW1icyBhZnRlciBuYXZnaWF0aW9uXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5uZ1Vuc3Vic2NyaWJlKSxcbiAgICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcblxuICAgIC8vIGNsZWFuIHVwIHRlbXBvcmFyeSBwYXRoLXRvLXRpdGxlIG1hcHBpbmdzIHVwb24gc3RhcnQgb2YgbmF2aWdhdGlvblxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMubmdVbnN1YnNjcmliZSksXG4gICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpLFxuICAgICkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IG9sZFVybCA9IHRoaXMubm9ybWFsaXplUGF0aCgoZXZlbnQgYXMgTmF2aWdhdGlvblN0YXJ0KS51cmwpO1xuICAgICAgQXJyYXkuZnJvbSh0aGlzLnRlbXBvcmFyeVBhdGhUb0JyZWFkY3J1bWJNYXAua2V5cygpLCAocGF0aCkgPT4ge1xuICAgICAgICBpZiAoIW9sZFVybC5zdGFydHNXaXRoKHBhdGgpKSB7XG4gICAgICAgICAgdGhpcy50ZW1wb3JhcnlQYXRoVG9CcmVhZGNydW1iTWFwLmRlbGV0ZShwYXRoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm5nVW5zdWJzY3JpYmUubmV4dCgpO1xuICAgIHRoaXMubmdVbnN1YnNjcmliZS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHVibGljIHNldE5hdmlnYXRpb25JdGVtcyhuYXZJdGVtczogU2lkZWJhck5hdkl0ZW1bXSkge1xuICAgIHRoaXMucHJvY2Vzc05hdmlnYXRpb25JdGVtcyhuYXZJdGVtcyk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRpdGxlIGZvciBhIHBhdGgsIGxpa2Ugc2V0VGl0bGUoJ2EvYi9jJywgJ0MnKTtcbiAgICogQHBhcmFtIHBhdGggcmVsYXRpdmUgcGF0aFxuICAgKiBAcGFyYW0gdGl0bGUgYnJlYWRjcnVtYiB0aXRsZSBmb3IgdGhlIGdpdmVuIHBhdGhcbiAgICovXG4gIHB1YmxpYyBzZXRUaXRsZShwYXRoOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldEJyZWFkY3J1bWIodGhpcy5ub3JtYWxpemVQYXRoKHBhdGgpLCB7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB1cmw6IHBhdGgsXG4gICAgfSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGVtcG9yYXJ5IGJyZWFjcnVtYiBmb3IgYSBwYXRoLCBsaWtlICdDJyBmb3IgJ2EvYi9jJ1xuICAgKiBAcGFyYW0gcGF0aCByZWxhdGl2ZSBwYXRoXG4gICAqIEBwYXJhbSB0aXRsZSBicmVhZGNydW1iIHRpdGxlIGZvciB0aGUgZ2l2ZW4gcGF0aFxuICAgKi9cbiAgcHVibGljIHNldFRlbXBvcmFyeVRpdGxlKHBhdGg6IHN0cmluZywgdGl0bGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudGVtcG9yYXJ5UGF0aFRvQnJlYWRjcnVtYk1hcC5zZXQodGhpcy5ub3JtYWxpemVQYXRoKHBhdGgpLCB7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB1cmw6IHBhdGgsXG4gICAgfSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGVtcG9yYXJ5IGJyZWFjcnVtYiBmb3IgYSByb3V0ZSdzIHVybFxuICAgKiBAcGFyYW0gcm91dGUgdGhlIG1hdGNoZWQgcm91dGVcbiAgICogQHBhcmFtIHRpdGxlIHRoZSBkZXNpcmVkIHRpdGxlXG4gICAqL1xuICBwdWJsaWMgc2V0VGVtcG9yYXJ5VGl0bGVGb3JSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgdGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMuc2V0VGVtcG9yYXJ5VGl0bGUodGhpcy5yb3V0ZVRvUGF0aEZyb21Sb290KHJvdXRlKSwgdGl0bGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRlbXBvcmFyeSBicmVhZGNydW1iIGZvciBhIHJvdXRlIHN1cGVycGF0aCBjb250YWluaW5nIGFsbCByZXF1aXJlZCBzZWdtZW50cy5cbiAgICogRS5nLiBhIGJyZWFkY3J1bWIgd2l0aCB0aGUgdXJsIFsuLi5dL2EvYiB3aWxsIGJlIGNyZWF0ZWQgZm9yIGEgcm91dGUgcGF0aCAvOkEvOkIvOkMgYW5kIHRoZSByZXF1aXJlZCBzZWdtZW50cyBbJzpBJywgJzpCJ10gb3IgWyc6QiddXG4gICAqIEBwYXJhbSByb3V0ZSB0aGUgbWF0Y2hlZCByb3V0ZVxuICAgKiBAcGFyYW0gcmVxdWlyZWRQYXRoU2VnbWVudHMgdGhlIHJlcXVpcmVkIHBhdGggc2VnbWVudHMsIHBhcmFtZXRlcnMgcHJlZml4ZWQgd2l0aCAnOidcbiAgICogQHBhcmFtIHRpdGxlIHRoZSBkZXNpcmVkIHRpdGxlXG4gICAqL1xuICBwdWJsaWMgc2V0VGVtcG9yYXJ5VGl0bGVGb3JQYXJ0aWFsUm91dGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHJlcXVpcmVkUGF0aFNlZ21lbnRzOiBzdHJpbmdbXSwgdGl0bGU6IHN0cmluZykge1xuICAgIGNvbnN0IG1pc3NpbmdQYXRoU2VnbWVudHMgPSBuZXcgU2V0KHJlcXVpcmVkUGF0aFNlZ21lbnRzKTtcbiAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5yb3V0ZVRvUGF0aEZyb21Sb290KHJvdXRlLnBhcmVudCk7XG4gICAgY29uc3QgcGF0aFNlZ21lbnRzID0gdGhpcy5nZXRQYXRoU2VnbWVudHMocm91dGUpO1xuICAgIGNvbnN0IHJlbGF0aXZlVXJsU2VnbWVudHM6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoU2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhdGhTZWdtZW50ID0gcGF0aFNlZ21lbnRzW2ldLnBhdGg7XG4gICAgICBjb25zdCB1cmxTZWdtZW50ID0gcm91dGUudXJsW2ldLnBhdGg7XG4gICAgICBtaXNzaW5nUGF0aFNlZ21lbnRzLmRlbGV0ZShwYXRoU2VnbWVudCk7XG4gICAgICByZWxhdGl2ZVVybFNlZ21lbnRzLnB1c2godXJsU2VnbWVudCk7XG5cbiAgICAgIGlmIChtaXNzaW5nUGF0aFNlZ21lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1pc3NpbmdQYXRoU2VnbWVudHMuc2l6ZSA+IDApIHtcbiAgICAgIGNvbnNvbGUud2FybignUmVxdWlyZWQgcGF0aCBzZWdtZW50cyBtaXNzaW5nLCBubyBuZXcgYnJlYWRjcnVtYiBoYXMgYmVlbiBkZWZpbmVkOiAnICsgQXJyYXkuZnJvbShtaXNzaW5nUGF0aFNlZ21lbnRzKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRpdmVVcmwgPSByZWxhdGl2ZVVybFNlZ21lbnRzLmxlbmd0aCA+IDAgPyAnLycgKyByZWxhdGl2ZVVybFNlZ21lbnRzLmpvaW4oJy8nKSA6ICcnO1xuICAgIHRoaXMuc2V0VGVtcG9yYXJ5VGl0bGUoYmFzZVVybCArIHJlbGF0aXZlVXJsLCB0aXRsZSk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgVVJMIHN0cmluZyBmcm9tIHJvb3QgdG8gdGhlIGdpdmVuIHJvdXRlIChpbmNsdWRpbmcpLlxuICAgKiBAcGFyYW0gcm91dGUgbGFzdCByb3V0ZSBwYXJ0IG9mIHRoZSB1cmwuXG4gICAqIEByZXR1cm5zIFVSTCBmcm9tIHJvb3QgdG8gcm91dGUuXG4gICAqL1xuICBwdWJsaWMgcm91dGVUb1BhdGhGcm9tUm9vdChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcvJyArIHJvdXRlLnBhdGhGcm9tUm9vdC5tYXAoXG4gICAgICByID0+IHIudXJsLm1hcCh1cmxTZWdtZW50ID0+IHVybFNlZ21lbnQucGF0aCkuZmlsdGVyKHMgPT4gISFzLmxlbmd0aCkuam9pbignLycpXG4gICAgKS5maWx0ZXIocyA9PiAhIXMubGVuZ3RoKS5qb2luKCcvJyk7XG4gIH1cblxuICAvKipcbiAgICogUmVjb21wdXRlIGJyZWFkY3J1bWJzIGZvciBjdXJyZW50bHkgYWN0aXZhdGVkIHJvdXRlXG4gICAqL1xuICBwdWJsaWMgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLmJyZWFkY3J1bWJzJC5uZXh0KHRoaXMucGFyc2VBY3RpdmF0ZWRSb3V0ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGF0aFNlZ21lbnRzKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgaWYgKCFyb3V0ZS5yb3V0ZUNvbmZpZyB8fCAhcm91dGUucm91dGVDb25maWcucGF0aCkge1xuICAgICAgcmV0dXJuIHJvdXRlLnVybDtcbiAgICB9XG4gICAgY29uc3QgdXJsVHJlZSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKHJvdXRlLnJvdXRlQ29uZmlnLnBhdGgpO1xuICAgIGlmICh1cmxUcmVlLnJvb3QgJiYgdXJsVHJlZS5yb290LmNoaWxkcmVuICYmIHVybFRyZWUucm9vdC5jaGlsZHJlbi5wcmltYXJ5KSB7XG4gICAgICByZXR1cm4gdXJsVHJlZS5yb290LmNoaWxkcmVuLnByaW1hcnkuc2VnbWVudHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NOYXZpZ2F0aW9uSXRlbXMobmF2aWdhdGlvbkl0ZW1zOiBTaWRlYmFyTmF2SXRlbVtdKSB7XG4gICAgdGhpcy5mbGF0dGVuTmF2aWdhdGlvbkl0ZW1zKG5hdmlnYXRpb25JdGVtcykuZm9yRWFjaCgoe3VybCwgdGl0bGV9KSA9PiB0aGlzLnNldEJyZWFkY3J1bWIodXJsLCB7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgZmxhdHRlbk5hdmlnYXRpb25JdGVtcyhuYXZJdGVtczogU2lkZWJhck5hdkl0ZW1bXSk6IFNpZGViYXJOYXZJdGVtW10ge1xuICAgIHJldHVybiBuYXZJdGVtcy5tYXAobmF2SXRlbSA9PiB7XG4gICAgICBpZiAobmF2SXRlbS5pdGVtcyAmJiBuYXZJdGVtLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmxhdHRlbk5hdmlnYXRpb25JdGVtcyhuYXZJdGVtLml0ZW1zKS5jb25jYXQobmF2SXRlbSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW25hdkl0ZW1dO1xuICAgIH0pLnJlZHVjZSgocHJldiwgY3VyKSA9PiBwcmV2LmNvbmNhdChjdXIpKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VBY3RpdmF0ZWRSb3V0ZSgpOiBCcmVhZGNydW1iW10ge1xuICAgIGNvbnN0IGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iW10gPSBbXTtcbiAgICBjb25zdCBwYXRoU2VnbWVudHM6IHN0cmluZ1tdID0gW107XG5cbiAgICAvLyBnZXQgcGF0aCBzZWdtZW50c1xuICAgIGZvciAobGV0IHJvdXRlID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdDsgcm91dGU7IHJvdXRlID0gcm91dGUuZmlyc3RDaGlsZCkge1xuICAgICAgcGF0aFNlZ21lbnRzLnB1c2goLi4ucm91dGUudXJsLm1hcChzZWdtZW50ID0+IHNlZ21lbnQucGF0aCkpO1xuICAgIH1cblxuICAgIC8vIGFkZCBcIi9cIiAoXCJIb21lXCIpIHRvIGJyZWFkY3J1bWJzXG4gICAgaWYgKHRoaXMuc3RpY2t5Um9vdEJyZWFkY3J1bWIgfHwgcGF0aFNlZ21lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcGF0aFNlZ21lbnRzLnVuc2hpZnQoJycpO1xuICAgIH1cblxuICAgIC8vIGxvb2sgZm9yIGJyZWFkY3J1bWJzIG1hdGNoaW5nIHN1cGVycGF0aHMgb2YgdGhlIGN1cnJlbnQgcGF0aCBzdGFydGluZyBmcm9tIHRoZSByb290XG4gICAgY29uc3Qgc3VwZXJwYXRoU2VnbWVudHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHBhdGhTZWdtZW50IG9mIHBhdGhTZWdtZW50cykge1xuICAgICAgc3VwZXJwYXRoU2VnbWVudHMucHVzaChwYXRoU2VnbWVudCk7XG4gICAgICBjb25zdCBicmVhZGNydW1iRWxlbWVudDogQnJlYWRjcnVtYiA9IHRoaXMuZ2V0QnJlYWRjcnVtYih0aGlzLnRvUGF0aChzdXBlcnBhdGhTZWdtZW50cykpO1xuICAgICAgaWYgKCEhYnJlYWRjcnVtYkVsZW1lbnQpIHtcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaChicmVhZGNydW1iRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEhYnJlYWRjcnVtYnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBsYXN0QnJlYWRjcnVtYiA9IGJyZWFkY3J1bWJzW2JyZWFkY3J1bWJzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKGxhc3RCcmVhZGNydW1iLnVybCAmJiB0aGlzLm5vcm1hbGl6ZVBhdGgobGFzdEJyZWFkY3J1bWIudXJsKSA9PT0gdGhpcy50b1BhdGgocGF0aFNlZ21lbnRzKSkge1xuICAgICAgICAvLyBkbyBub3QgbGluayBicmVhZGNydW1iIGZvciBjdXJyZW50bHkgYWN0aXZhdGVkIHJvdXRlXG4gICAgICAgIGJyZWFkY3J1bWJzW2JyZWFkY3J1bWJzLmxlbmd0aCAtIDFdID0ge1xuICAgICAgICAgIC4uLmxhc3RCcmVhZGNydW1iLFxuICAgICAgICAgIHVybDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBicmVhZGNydW1icztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnJlYWRjcnVtYihwYXRoOiBzdHJpbmcpOiBCcmVhZGNydW1iIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy50ZW1wb3JhcnlQYXRoVG9CcmVhZGNydW1iTWFwLmdldChwYXRoKSB8fCB0aGlzLnBhdGhUb0JyZWFkY3J1bWJNYXAuZ2V0KHBhdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRCcmVhZGNydW1iKHBhdGg6IHN0cmluZywgYnJlYWRjcnVtYjogQnJlYWRjcnVtYik6IHZvaWQge1xuICAgIHRoaXMucGF0aFRvQnJlYWRjcnVtYk1hcC5zZXQodGhpcy5ub3JtYWxpemVQYXRoKHBhdGgpLCBicmVhZGNydW1iKTtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplUGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgICBpZiAocGF0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IHRlbXBQYXRoID0gcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoIDogJy8nICsgcGF0aDtcbiAgICByZXR1cm4gdGVtcFBhdGguZW5kc1dpdGgoJy8nKSA/IHRlbXBQYXRoIDogdGVtcFBhdGggKyAnLyc7XG4gIH1cblxuICBwcml2YXRlIHRvUGF0aChwYXRoU2VnbWVudHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplUGF0aChwYXRoU2VnbWVudHMuam9pbignLycpKTtcbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCcmVhZGNydW1ic1NlcnZpY2UgfSBmcm9tICcuLi8uLi9icmVhZGNydW1icy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxkaXYgY2xhc3M9XCJiY2ktaGVhZGVyLWNvbnRhaW5lclwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJoZWFkZXI/Lmxlbmd0aDtcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlXCI+e3toZWFkZXJ9fTwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250ZW50XCI+XG4gICAgPGJjaS1icmVhZGNydW1icyBmeEhpZGUubHQtbWQ9XCJ0cnVlXCIgcm9sZT1cIm5hdmlnYXRpb25cIiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYnNcIj5cbiAgICAgIDxiY2ktYnJlYWRjcnVtYiAqbmdGb3I9XCJsZXQgYnJlYWRjcnVtYiBvZiBicmVhZGNydW1iU2VydmljZS5icmVhZGNydW1icyB8IGFzeW5jOyBsZXQgbGFzdCA9IGxhc3RcIlxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY3VycmVudF09XCJsYXN0ID8gJ3BhZ2UnIDogZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJicmVhZGNydW1iLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbdXJsXT1cImJyZWFkY3J1bWIudXJsXCI+XG4gICAgICA8L2JjaS1icmVhZGNydW1iPlxuICAgIDwvYmNpLWJyZWFkY3J1bWJzPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIDxhIGNsYXNzPVwiaGVhZGVyLWxvZ29cIiAoY2xpY2spPVwib25Mb2dvQ2xpY2tlZCgpXCI+XG4gICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWcvYm9zY2gtbG9nby1vbmx5LnN2Z1wiIGFsdD1cIkJvc2NoIEludmVudGVkIEZvciBMaWZlIExvZ29cIj5cbiAgPC9hPlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8uc3VwZXJncmFwaGlje3otaW5kZXg6MTB9LmJjaS1oZWFkZXItY29udGFpbmVye3BhZGRpbmc6MCAzMnB4O2hlaWdodDo2NHB4O2JvcmRlci13aWR0aDowIDAgMXB4O2JvcmRlci1jb2xvcjojZGZkZmUwO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjB9LmJjaS1oZWFkZXItY29udGFpbmVyIC5oZWFkZXItdGl0bGV7bWFyZ2luLXJpZ2h0OjMycHg7Zm9udC1mYW1pbHk6Qm9zY2gtU2Fucztmb250LXdlaWdodDozMDA7Zm9udC1zaXplOjI4cHh9LmJjaS1oZWFkZXItY29udGFpbmVyIC5oZWFkZXItY29udGVudHttYXJnaW4tcmlnaHQ6MzJweH0uYmNpLWhlYWRlci1jb250YWluZXIgLmhlYWRlci1sb2dve21hcmdpbi1sZWZ0OmF1dG87aGVpZ2h0OjEwMCU7d2lkdGg6MTQwcHh9LmJjaS1oZWFkZXItY29udGFpbmVyIC5oZWFkZXItbG9nbyBpbWd7aGVpZ2h0OjEwMCU7d2lkdGg6MTQwcHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgQmNpSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyID0gJyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBsb2dvUm91dGUgPSAnLyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHVibGljIGJyZWFkY3J1bWJTZXJ2aWNlOiBCcmVhZGNydW1ic1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25Mb2dvQ2xpY2tlZCgpIHtcbiAgICAvLyBUT0RPOiBDdXJzb3I6cG9pbnRlciB3aGVuIGxvZ29MaW5rIG9yIGxvZ29Sb3V0ZSBpcyBzZXRcbiAgICBpZiAodGhpcy5sb2dvUm91dGUpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmxvZ29Sb3V0ZV0pO1xuICAgIH1cbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmNpTG9hZGVyU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBsb2FkZXJTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHVibGljIGxvYWRlclN0YXRlID0gPE9ic2VydmFibGU8Ym9vbGVhbj4+IHRoaXMubG9hZGVyU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBsb2FkZXJRdWV1ZUVsZW1lbnRzOiBBcnJheTxMb2FkZXJRdWV1ZUVsZW1lbnQ+ID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBzaG93UHJvZ3Jlc3NCYXIoKTogTG9hZGVyUXVldWVFbGVtZW50IHtcbiAgICBjb25zdCBlbGVtZW50OiBMb2FkZXJRdWV1ZUVsZW1lbnQgPSB7XG4gICAgICBpZDogRGF0ZS5ub3coKVxuICAgIH07XG4gICAgdGhpcy5sb2FkZXJRdWV1ZUVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgdGhpcy5sb2FkZXJTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBoaWRlUHJvZ3Jlc3NCYXIoZWxlbWVudDogTG9hZGVyUXVldWVFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxvYWRlclF1ZXVlRWxlbWVudHMuZmluZEluZGV4KGVsID0+IGVsZW1lbnQuaWQgPT09IGVsLmlkKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5sb2FkZXJRdWV1ZUVsZW1lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxvYWRlclF1ZXVlRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmxvYWRlclN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRlclF1ZXVlRWxlbWVudCB7XG4gIGlkOiBudW1iZXI7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJjaUxvYWRlclNlcnZpY2UgfSBmcm9tICcuL2JjaS1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1sb2FkZXInLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48ZGl2IGNsYXNzPVwibG9hZGVyLWJhY2tncm91bmQtY29udGFpbmVyXCIgKm5nSWY9XCJzaG93XCI+XG4gIDxkaXYgY2xhc3M9XCJsb2FkZXItYmFja2Ryb3BcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImxvYWRlci1vdmVybGF5XCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxuICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1nL2xvYWRpbmcuZ2lmXCI+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8ubG9hZGVyLWhpZGRlbnt2aXNpYmlsaXR5OmhpZGRlbn0ubG9hZGVyLW92ZXJsYXl7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwMDtjb250YWluOnN0cmljdH0ubG9hZGVyLWJhY2tkcm9we2xlZnQ6MDt0b3A6MDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQtY29sb3I6IzAwMDtvcGFjaXR5Oi4zOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9YF0sXG59KVxuZXhwb3J0IGNsYXNzIEJjaUxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgc2hvdyA9IGZhbHNlO1xuICBwcml2YXRlIGNvbXBvbmVudERlc3Ryb3llZCQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmNpTG9hZGVyU2VydmljZTogQmNpTG9hZGVyU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5iY2lMb2FkZXJTZXJ2aWNlLmxvYWRlclN0YXRlLnBpcGUodGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCkpLnN1YnNjcmliZSgoc3RhdGU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuc2hvdyA9IHN0YXRlO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLm5leHQoKTtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IExvY2F0aW9uLCBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmNpU2lkZWJhclNlcnZpY2Uge1xuICBwcml2YXRlIHNpZGViYXJTdGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuICBwcml2YXRlIHNpZGViYXJWaXNpYmlsaXR5JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgbG9jYXRpb25TdHJhdGVneTogTG9jYXRpb25TdHJhdGVneSkge1xuICB9XG5cbiAgcHVibGljIHNldFNpZGViYXJTdGF0ZShvcGVuOiBib29sZWFuKSB7XG4gICAgdGhpcy5zaWRlYmFyU3RhdGUkLm5leHQob3Blbik7XG4gIH1cblxuICBwdWJsaWMgc2V0U2lkZWJhclZpc2liaWxpdHkodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2lkZWJhclZpc2liaWxpdHkkLm5leHQodmlzaWJsZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2lkZWJhclN0YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnNpZGViYXJTdGF0ZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2lkZWJhclZpc2liaWxpdHkoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc2lkZWJhclZpc2liaWxpdHkkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgVVJMIGVpdGhlciBpbnRlcm5hbGx5ICh3aXRoIEFuZ3VsYXIgUm91dGVyKSBvciBleHRlcm5hbGx5ICh3aW5kb3cubG9jYXRpb24pLlxuICAgKiBJZiB0aGVyZSBpcyBub3QgaHR0cCBwcm90b2NvbCBvciBpZiB0aGUgb3JpZ2luIGlzIHRoZSBzYW1lIGFuZCB0aGUgcm91dGUgaXMgcGFydCBvZiB0aGUgcm91dGVyIGNvbmZpZywgbmF2aWdhdGUgaW50ZXJuYWxseS5cbiAgICogRWxzZSwgbmF2aWdhdGUgZXh0ZXJuYWxseS5cbiAgICogQHBhcmFtIHVybCBBYnNvbHV0ZSBVUkwgb3IgaW50ZXJuYWwgcm91dGUuXG4gICAqIEBwYXJhbSBleHRyYXMge0BsaW5rIE5hdmlnYXRpb25FeHRyYXN9XG4gICAqIEByZXR1cm5zIFRoZSB7QGxpbmsgcm91dGVyfSBuYXZpZ2F0ZSByZXR1cm5cbiAgICovXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvVXJsKHVybDogc3RyaW5nLCBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgbGV0IHVybE9iamVjdDtcbiAgICB0cnkge1xuICAgICAgdXJsT2JqZWN0ID0gbmV3IFVSTCh1cmwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGFzc3VtaW5nIFR5cGVFcnJvciwgSW52YWxpZCBVUkwgLT4gbmF2aWdhdGUgaW50ZXJuYWxseSBkaXJlY3RseSB0byBVUkxcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdXJsXSwgZXh0cmFzKTtcbiAgICB9XG4gICAgaWYgKCEhdXJsT2JqZWN0KSB7XG4gICAgICBsZXQgYmFzZUhyZWYgPSB0aGlzLmxvY2F0aW9uU3RyYXRlZ3kuZ2V0QmFzZUhyZWYoKTtcbiAgICAgIGJhc2VIcmVmID0gYmFzZUhyZWYuZW5kc1dpdGgoJy8nKSA/IGJhc2VIcmVmIDogYCR7YmFzZUhyZWZ9L2A7XG4gICAgICBpZiAodXJsT2JqZWN0Lm9yaWdpbiA9PT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiAmJiB1cmxPYmplY3QucGF0aG5hbWUuc3RhcnRzV2l0aChiYXNlSHJlZikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlKFt1cmxPYmplY3QucGF0aG5hbWVdLCBleHRyYXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxPYmplY3QuaHJlZjtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpZGViYXJOYXZJdGVtIH0gZnJvbSAnLi9zaWRlYmFyLW5hdi1pdGVtLm1vZGVsJztcbmltcG9ydCB7IEJjaVNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9iY2ktc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLXNpZGViYXInLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bWF0LXNpZGVuYXYtY29udGFpbmVyIGNsYXNzPVwiXCI+XG5cblxuICA8bWF0LXNpZGVuYXYgI3NpZGVuYXYgbW9kZT1cInNpZGVcIiBbZGlzYWJsZUNsb3NlXT1cInRydWVcIiBmeExheW91dD1cImNvbHVtblwiPjwhLS1bb3BlbmVkXT1cImlzT3BlbigpICYmIGlzVmlzaWJsZSgpXCItLT5cbiAgICA8ZGl2IGNsYXNzPVwic2lkZW5hdi1oZWFkZXJcIj5cbiAgICAgIDxoMT57e2FwcGxpY2F0aW9uVGl0bGV9fTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyXCIgKGNsaWNrKT1cInRvZ2dsZVNpZGVOYXZpZ2F0aW9uQmFyKCk7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXJnZXItbGluZVwiIFtjbGFzcy5idXJnZXJUb3BdPVwiaXNPcGVuKClcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1cmdlci1saW5lXCIgW2NsYXNzLmJ1cmdlck1pZGRsZV09XCJpc09wZW4oKVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyLWxpbmVcIiBbY2xhc3MuYnVyZ2VyQm90dG9tXT1cImlzT3BlbigpXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8YmNpLXNpZGViYXItbmF2LWxpc3QgW25hdkl0ZW1zXT1cInNpZGViYXJMaW5rc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic2lkZWJhckxpbmtzICYmIHNpZGViYXJMaW5rcy5sZW5ndGggPiAwXCI+PC9iY2ktc2lkZWJhci1uYXYtbGlzdD5cblxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJjaS1zaWRlYmFyLWZvb3RlclwiPjwvbmctY29udGVudD5cbiAgPC9tYXQtc2lkZW5hdj5cblxuICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIiBmeExheW91dD1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJzaWRlbmF2LWhlYWRlciBjbG9zZWQtc2lkZWJhclwiICpuZ0lmPVwiIWlzT3BlbigpICYmIGlzVmlzaWJsZSgpXCIgKGNsaWNrKT1cInRvZ2dsZVNpZGVOYXZpZ2F0aW9uQmFyKCk7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXJnZXItbGluZVwiIFtjbGFzcy5idXJnZXJUb3BdPVwiaXNPcGVuKClcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1cmdlci1saW5lXCIgW2NsYXNzLmJ1cmdlck1pZGRsZV09XCJpc09wZW4oKVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyLWxpbmVcIiBbY2xhc3MuYnVyZ2VyQm90dG9tXT1cImlzT3BlbigpXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYmNpLWNvbnRlbnQtY29udGFpbmVyLW1haW5cIiBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cImdyb3dcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cbmAsXG4gIHN0eWxlczogW2BAY2hhcnNldCBcIlVURi04XCI7LyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9tYXQtc2lkZW5hdi1jb250YWluZXJ7aGVpZ2h0OjEwMHZofW1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdntiYWNrZ3JvdW5kLWNvbG9yOiM1MjVmNmI7bWFyZ2luLXRvcDoxNnB4O3dpZHRoOjMwMHB4fW1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZW5hdi1pdGVtc3twYWRkaW5nOjA7Ym9yZGVyLXdpZHRoOjAgMCAxcHg7Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjA1KTtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czowfW1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZW5hdi1pdGVtcyBsaXt3aWR0aDoxMDAlO21hcmdpbjowO2JvcmRlci13aWR0aDoxcHggMCAwO2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4wNSk7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6MH1tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVuYXYtaXRlbXMgLmhlYWRlci1jb250YWluZXIsbWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlbmF2LWl0ZW1zIC5zaWRlbmF2LWl0ZW17cGFkZGluZzowIDE2cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwJTtsaW5lLWhlaWdodDo0OHB4O2ZvbnQtZmFtaWx5OkJvc2NoLVNhbnM7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc2l6ZToxNnB4O2JvcmRlci13aWR0aDowIDAgMCA0cHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjB9bWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlbmF2LWl0ZW1zIC5oZWFkZXItY29udGFpbmVyOmhvdmVyLG1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZW5hdi1pdGVtcyAuc2lkZW5hdi1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDUpO2NvbG9yOiNiZmMwYzJ9bWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlbmF2LWl0ZW1zIC5oZWFkZXItY29udGFpbmVyLmFjdGl2ZSxtYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVuYXYtaXRlbXMgLnNpZGVuYXYtaXRlbS5hY3RpdmV7Ym9yZGVyLWNvbG9yOiMwMDhlY2Z9bWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlbmF2LWl0ZW1zIC5oZWFkZXItY29udGFpbmVyLmhhcy1pdGVtczo6YmVmb3JlLG1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZW5hdi1pdGVtcyAuc2lkZW5hdi1pdGVtLmhhcy1pdGVtczo6YmVmb3Jle2ZvbnQtZmFtaWx5OkJvc2NoLUljO2NvbnRlbnQ6XCLDr8KEwp1cIjtmb250LXN0eWxlOm5vcm1hbDtmb250LXNpemU6MjRweH1tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVuYXYtc3ViaXRlbXN7cGFkZGluZzowIDAgMCAxNnB4fW1hdC1zaWRlbmF2LWNvbnRhaW5lciA6Om5nLWRlZXAgLm1hdC1kcmF3ZXItY29udGVudHtvdmVyZmxvdzpoaWRkZW59bWF0LXNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWhlYWRlcntjdXJzb3I6ZGVmYXVsdDtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6NjRweDtib3JkZXItd2lkdGg6MCAwIDFweDtib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMDUpO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjB9bWF0LXNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWhlYWRlci5jbG9zZWQtc2lkZWJhcnttYXJnaW4tdG9wOjE2cHg7d2lkdGg6NTBweDtoZWlnaHQ6MTAwdmg7YmFja2dyb3VuZC1jb2xvcjojNTI1ZjZiO2N1cnNvcjpwb2ludGVyfW1hdC1zaWRlbmF2LWNvbnRhaW5lciAuc2lkZW5hdi1oZWFkZXIgLmJ1cmdlcntkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO21hcmdpbjoyNXB4IDE2cHggMCAwO2N1cnNvcjpwb2ludGVyfW1hdC1zaWRlbmF2LWNvbnRhaW5lciAuc2lkZW5hdi1oZWFkZXIgLmJ1cmdlciAuYnVyZ2VyLWxpbmV7aGVpZ2h0OjFweDt3aWR0aDoyNHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjttYXJnaW4tYm90dG9tOjZweDt0cmFuc2l0aW9uOi40c31tYXQtc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtaGVhZGVyIC5idXJnZXIgLmJ1cmdlci1saW5lLmJ1cmdlck1pZGRsZXtvcGFjaXR5OjB9bWF0LXNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWhlYWRlciAuYnVyZ2VyIC5idXJnZXItbGluZS5idXJnZXJUb3B7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSg0cHgpIHRyYW5zbGF0ZVgoLTRweCk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoNHB4KSB0cmFuc2xhdGVYKC00cHgpO29wYWNpdHk6MSFpbXBvcnRhbnR9bWF0LXNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWhlYWRlciAuYnVyZ2VyIC5idXJnZXItbGluZS5idXJnZXJCb3R0b217LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVYKC02LjVweCkgdHJhbnNsYXRlWSgtNi41cHgpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVgoLTYuNXB4KSB0cmFuc2xhdGVZKC02LjVweCk7b3BhY2l0eToxIWltcG9ydGFudH1tYXQtc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtaGVhZGVyIGgxe2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowIDAgMCAxNnB4O2xpbmUtaGVpZ2h0OjY0cHg7d2hpdGUtc3BhY2U6bm93cmFwO3dpZHRoOjIyMHB4O292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2NvbG9yOiNiZmMwYzI7Zm9udC1mYW1pbHk6Qm9zY2gtU2Fucztmb250LXdlaWdodDozMDA7Zm9udC1zaXplOjIwcHh9LmNvbnRlbnQtY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowfS5iY2ktY29udGVudC1jb250YWluZXItbWFpbnttYXJnaW46MTZweCAwIDA7b3ZlcmZsb3c6aGlkZGVufWBdXG59KVxuZXhwb3J0IGNsYXNzIEJjaVNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHB1YmxpYyBhcHBsaWNhdGlvblRpdGxlID0gJyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBzaWRlYmFyTGlua3M6IFNpZGViYXJOYXZJdGVtW107XG4gIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnKSBwcml2YXRlIHNpZGVuYXY6IE1hdFNpZGVuYXY7XG4gIHByaXZhdGUgb3BlbiA9IHRydWU7XG4gIHByaXZhdGUgdmlzaWJsZSA9IHRydWU7XG4gIHByaXZhdGUgY29tcG9uZW50RGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaWRlYmFyU2VydmljZTogQmNpU2lkZWJhclNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIFRPRE86IHJlbWVtYmVyIHNpZGViYXIgc3RhdGUgKG9wZW5lZC9jbG9zZWQpIGluIHN0b3JhZ2UgcHJvdmlkZXIgYW5kIGxvYWQgaGVyZVxuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuZ2V0U2lkZWJhclN0YXRlKCkucGlwZSh0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSkuc3Vic2NyaWJlKHN0YXRlID0+IHtcbiAgICAgIHRoaXMub3BlbiA9IHN0YXRlO1xuICAgICAgaWYgKHN0YXRlICYmIHRoaXMudmlzaWJsZSkge1xuICAgICAgICB0aGlzLnNpZGVuYXYub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaWRlbmF2LmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLmdldFNpZGViYXJWaXNpYmlsaXR5KCkucGlwZSh0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSkuc3Vic2NyaWJlKHZpc2libGUgPT4ge1xuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIGlmICh2aXNpYmxlICYmIHRoaXMub3Blbikge1xuICAgICAgICB0aGlzLnNpZGVuYXYub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaWRlbmF2LmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQubmV4dCgpO1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgdG9nZ2xlU2lkZU5hdmlnYXRpb25CYXIoKSB7XG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS5zZXRTaWRlYmFyU3RhdGUoIXRoaXMub3Blbik7XG4gIH1cblxuICBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3BlbjtcbiAgfVxuXG4gIGlzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlO1xuICB9XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2SXRlbSB9IGZyb20gJy4uL2JjaS1zaWRlYmFyL3NpZGViYXItbmF2LWl0ZW0ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktc2lkZWJhci1mb290ZXInLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48ZGl2IGNsYXNzPVwiYmNpLXNpZGViYXItZm9vdGVyLWNvbnRhaW5lclwiPlxuPC9kaXY+XG48YmNpLXNpZGViYXItbmF2LWxpc3QgW25hdkl0ZW1zXT1cInNpZGViYXJGb290ZXJMaW5rc1wiPjwvYmNpLXNpZGViYXItbmF2LWxpc3Q+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi86aG9zdHttYXJnaW4tdG9wOmF1dG99LmJjaS1zaWRlYmFyLWZvb3Rlci1jb250YWluZXJ7Ym9yZGVyLXdpZHRoOjFweCAwIDA7Ym9yZGVyLWNvbG9yOiNmZmY7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6MDttYXJnaW46MTZweCAxNnB4IDA7d2lkdGg6Y2FsYygxMDAlIC0gMzJweCl9YF1cbn0pXG5leHBvcnQgY2xhc3MgQmNpU2lkZWJhckZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBzaWRlYmFyRm9vdGVyTGlua3M6IFNpZGViYXJOYXZJdGVtW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENsb3NhYmxlT3ZlcmxheUNvbXBvbmVudE1vZGVsIH0gZnJvbSAnLi9jbG9zYWJsZS1vdmVybGF5LWNvbXBvbmVudC5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2SXRlbSB7XG4gIGlkPzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG4gIHF1ZXJ5UGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcG9zaXRpb24/OiBudW1iZXI7XG4gIGl0ZW1zPzogU2lkZWJhck5hdkl0ZW1bXTtcbiAgaWNvbj86IHN0cmluZztcbiAgY2I/OiAoKSA9PiB2b2lkO1xuICByb3V0ZXJMaW5rQWN0aXZlT3B0aW9ucz86IHtcbiAgICBleGFjdDogYm9vbGVhbjtcbiAgfTtcbiAgb3ZlcmxheT86IHsgY29tcG9uZW50OiBUeXBlPENsb3NhYmxlT3ZlcmxheUNvbXBvbmVudE1vZGVsPGFueT4+LCBjb25maWc6IGFueSB9O1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1zaWRlYmFyLWV4cGFuZGVyJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPGRpdiBjbGFzcz1cIm1vZHVsZS1jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIiAoY2xpY2spPVwidG9nZ2xlU2lkZWJhcigpXCI+XG4gICAge3toZWFkZXJ9fVxuICAgIDxpIGNsYXNzPVwiZXhwYW5kZXItaWNvblwiIFtuZ0NsYXNzXT1cInsnZXhwYW5kZWQnOiBleHBhbmRlZH1cIj48L2k+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7J2V4cGFuZGVkJzogZXhwYW5kZWR9XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYEBjaGFyc2V0IFwiVVRGLThcIjsvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy5oZWFkZXItY29udGFpbmVye3BhZGRpbmc6MCAxNnB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEwMCU7bGluZS1oZWlnaHQ6NDhweDt0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZTtjb2xvcjojZmZmO2N1cnNvcjpoYW5kO2ZvbnQtZmFtaWx5OkJvc2NoLVNhbnM7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc2l6ZToxNnB4O2JvcmRlci13aWR0aDowIDAgMCA0cHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjB9LmhlYWRlci1jb250YWluZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNSk7Y29sb3I6I2JmYzBjMn0uaGVhZGVyLWNvbnRhaW5lciAuZXhwYW5kZXItaWNvbntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoxNnB4O3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1vdXQsLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0fS5oZWFkZXItY29udGFpbmVyIC5leHBhbmRlci1pY29uOmJlZm9yZXtmb250LWZhbWlseTpCb3NjaC1JYztjb250ZW50Olwiw6/ChMKdXCI7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC1zaXplOjIwcHh9LmhlYWRlci1jb250YWluZXIgLmV4cGFuZGVyLWljb24uZXhwYW5kZWR7ZGlzcGxheTppbmxpbmUtYmxvY2s7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1pbjt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1pbjt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1pbiwtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1pbjstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfS5jb250ZW50LWNvbnRhaW5lcnttYXgtaGVpZ2h0OjA7b3ZlcmZsb3c6aGlkZGVuO3RyYW5zaXRpb246bWF4LWhlaWdodCAuMnMgZWFzZS1vdXR9LmNvbnRlbnQtY29udGFpbmVyLmV4cGFuZGVke21heC1oZWlnaHQ6MjAwMHB4O3RyYW5zaXRpb246bWF4LWhlaWdodCAuNnMgZWFzZS1pbn1gXVxufSlcbmV4cG9ydCBjbGFzcyBCY2lTaWRlYmFyRXhwYW5kZXJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGhlYWRlciA9ICcnO1xuICBASW5wdXQoKSBleHBhbmRlZCA9IGZhbHNlO1xuXG4gIHRvZ2dsZVNpZGViYXIoKSB7XG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50UmVmLCBJbmplY3RvciwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IFNpZGViYXJOYXZJdGVtIH0gZnJvbSAnLi4vYmNpLXNpZGViYXIvc2lkZWJhci1uYXYtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBCY2lTaWRlYmFyU2VydmljZSB9IGZyb20gJy4uL2JjaS1zaWRlYmFyL2JjaS1zaWRlYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2RrT3ZlcmxheU9yaWdpbiwgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ2xvc2FibGVPdmVybGF5Q29tcG9uZW50TW9kZWwgfSBmcm9tICcuLi9iY2ktc2lkZWJhci9jbG9zYWJsZS1vdmVybGF5LWNvbXBvbmVudC5tb2RlbCc7XG5cbi8qKlxuICogVGltZSBhbmQgdGltaW5nIGN1cnZlIGZvciBleHBhbnNpb24gcGFuZWwgYW5pbWF0aW9ucy5cbiAqKi9cbmV4cG9ydCBjb25zdCBTSURFTkFWX0xJTktTX0FOSU1BVElPTl9USU1JTkcgPSAnMjI1bXMgY3ViaWMtYmV6aWVyKDAuNCwwLjAsMC4yLDEpJztcblxuZXhwb3J0IGNvbnN0IElURU1fRVhQQU5ERURfU1RBVEVTID0geyBleHBhbmRlZDogJ2V4cGFuZGVkJywgY29sbGFwc2VkOiAnY29sbGFwc2VkJyB9O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktc2lkZWJhci1uYXYtaXRlbScsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxtYXQtbGlzdC1pdGVtIFtzdHlsZS5wb3NpdGlvbl09XCIncmVsYXRpdmUnXCIgW2NsYXNzLmFjdGl2ZV09XCJpc0FjdGl2ZVJvdXRlKG5hdkl0ZW0pXCIgKGNsaWNrKT1cIm9uRmlyc3RMZXZlbENsaWNrKClcIlxuICAgICAgICAgICAgICAgY2RrLW92ZXJsYXktb3JpZ2luICNwb3BvdmVyT3JpZ2luPVwiY2RrT3ZlcmxheU9yaWdpblwiPlxuICA8bWF0LWljb24gbWF0TGlzdEljb24gZm9udFNldD1cImJvc2NoXCIgW2ZvbnRJY29uXT1cIm5hdkl0ZW0/Lmljb25cIiAqbmdJZj1cIm5hdkl0ZW0/Lmljb25cIlxuICAgICAgICAgICAgY2xhc3M9XCJuYXYtbGluay1pY29uXCI+PC9tYXQtaWNvbj5cbiAgPHAgbWF0TGluZT57eyBuYXZJdGVtPy50aXRsZSB9fTwvcD5cbiAgPG1hdC1pY29uICpuZ0lmPVwiaGFzSXRlbXMoKVwiIGZvbnRTZXQ9XCJib3NjaFwiIGZvbnRJY29uPVwiQm9zY2gtSWMtYXJyb3ctZXhwYW5kLXJpZ2h0XCIgY2xhc3M9XCJleHBhbmQtaWNvblwiXG4gICAgICAgICAgICBbQGluZGljYXRvclJvdGF0ZV09XCJnZXRFeHBhbmRlZFN0YXRlKClcIj48L21hdC1pY29uPlxuPC9tYXQtbGlzdC1pdGVtPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0l0ZW1zKClcIj5cbiAgPGRpdiBbQGJvZHlFeHBhbnNpb25dPVwiZ2V0RXhwYW5kZWRTdGF0ZSgpXCIgY2xhc3M9XCJzdWItbmF2LWxpbmtzLWNvbnRhaW5lclwiIFtjbGFzcy5zdWItbmF2LWxpbmtzLWV4cGFuZGVkXT1cImV4cGFuZGVkXCI+XG4gICAgPCEtLTxuZy1jb250ZW50IHNlbGVjdD1cImJjaS1zaWRlYmFyLW5hdi1pdGVtXCIgPjwvbmctY29udGVudD4tLT5cbiAgICA8bWF0LWxpc3QtaXRlbSBjbGFzcz1cInN1Yi1uYXYtbGlua1wiICpuZ0Zvcj1cImxldCBpdGVtIG9mIG5hdkl0ZW0/Lml0ZW1zXCIgKGNsaWNrKT1cIm9uU2Vjb25kTGV2ZWxDbGljayhpdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJpc0FjdGl2ZVJvdXRlKGl0ZW0pXCI+XG4gICAgICA8cCBtYXRMaW5lPnt7IGl0ZW0/LnRpdGxlIH19PC9wPlxuICAgIDwvbWF0LWxpc3QtaXRlbT5cbiAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbmAsXG4gIHN0eWxlczogW2BAY2hhcnNldCBcIlVURi04XCI7LyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi86aG9zdHtkaXNwbGF5OmJsb2NrO2JvcmRlci13aWR0aDowIDAgMXB4O2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4wNSk7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6MH06aG9zdDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA1KX06aG9zdDpob3ZlciBtYXQtaWNvbiw6aG9zdDpob3ZlciBwe2NvbG9yOiNiZmMwYzJ9Omhvc3QgLm1hdC1saXN0LWl0ZW17Ym9yZGVyLXdpZHRoOjAgMCAwIDRweDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6MH06aG9zdCAubWF0LWxpc3QtaXRlbS5hY3RpdmV7Ym9yZGVyLWNvbG9yOiMwMDhlY2Z9Omhvc3QgLm1hdC1saXN0LWl0ZW0uaGFzLWl0ZW1zOjpiZWZvcmV7Zm9udC1mYW1pbHk6Qm9zY2gtSWM7Y29udGVudDpcIsOvwoTCnVwiO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtc2l6ZToyNHB4fTpob3N0IC5tYXQtbGlzdC1pdGVtLnN1Yi1uYXYtbGlua3ttYXJnaW4tbGVmdDozNnB4fTpob3N0IC5tYXQtbGlzdC1pdGVtIG1hdC1pY29uLDpob3N0IC5tYXQtbGlzdC1pdGVtIHB7Y29sb3I6I2ZmZn06aG9zdCAubWF0LWxpc3QtaXRlbSBtYXQtaWNvbntmb250LXNpemU6MjBweH06aG9zdCAubWF0LWxpc3QtaXRlbSBwe2ZvbnQtZmFtaWx5OkJvc2NoLVNhbnM7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc2l6ZToxNnB4fTpob3N0IC5tYXQtbGlzdC1pdGVtIDo6bmctZGVlcCAubWF0LWxpc3QtdGV4dHtwYWRkaW5nOjAgOHB4fTpob3N0IC5tYXQtbGlzdC1pdGVtIDo6bmctZGVlcCAubWF0LWxpc3QtaXRlbS1jb250ZW50e3BhZGRpbmc6MCAxNnB4IDAgOHB4fS5zdWItbmF2LWxpbmtzLWV4cGFuZGVkIC5zdWItbmF2LWxpbmtzLWNvbnRhaW5lcntvdmVyZmxvdzp2aXNpYmxlfS5zdWItbmF2LWxpbmtzLWNvbnRhaW5lciwuc3ViLW5hdi1saW5rcy1jb250YWluZXIubmctYW5pbWF0aW5ne292ZXJmbG93OmhpZGRlbn1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2JvZHlFeHBhbnNpb24nLCBbXG4gICAgICBzdGF0ZShJVEVNX0VYUEFOREVEX1NUQVRFUy5jb2xsYXBzZWQsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JywgdmlzaWJpbGl0eTogJ2hpZGRlbicgfSkpLFxuICAgICAgc3RhdGUoSVRFTV9FWFBBTkRFRF9TVEFURVMuZXhwYW5kZWQsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIHZpc2liaWxpdHk6ICd2aXNpYmxlJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKGAke0lURU1fRVhQQU5ERURfU1RBVEVTLmV4cGFuZGVkfSA8PT4gJHtJVEVNX0VYUEFOREVEX1NUQVRFUy5jb2xsYXBzZWR9YCwgYW5pbWF0ZShTSURFTkFWX0xJTktTX0FOSU1BVElPTl9USU1JTkcpKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdpbmRpY2F0b3JSb3RhdGUnLCBbXG4gICAgICBzdGF0ZShJVEVNX0VYUEFOREVEX1NUQVRFUy5jb2xsYXBzZWQsIHN0eWxlKHsgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyB9KSksXG4gICAgICBzdGF0ZShJVEVNX0VYUEFOREVEX1NUQVRFUy5leHBhbmRlZCwgc3R5bGUoeyB0cmFuc2Zvcm06ICdyb3RhdGUoOTBkZWcpJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKGAke0lURU1fRVhQQU5ERURfU1RBVEVTLmV4cGFuZGVkfSA8PT4gJHtJVEVNX0VYUEFOREVEX1NUQVRFUy5jb2xsYXBzZWR9YCwgYW5pbWF0ZShTSURFTkFWX0xJTktTX0FOSU1BVElPTl9USU1JTkcpKSxcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJjaVNpZGViYXJOYXZJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBuYXZJdGVtOiBTaWRlYmFyTmF2SXRlbTtcbiAgcHVibGljIGV4cGFuZGVkID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgncG9wb3Zlck9yaWdpbicpIHBvcG92ZXJPcmlnaW46IENka092ZXJsYXlPcmlnaW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogQmNpU2lkZWJhclNlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBvdmVybGF5OiBPdmVybGF5LCBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlUm91dGUodGhpcy5uYXZJdGVtKSkge1xuICAgICAgdGhpcy50b2dnbGVFeHBhbmRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhc0l0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLm5hdkl0ZW0uaXRlbXMgJiYgdGhpcy5uYXZJdGVtLml0ZW1zLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHJvdXRlIG9mIHRoaXMge0BsaW5rIG5hdkl0ZW19IGlzIGluIHRoZSBhY3RpdmUgcm91dGUgKGluY2x1ZGluZyBwYXJlbnQgcm91dGVzLCBleGNsdWRpbmcgdGhlIGhvbWUgcm91dGUpLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGl0J3MgdGhlIGFjdGl2ZSByb3V0ZS5cbiAgICovXG4gIGlzQWN0aXZlUm91dGUobmF2SXRlbTogU2lkZWJhck5hdkl0ZW0pOiBib29sZWFuIHtcbiAgICBjb25zdCBleGFjdCA9IG5hdkl0ZW0ucm91dGVyTGlua0FjdGl2ZU9wdGlvbnMgPyBuYXZJdGVtLnJvdXRlckxpbmtBY3RpdmVPcHRpb25zLmV4YWN0IDogZmFsc2U7XG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLmdldFJvdXRlRnJvbVVybChuYXZJdGVtLnVybCk7XG4gICAgcmV0dXJuICEhcm91dGUgJiYgdGhpcy5yb3V0ZXIuaXNBY3RpdmUocm91dGUsIGV4YWN0KTtcbiAgfVxuXG4gIG9uRmlyc3RMZXZlbENsaWNrKCkge1xuICAgIGlmICh0aGlzLmhhc0l0ZW1zKCkpIHtcbiAgICAgIHRoaXMudG9nZ2xlRXhwYW5kZWQoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmF2SXRlbS51cmwpIHtcbiAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UubmF2aWdhdGVUb1VybCh0aGlzLm5hdkl0ZW0udXJsLCB7IHF1ZXJ5UGFyYW1zOiB0aGlzLm5hdkl0ZW0ucXVlcnlQYXJhbXMgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5hdkl0ZW0uY2IpIHtcbiAgICAgIHRoaXMubmF2SXRlbS5jYigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uYXZJdGVtLm92ZXJsYXkpIHtcbiAgICAgIHRoaXMub3Blbk92ZXJsYXkoKTtcbiAgICB9XG4gIH1cblxuICBvblNlY29uZExldmVsQ2xpY2sobmF2SXRlbTogU2lkZWJhck5hdkl0ZW0pIHtcbiAgICBpZiAobmF2SXRlbS51cmwpIHtcbiAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UubmF2aWdhdGVUb1VybChuYXZJdGVtLnVybCwgeyBxdWVyeVBhcmFtczogbmF2SXRlbS5xdWVyeVBhcmFtcyB9KTtcbiAgICB9IGVsc2UgaWYgKG5hdkl0ZW0uY2IpIHtcbiAgICAgIG5hdkl0ZW0uY2IoKTtcbiAgICB9XG4gIH1cblxuICBnZXRFeHBhbmRlZFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnO1xuICB9XG5cbiAgb3Blbk92ZXJsYXkoKSB7XG4gICAgY29uc3Qgc3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKVxuICAgICAgLmNvbm5lY3RlZFRvKFxuICAgICAgICB0aGlzLnBvcG92ZXJPcmlnaW4uZWxlbWVudFJlZixcbiAgICAgICAgeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2JvdHRvbScgfSxcbiAgICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pO1xuXG4gICAgY29uc3QgY29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogc3RyYXRlZ3ksXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6ICdjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCdcbiAgICB9KTtcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xuXG4gICAgY29uc3Qgb3ZlcmxheUNvbXBvbmVudCA9IHRoaXMubmF2SXRlbS5vdmVybGF5LmNvbXBvbmVudDtcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5uYXZJdGVtLm92ZXJsYXkuY29uZmlnO1xuXG4gICAgY29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8Q2xvc2FibGVPdmVybGF5Q29tcG9uZW50TW9kZWw8dHlwZW9mIG92ZXJsYXlDb25maWc+PiA9IG92ZXJsYXlSZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwob3ZlcmxheUNvbXBvbmVudCwgdGhpcy52aWV3Q29udGFpbmVyUmVmKSk7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbmZpZyA9IG92ZXJsYXlDb25maWc7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLm9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IG92ZXJsYXlSZWYuZGV0YWNoKCkpO1xuICAgIG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiBvdmVybGF5UmVmLmRldGFjaCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um91dGVGcm9tVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgdXJsT2JqZWN0O1xuICAgIHRyeSB7XG4gICAgICB1cmxPYmplY3QgPSBuZXcgVVJMKHVybCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gYXNzdW1pbmcgVHlwZUVycm9yLCBJbnZhbGlkIFVSTCAtPiBuYXZpZ2F0ZSBpbnRlcm5hbGx5IGRpcmVjdGx5IHRvIFVSTFxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgaWYgKCEhdXJsT2JqZWN0KSB7XG4gICAgICBpZiAodXJsT2JqZWN0Lm9yaWdpbiA9PT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgICAvLyBUT0RPOiBjb25zaWRlciBiYXNlSHJlZlxuICAgICAgICByZXR1cm4gdXJsT2JqZWN0LnBhdGhuYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gaW50ZXJuYWwgcm91dGVcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlRXhwYW5kZWQoKSB7XG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICB9XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpZGViYXJOYXZJdGVtIH0gZnJvbSAnLi4vYmNpLXNpZGViYXIvc2lkZWJhci1uYXYtaXRlbS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1zaWRlYmFyLW5hdi1saXN0JyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPG1hdC1uYXYtbGlzdD5cbiAgPGJjaS1zaWRlYmFyLW5hdi1pdGVtICpuZ0Zvcj1cImxldCBuYXZJdGVtIG9mIG5hdkl0ZW1zXCIgW25hdkl0ZW1dPVwibmF2SXRlbVwiPlxuICA8L2JjaS1zaWRlYmFyLW5hdi1pdGVtPlxuPC9tYXQtbmF2LWxpc3Q+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8ubWF0LW5hdi1saXN0e3BhZGRpbmctdG9wOjB9YF1cbn0pXG5leHBvcnQgY2xhc3MgQmNpU2lkZWJhck5hdkxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgbmF2SXRlbXM6IFNpZGViYXJOYXZJdGVtW10gPSBbXTtcbiAgLyoqXG4gICAqIEB0b2RvIGVuYWJsZSBza2lwU29ydGluZyB0byBiZSBzZXQgKFNpZGViYXJTZXJ2aWNlPyBDb25maWd1cmF0aW9uPylcbiAgICovXG4gIHNraXBTb3J0aW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2tpcFNvcnRpbmcgJiYgY2hhbmdlcy5uYXZJdGVtcykge1xuICAgICAgdGhpcy5uYXZJdGVtcy5zb3J0KChhLCBiKSA9PiBhLnBvc2l0aW9uIC0gYi5wb3NpdGlvbik7XG4gICAgfVxuICB9XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1icmVhZGNydW1iJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPGEgKm5nSWY9XCJ1cmwgIT09IHVuZGVmaW5lZFwiIFtyb3V0ZXJMaW5rXT1cInVybFwiPnt7b21pdHRlZCA/ICfDosKAwqYnIDogdGl0bGV9fTwvYT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJ1cmwgPT09IHVuZGVmaW5lZFwiPnt7b21pdHRlZCA/ICfDosKAwqYnIDogdGl0bGV9fTwvbmctY29udGFpbmVyPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci50aXRsZScpIHRpdGxlQXR0cmlidXRlID0gdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgX29taXR0ZWQgPSBmYWxzZTtcblxuICBnZXQgb21pdHRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb21pdHRlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBvbWl0dGVkKHZhbHVlKSB7XG4gICAgdGhpcy5fb21pdHRlZCA9IHZhbHVlO1xuXG4gICAgLy8gaGFuZGxlIEV4cHJlc3Npb25DaGFuZ2VkQWZ0ZXJDaGVja2VkIGlzc3VlcyBmb3IgdGl0bGVcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudGl0bGVBdHRyaWJ1dGUgPSB0aGlzLm9taXR0ZWQgPyB0aGlzLnRpdGxlIDogdW5kZWZpbmVkKTtcbiAgICAvLyAuLi5hbmQgZGlzcGxheWVkIHRpdGxlXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktYnJlYWRjcnVtYnMnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcblxuLyoqXG4gKiBEaXNwbGF5IGJyZWFkY3J1bWJzLCBvciBlbGxpcHNpcyBmb3IgaW50ZXJtZWRpYXRlIGJyZWFkY3J1bWJzIGlmIHRoZXJlIGFyZSB0b28gbWFueS5cbiAqL1xuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmJyZWFkY3J1bWJzJykgdHJ1ZTtcblxuICBAQ29udGVudENoaWxkcmVuKEJyZWFkY3J1bWJDb21wb25lbnQpIHByaXZhdGUgYnJlYWRjcnVtYnM6IFF1ZXJ5TGlzdDxCcmVhZGNydW1iQ29tcG9uZW50PjtcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgYnJlYWRjcnVtYnMgc2hvd24gc3RhcnRpbmcgZnJvbSB0aGUgcm9vdC5cbiAgICovXG4gIEBJbnB1dCgpIGZpeGVkTGVhZCA9IDE7XG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIGJyZWFkc2NydW1icyBzaG93biBzdGFydGluZyBmcm9tIHRoZSBjdXJyZW50IHBhZ2UuXG4gICAqL1xuICBASW5wdXQoKSBmaXhlZFRhaWwgPSAyO1xuXG4gIHByaXZhdGUgY29tcG9uZW50RGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQubmV4dCgpO1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnJlYWRjcnVtYnMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5icmVhZGNydW1icy5mb3JFYWNoKChicmVhZGNydW1iLCBpbmRleCkgPT4gYnJlYWRjcnVtYi5vbWl0dGVkID0gIXRoaXMuaXNTaG93bihpbmRleCkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzU2hvd24oaW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiBpbmRleCA8IHRoaXMuZml4ZWRMZWFkIHx8IGluZGV4ID49IHRoaXMuYnJlYWRjcnVtYnMubGVuZ3RoIC0gdGhpcy5maXhlZFRhaWw7XG4gIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0JyZWFkY3J1bWJzQ29tcG9uZW50LCBCcmVhZGNydW1iQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0JyZWFkY3J1bWJzQ29tcG9uZW50LCBCcmVhZGNydW1iQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1ic01vZHVsZSB7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2SXRlbSB9IGZyb20gJy4uL2JjaS1zaWRlYmFyL3NpZGViYXItbmF2LWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYnJlYWRjcnVtYnMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1hcHAnLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48YmNpLWNvbnRlbnQ+XG4gIDxiY2ktc2lkZWJhciBbc2lkZWJhckxpbmtzXT1cInNpZGViYXJMaW5rc1wiIFthcHBsaWNhdGlvblRpdGxlXT1cImFwcGxpY2F0aW9uVGl0bGVcIj5cblxuICAgIDxiY2ktc2lkZWJhci1mb290ZXIgW3NpZGViYXJGb290ZXJMaW5rc109XCJzaWRlYmFyRm9vdGVyTGlua3NcIj48L2JjaS1zaWRlYmFyLWZvb3Rlcj5cblxuXG4gICAgPGJjaS1oZWFkZXI+XG4gICAgPC9iY2ktaGVhZGVyPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9iY2ktc2lkZWJhcj5cblxuPC9iY2ktY29udGVudD5cbmAsXG4gIHN0eWxlczogW2AuY29udGVudHtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzphdXRvO2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9YF1cbn0pXG5leHBvcnQgY2xhc3MgQmNpQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBhcHBsaWNhdGlvblRpdGxlID0gJyc7XG4gIEBJbnB1dCgpIHNpZGViYXJMaW5rczogU2lkZWJhck5hdkl0ZW1bXSA9IFtdO1xuICBASW5wdXQoKSBzaWRlYmFyRm9vdGVyTGlua3M6IFNpZGViYXJOYXZJdGVtW10gPSBbXTtcblxuICBwdWJsaWMgbmF2aWdhdGlvbkl0ZW1zID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBicmVhZGNydW1ic1NlcnZpY2U6IEJyZWFkY3J1bWJzU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuc2lkZWJhckxpbmtzIHx8IGNoYW5nZXMuc2lkZWJhckZvb3RlckxpbmtzKSB7XG4gICAgICB0aGlzLm5hdmlnYXRpb25JdGVtcyA9IFsuLi50aGlzLnNpZGViYXJMaW5rcywgLi4udGhpcy5zaWRlYmFyRm9vdGVyTGlua3NdO1xuICAgICAgdGhpcy5icmVhZGNydW1ic1NlcnZpY2Uuc2V0TmF2aWdhdGlvbkl0ZW1zKHRoaXMubmF2aWdhdGlvbkl0ZW1zKTtcbiAgICB9XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJjaUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vYmNpLWhlYWRlci9iY2ktaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY2lDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9iY2ktY29udGVudC9iY2ktY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNpRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9iY2ktZm9vdGVyL2JjaS1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJjaVNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL2JjaS1zaWRlYmFyL2JjaS1zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY2lTaWRlYmFyRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9iY2ktc2lkZWJhci1mb290ZXIvYmNpLXNpZGViYXItZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY2lTaWRlYmFyRXhwYW5kZXJDb21wb25lbnQgfSBmcm9tICcuL2JjaS1zaWRlYmFyLWV4cGFuZGVyL2JjaS1zaWRlYmFyLWV4cGFuZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCY2lMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL2JjaS1sb2FkZXIvYmNpLWxvYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0RXhwYW5zaW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7IEJjaVNpZGViYXJOYXZJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9iY2ktc2lkZWJhci1uYXYtaXRlbS9iY2ktc2lkZWJhci1uYXYtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmNpU2lkZWJhck5hdkxpc3RDb21wb25lbnQgfSBmcm9tICcuL2JjaS1zaWRlYmFyLW5hdi1saXN0L2JjaS1zaWRlYmFyLW5hdi1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYnNNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMubW9kdWxlJztcbmltcG9ydCB7IEJjaUFwcENvbXBvbmVudCB9IGZyb20gJy4vYmNpLWFwcC9iY2ktYXBwLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEZsZXhMYXlvdXRNb2R1bGUsXG4gICAgQnJlYWRjcnVtYnNNb2R1bGUsXG4gICAgLyogQW5ndWxhciBNYXRlcmlhbCAqL1xuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICAvKiBDREsgKi9cbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCY2lIZWFkZXJDb21wb25lbnQsXG4gICAgQmNpQ29udGVudENvbXBvbmVudCxcbiAgICBCY2lGb290ZXJDb21wb25lbnQsXG4gICAgQmNpU2lkZWJhckNvbXBvbmVudCxcbiAgICBCY2lTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICAgIEJjaVNpZGViYXJFeHBhbmRlckNvbXBvbmVudCxcbiAgICBCY2lMb2FkZXJDb21wb25lbnQsXG4gICAgQmNpU2lkZWJhck5hdkl0ZW1Db21wb25lbnQsXG4gICAgQmNpU2lkZWJhck5hdkxpc3RDb21wb25lbnQsXG4gICAgQmNpQXBwQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCY2lIZWFkZXJDb21wb25lbnQsXG4gICAgQmNpQ29udGVudENvbXBvbmVudCxcbiAgICBCY2lGb290ZXJDb21wb25lbnQsXG4gICAgQmNpU2lkZWJhckNvbXBvbmVudCxcbiAgICBCY2lTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICAgIEJjaVNpZGViYXJFeHBhbmRlckNvbXBvbmVudCxcbiAgICBCY2lMb2FkZXJDb21wb25lbnQsXG4gICAgQmNpU2lkZWJhck5hdkl0ZW1Db21wb25lbnQsXG4gICAgQmNpU2lkZWJhck5hdkxpc3RDb21wb25lbnQsXG4gICAgQmNpQXBwQ29tcG9uZW50LFxuICAgIC8qIENESyAqL1xuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgUG9ydGFsTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQmNpTGF5b3V0TW9kdWxlIHtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2SXRlbSB9IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uUmVzcG9uc2UgfSBmcm9tICcuL05hdmlnYXRpb25SZXNwb25zZSc7XG5pbXBvcnQgeyBDT1JFX0NPTkZJRyB9IGZyb20gJy4uL2NvcmUtY29uZmlndXJhdGlvbi9jb3JlLWNvbmZpZy50b2tlbic7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vY29yZS1jb25maWd1cmF0aW9uL2NvcmUtY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblNlcnZpY2Uge1xuICBzaWRlYmFyTGlua3M6IFNpZGViYXJOYXZJdGVtW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBASW5qZWN0KENPUkVfQ09ORklHKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZykge1xuICB9XG5cbiAgZ2V0TmF2aWdhdGlvbkl0ZW1zKCk6IE9ic2VydmFibGU8U2lkZWJhck5hdkl0ZW1bXT4ge1xuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5lbmRwb2ludE5hdmlnYXRpb24pIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSB0aGlzLmxvY2F0aW9uLnByZXBhcmVFeHRlcm5hbFVybCh0aGlzLmNvbmZpZy5lbmRwb2ludE5hdmlnYXRpb24pO1xuXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldChub3JtYWxpemVkVXJsKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKGxpbmtzOiBOYXZpZ2F0aW9uUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChsaW5rcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgIHRoaXMuc2lkZWJhckxpbmtzID0gbGlua3M7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNpZGViYXJMaW5rcyA9IGxpbmtzLnJlc3VsdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaWRlYmFyTGlua3M7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRocm93RXJyb3IoJ05hdmlnYXRpb25TZXJ2aWNlOiBubyBlbmRwb2ludE5hdmlnYXRpb24gcHJvdmlkZWQgaW4gQ09SRV9DT05GSUcnKTtcbiAgICB9XG4gIH1cblxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IFNpZGViYXJOYXZJdGVtIH0gZnJvbSAnLi4vbGF5b3V0JztcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25SZXNwb25zZSB7XG4gIHJlc3VsdHM6IFNpZGViYXJOYXZJdGVtW107XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1zaWRlLXBhbmVsJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2lkZS1wYW5lbFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy5zaWRlLXBhbmVse3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI1MHB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47dG9wOjA7cmlnaHQ6MTAwcHg7bWF4LWhlaWdodDoxMDAlO2hlaWdodDoxMDAlfWBdXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1maWx0ZXItcGFuZWwnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJmaWx0ZXItcGFuZWwtb3V0ZXJcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8uZmlsdGVyLXBhbmVsLW91dGVye2JvcmRlcjoxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCAxMHB4O21pbi1oZWlnaHQ6NjBweDtsaW5lLWhlaWdodDo1MHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktc2lkZS1wYW5lbC1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPCEtLTxkaXYgY2xhc3M9XCJzaWRlLXBhbmVsLWl0ZW1cIj5cbiAgPGg0Pnt7IHRpdGxlIH19PC9oND5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+LS0+XG48bWF0LWNhcmQgY2xhc3M9XCJzaWRlLXBhbmVsLWl0ZW1cIj5cbiAgPG1hdC1jYXJkLWhlYWRlciBjbGFzcz1cImZpeGVkLWZsZXgtaXRlbVwiPlxuICAgIDxtYXQtY2FyZC10aXRsZT48aDU+e3sgdGl0bGUgfX08L2g1PjwvbWF0LWNhcmQtdGl0bGU+XG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxuICA8bWF0LWNhcmQtY29udGVudCBjbGFzcz1cInNjcm9sbC1jb250YWluZXItdmVydGljYWxcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi86aG9zdHttYXJnaW46MTVweCAwO292ZXJmbG93OmhpZGRlbjtkaXNwbGF5OmZsZXh9Omhvc3QuZml4ZWQtZmxleC1pdGVte2ZsZXg6MCAwIGF1dG99LmZpeGVkLWZsZXgtaXRlbXtmbGV4OjAgMCBhdXRvfS5zaWRlLXBhbmVsLWl0ZW17ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4OjEgMSBhdXRvfS5zY3JvbGwtY29udGFpbmVyLXZlcnRpY2Fse292ZXJmbG93LXk6YXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlUGFuZWxJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpeGVkLWZsZXgtaXRlbScpXG4gIEBJbnB1dCgpIGZpeGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1jb250ZW50LXctc2lkZS1wYW5lbCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlczogW2A6aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRXU2lkZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JjaUxvYWRpbmdTcGlubmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ1NwaW5uZXJEaXJlY3RpdmUge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubG9hZGluZycpIEBJbnB1dCgpIGJjaUxvYWRpbmdTcGlubmVyID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLXRpbGUnLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48ZGl2IGNsYXNzPVwidGlsZVwiIFtuZ0NsYXNzXT1cInsnYWRkLXRpbGUnOiBhZGRUaWxlfVwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIxNnB4XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cbiAgPGRpdiBjbGFzcz1cInRpbGUtaWNvblwiPlxuICAgIDxpIGNsYXNzPVwiQm9zY2gtSWMge3sgaWNvbk5hbWUgfHwgJ0Jvc2NoLUljLWFkZCcgfX1cIj48L2k+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidGlsZS1kZXRhaWxzXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwiY2VudGVyIHN0YXJ0XCI+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgKm5nSWY9XCIhYWRkVGlsZVwiIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAge3sgZGVzY3JpcHRpb24gfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiAqbmdJZj1cIiFhZGRUaWxlXCIgY2xhc3M9XCJhY3Rpb25zXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBzdGFydFwiPlxuICAgICAgPGRpdj48YSBjbGFzcz1cImJ1dHRvbi1saW5rXCI+e3sgZGV0YWlsc0J1dHRvbkxhYmVsIH19PC9hPjwvZGl2PlxuXG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBocmVmPVwiI1wiICpuZ0lmPWNhbkV4ZWN1dGVBY3Rpb24gKGNsaWNrKT1cImV4ZWN1dGVBY3Rpb24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibWF0LWljb24tYnV0dG9uIEJvc2NoLUljIHt7YWN0aW9uSWNvbk5hbWV9fVwiPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8udGlsZXttYXJnaW4tYm90dG9tOjE2cHg7YmFja2dyb3VuZC1jb2xvcjojZWZlZmYwO3BhZGRpbmc6MCAxNnB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDo0MDBweDtoZWlnaHQ6MTUwcHg7Y29sb3I6IzAwMDt0cmFuc2l0aW9uOmFsbCAuMjVzIGVhc2V9LnRpbGU6Zm9jdXMsLnRpbGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZGZkZmUwO2N1cnNvcjpwb2ludGVyfS50aWxlOmZvY3VzIC50aWxlLWljb24gaSwudGlsZTpob3ZlciAudGlsZS1pY29uIGl7Y29sb3I6I2JmYzBjMn0udGlsZSAudGlsZS1pY29ue2FsaWduLXNlbGY6Y2VudGVyfS50aWxlIC50aWxlLWljb24gaXtmb250LXNpemU6ODBweDtjb2xvcjojY2ZkMGQxfS50aWxlIC50aWxlLWRldGFpbHN7d2lkdGg6MTAwJX0udGlsZSAudGlsZS1kZXRhaWxzIC50aXRsZXtmb250LXNpemU6MjBweDt3aWR0aDoyNjBweDt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztvdmVyZmxvdzpoaWRkZW59LnRpbGUgLnRpbGUtZGV0YWlscyAuZGVzY3JpcHRpb257bWFyZ2luOjRweCAwO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjE2cHg7bWF4LWhlaWdodDozMnB4O2hlaWdodDozMnB4O292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfS50aWxlIC50aWxlLWRldGFpbHMgLmFjdGlvbnN7bWFyZ2luLWJvdHRvbTotOHB4O3dpZHRoOjEwMCV9LnRpbGUgLnRpbGUtZGV0YWlscyAuYWN0aW9ucyAuYnV0dG9uLWxpbmt7cG9zaXRpb246cmVsYXRpdmU7Zm9udC1zaXplOjEycHg7cGFkZGluZzowOy13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZH0udGlsZSAudGlsZS1kZXRhaWxzIC5hY3Rpb25zIC5idXR0b24tbGluazphZnRlcntmb250LXNpemU6MTJweDttYXJnaW4tbGVmdDoycHh9LnRpbGUgLnRpbGUtZGV0YWlscyAuYWN0aW9ucyAubWF0LWljb24tYnV0dG9ue2ZvbnQtc2l6ZToyNHB4O2NvbG9yOiM1MjVmNmJ9LnRpbGUuYWRkLXRpbGV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojYThhZmI1O2JvcmRlcjoxcHggc29saWQgI2JmYzBjMjtmb250LXNpemU6MjBweH0udGlsZS5hZGQtdGlsZSAudGlsZS1pY29uIGl7Zm9udC1zaXplOjQ4cHh9LnRpbGUuYWRkLXRpbGUgLnRpbGUtZGV0YWlscywudGlsZS5hZGQtdGlsZSAudGlsZS1kZXRhaWxzIC50aXRsZXt3aWR0aDphdXRvfS50aWxlLmFkZC10aWxlOmhvdmVye2NvbG9yOiMwMDA7YmFja2dyb3VuZC1jb2xvcjojZjdmN2Y3O2JvcmRlcjoxcHggc29saWQgI2RmZGZlMDtvcGFjaXR5Oi43NTtjdXJzb3I6cG9pbnRlcn0udGlsZS5hZGQtdGlsZTpob3ZlciAudGlsZS1pY29uIGl7Y29sb3I6IzUyNWY2Yn1gXSxcbn0pXG5leHBvcnQgY2xhc3MgQmNpVGlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRldGFpbHNCdXR0b25MYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBhZGRUaWxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFjdGlvbkljb25OYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbkV4ZWN1dGVBY3Rpb246IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBhY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIGV4ZWN1dGVBY3Rpb24oJGV2ZW50OiBFdmVudCkge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmFjdGlvbi5lbWl0KG51bGwpO1xuICB9XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1jb250ZW50LXNpZGViYXInLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bWF0LXNpZGVuYXYtY29udGFpbmVyIHN0eWxlPVwid2lkdGg6IDMwMHB4XCI+XG4gIDxtYXQtc2lkZW5hdiAjc2lkZW5hdiBbcG9zaXRpb25dPVwicG9zaXRpb25cIiBbbW9kZV09XCJtb2RlXCIgW29wZW5lZF09XCJvcGVuZWRcIiBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvbWF0LXNpZGVuYXY+XG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLzpob3N0e2Rpc3BsYXk6ZmxleDtib3JkZXItd2lkdGg6MCAwIDAgMXB4O2JvcmRlci1jb2xvcjojZGZkZmUwO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjB9bWF0LXNpZGVuYXZ7d2lkdGg6MzAwcHg7cGFkZGluZzo1cHggMTBweH06Om5nLWRlZXAgYmNpLWNvbnRlbnQtc2lkZWJhci1pdGVtOmZpcnN0LWNoaWxke3BhZGRpbmctdG9wOjB9OjpuZy1kZWVwIGJjaS1jb250ZW50LXNpZGViYXItaXRlbTpsYXN0LWNoaWxke3BhZGRpbmctYm90dG9tOjVweDtib3JkZXItYm90dG9tOm5vbmV9YF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHBvc2l0aW9uID0gJ2VuZCc7XG4gIEBJbnB1dCgpIG1vZGUgPSAncHVzaCc7XG4gIEBJbnB1dCgpIG9wZW5lZCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWNvbnRlbnQtc2lkZWJhci1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPG1hdC1jYXJkIGNsYXNzPVwiY29udGVudC1zaWRlYmFyLWl0ZW1cIj5cbiAgPG1hdC1jYXJkLWhlYWRlciBjbGFzcz1cImZpeGVkLWZsZXgtaXRlbVwiPlxuICAgIDxtYXQtY2FyZC10aXRsZT48aDU+e3sgdGl0bGUgfX08L2g1PjwvbWF0LWNhcmQtdGl0bGU+XG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxuICA8bWF0LWNhcmQtY29udGVudCBjbGFzcz1cInNjcm9sbC1jb250YWluZXItdmVydGljYWxcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi86aG9zdHtwYWRkaW5nOjEwcHggNXB4IDI1cHg7b3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6ZmxleDtib3JkZXItd2lkdGg6MCAwIDFweDtib3JkZXItY29sb3I6I2RmZGZlMDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czowfTpob3N0LmZpeGVkLWZsZXgtaXRlbXtmbGV4OjAgMCBhdXRvfS5maXhlZC1mbGV4LWl0ZW17ZmxleDowIDAgYXV0b30uY29udGVudC1zaWRlYmFyLWl0ZW17ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4OjEgMSBhdXRvO3BhZGRpbmc6MH0uc2Nyb2xsLWNvbnRhaW5lci12ZXJ0aWNhbHtvdmVyZmxvdy15OmF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFNpZGViYXJJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5maXhlZC1mbGV4LWl0ZW0nKVxuICBASW5wdXQoKSBmaXhlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWNvbW1hbmRiYXInLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bWF0LXRvb2xiYXI+XG4gIDxtYXQtdG9vbGJhci1yb3c+XG4gICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICA8IS0tIEl0ZW1jb3VudCAtLT5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZW50cnktY291bnRcIiBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkSXRlbUNvdW50XCIgKm5nSWY9XCJzZWxlY3RlZEl0ZW1Db3VudCB8fCBpdGVtQ291bnQgPiAtMVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRJdGVtQ291bnRcIj57e3NlbGVjdGVkSXRlbUNvdW50fX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkSXRlbUNvdW50ICYmIGl0ZW1Db3VudCA+IC0xXCI+IG9mIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbUNvdW50ID4gLTFcIj57e2l0ZW1Db3VudH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nUGx1cmFsXT1cIihpdGVtQ291bnQgPiAtMSA/IGl0ZW1Db3VudCA6IHNlbGVjdGVkSXRlbUNvdW50KVwiPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ1BsdXJhbENhc2U9XCJvbmVcIj4gZW50cnk8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ1BsdXJhbENhc2U9XCJvdGhlclwiPiBlbnRyaWVzPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3NwYW4+XG5cbiAgICAgIDwhLS0gU2VhcmNoYmFyIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1hbmRiYXItc2VhcmNoLWZpZWxkXCIgKm5nSWY9XCJzaG93U2VhcmNoXCI+XG4gICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2VhcmNoRm9ybVwiPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmbG9hdExhYmVsPVwibmV2ZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIChrZXl1cC5lbnRlcik9XCJzZWFyY2hTdWJtaXQoKVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gdHlwZT1cImJ1dHRvblwiIG1hdFN1ZmZpeCAoY2xpY2spPVwic2VhcmNoU3VibWl0KClcIj5cbiAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwidG9vbGJhci1pbnB1dC1pY29uXCIgZm9udEljb249XCJCb3NjaC1JYy1zZWFyY2hcIj48L21hdC1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIElubGluZSBGaWx0ZXJzIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYmNpLWNvbW1hbmRiYXItaW5saW5lZmlsdGVyc1wiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gUXVpY2tmaWx0ZXJzIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYmNpLWNvbW1hbmRiYXItcXVpY2tmaWx0ZXJzXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBGaWx0ZXIgLS0+XG4gICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICA8YmNpLWNvbW1hbmRiYXItYnV0dG9uIFtyZW5kZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic2hvd0ZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJCb3NjaC1JYy1maWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY29tbWFuZGJhci1idXR0b24tYWN0aXZlXT1cImZpbHRlckNvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbGlja0ZpbHRlci5lbWl0KClcIj5cbiAgICAgICAgRmlsdGVyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWx0ZXJDb3VudFwiPiAoe3tmaWx0ZXJDb3VudH19KTwvbmctY29udGFpbmVyPlxuICAgICAgPC9iY2ktY29tbWFuZGJhci1idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIFNvcnQgLS0+XG4gICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICA8YmNpLWNvbW1hbmRiYXItYnV0dG9uIFtyZW5kZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic2hvd1NvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwie3tzb3J0SWNvbn19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tTb3J0LmVtaXQoKVwiPlxuICAgICAgICBTb3J0XG4gICAgICA8L2JjaS1jb21tYW5kYmFyLWJ1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gU3BhY2VyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJmaWxsLXNwYWNlXCI+PC9kaXY+XG5cbiAgICA8IS0tIEFjdGlvbnMgLS0+XG4gICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJiY2ktY29tbWFuZGJhci1hY3Rpb25zXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L21hdC10b29sYmFyLXJvdz5cbjwvbWF0LXRvb2xiYXI+XG48bmctY29udGVudCBzZWxlY3Q9XCJiY2ktY29tbWFuZGJhci1hY3RpdmUtZmlsdGVyc1wiPjwvbmctY29udGVudD5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovOmhvc3QuYWN0aXZlIG1hdC10b29sYmFye2JhY2tncm91bmQ6cmdiYSgwLDE0MiwyMDcsLjE1KX0uZmlsbC1zcGFjZXtmbGV4OjEgMSBhdXRvfS5ncm91cHtkaXNwbGF5OmlubGluZS1mbGV4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZ3JvdXArLmdyb3Vwe21hcmdpbi1sZWZ0OjEwcHh9Omhvc3QgOjpuZy1kZWVwIC5jb21tYW5kYmFyLWl0ZW17ZGlzcGxheTppbmxpbmUtZmxleDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmVudHJ5LWNvdW50LmFjdGl2ZSwuZW50cnktY291bnQuYWN0aXZlLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b24sOmhvc3QgOjpuZy1kZWVwIC5jb21tYW5kYmFyLWJ1dHRvbi1hY3RpdmUsOmhvc3QgOjpuZy1kZWVwIC5jb21tYW5kYmFyLWJ1dHRvbi1hY3RpdmUubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbntjb2xvcjojMDA4ZWNmfS5tYXQtdG9vbGJhcntmb250LXNpemU6MTRweH0ubWF0LXRvb2xiYXIgLmVudHJ5LWNvdW50e21hcmdpbi1yaWdodDozMnB4O3BhZGRpbmc6NHB4IDB9Lm1hdC10b29sYmFyIC5jb21tYW5kYmFyLXNlYXJjaC1maWVsZCA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtdG9vbGJhciAuY29tbWFuZGJhci1zZWFyY2gtZmllbGQgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCAubWF0LWVtcHR5LC5tYXQtdG9vbGJhciAuY29tbWFuZGJhci1zZWFyY2gtZmllbGQgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtZW1wdHl7Y29sb3I6IzAwMH0ubWF0LXRvb2xiYXIgLmNvbW1hbmRiYXItc2VhcmNoLWZpZWxkIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQsLm1hdC10b29sYmFyIC5jb21tYW5kYmFyLXNlYXJjaC1maWVsZCA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCwubWF0LXRvb2xiYXIgLmNvbW1hbmRiYXItc2VhcmNoLWZpZWxkIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtc3VmZml4e2JhY2tncm91bmQ6I2ZmZn0ubWF0LXRvb2xiYXIgLmNvbW1hbmRiYXItc2VhcmNoLWZpZWxkIDo6bmctZGVlcCAudG9vbGJhci1pbnB1dC1maWVsZHtib3JkZXI6bm9uZTtvdXRsaW5lOjA7YmFja2dyb3VuZDowIDA7bWFyZ2luLWJvdHRvbTowfS5tYXQtdG9vbGJhciAuY29tbWFuZGJhci1zZWFyY2gtZmllbGQgOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7YmFja2dyb3VuZC1pbWFnZTpub25lfS5tYXQtdG9vbGJhciAuY29tbWFuZGJhci1zZWFyY2gtZmllbGQgOjpuZy1kZWVwIC50b29sYmFyLWlucHV0LWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZzo0cHggMTJweCAwO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNiZmMwYzJ9Lm1hdC10b29sYmFyIC5jb21tYW5kYmFyLXNlYXJjaC1maWVsZCA6Om5nLWRlZXAgLnRvb2xiYXItaW5wdXQtY29udGFpbmVyIGJ1dHRvbnt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9YF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tbWFuZGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgbWF0Y2hlZCAvIHNob3duIGl0ZW1zXG4gICAqL1xuICBASW5wdXQoKSBpdGVtQ291bnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHNlbGVjdGVkIGl0ZW1zXG4gICAqL1xuICBASW5wdXQoKSBzZWxlY3RlZEl0ZW1Db3VudDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgZXZlbnQgZW1pdHRlciB3aGljaCBwcm9wYWdhdGVzIHRoZSB0ZXh0IHZhbHVlIG9mIHRoZSBzZWFyY2gtYm94IHRvIHN1Ym9yZGluYXRlZCBjb21wb25lbnRzXG4gICAqL1xuICBAT3V0cHV0KCkgc2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIFN1YmplY3QgYmVpbmcgdXNlZCB0byBzZWFyY2ggaW1tZWRpYXRlbHlcbiAgICovXG4gIHN1Ym1pdFNlYXJjaCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICAvKipcbiAgICogVGhlIGV2ZW50IGVtaXR0ZXIgd2hpY2ggcHJvcGFnYXRlcyB0aGUgY2xpY2stZXZlbnQgb24gdGhlIGZpbHRlci1pY29uIHRvIHN1cGVyb3JkaW5hdGVkIGNvbXBvbmVudHNcbiAgICovXG4gIEBPdXRwdXQoKSBjbGlja0ZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogVGhlIGV2ZW50IGVtaXR0ZXIgd2hpY2ggcHJvcGFnYXRlcyB0aGUgY2xpY2stZXZlbnQgb24gdGhlIHNvcnQtaWNvbiB0byBzdXBlcm9yZGluYXRlZCBjb21wb25lbnRzXG4gICAqL1xuICBAT3V0cHV0KCkgY2xpY2tTb3J0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIHNlYXJjaC1ib3ggaXMgYmVpbmcgZGlzcGxheWVkXG4gICAqL1xuICBASW5wdXQoKSBzaG93U2VhcmNoID0gdHJ1ZTtcblxuICAvKipcbiAgICogRmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBmaWx0ZXItaWNvbiBpcyBiZWluZyBkaXNwbGF5ZWRcbiAgICovXG4gIEBJbnB1dCgpIHNob3dGaWx0ZXIgPSBmYWxzZTtcblxuICAvKipcbiAgICogRmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBzb3J0LWljb24gaXMgYmVpbmcgZGlzcGxheWVkXG4gICAqL1xuICBASW5wdXQoKSBzaG93U29ydCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJbnRlZ2VyIHZhbHVlIHRvIGRpc3BsYXkgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBGaWx0ZXJzXG4gICAqL1xuICBASW5wdXQoKSBmaWx0ZXJDb3VudCA9IDA7XG5cbiAgLyoqXG4gICAqIElucHV0IHBhcmFtZXRlciB0byBtYWtlIHRoZSBmaWx0ZXItaWNvbiBjb25maWd1cmFibGUgZnJvbSBzdXBlcm9yZGluYXRlZCBjb21wb25lbnRzXG4gICAqL1xuICBASW5wdXQoKSBzb3J0SWNvbiA9ICdCb3NjaC1JYy1zb3J0LWFscGhhYmV0aWNhbGx5JztcblxuICBzZWFyY2hGb3JtOiBGb3JtR3JvdXA7XG4gIHByaXZhdGUgY29tcG9uZW50RGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLmNyZWF0ZVNlYXJjaEZvcm0oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIG1lcmdlKHRoaXMuc3VibWl0U2VhcmNoLFxuICAgICAgdGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzLnNlYXJjaC52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCksXG4gICAgICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgICAgIClcbiAgICApLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKHNlYXJjaFN0cmluZyA9PiB0aGlzLnNlYXJjaC5lbWl0KHNlYXJjaFN0cmluZykpO1xuICB9XG5cbiAgc2VhcmNoU3VibWl0KCkge1xuICAgIHRoaXMuc3VibWl0U2VhcmNoLm5leHQodGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzLnNlYXJjaC52YWx1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQubmV4dCgpO1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVTZWFyY2hGb3JtKCkge1xuICAgIHRoaXMuc2VhcmNoRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgc2VhcmNoOiAnJ1xuICAgIH0pO1xuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYGJjaS1jb21tYW5kYmFyLWl0ZW1gLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bmctdGVtcGxhdGUgI3RlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29tbWFuZGJhci1pdGVtXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG48bmctY29udGFpbmVyICpuZ0lmPVwicmVuZGVyXCI+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBDb21tYW5kYmFySXRlbUNvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIFNldCBpdGVtLWNsYXNzIG9uIGhvc3QgZWxlbWVudCBpZiByZW5kZXJlZCBkaXJlY3RseS5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29tbWFuZGJhci1pdGVtJykgY2xhc3NDb21tYW5kYmFySXRlbSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmVuZGVyIHRoZSBpdGVtIGluLXBsYWNlIGluc3RlYWQgb2YgdXNpbmcgYSB0ZW1wbGF0ZSBvdXRsZXQuXG4gICAqL1xuICBASW5wdXQoKSByZW5kZXIgPSBmYWxzZTtcblxuICAvKipcbiAgICogV2hlbiB0byBoaWRlIHRoZSBpdGVtIGluIGEgc3VibWVudS4gVmFsaWQgdmFsdWVzIGFyZTpcbiAgICogKiBlbXB0eTogYWx3YXlzIGhpZGRlblxuICAgKiAqIGJvb2xlYW46IGhpZGRlbiBpZiB0cnVlLCBzaG93biBvdGhlcndpc2VcbiAgICogKiBub24tZW1wdHkgc3RyaW5nOiBDaGVja2VkIGFnYWluc3QgT2JzZXJ2YWJsZU1lZGlhLmlzQWN0aXZlIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvZmxleC1sYXlvdXQvd2lraS9PYnNlcnZhYmxlTWVkaWEpXG4gICAqICAgICAgICAgICAgICAgICAgICAgZWl0aGVyIHN1cHBvcnRpbmcgY3NzLW1lZGlhLXF1ZXJpZXMgb3IgcHJlZGVmaW5lZCBhbGlhc2VzIGxpa2UgeHMsIGx0LW1kLCBndC1sZy5cbiAgICovXG4gIEBJbnB1dCgpIGhpZGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHJlZmVyZW5jZSB0byB0aGUgaXRlbSdzIHRlbXBsYXRlLlxuICAgKi9cbiAgQFZpZXdDaGlsZCgndGVtcGxhdGUnKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIGZvcndhcmRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGVNZWRpYSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb21tYW5kYmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2l0ZW0vY29tbWFuZGJhci1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1jb21tYW5kYmFyLWFjdGlvbnMnLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48IS0tIEFjdGlvbnMgLS0+XG48bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHZpc2libGVJdGVtc1wiPlxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbT8udGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiaGlkZGVuSXRlbXMubGVuZ3RoID4gMFwiPlxuICA8IS0tIE1vcmUtQWN0aW9ucy1CdXR0b24gLS0+XG4gIDxiY2ktY29tbWFuZGJhci1idXR0b24gW3JlbmRlcl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiQm9zY2gtSWMtc2hvdy1tb3JlLXZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibW9yZSBhY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbbWF0TWVudVRyaWdnZXJGb3JdPVwibW9yZUFjdGlvbnNNZW51XCI+XG4gIDwvYmNpLWNvbW1hbmRiYXItYnV0dG9uPlxuPC9uZy1jb250YWluZXI+XG5cbjwhLS0gTW9yZSBBY3Rpb25zIE1lbnUgLS0+XG48bWF0LW1lbnUgI21vcmVBY3Rpb25zTWVudT1cIm1hdE1lbnVcIiBbY2xhc3NdPVwiJ2NvbW1hbmRiYXItbW9yZS1hY3Rpb24tbWVudSdcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBoaWRkZW5JdGVtc1wiPlxuICAgIDxkaXYgbWF0LW1lbnUtaXRlbT5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtPy50ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbWF0LW1lbnU+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi86aG9zdHtkaXNwbGF5OmluaGVyaXQ7dmVydGljYWwtYWxpZ246aW5oZXJpdH06Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsLmNvbW1hbmRiYXItbW9yZS1hY3Rpb24tbWVudXttaW4td2lkdGg6MH06Om5nLWRlZXAgLmNvbW1hbmRiYXItbW9yZS1hY3Rpb24tbWVudSAubWF0LW1lbnUtaXRlbXtwYWRkaW5nOjJweDtsaW5lLWhlaWdodDoxO2hlaWdodDphdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1hbmRiYXJBY3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBDb21tYW5kYmFySXRlbUNvbXBvbmVudCkpIGl0ZW1zOiBRdWVyeUxpc3Q8Q29tbWFuZGJhckl0ZW1Db21wb25lbnQ+O1xuXG4gIHB1YmxpYyB2aXNpYmxlSXRlbXM6IENvbW1hbmRiYXJJdGVtQ29tcG9uZW50W10gPSBbXTtcbiAgcHVibGljIGhpZGRlbkl0ZW1zOiBDb21tYW5kYmFySXRlbUNvbXBvbmVudFtdID0gW107XG5cbiAgcHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9ic2VydmFibGVNZWRpYTogT2JzZXJ2YWJsZU1lZGlhKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gbGlzdGVuIHRvIGNoYW5nZXMgb2Ygdmlld3BvcnQgc2l6ZVxuICAgIG1lcmdlKHRoaXMub2JzZXJ2YWJsZU1lZGlhLmFzT2JzZXJ2YWJsZSgpLCB0aGlzLml0ZW1zLmNoYW5nZXMpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmlldygpIHtcbiAgICBjb25zdCB2aXNpYmxlID0gW107XG4gICAgY29uc3QgaGlkZGVuID0gW107XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy50cnVlT3JNYXRjaGVzTWVkaWFTdGF0ZShpdGVtLmhpZGUpID8gaGlkZGVuLnB1c2goaXRlbSkgOiB2aXNpYmxlLnB1c2goaXRlbSkpO1xuXG4gICAgdGhpcy52aXNpYmxlSXRlbXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhpZGRlbkl0ZW1zLmxlbmd0aCA9IDA7XG4gICAgaWYgKGhpZGRlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIG5vIG1vcmUtYWN0aW9ucy1tZW51IGZvciBhIHNpbmdsZSBoaWRkZW4gYWN0aW9uXG4gICAgICB0aGlzLnZpc2libGVJdGVtcy5wdXNoKC4uLnRoaXMuaXRlbXMudG9BcnJheSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXNpYmxlSXRlbXMucHVzaCguLi52aXNpYmxlKTtcbiAgICAgIHRoaXMuaGlkZGVuSXRlbXMucHVzaCguLi5oaWRkZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJ1ZU9yTWF0Y2hlc01lZGlhU3RhdGUodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB0aGlzLm9ic2VydmFibGVNZWRpYS5pc0FjdGl2ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tYW5kYmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2l0ZW0vY29tbWFuZGJhci1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYGJjaS1jb21tYW5kYmFyLWJ1dHRvbmAsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxuZy10ZW1wbGF0ZSAjdGVtcGxhdGU+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJjb21tYW5kYmFyLWl0ZW1cIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIl9uZ0NsYXNzXCJcbiAgICAgICAgICBbbmdTdHlsZV09XCJfbmdTdHlsZVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAoY2xpY2spPVwiY2xpY2tFdmVudCgkZXZlbnQpXCI+XG4gICAgPG1hdC1pY29uIFtmb250SWNvbl09XCJpY29uXCI+PC9tYXQtaWNvbj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvYnV0dG9uPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJyZW5kZXJcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy5jb21tYW5kYmFyLWJ1dHRvbi1hY3RpdmUsLmNvbW1hbmRiYXItYnV0dG9uLWFjdGl2ZS5tYXQtaWNvbi1idXR0b24ubWF0LWljb24tYnV0dG9uLDpob3N0LmNvbW1hbmRiYXItYnV0dG9uLWFjdGl2ZSw6aG9zdC5jb21tYW5kYmFyLWJ1dHRvbi1hY3RpdmUubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbntjb2xvcjojMDA4ZWNmfTo6bmctZGVlcCAubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbnt0cmFuc2l0aW9uOi40cztjdXJzb3I6cG9pbnRlcjt3aWR0aDphdXRvO21pbi13aWR0aDo0MHB4fTo6bmctZGVlcCAubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbjpob3Zlcntjb2xvcjojMDA4ZWNmfTo6bmctZGVlcCAubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbi5kaXNhYmxlZCw6Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b246ZGlzYWJsZWR7Y29sb3I6I2E4YWZiNTtjdXJzb3I6bm90LWFsbG93ZWR9OjpuZy1kZWVwIC5tYXQtaWNvbi1idXR0b24ubWF0LWljb24tYnV0dG9uLmRpc2FibGVkOmhvdmVyLDo6bmctZGVlcCAubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbjpkaXNhYmxlZDpob3Zlcntjb2xvcjojYThhZmI1fTo6bmctZGVlcCAubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbiAubWF0LXJpcHBsZXt3aWR0aDo0MHB4fTo6bmctZGVlcCAubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb257bWFyZ2luLWxlZnQ6NHB4O21hcmdpbi1yaWdodDo0cHh9YF0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ29tbWFuZGJhckl0ZW1Db21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbW1hbmRiYXJCdXR0b25Db21wb25lbnQpIH1dXG59KVxuZXhwb3J0IGNsYXNzIENvbW1hbmRiYXJCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBDb21tYW5kYmFySXRlbUNvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIFRoZSBidXR0b25zIGZvbnQtaWNvbi5cbiAgICovXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgYnV0dG9uIHNoYWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGJ1dHRvbidzIGNsaWNrIGV2ZW50IGVtaXR0ZXIuY1xuICAgKi9cbiAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgX25nQ2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4gfCB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgX25nU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBASW5wdXQoKVxuICBzZXQgbmdDbGFzcyh2OiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBba2xhc3M6IHN0cmluZ106IGFueSB9KSB7XG4gICAgdGhpcy5fbmdDbGFzcyA9IHY7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbmdTdHlsZSh2OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fbmdTdHlsZSA9IHY7XG4gIH1cblxuICBjbGlja0V2ZW50KGV2ZW50OiBFdmVudCkge1xuICAgIC8vIG9ubHkgcHJveHkgY2xpY2stZXZlbnQgaWYgdGhlcmUgaXMgYW4gb2JzZXJ2ZXIgZm9yIHRoZSBob3N0J3MgY2xpY2sgZXZlbnRcbiAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgZS5nLiB0aGUgbWF0LW1lbnUgdHJpZ2dlciBidXR0b24gdG8gd29ya1xuICAgIGlmICh0aGlzLmNsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuY2xpY2submV4dChldmVudCk7XG4gICAgfVxuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbWFuZGJhckJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2NvbW1hbmRiYXItYnV0dG9uLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtiY2lDb21tYW5kYmFyQWN0aW9uQWRkXSxbYmNpQ29tbWFuZGJhckFjdGlvbkVkaXRdLFtiY2lDb21tYW5kYmFyQWN0aW9uRGVsZXRlXWAsXG59KVxuZXhwb3J0IGNsYXNzIENvbW1hbmRiYXJCdXR0b25zRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIGljb246IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IENvbW1hbmRiYXJCdXR0b25Db21wb25lbnQpIHtcbiAgfVxuXG4gIEBJbnB1dCgnYmNpQ29tbWFuZGJhckFjdGlvbkFkZCcpXG4gIHNldCBidXR0b25BZGQoXykge1xuICAgIHRoaXMuc2V0SWNvbignQm9zY2gtSWMtYWRkLW91dGxpbmUnKTtcbiAgfVxuXG4gIEBJbnB1dCgnYmNpQ29tbWFuZGJhckFjdGlvbkVkaXQnKVxuICBzZXQgYnV0dG9uRWRpdChfKSB7XG4gICAgdGhpcy5zZXRJY29uKCdCb3NjaC1JYy1lZGl0Jyk7XG4gIH1cblxuICBASW5wdXQoJ2JjaUNvbW1hbmRiYXJBY3Rpb25EZWxldGUnKVxuICBzZXQgYnV0dG9uRGVsZXRlKF8pIHtcbiAgICB0aGlzLnNldEljb24oJ0Jvc2NoLUljLWRlbGV0ZScpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ob3N0Lmljb24gPSB0aGlzLmljb247XG4gIH1cblxuICBwcml2YXRlIHNldEljb24oaWNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5pY29uID0gaWNvbjtcbiAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tYW5kYmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2l0ZW0vY29tbWFuZGJhci1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1jb21tYW5kYmFyLWlubGluZWZpbHRlcicsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxuZy10ZW1wbGF0ZSAjdGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb21tYW5kYmFyLWlubGluZS1maWx0ZXJcIiBbY2xhc3MuY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlXT1cIiFkaXNhYmxlRGVmYXVsdFN0eWxlXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8vKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy5jb21tYW5kYmFyLWlubGluZS1maWx0ZXJ7dmVydGljYWwtYWxpZ246bWlkZGxlfS5jb21tYW5kYmFyLWlubGluZS1maWx0ZXIrLmNvbW1hbmRiYXItaW5saW5lLWZpbHRlcnttYXJnaW4tbGVmdDoxMHB4fS5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwuY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtbGFiZWwgLm1hdC1lbXB0eSwuY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWVtcHR5e2NvbG9yOiMwMDB9LmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLC5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgsLmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeHtiYWNrZ3JvdW5kOiNmZmZ9LmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgaW5wdXQsLmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgaW5wdXQ6Zm9jdXM6ZW5hYmxlZHtiYWNrZ3JvdW5kOiNmZmZ9LmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiMwMDB9LmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6IzAwMH0uY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCA6OnBsYWNlaG9sZGVye2NvbG9yOiMwMDB9LmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojMDAwfS5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4LC5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXRyaWdnZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JhY2tncm91bmQtaW1hZ2U6bm9uZX1gXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDb21tYW5kYmFySXRlbUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29tbWFuZGJhcklubGluZWZpbHRlckNvbXBvbmVudCkgfV1cbn0pXG5leHBvcnQgY2xhc3MgQ29tbWFuZGJhcklubGluZWZpbHRlckNvbXBvbmVudCBleHRlbmRzIENvbW1hbmRiYXJJdGVtQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBkaXNhYmxlRGVmYXVsdFN0eWxlID0gZmFsc2U7XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIGZvcndhcmRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi9pbmxpbmVmaWx0ZXIvY29tbWFuZGJhci1pbmxpbmVmaWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IG1lcmdlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU1lZGlhIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktY29tbWFuZGJhci1pbmxpbmVmaWx0ZXJzJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPGRpdiBmeExheW91dD1cInJvd1wiPlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHZpc2libGVJdGVtc1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtPy50ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtsaW5lLWhlaWdodDo0OHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBDb21tYW5kYmFySW5saW5lZmlsdGVyQ29tcG9uZW50KSkgaXRlbXM6IFF1ZXJ5TGlzdDxDb21tYW5kYmFySW5saW5lZmlsdGVyQ29tcG9uZW50PjtcbiAgcHVibGljIHZpc2libGVJdGVtczogQ29tbWFuZGJhcklubGluZWZpbHRlckNvbXBvbmVudFtdID0gW107XG4gIHB1YmxpYyBoaWRkZW5JdGVtczogQ29tbWFuZGJhcklubGluZWZpbHRlckNvbXBvbmVudFtdID0gW107XG5cbiAgcHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9ic2VydmFibGVNZWRpYTogT2JzZXJ2YWJsZU1lZGlhKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gbGlzdGVuIHRvIGNoYW5nZXMgb2Ygdmlld3BvcnQgc2l6ZVxuICAgIG1lcmdlKHRoaXMub2JzZXJ2YWJsZU1lZGlhLmFzT2JzZXJ2YWJsZSgpLCB0aGlzLml0ZW1zLmNoYW5nZXMsIG9mKHRydWUpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmlldygpIHtcbiAgICBjb25zdCB2aXNpYmxlID0gW107XG4gICAgY29uc3QgaGlkZGVuID0gW107XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy50cnVlT3JNYXRjaGVzTWVkaWFTdGF0ZShpdGVtLmhpZGUpID8gaGlkZGVuLnB1c2goaXRlbSkgOiB2aXNpYmxlLnB1c2goaXRlbSkpO1xuXG4gICAgdGhpcy52aXNpYmxlSXRlbXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhpZGRlbkl0ZW1zLmxlbmd0aCA9IDA7XG4gICAgaWYgKGhpZGRlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIG5vIG1vcmUtYWN0aW9ucy1tZW51IGZvciBhIHNpbmdsZSBoaWRkZW4gYWN0aW9uXG4gICAgICB0aGlzLnZpc2libGVJdGVtcy5wdXNoKC4uLnRoaXMuaXRlbXMudG9BcnJheSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXNpYmxlSXRlbXMucHVzaCguLi52aXNpYmxlKTtcbiAgICAgIHRoaXMuaGlkZGVuSXRlbXMucHVzaCguLi5oaWRkZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJ1ZU9yTWF0Y2hlc01lZGlhU3RhdGUodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB0aGlzLm9ic2VydmFibGVNZWRpYS5pc0FjdGl2ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiY2lDb21tYW5kYmFyUXVpY2tpbHRlcnNdLCBiY2ktY29tbWFuZGJhci1xdWlja2ZpbHRlcnMnLFxufSlcbmV4cG9ydCBjbGFzcyBDb21tYW5kYmFyUXVpY2tmaWx0ZXJzRGlyZWN0aXZlIHtcblxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbYmNpVG9nZ2xlQnV0dG9uXWBcbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlQnV0dG9uRGlyZWN0aXZlIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb21tYW5kYmFyLWJ1dHRvbi1hY3RpdmUnKVxuICBASW5wdXQoKVxuICBhY3RpdmUgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgdG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgICB0aGlzLnRvZ2dsZS5lbWl0KHRoaXMuYWN0aXZlKTtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktY29tbWFuZGJhci1hY3RpdmUtZmlsdGVycycsXG4gIHRlbXBsYXRlOiBgPG1hdC1jaGlwLWxpc3Q+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbWF0LWNoaXAtbGlzdD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tYW5kYmFyQWN0aXZlRmlsdGVyc0NvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1jaGlwJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPG1hdC1jaGlwIFtyZW1vdmFibGVdPVwicmVtb3ZhYmxlXCIgW25nQ2xhc3NdPVwieyAnbm90LXJlbW92YWJsZSc6ICFyZW1vdmFibGUgfVwiIChyZW1vdmVkKT1cInJlbW92ZWQubmV4dCgkZXZlbnQpXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPG1hdC1pY29uICpuZ0lmPVwicmVtb3ZhYmxlXCIgbWF0Q2hpcFJlbW92ZSBmb250SWNvbj1cIkJvc2NoLUljLWFib3J0XCIgYXJpYS1sYWJlbD1cInJlbW92ZVwiPjwvbWF0LWljb24+XG48L21hdC1jaGlwPlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovOmhvc3R7cGFkZGluZzowfTpob3N0IC5tYXQtY2hpcC5ub3QtcmVtb3ZhYmxle2JhY2tncm91bmQtY29sb3I6IzdkODc5MDtiYWNrZ3JvdW5kLWltYWdlOm5vbmU7Y29sb3I6I2ZmZn1gXSxcbn0pXG5leHBvcnQgY2xhc3MgQmNpQ2hpcENvbXBvbmVudCB7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5iY2ktY2hpcCcpIHRydWU7XG5cbiAgLyoqXG4gICAqIFRoZSBldmVudCBlbWl0dGVyIHRvIHByb3BhZ2F0ZSB0aGUgcmVtb3ZhbC1ldmVudFxuICAgKi9cbiAgQE91dHB1dCgpIHJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIHJlbW92ZS1pY29uIGlzIGJlaW5nIGRpc3BsYXllZFxuICAgKi9cbiAgQElucHV0KCkgcmVtb3ZhYmxlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hc3RlckRldGFpbFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9tYXN0ZXItZGV0YWlsLXZpZXcuY29tcG9uZW50JztcblxuLyoqXG4gKiBUaGUgZGV0YWlsIHBhcnQgb2YgdGhlIHtAbGluayBNYXN0ZXJEZXRhaWxWaWV3Q29tcG9uZW50fVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktZGV0YWlsLXZpZXcnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBEZXRhaWxWaWV3Q29tcG9uZW50IHtcblxuICAvLyBUT0RPOiBmaW5kIGEgc29sdXRpb24gc28gdGhhdCA8YmNpLXBhZ2UtY29udGVudD4gY2FuIGJlIHVzZWQgaW4gZGVtby9zb2x1dGlvbiBpbnN0ZWFkIG9mIGlzUGFkZGVkIGFuZCBzdGlsbCB0aGUgc2lkZWJhciBpcyB3b3JraW5nXG4gIEBJbnB1dCgpIHB1YmxpYyBpc1BhZGRlZCA9IHRydWU7XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGVNZWRpYSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNYXRTaWRlbmF2IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0LCB0YWtlLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1vZGFsV2luZG93U2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvbW9kYWwtd2luZG93L21vZGFsLXdpbmRvdy5zZXJ2aWNlJztcbmltcG9ydCB7IERldGFpbFZpZXdDb21wb25lbnQgfSBmcm9tICcuL2RldGFpbC9kZXRhaWwtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFzdGVyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbWFzdGVyL21hc3Rlci12aWV3LmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIE1hc3RlckRldGFpbENvbXBvbmVudCBjb250YWlucyBhIHtAbGluayBNYXN0ZXJWaWV3Q29tcG9uZW50fSBhbmQgYSB7QGxpbmsgRGV0YWlsVmlld0NvbXBvbmVudH0uXG4gKlxuICogSW4gdGhlIHtAbGluayBNYXN0ZXJWaWV3Q29tcG9uZW50fSB0eXBpY2FsbHkgYSBjb2xsZWN0aW9uIG9mIG9iamVjdHMgaXMgc2hvd24uXG4gKlxuICogQnkgY2xpY2sgb24gb25lIG9mIHRoZXNlIG9iamVjdHMgYSB7QGxpbmsgRGV0YWlsVmlld0NvbXBvbmVudH0gaXMgbWFkZSB2aXNpYmxlIGFuZCBzaG93cyB0aGUgZGV0YWlscyBvZiB0aGUgc2VsZWN0ZWQgb2JqZWN0LlxuICpcbiAqIHRvIGZpbGwgdGhlIHtAbGluayBNYXN0ZXJWaWV3Q29tcG9uZW50fSBhbmQgdGhlIHtAbGluayBEZXRhaWxWaWV3Q29tcG9uZW50fSB0aGF0IGlzIHNob3duIHdoZW4gb25lIG9mIHRoZSBvYmplY3RzIGlzIGNsaWNrZWQuXG4gKlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktbWFzdGVyLWRldGFpbC12aWV3JyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPG5nLXRlbXBsYXRlICNtYXN0ZXJWaWV3PlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJiY2ktbWFzdGVyLXZpZXdcIj48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2RldGFpbFZpZXc+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImJjaS1kZXRhaWwtdmlld1wiPjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+XG5cbjxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPG1hdC1zaWRlbmF2LWNvbnRlbnQgY2xhc3M9XCJjb250YWluZXItY29udGVudFwiPlxuICAgIDwhLS0gTWFzdGVyIC0tPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtYXN0ZXJWaWV3XCI+PC9uZy1jb250YWluZXI+XG4gIDwvbWF0LXNpZGVuYXYtY29udGVudD5cblxuICA8bWF0LXNpZGVuYXYgKm5nSWY9XCIhdXNlRGlhbG9nXCJcbiAgICAgICAgICAgICAgIGlkPVwiZGV0YWlsQ29udGFpbmVyXCJcbiAgICAgICAgICAgICAgIFtvcGVuZWRdPVwiaXNEZXRhaWxzU2hvd25cIlxuICAgICAgICAgICAgICAgW2Rpc2FibGVDbG9zZV09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAoY2xvc2VkKT1cImRldGFpbHNDbG9zZWQoKVwiXG4gICAgICAgICAgICAgICBbbW9kZV09XCJ1c2VTbGlkZW92ZXJTaWRlYmFyTW9kZSA/ICdvdmVyJyA6ICdzaWRlJ1wiXG4gICAgICAgICAgICAgICBwb3NpdGlvbj1cImVuZFwiXG4gICAgICAgICAgICAgICBjbGFzcz1cInNpZGViYXItY29udGVudFwiXG4gICAgICAgICAgICAgICBbY2xhc3MuY29udGFpbmVyLWNvbnRlbnQtcGFkZGVkXT1cImRldGFpbFZpZXdDb21wb25lbnQ/LmlzUGFkZGVkXCJcbiAgICAgICAgICAgICAgIFtjbGFzcy5zaWRlYmFyLWZ1bGwtc2l6ZV09XCJ1c2VTbGlkZW92ZXJTaWRlYmFyTW9kZVwiXG4gICAgICAgICAgICAgICBbY2xhc3Muc2lkZWJhci12aXNpYmxlXT1cIiF1c2VTbGlkZW92ZXJTaWRlYmFyTW9kZVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkZXRhaWxWaWV3XCI+PC9uZy1jb250YWluZXI+XG4gIDwvbWF0LXNpZGVuYXY+XG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLzpob3N0e2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbn0uY29udGFpbmVye3dpZHRoOjEwMCU7aGVpZ2h0OmluaGVyaXR9LmNvbnRhaW5lci1jb250ZW50LXBhZGRlZHtwYWRkaW5nOjMycHh9bWF0LXNpZGVuYXYtY29udGFpbmVyIC5tYXQtZHJhd2VyLWNvbnRlbnQuY29udGFpbmVyLWNvbnRlbnR7b3ZlcmZsb3c6YXV0b31tYXQtc2lkZW5hdi1jb250YWluZXIgLnNpZGViYXItY29udGVudHtvdmVyZmxvdy14OmhpZGRlbn0uc2lkZWJhci1mdWxsLXNpemV7bGVmdDowO2JvcmRlci1sZWZ0OnVuc2V0fS5zaWRlYmFyLXZpc2libGV7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiZmMwYzJ9YF1cbn0pXG5leHBvcnQgY2xhc3MgTWFzdGVyRGV0YWlsVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogdHJ1ZSB3aGVuIHRoZSBkZXRhaWxzIHZpZXcgaXMgc2hvd24gYXMgZGlhbG9nIG9yIGFzIHNpZGViYXJcbiAgICovXG4gIHB1YmxpYyBpc0RldGFpbHNTaG93bjogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFRoZSB7QGxpbmsgRGV0YWlsVmlld0NvbXBvbmVudH0gY2FuIGJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG5leHQgdG8gdGhlIHtAbGluayBNYXN0ZXJWaWV3Q29tcG9uZW50fSBvciBhcyBhIHNsaWRlb3V0L3NsaWRlb3ZlciBhYm92ZSBpdC5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyB1c2VTbGlkZW92ZXJTaWRlYmFyTW9kZTogYm9vbGVhbjtcbiAgLyoqXG4gICAqIHJlZmVyZW5jZXMgdGhlIHtAbGluayBEZXRhaWxWaWV3Q29tcG9uZW50fSBzaG93biBpbiB0aGUgc2lkZWJhclxuICAgKi9cbiAgQENvbnRlbnRDaGlsZChEZXRhaWxWaWV3Q29tcG9uZW50KSBwdWJsaWMgZGV0YWlsVmlld0NvbXBvbmVudDogRGV0YWlsVmlld0NvbXBvbmVudDtcblxuICAvKipcbiAgICogd2hlbiB0cnVlIHRoZSBkZXRhaWxzIHZpZXcgaXMgc2hvd24gYXMgZGlhbG9nXG4gICAqIGVsc2UgaXQgaXMgc2hvd24gYXMgbW9kYWwgZGlhbG9nXG4gICAqL1xuICBwcml2YXRlIF91c2VEaWFsb2cgPSBmYWxzZTtcblxuICBwcml2YXRlIGRldGFpbHNEaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEZXRhaWxWaWV3Q29tcG9uZW50PjtcbiAgLyoqXG4gICAqIHJlZmVyZW5jZXMgdGhlIHRlbXBsYXRlIGNvbnRhaW5pbmcgdGhlIHtAbGluayBEZXRhaWxWaWV3Q29tcG9uZW50fSBvZiB0aGlzIE1hc3RlckRldGFpbFZpZXdDb21wb25lbnRcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2RldGFpbFZpZXcnKSBwcml2YXRlIGRldGFpbHNWaWV3OiBUZW1wbGF0ZVJlZjxEZXRhaWxWaWV3Q29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZChNYXRTaWRlbmF2KSBwcml2YXRlIHNpZGVuYXY6IE1hdFNpZGVuYXY7XG4gIHByaXZhdGUgY2xvc2VkJDogU3ViamVjdDx1bmRlZmluZWQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgY2xvc2VkID0gdGhpcy5jbG9zZWQkLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIGNvbXBvbmVudERlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFdpbmRvd1NlcnZpY2U6IE1vZGFsV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBvYnNlcnZhYmxlTWVkaWE6IE9ic2VydmFibGVNZWRpYSkge1xuICB9XG5cbiAgZ2V0IHVzZURpYWxvZygpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlRGlhbG9nO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHVzZURpYWxvZyh1c2U6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5pc0RldGFpbHNTaG93bikge1xuICAgICAgdGhpcy5jbG9zZURldGFpbHMoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSxcbiAgICAgICAgICB0YWtlKDEpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fdXNlRGlhbG9nID0gdXNlO1xuICAgICAgICAgIHRoaXMub3BlbkRldGFpbHMoKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VzZURpYWxvZyA9IHVzZTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQubmV4dCgpO1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMudXNlU2xpZGVvdmVyU2lkZWJhck1vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gdGhpcyBCZWhhdmlvclN1YmplY3QgZW1pdHMgY2hhbmdlcyB0byB0aGUgdmlld3BvcnQgKGFuZCBpbml0aWFsbHkgdGhlIGN1cnJlbnQgdmlld3BvcnQgc3RhdGUpXG4gICAgICB0aGlzLm9ic2VydmFibGVNZWRpYS5hc09ic2VydmFibGUoKS5waXBlKHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnVzZVNsaWRlb3ZlclNpZGViYXJNb2RlID0gdGhpcy5vYnNlcnZhYmxlTWVkaWEuaXNBY3RpdmUoJ2x0LWxnJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFrZSB0aGUge0BsaW5rIERldGFpbFZpZXdDb21wb25lbnR9IHZpc2libGUgYW5kIHNob3cgdGhlIGRldGFpbHMgb2YgdGhlIG9iamVjdCBpZGVudGlmaWVkIGJ5IGlkXG4gICAqL1xuICBvcGVuRGV0YWlscygpIHtcbiAgICBpZiAodGhpcy51c2VEaWFsb2cpIHtcbiAgICAgIC8qXG4gICAgICogQ3VycmVudGx5LCB0aGVyZSBhcmUgc2V2ZXJhbCBnaXRodWIgaXNzdWVzIG9uIGNyZWF0aW5nIHZpZXdzIGluIHRoZSBuZ0FmdGVyVmlld0luaXQgd2hpY2ggaXNuJ3QgcG9zc2libGUgd2l0aG91dCBlcnJvciBpbiBEZXYtTW9kZVxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE1NjM0XG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTAxMzFcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNzU3MlxuICAgICAqIC4uLlxuICAgICAqIFRPRE86IFRoaXMgc29sdXRpb24gaXMgb25lIHdvcmthcm91bmQgZm9yIHRoaXMgaXNzdWUsIGJ1dCBzaG91bGQgYmUgZml4ZWQgYXMgc29vbiBhcyBwb3NzaWJsZSBzaW5jZSBpdHMgaGFja3khXG4gICAgICovXG4gICAgICBpZiAoIXRoaXMuaXNEZXRhaWxzU2hvd24pIHtcbiAgICAgICAgdGhpcy5pc0RldGFpbHNTaG93biA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMub3BlbkRldGFpbHNNb2RhbCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0RldGFpbHNTaG93biA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIHtAbGluayBEZXRhaWxWaWV3Q29tcG9uZW50fVxuICAgKiBAcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgYSBzaW5nbGUgdHJ1ZSB3aGVuIHRoZSBkZXRhaWxzIGlzIGZpbmlzaGVkIGNsb3NpbmdcbiAgICovXG4gIGNsb3NlRGV0YWlscygpOiBPYnNlcnZhYmxlPHVuZGVmaW5lZD4ge1xuICAgIGlmICghdGhpcy5pc0RldGFpbHNTaG93biB8fCAodGhpcy51c2VEaWFsb2cgJiYgIXRoaXMuZGV0YWlsc0RpYWxvZ1JlZikpIHtcbiAgICAgIHJldHVybiBvZigpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlZE9ic2VydmFibGUgPSB0aGlzLnVzZURpYWxvZyA/IHRoaXMuZGV0YWlsc0RpYWxvZ1JlZi5hZnRlckNsb3NlZCgpIDogZnJvbSh0aGlzLnNpZGVuYXYuY2xvc2UoKSk7XG4gICAgaWYgKHRoaXMudXNlRGlhbG9nKSB7XG4gICAgICB0aGlzLmRldGFpbHNEaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb3NlZE9ic2VydmFibGUucGlwZShcbiAgICAgIHRhcCgoKSA9PiB0aGlzLmNsb3NlZCQubmV4dCgpKSxcbiAgICAgIHRhcCgoKSA9PiB0aGlzLmlzRGV0YWlsc1Nob3duID0gZmFsc2UpLFxuICAgICAgZmlyc3QoKSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIGRldGFpbHNDbG9zZWQoKSBpcyBjYWxsZWQgd2hlbiB0aGUgIHtAbGluayBEZXRhaWxWaWV3Q29tcG9uZW50fSBpcyBjbG9zZWQuXG4gICAqIGVpdGhlciB3aGVuIHRoZSBkZXRhaWxzIGRpYWxvZyBpcyBjbG9zZWQgb3Igd2hlbiB0aGUgc2lkZWJhciBoYXMgZGlzYXBwZWFyZWRcbiAgICovXG4gIHB1YmxpYyBkZXRhaWxzQ2xvc2VkKCkge1xuICAgIHRoaXMuaXNEZXRhaWxzU2hvd24gPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlZCQubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuRGV0YWlsc01vZGFsKCkge1xuICAgIHRoaXMuZGV0YWlsc0RpYWxvZ1JlZiA9IHRoaXMubW9kYWxXaW5kb3dTZXJ2aWNlLm9wZW5EaWFsb2dXaXRoQ29tcG9uZW50KHRoaXMuZGV0YWlsc1ZpZXcsIHtcbiAgICAgIGRpc2FibGVDbG9zZTogdHJ1ZSxcbiAgICAgIGNsb3NlT25OYXZpZ2F0aW9uOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMuZGV0YWlsc0RpYWxvZ1JlZi5hZnRlckNsb3NlZCgpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmRldGFpbHNDbG9zZWQoKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXN0ZXJEZXRhaWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbWFzdGVyLWRldGFpbC12aWV3LmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIG1hc3RlciBwYXJ0IG9mIHRoZSB7QGxpbmsgTWFzdGVyRGV0YWlsVmlld0NvbXBvbmVudH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLW1hc3Rlci12aWV3JyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja306aG9zdC5jb250YWluZXItY29udGVudC1wYWRkZWR7cGFkZGluZzozMnB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIE1hc3RlclZpZXdDb21wb25lbnQge1xuXG4gIC8vIFRPRE86IGZpbmQgYSBzb2x1dGlvbiBzbyB0aGF0IDxiY2ktcGFnZS1jb250ZW50PiBjYW4gYmUgdXNlZCBpbiBkZW1vL3NvbHV0aW9uIGluc3RlYWQgb2YgaXNQYWRkZWQgYW5kIHN0aWxsIHRoZSBzaWRlYmFyIGlzIHdvcmtpbmdcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb250YWluZXItY29udGVudC1wYWRkZWQnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgaXNQYWRkZWQgPSB0cnVlO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWZpbHRlci1waWNrZXInLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48ZGl2IGNsYXNzPVwiZGlhbG9nLWhlYWRlclwiPlxuICA8aDMgbWF0RGlhbG9nVGl0bGU+RmlsdGVyPC9oMz5cbiAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLWJ1dHRvblwiIG1hdC1pY29uLWJ1dHRvbiB0YWJpbmRleD1cIi0xXCIgKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiPlxuICAgIDxpIGNsYXNzPVwiQm9zY2gtSWMgQm9zY2gtSWMtYWJvcnRcIj48L2k+XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG48bWF0LWRpYWxvZy1jb250ZW50PlxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWJvZHlcIj5cbiAgICA8bWF0LWxpc3Q+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJiY2ktZmlsdGVyLWVudHJ5XCI+PC9uZy1jb250ZW50PlxuICAgIDwvbWF0LWxpc3Q+XG5cbiAgICA8bWF0LWRpdmlkZXIgW3ZlcnRpY2FsXT1cInRydWVcIj48L21hdC1kaXZpZGVyPlxuXG4gICAgPGRpdiBjbGFzcz1cImZpbHRlci12aWV3XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJkaWFsb2ctZm9vdGVyXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi1wcmltYXJ5XCIgKGNsaWNrKT1cImFwcGx5RmlsdGVycygpXCI+QXBwbHk8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLXNlY29uZGFyeVwiIChjbGljayk9XCJjbG9zZU1vZGFsKClcIj5DYW5jZWw8L2J1dHRvbj5cbiAgPC9kaXY+XG48L21hdC1kaWFsb2ctY29udGVudD5cblxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLmRpYWxvZy1ib2R5e3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvd30uZGlhbG9nLWJvZHkgbWF0LWxpc3R7ZmxleC1iYXNpczpjYWxjKDUwJSAtIDI0cHgpO2hlaWdodDo0MDBweDtvdmVyZmxvdzphdXRvO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHdoaXRlIDMwJSxyZ2JhKDI1NSwyNTUsMjU1LDApKSxsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwKSwjZmZmIDcwJSkgMCAxMDAlLHJhZGlhbC1ncmFkaWVudChmYXJ0aGVzdC1zaWRlIGF0IDUwJSAwLHJnYmEoMCwwLDAsLjIpLHJnYmEoMCwwLDAsMCkpLHJhZGlhbC1ncmFkaWVudChmYXJ0aGVzdC1zaWRlIGF0IDUwJSAxMDAlLHJnYmEoMCwwLDAsLjIpLHJnYmEoMCwwLDAsMCkpIDAgMTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JhY2tncm91bmQtc2l6ZToxMDAlIDQwcHgsMTAwJSA0MHB4LDEwMCUgMTRweCwxMDAlIDE0cHg7YmFja2dyb3VuZC1hdHRhY2htZW50OmxvY2FsLGxvY2FsLHNjcm9sbCxzY3JvbGx9LmRpYWxvZy1ib2R5IG1hdC1kaXZpZGVye21hcmdpbjowIDI0cHg7ZmxleC1iYXNpczphdXRvfS5kaWFsb2ctYm9keSAuZmlsdGVyLXZpZXd7ZmxleC1iYXNpczpjYWxjKDUwJSAtIDI0cHgpfS5kaWFsb2ctZm9vdGVye21hcmdpbi10b3A6NDBweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5kaWFsb2ctZm9vdGVyIGJ1dHRvbi5idXR0b24tc2Vjb25kYXJ5e21hcmdpbi1sZWZ0OjE2cHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGZpbHRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGNsb3NlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBhcHBseUZpbHRlcnMoKSB7XG4gICAgdGhpcy5maWx0ZXIuZW1pdCgpO1xuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWZpbHRlci1lbnRyeScsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxtYXQtbGlzdC1pdGVtIChjbGljayk9XCJzaG93RmlsdGVyRGV0YWlscygpXCIgW25nQ2xhc3NdPVwieydhY3RpdmUnOiBpc1NlbGVjdGVkfVwiPlxuICA8c3BhbiBtYXRMaW5lPnt7IGZpbHRlclRpdGxlIH19IDwvc3Bhbj5cbiAgPG1hdC1pY29uICpuZ0lmPVwiaXNBY3RpdmVcIiBmb250SWNvbj1cIkJvc2NoLUljLWNoZWNrbWFya1wiPjwvbWF0LWljb24+XG4gIDxtYXQtaWNvbiAqbmdJZj1cImlzQWN0aXZlXCIgZm9udEljb249XCJCb3NjaC1JYy1kZWxldGVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImRlYWN0aXZhdGVGaWx0ZXIoKVwiPjwvbWF0LWljb24+XG48L21hdC1saXN0LWl0ZW0+XG5cblxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovOmhvc3R7ZmxleDoxfW1hdC1saXN0LWl0ZW17Y3Vyc29yOnBvaW50ZXJ9bWF0LWxpc3QtaXRlbS5hY3RpdmUsbWF0LWxpc3QtaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwxNDIsMjA3LC4xNSl9bWF0LWxpc3QtaXRlbSAubWF0LWljb257bGluZS1oZWlnaHQ6MSFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6OHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckVudHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZmlsdGVyVGl0bGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaXNTZWxlY3RlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaXNBY3RpdmU6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBkZWFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzaG93RmlsdGVyRGV0YWlscygpIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuZmlsdGVyVGl0bGUpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZUZpbHRlcigpIHtcbiAgICB0aGlzLmRlYWN0aXZhdGUuZW1pdCgodGhpcy5maWx0ZXJUaXRsZSkpO1xuICB9XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktcGFnZS1jb250ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovOmhvc3R7cGFkZGluZzowO2ZsZXg6bm9uZTtkaXNwbGF5OmJsb2NrO292ZXJmbG93OmF1dG87cG9zaXRpb246YWJzb2x1dGV9Omhvc3QuZnVsbC1zcGFjZXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfTpob3N0LmZ1bGwtc3BhY2UucGFkZGluZ3t3aWR0aDpjYWxjKDEwMCUgLSAyICogMzJweCk7aGVpZ2h0OmNhbGMoMTAwJSAtIDIgKiAzMnB4KX06aG9zdC5wYWRkaW5ne3BhZGRpbmc6MzJweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLyoqXG4gICAqIFNldHMgd2lkdGggYW5kIGhlaWdodCB0byAxMDAlIHNvIHRoYXQgdGhlIGNvbXBsZXRlIGNvbnRlbnQgc3BhY2UgaXMgZmlsbGVkLiBEZWZhdWx0OiB0cnVlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZ1bGwtc3BhY2UnKSBASW5wdXQoKSBmdWxsU3BhY2UgPSB0cnVlO1xuICAvKipcbiAgICogU2V0cyBwYWRkaW5nIHRvIDMycHguIFRvIGVuYWJsZSBmdWxsLXdpZHRoIGNvbnRlbnQsIHNldCB0aGlzIHRvIGZhbHNlLiBEZWZhdWx0OiB0cnVlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBhZGRpbmcnKSBASW5wdXQoKSBwYWRkaW5nID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNpZGVQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXBhbmVsL2ZpbHRlci1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZVBhbmVsSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc2lkZS1wYW5lbC1pdGVtL3NpZGUtcGFuZWwtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudFdTaWRlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQtdy1zaWRlLXBhbmVsL2NvbnRlbnQtdy1zaWRlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nU3Bpbm5lckRpcmVjdGl2ZSB9IGZyb20gJy4vbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUsIE1hdENoaXBzTW9kdWxlLCBNYXREaWFsb2dNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdExpc3RNb2R1bGUsIE1hdE1lbnVNb2R1bGUsIE1hdFNpZGVuYXZNb2R1bGUsIE1hdFNuYWNrQmFyTW9kdWxlLCBNYXRUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IEJjaVRpbGVDb21wb25lbnQgfSBmcm9tICcuL3RpbGUvdGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQtc2lkZWJhci9jb250ZW50LXNpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlbnRTaWRlYmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC1zaWRlYmFyLWl0ZW0vY29udGVudC1zaWRlYmFyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1hbmRiYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbW1hbmRiYXIvY29tbWFuZGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbWFuZGJhckFjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbW1hbmRiYXIvYWN0aW9ucy9hY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tYW5kYmFyQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tYW5kYmFyL2J1dHRvbi9jb21tYW5kYmFyLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbWFuZGJhckJ1dHRvbnNEaXJlY3RpdmUgfSBmcm9tICcuL2NvbW1hbmRiYXIvY29tbWFuZGJhci1idXR0b25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tYW5kYmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tbWFuZGJhci9pdGVtL2NvbW1hbmRiYXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbWFuZGJhcklubGluZWZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbW1hbmRiYXIvaW5saW5lZmlsdGVycy9jb21tYW5kYmFyLWlubGluZWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbW1hbmRiYXIvaW5saW5lZmlsdGVyL2NvbW1hbmRiYXItaW5saW5lZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tYW5kYmFyUXVpY2tmaWx0ZXJzRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21tYW5kYmFyL2NvbW1hbmRiYXItcXVpY2tmaWx0ZXJzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUb2dnbGVCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2NvbW1hbmRiYXIvdG9nZ2xlLWJ1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tbWFuZGJhckFjdGl2ZUZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbW1hbmRiYXIvYWN0aXZlLWZpbHRlcnMvYWN0aXZlLWZpbHRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IEJjaUNoaXBDb21wb25lbnQgfSBmcm9tICcuL2NoaXAvY2hpcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGV0YWlsVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbWFzdGVyLWRldGFpbC9kZXRhaWwvZGV0YWlsLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE1hc3RlckRldGFpbFZpZXdDb21wb25lbnQgfSBmcm9tICcuL21hc3Rlci1kZXRhaWwvbWFzdGVyLWRldGFpbC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXN0ZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9tYXN0ZXItZGV0YWlsL21hc3Rlci9tYXN0ZXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItcGlja2VyL2ZpbHRlci1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlckVudHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItcGlja2VyL2ZpbHRlci1lbnRyeS9maWx0ZXItZW50cnkuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLWNvbnRlbnQvcGFnZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcmVhZGNydW1ic01vZHVsZSB9IGZyb20gJy4vYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICAvLyBUT0RPOiBuZWVkZWQ/XG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGbGV4TGF5b3V0TW9kdWxlLFxuICAgIEJyZWFkY3J1bWJzTW9kdWxlLFxuICAgIC8qIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGaWx0ZXJQYW5lbENvbXBvbmVudCxcbiAgICBTaWRlUGFuZWxDb21wb25lbnQsXG4gICAgU2lkZVBhbmVsSXRlbUNvbXBvbmVudCxcbiAgICBDb250ZW50U2lkZWJhckNvbXBvbmVudCxcbiAgICBDb250ZW50U2lkZWJhckl0ZW1Db21wb25lbnQsXG4gICAgQ29udGVudFdTaWRlUGFuZWxDb21wb25lbnQsXG4gICAgTG9hZGluZ1NwaW5uZXJEaXJlY3RpdmUsXG4gICAgQmNpQ2hpcENvbXBvbmVudCxcbiAgICBCY2lUaWxlQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJJdGVtQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJCdXR0b25Db21wb25lbnQsXG4gICAgQ29tbWFuZGJhckJ1dHRvbnNEaXJlY3RpdmUsXG4gICAgQ29tbWFuZGJhckNvbXBvbmVudCxcbiAgICBDb21tYW5kYmFyQWN0aW9uc0NvbXBvbmVudCxcbiAgICBDb21tYW5kYmFyQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJzQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJDb21wb25lbnQsXG4gICAgQ29tbWFuZGJhclF1aWNrZmlsdGVyc0RpcmVjdGl2ZSxcbiAgICBUb2dnbGVCdXR0b25EaXJlY3RpdmUsXG4gICAgQ29tbWFuZGJhckFjdGl2ZUZpbHRlcnNDb21wb25lbnQsXG4gICAgTWFzdGVyRGV0YWlsVmlld0NvbXBvbmVudCxcbiAgICBNYXN0ZXJWaWV3Q29tcG9uZW50LFxuICAgIERldGFpbFZpZXdDb21wb25lbnQsXG4gICAgRmlsdGVyUGlja2VyQ29tcG9uZW50LFxuICAgIEZpbHRlckVudHJ5Q29tcG9uZW50LFxuICAgIFBhZ2VDb250ZW50Q29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQnJlYWRjcnVtYnNNb2R1bGUsXG4gICAgRmlsdGVyUGFuZWxDb21wb25lbnQsXG4gICAgU2lkZVBhbmVsQ29tcG9uZW50LFxuICAgIFNpZGVQYW5lbEl0ZW1Db21wb25lbnQsXG4gICAgQ29udGVudFNpZGViYXJDb21wb25lbnQsXG4gICAgQ29udGVudFNpZGViYXJJdGVtQ29tcG9uZW50LFxuICAgIENvbnRlbnRXU2lkZVBhbmVsQ29tcG9uZW50LFxuICAgIExvYWRpbmdTcGlubmVyRGlyZWN0aXZlLFxuICAgIEJjaVRpbGVDb21wb25lbnQsXG4gICAgTWFzdGVyRGV0YWlsVmlld0NvbXBvbmVudCxcbiAgICBNYXN0ZXJWaWV3Q29tcG9uZW50LFxuICAgIERldGFpbFZpZXdDb21wb25lbnQsXG4gICAgQmNpQ2hpcENvbXBvbmVudCxcbiAgICBDb21tYW5kYmFySXRlbUNvbXBvbmVudCxcbiAgICBDb21tYW5kYmFyQnV0dG9uQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJCdXR0b25zRGlyZWN0aXZlLFxuICAgIENvbW1hbmRiYXJDb21wb25lbnQsXG4gICAgQ29tbWFuZGJhckFjdGlvbnNDb21wb25lbnQsXG4gICAgQ29tbWFuZGJhckNvbXBvbmVudCxcbiAgICBDb21tYW5kYmFySW5saW5lZmlsdGVyc0NvbXBvbmVudCxcbiAgICBDb21tYW5kYmFySW5saW5lZmlsdGVyQ29tcG9uZW50LFxuICAgIENvbW1hbmRiYXJRdWlja2ZpbHRlcnNEaXJlY3RpdmUsXG4gICAgVG9nZ2xlQnV0dG9uRGlyZWN0aXZlLFxuICAgIENvbW1hbmRiYXJBY3RpdmVGaWx0ZXJzQ29tcG9uZW50LFxuICAgIEZpbHRlclBpY2tlckNvbXBvbmVudCxcbiAgICBGaWx0ZXJFbnRyeUNvbXBvbmVudCxcbiAgICBQYWdlQ29udGVudENvbXBvbmVudCxcbiAgICAvKiBBbmd1bGFyIE1hdGVyaWFsICovXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCY2lTaGFyZWRNb2R1bGUge1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDYW5EZWFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlkZW50aXR5LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvcm91dGVyX3N0YXRlJztcblxuaW1wb3J0IHsgZGVmYXVsdElmRW1wdHksIGZpbHRlciwgZmxhdE1hcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlscy1jb21wb25lbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbG9zZURldGFpbHNHdWFyZCBpbXBsZW1lbnRzIENhbkRlYWN0aXZhdGU8RGV0YWlsc0NvbXBvbmVudD4ge1xuXG4gIGNhbkRlYWN0aXZhdGUoY29tcG9uZW50OiBEZXRhaWxzQ29tcG9uZW50LCBjdXJyZW50Um91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIGN1cnJlbnRTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCwgbmV4dFN0YXRlPzogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FuRGVhY3RpdmF0ZURldGFpbHNDb21wb25lbnQoPERldGFpbHNDb21wb25lbnQ+IGNvbXBvbmVudCwgbmV4dFN0YXRlLCBjdXJyZW50U3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFzT2JzZXJ2YWJsZTxUPih2YWx1ZTogVCB8IE9ic2VydmFibGU8VD4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvZih2YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXJlRGV0YWlsUm91dGVzV2l0aFNhbWVNYXN0ZXIoY3VycmVudFN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBuZXh0U3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICBpZiAoIW5leHRTdGF0ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50Q2hpbGQgPSBjdXJyZW50U3RhdGUucm9vdC5maXJzdENoaWxkO1xuICAgIGxldCBuZXh0Q2hpbGQgPSBuZXh0U3RhdGUucm9vdC5maXJzdENoaWxkO1xuICAgIHdoaWxlICghIWN1cnJlbnRDaGlsZCAmJiAhIW5leHRDaGlsZCkge1xuICAgICAgaWYgKHRoaXMuaXNEZXRhaWxzQ29tcG9uZW50VHlwZShjdXJyZW50Q2hpbGQuY29tcG9uZW50KSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEZXRhaWxzQ29tcG9uZW50VHlwZShuZXh0Q2hpbGQuY29tcG9uZW50KSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gY3VycmVudENoaWxkLnBhcmVudC5jb21wb25lbnQgPT09IG5leHRDaGlsZC5wYXJlbnQuY29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50Q2hpbGQgPSBjdXJyZW50Q2hpbGQuZmlyc3RDaGlsZDtcbiAgICAgICAgbmV4dENoaWxkID0gbmV4dENoaWxkLmZpcnN0Q2hpbGQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0RldGFpbHNDb21wb25lbnRUeXBlKGNvbXBvbmVudFR5cGU6IFR5cGU8YW55PiB8IHN0cmluZyB8IG51bGwpIHtcbiAgICBpZiAoY29tcG9uZW50VHlwZSBpbnN0YW5jZW9mIFR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRGV0YWlsc0NvbXBvbmVudChjb21wb25lbnRUeXBlLnByb3RvdHlwZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0RldGFpbHNDb21wb25lbnQoY29tcG9uZW50OiBhbnkpOiBjb21wb25lbnQgaXMgRGV0YWlsc0NvbXBvbmVudCB7XG4gICAgcmV0dXJuIGNvbXBvbmVudC5jYW5DbG9zZURldGFpbHMgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgY2FuRGVhY3RpdmF0ZURldGFpbHNDb21wb25lbnQoY29tcG9uZW50OiBEZXRhaWxzQ29tcG9uZW50LCBuZXh0U3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsIGN1cnJlbnRTdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIHJldHVybiB0aGlzLmFzT2JzZXJ2YWJsZShjb21wb25lbnQuY2FuQ2xvc2VEZXRhaWxzKCkpLnBpcGUoXG4gICAgICBmaWx0ZXIoaWRlbnRpdHkpLFxuICAgICAgZmxhdE1hcCgoKSA9PiB0aGlzLmFyZURldGFpbFJvdXRlc1dpdGhTYW1lTWFzdGVyKGN1cnJlbnRTdGF0ZSwgbmV4dFN0YXRlKVxuICAgICAgICA/IG9mKHRydWUpXG4gICAgICAgIDogdGhpcy5hc09ic2VydmFibGUoY29tcG9uZW50LmNsb3NlRGV0YWlscygpKS5waXBlKG1hcCgoKSA9PiB0cnVlKSkpLFxuICAgICAgZGVmYXVsdElmRW1wdHkoZmFsc2UpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWIge1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIkh0dHBDbGllbnQiLCJMb2NhdGlvbiIsIkluamVjdGlvblRva2VuIiwiTWF0RGlhbG9nQ29uZmlnIiwiTmdNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiQVBQX0lOSVRJQUxJWkVSIiwiTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMiLCJPcHRpb25hbCIsIlNraXBTZWxmIiwiU3ViamVjdCIsIk5hdmlnYXRpb25TdGFydCIsIlJvdXRlciIsIk1hdERpYWxvZyIsIkluamVjdCIsIkRPQ1VNRU5UIiwiTWF0RGlhbG9nUmVmIiwiRXZlbnRFbWl0dGVyIiwiSW5wdXQiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkZsZXhMYXlvdXRNb2R1bGUiLCJNYXREaWFsb2dNb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiT3ZlcmxheU1vZHVsZSIsIlBvcnRhbE1vZHVsZSIsIk1hdEljb25SZWdpc3RyeSIsImluamVjdCIsIkJlaGF2aW9yU3ViamVjdCIsInRha2VVbnRpbCIsImZpbHRlciIsIk5hdmlnYXRpb25FbmQiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiQWN0aXZhdGVkUm91dGUiLCJMb2NhdGlvblN0cmF0ZWd5IiwiVmlld0NoaWxkIiwib3ZlcmxheSIsIk92ZXJsYXlDb25maWciLCJDb21wb25lbnRQb3J0YWwiLCJ0cmlnZ2VyIiwic3RhdGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwiT3ZlcmxheSIsIlZpZXdDb250YWluZXJSZWYiLCJJbmplY3RvciIsIkNoYW5nZURldGVjdG9yUmVmIiwiSG9zdEJpbmRpbmciLCJDb250ZW50Q2hpbGRyZW4iLCJSb3V0ZXJNb2R1bGUiLCJNYXRTaWRlbmF2TW9kdWxlIiwiTWF0RXhwYW5zaW9uTW9kdWxlIiwiTWF0TGlzdE1vZHVsZSIsIm1hcCIsInRocm93RXJyb3IiLCJEaXJlY3RpdmUiLCJPdXRwdXQiLCJtZXJnZSIsImRlYm91bmNlVGltZSIsImRpc3RpbmN0VW50aWxDaGFuZ2VkIiwiRm9ybUJ1aWxkZXIiLCJPYnNlcnZhYmxlTWVkaWEiLCJmb3J3YXJkUmVmIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJpY29uIiwib2YiLCJIb3N0TGlzdGVuZXIiLCJ0YWtlIiwiZnJvbSIsInRhcCIsImZpcnN0IiwiQ29udGVudENoaWxkIiwiTWF0U2lkZW5hdiIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0Q2hpcHNNb2R1bGUiLCJNYXRUb29sYmFyTW9kdWxlIiwiTWF0Rm9ybUZpZWxkTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRNZW51TW9kdWxlIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJPYnNlcnZhYmxlIiwiVHlwZSIsImlkZW50aXR5IiwiZmxhdE1hcCIsImRlZmF1bHRJZkVtcHR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztRQVdFLDJCQUFHOzs7O1lBQUgsVUFBSSxHQUFXO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7Ozs7O1FBRUQsNkJBQUs7Ozs7WUFBTCxVQUFNLEdBQVc7Z0JBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwQjs7b0JBWEZBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs0QkFSRDs7Ozs7Ozs7UUNpQkUsMkJBQW9CLE1BQXFCO1lB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O1FBQ3pCLGNBQWMsRUFBRSxTQUFTO1FBQ3pCLGNBQWMsRUFBRSxTQUFTO1FBQ3pCLGdCQUFnQixFQUFFLFNBQVM7UUFDM0IsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixnQkFBZ0IsRUFBRSxTQUFTO1FBQzNCLGdCQUFnQixFQUFFLFNBQVM7UUFDM0IsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixnQkFBZ0IsRUFBRSxTQUFTO1FBQzNCLGlCQUFpQixFQUFFLFNBQVM7UUFDNUIsaUJBQWlCLEVBQUUsU0FBUztRQUM1QixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLGlCQUFpQixFQUFFLFNBQVM7UUFDNUIsaUJBQWlCLEVBQUUsU0FBUztRQUM1QixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLGlCQUFpQixFQUFFLFNBQVM7UUFDNUIsaUJBQWlCLEVBQUUsU0FBUztRQUM1QixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLGlCQUFpQixFQUFFLFNBQVM7UUFDNUIsaUJBQWlCLEVBQUUsU0FBUztRQUM1QixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLGtCQUFrQixFQUFFLFNBQVM7UUFDN0Isa0JBQWtCLEVBQUUsU0FBUztRQUM3QixrQkFBa0IsRUFBRSxTQUFTO1FBQzdCLGtCQUFrQixFQUFFLFNBQVM7UUFDN0Isa0JBQWtCLEVBQUUsU0FBUztRQUM3QixrQkFBa0IsRUFBRSxTQUFTO1FBQzdCLGlCQUFpQixFQUFFLFNBQVM7UUFDNUIsaUJBQWlCLEVBQUUsU0FBUztRQUM1QixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLGlCQUFpQixFQUFFLFNBQVM7UUFDNUIsaUJBQWlCLEVBQUUsU0FBUztRQUM1QixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLGlCQUFpQixFQUFFLFNBQVM7UUFDNUIsaUJBQWlCLEVBQUUsU0FBUztRQUM1QixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLGlCQUFpQixFQUFFLFNBQVM7UUFDNUIsaUJBQWlCLEVBQUUsU0FBUztRQUM1QixpQkFBaUIsRUFBRSxTQUFTOzs7O1FBSTVCLGdCQUFnQixFQUFFLFNBQVM7Ozs7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