/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { ChangeDetectorRef, Component, HostBinding, Input } from '@angular/core';
export class BreadcrumbComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.titleAttribute = undefined;
        this._omitted = false;
    }
    /**
     * @return {?}
     */
    get omitted() {
        return this._omitted;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set omitted(value) {
        this._omitted = value;
        // handle ExpressionChangedAfterChecked issues for title
        setTimeout(() => this.titleAttribute = this.omitted ? this.title : undefined);
        // ...and displayed title
        this.cdr.detectChanges();
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-breadcrumb',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<a *ngIf="url !== undefined" [routerLink]="url">{{omitted ? '…' : title}}</a>
<ng-container *ngIf="url === undefined">{{omitted ? '…' : title}}</ng-container>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
BreadcrumbComponent.propDecorators = {
    title: [{ type: Input }],
    url: [{ type: Input }],
    titleAttribute: [{ type: HostBinding, args: ['attr.title',] }],
    omitted: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.title;
    /** @type {?} */
    BreadcrumbComponent.prototype.url;
    /** @type {?} */
    BreadcrumbComponent.prototype.titleAttribute;
    /** @type {?} */
    BreadcrumbComponent.prototype._omitted;
    /** @type {?} */
    BreadcrumbComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWFqRixNQUFNOzs7O0lBdUJKLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COzhCQWxCRSxTQUFTO3dCQUVsQyxLQUFLO0tBaUJ2Qjs7OztJQWZELElBQUksT0FBTztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3RCOzs7OztJQUVELElBQ0ksT0FBTyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzs7UUFHdEIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7O1FBRTlFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDMUI7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Q0FNWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7OztZQVpRLGlCQUFpQjs7O29CQWV2QixLQUFLO2tCQUNMLEtBQUs7NkJBRUwsV0FBVyxTQUFDLFlBQVk7c0JBUXhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxhICpuZ0lmPVwidXJsICE9PSB1bmRlZmluZWRcIiBbcm91dGVyTGlua109XCJ1cmxcIj57e29taXR0ZWQgPyAn4oCmJyA6IHRpdGxlfX08L2E+XG48bmctY29udGFpbmVyICpuZ0lmPVwidXJsID09PSB1bmRlZmluZWRcIj57e29taXR0ZWQgPyAn4oCmJyA6IHRpdGxlfX08L25nLWNvbnRhaW5lcj5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGl0bGUnKSB0aXRsZUF0dHJpYnV0ZSA9IHVuZGVmaW5lZDtcblxuICBwcml2YXRlIF9vbWl0dGVkID0gZmFsc2U7XG5cbiAgZ2V0IG9taXR0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29taXR0ZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgb21pdHRlZCh2YWx1ZSkge1xuICAgIHRoaXMuX29taXR0ZWQgPSB2YWx1ZTtcblxuICAgIC8vIGhhbmRsZSBFeHByZXNzaW9uQ2hhbmdlZEFmdGVyQ2hlY2tlZCBpc3N1ZXMgZm9yIHRpdGxlXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRpdGxlQXR0cmlidXRlID0gdGhpcy5vbWl0dGVkID8gdGhpcy50aXRsZSA6IHVuZGVmaW5lZCk7XG4gICAgLy8gLi4uYW5kIGRpc3BsYXllZCB0aXRsZVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG59XG4iXX0=