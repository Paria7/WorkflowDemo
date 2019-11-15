/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, HostBinding, Input, TemplateRef, ViewChild } from '@angular/core';
export class CommandbarItemComponent {
    constructor() {
        /**
         * Set item-class on host element if rendered directly.
         */
        this.classCommandbarItem = true;
        /**
         * Whether to render the item in-place instead of using a template outlet.
         */
        this.render = false;
    }
}
CommandbarItemComponent.decorators = [
    { type: Component, args: [{
                selector: `bci-commandbar-item`,
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<ng-template #template>
  <div class="commandbar-item">
    <ng-content></ng-content>
  </div>
</ng-template>
<ng-container *ngIf="render">
  <ng-container *ngTemplateOutlet="template"></ng-container>
</ng-container>
`,
            },] },
];
CommandbarItemComponent.propDecorators = {
    classCommandbarItem: [{ type: HostBinding, args: ['class.commandbar-item',] }],
    render: [{ type: Input }],
    hide: [{ type: Input }],
    template: [{ type: ViewChild, args: ['template',] }]
};
if (false) {
    /**
     * Set item-class on host element if rendered directly.
     * @type {?}
     */
    CommandbarItemComponent.prototype.classCommandbarItem;
    /**
     * Whether to render the item in-place instead of using a template outlet.
     * @type {?}
     */
    CommandbarItemComponent.prototype.render;
    /**
     * When to hide the item in a submenu. Valid values are:
     * * empty: always hidden
     * * boolean: hidden if true, shown otherwise
     * * non-empty string: Checked against ObservableMedia.isActive (see https://github.com/angular/flex-layout/wiki/ObservableMedia)
     *                     either supporting css-media-queries or predefined aliases like xs, lt-md, gt-lg.
     * @type {?}
     */
    CommandbarItemComponent.prototype.hide;
    /**
     * The reference to the item's template.
     * @type {?}
     */
    CommandbarItemComponent.prototype.template;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZGJhci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tbWFuZGJhci9pdGVtL2NvbW1hbmRiYXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBa0J0RixNQUFNOzs7OzttQ0FLd0QsSUFBSTs7OztzQkFLOUMsS0FBSzs7OztZQTFCeEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0NBWVg7YUFDQTs7O2tDQU1FLFdBQVcsU0FBQyx1QkFBdUI7cUJBS25DLEtBQUs7bUJBU0wsS0FBSzt1QkFLTCxTQUFTLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBgYmNpLWNvbW1hbmRiYXItaXRlbWAsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxuZy10ZW1wbGF0ZSAjdGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb21tYW5kYmFyLWl0ZW1cIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJyZW5kZXJcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIENvbW1hbmRiYXJJdGVtQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogU2V0IGl0ZW0tY2xhc3Mgb24gaG9zdCBlbGVtZW50IGlmIHJlbmRlcmVkIGRpcmVjdGx5LlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb21tYW5kYmFyLWl0ZW0nKSBjbGFzc0NvbW1hbmRiYXJJdGVtID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hldGhlciB0byByZW5kZXIgdGhlIGl0ZW0gaW4tcGxhY2UgaW5zdGVhZCBvZiB1c2luZyBhIHRlbXBsYXRlIG91dGxldC5cbiAgICovXG4gIEBJbnB1dCgpIHJlbmRlciA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRvIGhpZGUgdGhlIGl0ZW0gaW4gYSBzdWJtZW51LiBWYWxpZCB2YWx1ZXMgYXJlOlxuICAgKiAqIGVtcHR5OiBhbHdheXMgaGlkZGVuXG4gICAqICogYm9vbGVhbjogaGlkZGVuIGlmIHRydWUsIHNob3duIG90aGVyd2lzZVxuICAgKiAqIG5vbi1lbXB0eSBzdHJpbmc6IENoZWNrZWQgYWdhaW5zdCBPYnNlcnZhYmxlTWVkaWEuaXNBY3RpdmUgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9mbGV4LWxheW91dC93aWtpL09ic2VydmFibGVNZWRpYSlcbiAgICogICAgICAgICAgICAgICAgICAgICBlaXRoZXIgc3VwcG9ydGluZyBjc3MtbWVkaWEtcXVlcmllcyBvciBwcmVkZWZpbmVkIGFsaWFzZXMgbGlrZSB4cywgbHQtbWQsIGd0LWxnLlxuICAgKi9cbiAgQElucHV0KCkgaGlkZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVmZXJlbmNlIHRvIHRoZSBpdGVtJ3MgdGVtcGxhdGUuXG4gICAqL1xuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZScpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xufVxuIl19