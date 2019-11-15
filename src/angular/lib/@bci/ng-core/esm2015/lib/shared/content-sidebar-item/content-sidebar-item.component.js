/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, HostBinding, Input } from '@angular/core';
export class ContentSidebarItemComponent {
    constructor() {
        this.fixed = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentSidebarItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-content-sidebar-item',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<mat-card class="content-sidebar-item">
  <mat-card-header class="fixed-flex-item">
    <mat-card-title><h5>{{ title }}</h5></mat-card-title>
  </mat-card-header>
  <mat-card-content class="scroll-container-vertical">
    <ng-content></ng-content>
  </mat-card-content>
</mat-card>
`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */:host{padding:10px 5px 25px;overflow:hidden;display:flex;border-width:0 0 1px;border-color:#dfdfe0;border-style:solid;border-radius:0}:host.fixed-flex-item{flex:0 0 auto}.fixed-flex-item{flex:0 0 auto}.content-sidebar-item{display:flex;flex-direction:column;flex:1 1 auto;padding:0}.scroll-container-vertical{overflow-y:auto}`]
            },] },
];
/** @nocollapse */
ContentSidebarItemComponent.ctorParameters = () => [];
ContentSidebarItemComponent.propDecorators = {
    title: [{ type: Input }],
    fixed: [{ type: HostBinding, args: ['class.fixed-flex-item',] }, { type: Input }]
};
if (false) {
    /** @type {?} */
    ContentSidebarItemComponent.prototype.title;
    /** @type {?} */
    ContentSidebarItemComponent.prototype.fixed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zaWRlYmFyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb250ZW50LXNpZGViYXItaXRlbS9jb250ZW50LXNpZGViYXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQXFCdEUsTUFBTTtJQUtKO3FCQUZpQixLQUFLO0tBR3JCOzs7O0lBRUQsUUFBUTtLQUNQOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0NBWVg7Z0JBQ0MsTUFBTSxFQUFFLENBQUM7O3lVQUU4VCxDQUFDO2FBQ3pVOzs7OztvQkFFRSxLQUFLO29CQUNMLFdBQVcsU0FBQyx1QkFBdUIsY0FDbkMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktY29udGVudC1zaWRlYmFyLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bWF0LWNhcmQgY2xhc3M9XCJjb250ZW50LXNpZGViYXItaXRlbVwiPlxuICA8bWF0LWNhcmQtaGVhZGVyIGNsYXNzPVwiZml4ZWQtZmxleC1pdGVtXCI+XG4gICAgPG1hdC1jYXJkLXRpdGxlPjxoNT57eyB0aXRsZSB9fTwvaDU+PC9tYXQtY2FyZC10aXRsZT5cbiAgPC9tYXQtY2FyZC1oZWFkZXI+XG4gIDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwic2Nyb2xsLWNvbnRhaW5lci12ZXJ0aWNhbFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLzpob3N0e3BhZGRpbmc6MTBweCA1cHggMjVweDtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTpmbGV4O2JvcmRlci13aWR0aDowIDAgMXB4O2JvcmRlci1jb2xvcjojZGZkZmUwO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjB9Omhvc3QuZml4ZWQtZmxleC1pdGVte2ZsZXg6MCAwIGF1dG99LmZpeGVkLWZsZXgtaXRlbXtmbGV4OjAgMCBhdXRvfS5jb250ZW50LXNpZGViYXItaXRlbXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXg6MSAxIGF1dG87cGFkZGluZzowfS5zY3JvbGwtY29udGFpbmVyLXZlcnRpY2Fse292ZXJmbG93LXk6YXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50U2lkZWJhckl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpeGVkLWZsZXgtaXRlbScpXG4gIEBJbnB1dCgpIGZpeGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=