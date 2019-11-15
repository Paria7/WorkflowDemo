/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Location, LocationStrategy } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
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
    /** @nocollapse */ BciSidebarService.ngInjectableDef = i0.defineInjectable({ factory: function BciSidebarService_Factory() { return new BciSidebarService(i0.inject(i1.Router), i0.inject(i2.Location), i0.inject(i2.LocationStrategy)); }, token: BciSidebarService, providedIn: "root" });
    return BciSidebarService;
}());
export { BciSidebarService };
if (false) {
    /** @type {?} */
    BciSidebarService.prototype.sidebarState$;
    /** @type {?} */
    BciSidebarService.prototype.sidebarVisibility$;
    /** @type {?} */
    BciSidebarService.prototype.router;
    /** @type {?} */
    BciSidebarService.prototype.location;
    /** @type {?} */
    BciSidebarService.prototype.locationStrategy;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLXNpZGViYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2xheW91dC9iY2ktc2lkZWJhci9iY2ktc2lkZWJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQW9CLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7O0lBU2pELDJCQUFvQixNQUFjLEVBQVUsUUFBa0IsRUFBVSxnQkFBa0M7UUFBdEYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCOzZCQUhsRixJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUM7a0NBQzdCLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQztLQUc5RDs7Ozs7SUFFTSwyQ0FBZTs7OztjQUFDLElBQWE7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7OztJQUd6QixnREFBb0I7Ozs7Y0FBQyxPQUFnQjtRQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7OztJQUdqQywyQ0FBZTs7OztRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7Ozs7SUFHcEMsZ0RBQW9COzs7O1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7Ozs7Ozs7Ozs7SUFXekMseUNBQWE7Ozs7Ozs7O2NBQUMsR0FBVyxFQUFFLE1BQXlCOztRQUN6RCxJQUFJLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQztZQUNILFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtRQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztZQUVYLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7O1lBQ2hCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuRCxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBSSxRQUFRLE1BQUcsQ0FBQztZQUM5RCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0YsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzNEO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQzthQUN2QztTQUVGOzs7Z0JBbkRKLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTDBCLE1BQU07Z0JBRnhCLFFBQVE7Z0JBQUUsZ0JBQWdCOzs7NEJBSm5DOztTQVlhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgTG9jYXRpb24sIExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCY2lTaWRlYmFyU2VydmljZSB7XG4gIHByaXZhdGUgc2lkZWJhclN0YXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gIHByaXZhdGUgc2lkZWJhclZpc2liaWxpdHkkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0cnVlKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSBsb2NhdGlvblN0cmF0ZWd5OiBMb2NhdGlvblN0cmF0ZWd5KSB7XG4gIH1cblxuICBwdWJsaWMgc2V0U2lkZWJhclN0YXRlKG9wZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNpZGViYXJTdGF0ZSQubmV4dChvcGVuKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTaWRlYmFyVmlzaWJpbGl0eSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zaWRlYmFyVmlzaWJpbGl0eSQubmV4dCh2aXNpYmxlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTaWRlYmFyU3RhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc2lkZWJhclN0YXRlJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTaWRlYmFyVmlzaWJpbGl0eSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlYmFyVmlzaWJpbGl0eSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGVzIHRvIHRoZSBVUkwgZWl0aGVyIGludGVybmFsbHkgKHdpdGggQW5ndWxhciBSb3V0ZXIpIG9yIGV4dGVybmFsbHkgKHdpbmRvdy5sb2NhdGlvbikuXG4gICAqIElmIHRoZXJlIGlzIG5vdCBodHRwIHByb3RvY29sIG9yIGlmIHRoZSBvcmlnaW4gaXMgdGhlIHNhbWUgYW5kIHRoZSByb3V0ZSBpcyBwYXJ0IG9mIHRoZSByb3V0ZXIgY29uZmlnLCBuYXZpZ2F0ZSBpbnRlcm5hbGx5LlxuICAgKiBFbHNlLCBuYXZpZ2F0ZSBleHRlcm5hbGx5LlxuICAgKiBAcGFyYW0gdXJsIEFic29sdXRlIFVSTCBvciBpbnRlcm5hbCByb3V0ZS5cbiAgICogQHBhcmFtIGV4dHJhcyB7QGxpbmsgTmF2aWdhdGlvbkV4dHJhc31cbiAgICogQHJldHVybnMgVGhlIHtAbGluayByb3V0ZXJ9IG5hdmlnYXRlIHJldHVyblxuICAgKi9cbiAgcHVibGljIG5hdmlnYXRlVG9VcmwodXJsOiBzdHJpbmcsIGV4dHJhcz86IE5hdmlnYXRpb25FeHRyYXMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBsZXQgdXJsT2JqZWN0O1xuICAgIHRyeSB7XG4gICAgICB1cmxPYmplY3QgPSBuZXcgVVJMKHVybCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gYXNzdW1pbmcgVHlwZUVycm9yLCBJbnZhbGlkIFVSTCAtPiBuYXZpZ2F0ZSBpbnRlcm5hbGx5IGRpcmVjdGx5IHRvIFVSTFxuICAgICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlKFt1cmxdLCBleHRyYXMpO1xuICAgIH1cbiAgICBpZiAoISF1cmxPYmplY3QpIHtcbiAgICAgIGxldCBiYXNlSHJlZiA9IHRoaXMubG9jYXRpb25TdHJhdGVneS5nZXRCYXNlSHJlZigpO1xuICAgICAgYmFzZUhyZWYgPSBiYXNlSHJlZi5lbmRzV2l0aCgnLycpID8gYmFzZUhyZWYgOiBgJHtiYXNlSHJlZn0vYDtcbiAgICAgIGlmICh1cmxPYmplY3Qub3JpZ2luID09PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICYmIHVybE9iamVjdC5wYXRobmFtZS5zdGFydHNXaXRoKGJhc2VIcmVmKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3VybE9iamVjdC5wYXRobmFtZV0sIGV4dHJhcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybE9iamVjdC5ocmVmO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbn1cbiJdfQ==