/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/common";
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
    /** @nocollapse */ CoreConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function CoreConfigurationService_Factory() { return new CoreConfigurationService(i0.inject(i1.HttpClient), i0.inject(i2.Location)); }, token: CoreConfigurationService, providedIn: "root" });
    return CoreConfigurationService;
}());
export { CoreConfigurationService };
if (false) {
    /** @type {?} */
    CoreConfigurationService.prototype.config;
    /** @type {?} */
    CoreConfigurationService.prototype.http;
    /** @type {?} */
    CoreConfigurationService.prototype.location;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1jb25maWd1cmF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9jb3JlLWNvbmZpZ3VyYXRpb24vY29yZS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7SUFTekMsa0NBQW9CLElBQWdCLEVBQVUsUUFBa0I7UUFBNUMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7c0JBRm5DLElBQUk7S0FHaEM7Ozs7O0lBRU0sdUNBQUk7Ozs7Y0FBQyxHQUFXOzs7UUFFckIsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU3RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO2FBQ2pDLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxVQUFDLE1BQWtCO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDZixDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNiLENBQUMsQ0FBQzs7Ozs7SUFHQSw0Q0FBUzs7OztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7Z0JBMUJ0QixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLFVBQVU7Z0JBQ1YsUUFBUTs7O21DQU5qQjs7U0FZYSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi9jb3JlLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVDb25maWd1cmF0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uKSB7XG4gIH1cblxuICBwdWJsaWMgbG9hZCh1cmw6IHN0cmluZyk6IFByb21pc2U8Q29yZUNvbmZpZz4ge1xuXG4gICAgY29uc3QgY29uZmlnRmlsZVBhdGggPSB0aGlzLmxvY2F0aW9uLnByZXBhcmVFeHRlcm5hbFVybCh1cmwpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoY29uZmlnRmlsZVBhdGgpXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChjb25maWc6IENvcmVDb25maWcpID0+IHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG59XG4iXX0=