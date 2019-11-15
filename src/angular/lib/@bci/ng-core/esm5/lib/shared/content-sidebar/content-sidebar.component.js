/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, Input } from '@angular/core';
var ContentSidebarComponent = /** @class */ (function () {
    function ContentSidebarComponent() {
        this.position = 'end';
        this.mode = 'push';
        this.opened = true;
    }
    /**
     * @return {?}
     */
    ContentSidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ContentSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-content-sidebar',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-sidenav-container style=\"width: 300px\">\n  <mat-sidenav #sidenav [position]=\"position\" [mode]=\"mode\" [opened]=\"opened\" fxLayout=\"column\" fxFlex>\n    <ng-content></ng-content>\n  </mat-sidenav>\n</mat-sidenav-container>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{display:flex;border-width:0 0 0 1px;border-color:#dfdfe0;border-style:solid;border-radius:0}mat-sidenav{width:300px;padding:5px 10px}::ng-deep bci-content-sidebar-item:first-child{padding-top:0}::ng-deep bci-content-sidebar-item:last-child{padding-bottom:5px;border-bottom:none}"]
                },] },
    ];
    /** @nocollapse */
    ContentSidebarComponent.ctorParameters = function () { return []; };
    ContentSidebarComponent.propDecorators = {
        position: [{ type: Input }],
        mode: [{ type: Input }],
        opened: [{ type: Input }]
    };
    return ContentSidebarComponent;
}());
export { ContentSidebarComponent };
if (false) {
    /** @type {?} */
    ContentSidebarComponent.prototype.position;
    /** @type {?} */
    ContentSidebarComponent.prototype.mode;
    /** @type {?} */
    ContentSidebarComponent.prototype.opened;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29udGVudC1zaWRlYmFyL2NvbnRlbnQtc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOztJQXdCdkQ7d0JBSm9CLEtBQUs7b0JBQ1QsTUFBTTtzQkFDSixJQUFJO0tBR3JCOzs7O0lBRUQsMENBQVE7OztJQUFSO0tBQ0M7O2dCQTFCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDhWQVNYO29CQUNDLE1BQU0sRUFBRSxDQUFDLHNZQUVxUixDQUFDO2lCQUNoUzs7Ozs7MkJBR0UsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7O2tDQTFCUjs7U0FzQmEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWNvbnRlbnQtc2lkZWJhcicsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxtYXQtc2lkZW5hdi1jb250YWluZXIgc3R5bGU9XCJ3aWR0aDogMzAwcHhcIj5cbiAgPG1hdC1zaWRlbmF2ICNzaWRlbmF2IFtwb3NpdGlvbl09XCJwb3NpdGlvblwiIFttb2RlXT1cIm1vZGVcIiBbb3BlbmVkXT1cIm9wZW5lZFwiIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9tYXQtc2lkZW5hdj5cbjwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovOmhvc3R7ZGlzcGxheTpmbGV4O2JvcmRlci13aWR0aDowIDAgMCAxcHg7Ym9yZGVyLWNvbG9yOiNkZmRmZTA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6MH1tYXQtc2lkZW5hdnt3aWR0aDozMDBweDtwYWRkaW5nOjVweCAxMHB4fTo6bmctZGVlcCBiY2ktY29udGVudC1zaWRlYmFyLWl0ZW06Zmlyc3QtY2hpbGR7cGFkZGluZy10b3A6MH06Om5nLWRlZXAgYmNpLWNvbnRlbnQtc2lkZWJhci1pdGVtOmxhc3QtY2hpbGR7cGFkZGluZy1ib3R0b206NXB4O2JvcmRlci1ib3R0b206bm9uZX1gXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50U2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcG9zaXRpb24gPSAnZW5kJztcbiAgQElucHV0KCkgbW9kZSA9ICdwdXNoJztcbiAgQElucHV0KCkgb3BlbmVkID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==