/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
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
export class BreadcrumbsService {
    /**
     * @param {?} router
     * @param {?} activatedRoute
     */
    constructor(router, activatedRoute) {
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
        this.router.events.pipe(takeUntil(this.ngUnsubscribe), filter(event => event instanceof NavigationEnd)).subscribe(() => this.refresh());
        // clean up temporary path-to-title mappings upon start of navigation
        this.router.events.pipe(takeUntil(this.ngUnsubscribe), filter(event => event instanceof NavigationStart)).subscribe(event => {
            /** @type {?} */
            const oldUrl = this.normalizePath((/** @type {?} */ (event)).url);
            Array.from(this.temporaryPathToBreadcrumbMap.keys(), (path) => {
                if (!oldUrl.startsWith(path)) {
                    this.temporaryPathToBreadcrumbMap.delete(path);
                }
            });
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    /**
     * @param {?} navItems
     * @return {?}
     */
    setNavigationItems(navItems) {
        this.processNavigationItems(navItems);
        this.refresh();
    }
    /**
     * Set title for a path, like setTitle('a/b/c', 'C');
     * @param {?} path relative path
     * @param {?} title breadcrumb title for the given path
     * @return {?}
     */
    setTitle(path, title) {
        this.setBreadcrumb(this.normalizePath(path), {
            title: title,
            url: path,
        });
        this.refresh();
    }
    /**
     * Create a temporary breacrumb for a path, like 'C' for 'a/b/c'
     * @param {?} path relative path
     * @param {?} title breadcrumb title for the given path
     * @return {?}
     */
    setTemporaryTitle(path, title) {
        this.temporaryPathToBreadcrumbMap.set(this.normalizePath(path), {
            title: title,
            url: path,
        });
        this.refresh();
    }
    /**
     * Create a temporary breacrumb for a route's url
     * @param {?} route the matched route
     * @param {?} title the desired title
     * @return {?}
     */
    setTemporaryTitleForRoute(route, title) {
        this.setTemporaryTitle(this.routeToPathFromRoot(route), title);
    }
    /**
     * Create a temporary breadcrumb for a route superpath containing all required segments.
     * E.g. a breadcrumb with the url [...]/a/b will be created for a route path /:A/:B/:C and the required segments [':A', ':B'] or [':B']
     * @param {?} route the matched route
     * @param {?} requiredPathSegments the required path segments, parameters prefixed with ':'
     * @param {?} title the desired title
     * @return {?}
     */
    setTemporaryTitleForPartialRoute(route, requiredPathSegments, title) {
        /** @type {?} */
        const missingPathSegments = new Set(requiredPathSegments);
        /** @type {?} */
        const baseUrl = this.routeToPathFromRoot(route.parent);
        /** @type {?} */
        const pathSegments = this.getPathSegments(route);
        /** @type {?} */
        const relativeUrlSegments = [];
        for (let i = 0; i < pathSegments.length; i++) {
            /** @type {?} */
            const pathSegment = pathSegments[i].path;
            /** @type {?} */
            const urlSegment = route.url[i].path;
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
        const relativeUrl = relativeUrlSegments.length > 0 ? '/' + relativeUrlSegments.join('/') : '';
        this.setTemporaryTitle(baseUrl + relativeUrl, title);
    }
    /**
     * Build URL string from root to the given route (including).
     * @param {?} route last route part of the url.
     * @return {?} URL from root to route.
     */
    routeToPathFromRoot(route) {
        return '/' + route.pathFromRoot.map(r => r.url.map(urlSegment => urlSegment.path).filter(s => !!s.length).join('/')).filter(s => !!s.length).join('/');
    }
    /**
     * Recompute breadcrumbs for currently activated route
     * @return {?}
     */
    refresh() {
        this.breadcrumbs$.next(this.parseActivatedRoute());
    }
    /**
     * @param {?} route
     * @return {?}
     */
    getPathSegments(route) {
        if (!route.routeConfig || !route.routeConfig.path) {
            return route.url;
        }
        /** @type {?} */
        const urlTree = this.router.parseUrl(route.routeConfig.path);
        if (urlTree.root && urlTree.root.children && urlTree.root.children["primary"]) {
            return urlTree.root.children["primary"].segments;
        }
        else {
            return [];
        }
    }
    /**
     * @param {?} navigationItems
     * @return {?}
     */
    processNavigationItems(navigationItems) {
        this.flattenNavigationItems(navigationItems).forEach(({ url, title }) => this.setBreadcrumb(url, {
            title: title,
            url: url
        }));
    }
    /**
     * @param {?} navItems
     * @return {?}
     */
    flattenNavigationItems(navItems) {
        return navItems.map(navItem => {
            if (navItem.items && navItem.items.length > 0) {
                return this.flattenNavigationItems(navItem.items).concat(navItem);
            }
            return [navItem];
        }).reduce((prev, cur) => prev.concat(cur));
    }
    /**
     * @return {?}
     */
    parseActivatedRoute() {
        /** @type {?} */
        const breadcrumbs = [];
        /** @type {?} */
        const pathSegments = [];
        // get path segments
        for (let route = this.activatedRoute.snapshot; route; route = route.firstChild) {
            pathSegments.push(...route.url.map(segment => segment.path));
        }
        // add "/" ("Home") to breadcrumbs
        if (this.stickyRootBreadcrumb || pathSegments.length === 0) {
            pathSegments.unshift('');
        }
        /** @type {?} */
        const superpathSegments = [];
        for (const pathSegment of pathSegments) {
            superpathSegments.push(pathSegment);
            /** @type {?} */
            const breadcrumbElement = this.getBreadcrumb(this.toPath(superpathSegments));
            if (!!breadcrumbElement) {
                breadcrumbs.push(breadcrumbElement);
            }
        }
        if (!!breadcrumbs.length) {
            /** @type {?} */
            const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];
            if (lastBreadcrumb.url && this.normalizePath(lastBreadcrumb.url) === this.toPath(pathSegments)) {
                // do not link breadcrumb for currently activated route
                breadcrumbs[breadcrumbs.length - 1] = Object.assign({}, lastBreadcrumb, { url: undefined });
            }
        }
        return breadcrumbs;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    getBreadcrumb(path) {
        return this.temporaryPathToBreadcrumbMap.get(path) || this.pathToBreadcrumbMap.get(path);
    }
    /**
     * @param {?} path
     * @param {?} breadcrumb
     * @return {?}
     */
    setBreadcrumb(path, breadcrumb) {
        this.pathToBreadcrumbMap.set(this.normalizePath(path), breadcrumb);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    normalizePath(path) {
        if (path === undefined) {
            return '';
        }
        /** @type {?} */
        const tempPath = path.startsWith('/') ? path : '/' + path;
        return tempPath.endsWith('/') ? tempPath : tempPath + '/';
    }
    /**
     * @param {?} pathSegments
     * @return {?}
     */
    toPath(pathSegments) {
        return this.normalizePath(pathSegments.join('/'));
    }
}
BreadcrumbsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
BreadcrumbsService.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
/** @nocollapse */ BreadcrumbsService.ngInjectableDef = i0.defineInjectable({ factory: function BreadcrumbsService_Factory() { return new BreadcrumbsService(i0.inject(i1.Router), i0.inject(i1.ActivatedRoute)); }, token: BreadcrumbsService, providedIn: "root" });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2JyZWFkY3J1bWJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFNUQsT0FBTyxFQUFFLGNBQWMsRUFBMEIsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqSCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7O0FBZW5ELE1BQU07Ozs7O0lBZ0JKLFlBQ1UsUUFDQTtRQURBLFdBQU0sR0FBTixNQUFNO1FBQ04sbUJBQWMsR0FBZCxjQUFjOzs7O29DQWJNLEtBQUs7NEJBQ21CLElBQUksZUFBZSxDQUFlLEVBQUUsQ0FBQzs7OzsyQkFJNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7bUNBQ2pELElBQUksR0FBRyxFQUFzQjs0Q0FDcEIsSUFBSSxHQUFHLEVBQXNCOzZCQUU5QixJQUFJLE9BQU8sRUFBRTs7UUFTakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNyQixTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFlBQVksYUFBYSxDQUFDLENBQ2hELENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDOztRQUdsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3JCLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQzdCLE1BQU0sQ0FB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QUFDOzs7Ozs7SUFHcEQsTUFBTSxDQUFDLFlBQXNCO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7OztZQS9OckQsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBZmdGLE1BQU07WUFBOUUsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25TdGFydCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRQcmVmZXJTaG9ydEltcG9ydCBkdWUgdG8gY3ljbGljIGRlcGVuZGVuY3lcbmltcG9ydCB7IFNpZGViYXJOYXZJdGVtIH0gZnJvbSAnLi9sYXlvdXQvaW5kZXgnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYiB9IGZyb20gJy4uL3NoYXJlZC9icmVhZGNydW1icy9icmVhZGNydW1iL2JyZWFkY3J1bWIubW9kZWwnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGxpc3Qgb2YgYnJlYWRjcnVtYnMgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIHJvdXRlLlxuICogSE9XIFRPIFVTRTpcbiAqIEltcG9ydCB0aGlzIG1vZHVsZSBpbiBhcHAubW9kdWxlIHdpdGggXCJCcmVhZGNydW1ic01vZHVsZVwiLlxuICogUG9zaXRpb24gaXQgb24gdGhlIHBhZ2UgdXNpbmcgdGhlIGh0bWwgdGFnIDxiY2ktYnJlYWRjcnVtYnM+LlxuICogRGVmaW5lIGN1c3RvbSB0aXRsZXMgYW5kIHRlbXBvcmFyeSB0aXRsZXMsIHdoaWNoIHdpbGwgYmUgY2xlYXJlZCB1cG9uIG5hdmlnYXRpb24uXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJzU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIEFsd2F5cyBzaG93IFwiaG9tZVwiLXJvdXRlIGluIGJyZWFkY3J1bWJzIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIHB1YmxpYyBzdGlja3lSb290QnJlYWRjcnVtYiA9IGZhbHNlO1xuICBwcml2YXRlIGJyZWFkY3J1bWJzJDogQmVoYXZpb3JTdWJqZWN0PEJyZWFkY3J1bWJbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEJyZWFkY3J1bWJbXT4oW10pO1xuICAvKipcbiAgICogT2JzZXJ2YWJsZSBwcm92aWRpbmcgdGhlIGxpc3Qgb2YgQnJlYWRjcnVtYiAoY3VycmVudCBhcyB3ZWxsIGFzIGZ1dHVyZSBsaXN0cylcbiAgICovXG4gIHB1YmxpYyBicmVhZGNydW1iczogT2JzZXJ2YWJsZTxCcmVhZGNydW1iW10+ID0gdGhpcy5icmVhZGNydW1icyQuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgcGF0aFRvQnJlYWRjcnVtYk1hcCA9IG5ldyBNYXA8c3RyaW5nLCBCcmVhZGNydW1iPigpO1xuICBwcml2YXRlIHRlbXBvcmFyeVBhdGhUb0JyZWFkY3J1bWJNYXAgPSBuZXcgTWFwPHN0cmluZywgQnJlYWRjcnVtYj4oKTtcblxuICBwcml2YXRlIG5nVW5zdWJzY3JpYmU6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHtcblxuXG4gICAgLy8gdXBkYXRlIGJyZWFkY3J1bWJzIGFmdGVyIG5hdmdpYXRpb25cbiAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLm5nVW5zdWJzY3JpYmUpLFxuICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xuXG4gICAgLy8gY2xlYW4gdXAgdGVtcG9yYXJ5IHBhdGgtdG8tdGl0bGUgbWFwcGluZ3MgdXBvbiBzdGFydCBvZiBuYXZpZ2F0aW9uXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5uZ1Vuc3Vic2NyaWJlKSxcbiAgICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCksXG4gICAgKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgY29uc3Qgb2xkVXJsID0gdGhpcy5ub3JtYWxpemVQYXRoKChldmVudCBhcyBOYXZpZ2F0aW9uU3RhcnQpLnVybCk7XG4gICAgICBBcnJheS5mcm9tKHRoaXMudGVtcG9yYXJ5UGF0aFRvQnJlYWRjcnVtYk1hcC5rZXlzKCksIChwYXRoKSA9PiB7XG4gICAgICAgIGlmICghb2xkVXJsLnN0YXJ0c1dpdGgocGF0aCkpIHtcbiAgICAgICAgICB0aGlzLnRlbXBvcmFyeVBhdGhUb0JyZWFkY3J1bWJNYXAuZGVsZXRlKHBhdGgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubmdVbnN1YnNjcmliZS5uZXh0KCk7XG4gICAgdGhpcy5uZ1Vuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0TmF2aWdhdGlvbkl0ZW1zKG5hdkl0ZW1zOiBTaWRlYmFyTmF2SXRlbVtdKSB7XG4gICAgdGhpcy5wcm9jZXNzTmF2aWdhdGlvbkl0ZW1zKG5hdkl0ZW1zKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGl0bGUgZm9yIGEgcGF0aCwgbGlrZSBzZXRUaXRsZSgnYS9iL2MnLCAnQycpO1xuICAgKiBAcGFyYW0gcGF0aCByZWxhdGl2ZSBwYXRoXG4gICAqIEBwYXJhbSB0aXRsZSBicmVhZGNydW1iIHRpdGxlIGZvciB0aGUgZ2l2ZW4gcGF0aFxuICAgKi9cbiAgcHVibGljIHNldFRpdGxlKHBhdGg6IHN0cmluZywgdGl0bGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0QnJlYWRjcnVtYih0aGlzLm5vcm1hbGl6ZVBhdGgocGF0aCksIHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHVybDogcGF0aCxcbiAgICB9KTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0ZW1wb3JhcnkgYnJlYWNydW1iIGZvciBhIHBhdGgsIGxpa2UgJ0MnIGZvciAnYS9iL2MnXG4gICAqIEBwYXJhbSBwYXRoIHJlbGF0aXZlIHBhdGhcbiAgICogQHBhcmFtIHRpdGxlIGJyZWFkY3J1bWIgdGl0bGUgZm9yIHRoZSBnaXZlbiBwYXRoXG4gICAqL1xuICBwdWJsaWMgc2V0VGVtcG9yYXJ5VGl0bGUocGF0aDogc3RyaW5nLCB0aXRsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wb3JhcnlQYXRoVG9CcmVhZGNydW1iTWFwLnNldCh0aGlzLm5vcm1hbGl6ZVBhdGgocGF0aCksIHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHVybDogcGF0aCxcbiAgICB9KTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0ZW1wb3JhcnkgYnJlYWNydW1iIGZvciBhIHJvdXRlJ3MgdXJsXG4gICAqIEBwYXJhbSByb3V0ZSB0aGUgbWF0Y2hlZCByb3V0ZVxuICAgKiBAcGFyYW0gdGl0bGUgdGhlIGRlc2lyZWQgdGl0bGVcbiAgICovXG4gIHB1YmxpYyBzZXRUZW1wb3JhcnlUaXRsZUZvclJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCB0aXRsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRUZW1wb3JhcnlUaXRsZSh0aGlzLnJvdXRlVG9QYXRoRnJvbVJvb3Qocm91dGUpLCB0aXRsZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGVtcG9yYXJ5IGJyZWFkY3J1bWIgZm9yIGEgcm91dGUgc3VwZXJwYXRoIGNvbnRhaW5pbmcgYWxsIHJlcXVpcmVkIHNlZ21lbnRzLlxuICAgKiBFLmcuIGEgYnJlYWRjcnVtYiB3aXRoIHRoZSB1cmwgWy4uLl0vYS9iIHdpbGwgYmUgY3JlYXRlZCBmb3IgYSByb3V0ZSBwYXRoIC86QS86Qi86QyBhbmQgdGhlIHJlcXVpcmVkIHNlZ21lbnRzIFsnOkEnLCAnOkInXSBvciBbJzpCJ11cbiAgICogQHBhcmFtIHJvdXRlIHRoZSBtYXRjaGVkIHJvdXRlXG4gICAqIEBwYXJhbSByZXF1aXJlZFBhdGhTZWdtZW50cyB0aGUgcmVxdWlyZWQgcGF0aCBzZWdtZW50cywgcGFyYW1ldGVycyBwcmVmaXhlZCB3aXRoICc6J1xuICAgKiBAcGFyYW0gdGl0bGUgdGhlIGRlc2lyZWQgdGl0bGVcbiAgICovXG4gIHB1YmxpYyBzZXRUZW1wb3JhcnlUaXRsZUZvclBhcnRpYWxSb3V0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgcmVxdWlyZWRQYXRoU2VnbWVudHM6IHN0cmluZ1tdLCB0aXRsZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbWlzc2luZ1BhdGhTZWdtZW50cyA9IG5ldyBTZXQocmVxdWlyZWRQYXRoU2VnbWVudHMpO1xuICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLnJvdXRlVG9QYXRoRnJvbVJvb3Qocm91dGUucGFyZW50KTtcbiAgICBjb25zdCBwYXRoU2VnbWVudHMgPSB0aGlzLmdldFBhdGhTZWdtZW50cyhyb3V0ZSk7XG4gICAgY29uc3QgcmVsYXRpdmVVcmxTZWdtZW50czogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhTZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGF0aFNlZ21lbnQgPSBwYXRoU2VnbWVudHNbaV0ucGF0aDtcbiAgICAgIGNvbnN0IHVybFNlZ21lbnQgPSByb3V0ZS51cmxbaV0ucGF0aDtcbiAgICAgIG1pc3NpbmdQYXRoU2VnbWVudHMuZGVsZXRlKHBhdGhTZWdtZW50KTtcbiAgICAgIHJlbGF0aXZlVXJsU2VnbWVudHMucHVzaCh1cmxTZWdtZW50KTtcblxuICAgICAgaWYgKG1pc3NpbmdQYXRoU2VnbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWlzc2luZ1BhdGhTZWdtZW50cy5zaXplID4gMCkge1xuICAgICAgY29uc29sZS53YXJuKCdSZXF1aXJlZCBwYXRoIHNlZ21lbnRzIG1pc3NpbmcsIG5vIG5ldyBicmVhZGNydW1iIGhhcyBiZWVuIGRlZmluZWQ6ICcgKyBBcnJheS5mcm9tKG1pc3NpbmdQYXRoU2VnbWVudHMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGl2ZVVybCA9IHJlbGF0aXZlVXJsU2VnbWVudHMubGVuZ3RoID4gMCA/ICcvJyArIHJlbGF0aXZlVXJsU2VnbWVudHMuam9pbignLycpIDogJyc7XG4gICAgdGhpcy5zZXRUZW1wb3JhcnlUaXRsZShiYXNlVXJsICsgcmVsYXRpdmVVcmwsIHRpdGxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBVUkwgc3RyaW5nIGZyb20gcm9vdCB0byB0aGUgZ2l2ZW4gcm91dGUgKGluY2x1ZGluZykuXG4gICAqIEBwYXJhbSByb3V0ZSBsYXN0IHJvdXRlIHBhcnQgb2YgdGhlIHVybC5cbiAgICogQHJldHVybnMgVVJMIGZyb20gcm9vdCB0byByb3V0ZS5cbiAgICovXG4gIHB1YmxpYyByb3V0ZVRvUGF0aEZyb21Sb290KHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogc3RyaW5nIHtcbiAgICByZXR1cm4gJy8nICsgcm91dGUucGF0aEZyb21Sb290Lm1hcChcbiAgICAgIHIgPT4gci51cmwubWFwKHVybFNlZ21lbnQgPT4gdXJsU2VnbWVudC5wYXRoKS5maWx0ZXIocyA9PiAhIXMubGVuZ3RoKS5qb2luKCcvJylcbiAgICApLmZpbHRlcihzID0+ICEhcy5sZW5ndGgpLmpvaW4oJy8nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNvbXB1dGUgYnJlYWRjcnVtYnMgZm9yIGN1cnJlbnRseSBhY3RpdmF0ZWQgcm91dGVcbiAgICovXG4gIHB1YmxpYyByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuYnJlYWRjcnVtYnMkLm5leHQodGhpcy5wYXJzZUFjdGl2YXRlZFJvdXRlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXRoU2VnbWVudHMocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcbiAgICBpZiAoIXJvdXRlLnJvdXRlQ29uZmlnIHx8ICFyb3V0ZS5yb3V0ZUNvbmZpZy5wYXRoKSB7XG4gICAgICByZXR1cm4gcm91dGUudXJsO1xuICAgIH1cbiAgICBjb25zdCB1cmxUcmVlID0gdGhpcy5yb3V0ZXIucGFyc2VVcmwocm91dGUucm91dGVDb25maWcucGF0aCk7XG4gICAgaWYgKHVybFRyZWUucm9vdCAmJiB1cmxUcmVlLnJvb3QuY2hpbGRyZW4gJiYgdXJsVHJlZS5yb290LmNoaWxkcmVuLnByaW1hcnkpIHtcbiAgICAgIHJldHVybiB1cmxUcmVlLnJvb3QuY2hpbGRyZW4ucHJpbWFyeS5zZWdtZW50cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc05hdmlnYXRpb25JdGVtcyhuYXZpZ2F0aW9uSXRlbXM6IFNpZGViYXJOYXZJdGVtW10pIHtcbiAgICB0aGlzLmZsYXR0ZW5OYXZpZ2F0aW9uSXRlbXMobmF2aWdhdGlvbkl0ZW1zKS5mb3JFYWNoKCh7dXJsLCB0aXRsZX0pID0+IHRoaXMuc2V0QnJlYWRjcnVtYih1cmwsIHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBmbGF0dGVuTmF2aWdhdGlvbkl0ZW1zKG5hdkl0ZW1zOiBTaWRlYmFyTmF2SXRlbVtdKTogU2lkZWJhck5hdkl0ZW1bXSB7XG4gICAgcmV0dXJuIG5hdkl0ZW1zLm1hcChuYXZJdGVtID0+IHtcbiAgICAgIGlmIChuYXZJdGVtLml0ZW1zICYmIG5hdkl0ZW0uaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0dGVuTmF2aWdhdGlvbkl0ZW1zKG5hdkl0ZW0uaXRlbXMpLmNvbmNhdChuYXZJdGVtKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbbmF2SXRlbV07XG4gICAgfSkucmVkdWNlKChwcmV2LCBjdXIpID0+IHByZXYuY29uY2F0KGN1cikpO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZUFjdGl2YXRlZFJvdXRlKCk6IEJyZWFkY3J1bWJbXSB7XG4gICAgY29uc3QgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJbXSA9IFtdO1xuICAgIGNvbnN0IHBhdGhTZWdtZW50czogc3RyaW5nW10gPSBbXTtcblxuICAgIC8vIGdldCBwYXRoIHNlZ21lbnRzXG4gICAgZm9yIChsZXQgcm91dGUgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90OyByb3V0ZTsgcm91dGUgPSByb3V0ZS5maXJzdENoaWxkKSB7XG4gICAgICBwYXRoU2VnbWVudHMucHVzaCguLi5yb3V0ZS51cmwubWFwKHNlZ21lbnQgPT4gc2VnbWVudC5wYXRoKSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIFwiL1wiIChcIkhvbWVcIikgdG8gYnJlYWRjcnVtYnNcbiAgICBpZiAodGhpcy5zdGlja3lSb290QnJlYWRjcnVtYiB8fCBwYXRoU2VnbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBwYXRoU2VnbWVudHMudW5zaGlmdCgnJyk7XG4gICAgfVxuXG4gICAgLy8gbG9vayBmb3IgYnJlYWRjcnVtYnMgbWF0Y2hpbmcgc3VwZXJwYXRocyBvZiB0aGUgY3VycmVudCBwYXRoIHN0YXJ0aW5nIGZyb20gdGhlIHJvb3RcbiAgICBjb25zdCBzdXBlcnBhdGhTZWdtZW50cyA9IFtdO1xuICAgIGZvciAoY29uc3QgcGF0aFNlZ21lbnQgb2YgcGF0aFNlZ21lbnRzKSB7XG4gICAgICBzdXBlcnBhdGhTZWdtZW50cy5wdXNoKHBhdGhTZWdtZW50KTtcbiAgICAgIGNvbnN0IGJyZWFkY3J1bWJFbGVtZW50OiBCcmVhZGNydW1iID0gdGhpcy5nZXRCcmVhZGNydW1iKHRoaXMudG9QYXRoKHN1cGVycGF0aFNlZ21lbnRzKSk7XG4gICAgICBpZiAoISFicmVhZGNydW1iRWxlbWVudCkge1xuICAgICAgICBicmVhZGNydW1icy5wdXNoKGJyZWFkY3J1bWJFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoISFicmVhZGNydW1icy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGxhc3RCcmVhZGNydW1iID0gYnJlYWRjcnVtYnNbYnJlYWRjcnVtYnMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAobGFzdEJyZWFkY3J1bWIudXJsICYmIHRoaXMubm9ybWFsaXplUGF0aChsYXN0QnJlYWRjcnVtYi51cmwpID09PSB0aGlzLnRvUGF0aChwYXRoU2VnbWVudHMpKSB7XG4gICAgICAgIC8vIGRvIG5vdCBsaW5rIGJyZWFkY3J1bWIgZm9yIGN1cnJlbnRseSBhY3RpdmF0ZWQgcm91dGVcbiAgICAgICAgYnJlYWRjcnVtYnNbYnJlYWRjcnVtYnMubGVuZ3RoIC0gMV0gPSB7XG4gICAgICAgICAgLi4ubGFzdEJyZWFkY3J1bWIsXG4gICAgICAgICAgdXJsOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCcmVhZGNydW1iKHBhdGg6IHN0cmluZyk6IEJyZWFkY3J1bWIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnRlbXBvcmFyeVBhdGhUb0JyZWFkY3J1bWJNYXAuZ2V0KHBhdGgpIHx8IHRoaXMucGF0aFRvQnJlYWRjcnVtYk1hcC5nZXQocGF0aCk7XG4gIH1cblxuICBwcml2YXRlIHNldEJyZWFkY3J1bWIocGF0aDogc3RyaW5nLCBicmVhZGNydW1iOiBCcmVhZGNydW1iKTogdm9pZCB7XG4gICAgdGhpcy5wYXRoVG9CcmVhZGNydW1iTWFwLnNldCh0aGlzLm5vcm1hbGl6ZVBhdGgocGF0aCksIGJyZWFkY3J1bWIpO1xuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVQYXRoKHBhdGg6IHN0cmluZykge1xuICAgIGlmIChwYXRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgdGVtcFBhdGggPSBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggOiAnLycgKyBwYXRoO1xuICAgIHJldHVybiB0ZW1wUGF0aC5lbmRzV2l0aCgnLycpID8gdGVtcFBhdGggOiB0ZW1wUGF0aCArICcvJztcbiAgfVxuXG4gIHByaXZhdGUgdG9QYXRoKHBhdGhTZWdtZW50czogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVQYXRoKHBhdGhTZWdtZW50cy5qb2luKCcvJykpO1xuICB9XG59XG4iXX0=