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
export class CoreConfigurationService {
    /**
     * @param {?} http
     * @param {?} location
     */
    constructor(http, location) {
        this.http = http;
        this.location = location;
        this.config = null;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    load(url) {
        /** @type {?} */
        const configFilePath = this.location.prepareExternalUrl(url);
        return this.http.get(configFilePath)
            .toPromise()
            .then((config) => {
            this.config = config;
            return config;
        })
            .catch(error => {
            console.error(error);
            return null;
        });
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.config;
    }
}
CoreConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
CoreConfigurationService.ctorParameters = () => [
    { type: HttpClient },
    { type: Location }
];
/** @nocollapse */ CoreConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function CoreConfigurationService_Factory() { return new CoreConfigurationService(i0.inject(i1.HttpClient), i0.inject(i2.Location)); }, token: CoreConfigurationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    CoreConfigurationService.prototype.config;
    /** @type {?} */
    CoreConfigurationService.prototype.http;
    /** @type {?} */
    CoreConfigurationService.prototype.location;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1jb25maWd1cmF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9jb3JlLWNvbmZpZ3VyYXRpb24vY29yZS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQU0zQyxNQUFNOzs7OztJQUdKLFlBQW9CLElBQWdCLEVBQVUsUUFBa0I7UUFBNUMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7c0JBRm5DLElBQUk7S0FHaEM7Ozs7O0lBRU0sSUFBSSxDQUFDLEdBQVc7O1FBRXJCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQzthQUNqQyxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsQ0FBQyxNQUFrQixFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNmLENBQUM7YUFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDYixDQUFDLENBQUM7Ozs7O0lBR0EsU0FBUztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7O1lBMUJ0QixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxVQUFVO1lBQ1YsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuL2NvcmUtY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29yZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24pIHtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxDb3JlQ29uZmlnPiB7XG5cbiAgICBjb25zdCBjb25maWdGaWxlUGF0aCA9IHRoaXMubG9jYXRpb24ucHJlcGFyZUV4dGVybmFsVXJsKHVybCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChjb25maWdGaWxlUGF0aClcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKGNvbmZpZzogQ29yZUNvbmZpZykgPT4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gIH1cbn1cbiJdfQ==