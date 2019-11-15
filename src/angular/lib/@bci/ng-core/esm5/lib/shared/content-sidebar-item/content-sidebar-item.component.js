/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, HostBinding, Input } from '@angular/core';
var ContentSidebarItemComponent = /** @class */ (function () {
    function ContentSidebarItemComponent() {
        this.fixed = false;
    }
    /**
     * @return {?}
     */
    ContentSidebarItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ContentSidebarItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-content-sidebar-item',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-card class=\"content-sidebar-item\">\n  <mat-card-header class=\"fixed-flex-item\">\n    <mat-card-title><h5>{{ title }}</h5></mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"scroll-container-vertical\">\n    <ng-content></ng-content>\n  </mat-card-content>\n</mat-card>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{padding:10px 5px 25px;overflow:hidden;display:flex;border-width:0 0 1px;border-color:#dfdfe0;border-style:solid;border-radius:0}:host.fixed-flex-item{flex:0 0 auto}.fixed-flex-item{flex:0 0 auto}.content-sidebar-item{display:flex;flex-direction:column;flex:1 1 auto;padding:0}.scroll-container-vertical{overflow-y:auto}"]
                },] },
    ];
    /** @nocollapse */
    ContentSidebarItemComponent.ctorParameters = function () { return []; };
    ContentSidebarItemComponent.propDecorators = {
        title: [{ type: Input }],
        fixed: [{ type: HostBinding, args: ['class.fixed-flex-item',] }, { type: Input }]
    };
    return ContentSidebarItemComponent;
}());
export { ContentSidebarItemComponent };
if (false) {
    /** @type {?} */
    ContentSidebarItemComponent.prototype.title;
    /** @type {?} */
    ContentSidebarItemComponent.prototype.fixed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zaWRlYmFyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb250ZW50LXNpZGViYXItaXRlbS9jb250ZW50LXNpZGViYXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7SUEwQnBFO3FCQUZpQixLQUFLO0tBR3JCOzs7O0lBRUQsOENBQVE7OztJQUFSO0tBQ0M7O2dCQTVCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLDBaQVlYO29CQUNDLE1BQU0sRUFBRSxDQUFDLCthQUU4VCxDQUFDO2lCQUN6VTs7Ozs7d0JBRUUsS0FBSzt3QkFDTCxXQUFXLFNBQUMsdUJBQXVCLGNBQ25DLEtBQUs7O3NDQTVCUjs7U0F5QmEsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1jb250ZW50LXNpZGViYXItaXRlbScsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxtYXQtY2FyZCBjbGFzcz1cImNvbnRlbnQtc2lkZWJhci1pdGVtXCI+XG4gIDxtYXQtY2FyZC1oZWFkZXIgY2xhc3M9XCJmaXhlZC1mbGV4LWl0ZW1cIj5cbiAgICA8bWF0LWNhcmQtdGl0bGU+PGg1Pnt7IHRpdGxlIH19PC9oNT48L21hdC1jYXJkLXRpdGxlPlxuICA8L21hdC1jYXJkLWhlYWRlcj5cbiAgPG1hdC1jYXJkLWNvbnRlbnQgY2xhc3M9XCJzY3JvbGwtY29udGFpbmVyLXZlcnRpY2FsXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovOmhvc3R7cGFkZGluZzoxMHB4IDVweCAyNXB4O292ZXJmbG93OmhpZGRlbjtkaXNwbGF5OmZsZXg7Ym9yZGVyLXdpZHRoOjAgMCAxcHg7Ym9yZGVyLWNvbG9yOiNkZmRmZTA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6MH06aG9zdC5maXhlZC1mbGV4LWl0ZW17ZmxleDowIDAgYXV0b30uZml4ZWQtZmxleC1pdGVte2ZsZXg6MCAwIGF1dG99LmNvbnRlbnQtc2lkZWJhci1pdGVte2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleDoxIDEgYXV0bztwYWRkaW5nOjB9LnNjcm9sbC1jb250YWluZXItdmVydGljYWx7b3ZlcmZsb3cteTphdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRTaWRlYmFySXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZml4ZWQtZmxleC1pdGVtJylcbiAgQElucHV0KCkgZml4ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==