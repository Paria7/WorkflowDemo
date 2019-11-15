/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, Input } from '@angular/core';
/**
 * The detail part of the {\@link MasterDetailViewComponent}
 */
export class DetailViewComponent {
    constructor() {
        // TODO: find a solution so that <bci-page-content> can be used in demo/solution instead of isPadded and still the sidebar is working
        this.isPadded = true;
    }
}
DetailViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-detail-view',
                template: `<ng-content></ng-content>
`,
                styles: [``]
            },] },
];
DetailViewComponent.propDecorators = {
    isPadded: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DetailViewComponent.prototype.isPadded;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9tYXN0ZXItZGV0YWlsL2RldGFpbC9kZXRhaWwtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBWWpELE1BQU07Ozt3QkFHdUIsSUFBSTs7OztZQVRoQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFO0NBQ1g7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozt1QkFJRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXN0ZXJEZXRhaWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbWFzdGVyLWRldGFpbC12aWV3LmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIGRldGFpbCBwYXJ0IG9mIHRoZSB7QGxpbmsgTWFzdGVyRGV0YWlsVmlld0NvbXBvbmVudH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWRldGFpbC12aWV3JyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsVmlld0NvbXBvbmVudCB7XG5cbiAgLy8gVE9ETzogZmluZCBhIHNvbHV0aW9uIHNvIHRoYXQgPGJjaS1wYWdlLWNvbnRlbnQ+IGNhbiBiZSB1c2VkIGluIGRlbW8vc29sdXRpb24gaW5zdGVhZCBvZiBpc1BhZGRlZCBhbmQgc3RpbGwgdGhlIHNpZGViYXIgaXMgd29ya2luZ1xuICBASW5wdXQoKSBwdWJsaWMgaXNQYWRkZWQgPSB0cnVlO1xufVxuIl19