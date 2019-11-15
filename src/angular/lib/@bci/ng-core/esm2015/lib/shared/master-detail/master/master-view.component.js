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
export class MasterViewComponent {
    constructor() {
        // TODO: find a solution so that <bci-page-content> can be used in demo/solution instead of isPadded and still the sidebar is working
        this.isPadded = true;
    }
}
MasterViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-master-view',
                template: `<ng-content></ng-content>
`,
                styles: [`:host{display:block}:host.container-content-padded{padding:32px}`]
            },] },
];
MasterViewComponent.propDecorators = {
    isPadded: [{ type: HostBinding, args: ['class.container-content-padded',] }, { type: Input }]
};
if (false) {
    /** @type {?} */
    MasterViewComponent.prototype.isPadded;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9tYXN0ZXItZGV0YWlsL21hc3Rlci9tYXN0ZXItdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVk5RCxNQUFNOzs7d0JBS2MsSUFBSTs7OztZQVh2QixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFO0NBQ1g7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsa0VBQWtFLENBQUM7YUFDN0U7Ozt1QkFJRSxXQUFXLFNBQUMsZ0NBQWdDLGNBQzVDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXN0ZXJEZXRhaWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbWFzdGVyLWRldGFpbC12aWV3LmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIG1hc3RlciBwYXJ0IG9mIHRoZSB7QGxpbmsgTWFzdGVyRGV0YWlsVmlld0NvbXBvbmVudH1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLW1hc3Rlci12aWV3JyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja306aG9zdC5jb250YWluZXItY29udGVudC1wYWRkZWR7cGFkZGluZzozMnB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIE1hc3RlclZpZXdDb21wb25lbnQge1xuXG4gIC8vIFRPRE86IGZpbmQgYSBzb2x1dGlvbiBzbyB0aGF0IDxiY2ktcGFnZS1jb250ZW50PiBjYW4gYmUgdXNlZCBpbiBkZW1vL3NvbHV0aW9uIGluc3RlYWQgb2YgaXNQYWRkZWQgYW5kIHN0aWxsIHRoZSBzaWRlYmFyIGlzIHdvcmtpbmdcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb250YWluZXItY29udGVudC1wYWRkZWQnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgaXNQYWRkZWQgPSB0cnVlO1xufVxuIl19