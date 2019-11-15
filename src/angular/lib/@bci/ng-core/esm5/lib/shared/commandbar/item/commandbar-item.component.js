/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, HostBinding, Input, TemplateRef, ViewChild } from '@angular/core';
var CommandbarItemComponent = /** @class */ (function () {
    function CommandbarItemComponent() {
        /**
         * Set item-class on host element if rendered directly.
         */
        this.classCommandbarItem = true;
        /**
         * Whether to render the item in-place instead of using a template outlet.
         */
        this.render = false;
    }
    CommandbarItemComponent.decorators = [
        { type: Component, args: [{
                    selector: "bci-commandbar-item",
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<ng-template #template>\n  <div class=\"commandbar-item\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n<ng-container *ngIf=\"render\">\n  <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n</ng-container>\n",
                },] },
    ];
    CommandbarItemComponent.propDecorators = {
        classCommandbarItem: [{ type: HostBinding, args: ['class.commandbar-item',] }],
        render: [{ type: Input }],
        hide: [{ type: Input }],
        template: [{ type: ViewChild, args: ['template',] }]
    };
    return CommandbarItemComponent;
}());
export { CommandbarItemComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZGJhci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tbWFuZGJhci9pdGVtL2NvbW1hbmRiYXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7bUNBdUJ4QixJQUFJOzs7O3NCQUs5QyxLQUFLOzs7Z0JBMUJ4QixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLHlWQVlYO2lCQUNBOzs7c0NBTUUsV0FBVyxTQUFDLHVCQUF1Qjt5QkFLbkMsS0FBSzt1QkFTTCxLQUFLOzJCQUtMLFNBQVMsU0FBQyxVQUFVOztrQ0E5Q3ZCOztTQXNCYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYGJjaS1jb21tYW5kYmFyLWl0ZW1gLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bmctdGVtcGxhdGUgI3RlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29tbWFuZGJhci1pdGVtXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG48bmctY29udGFpbmVyICpuZ0lmPVwicmVuZGVyXCI+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBDb21tYW5kYmFySXRlbUNvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIFNldCBpdGVtLWNsYXNzIG9uIGhvc3QgZWxlbWVudCBpZiByZW5kZXJlZCBkaXJlY3RseS5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29tbWFuZGJhci1pdGVtJykgY2xhc3NDb21tYW5kYmFySXRlbSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmVuZGVyIHRoZSBpdGVtIGluLXBsYWNlIGluc3RlYWQgb2YgdXNpbmcgYSB0ZW1wbGF0ZSBvdXRsZXQuXG4gICAqL1xuICBASW5wdXQoKSByZW5kZXIgPSBmYWxzZTtcblxuICAvKipcbiAgICogV2hlbiB0byBoaWRlIHRoZSBpdGVtIGluIGEgc3VibWVudS4gVmFsaWQgdmFsdWVzIGFyZTpcbiAgICogKiBlbXB0eTogYWx3YXlzIGhpZGRlblxuICAgKiAqIGJvb2xlYW46IGhpZGRlbiBpZiB0cnVlLCBzaG93biBvdGhlcndpc2VcbiAgICogKiBub24tZW1wdHkgc3RyaW5nOiBDaGVja2VkIGFnYWluc3QgT2JzZXJ2YWJsZU1lZGlhLmlzQWN0aXZlIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvZmxleC1sYXlvdXQvd2lraS9PYnNlcnZhYmxlTWVkaWEpXG4gICAqICAgICAgICAgICAgICAgICAgICAgZWl0aGVyIHN1cHBvcnRpbmcgY3NzLW1lZGlhLXF1ZXJpZXMgb3IgcHJlZGVmaW5lZCBhbGlhc2VzIGxpa2UgeHMsIGx0LW1kLCBndC1sZy5cbiAgICovXG4gIEBJbnB1dCgpIGhpZGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHJlZmVyZW5jZSB0byB0aGUgaXRlbSdzIHRlbXBsYXRlLlxuICAgKi9cbiAgQFZpZXdDaGlsZCgndGVtcGxhdGUnKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcbn1cbiJdfQ==