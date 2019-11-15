/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Inject, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CORE_CONFIG } from '../core-configuration/core-config.token';
import { map } from 'rxjs/operators';
import { CoreConfig } from '../core-configuration/core-config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/common";
import * as i3 from "../core-configuration/core-config.token";
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
    /** @nocollapse */ NavigationService.ngInjectableDef = i0.defineInjectable({ factory: function NavigationService_Factory() { return new NavigationService(i0.inject(i1.HttpClient), i0.inject(i2.Location), i0.inject(i3.CORE_CONFIG)); }, token: NavigationService, providedIn: "root" });
    return NavigationService;
}());
export { NavigationService };
if (false) {
    /** @type {?} */
    NavigationService.prototype.sidebarLinks;
    /** @type {?} */
    NavigationService.prototype.http;
    /** @type {?} */
    NavigationService.prototype.location;
    /** @type {?} */
    NavigationService.prototype.config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0lBUTdELDJCQUFvQixJQUFnQixFQUFVLFFBQWtCLEVBQStCLE1BQWtCO1FBQTdGLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQStCLFdBQU0sR0FBTixNQUFNLENBQVk7NEJBRmhGLEVBQUU7S0FHbEM7Ozs7SUFFRCw4Q0FBa0I7OztJQUFsQjtRQUFBLGlCQWtCQztRQWpCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDOztZQUNsRCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUV2RixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO2lCQUNoQyxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsS0FBeUI7Z0JBQzVCLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUMzQixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztpQkFDM0I7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUNuQztnQkFDRCxNQUFNLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQzthQUMxQixDQUFDLENBQ0gsQ0FBQztTQUNMO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsVUFBVSxDQUFDLGtFQUFrRSxDQUFDLENBQUM7U0FDdkY7S0FDRjs7Z0JBM0JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVFEsVUFBVTtnQkFIVixRQUFRO2dCQVFSLFVBQVUsdUJBUWtELE1BQU0sU0FBQyxXQUFXOzs7NEJBckJ2Rjs7U0FrQmEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFNpZGViYXJOYXZJdGVtIH0gZnJvbSAnLi4vbGF5b3V0JztcbmltcG9ydCB7IE5hdmlnYXRpb25SZXNwb25zZSB9IGZyb20gJy4vTmF2aWdhdGlvblJlc3BvbnNlJztcbmltcG9ydCB7IENPUkVfQ09ORklHIH0gZnJvbSAnLi4vY29yZS1jb25maWd1cmF0aW9uL2NvcmUtY29uZmlnLnRva2VuJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi9jb3JlLWNvbmZpZ3VyYXRpb24vY29yZS1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XG4gIHNpZGViYXJMaW5rczogU2lkZWJhck5hdkl0ZW1bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIEBJbmplY3QoQ09SRV9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnKSB7XG4gIH1cblxuICBnZXROYXZpZ2F0aW9uSXRlbXMoKTogT2JzZXJ2YWJsZTxTaWRlYmFyTmF2SXRlbVtdPiB7XG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmVuZHBvaW50TmF2aWdhdGlvbikge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9IHRoaXMubG9jYXRpb24ucHJlcGFyZUV4dGVybmFsVXJsKHRoaXMuY29uZmlnLmVuZHBvaW50TmF2aWdhdGlvbik7XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KG5vcm1hbGl6ZWRVcmwpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgobGlua3M6IE5hdmlnYXRpb25SZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGxpbmtzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zaWRlYmFyTGlua3MgPSBsaW5rcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2lkZWJhckxpbmtzID0gbGlua3MucmVzdWx0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZGViYXJMaW5rcztcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcignTmF2aWdhdGlvblNlcnZpY2U6IG5vIGVuZHBvaW50TmF2aWdhdGlvbiBwcm92aWRlZCBpbiBDT1JFX0NPTkZJRycpO1xuICAgIH1cbiAgfVxuXG5cbn1cbiJdfQ==