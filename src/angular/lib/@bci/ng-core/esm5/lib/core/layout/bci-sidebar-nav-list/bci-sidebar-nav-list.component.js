/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, Input } from '@angular/core';
var BciSidebarNavListComponent = /** @class */ (function () {
    function BciSidebarNavListComponent() {
        this.navItems = [];
        /**
         * \@todo enable skipSorting to be set (SidebarService? Configuration?)
         */
        this.skipSorting = false;
    }
    /**
     * @return {?}
     */
    BciSidebarNavListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BciSidebarNavListComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.skipSorting && changes["navItems"]) {
            this.navItems.sort(function (a, b) { return a.position - b.position; });
        }
    };
    BciSidebarNavListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-sidebar-nav-list',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-nav-list>\n  <bci-sidebar-nav-item *ngFor=\"let navItem of navItems\" [navItem]=\"navItem\">\n  </bci-sidebar-nav-item>\n</mat-nav-list>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.mat-nav-list{padding-top:0}"]
                },] },
    ];
    /** @nocollapse */
    BciSidebarNavListComponent.ctorParameters = function () { return []; };
    BciSidebarNavListComponent.propDecorators = {
        navItems: [{ type: Input }]
    };
    return BciSidebarNavListComponent;
}());
export { BciSidebarNavListComponent };
if (false) {
    /** @type {?} */
    BciSidebarNavListComponent.prototype.navItems;
    /**
     * \@todo enable skipSorting to be set (SidebarService? Configuration?)
     * @type {?}
     */
    BciSidebarNavListComponent.prototype.skipSorting;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLXNpZGViYXItbmF2LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbGF5b3V0L2JjaS1zaWRlYmFyLW5hdi1saXN0L2JjaS1zaWRlYmFyLW5hdi1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDOztJQTBCakY7d0JBTnNDLEVBQUU7Ozs7MkJBSTFCLEtBQUs7S0FHbEI7Ozs7SUFFRCw2Q0FBUTs7O0lBQVI7S0FDQzs7Ozs7SUFFRCxnREFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLE9BQU8sWUFBUyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQXZCLENBQXVCLENBQUMsQ0FBQztTQUN2RDtLQUNGOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxpUUFRWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxzSUFFcUIsQ0FBQztpQkFDaEM7Ozs7OzJCQUdFLEtBQUs7O3FDQXhCUjs7U0FzQmEsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkl0ZW0gfSBmcm9tICcuLi9iY2ktc2lkZWJhci9zaWRlYmFyLW5hdi1pdGVtLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLXNpZGViYXItbmF2LWxpc3QnLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bWF0LW5hdi1saXN0PlxuICA8YmNpLXNpZGViYXItbmF2LWl0ZW0gKm5nRm9yPVwibGV0IG5hdkl0ZW0gb2YgbmF2SXRlbXNcIiBbbmF2SXRlbV09XCJuYXZJdGVtXCI+XG4gIDwvYmNpLXNpZGViYXItbmF2LWl0ZW0+XG48L21hdC1uYXYtbGlzdD5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy5tYXQtbmF2LWxpc3R7cGFkZGluZy10b3A6MH1gXVxufSlcbmV4cG9ydCBjbGFzcyBCY2lTaWRlYmFyTmF2TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBuYXZJdGVtczogU2lkZWJhck5hdkl0ZW1bXSA9IFtdO1xuICAvKipcbiAgICogQHRvZG8gZW5hYmxlIHNraXBTb3J0aW5nIHRvIGJlIHNldCAoU2lkZWJhclNlcnZpY2U/IENvbmZpZ3VyYXRpb24/KVxuICAgKi9cbiAgc2tpcFNvcnRpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5za2lwU29ydGluZyAmJiBjaGFuZ2VzLm5hdkl0ZW1zKSB7XG4gICAgICB0aGlzLm5hdkl0ZW1zLnNvcnQoKGEsIGIpID0+IGEucG9zaXRpb24gLSBiLnBvc2l0aW9uKTtcbiAgICB9XG4gIH1cblxufVxuIl19