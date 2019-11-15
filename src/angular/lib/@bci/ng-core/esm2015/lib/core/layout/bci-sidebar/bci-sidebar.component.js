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
export class BciSidebarComponent {
    /**
     * @param {?} sidebarService
     */
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.applicationTitle = '';
        this.open = true;
        this.visible = true;
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // TODO: remember sidebar state (opened/closed) in storage provider and load here
        this.sidebarService.getSidebarState().pipe(takeUntil(this.componentDestroyed$)).subscribe(state => {
            this.open = state;
            if (state && this.visible) {
                this.sidenav.open();
            }
            else {
                this.sidenav.close();
            }
        });
        this.sidebarService.getSidebarVisibility().pipe(takeUntil(this.componentDestroyed$)).subscribe(visible => {
            this.visible = visible;
            if (visible && this.open) {
                this.sidenav.open();
            }
            else {
                this.sidenav.close();
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }
    /**
     * @return {?}
     */
    toggleSideNavigationBar() {
        this.sidebarService.setSidebarState(!this.open);
    }
    /**
     * @return {?}
     */
    isOpen() {
        return this.open;
    }
    /**
     * @return {?}
     */
    isVisible() {
        return this.visible;
    }
}
BciSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-sidebar',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<mat-sidenav-container class="">


  <mat-sidenav #sidenav mode="side" [disableClose]="true" fxLayout="column"><!--[opened]="isOpen() && isVisible()"-->
    <div class="sidenav-header">
      <h1>{{applicationTitle}}</h1>
      <div class="burger" (click)="toggleSideNavigationBar();">
        <div class="burger-line" [class.burgerTop]="isOpen()"></div>
        <div class="burger-line" [class.burgerMiddle]="isOpen()"></div>
        <div class="burger-line" [class.burgerBottom]="isOpen()"></div>
      </div>
    </div>
    <bci-sidebar-nav-list [navItems]="sidebarLinks"
                          *ngIf="sidebarLinks && sidebarLinks.length > 0"></bci-sidebar-nav-list>

    <ng-content select="bci-sidebar-footer"></ng-content>
  </mat-sidenav>

  <div class="content-container" fxLayout="row">
    <div class="sidenav-header closed-sidebar" *ngIf="!isOpen() && isVisible()" (click)="toggleSideNavigationBar();">
      <div class="burger">
        <div class="burger-line" [class.burgerTop]="isOpen()"></div>
        <div class="burger-line" [class.burgerMiddle]="isOpen()"></div>
        <div class="burger-line" [class.burgerBottom]="isOpen()"></div>
      </div>
    </div>
    <div class="bci-content-container-main" fxLayout="column" fxFlex="grow">
      <ng-content></ng-content>
    </div>
  </div>
</mat-sidenav-container>
`,
                styles: [`@charset "UTF-8";/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */mat-sidenav-container{height:100vh}mat-sidenav-container mat-sidenav{background-color:#525f6b;margin-top:16px;width:300px}mat-sidenav-container mat-sidenav .sidenav-items{padding:0;border-width:0 0 1px;border-color:rgba(255,255,255,.05);border-style:solid;border-radius:0}mat-sidenav-container mat-sidenav .sidenav-items li{width:100%;margin:0;border-width:1px 0 0;border-color:rgba(255,255,255,.05);border-style:solid;border-radius:0}mat-sidenav-container mat-sidenav .sidenav-items .header-container,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item{padding:0 16px;display:inline-block;width:100%;line-height:48px;font-family:Bosch-Sans;font-weight:300;font-size:16px;border-width:0 0 0 4px;border-color:transparent;border-style:solid;border-radius:0}mat-sidenav-container mat-sidenav .sidenav-items .header-container:hover,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item:hover{background-color:rgba(0,0,0,.05);color:#bfc0c2}mat-sidenav-container mat-sidenav .sidenav-items .header-container.active,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item.active{border-color:#008ecf}mat-sidenav-container mat-sidenav .sidenav-items .header-container.has-items::before,mat-sidenav-container mat-sidenav .sidenav-items .sidenav-item.has-items::before{font-family:Bosch-Ic;content:"";font-style:normal;font-size:24px}mat-sidenav-container mat-sidenav .sidenav-subitems{padding:0 0 0 16px}mat-sidenav-container ::ng-deep .mat-drawer-content{overflow:hidden}mat-sidenav-container .sidenav-header{cursor:default;position:relative;height:64px;border-width:0 0 1px;border-color:rgba(255,255,255,.05);border-style:solid;border-radius:0}mat-sidenav-container .sidenav-header.closed-sidebar{margin-top:16px;width:50px;height:100vh;background-color:#525f6b;cursor:pointer}mat-sidenav-container .sidenav-header .burger{display:inline-block;position:absolute;right:0;margin:25px 16px 0 0;cursor:pointer}mat-sidenav-container .sidenav-header .burger .burger-line{height:1px;width:24px;background-color:#fff;margin-bottom:6px;transition:.4s}mat-sidenav-container .sidenav-header .burger .burger-line.burgerMiddle{opacity:0}mat-sidenav-container .sidenav-header .burger .burger-line.burgerTop{-webkit-transform:rotate(-45deg) translateY(4px) translateX(-4px);transform:rotate(-45deg) translateY(4px) translateX(-4px);opacity:1!important}mat-sidenav-container .sidenav-header .burger .burger-line.burgerBottom{-webkit-transform:rotate(45deg) translateX(-6.5px) translateY(-6.5px);transform:rotate(45deg) translateX(-6.5px) translateY(-6.5px);opacity:1!important}mat-sidenav-container .sidenav-header h1{display:inline-block;margin:0 0 0 16px;line-height:64px;white-space:nowrap;width:220px;overflow:hidden;text-overflow:ellipsis;color:#bfc0c2;font-family:Bosch-Sans;font-weight:300;font-size:20px}.content-container{position:absolute;left:0;right:0;top:0;bottom:0}.bci-content-container-main{margin:16px 0 0;overflow:hidden}`]
            },] },
];
/** @nocollapse */
BciSidebarComponent.ctorParameters = () => [
    { type: BciSidebarService }
];
BciSidebarComponent.propDecorators = {
    applicationTitle: [{ type: Input }],
    sidebarLinks: [{ type: Input }],
    sidenav: [{ type: ViewChild, args: ['sidenav',] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbGF5b3V0L2JjaS1zaWRlYmFyL2JjaS1zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUE0QzNDLE1BQU07Ozs7SUFRSixZQUFvQixjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7Z0NBUGxCLEVBQUU7b0JBR3RCLElBQUk7dUJBQ0QsSUFBSTttQ0FDUSxJQUFJLE9BQU8sRUFBRTtLQUcxQzs7OztJQUVELFFBQVE7O1FBRU4sSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hHLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyQjtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDdEI7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN2RyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNyQzs7OztJQUVELHVCQUF1QjtRQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNqRDs7OztJQUVELE1BQU07UUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjs7OztJQUVELFNBQVM7UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7O1lBekZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW1DWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQzs7bzRGQUV5M0YsQ0FBQzthQUNwNEY7Ozs7WUE5Q1EsaUJBQWlCOzs7K0JBZ0R2QixLQUFLOzJCQUNMLEtBQUs7c0JBQ0wsU0FBUyxTQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpZGViYXJOYXZJdGVtIH0gZnJvbSAnLi9zaWRlYmFyLW5hdi1pdGVtLm1vZGVsJztcbmltcG9ydCB7IEJjaVNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9iY2ktc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLXNpZGViYXInLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bWF0LXNpZGVuYXYtY29udGFpbmVyIGNsYXNzPVwiXCI+XG5cblxuICA8bWF0LXNpZGVuYXYgI3NpZGVuYXYgbW9kZT1cInNpZGVcIiBbZGlzYWJsZUNsb3NlXT1cInRydWVcIiBmeExheW91dD1cImNvbHVtblwiPjwhLS1bb3BlbmVkXT1cImlzT3BlbigpICYmIGlzVmlzaWJsZSgpXCItLT5cbiAgICA8ZGl2IGNsYXNzPVwic2lkZW5hdi1oZWFkZXJcIj5cbiAgICAgIDxoMT57e2FwcGxpY2F0aW9uVGl0bGV9fTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyXCIgKGNsaWNrKT1cInRvZ2dsZVNpZGVOYXZpZ2F0aW9uQmFyKCk7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXJnZXItbGluZVwiIFtjbGFzcy5idXJnZXJUb3BdPVwiaXNPcGVuKClcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1cmdlci1saW5lXCIgW2NsYXNzLmJ1cmdlck1pZGRsZV09XCJpc09wZW4oKVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyLWxpbmVcIiBbY2xhc3MuYnVyZ2VyQm90dG9tXT1cImlzT3BlbigpXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8YmNpLXNpZGViYXItbmF2LWxpc3QgW25hdkl0ZW1zXT1cInNpZGViYXJMaW5rc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic2lkZWJhckxpbmtzICYmIHNpZGViYXJMaW5rcy5sZW5ndGggPiAwXCI+PC9iY2ktc2lkZWJhci1uYXYtbGlzdD5cblxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJjaS1zaWRlYmFyLWZvb3RlclwiPjwvbmctY29udGVudD5cbiAgPC9tYXQtc2lkZW5hdj5cblxuICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIiBmeExheW91dD1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJzaWRlbmF2LWhlYWRlciBjbG9zZWQtc2lkZWJhclwiICpuZ0lmPVwiIWlzT3BlbigpICYmIGlzVmlzaWJsZSgpXCIgKGNsaWNrKT1cInRvZ2dsZVNpZGVOYXZpZ2F0aW9uQmFyKCk7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXJnZXItbGluZVwiIFtjbGFzcy5idXJnZXJUb3BdPVwiaXNPcGVuKClcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1cmdlci1saW5lXCIgW2NsYXNzLmJ1cmdlck1pZGRsZV09XCJpc09wZW4oKVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVyZ2VyLWxpbmVcIiBbY2xhc3MuYnVyZ2VyQm90dG9tXT1cImlzT3BlbigpXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYmNpLWNvbnRlbnQtY29udGFpbmVyLW1haW5cIiBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cImdyb3dcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cbmAsXG4gIHN0eWxlczogW2BAY2hhcnNldCBcIlVURi04XCI7LyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9tYXQtc2lkZW5hdi1jb250YWluZXJ7aGVpZ2h0OjEwMHZofW1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdntiYWNrZ3JvdW5kLWNvbG9yOiM1MjVmNmI7bWFyZ2luLXRvcDoxNnB4O3dpZHRoOjMwMHB4fW1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZW5hdi1pdGVtc3twYWRkaW5nOjA7Ym9yZGVyLXdpZHRoOjAgMCAxcHg7Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjA1KTtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czowfW1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZW5hdi1pdGVtcyBsaXt3aWR0aDoxMDAlO21hcmdpbjowO2JvcmRlci13aWR0aDoxcHggMCAwO2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4wNSk7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6MH1tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVuYXYtaXRlbXMgLmhlYWRlci1jb250YWluZXIsbWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlbmF2LWl0ZW1zIC5zaWRlbmF2LWl0ZW17cGFkZGluZzowIDE2cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwJTtsaW5lLWhlaWdodDo0OHB4O2ZvbnQtZmFtaWx5OkJvc2NoLVNhbnM7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc2l6ZToxNnB4O2JvcmRlci13aWR0aDowIDAgMCA0cHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjB9bWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlbmF2LWl0ZW1zIC5oZWFkZXItY29udGFpbmVyOmhvdmVyLG1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZW5hdi1pdGVtcyAuc2lkZW5hdi1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDUpO2NvbG9yOiNiZmMwYzJ9bWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlbmF2LWl0ZW1zIC5oZWFkZXItY29udGFpbmVyLmFjdGl2ZSxtYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVuYXYtaXRlbXMgLnNpZGVuYXYtaXRlbS5hY3RpdmV7Ym9yZGVyLWNvbG9yOiMwMDhlY2Z9bWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IC5zaWRlbmF2LWl0ZW1zIC5oZWFkZXItY29udGFpbmVyLmhhcy1pdGVtczo6YmVmb3JlLG1hdC1zaWRlbmF2LWNvbnRhaW5lciBtYXQtc2lkZW5hdiAuc2lkZW5hdi1pdGVtcyAuc2lkZW5hdi1pdGVtLmhhcy1pdGVtczo6YmVmb3Jle2ZvbnQtZmFtaWx5OkJvc2NoLUljO2NvbnRlbnQ6XCLvhJ1cIjtmb250LXN0eWxlOm5vcm1hbDtmb250LXNpemU6MjRweH1tYXQtc2lkZW5hdi1jb250YWluZXIgbWF0LXNpZGVuYXYgLnNpZGVuYXYtc3ViaXRlbXN7cGFkZGluZzowIDAgMCAxNnB4fW1hdC1zaWRlbmF2LWNvbnRhaW5lciA6Om5nLWRlZXAgLm1hdC1kcmF3ZXItY29udGVudHtvdmVyZmxvdzpoaWRkZW59bWF0LXNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWhlYWRlcntjdXJzb3I6ZGVmYXVsdDtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6NjRweDtib3JkZXItd2lkdGg6MCAwIDFweDtib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMDUpO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjB9bWF0LXNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWhlYWRlci5jbG9zZWQtc2lkZWJhcnttYXJnaW4tdG9wOjE2cHg7d2lkdGg6NTBweDtoZWlnaHQ6MTAwdmg7YmFja2dyb3VuZC1jb2xvcjojNTI1ZjZiO2N1cnNvcjpwb2ludGVyfW1hdC1zaWRlbmF2LWNvbnRhaW5lciAuc2lkZW5hdi1oZWFkZXIgLmJ1cmdlcntkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO21hcmdpbjoyNXB4IDE2cHggMCAwO2N1cnNvcjpwb2ludGVyfW1hdC1zaWRlbmF2LWNvbnRhaW5lciAuc2lkZW5hdi1oZWFkZXIgLmJ1cmdlciAuYnVyZ2VyLWxpbmV7aGVpZ2h0OjFweDt3aWR0aDoyNHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjttYXJnaW4tYm90dG9tOjZweDt0cmFuc2l0aW9uOi40c31tYXQtc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtaGVhZGVyIC5idXJnZXIgLmJ1cmdlci1saW5lLmJ1cmdlck1pZGRsZXtvcGFjaXR5OjB9bWF0LXNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWhlYWRlciAuYnVyZ2VyIC5idXJnZXItbGluZS5idXJnZXJUb3B7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSg0cHgpIHRyYW5zbGF0ZVgoLTRweCk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoNHB4KSB0cmFuc2xhdGVYKC00cHgpO29wYWNpdHk6MSFpbXBvcnRhbnR9bWF0LXNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LWhlYWRlciAuYnVyZ2VyIC5idXJnZXItbGluZS5idXJnZXJCb3R0b217LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVYKC02LjVweCkgdHJhbnNsYXRlWSgtNi41cHgpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVgoLTYuNXB4KSB0cmFuc2xhdGVZKC02LjVweCk7b3BhY2l0eToxIWltcG9ydGFudH1tYXQtc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtaGVhZGVyIGgxe2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowIDAgMCAxNnB4O2xpbmUtaGVpZ2h0OjY0cHg7d2hpdGUtc3BhY2U6bm93cmFwO3dpZHRoOjIyMHB4O292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2NvbG9yOiNiZmMwYzI7Zm9udC1mYW1pbHk6Qm9zY2gtU2Fucztmb250LXdlaWdodDozMDA7Zm9udC1zaXplOjIwcHh9LmNvbnRlbnQtY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowfS5iY2ktY29udGVudC1jb250YWluZXItbWFpbnttYXJnaW46MTZweCAwIDA7b3ZlcmZsb3c6aGlkZGVufWBdXG59KVxuZXhwb3J0IGNsYXNzIEJjaVNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHB1YmxpYyBhcHBsaWNhdGlvblRpdGxlID0gJyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBzaWRlYmFyTGlua3M6IFNpZGViYXJOYXZJdGVtW107XG4gIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnKSBwcml2YXRlIHNpZGVuYXY6IE1hdFNpZGVuYXY7XG4gIHByaXZhdGUgb3BlbiA9IHRydWU7XG4gIHByaXZhdGUgdmlzaWJsZSA9IHRydWU7XG4gIHByaXZhdGUgY29tcG9uZW50RGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaWRlYmFyU2VydmljZTogQmNpU2lkZWJhclNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIFRPRE86IHJlbWVtYmVyIHNpZGViYXIgc3RhdGUgKG9wZW5lZC9jbG9zZWQpIGluIHN0b3JhZ2UgcHJvdmlkZXIgYW5kIGxvYWQgaGVyZVxuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UuZ2V0U2lkZWJhclN0YXRlKCkucGlwZSh0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSkuc3Vic2NyaWJlKHN0YXRlID0+IHtcbiAgICAgIHRoaXMub3BlbiA9IHN0YXRlO1xuICAgICAgaWYgKHN0YXRlICYmIHRoaXMudmlzaWJsZSkge1xuICAgICAgICB0aGlzLnNpZGVuYXYub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaWRlbmF2LmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLmdldFNpZGViYXJWaXNpYmlsaXR5KCkucGlwZSh0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSkuc3Vic2NyaWJlKHZpc2libGUgPT4ge1xuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIGlmICh2aXNpYmxlICYmIHRoaXMub3Blbikge1xuICAgICAgICB0aGlzLnNpZGVuYXYub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaWRlbmF2LmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQubmV4dCgpO1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgdG9nZ2xlU2lkZU5hdmlnYXRpb25CYXIoKSB7XG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS5zZXRTaWRlYmFyU3RhdGUoIXRoaXMub3Blbik7XG4gIH1cblxuICBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3BlbjtcbiAgfVxuXG4gIGlzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlO1xuICB9XG5cbn1cbiJdfQ==