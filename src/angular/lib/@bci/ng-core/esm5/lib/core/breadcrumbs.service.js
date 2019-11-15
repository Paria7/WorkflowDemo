/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
            pathSegments.push.apply(pathSegments, tslib_1.__spread(route.url.map(function (segment) { return segment.path; })));
        }
        // add "/" ("Home") to breadcrumbs
        if (this.stickyRootBreadcrumb || pathSegments.length === 0) {
            pathSegments.unshift('');
        }
        /** @type {?} */
        var superpathSegments = [];
        try {
            for (var pathSegments_1 = tslib_1.__values(pathSegments), pathSegments_1_1 = pathSegments_1.next(); !pathSegments_1_1.done; pathSegments_1_1 = pathSegments_1.next()) {
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
                breadcrumbs[breadcrumbs.length - 1] = tslib_1.__assign({}, lastBreadcrumb, { url: undefined });
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
    /** @nocollapse */ BreadcrumbsService.ngInjectableDef = i0.defineInjectable({ factory: function BreadcrumbsService_Factory() { return new BreadcrumbsService(i0.inject(i1.Router), i0.inject(i1.ActivatedRoute)); }, token: BreadcrumbsService, providedIn: "root" });
    return BreadcrumbsService;
}());
export { BreadcrumbsService };
if (false) {
    /**
     * Always show "home"-route in breadcrumbs (default: false)
     * @type {?}
     */
    BreadcrumbsService.prototype.stickyRootBreadcrumb;
    /** @type {?} */
    BreadcrumbsService.prototype.breadcrumbs$;
    /**
     * Observable providing the list of Breadcrumb (current as well as future lists)
     * @type {?}
     */
    BreadcrumbsService.prototype.breadcrumbs;
    /** @type {?} */
    BreadcrumbsService.prototype.pathToBreadcrumbMap;
    /** @type {?} */
    BreadcrumbsService.prototype.temporaryPathToBreadcrumbMap;
    /** @type {?} */
    BreadcrumbsService.prototype.ngUnsubscribe;
    /** @type {?} */
    BreadcrumbsService.prototype.router;
    /** @type {?} */
    BreadcrumbsService.prototype.activatedRoute;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2JyZWFkY3J1bWJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTVELE9BQU8sRUFBRSxjQUFjLEVBQTBCLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakgsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7SUErQmpELDRCQUNVLFFBQ0E7UUFGVixpQkF3QkM7UUF2QlMsV0FBTSxHQUFOLE1BQU07UUFDTixtQkFBYyxHQUFkLGNBQWM7Ozs7b0NBYk0sS0FBSzs0QkFDbUIsSUFBSSxlQUFlLENBQWUsRUFBRSxDQUFDOzs7OzJCQUk1QyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRTttQ0FDakQsSUFBSSxHQUFHLEVBQXNCOzRDQUNwQixJQUFJLEdBQUcsRUFBc0I7NkJBRTlCLElBQUksT0FBTyxFQUFFOztRQVNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3JCLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQzdCLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssWUFBWSxhQUFhLEVBQTlCLENBQThCLENBQUMsQ0FDaEQsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQzs7UUFHbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNyQixTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEs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USxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUMxRCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDOzs7Ozs7SUFHcEQsbUNBQU07Ozs7Y0FBQyxZQUFzQjtRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7OztnQkEvTnJELFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBZmdGLE1BQU07Z0JBQTlFLGNBQWM7Ozs2QkFQdkI7O1NBdUJhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25TdGFydCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRQcmVmZXJTaG9ydEltcG9ydCBkdWUgdG8gY3ljbGljIGRlcGVuZGVuY3lcbmltcG9ydCB7IFNpZGViYXJOYXZJdGVtIH0gZnJvbSAnLi9sYXlvdXQvaW5kZXgnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYiB9IGZyb20gJy4uL3NoYXJlZC9icmVhZGNydW1icy9icmVhZGNydW1iL2JyZWFkY3J1bWIubW9kZWwnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGxpc3Qgb2YgYnJlYWRjcnVtYnMgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIHJvdXRlLlxuICogSE9XIFRPIFVTRTpcbiAqIEltcG9ydCB0aGlzIG1vZHVsZSBpbiBhcHAubW9kdWxlIHdpdGggXCJCcmVhZGNydW1ic01vZHVsZVwiLlxuICogUG9zaXRpb24gaXQgb24gdGhlIHBhZ2UgdXNpbmcgdGhlIGh0bWwgdGFnIDxiY2ktYnJlYWRjcnVtYnM+LlxuICogRGVmaW5lIGN1c3RvbSB0aXRsZXMgYW5kIHRlbXBvcmFyeSB0aXRsZXMsIHdoaWNoIHdpbGwgYmUgY2xlYXJlZCB1cG9uIG5hdmlnYXRpb24uXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJzU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIEFsd2F5cyBzaG93IFwiaG9tZVwiLXJvdXRlIGluIGJyZWFkY3J1bWJzIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIHB1YmxpYyBzdGlja3lSb290QnJlYWRjcnVtYiA9IGZhbHNlO1xuICBwcml2YXRlIGJyZWFkY3J1bWJzJDogQmVoYXZpb3JTdWJqZWN0PEJyZWFkY3J1bWJbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEJyZWFkY3J1bWJbXT4oW10pO1xuICAvKipcbiAgICogT2JzZXJ2YWJsZSBwcm92aWRpbmcgdGhlIGxpc3Qgb2YgQnJlYWRjcnVtYiAoY3VycmVudCBhcyB3ZWxsIGFzIGZ1dHVyZSBsaXN0cylcbiAgICovXG4gIHB1YmxpYyBicmVhZGNydW1iczogT2JzZXJ2YWJsZTxCcmVhZGNydW1iW10+ID0gdGhpcy5icmVhZGNydW1icyQuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgcGF0aFRvQnJlYWRjcnVtYk1hcCA9IG5ldyBNYXA8c3RyaW5nLCBCcmVhZGNydW1iPigpO1xuICBwcml2YXRlIHRlbXBvcmFyeVBhdGhUb0JyZWFkY3J1bWJNYXAgPSBuZXcgTWFwPHN0cmluZywgQnJlYWRjcnVtYj4oKTtcblxuICBwcml2YXRlIG5nVW5zdWJzY3JpYmU6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHtcblxuXG4gICAgLy8gdXBkYXRlIGJyZWFkY3J1bWJzIGFmdGVyIG5hdmdpYXRpb25cbiAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLm5nVW5zdWJzY3JpYmUpLFxuICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xuXG4gICAgLy8gY2xlYW4gdXAgdGVtcG9yYXJ5IHBhdGgtdG8tdGl0bGUgbWFwcGluZ3MgdXBvbiBzdGFydCBvZiBuYXZpZ2F0aW9uXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5uZ1Vuc3Vic2NyaWJlKSxcbiAgICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCksXG4gICAgKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgY29uc3Qgb2xkVXJsID0gdGhpcy5ub3JtYWxpemVQYXRoKChldmVudCBhcyBOYXZpZ2F0aW9uU3RhcnQpLnVybCk7XG4gICAgICBBcnJheS5mcm9tKHRoaXMudGVtcG9yYXJ5UGF0aFRvQnJlYWRjcnVtYk1hcC5rZXlzKCksIChwYXRoKSA9PiB7XG4gICAgICAgIGlmICghb2xkVXJsLnN0YXJ0c1dpdGgocGF0aCkpIHtcbiAgICAgICAgICB0aGlzLnRlbXBvcmFyeVBhdGhUb0JyZWFkY3J1bWJNYXAuZGVsZXRlKHBhdGgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubmdVbnN1YnNjcmliZS5uZXh0KCk7XG4gICAgdGhpcy5uZ1Vuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0TmF2aWdhdGlvbkl0ZW1zKG5hdkl0ZW1zOiBTaWRlYmFyTmF2SXRlbVtdKSB7XG4gICAgdGhpcy5wcm9jZXNzTmF2aWdhdGlvbkl0ZW1zKG5hdkl0ZW1zKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGl0bGUgZm9yIGEgcGF0aCwgbGlrZSBzZXRUaXRsZSgnYS9iL2MnLCAnQycpO1xuICAgKiBAcGFyYW0gcGF0aCByZWxhdGl2ZSBwYXRoXG4gICAqIEBwYXJhbSB0aXRsZSBicmVhZGNydW1iIHRpdGxlIGZvciB0aGUgZ2l2ZW4gcGF0aFxuICAgKi9cbiAgcHVibGljIHNldFRpdGxlKHBhdGg6IHN0cmluZywgdGl0bGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0QnJlYWRjcnVtYih0aGlzLm5vcm1hbGl6ZVBhdGgocGF0aCksIHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHVybDogcGF0aCxcbiAgICB9KTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0ZW1wb3JhcnkgYnJlYWNydW1iIGZvciBhIHBhdGgsIGxpa2UgJ0MnIGZvciAnYS9iL2MnXG4gICAqIEBwYXJhbSBwYXRoIHJlbGF0aXZlIHBhdGhcbiAgICogQHBhcmFtIHRpdGxlIGJyZWFkY3J1bWIgdGl0bGUgZm9yIHRoZSBnaXZlbiBwYXRoXG4gICAqL1xuICBwdWJsaWMgc2V0VGVtcG9yYXJ5VGl0bGUocGF0aDogc3RyaW5nLCB0aXRsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wb3JhcnlQYXRoVG9CcmVhZGNydW1iTWFwLnNldCh0aGlzLm5vcm1hbGl6ZVBhdGgocGF0aCksIHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHVybDogcGF0aCxcbiAgICB9KTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0ZW1wb3JhcnkgYnJlYWNydW1iIGZvciBhIHJvdXRlJ3MgdXJsXG4gICAqIEBwYXJhbSByb3V0ZSB0aGUgbWF0Y2hlZCByb3V0ZVxuICAgKiBAcGFyYW0gdGl0bGUgdGhlIGRlc2lyZWQgdGl0bGVcbiAgICovXG4gIHB1YmxpYyBzZXRUZW1wb3JhcnlUaXRsZUZvclJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCB0aXRsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRUZW1wb3JhcnlUaXRsZSh0aGlzLnJvdXRlVG9QYXRoRnJvbVJvb3Qocm91dGUpLCB0aXRsZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGVtcG9yYXJ5IGJyZWFkY3J1bWIgZm9yIGEgcm91dGUgc3VwZXJwYXRoIGNvbnRhaW5pbmcgYWxsIHJlcXVpcmVkIHNlZ21lbnRzLlxuICAgKiBFLmcuIGEgYnJlYWRjcnVtYiB3aXRoIHRoZSB1cmwgWy4uLl0vYS9iIHdpbGwgYmUgY3JlYXRlZCBmb3IgYSByb3V0ZSBwYXRoIC86QS86Qi86QyBhbmQgdGhlIHJlcXVpcmVkIHNlZ21lbnRzIFsnOkEnLCAnOkInXSBvciBbJzpCJ11cbiAgICogQHBhcmFtIHJvdXRlIHRoZSBtYXRjaGVkIHJvdXRlXG4gICAqIEBwYXJhbSByZXF1aXJlZFBhdGhTZWdtZW50cyB0aGUgcmVxdWlyZWQgcGF0aCBzZWdtZW50cywgcGFyYW1ldGVycyBwcmVmaXhlZCB3aXRoICc6J1xuICAgKiBAcGFyYW0gdGl0bGUgdGhlIGRlc2lyZWQgdGl0bGVcbiAgICovXG4gIHB1YmxpYyBzZXRUZW1wb3JhcnlUaXRsZUZvclBhcnRpYWxSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgcmVxdWlyZWRQYXRoU2VnbWVudHM6IHN0cmluZ1tdLCB0aXRsZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbWlzc2luZ1BhdGhTZWdtZW50cyA9IG5ldyBTZXQocmVxdWlyZWRQYXRoU2VnbWVudHMpO1xuICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLnJvdXRlVG9QYXRoRnJvbVJvb3Qocm91dGUucGFyZW50KTtcbiAgICBjb25zdCBwYXRoU2VnbWVudHMgPSB0aGlzLmdldFBhdGhTZWdtZW50cyhyb3V0ZSk7XG4gICAgY29uc3QgcmVsYXRpdmVVcmxTZWdtZW50czogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhTZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGF0aFNlZ21lbnQgPSBwYXRoU2VnbWVudHNbaV0ucGF0aDtcbiAgICAgIGNvbnN0IHVybFNlZ21lbnQgPSByb3V0ZS51cmxbaV0ucGF0aDtcbiAgICAgIG1pc3NpbmdQYXRoU2VnbWVudHMuZGVsZXRlKHBhdGhTZWdtZW50KTtcbiAgICAgIHJlbGF0aXZlVXJsU2VnbWVudHMucHVzaCh1cmxTZWdtZW50KTtcblxuICAgICAgaWYgKG1pc3NpbmdQYXRoU2VnbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWlzc2luZ1BhdGhTZWdtZW50cy5zaXplID4gMCkge1xuICAgICAgY29uc29sZS53YXJuKCdSZXF1aXJlZCBwYXRoIHNlZ21lbnRzIG1pc3NpbmcsIG5vIG5ldyBicmVhZGNydW1iIGhhcyBiZWVuIGRlZmluZWQ6ICcgKyBBcnJheS5mcm9tKG1pc3NpbmdQYXRoU2VnbWVudHMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGl2ZVVybCA9IHJlbGF0aXZlVXJsU2VnbWVudHMubGVuZ3RoID4gMCA/ICcvJyArIHJlbGF0aXZlVXJsU2VnbWVudHMuam9pbignLycpIDogJyc7XG4gICAgdGhpcy5zZXRUZW1wb3JhcnlUaXRsZShiYXNlVXJsICsgcmVsYXRpdmVVcmwsIHRpdGxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBVUkwgc3RyaW5nIGZyb20gcm9vdCB0byB0aGUgZ2l2ZW4gcm91dGUgKGluY2x1ZGluZykuXG4gICAqIEBwYXJhbSByb3V0ZSBsYXN0IHJvdXRlIHBhcnQgb2YgdGhlIHVybC5cbiAgICogQHJldHVybnMgVVJMIGZyb20gcm9vdCB0byByb3V0ZS5cbiAgICovXG4gIHB1YmxpYyByb3V0ZVRvUGF0aEZyb21Sb290KHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy8nICsgcm91dGUucGF0aEZyb21Sb290Lm1hcChcbiAgICAgIHIgPT4gci51cmwubWFwKHVybFNlZ21lbnQgPT4gdXJsU2VnbWVudC5wYXRoKS5maWx0ZXIocyA9PiAhIXMubGVuZ3RoKS5qb2luKCcvJylcbiAgICApLmZpbHRlcihzID0+ICEhcy5sZW5ndGgpLmpvaW4oJy8nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNvbXB1dGUgYnJlYWRjcnVtYnMgZm9yIGN1cnJlbnRseSBhY3RpdmF0ZWQgcm91dGVcbiAgICovXG4gIHB1YmxpYyByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuYnJlYWRjcnVtYnMkLm5leHQodGhpcy5wYXJzZUFjdGl2YXRlZFJvdXRlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXRoU2VnbWVudHMocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcbiAgICBpZiAoIXJvdXRlLnJvdXRlQ29uZmlnIHx8ICFyb3V0ZS5yb3V0ZUNvbmZpZy5wYXRoKSB7XG4gICAgICByZXR1cm4gcm91dGUudXJsO1xuICAgIH1cbiAgICBjb25zdCB1cmxUcmVlID0gdGhpcy5yb3V0ZXIucGFyc2VVcmwocm91dGUucm91dGVDb25maWcucGF0aCk7XG4gICAgaWYgKHVybFRyZWUucm9vdCAmJiB1cmxUcmVlLnJvb3QuY2hpbGRyZW4gJiYgdXJsVHJlZS5yb290LmNoaWxkcmVuLnByaW1hcnkpIHtcbiAgICAgIHJldHVybiB1cmxUcmVlLnJvb3QuY2hpbGRyZW4ucHJpbWFyeS5zZWdtZW50cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc05hdmlnYXRpb25JdGVtcyhuYXZpZ2F0aW9uSXRlbXM6IFNpZGViYXJOYXZJdGVtW10pIHtcbiAgICB0aGlzLmZsYXR0ZW5OYXZpZ2F0aW9uSXRlbXMobmF2aWdhdGlvbkl0ZW1zKS5mb3JFYWNoKCh7dXJsLCB0aXRsZX0pID0+IHRoaXMuc2V0QnJlYWRjcnVtYih1cmwsIHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBmbGF0dGVuTmF2aWdhdGlvbkl0ZW1zKG5hdkl0ZW1zOiBTaWRlYmFyTmF2SXRlbVtdKTogU2lkZWJhck5hdkl0ZW1bXSB7XG4gICAgcmV0dXJuIG5hdkl0ZW1zLm1hcChuYXZJdGVtID0+IHtcbiAgICAgIGlmIChuYXZJdGVtLml0ZW1zICYmIG5hdkl0ZW0uaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0dGVuTmF2aWdhdGlvbkl0ZW1zKG5hdkl0ZW0uaXRlbXMpLmNvbmNhdChuYXZJdGVtKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbbmF2SXRlbV07XG4gICAgfSkucmVkdWNlKChwcmV2LCBjdXIpID0+IHByZXYuY29uY2F0KGN1cikpO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZUFjdGl2YXRlZFJvdXRlKCk6IEJyZWFkY3J1bWJbXSB7XG4gICAgY29uc3QgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJbXSA9IFtdO1xuICAgIGNvbnN0IHBhdGhTZWdtZW50czogc3RyaW5nW10gPSBbXTtcblxuICAgIC8vIGdldCBwYXRoIHNlZ21lbnRzXG4gICAgZm9yIChsZXQgcm91dGUgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90OyByb3V0ZTsgcm91dGUgPSByb3V0ZS5maXJzdENoaWxkKSB7XG4gICAgICBwYXRoU2VnbWVudHMucHVzaCguLi5yb3V0ZS51cmwubWFwKHNlZ21lbnQgPT4gc2VnbWVudC5wYXRoKSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIFwiL1wiIChcIkhvbWVcIikgdG8gYnJlYWRjcnVtYnNcbiAgICBpZiAodGhpcy5zdGlja3lSb290QnJlYWRjcnVtYiB8fCBwYXRoU2VnbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBwYXRoU2VnbWVudHMudW5zaGlmdCgnJyk7XG4gICAgfVxuXG4gICAgLy8gbG9vayBmb3IgYnJlYWRjcnVtYnMgbWF0Y2hpbmcgc3VwZXJwYXRocyBvZiB0aGUgY3VycmVudCBwYXRoIHN0YXJ0aW5nIGZyb20gdGhlIHJvb3RcbiAgICBjb25zdCBzdXBlcnBhdGhTZWdtZW50cyA9IFtdO1xuICAgIGZvciAoY29uc3QgcGF0aFNlZ21lbnQgb2YgcGF0aFNlZ21lbnRzKSB7XG4gICAgICBzdXBlcnBhdGhTZWdtZW50cy5wdXNoKHBhdGhTZWdtZW50KTtcbiAgICAgIGNvbnN0IGJyZWFkY3J1bWJFbGVtZW50OiBCcmVhZGNydW1iID0gdGhpcy5nZXRCcmVhZGNydW1iKHRoaXMudG9QYXRoKHN1cGVycGF0aFNlZ21lbnRzKSk7XG4gICAgICBpZiAoISFicmVhZGNydW1iRWxlbWVudCkge1xuICAgICAgICBicmVhZGNydW1icy5wdXNoKGJyZWFkY3J1bWJFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoISFicmVhZGNydW1icy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGxhc3RCcmVhZGNydW1iID0gYnJlYWRjcnVtYnNbYnJlYWRjcnVtYnMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAobGFzdEJyZWFkY3J1bWIudXJsICYmIHRoaXMubm9ybWFsaXplUGF0aChsYXN0QnJlYWRjcnVtYi51cmwpID09PSB0aGlzLnRvUGF0aChwYXRoU2VnbWVudHMpKSB7XG4gICAgICAgIC8vIGRvIG5vdCBsaW5rIGJyZWFkY3J1bWIgZm9yIGN1cnJlbnRseSBhY3RpdmF0ZWQgcm91dGVcbiAgICAgICAgYnJlYWRjcnVtYnNbYnJlYWRjcnVtYnMubGVuZ3RoIC0gMV0gPSB7XG4gICAgICAgICAgLi4ubGFzdEJyZWFkY3J1bWIsXG4gICAgICAgICAgdXJsOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCcmVhZGNydW1iKHBhdGg6IHN0cmluZyk6IEJyZWFkY3J1bWIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnRlbXBvcmFyeVBhdGhUb0JyZWFkY3J1bWJNYXAuZ2V0KHBhdGgpIHx8IHRoaXMucGF0aFRvQnJlYWRjcnVtYk1hcC5nZXQocGF0aCk7XG4gIH1cblxuICBwcml2YXRlIHNldEJyZWFkY3J1bWIocGF0aDogc3RyaW5nLCBicmVhZGNydW1iOiBCcmVhZGNydW1iKTogdm9pZCB7XG4gICAgdGhpcy5wYXRoVG9CcmVhZGNydW1iTWFwLnNldCh0aGlzLm5vcm1hbGl6ZVBhdGgocGF0aCksIGJyZWFkY3J1bWIpO1xuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVQYXRoKHBhdGg6IHN0cmluZykge1xuICAgIGlmIChwYXRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgdGVtcFBhdGggPSBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggOiAnLycgKyBwYXRoO1xuICAgIHJldHVybiB0ZW1wUGF0aC5lbmRzV2l0aCgnLycpID8gdGVtcFBhdGggOiB0ZW1wUGF0aCArICcvJztcbiAgfVxuXG4gIHByaXZhdGUgdG9QYXRoKHBhdGhTZWdtZW50czogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVQYXRoKHBhdGhTZWdtZW50cy5qb2luKCcvJykpO1xuICB9XG59XG4iXX0=