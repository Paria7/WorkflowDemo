/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { BreadcrumbsService } from '../../breadcrumbs.service';
var BciAppComponent = /** @class */ (function () {
    function BciAppComponent(breadcrumbsService) {
        this.breadcrumbsService = breadcrumbsService;
        this.applicationTitle = '';
        this.sidebarLinks = [];
        this.sidebarFooterLinks = [];
        this.navigationItems = [];
    }
    /**
     * @return {?}
     */
    BciAppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BciAppComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["sidebarLinks"] || changes["sidebarFooterLinks"]) {
            this.navigationItems = tslib_1.__spread(this.sidebarLinks, this.sidebarFooterLinks);
            this.breadcrumbsService.setNavigationItems(this.navigationItems);
        }
    };
    BciAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-app',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<bci-content>\n  <bci-sidebar [sidebarLinks]=\"sidebarLinks\" [applicationTitle]=\"applicationTitle\">\n\n    <bci-sidebar-footer [sidebarFooterLinks]=\"sidebarFooterLinks\"></bci-sidebar-footer>\n\n\n    <bci-header>\n    </bci-header>\n\n    <div class=\"content\">\n      <ng-content></ng-content>\n    </div>\n  </bci-sidebar>\n\n</bci-content>\n",
                    styles: [".content{position:relative;overflow:auto;height:100%;width:100%}"]
                },] },
    ];
    /** @nocollapse */
    BciAppComponent.ctorParameters = function () { return [
        { type: BreadcrumbsService }
    ]; };
    BciAppComponent.propDecorators = {
        applicationTitle: [{ type: Input }],
        sidebarLinks: [{ type: Input }],
        sidebarFooterLinks: [{ type: Input }]
    };
    return BciAppComponent;
}());
export { BciAppComponent };
if (false) {
    /** @type {?} */
    BciAppComponent.prototype.applicationTitle;
    /** @type {?} */
    BciAppComponent.prototype.sidebarLinks;
    /** @type {?} */
    BciAppComponent.prototype.sidebarFooterLinks;
    /** @type {?} */
    BciAppComponent.prototype.navigationItems;
    /** @type {?} */
    BciAppComponent.prototype.breadcrumbsService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9sYXlvdXQvYmNpLWFwcC9iY2ktYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUFpQzdELHlCQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtnQ0FOOUIsRUFBRTs0QkFDWSxFQUFFO2tDQUNJLEVBQUU7K0JBRXpCLEVBQUU7S0FHMUI7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7S0FDQzs7Ozs7SUFFRCxxQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsRUFBRSxDQUFDLENBQUMsT0FBTyxvQkFBaUIsT0FBTyxzQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLGVBQWUsb0JBQU8sSUFBSSxDQUFDLFlBQVksRUFBSyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2xFO0tBQ0Y7O2dCQTFDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxnZEFtQlg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsa0VBQWtFLENBQUM7aUJBQzdFOzs7O2dCQXpCUSxrQkFBa0I7OzttQ0EyQnhCLEtBQUs7K0JBQ0wsS0FBSztxQ0FDTCxLQUFLOzswQkFuQ1I7O1NBZ0NhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2SXRlbSB9IGZyb20gJy4uL2JjaS1zaWRlYmFyL3NpZGViYXItbmF2LWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYnJlYWRjcnVtYnMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1hcHAnLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48YmNpLWNvbnRlbnQ+XG4gIDxiY2ktc2lkZWJhciBbc2lkZWJhckxpbmtzXT1cInNpZGViYXJMaW5rc1wiIFthcHBsaWNhdGlvblRpdGxlXT1cImFwcGxpY2F0aW9uVGl0bGVcIj5cblxuICAgIDxiY2ktc2lkZWJhci1mb290ZXIgW3NpZGViYXJGb290ZXJMaW5rc109XCJzaWRlYmFyRm9vdGVyTGlua3NcIj48L2JjaS1zaWRlYmFyLWZvb3Rlcj5cblxuXG4gICAgPGJjaS1oZWFkZXI+XG4gICAgPC9iY2ktaGVhZGVyPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9iY2ktc2lkZWJhcj5cblxuPC9iY2ktY29udGVudD5cbmAsXG4gIHN0eWxlczogW2AuY29udGVudHtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzphdXRvO2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9YF1cbn0pXG5leHBvcnQgY2xhc3MgQmNpQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBhcHBsaWNhdGlvblRpdGxlID0gJyc7XG4gIEBJbnB1dCgpIHNpZGViYXJMaW5rczogU2lkZWJhck5hdkl0ZW1bXSA9IFtdO1xuICBASW5wdXQoKSBzaWRlYmFyRm9vdGVyTGlua3M6IFNpZGViYXJOYXZJdGVtW10gPSBbXTtcblxuICBwdWJsaWMgbmF2aWdhdGlvbkl0ZW1zID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBicmVhZGNydW1ic1NlcnZpY2U6IEJyZWFkY3J1bWJzU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuc2lkZWJhckxpbmtzIHx8IGNoYW5nZXMuc2lkZWJhckZvb3RlckxpbmtzKSB7XG4gICAgICB0aGlzLm5hdmlnYXRpb25JdGVtcyA9IFsuLi50aGlzLnNpZGViYXJMaW5rcywgLi4udGhpcy5zaWRlYmFyRm9vdGVyTGlua3NdO1xuICAgICAgdGhpcy5icmVhZGNydW1ic1NlcnZpY2Uuc2V0TmF2aWdhdGlvbkl0ZW1zKHRoaXMubmF2aWdhdGlvbkl0ZW1zKTtcbiAgICB9XG4gIH1cblxufVxuIl19