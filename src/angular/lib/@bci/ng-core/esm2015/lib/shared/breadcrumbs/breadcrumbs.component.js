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
/**
 * Display breadcrumbs, or ellipsis for intermediate breadcrumbs if there are too many.
 */
export class BreadcrumbsComponent {
    constructor() {
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
    ngOnDestroy() {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.breadcrumbs.changes.pipe(takeUntil(this.componentDestroyed$)).subscribe(() => {
            this.breadcrumbs.forEach((breadcrumb, index) => breadcrumb.omitted = !this.isShown(index));
        });
    }
    /**
     * @param {?} index
     * @return {?}
     */
    isShown(index) {
        return index < this.fixedLead || index >= this.breadcrumbs.length - this.fixedTail;
    }
}
BreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-breadcrumbs',
                template: `<ng-content></ng-content>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
BreadcrumbsComponent.ctorParameters = () => [];
BreadcrumbsComponent.propDecorators = {
    true: [{ type: HostBinding, args: ['class.breadcrumbs',] }],
    breadcrumbs: [{ type: ContentChildren, args: [BreadcrumbComponent,] }],
    fixedLead: [{ type: Input }],
    fixedTail: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQzs7O0FBVUEsTUFBTTtJQWtCSjs7Ozt5QkFUcUIsQ0FBQzs7Ozt5QkFLRCxDQUFDO21DQUVRLElBQUksT0FBTyxFQUFFO0tBRzFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDckM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDaEYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzVGLENBQUMsQ0FBQztLQUNKOzs7OztJQUVTLE9BQU8sQ0FBQyxLQUFhO1FBQzdCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUNwRjs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Q0FDWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7Ozs7bUJBT0UsV0FBVyxTQUFDLG1CQUFtQjswQkFFL0IsZUFBZSxTQUFDLG1CQUFtQjt3QkFLbkMsS0FBSzt3QkFLTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1icmVhZGNydW1icycsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuXG4vKipcbiAqIERpc3BsYXkgYnJlYWRjcnVtYnMsIG9yIGVsbGlwc2lzIGZvciBpbnRlcm1lZGlhdGUgYnJlYWRjcnVtYnMgaWYgdGhlcmUgYXJlIHRvbyBtYW55LlxuICovXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYnJlYWRjcnVtYnMnKSB0cnVlO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQnJlYWRjcnVtYkNvbXBvbmVudCkgcHJpdmF0ZSBicmVhZGNydW1iczogUXVlcnlMaXN0PEJyZWFkY3J1bWJDb21wb25lbnQ+O1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBicmVhZGNydW1icyBzaG93biBzdGFydGluZyBmcm9tIHRoZSByb290LlxuICAgKi9cbiAgQElucHV0KCkgZml4ZWRMZWFkID0gMTtcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgYnJlYWRzY3J1bWJzIHNob3duIHN0YXJ0aW5nIGZyb20gdGhlIGN1cnJlbnQgcGFnZS5cbiAgICovXG4gIEBJbnB1dCgpIGZpeGVkVGFpbCA9IDI7XG5cbiAgcHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5icmVhZGNydW1icy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmJyZWFkY3J1bWJzLmZvckVhY2goKGJyZWFkY3J1bWIsIGluZGV4KSA9PiBicmVhZGNydW1iLm9taXR0ZWQgPSAhdGhpcy5pc1Nob3duKGluZGV4KSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNTaG93bihpbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGluZGV4IDwgdGhpcy5maXhlZExlYWQgfHwgaW5kZXggPj0gdGhpcy5icmVhZGNydW1icy5sZW5ndGggLSB0aGlzLmZpeGVkVGFpbDtcbiAgfVxufVxuIl19