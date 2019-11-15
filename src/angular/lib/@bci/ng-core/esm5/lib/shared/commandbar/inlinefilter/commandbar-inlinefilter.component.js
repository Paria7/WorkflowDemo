/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { CommandbarItemComponent } from '../item/commandbar-item.component';
var CommandbarInlinefilterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CommandbarInlinefilterComponent, _super);
    function CommandbarInlinefilterComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disableDefaultStyle = false;
        return _this;
    }
    CommandbarInlinefilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-commandbar-inlinefilter',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<ng-template #template>\n  <div class=\"commandbar-inline-filter\" [class.commandbar-default-style]=\"!disableDefaultStyle\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.commandbar-inline-filter{vertical-align:middle}.commandbar-inline-filter+.commandbar-inline-filter{margin-left:10px}.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-label,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-label .mat-empty,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-label.mat-empty{color:#000}.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-prefix,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-suffix{background:#fff}.commandbar-default-style ::ng-deep input,.commandbar-default-style ::ng-deep input:focus:enabled{background:#fff}.commandbar-default-style ::ng-deep ::-webkit-input-placeholder{color:#000}.commandbar-default-style ::ng-deep ::-ms-input-placeholder{color:#000}.commandbar-default-style ::ng-deep ::placeholder{color:#000}.commandbar-default-style ::ng-deep :-ms-input-placeholder{color:#000}.commandbar-default-style ::ng-deep .mat-form-field-flex,.commandbar-default-style ::ng-deep .mat-select-trigger{background-color:#fff;background-image:none}"],
                    providers: [{ provide: CommandbarItemComponent, useExisting: forwardRef(function () { return CommandbarInlinefilterComponent; }) }]
                },] },
    ];
    CommandbarInlinefilterComponent.propDecorators = {
        disableDefaultStyle: [{ type: Input }]
    };
    return CommandbarInlinefilterComponent;
}(CommandbarItemComponent));
export { CommandbarInlinefilterComponent };
if (false) {
    /** @type {?} */
    CommandbarInlinefilterComponent.prototype.disableDefaultStyle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZGJhci1pbmxpbmVmaWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21tYW5kYmFyL2lubGluZWZpbHRlci9jb21tYW5kYmFyLWlubGluZWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0lBcUJ2QiwyREFBdUI7OztvQ0FFM0MsS0FBSzs7OztnQkFyQnJDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxRQUFRLEVBQUUsMFNBU1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMsdTZDQUk4c0MsQ0FBQztvQkFDeHRDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLCtCQUErQixFQUEvQixDQUErQixDQUFDLEVBQUUsQ0FBQztpQkFDbEg7OztzQ0FHRSxLQUFLOzswQ0E1QlI7RUEwQnFELHVCQUF1QjtTQUEvRCwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1hbmRiYXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vaXRlbS9jb21tYW5kYmFyLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWNvbW1hbmRiYXItaW5saW5lZmlsdGVyJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbW1hbmRiYXItaW5saW5lLWZpbHRlclwiIFtjbGFzcy5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGVdPVwiIWRpc2FibGVEZWZhdWx0U3R5bGVcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLmNvbW1hbmRiYXItaW5saW5lLWZpbHRlcnt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmNvbW1hbmRiYXItaW5saW5lLWZpbHRlcisuY29tbWFuZGJhci1pbmxpbmUtZmlsdGVye21hcmdpbi1sZWZ0OjEwcHh9LmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCAubWF0LWVtcHR5LC5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtZW1wdHl7Y29sb3I6IzAwMH0uY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQsLmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCwuY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtc3VmZml4e2JhY2tncm91bmQ6I2ZmZn0uY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCBpbnB1dCwuY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCBpbnB1dDpmb2N1czplbmFibGVke2JhY2tncm91bmQ6I2ZmZn0uY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6IzAwMH0uY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojMDAwfS5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIDo6cGxhY2Vob2xkZXJ7Y29sb3I6IzAwMH0uY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCA6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiMwMDB9LmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXgsLmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtdHJpZ2dlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7YmFja2dyb3VuZC1pbWFnZTpub25lfWBdLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENvbW1hbmRiYXJJdGVtQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDb21tYW5kYmFySW5saW5lZmlsdGVyQ29tcG9uZW50KSB9XVxufSlcbmV4cG9ydCBjbGFzcyBDb21tYW5kYmFySW5saW5lZmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tbWFuZGJhckl0ZW1Db21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGRpc2FibGVEZWZhdWx0U3R5bGUgPSBmYWxzZTtcblxufVxuIl19