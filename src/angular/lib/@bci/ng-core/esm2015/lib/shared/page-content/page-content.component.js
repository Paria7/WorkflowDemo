/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, HostBinding, Input } from '@angular/core';
export class PageContentComponent {
    constructor() {
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
    ngOnInit() {
    }
}
PageContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-page-content',
                template: `
    <ng-content></ng-content>`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */:host{padding:0;flex:none;display:block;overflow:auto;position:absolute}:host.full-space{width:100%;height:100%}:host.full-space.padding{width:calc(100% - 2 * 32px);height:calc(100% - 2 * 32px)}:host.padding{padding:32px}`]
            },] },
];
/** @nocollapse */
PageContentComponent.ctorParameters = () => [];
PageContentComponent.propDecorators = {
    fullSpace: [{ type: HostBinding, args: ['class.full-space',] }, { type: Input }],
    padding: [{ type: HostBinding, args: ['class.padding',] }, { type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvcGFnZS1jb250ZW50L3BhZ2UtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVV0RSxNQUFNO0lBV0o7Ozs7eUJBTnNELElBQUk7Ozs7dUJBSVQsSUFBSTtLQUdwRDs7OztJQUVELFFBQVE7S0FDUDs7O1lBdkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7OEJBQ2tCO2dCQUM1QixNQUFNLEVBQUUsQ0FBQzs7aU9BRXNOLENBQUM7YUFDak87Ozs7O3dCQU1FLFdBQVcsU0FBQyxrQkFBa0IsY0FBRyxLQUFLO3NCQUl0QyxXQUFXLFNBQUMsZUFBZSxjQUFHLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLXBhZ2UtY29udGVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLzpob3N0e3BhZGRpbmc6MDtmbGV4Om5vbmU7ZGlzcGxheTpibG9jaztvdmVyZmxvdzphdXRvO3Bvc2l0aW9uOmFic29sdXRlfTpob3N0LmZ1bGwtc3BhY2V7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX06aG9zdC5mdWxsLXNwYWNlLnBhZGRpbmd7d2lkdGg6Y2FsYygxMDAlIC0gMiAqIDMycHgpO2hlaWdodDpjYWxjKDEwMCUgLSAyICogMzJweCl9Omhvc3QucGFkZGluZ3twYWRkaW5nOjMycHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZUNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8qKlxuICAgKiBTZXRzIHdpZHRoIGFuZCBoZWlnaHQgdG8gMTAwJSBzbyB0aGF0IHRoZSBjb21wbGV0ZSBjb250ZW50IHNwYWNlIGlzIGZpbGxlZC4gRGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mdWxsLXNwYWNlJykgQElucHV0KCkgZnVsbFNwYWNlID0gdHJ1ZTtcbiAgLyoqXG4gICAqIFNldHMgcGFkZGluZyB0byAzMnB4LiBUbyBlbmFibGUgZnVsbC13aWR0aCBjb250ZW50LCBzZXQgdGhpcyB0byBmYWxzZS4gRGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wYWRkaW5nJykgQElucHV0KCkgcGFkZGluZyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=