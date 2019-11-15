/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent() {
        /**
         * Maximum number of breadcrumbs shown starting from the root.
         */
        this.fixedLead = 1;
        /**
         * Maximum number of breadscrumbs shown starting from the current page.
         */
        this.fixedTail = 2;
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    BreadcrumbsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    };
    /**
     * @return {?}
     */
    BreadcrumbsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.breadcrumbs.changes.pipe(takeUntil(this.componentDestroyed$)).subscribe(function () {
            _this.breadcrumbs.forEach(function (breadcrumb, index) { return breadcrumb.omitted = !_this.isShown(index); });
        });
    };
    /**
     * @param {?} index
     * @return {?}
     */
    BreadcrumbsComponent.prototype.isShown = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index < this.fixedLead || index >= this.breadcrumbs.length - this.fixedTail;
    };
    BreadcrumbsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-breadcrumbs',
                    template: "<ng-content></ng-content>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    BreadcrumbsComponent.ctorParameters = function () { return []; };
    BreadcrumbsComponent.propDecorators = {
        true: [{ type: HostBinding, args: ['class.breadcrumbs',] }],
        breadcrumbs: [{ type: ContentChildren, args: [BreadcrumbComponent,] }],
        fixedLead: [{ type: Input }],
        fixedTail: [{ type: Input }]
    };
    return BreadcrumbsComponent;
}());
export { BreadcrumbsComponent };
if (false) {
    /** @type {?} */
    BreadcrumbsComponent.prototype.true;
    /** @type {?} */
    BreadcrumbsComponent.prototype.breadcrumbs;
    /**
     * Maximum number of breadcrumbs shown starting from the root.
     * @type {?}
     */
    BreadcrumbsComponent.prototype.fixedLead;
    /**
     * Maximum number of breadscrumbs shown starting from the current page.
     * @type {?}
     */
    BreadcrumbsComponent.prototype.fixedTail;
    /** @type {?} */
    BreadcrumbsComponent.prototype.componentDestroyed$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUE4QnpDOzs7O3lCQVRxQixDQUFDOzs7O3lCQUtELENBQUM7bUNBRVEsSUFBSSxPQUFPLEVBQUU7S0FHMUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3JDOzs7O0lBRUQsaURBQWtCOzs7SUFBbEI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDM0UsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFVLEVBQUUsS0FBSyxJQUFLLE9BQUEsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FBQztTQUM1RixDQUFDLENBQUM7S0FDSjs7Ozs7SUFFUyxzQ0FBTzs7OztJQUFqQixVQUFrQixLQUFhO1FBQzdCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUNwRjs7Z0JBNUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsNkJBQ1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7Ozt1QkFPRSxXQUFXLFNBQUMsbUJBQW1COzhCQUUvQixlQUFlLFNBQUMsbUJBQW1COzRCQUtuQyxLQUFLOzRCQUtMLEtBQUs7OytCQWpDUjs7U0FtQmEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1icmVhZGNydW1icycsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuXG4vKipcbiAqIERpc3BsYXkgYnJlYWRjcnVtYnMsIG9yIGVsbGlwc2lzIGZvciBpbnRlcm1lZGlhdGUgYnJlYWRjcnVtYnMgaWYgdGhlcmUgYXJlIHRvbyBtYW55LlxuICovXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYnJlYWRjcnVtYnMnKSB0cnVlO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQnJlYWRjcnVtYkNvbXBvbmVudCkgcHJpdmF0ZSBicmVhZGNydW1iczogUXVlcnlMaXN0PEJyZWFkY3J1bWJDb21wb25lbnQ+O1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBicmVhZGNydW1icyBzaG93biBzdGFydGluZyBmcm9tIHRoZSByb290LlxuICAgKi9cbiAgQElucHV0KCkgZml4ZWRMZWFkID0gMTtcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgYnJlYWRzY3J1bWJzIHNob3duIHN0YXJ0aW5nIGZyb20gdGhlIGN1cnJlbnQgcGFnZS5cbiAgICovXG4gIEBJbnB1dCgpIGZpeGVkVGFpbCA9IDI7XG5cbiAgcHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5icmVhZGNydW1icy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmJyZWFkY3J1bWJzLmZvckVhY2goKGJyZWFkY3J1bWIsIGluZGV4KSA9PiBicmVhZGNydW1iLm9taXR0ZWQgPSAhdGhpcy5pc1Nob3duKGluZGV4KSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNTaG93bihpbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGluZGV4IDwgdGhpcy5maXhlZExlYWQgfHwgaW5kZXggPj0gdGhpcy5icmVhZGNydW1icy5sZW5ndGggLSB0aGlzLmZpeGVkVGFpbDtcbiAgfVxufVxuIl19