/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, HostBinding, Input } from '@angular/core';
var SidePanelItemComponent = /** @class */ (function () {
    function SidePanelItemComponent() {
        this.fixed = false;
    }
    /**
     * @return {?}
     */
    SidePanelItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SidePanelItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-side-panel-item',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<!--<div class=\"side-panel-item\">\n  <h4>{{ title }}</h4>\n  <ng-content></ng-content>\n</div>-->\n<mat-card class=\"side-panel-item\">\n  <mat-card-header class=\"fixed-flex-item\">\n    <mat-card-title><h5>{{ title }}</h5></mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"scroll-container-vertical\">\n    <ng-content></ng-content>\n  </mat-card-content>\n</mat-card>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{margin:15px 0;overflow:hidden;display:flex}:host.fixed-flex-item{flex:0 0 auto}.fixed-flex-item{flex:0 0 auto}.side-panel-item{display:flex;flex-direction:column;flex:1 1 auto}.scroll-container-vertical{overflow-y:auto}"]
                },] },
    ];
    /** @nocollapse */
    SidePanelItemComponent.ctorParameters = function () { return []; };
    SidePanelItemComponent.propDecorators = {
        title: [{ type: Input }],
        fixed: [{ type: HostBinding, args: ['class.fixed-flex-item',] }, { type: Input }]
    };
    return SidePanelItemComponent;
}());
export { SidePanelItemComponent };
if (false) {
    /** @type {?} */
    SidePanelItemComponent.prototype.title;
    /** @type {?} */
    SidePanelItemComponent.prototype.fixed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2lkZS1wYW5lbC1pdGVtL3NpZGUtcGFuZWwtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7SUErQnBFO3FCQUZpQixLQUFLO0tBR3JCOzs7O0lBRUQseUNBQVE7OztJQUFSO0tBQ0M7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDBmQWdCWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQywyVUFFME4sQ0FBQztpQkFDck87Ozs7O3dCQUdFLEtBQUs7d0JBQ0wsV0FBVyxTQUFDLHVCQUF1QixjQUNuQyxLQUFLOztpQ0FqQ1I7O1NBNkJhLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktc2lkZS1wYW5lbC1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPCEtLTxkaXYgY2xhc3M9XCJzaWRlLXBhbmVsLWl0ZW1cIj5cbiAgPGg0Pnt7IHRpdGxlIH19PC9oND5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+LS0+XG48bWF0LWNhcmQgY2xhc3M9XCJzaWRlLXBhbmVsLWl0ZW1cIj5cbiAgPG1hdC1jYXJkLWhlYWRlciBjbGFzcz1cImZpeGVkLWZsZXgtaXRlbVwiPlxuICAgIDxtYXQtY2FyZC10aXRsZT48aDU+e3sgdGl0bGUgfX08L2g1PjwvbWF0LWNhcmQtdGl0bGU+XG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxuICA8bWF0LWNhcmQtY29udGVudCBjbGFzcz1cInNjcm9sbC1jb250YWluZXItdmVydGljYWxcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi86aG9zdHttYXJnaW46MTVweCAwO292ZXJmbG93OmhpZGRlbjtkaXNwbGF5OmZsZXh9Omhvc3QuZml4ZWQtZmxleC1pdGVte2ZsZXg6MCAwIGF1dG99LmZpeGVkLWZsZXgtaXRlbXtmbGV4OjAgMCBhdXRvfS5zaWRlLXBhbmVsLWl0ZW17ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4OjEgMSBhdXRvfS5zY3JvbGwtY29udGFpbmVyLXZlcnRpY2Fse292ZXJmbG93LXk6YXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlUGFuZWxJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpeGVkLWZsZXgtaXRlbScpXG4gIEBJbnB1dCgpIGZpeGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=