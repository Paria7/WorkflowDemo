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
export class BciImprintDetailsService {
    /**
     * @param {?} httpClient
     * @param {?} location
     */
    constructor(httpClient, location) {
        this.httpClient = httpClient;
        this.location = location;
    }
    /**
     * Get imprint details for imprint view.
     * @return {?}
     */
    getImprintDetails() {
        return this.httpClient.get(this.location.prepareExternalUrl('/assets/imprint-details.json'));
    }
}
BciImprintDetailsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
BciImprintDetailsService.ctorParameters = () => [
    { type: HttpClient },
    { type: Location }
];
/** @nocollapse */ BciImprintDetailsService.ngInjectableDef = i0.defineInjectable({ factory: function BciImprintDetailsService_Factory() { return new BciImprintDetailsService(i0.inject(i1.HttpClient), i0.inject(i2.Location)); }, token: BciImprintDetailsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    BciImprintDetailsService.prototype.httpClient;
    /** @type {?} */
    BciImprintDetailsService.prototype.location;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLWltcHJpbnQtZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaW1wcmludC9iY2ktaW1wcmludC1kZXRhaWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQU0zQyxNQUFNOzs7OztJQUVKLFlBQW9CLFVBQXNCLEVBQVUsUUFBa0I7UUFBbEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7S0FDckU7Ozs7O0lBS0QsaUJBQWlCO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFlLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO0tBQzVHOzs7WUFiRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxVQUFVO1lBQ1YsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEltcHJpbnRNb2RlbCB9IGZyb20gJy4vaW1wcmludC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJjaUltcHJpbnREZXRhaWxzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikge1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbXByaW50IGRldGFpbHMgZm9yIGltcHJpbnQgdmlldy5cbiAgICovXG4gIGdldEltcHJpbnREZXRhaWxzKCk6IE9ic2VydmFibGU8SW1wcmludE1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8SW1wcmludE1vZGVsPih0aGlzLmxvY2F0aW9uLnByZXBhcmVFeHRlcm5hbFVybCgnL2Fzc2V0cy9pbXByaW50LWRldGFpbHMuanNvbicpKTtcbiAgfVxufVxuIl19