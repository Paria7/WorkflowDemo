import { Injector, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarNavItem } from '../bci-sidebar/sidebar-nav-item.model';
import { BciSidebarService } from '../bci-sidebar/bci-sidebar.service';
import { CdkOverlayOrigin, Overlay } from '@angular/cdk/overlay';
/**
 * Time and timing curve for expansion panel animations.
 **/
export declare const SIDENAV_LINKS_ANIMATION_TIMING = "225ms cubic-bezier(0.4,0.0,0.2,1)";
export declare const ITEM_EXPANDED_STATES: {
    expanded: string;
    collapsed: string;
};
export declare class BciSidebarNavItemComponent implements OnInit {
    private router;
    private sidebarService;
    overlay: Overlay;
    viewContainerRef: ViewContainerRef;
    private injector;
    navItem: SidebarNavItem;
    expanded: boolean;
    popoverOrigin: CdkOverlayOrigin;
    constructor(router: Router, sidebarService: BciSidebarService, overlay: Overlay, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    hasItems(): boolean;
    /**
     * Check if the route of this {@link navItem} is in the active route (including parent routes, excluding the home route).
     * @returns true if it's the active route.
     */
    isActiveRoute(navItem: SidebarNavItem): boolean;
    onFirstLevelClick(): void;
    onSecondLevelClick(navItem: SidebarNavItem): void;
    getExpandedState(): "expanded" | "collapsed";
    openOverlay(): void;
    private getRouteFromUrl(url);
    private toggleExpanded();
}
