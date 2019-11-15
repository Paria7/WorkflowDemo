import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { SidebarNavItem } from './layout/index';
import { Breadcrumb } from '../shared/breadcrumbs/breadcrumb/breadcrumb.model';
/**
 * Provides list of breadcrumbs for the currently active route.
 * HOW TO USE:
 * Import this module in app.module with "BreadcrumbsModule".
 * Position it on the page using the html tag <bci-breadcrumbs>.
 * Define custom titles and temporary titles, which will be cleared upon navigation.
 */
export declare class BreadcrumbsService implements OnDestroy {
    private router;
    private activatedRoute;
    /**
     * Always show "home"-route in breadcrumbs (default: false)
     */
    stickyRootBreadcrumb: boolean;
    private breadcrumbs$;
    /**
     * Observable providing the list of Breadcrumb (current as well as future lists)
     */
    breadcrumbs: Observable<Breadcrumb[]>;
    private pathToBreadcrumbMap;
    private temporaryPathToBreadcrumbMap;
    private ngUnsubscribe;
    constructor(router: Router, activatedRoute: ActivatedRoute);
    ngOnDestroy(): void;
    setNavigationItems(navItems: SidebarNavItem[]): void;
    /**
     * Set title for a path, like setTitle('a/b/c', 'C');
     * @param path relative path
     * @param title breadcrumb title for the given path
     */
    setTitle(path: string, title: string): void;
    /**
     * Create a temporary breacrumb for a path, like 'C' for 'a/b/c'
     * @param path relative path
     * @param title breadcrumb title for the given path
     */
    setTemporaryTitle(path: string, title: string): void;
    /**
     * Create a temporary breacrumb for a route's url
     * @param route the matched route
     * @param title the desired title
     */
    setTemporaryTitleForRoute(route: ActivatedRouteSnapshot, title: string): void;
    /**
     * Create a temporary breadcrumb for a route superpath containing all required segments.
     * E.g. a breadcrumb with the url [...]/a/b will be created for a route path /:A/:B/:C and the required segments [':A', ':B'] or [':B']
     * @param route the matched route
     * @param requiredPathSegments the required path segments, parameters prefixed with ':'
     * @param title the desired title
     */
    setTemporaryTitleForPartialRoute(route: ActivatedRouteSnapshot, requiredPathSegments: string[], title: string): void;
    /**
     * Build URL string from root to the given route (including).
     * @param route last route part of the url.
     * @returns URL from root to route.
     */
    routeToPathFromRoot(route: ActivatedRouteSnapshot): string;
    /**
     * Recompute breadcrumbs for currently activated route
     */
    refresh(): void;
    private getPathSegments(route);
    private processNavigationItems(navigationItems);
    private flattenNavigationItems(navItems);
    private parseActivatedRoute();
    private getBreadcrumb(path);
    private setBreadcrumb(path, breadcrumb);
    private normalizePath(path);
    private toPath(pathSegments);
}
