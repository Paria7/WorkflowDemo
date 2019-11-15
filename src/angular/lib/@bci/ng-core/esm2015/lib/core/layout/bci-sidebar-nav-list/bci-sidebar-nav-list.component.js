/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, Input } from '@angular/core';
export class BciSidebarNavListComponent {
    constructor() {
        this.navItems = [];
        /**
         * \@todo enable skipSorting to be set (SidebarService? Configuration?)
         */
        this.skipSorting = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.skipSorting && changes["navItems"]) {
            this.navItems.sort((a, b) => a.position - b.position);
        }
    }
}
BciSidebarNavListComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-sidebar-nav-list',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<mat-nav-list>
  <bci-sidebar-nav-item *ngFor="let navItem of navItems" [navItem]="navItem">
  </bci-sidebar-nav-item>
</mat-nav-list>
`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */.mat-nav-list{padding-top:0}`]
            },] },
];
/** @nocollapse */
BciSidebarNavListComponent.ctorParameters = () => [];
BciSidebarNavListComponent.propDecorators = {
    navItems: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BciSidebarNavListComponent.prototype.navItems;
    /**
     * \@todo enable skipSorting to be set (SidebarService? Configuration?)
     * @type {?}
     */
    BciSidebarNavListComponent.prototype.skipSorting;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLXNpZGViYXItbmF2LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbGF5b3V0L2JjaS1zaWRlYmFyLW5hdi1saXN0L2JjaS1zaWRlYmFyLW5hdi1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBa0JuRixNQUFNO0lBUUo7d0JBTnNDLEVBQUU7Ozs7MkJBSTFCLEtBQUs7S0FHbEI7Ozs7SUFFRCxRQUFRO0tBQ1A7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxPQUFPLFlBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2RDtLQUNGOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Q0FRWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQzs7Z0NBRXFCLENBQUM7YUFDaEM7Ozs7O3VCQUdFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2SXRlbSB9IGZyb20gJy4uL2JjaS1zaWRlYmFyL3NpZGViYXItbmF2LWl0ZW0ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktc2lkZWJhci1uYXYtbGlzdCcsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxtYXQtbmF2LWxpc3Q+XG4gIDxiY2ktc2lkZWJhci1uYXYtaXRlbSAqbmdGb3I9XCJsZXQgbmF2SXRlbSBvZiBuYXZJdGVtc1wiIFtuYXZJdGVtXT1cIm5hdkl0ZW1cIj5cbiAgPC9iY2ktc2lkZWJhci1uYXYtaXRlbT5cbjwvbWF0LW5hdi1saXN0PlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLm1hdC1uYXYtbGlzdHtwYWRkaW5nLXRvcDowfWBdXG59KVxuZXhwb3J0IGNsYXNzIEJjaVNpZGViYXJOYXZMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIG5hdkl0ZW1zOiBTaWRlYmFyTmF2SXRlbVtdID0gW107XG4gIC8qKlxuICAgKiBAdG9kbyBlbmFibGUgc2tpcFNvcnRpbmcgdG8gYmUgc2V0IChTaWRlYmFyU2VydmljZT8gQ29uZmlndXJhdGlvbj8pXG4gICAqL1xuICBza2lwU29ydGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNraXBTb3J0aW5nICYmIGNoYW5nZXMubmF2SXRlbXMpIHtcbiAgICAgIHRoaXMubmF2SXRlbXMuc29ydCgoYSwgYikgPT4gYS5wb3NpdGlvbiAtIGIucG9zaXRpb24pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=