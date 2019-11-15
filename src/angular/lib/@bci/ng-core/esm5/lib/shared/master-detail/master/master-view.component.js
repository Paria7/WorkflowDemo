/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, HostBinding, Input } from '@angular/core';
/**
 * The master part of the {\@link MasterDetailViewComponent}
 */
var MasterViewComponent = /** @class */ (function () {
    function MasterViewComponent() {
        // TODO: find a solution so that <bci-page-content> can be used in demo/solution instead of isPadded and still the sidebar is working
        this.isPadded = true;
    }
    MasterViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-master-view',
                    template: "<ng-content></ng-content>\n",
                    styles: [":host{display:block}:host.container-content-padded{padding:32px}"]
                },] },
    ];
    MasterViewComponent.propDecorators = {
        isPadded: [{ type: HostBinding, args: ['class.container-content-padded',] }, { type: Input }]
    };
    return MasterViewComponent;
}());
export { MasterViewComponent };
if (false) {
    /** @type {?} */
    MasterViewComponent.prototype.isPadded;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9tYXN0ZXItZGV0YWlsL21hc3Rlci9tYXN0ZXItdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozt3QkFpQjFDLElBQUk7OztnQkFYdkIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSw2QkFDWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxrRUFBa0UsQ0FBQztpQkFDN0U7OzsyQkFJRSxXQUFXLFNBQUMsZ0NBQWdDLGNBQzVDLEtBQUs7OzhCQXBCUjs7U0FnQmEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFzdGVyRGV0YWlsVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL21hc3Rlci1kZXRhaWwtdmlldy5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRoZSBtYXN0ZXIgcGFydCBvZiB0aGUge0BsaW5rIE1hc3RlckRldGFpbFZpZXdDb21wb25lbnR9XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1tYXN0ZXItdmlldycsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Omhvc3QuY29udGFpbmVyLWNvbnRlbnQtcGFkZGVke3BhZGRpbmc6MzJweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBNYXN0ZXJWaWV3Q29tcG9uZW50IHtcblxuICAvLyBUT0RPOiBmaW5kIGEgc29sdXRpb24gc28gdGhhdCA8YmNpLXBhZ2UtY29udGVudD4gY2FuIGJlIHVzZWQgaW4gZGVtby9zb2x1dGlvbiBpbnN0ZWFkIG9mIGlzUGFkZGVkIGFuZCBzdGlsbCB0aGUgc2lkZWJhciBpcyB3b3JraW5nXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29udGFpbmVyLWNvbnRlbnQtcGFkZGVkJylcbiAgQElucHV0KClcbiAgcHVibGljIGlzUGFkZGVkID0gdHJ1ZTtcbn1cbiJdfQ==