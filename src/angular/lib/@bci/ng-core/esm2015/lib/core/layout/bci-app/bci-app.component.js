/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, Input } from '@angular/core';
import { BreadcrumbsService } from '../../breadcrumbs.service';
export class BciAppComponent {
    /**
     * @param {?} breadcrumbsService
     */
    constructor(breadcrumbsService) {
        this.breadcrumbsService = breadcrumbsService;
        this.applicationTitle = '';
        this.sidebarLinks = [];
        this.sidebarFooterLinks = [];
        this.navigationItems = [];
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
        if (changes["sidebarLinks"] || changes["sidebarFooterLinks"]) {
            this.navigationItems = [...this.sidebarLinks, ...this.sidebarFooterLinks];
            this.breadcrumbsService.setNavigationItems(this.navigationItems);
        }
    }
}
BciAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-app',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<bci-content>
  <bci-sidebar [sidebarLinks]="sidebarLinks" [applicationTitle]="applicationTitle">

    <bci-sidebar-footer [sidebarFooterLinks]="sidebarFooterLinks"></bci-sidebar-footer>


    <bci-header>
    </bci-header>

    <div class="content">
      <ng-content></ng-content>
    </div>
  </bci-sidebar>

</bci-content>
`,
                styles: [`.content{position:relative;overflow:auto;height:100%;width:100%}`]
            },] },
];
/** @nocollapse */
BciAppComponent.ctorParameters = () => [
    { type: BreadcrumbsService }
];
BciAppComponent.propDecorators = {
    applicationTitle: [{ type: Input }],
    sidebarLinks: [{ type: Input }],
    sidebarFooterLinks: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9sYXlvdXQvYmNpLWFwcC9iY2ktYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBRW5GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBMEIvRCxNQUFNOzs7O0lBT0osWUFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7Z0NBTjlCLEVBQUU7NEJBQ1ksRUFBRTtrQ0FDSSxFQUFFOytCQUV6QixFQUFFO0tBRzFCOzs7O0lBRUQsUUFBUTtLQUNQOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxFQUFFLENBQUMsQ0FBQyxPQUFPLG9CQUFpQixPQUFPLHNCQUFtQixDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNsRTtLQUNGOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FtQlg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsa0VBQWtFLENBQUM7YUFDN0U7Ozs7WUF6QlEsa0JBQWtCOzs7K0JBMkJ4QixLQUFLOzJCQUNMLEtBQUs7aUNBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpZGViYXJOYXZJdGVtIH0gZnJvbSAnLi4vYmNpLXNpZGViYXIvc2lkZWJhci1uYXYtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBCcmVhZGNydW1ic1NlcnZpY2UgfSBmcm9tICcuLi8uLi9icmVhZGNydW1icy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWFwcCcsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxiY2ktY29udGVudD5cbiAgPGJjaS1zaWRlYmFyIFtzaWRlYmFyTGlua3NdPVwic2lkZWJhckxpbmtzXCIgW2FwcGxpY2F0aW9uVGl0bGVdPVwiYXBwbGljYXRpb25UaXRsZVwiPlxuXG4gICAgPGJjaS1zaWRlYmFyLWZvb3RlciBbc2lkZWJhckZvb3RlckxpbmtzXT1cInNpZGViYXJGb290ZXJMaW5rc1wiPjwvYmNpLXNpZGViYXItZm9vdGVyPlxuXG5cbiAgICA8YmNpLWhlYWRlcj5cbiAgICA8L2JjaS1oZWFkZXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2JjaS1zaWRlYmFyPlxuXG48L2JjaS1jb250ZW50PlxuYCxcbiAgc3R5bGVzOiBbYC5jb250ZW50e3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmF1dG87aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX1gXVxufSlcbmV4cG9ydCBjbGFzcyBCY2lBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGFwcGxpY2F0aW9uVGl0bGUgPSAnJztcbiAgQElucHV0KCkgc2lkZWJhckxpbmtzOiBTaWRlYmFyTmF2SXRlbVtdID0gW107XG4gIEBJbnB1dCgpIHNpZGViYXJGb290ZXJMaW5rczogU2lkZWJhck5hdkl0ZW1bXSA9IFtdO1xuXG4gIHB1YmxpYyBuYXZpZ2F0aW9uSXRlbXMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyZWFkY3J1bWJzU2VydmljZTogQnJlYWRjcnVtYnNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5zaWRlYmFyTGlua3MgfHwgY2hhbmdlcy5zaWRlYmFyRm9vdGVyTGlua3MpIHtcbiAgICAgIHRoaXMubmF2aWdhdGlvbkl0ZW1zID0gWy4uLnRoaXMuc2lkZWJhckxpbmtzLCAuLi50aGlzLnNpZGViYXJGb290ZXJMaW5rc107XG4gICAgICB0aGlzLmJyZWFkY3J1bWJzU2VydmljZS5zZXROYXZpZ2F0aW9uSXRlbXModGhpcy5uYXZpZ2F0aW9uSXRlbXMpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=