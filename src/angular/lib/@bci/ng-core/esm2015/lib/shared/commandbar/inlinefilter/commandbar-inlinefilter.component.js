/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, forwardRef, Input } from '@angular/core';
import { CommandbarItemComponent } from '../item/commandbar-item.component';
export class CommandbarInlinefilterComponent extends CommandbarItemComponent {
    constructor() {
        super(...arguments);
        this.disableDefaultStyle = false;
    }
}
CommandbarInlinefilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-commandbar-inlinefilter',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<ng-template #template>
  <div class="commandbar-inline-filter" [class.commandbar-default-style]="!disableDefaultStyle">
    <ng-content></ng-content>
  </div>
</ng-template>
`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 *//*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */.commandbar-inline-filter{vertical-align:middle}.commandbar-inline-filter+.commandbar-inline-filter{margin-left:10px}.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-label,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-label .mat-empty,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-label.mat-empty{color:#000}.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-prefix,.commandbar-default-style ::ng-deep mat-form-field.mat-form-field .mat-form-field-suffix{background:#fff}.commandbar-default-style ::ng-deep input,.commandbar-default-style ::ng-deep input:focus:enabled{background:#fff}.commandbar-default-style ::ng-deep ::-webkit-input-placeholder{color:#000}.commandbar-default-style ::ng-deep ::-ms-input-placeholder{color:#000}.commandbar-default-style ::ng-deep ::placeholder{color:#000}.commandbar-default-style ::ng-deep :-ms-input-placeholder{color:#000}.commandbar-default-style ::ng-deep .mat-form-field-flex,.commandbar-default-style ::ng-deep .mat-select-trigger{background-color:#fff;background-image:none}`],
                providers: [{ provide: CommandbarItemComponent, useExisting: forwardRef(() => CommandbarInlinefilterComponent) }]
            },] },
];
CommandbarInlinefilterComponent.propDecorators = {
    disableDefaultStyle: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CommandbarInlinefilterComponent.prototype.disableDefaultStyle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZGJhci1pbmxpbmVmaWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21tYW5kYmFyL2lubGluZWZpbHRlci9jb21tYW5kYmFyLWlubGluZWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQXFCNUUsTUFBTSxzQ0FBdUMsU0FBUSx1QkFBdUI7OzttQ0FFM0MsS0FBSzs7OztZQXJCckMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFFBQVEsRUFBRTs7Ozs7Ozs7O0NBU1g7Z0JBQ0MsTUFBTSxFQUFFLENBQUM7Ozs7eXRDQUk4c0MsQ0FBQztnQkFDeHRDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsK0JBQStCLENBQUMsRUFBRSxDQUFDO2FBQ2xIOzs7a0NBR0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbWFuZGJhckl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9pdGVtL2NvbW1hbmRiYXItaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktY29tbWFuZGJhci1pbmxpbmVmaWx0ZXInLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bmctdGVtcGxhdGUgI3RlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29tbWFuZGJhci1pbmxpbmUtZmlsdGVyXCIgW2NsYXNzLmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZV09XCIhZGlzYWJsZURlZmF1bHRTdHlsZVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8uY29tbWFuZGJhci1pbmxpbmUtZmlsdGVye3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uY29tbWFuZGJhci1pbmxpbmUtZmlsdGVyKy5jb21tYW5kYmFyLWlubGluZS1maWx0ZXJ7bWFyZ2luLWxlZnQ6MTBweH0uY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIC5tYXQtZW1wdHksLmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1lbXB0eXtjb2xvcjojMDAwfS5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZCwuY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtcHJlZml4LC5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1zdWZmaXh7YmFja2dyb3VuZDojZmZmfS5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIGlucHV0LC5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIGlucHV0OmZvY3VzOmVuYWJsZWR7YmFja2dyb3VuZDojZmZmfS5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojMDAwfS5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiMwMDB9LmNvbW1hbmRiYXItZGVmYXVsdC1zdHlsZSA6Om5nLWRlZXAgOjpwbGFjZWhvbGRlcntjb2xvcjojMDAwfS5jb21tYW5kYmFyLWRlZmF1bHQtc3R5bGUgOjpuZy1kZWVwIDotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6IzAwMH0uY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCwuY29tbWFuZGJhci1kZWZhdWx0LXN0eWxlIDo6bmctZGVlcCAubWF0LXNlbGVjdC10cmlnZ2Vye2JhY2tncm91bmQtY29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWltYWdlOm5vbmV9YF0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ29tbWFuZGJhckl0ZW1Db21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJDb21wb25lbnQpIH1dXG59KVxuZXhwb3J0IGNsYXNzIENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21tYW5kYmFySXRlbUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZGlzYWJsZURlZmF1bHRTdHlsZSA9IGZhbHNlO1xuXG59XG4iXX0=