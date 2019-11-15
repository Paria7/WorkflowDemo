/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoggerService } from '../logger.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../logger.service";
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
    /** @nocollapse */ NotificationService.ngInjectableDef = i0.defineInjectable({ factory: function NotificationService_Factory() { return new NotificationService(i0.inject(i1.Router), i0.inject(i2.LoggerService)); }, token: NotificationService, providedIn: "root" });
    return NotificationService;
}());
export { NotificationService };
if (false) {
    /** @type {?} */
    NotificationService.prototype.subject;
    /** @type {?} */
    NotificationService.prototype.keepAfterNavigationChange;
    /** @type {?} */
    NotificationService.prototype.router;
    /** @type {?} */
    NotificationService.prototype.logger;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7SUFXaEQsNkJBQW9CLE1BQWMsRUFBVSxNQUFxQjtRQUFqRSxpQkFhQztRQWJtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZTt1QkFIL0MsSUFBSSxPQUFPLEVBQW9CO3lDQUNiLEtBQUs7O1FBSXZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUMzQixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDckMsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQzs7b0JBRW5DLEFBREEseUNBQXlDO29CQUN6QyxLQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDO2lCQUN4QztnQkFBQyxJQUFJLENBQUMsQ0FBQzs7b0JBRU4sQUFEQSxjQUFjO29CQUNkLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3JCO2FBQ0Y7U0FDRixDQUFDLENBQUM7S0FDSjs7Ozs7O0lBRUQscUNBQU87Ozs7O0lBQVAsVUFBUSxPQUFlLEVBQUUseUJBQWlDO1FBQWpDLDBDQUFBLEVBQUEsaUNBQWlDO1FBQ3hELElBQUksQ0FBQyx5QkFBeUIsR0FBRyx5QkFBeUIsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDdkQ7Ozs7OztJQUVELG1DQUFLOzs7OztJQUFMLFVBQU0sT0FBZSxFQUFFLHlCQUFpQztRQUFqQywwQ0FBQSxFQUFBLGlDQUFpQztRQUN0RCxJQUFJLENBQUMseUJBQXlCLEdBQUcseUJBQXlCLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ3JEOzs7O0lBRUQsd0NBQVU7OztJQUFWO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDcEM7O2dCQW5DRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVB5QixNQUFNO2dCQUV2QixhQUFhOzs7OEJBUHRCOztTQWFhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblN0YXJ0LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkl0ZW0gfSBmcm9tICcuL25vdGlmaWNhdGlvbi1pdGVtJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8Tm90aWZpY2F0aW9uSXRlbT4oKTtcbiAgcHJpdmF0ZSBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UpIHtcbiAgICAvLyBjbGVhciBhbGVydCBtZXNzYWdlIG9uIHJvdXRlIGNoYW5nZVxuICAgIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xuICAgICAgICBpZiAodGhpcy5rZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlKSB7XG4gICAgICAgICAgLy8gb25seSBrZWVwIGZvciBhIHNpbmdsZSBsb2NhdGlvbiBjaGFuZ2VcbiAgICAgICAgICB0aGlzLmtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjbGVhciBhbGVydFxuICAgICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nLCBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlID0gZmFsc2UpIHtcbiAgICB0aGlzLmtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KHsgdHlwZTogJ3N1Y2Nlc3MnLCB0ZXh0OiBtZXNzYWdlIH0pO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlID0gZmFsc2UpIHtcbiAgICB0aGlzLmtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KHsgdHlwZTogJ2Vycm9yJywgdGV4dDogbWVzc2FnZSB9KTtcbiAgfVxuXG4gIGdldE1lc3NhZ2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iXX0=