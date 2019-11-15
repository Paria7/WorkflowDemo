/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, Injector, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SidebarNavItem } from '../bci-sidebar/sidebar-nav-item.model';
import { BciSidebarService } from '../bci-sidebar/bci-sidebar.service';
import { CdkOverlayOrigin, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
/** *
 * Time and timing curve for expansion panel animations.
 *
  @type {?} */
export const SIDENAV_LINKS_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/** @type {?} */
export const ITEM_EXPANDED_STATES = { expanded: 'expanded', collapsed: 'collapsed' };
export class BciSidebarNavItemComponent {
    /**
     * @param {?} router
     * @param {?} sidebarService
     * @param {?} overlay
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(router, sidebarService, overlay, viewContainerRef, injector) {
        this.router = router;
        this.sidebarService = sidebarService;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.expanded = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isActiveRoute(this.navItem)) {
            this.toggleExpanded();
        }
    }
    /**
     * @return {?}
     */
    hasItems() {
        return this.navItem.items && this.navItem.items.length > 0;
    }
    /**
     * Check if the route of this {\@link navItem} is in the active route (including parent routes, excluding the home route).
     * @param {?} navItem
     * @return {?} true if it's the active route.
     */
    isActiveRoute(navItem) {
        /** @type {?} */
        const exact = navItem.routerLinkActiveOptions ? navItem.routerLinkActiveOptions.exact : false;
        /** @type {?} */
        const route = this.getRouteFromUrl(navItem.url);
        return !!route && this.router.isActive(route, exact);
    }
    /**
     * @return {?}
     */
    onFirstLevelClick() {
        if (this.hasItems()) {
            this.toggleExpanded();
        }
        else if (this.navItem.url) {
            this.sidebarService.navigateToUrl(this.navItem.url, { queryParams: this.navItem.queryParams });
        }
        else if (this.navItem.cb) {
            this.navItem.cb();
        }
        else if (this.navItem.overlay) {
            this.openOverlay();
        }
    }
    /**
     * @param {?} navItem
     * @return {?}
     */
    onSecondLevelClick(navItem) {
        if (navItem.url) {
            this.sidebarService.navigateToUrl(navItem.url, { queryParams: navItem.queryParams });
        }
        else if (navItem.cb) {
            navItem.cb();
        }
    }
    /**
     * @return {?}
     */
    getExpandedState() {
        return this.expanded ? 'expanded' : 'collapsed';
    }
    /**
     * @return {?}
     */
    openOverlay() {
        /** @type {?} */
        const strategy = this.overlay.position()
            .connectedTo(this.popoverOrigin.elementRef, { originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' });
        /** @type {?} */
        const config = new OverlayConfig({
            positionStrategy: strategy,
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop'
        });
        /** @type {?} */
        const overlayRef = this.overlay.create(config);
        /** @type {?} */
        const overlayComponent = this.navItem.overlay.component;
        /** @type {?} */
        const overlayConfig = this.navItem.overlay.config;
        /** @type {?} */
        const componentRef = overlayRef.attach(new ComponentPortal(overlayComponent, this.viewContainerRef));
        componentRef.instance.config = overlayConfig;
        componentRef.instance.onClose.subscribe(() => overlayRef.detach());
        overlayRef.backdropClick().subscribe(() => overlayRef.detach());
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getRouteFromUrl(url) {
        /** @type {?} */
        let urlObject;
        try {
            urlObject = new URL(url);
        }
        catch (e) {
            // assuming TypeError, Invalid URL -> navigate internally directly to URL
            return url;
        }
        if (!!urlObject) {
            if (urlObject.origin === window.location.origin) {
                // TODO: consider baseHref
                return urlObject.pathname;
            }
            else {
                // no internal route
                return undefined;
            }
        }
    }
    /**
     * @return {?}
     */
    toggleExpanded() {
        this.expanded = !this.expanded;
    }
}
BciSidebarNavItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-sidebar-nav-item',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<mat-list-item [style.position]="'relative'" [class.active]="isActiveRoute(navItem)" (click)="onFirstLevelClick()"
               cdk-overlay-origin #popoverOrigin="cdkOverlayOrigin">
  <mat-icon matListIcon fontSet="bosch" [fontIcon]="navItem?.icon" *ngIf="navItem?.icon"
            class="nav-link-icon"></mat-icon>
  <p matLine>{{ navItem?.title }}</p>
  <mat-icon *ngIf="hasItems()" fontSet="bosch" fontIcon="Bosch-Ic-arrow-expand-right" class="expand-icon"
            [@indicatorRotate]="getExpandedState()"></mat-icon>
</mat-list-item>
<ng-container *ngIf="hasItems()">
  <div [@bodyExpansion]="getExpandedState()" class="sub-nav-links-container" [class.sub-nav-links-expanded]="expanded">
    <!--<ng-content select="bci-sidebar-nav-item" ></ng-content>-->
    <mat-list-item class="sub-nav-link" *ngFor="let item of navItem?.items" (click)="onSecondLevelClick(item)"
                   [class.active]="isActiveRoute(item)">
      <p matLine>{{ item?.title }}</p>
    </mat-list-item>
  </div>
</ng-container>
`,
                styles: [`@charset "UTF-8";/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */:host{display:block;border-width:0 0 1px;border-color:rgba(255,255,255,.05);border-style:solid;border-radius:0}:host:hover{background-color:rgba(0,0,0,.05)}:host:hover mat-icon,:host:hover p{color:#bfc0c2}:host .mat-list-item{border-width:0 0 0 4px;border-color:transparent;border-style:solid;border-radius:0}:host .mat-list-item.active{border-color:#008ecf}:host .mat-list-item.has-items::before{font-family:Bosch-Ic;content:"";font-style:normal;font-size:24px}:host .mat-list-item.sub-nav-link{margin-left:36px}:host .mat-list-item mat-icon,:host .mat-list-item p{color:#fff}:host .mat-list-item mat-icon{font-size:20px}:host .mat-list-item p{font-family:Bosch-Sans;font-weight:300;font-size:16px}:host .mat-list-item ::ng-deep .mat-list-text{padding:0 8px}:host .mat-list-item ::ng-deep .mat-list-item-content{padding:0 16px 0 8px}.sub-nav-links-expanded .sub-nav-links-container{overflow:visible}.sub-nav-links-container,.sub-nav-links-container.ng-animating{overflow:hidden}`],
                animations: [
                    trigger('bodyExpansion', [
                        state(ITEM_EXPANDED_STATES.collapsed, style({ height: '0px', visibility: 'hidden' })),
                        state(ITEM_EXPANDED_STATES.expanded, style({ height: '*', visibility: 'visible' })),
                        transition(`${ITEM_EXPANDED_STATES.expanded} <=> ${ITEM_EXPANDED_STATES.collapsed}`, animate(SIDENAV_LINKS_ANIMATION_TIMING)),
                    ]),
                    trigger('indicatorRotate', [
                        state(ITEM_EXPANDED_STATES.collapsed, style({ transform: 'rotate(0deg)' })),
                        state(ITEM_EXPANDED_STATES.expanded, style({ transform: 'rotate(90deg)' })),
                        transition(`${ITEM_EXPANDED_STATES.expanded} <=> ${ITEM_EXPANDED_STATES.collapsed}`, animate(SIDENAV_LINKS_ANIMATION_TIMING)),
                    ])
                ]
            },] },
];
/** @nocollapse */
BciSidebarNavItemComponent.ctorParameters = () => [
    { type: Router },
    { type: BciSidebarService },
    { type: Overlay },
    { type: ViewContainerRef },
    { type: Injector }
];
BciSidebarNavItemComponent.propDecorators = {
    navItem: [{ type: Input }],
    popoverOrigin: [{ type: ViewChild, args: ['popoverOrigin',] }]
};
if (false) {
    /** @type {?} */
    BciSidebarNavItemComponent.prototype.navItem;
    /** @type {?} */
    BciSidebarNavItemComponent.prototype.expanded;
    /** @type {?} */
    BciSidebarNavItemComponent.prototype.popoverOrigin;
    /** @type {?} */
    BciSidebarNavItemComponent.prototype.router;
    /** @type {?} */
    BciSidebarNavItemComponent.prototype.sidebarService;
    /** @type {?} */
    BciSidebarNavItemComponent.prototype.overlay;
    /** @type {?} */
    BciSidebarNavItemComponent.prototype.viewContainerRef;
    /** @type {?} */
    BciSidebarNavItemComponent.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLXNpZGViYXItbmF2LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbGF5b3V0L2JjaS1zaWRlYmFyLW5hdi1pdGVtL2JjaS1zaWRlYmFyLW5hdi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsUUFBUSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUcsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7OztBQU10RCxhQUFhLDhCQUE4QixHQUFHLG1DQUFtQyxDQUFDOztBQUVsRixhQUFhLG9CQUFvQixHQUFHLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUM7QUEwQ3JGLE1BQU07Ozs7Ozs7O0lBT0osWUFBb0IsTUFBYyxFQUFVLGNBQWlDLEVBQzFELFNBQXlCLGdCQUFrQyxFQUFVLFFBQWtCO1FBRHRGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDMUQsWUFBTyxHQUFQLE9BQU87UUFBa0IscUJBQWdCLEdBQWhCLGdCQUFnQixD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OEJBQThCLENBQUMsQ0FBQztxQkFDOUgsQ0FBQztpQkFDSDthQUNGOzs7O1lBdERRLE1BQU07WUFHTixpQkFBaUI7WUFDQyxPQUFPO1lBTm9DLGdCQUFnQjtZQUFwRCxRQUFROzs7c0JBMkR2QyxLQUFLOzRCQUdMLFNBQVMsU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudFJlZiwgSW5qZWN0b3IsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2SXRlbSB9IGZyb20gJy4uL2JjaS1zaWRlYmFyL3NpZGViYXItbmF2LWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgQmNpU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuLi9iY2ktc2lkZWJhci9iY2ktc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IENka092ZXJsYXlPcmlnaW4sIE92ZXJsYXksIE92ZXJsYXlDb25maWcgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENsb3NhYmxlT3ZlcmxheUNvbXBvbmVudE1vZGVsIH0gZnJvbSAnLi4vYmNpLXNpZGViYXIvY2xvc2FibGUtb3ZlcmxheS1jb21wb25lbnQubW9kZWwnO1xuXG4vKipcbiAqIFRpbWUgYW5kIHRpbWluZyBjdXJ2ZSBmb3IgZXhwYW5zaW9uIHBhbmVsIGFuaW1hdGlvbnMuXG4gKiovXG5leHBvcnQgY29uc3QgU0lERU5BVl9MSU5LU19BTklNQVRJT05fVElNSU5HID0gJzIyNW1zIGN1YmljLWJlemllcigwLjQsMC4wLDAuMiwxKSc7XG5cbmV4cG9ydCBjb25zdCBJVEVNX0VYUEFOREVEX1NUQVRFUyA9IHsgZXhwYW5kZWQ6ICdleHBhbmRlZCcsIGNvbGxhcHNlZDogJ2NvbGxhcHNlZCcgfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLXNpZGViYXItbmF2LWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bWF0LWxpc3QtaXRlbSBbc3R5bGUucG9zaXRpb25dPVwiJ3JlbGF0aXZlJ1wiIFtjbGFzcy5hY3RpdmVdPVwiaXNBY3RpdmVSb3V0ZShuYXZJdGVtKVwiIChjbGljayk9XCJvbkZpcnN0TGV2ZWxDbGljaygpXCJcbiAgICAgICAgICAgICAgIGNkay1vdmVybGF5LW9yaWdpbiAjcG9wb3Zlck9yaWdpbj1cImNka092ZXJsYXlPcmlnaW5cIj5cbiAgPG1hdC1pY29uIG1hdExpc3RJY29uIGZvbnRTZXQ9XCJib3NjaFwiIFtmb250SWNvbl09XCJuYXZJdGVtPy5pY29uXCIgKm5nSWY9XCJuYXZJdGVtPy5pY29uXCJcbiAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmstaWNvblwiPjwvbWF0LWljb24+XG4gIDxwIG1hdExpbmU+e3sgbmF2SXRlbT8udGl0bGUgfX08L3A+XG4gIDxtYXQtaWNvbiAqbmdJZj1cImhhc0l0ZW1zKClcIiBmb250U2V0PVwiYm9zY2hcIiBmb250SWNvbj1cIkJvc2NoLUljLWFycm93LWV4cGFuZC1yaWdodFwiIGNsYXNzPVwiZXhwYW5kLWljb25cIlxuICAgICAgICAgICAgW0BpbmRpY2F0b3JSb3RhdGVdPVwiZ2V0RXhwYW5kZWRTdGF0ZSgpXCI+PC9tYXQtaWNvbj5cbjwvbWF0LWxpc3QtaXRlbT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNJdGVtcygpXCI+XG4gIDxkaXYgW0Bib2R5RXhwYW5zaW9uXT1cImdldEV4cGFuZGVkU3RhdGUoKVwiIGNsYXNzPVwic3ViLW5hdi1saW5rcy1jb250YWluZXJcIiBbY2xhc3Muc3ViLW5hdi1saW5rcy1leHBhbmRlZF09XCJleHBhbmRlZFwiPlxuICAgIDwhLS08bmctY29udGVudCBzZWxlY3Q9XCJiY2ktc2lkZWJhci1uYXYtaXRlbVwiID48L25nLWNvbnRlbnQ+LS0+XG4gICAgPG1hdC1saXN0LWl0ZW0gY2xhc3M9XCJzdWItbmF2LWxpbmtcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBuYXZJdGVtPy5pdGVtc1wiIChjbGljayk9XCJvblNlY29uZExldmVsQ2xpY2soaXRlbSlcIlxuICAgICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiaXNBY3RpdmVSb3V0ZShpdGVtKVwiPlxuICAgICAgPHAgbWF0TGluZT57eyBpdGVtPy50aXRsZSB9fTwvcD5cbiAgICA8L21hdC1saXN0LWl0ZW0+XG4gIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG5gLFxuICBzdHlsZXM6IFtgQGNoYXJzZXQgXCJVVEYtOFwiOy8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovOmhvc3R7ZGlzcGxheTpibG9jaztib3JkZXItd2lkdGg6MCAwIDFweDtib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMDUpO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjB9Omhvc3Q6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNSl9Omhvc3Q6aG92ZXIgbWF0LWljb24sOmhvc3Q6aG92ZXIgcHtjb2xvcjojYmZjMGMyfTpob3N0IC5tYXQtbGlzdC1pdGVte2JvcmRlci13aWR0aDowIDAgMCA0cHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjB9Omhvc3QgLm1hdC1saXN0LWl0ZW0uYWN0aXZle2JvcmRlci1jb2xvcjojMDA4ZWNmfTpob3N0IC5tYXQtbGlzdC1pdGVtLmhhcy1pdGVtczo6YmVmb3Jle2ZvbnQtZmFtaWx5OkJvc2NoLUljO2NvbnRlbnQ6XCLvhJ1cIjtmb250LXN0eWxlOm5vcm1hbDtmb250LXNpemU6MjRweH06aG9zdCAubWF0LWxpc3QtaXRlbS5zdWItbmF2LWxpbmt7bWFyZ2luLWxlZnQ6MzZweH06aG9zdCAubWF0LWxpc3QtaXRlbSBtYXQtaWNvbiw6aG9zdCAubWF0LWxpc3QtaXRlbSBwe2NvbG9yOiNmZmZ9Omhvc3QgLm1hdC1saXN0LWl0ZW0gbWF0LWljb257Zm9udC1zaXplOjIwcHh9Omhvc3QgLm1hdC1saXN0LWl0ZW0gcHtmb250LWZhbWlseTpCb3NjaC1TYW5zO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTZweH06aG9zdCAubWF0LWxpc3QtaXRlbSA6Om5nLWRlZXAgLm1hdC1saXN0LXRleHR7cGFkZGluZzowIDhweH06aG9zdCAubWF0LWxpc3QtaXRlbSA6Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW0tY29udGVudHtwYWRkaW5nOjAgMTZweCAwIDhweH0uc3ViLW5hdi1saW5rcy1leHBhbmRlZCAuc3ViLW5hdi1saW5rcy1jb250YWluZXJ7b3ZlcmZsb3c6dmlzaWJsZX0uc3ViLW5hdi1saW5rcy1jb250YWluZXIsLnN1Yi1uYXYtbGlua3MtY29udGFpbmVyLm5nLWFuaW1hdGluZ3tvdmVyZmxvdzpoaWRkZW59YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdib2R5RXhwYW5zaW9uJywgW1xuICAgICAgc3RhdGUoSVRFTV9FWFBBTkRFRF9TVEFURVMuY29sbGFwc2VkLCBzdHlsZSh7IGhlaWdodDogJzBweCcsIHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pKSxcbiAgICAgIHN0YXRlKElURU1fRVhQQU5ERURfU1RBVEVTLmV4cGFuZGVkLCBzdHlsZSh7IGhlaWdodDogJyonLCB2aXNpYmlsaXR5OiAndmlzaWJsZScgfSkpLFxuICAgICAgdHJhbnNpdGlvbihgJHtJVEVNX0VYUEFOREVEX1NUQVRFUy5leHBhbmRlZH0gPD0+ICR7SVRFTV9FWFBBTkRFRF9TVEFURVMuY29sbGFwc2VkfWAsIGFuaW1hdGUoU0lERU5BVl9MSU5LU19BTklNQVRJT05fVElNSU5HKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignaW5kaWNhdG9yUm90YXRlJywgW1xuICAgICAgc3RhdGUoSVRFTV9FWFBBTkRFRF9TVEFURVMuY29sbGFwc2VkLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScgfSkpLFxuICAgICAgc3RhdGUoSVRFTV9FWFBBTkRFRF9TVEFURVMuZXhwYW5kZWQsIHN0eWxlKHsgdHJhbnNmb3JtOiAncm90YXRlKDkwZGVnKScgfSkpLFxuICAgICAgdHJhbnNpdGlvbihgJHtJVEVNX0VYUEFOREVEX1NUQVRFUy5leHBhbmRlZH0gPD0+ICR7SVRFTV9FWFBBTkRFRF9TVEFURVMuY29sbGFwc2VkfWAsIGFuaW1hdGUoU0lERU5BVl9MSU5LU19BTklNQVRJT05fVElNSU5HKSksXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCY2lTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbmF2SXRlbTogU2lkZWJhck5hdkl0ZW07XG4gIHB1YmxpYyBleHBhbmRlZCA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ3BvcG92ZXJPcmlnaW4nKSBwb3BvdmVyT3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IEJjaVNpZGViYXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgb3ZlcmxheTogT3ZlcmxheSwgcHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZVJvdXRlKHRoaXMubmF2SXRlbSkpIHtcbiAgICAgIHRoaXMudG9nZ2xlRXhwYW5kZWQoKTtcbiAgICB9XG4gIH1cblxuICBoYXNJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZJdGVtLml0ZW1zICYmIHRoaXMubmF2SXRlbS5pdGVtcy5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSByb3V0ZSBvZiB0aGlzIHtAbGluayBuYXZJdGVtfSBpcyBpbiB0aGUgYWN0aXZlIHJvdXRlIChpbmNsdWRpbmcgcGFyZW50IHJvdXRlcywgZXhjbHVkaW5nIHRoZSBob21lIHJvdXRlKS5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiBpdCdzIHRoZSBhY3RpdmUgcm91dGUuXG4gICAqL1xuICBpc0FjdGl2ZVJvdXRlKG5hdkl0ZW06IFNpZGViYXJOYXZJdGVtKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZXhhY3QgPSBuYXZJdGVtLnJvdXRlckxpbmtBY3RpdmVPcHRpb25zID8gbmF2SXRlbS5yb3V0ZXJMaW5rQWN0aXZlT3B0aW9ucy5leGFjdCA6IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5nZXRSb3V0ZUZyb21VcmwobmF2SXRlbS51cmwpO1xuICAgIHJldHVybiAhIXJvdXRlICYmIHRoaXMucm91dGVyLmlzQWN0aXZlKHJvdXRlLCBleGFjdCk7XG4gIH1cblxuICBvbkZpcnN0TGV2ZWxDbGljaygpIHtcbiAgICBpZiAodGhpcy5oYXNJdGVtcygpKSB7XG4gICAgICB0aGlzLnRvZ2dsZUV4cGFuZGVkKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5hdkl0ZW0udXJsKSB7XG4gICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLm5hdmlnYXRlVG9VcmwodGhpcy5uYXZJdGVtLnVybCwgeyBxdWVyeVBhcmFtczogdGhpcy5uYXZJdGVtLnF1ZXJ5UGFyYW1zIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uYXZJdGVtLmNiKSB7XG4gICAgICB0aGlzLm5hdkl0ZW0uY2IoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmF2SXRlbS5vdmVybGF5KSB7XG4gICAgICB0aGlzLm9wZW5PdmVybGF5KCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWNvbmRMZXZlbENsaWNrKG5hdkl0ZW06IFNpZGViYXJOYXZJdGVtKSB7XG4gICAgaWYgKG5hdkl0ZW0udXJsKSB7XG4gICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLm5hdmlnYXRlVG9VcmwobmF2SXRlbS51cmwsIHsgcXVlcnlQYXJhbXM6IG5hdkl0ZW0ucXVlcnlQYXJhbXMgfSk7XG4gICAgfSBlbHNlIGlmIChuYXZJdGVtLmNiKSB7XG4gICAgICBuYXZJdGVtLmNiKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXhwYW5kZWRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZCA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJztcbiAgfVxuXG4gIG9wZW5PdmVybGF5KCkge1xuICAgIGNvbnN0IHN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcbiAgICAgIC5jb25uZWN0ZWRUbyhcbiAgICAgICAgdGhpcy5wb3BvdmVyT3JpZ2luLmVsZW1lbnRSZWYsXG4gICAgICAgIHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KTtcblxuICAgIGNvbnN0IGNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHN0cmF0ZWd5LFxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICBiYWNrZHJvcENsYXNzOiAnY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnXG4gICAgfSk7XG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoY29uZmlnKTtcblxuICAgIGNvbnN0IG92ZXJsYXlDb21wb25lbnQgPSB0aGlzLm5hdkl0ZW0ub3ZlcmxheS5jb21wb25lbnQ7XG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHRoaXMubmF2SXRlbS5vdmVybGF5LmNvbmZpZztcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPENsb3NhYmxlT3ZlcmxheUNvbXBvbmVudE1vZGVsPHR5cGVvZiBvdmVybGF5Q29uZmlnPj4gPSBvdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKG92ZXJsYXlDb21wb25lbnQsIHRoaXMudmlld0NvbnRhaW5lclJlZikpO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb25maWcgPSBvdmVybGF5Q29uZmlnO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5vbkNsb3NlLnN1YnNjcmliZSgoKSA9PiBvdmVybGF5UmVmLmRldGFjaCgpKTtcbiAgICBvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gb3ZlcmxheVJlZi5kZXRhY2goKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFJvdXRlRnJvbVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHVybE9iamVjdDtcbiAgICB0cnkge1xuICAgICAgdXJsT2JqZWN0ID0gbmV3IFVSTCh1cmwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGFzc3VtaW5nIFR5cGVFcnJvciwgSW52YWxpZCBVUkwgLT4gbmF2aWdhdGUgaW50ZXJuYWxseSBkaXJlY3RseSB0byBVUkxcbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIGlmICghIXVybE9iamVjdCkge1xuICAgICAgaWYgKHVybE9iamVjdC5vcmlnaW4gPT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgICAgLy8gVE9ETzogY29uc2lkZXIgYmFzZUhyZWZcbiAgICAgICAgcmV0dXJuIHVybE9iamVjdC5wYXRobmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vIGludGVybmFsIHJvdXRlXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZUV4cGFuZGVkKCkge1xuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgfVxuXG59XG4iXX0=