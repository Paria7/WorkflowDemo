/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, Input } from '@angular/core';
export class ContentSidebarComponent {
    constructor() {
        this.position = 'end';
        this.mode = 'push';
        this.opened = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-content-sidebar',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<mat-sidenav-container style="width: 300px">
  <mat-sidenav #sidenav [position]="position" [mode]="mode" [opened]="opened" fxLayout="column" fxFlex>
    <ng-content></ng-content>
  </mat-sidenav>
</mat-sidenav-container>
`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */:host{display:flex;border-width:0 0 0 1px;border-color:#dfdfe0;border-style:solid;border-radius:0}mat-sidenav{width:300px;padding:5px 10px}::ng-deep bci-content-sidebar-item:first-child{padding-top:0}::ng-deep bci-content-sidebar-item:last-child{padding-bottom:5px;border-bottom:none}`]
            },] },
];
/** @nocollapse */
ContentSidebarComponent.ctorParameters = () => [];
ContentSidebarComponent.propDecorators = {
    position: [{ type: Input }],
    mode: [{ type: Input }],
    opened: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ContentSidebarComponent.prototype.position;
    /** @type {?} */
    ContentSidebarComponent.prototype.mode;
    /** @type {?} */
    ContentSidebarComponent.prototype.opened;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29udGVudC1zaWRlYmFyL2NvbnRlbnQtc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBa0J6RCxNQUFNO0lBTUo7d0JBSm9CLEtBQUs7b0JBQ1QsTUFBTTtzQkFDSixJQUFJO0tBR3JCOzs7O0lBRUQsUUFBUTtLQUNQOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7O0NBU1g7Z0JBQ0MsTUFBTSxFQUFFLENBQUM7O2dTQUVxUixDQUFDO2FBQ2hTOzs7Ozt1QkFHRSxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1jb250ZW50LXNpZGViYXInLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bWF0LXNpZGVuYXYtY29udGFpbmVyIHN0eWxlPVwid2lkdGg6IDMwMHB4XCI+XG4gIDxtYXQtc2lkZW5hdiAjc2lkZW5hdiBbcG9zaXRpb25dPVwicG9zaXRpb25cIiBbbW9kZV09XCJtb2RlXCIgW29wZW5lZF09XCJvcGVuZWRcIiBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvbWF0LXNpZGVuYXY+XG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLzpob3N0e2Rpc3BsYXk6ZmxleDtib3JkZXItd2lkdGg6MCAwIDAgMXB4O2JvcmRlci1jb2xvcjojZGZkZmUwO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjB9bWF0LXNpZGVuYXZ7d2lkdGg6MzAwcHg7cGFkZGluZzo1cHggMTBweH06Om5nLWRlZXAgYmNpLWNvbnRlbnQtc2lkZWJhci1pdGVtOmZpcnN0LWNoaWxke3BhZGRpbmctdG9wOjB9OjpuZy1kZWVwIGJjaS1jb250ZW50LXNpZGViYXItaXRlbTpsYXN0LWNoaWxke3BhZGRpbmctYm90dG9tOjVweDtib3JkZXItYm90dG9tOm5vbmV9YF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHBvc2l0aW9uID0gJ2VuZCc7XG4gIEBJbnB1dCgpIG1vZGUgPSAncHVzaCc7XG4gIEBJbnB1dCgpIG9wZW5lZCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=