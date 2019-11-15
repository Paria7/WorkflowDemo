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
    /** @nocollapse */ BciImprintDetailsService.ngInjectableDef = i0.defineInjectable({ factory: function BciImprintDetailsService_Factory() { return new BciImprintDetailsService(i0.inject(i1.HttpClient), i0.inject(i2.Location)); }, token: BciImprintDetailsService, providedIn: "root" });
    return BciImprintDetailsService;
}());
export { BciImprintDetailsService };
if (false) {
    /** @type {?} */
    BciImprintDetailsService.prototype.httpClient;
    /** @type {?} */
    BciImprintDetailsService.prototype.location;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLWltcHJpbnQtZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaW1wcmludC9iY2ktaW1wcmludC1kZXRhaWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7SUFRekMsa0NBQW9CLFVBQXNCLEVBQVUsUUFBa0I7UUFBbEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7S0FDckU7SUFFRDs7T0FFRzs7Ozs7SUFDSCxvREFBaUI7Ozs7SUFBakI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQWUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7S0FDNUc7O2dCQWJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsVUFBVTtnQkFDVixRQUFROzs7bUNBUGpCOztTQWFhLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEltcHJpbnRNb2RlbCB9IGZyb20gJy4vaW1wcmludC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJjaUltcHJpbnREZXRhaWxzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikge1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbXByaW50IGRldGFpbHMgZm9yIGltcHJpbnQgdmlldy5cbiAgICovXG4gIGdldEltcHJpbnREZXRhaWxzKCk6IE9ic2VydmFibGU8SW1wcmludE1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8SW1wcmludE1vZGVsPih0aGlzLmxvY2F0aW9uLnByZXBhcmVFeHRlcm5hbFVybCgnL2Fzc2V0cy9pbXByaW50LWRldGFpbHMuanNvbicpKTtcbiAgfVxufVxuIl19