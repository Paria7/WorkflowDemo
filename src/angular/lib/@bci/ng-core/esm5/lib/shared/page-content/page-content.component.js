/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, HostBinding, Input } from '@angular/core';
var PageContentComponent = /** @class */ (function () {
    function PageContentComponent() {
        /**
         * Sets width and height to 100% so that the complete content space is filled. Default: true
         */
        this.fullSpace = true;
        /**
         * Sets padding to 32px. To enable full-width content, set this to false. Default: true
         */
        this.padding = true;
    }
    /**
     * @return {?}
     */
    PageContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PageContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-page-content',
                    template: "\n    <ng-content></ng-content>",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{padding:0;flex:none;display:block;overflow:auto;position:absolute}:host.full-space{width:100%;height:100%}:host.full-space.padding{width:calc(100% - 2 * 32px);height:calc(100% - 2 * 32px)}:host.padding{padding:32px}"]
                },] },
    ];
    /** @nocollapse */
    PageContentComponent.ctorParameters = function () { return []; };
    PageContentComponent.propDecorators = {
        fullSpace: [{ type: HostBinding, args: ['class.full-space',] }, { type: Input }],
        padding: [{ type: HostBinding, args: ['class.padding',] }, { type: Input }]
    };
    return PageContentComponent;
}());
export { PageContentComponent };
if (false) {
    /**
     * Sets width and height to 100% so that the complete content space is filled. Default: true
     * @type {?}
     */
    PageContentComponent.prototype.fullSpace;
    /**
     * Sets padding to 32px. To enable full-width content, set this to false. Default: true
     * @type {?}
     */
    PageContentComponent.prototype.padding;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvcGFnZS1jb250ZW50L3BhZ2UtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7SUFxQnBFOzs7O3lCQU5zRCxJQUFJOzs7O3VCQUlULElBQUk7S0FHcEQ7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7S0FDQzs7Z0JBdkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsaUNBQ2tCO29CQUM1QixNQUFNLEVBQUUsQ0FBQyx1VUFFc04sQ0FBQztpQkFDak87Ozs7OzRCQU1FLFdBQVcsU0FBQyxrQkFBa0IsY0FBRyxLQUFLOzBCQUl0QyxXQUFXLFNBQUMsZUFBZSxjQUFHLEtBQUs7OytCQXZCdEM7O1NBY2Esb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1wYWdlLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi86aG9zdHtwYWRkaW5nOjA7ZmxleDpub25lO2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6YXV0bztwb3NpdGlvbjphYnNvbHV0ZX06aG9zdC5mdWxsLXNwYWNle3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Omhvc3QuZnVsbC1zcGFjZS5wYWRkaW5ne3dpZHRoOmNhbGMoMTAwJSAtIDIgKiAzMnB4KTtoZWlnaHQ6Y2FsYygxMDAlIC0gMiAqIDMycHgpfTpob3N0LnBhZGRpbmd7cGFkZGluZzozMnB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvKipcbiAgICogU2V0cyB3aWR0aCBhbmQgaGVpZ2h0IHRvIDEwMCUgc28gdGhhdCB0aGUgY29tcGxldGUgY29udGVudCBzcGFjZSBpcyBmaWxsZWQuIERlZmF1bHQ6IHRydWVcbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZnVsbC1zcGFjZScpIEBJbnB1dCgpIGZ1bGxTcGFjZSA9IHRydWU7XG4gIC8qKlxuICAgKiBTZXRzIHBhZGRpbmcgdG8gMzJweC4gVG8gZW5hYmxlIGZ1bGwtd2lkdGggY29udGVudCwgc2V0IHRoaXMgdG8gZmFsc2UuIERlZmF1bHQ6IHRydWVcbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MucGFkZGluZycpIEBJbnB1dCgpIHBhZGRpbmcgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19