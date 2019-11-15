/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, Input, ViewChild } from '@angular/core';
import { BciSidebarService } from './bci-sidebar.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var BciSidebarComponent = /** @class */ (function () {
    function BciSidebarComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.applicationTitle = '';
        this.open = true;
        this.visible = true;
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    BciSidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // TODO: remember sidebar state (opened/closed) in storage provider and load here
        this.sidebarService.getSidebarState().pipe(takeUntil(this.componentDestroyed$)).subscribe(function (state) {
            _this.open = state;
            if (state && _this.visible) {
                _this.sidenav.open();
            }
            else {
                _this.sidenav.close();
            }
        });
        this.sidebarService.getSidebarVisibility().pipe(takeUntil(this.componentDestroyed$)).subscribe(function (visible) {
            _this.visible = visible;
            if (visible && _this.open) {
                _this.sidenav.open();
            }
            else {
                _this.sidenav.close();
            }
        });
    };
    /**
     * @return {?}
     */
    BciSidebarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    };
    /**
     * @return {?}
     */
    BciSidebarComponent.prototype.toggleSideNavigationBar = /**
     * @return {?}
     */
    function () {
        this.sidebarService.setSidebarState(!this.open);
    };
    /**
     * @return {?}
     */
    BciSidebarComponent.prototype.isOpen = /**
     * @return {?}
     */
    function () {
        return this.open;
    };
    /**
     * @return {?}
     */
    BciSidebarComponent.prototype.isVisible = /**
     * @return {?}
     */
    function () {
        return this.visible;
    };
    BciSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-sidebar',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-sidenav-container class=\"\">\n\n\n  <mat-sidenav #sidenav mode=\"side\" [disableClose]=\"true\" fxLayout=\"column\"><!--[opened]=\"isOpen() && isVisible()\"-->\n    <div class=\"sidenav-header\">\n      <h1>{{applicationTitle}}</h1>\n      <div class=\"burger\" (click)=\"toggleSideNavigationBar();\">\n        <div class=\"burger-line\" [class.burgerTop]=\"isOpen()\"></div>\n        <div class=\"burger-line\" [class.burgerMiddle]=\"isOpen()\"></div>\n        <div class=\"burger-line\" [class.burgerBottom]=\"isOpen()\"></div>\n      </div>\n    </div>\n    <bci-sidebar-nav-list [navItems]=\"sidebarLinks\"\n                          *ngIf=\"sidebarLinks && sidebarLinks.length > 0\"></bci-sidebar-nav-list>\n\n    <ng-content select=\"bci-sidebar-footer\"></ng-content>\n  </mat-sidenav>\n\n  <div class=\"content-container\" fxLayout=\"row\">\n    <div class=\"sidenav-header closed-sidebar\" *ngIf=\"!isOpen() && isVisible()\" (click)=\"toggleSideNavigationBar();\">\n      <div class=\"burger\">\n        <div class=\"burger-line\" [class.burgerTop]=\"isOpen()\"></div>\n        <div class=\"burger-line\" [class.burgerMiddle]=\"isOpen()\"></div>\n        <div class=\"burger-line\" [class.burgerBottom]=\"isOpen()\"></div>\n      </div>\n    </div>\n    <div class=\"bci-content-container-main\" fxLayout=\"column\" fxFlex=\"grow\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</mat-sidenav-container>\n",
                    styles: ["@charset \"UTF-8\";/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */mat-sidenav-container{height:100vh}mat-sidenav-container mat-sidenav{background-color:#525f6b;margin-top:16px;width:300px}mat-sidenav-container mat-sidenav .sidenav-items{padding:0;border-width:0 0 1px;border-color:rgba(255,255,255,.05);border-style:solid;border-radius:0}mat-sidenav-container mat-sidenav .sidenav-items li{width:100%;margin:0;border-width:1px 0 0;border-color:rgba(255,255,255,.05);border-style:solid;border-radius:0}mat-sidenav-container mat-sidenav .sidenav-items .header-container,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item{padding:0 16px;display:inline-block;width:100%;line-height:48px;font-family:Bosch-Sans;font-weight:300;font-size:16px;border-width:0 0 0 4px;border-color:transparent;border-style:solid;border-radius:0}mat-sidenav-container mat-sidenav .sidenav-items .header-container:hover,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item:hover{background-color:rgba(0,0,0,.05);color:#bfc0c2}mat-sidenav-container mat-sidenav .sidenav-items .header-container.active,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item.active{border-color:#008ecf}mat-sidenav-container mat-sidenav .sidenav-items .header-container.has-items::before,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item.has-items::before{font-family:Bosch-Ic;content:\"\uF11D\";font-style:normal;font-size:24px}mat-sidenav-container mat-sidenav .sidenav-subitems{padding:0 0 0 16px}mat-sidenav-container ::ng-deep .mat-drawer-content{overflow:hidden}mat-sidenav-container .sidenav-header{cursor:default;position:relative;height:64px;border-width:0 0 1px;border-color:rgba(255,255,255,.05);border-style:solid;border-radius:0}mat-sidenav-container .sidenav-header.closed-sidebar{margin-top:16px;width:50px;height:100vh;background-color:#525f6b;cursor:pointer}mat-sidenav-container .sidenav-header .burger{display:inline-block;position:absolute;right:0;margin:25px 16px 0 0;cursor:pointer}mat-sidenav-container .sidenav-header .burger .burger-line{height:1px;width:24px;background-color:#fff;margin-bottom:6px;transition:.4s}mat-sidenav-container .sidenav-header .burger .burger-line.burgerMiddle{opacity:0}mat-sidenav-container .sidenav-header .burger .burger-line.burgerTop{-webkit-transform:rotate(-45deg) translateY(4px) translateX(-4px);transform:rotate(-45deg) translateY(4px) translateX(-4px);opacity:1!important}mat-sidenav-container .sidenav-header .burger .burger-line.burgerBottom{-webkit-transform:rotate(45deg) translateX(-6.5px) translateY(-6.5px);transform:rotate(45deg) translateX(-6.5px) translateY(-6.5px);opacity:1!important}mat-sidenav-container .sidenav-header h1{display:inline-block;margin:0 0 0 16px;line-height:64px;white-space:nowrap;width:220px;overflow:hidden;text-overflow:ellipsis;color:#bfc0c2;font-family:Bosch-Sans;font-weight:300;font-size:20px}.content-container{position:absolute;left:0;right:0;top:0;bottom:0}.bci-content-container-main{margin:16px 0 0;overflow:hidden}"]
                },] },
    ];
    /** @nocollapse */
    BciSidebarComponent.ctorParameters = function () { return [
        { type: BciSidebarService }
    ]; };
    BciSidebarComponent.propDecorators = {
        applicationTitle: [{ type: Input }],
        sidebarLinks: [{ type: Input }],
        sidenav: [{ type: ViewChild, args: ['sidenav',] }]
    };
    return BciSidebarComponent;
}());
export { BciSidebarComponent };
if (false) {
    /** @type {?} */
    BciSidebarComponent.prototype.applicationTitle;
    /** @type {?} */
    BciSidebarComponent.prototype.sidebarLinks;
    /** @type {?} */
    BciSidebarComponent.prototype.sidenav;
    /** @type {?} */
    BciSidebarComponent.prototype.open;
    /** @type {?} */
    BciSidebarComponent.prototype.visible;
    /** @type {?} */
    BciSidebarComponent.prototype.componentDestroyed$;
    /** @type {?} */
    BciSidebarComponent.prototype.sidebarService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbGF5b3V0L2JjaS1zaWRlYmFyL2JjaS1zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBb0R6Qyw2QkFBb0IsY0FBaUM7UUFBakMsbUJBQWMsR0FBZCxjQUFjLENBQW1CO2dDQVBsQixFQUFFO29CQUd0QixJQUFJO3VCQUNELElBQUk7bUNBQ1EsSUFBSSxPQUFPLEVBQUU7S0FHMUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFtQkM7O1FBakJDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDN0YsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN0QjtTQUNGLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNwRyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3JDOzs7O0lBRUQscURBQXVCOzs7SUFBdkI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNqRDs7OztJQUVELG9DQUFNOzs7SUFBTjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCOzs7O0lBRUQsdUNBQVM7OztJQUFUO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7O2dCQXpGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSx3Z0RBbUNYO29CQUNDLE1BQU0sRUFBRSxDQUFDLG9nR0FFeTNGLENBQUM7aUJBQ3A0Rjs7OztnQkE5Q1EsaUJBQWlCOzs7bUNBZ0R2QixLQUFLOytCQUNMLEtBQUs7MEJBQ0wsU0FBUyxTQUFDLFNBQVM7OzhCQXhEdEI7O1NBcURhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkl0ZW0gfSBmcm9tICcuL3NpZGViYXItbmF2LWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgQmNpU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuL2JjaS1zaWRlYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0U2lkZW5hdiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktc2lkZWJhcicsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XCJcIj5cblxuXG4gIDxtYXQtc2lkZW5hdiAjc2lkZW5hdiBtb2RlPVwic2lkZVwiIFtkaXNhYmxlQ2xvc2VdPVwidHJ1ZVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+PCEtLVtvcGVuZWRdPVwiaXNPcGVuKCkgJiYgaXNWaXNpYmxlKClcIi0tPlxuICAgIDxkaXYgY2xhc3M9XCJzaWRlbmF2LWhlYWRlclwiPlxuICAgICAgPGgxPnt7YXBwbGljYXRpb25UaXRsZX19PC9oMT5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXJnZXJcIiAoY2xpY2spPVwidG9nZ2xlU2lkZU5hdmlnYXRpb25CYXIoKTtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1cmdlci1saW5lXCIgW2NsYXNzLmJ1cmdlclRvcF09XCJpc09wZW4oKVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyLWxpbmVcIiBbY2xhc3MuYnVyZ2VyTWlkZGxlXT1cImlzT3BlbigpXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXJnZXItbGluZVwiIFtjbGFzcy5idXJnZXJCb3R0b21dPVwiaXNPcGVuKClcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxiY2ktc2lkZWJhci1uYXYtbGlzdCBbbmF2SXRlbXNdPVwic2lkZWJhckxpbmtzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzaWRlYmFyTGlua3MgJiYgc2lkZWJhckxpbmtzLmxlbmd0aCA+IDBcIj48L2JjaS1zaWRlYmFyLW5hdi1saXN0PlxuXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYmNpLXNpZGViYXItZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICA8L21hdC1zaWRlbmF2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiIGZ4TGF5b3V0PVwicm93XCI+XG4gICAgPGRpdiBjbGFzcz1cInNpZGVuYXYtaGVhZGVyIGNsb3NlZC1zaWRlYmFyXCIgKm5nSWY9XCIhaXNPcGVuKCkgJiYgaXNWaXNpYmxlKClcIiAoY2xpY2spPVwidG9nZ2xlU2lkZU5hdmlnYXRpb25CYXIoKTtcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXJnZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1cmdlci1saW5lXCIgW2NsYXNzLmJ1cmdlclRvcF09XCJpc09wZW4oKVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyLWxpbmVcIiBbY2xhc3MuYnVyZ2VyTWlkZGxlXT1cImlzT3BlbigpXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXJnZXItbGluZVwiIFtjbGFzcy5idXJnZXJCb3R0b21dPVwiaXNPcGVuKClcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJiY2ktY29udGVudC1jb250YWluZXItbWFpblwiIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiZ3Jvd1wiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxuYCxcbiAgc3R5bGVzOiBbYEBjaGFyc2V0IFwiVVRGLThcIjsvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL21hdC1zaWRlbmF2LWNvbnRhaW5lcntoZWlnaHQ6MTAwdmh9bWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2e2JhY2tncm91bmQtY29sb3I6IzUyNWY2YjttYXJnaW4tdG9wOjE2cHg7d2lkdGg6MzAwcHh9bWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlbmF2LWl0ZW1ze3BhZGRpbmc6MDtib3JkZXItd2lkdGg6MCAwIDFweDtib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMDUpO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjB9bWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlbmF2LWl0ZW1zIGxpe3dpZHRoOjEwMCU7bWFyZ2luOjA7Ym9yZGVyLXdpZHRoOjFweCAwIDA7Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjA1KTtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czowfW1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZW5hdi1pdGVtcyAuaGVhZGVyLWNvbnRhaW5lcixtYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVuYXYtaXRlbXMgLnNpZGVuYXYtaXRlbXtwYWRkaW5nOjAgMTZweDtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxMDAlO2xpbmUtaGVpZ2h0OjQ4cHg7Zm9udC1mYW1pbHk6Qm9zY2gtU2Fucztmb250LXdlaWdodDozMDA7Zm9udC1zaXplOjE2cHg7Ym9yZGVyLXdpZHRoOjAgMCAwIDRweDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6MH1tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVuYXYtaXRlbXMgLmhlYWRlci1jb250YWluZXI6aG92ZXIsbWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlbmF2LWl0ZW1zIC5zaWRlbmF2LWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNSk7Y29sb3I6I2JmYzBjMn1tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVuYXYtaXRlbXMgLmhlYWRlci1jb250YWluZXIuYWN0aXZlLG1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZW5hdi1pdGVtcyAuc2lkZW5hdi1pdGVtLmFjdGl2ZXtib3JkZXItY29sb3I6IzAwOGVjZn1tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVuYXYtaXRlbXMgLmhlYWRlci1jb250YWluZXIuaGFzLWl0ZW1zOjpiZWZvcmUsbWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlbmF2LWl0ZW1zIC5zaWRlbmF2LWl0ZW0uaGFzLWl0ZW1zOjpiZWZvcmV7Zm9udC1mYW1pbHk6Qm9zY2gtSWM7Y29udGVudDpcIu+EnVwiO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtc2l6ZToyNHB4fW1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZW5hdi1zdWJpdGVtc3twYWRkaW5nOjAgMCAwIDE2cHh9bWF0LXNpZGVuYXYtY29udGFpbmVyIDo6bmctZGVlcCAubWF0LWRyYXdlci1jb250ZW50e292ZXJmbG93OmhpZGRlbn1tYXQtc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtaGVhZGVye2N1cnNvcjpkZWZhdWx0O3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDo2NHB4O2JvcmRlci13aWR0aDowIDAgMXB4O2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4wNSk7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6MH1tYXQtc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtaGVhZGVyLmNsb3NlZC1zaWRlYmFye21hcmdpbi10b3A6MTZweDt3aWR0aDo1MHB4O2hlaWdodDoxMDB2aDtiYWNrZ3JvdW5kLWNvbG9yOiM1MjVmNmI7Y3Vyc29yOnBvaW50ZXJ9bWF0LXNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWhlYWRlciAuYnVyZ2Vye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7bWFyZ2luOjI1cHggMTZweCAwIDA7Y3Vyc29yOnBvaW50ZXJ9bWF0LXNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWhlYWRlciAuYnVyZ2VyIC5idXJnZXItbGluZXtoZWlnaHQ6MXB4O3dpZHRoOjI0cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO21hcmdpbi1ib3R0b206NnB4O3RyYW5zaXRpb246LjRzfW1hdC1zaWRlbmF2LWNvbnRhaW5lciAuc2lkZW5hdi1oZWFkZXIgLmJ1cmdlciAuYnVyZ2VyLWxpbmUuYnVyZ2VyTWlkZGxle29wYWNpdHk6MH1tYXQtc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtaGVhZGVyIC5idXJnZXIgLmJ1cmdlci1saW5lLmJ1cmdlclRvcHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKDRweCkgdHJhbnNsYXRlWCgtNHB4KTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSg0cHgpIHRyYW5zbGF0ZVgoLTRweCk7b3BhY2l0eToxIWltcG9ydGFudH1tYXQtc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtaGVhZGVyIC5idXJnZXIgLmJ1cmdlci1saW5lLmJ1cmdlckJvdHRvbXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVgoLTYuNXB4KSB0cmFuc2xhdGVZKC02LjVweCk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWCgtNi41cHgpIHRyYW5zbGF0ZVkoLTYuNXB4KTtvcGFjaXR5OjEhaW1wb3J0YW50fW1hdC1zaWRlbmF2LWNvbnRhaW5lciAuc2lkZW5hdi1oZWFkZXIgaDF7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjAgMCAwIDE2cHg7bGluZS1oZWlnaHQ6NjRweDt3aGl0ZS1zcGFjZTpub3dyYXA7d2lkdGg6MjIwcHg7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7Y29sb3I6I2JmYzBjMjtmb250LWZhbWlseTpCb3NjaC1TYW5zO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MjBweH0uY29udGVudC1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjB9LmJjaS1jb250ZW50LWNvbnRhaW5lci1tYWlue21hcmdpbjoxNnB4IDAgMDtvdmVyZmxvdzpoaWRkZW59YF1cbn0pXG5leHBvcnQgY2xhc3MgQmNpU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIGFwcGxpY2F0aW9uVGl0bGUgPSAnJztcbiAgQElucHV0KCkgcHVibGljIHNpZGViYXJMaW5rczogU2lkZWJhck5hdkl0ZW1bXTtcbiAgQFZpZXdDaGlsZCgnc2lkZW5hdicpIHByaXZhdGUgc2lkZW5hdjogTWF0U2lkZW5hdjtcbiAgcHJpdmF0ZSBvcGVuID0gdHJ1ZTtcbiAgcHJpdmF0ZSB2aXNpYmxlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBCY2lTaWRlYmFyU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gVE9ETzogcmVtZW1iZXIgc2lkZWJhciBzdGF0ZSAob3BlbmVkL2Nsb3NlZCkgaW4gc3RvcmFnZSBwcm92aWRlciBhbmQgbG9hZCBoZXJlXG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS5nZXRTaWRlYmFyU3RhdGUoKS5waXBlKHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpKS5zdWJzY3JpYmUoc3RhdGUgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gc3RhdGU7XG4gICAgICBpZiAoc3RhdGUgJiYgdGhpcy52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuc2lkZW5hdi5vcGVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNpZGVuYXYuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuZ2V0U2lkZWJhclZpc2liaWxpdHkoKS5waXBlKHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpKS5zdWJzY3JpYmUodmlzaWJsZSA9PiB7XG4gICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgaWYgKHZpc2libGUgJiYgdGhpcy5vcGVuKSB7XG4gICAgICAgIHRoaXMuc2lkZW5hdi5vcGVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNpZGVuYXYuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxuICB0b2dnbGVTaWRlTmF2aWdhdGlvbkJhcigpIHtcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnNldFNpZGViYXJTdGF0ZSghdGhpcy5vcGVuKTtcbiAgfVxuXG4gIGlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vcGVuO1xuICB9XG5cbiAgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpc2libGU7XG4gIH1cblxufVxuIl19