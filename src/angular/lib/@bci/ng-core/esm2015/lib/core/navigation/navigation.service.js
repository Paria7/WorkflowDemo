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
export class NavigationService {
    /**
     * @param {?} http
     * @param {?} location
     * @param {?} config
     */
    constructor(http, location, config) {
        this.http = http;
        this.location = location;
        this.config = config;
        this.sidebarLinks = [];
    }
    /**
     * @return {?}
     */
    getNavigationItems() {
        if (this.config && this.config.endpointNavigation) {
            /** @type {?} */
            const normalizedUrl = this.location.prepareExternalUrl(this.config.endpointNavigation);
            return this.http.get(normalizedUrl)
                .pipe(map((links) => {
                if (links instanceof Array) {
                    this.sidebarLinks = links;
                }
                else {
                    this.sidebarLinks = links.results;
                }
                return this.sidebarLinks;
            }));
        }
        else {
            return throwError('NavigationService: no endpointNavigation provided in CORE_CONFIG');
        }
    }
}
NavigationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
NavigationService.ctorParameters = () => [
    { type: HttpClient },
    { type: Location },
    { type: CoreConfig, decorators: [{ type: Inject, args: [CORE_CONFIG,] }] }
];
/** @nocollapse */ NavigationService.ngInjectableDef = i0.defineInjectable({ factory: function NavigationService_Factory() { return new NavigationService(i0.inject(i1.HttpClient), i0.inject(i2.Location), i0.inject(i3.CORE_CONFIG)); }, token: NavigationService, providedIn: "root" });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7QUFLL0QsTUFBTTs7Ozs7O0lBR0osWUFBb0IsSUFBZ0IsRUFBVSxRQUFrQixFQUErQixNQUFrQjtRQUE3RixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUErQixXQUFNLEdBQU4sTUFBTSxDQUFZOzRCQUZoRixFQUFFO0tBR2xDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7O1lBQ2xELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRXZGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7aUJBQ2hDLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxLQUF5QixFQUFFLEVBQUU7Z0JBQ2hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztpQkFDM0I7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUNuQztnQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUMxQixDQUFDLENBQ0gsQ0FBQztTQUNMO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsVUFBVSxDQUFDLGtFQUFrRSxDQUFDLENBQUM7U0FDdkY7S0FDRjs7O1lBM0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVRRLFVBQVU7WUFIVixRQUFRO1lBUVIsVUFBVSx1QkFRa0QsTUFBTSxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkl0ZW0gfSBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblJlc3BvbnNlIH0gZnJvbSAnLi9OYXZpZ2F0aW9uUmVzcG9uc2UnO1xuaW1wb3J0IHsgQ09SRV9DT05GSUcgfSBmcm9tICcuLi9jb3JlLWNvbmZpZ3VyYXRpb24vY29yZS1jb25maWcudG9rZW4nO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uL2NvcmUtY29uZmlndXJhdGlvbi9jb3JlLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgc2lkZWJhckxpbmtzOiBTaWRlYmFyTmF2SXRlbVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgQEluamVjdChDT1JFX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcpIHtcbiAgfVxuXG4gIGdldE5hdmlnYXRpb25JdGVtcygpOiBPYnNlcnZhYmxlPFNpZGViYXJOYXZJdGVtW10+IHtcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuZW5kcG9pbnROYXZpZ2F0aW9uKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gdGhpcy5sb2NhdGlvbi5wcmVwYXJlRXh0ZXJuYWxVcmwodGhpcy5jb25maWcuZW5kcG9pbnROYXZpZ2F0aW9uKTtcblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQobm9ybWFsaXplZFVybClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChsaW5rczogTmF2aWdhdGlvblJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAobGlua3MgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICB0aGlzLnNpZGViYXJMaW5rcyA9IGxpbmtzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zaWRlYmFyTGlua3MgPSBsaW5rcy5yZXN1bHRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lkZWJhckxpbmtzO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKCdOYXZpZ2F0aW9uU2VydmljZTogbm8gZW5kcG9pbnROYXZpZ2F0aW9uIHByb3ZpZGVkIGluIENPUkVfQ09ORklHJyk7XG4gICAgfVxuICB9XG5cblxufVxuIl19