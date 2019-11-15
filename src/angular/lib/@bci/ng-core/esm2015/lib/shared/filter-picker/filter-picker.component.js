/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, EventEmitter, Output } from '@angular/core';
export class FilterPickerComponent {
    constructor() {
        this.filter = new EventEmitter();
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    applyFilters() {
        this.filter.emit();
    }
    /**
     * @return {?}
     */
    closeModal() {
        this.close.emit();
    }
}
FilterPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-filter-picker',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<div class="dialog-header">
  <h3 matDialogTitle>Filter</h3>
  <button class="close-button" mat-icon-button tabindex="-1" (click)="closeModal()">
    <i class="Bosch-Ic Bosch-Ic-abort"></i>
  </button>
</div>
<mat-dialog-content>
  <div class="dialog-body">
    <mat-list>
      <ng-content select="bci-filter-entry"></ng-content>
    </mat-list>

    <mat-divider [vertical]="true"></mat-divider>

    <div class="filter-view">
      <ng-content></ng-content>
    </div>
  </div>

  <div class="dialog-footer">
    <button class="button-primary" (click)="applyFilters()">Apply</button>
    <button class="button-secondary" (click)="closeModal()">Cancel</button>
  </div>
</mat-dialog-content>

`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */.dialog-body{width:100%;display:flex;flex-direction:row}.dialog-body mat-list{flex-basis:calc(50% - 24px);height:400px;overflow:auto;background:linear-gradient(white 30%,rgba(255,255,255,0)),linear-gradient(rgba(255,255,255,0),#fff 70%) 0 100%,radial-gradient(farthest-side at 50% 0,rgba(0,0,0,.2),rgba(0,0,0,0)),radial-gradient(farthest-side at 50% 100%,rgba(0,0,0,.2),rgba(0,0,0,0)) 0 100%;background-repeat:no-repeat;background-color:#fff;background-size:100% 40px,100% 40px,100% 14px,100% 14px;background-attachment:local,local,scroll,scroll}.dialog-body mat-divider{margin:0 24px;flex-basis:auto}.dialog-body .filter-view{flex-basis:calc(50% - 24px)}.dialog-footer{margin-top:40px;display:flex;justify-content:flex-end}.dialog-footer button.button-secondary{margin-left:16px}`]
            },] },
];
/** @nocollapse */
FilterPickerComponent.ctorParameters = () => [];
FilterPickerComponent.propDecorators = {
    filter: [{ type: Output }],
    close: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FilterPickerComponent.prototype.filter;
    /** @type {?} */
    FilterPickerComponent.prototype.close;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2ZpbHRlci1waWNrZXIvZmlsdGVyLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNDeEUsTUFBTTtJQVFKO3NCQUxzQyxJQUFJLFlBQVksRUFBVTtxQkFHM0IsSUFBSSxZQUFZLEVBQVU7S0FHOUQ7Ozs7SUFFRCxRQUFRO0tBQ1A7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNwQjs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ25COzs7WUF4REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E2Qlg7Z0JBQ0MsTUFBTSxFQUFFLENBQUM7O2d4QkFFcXdCLENBQUM7YUFDaHhCOzs7OztxQkFHRSxNQUFNO29CQUdOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktZmlsdGVyLXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxkaXYgY2xhc3M9XCJkaWFsb2ctaGVhZGVyXCI+XG4gIDxoMyBtYXREaWFsb2dUaXRsZT5GaWx0ZXI8L2gzPlxuICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnV0dG9uXCIgbWF0LWljb24tYnV0dG9uIHRhYmluZGV4PVwiLTFcIiAoY2xpY2spPVwiY2xvc2VNb2RhbCgpXCI+XG4gICAgPGkgY2xhc3M9XCJCb3NjaC1JYyBCb3NjaC1JYy1hYm9ydFwiPjwvaT5cbiAgPC9idXR0b24+XG48L2Rpdj5cbjxtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIDxkaXYgY2xhc3M9XCJkaWFsb2ctYm9keVwiPlxuICAgIDxtYXQtbGlzdD5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJjaS1maWx0ZXItZW50cnlcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9tYXQtbGlzdD5cblxuICAgIDxtYXQtZGl2aWRlciBbdmVydGljYWxdPVwidHJ1ZVwiPjwvbWF0LWRpdmlkZXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLXZpZXdcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImRpYWxvZy1mb290ZXJcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLXByaW1hcnlcIiAoY2xpY2spPVwiYXBwbHlGaWx0ZXJzKClcIj5BcHBseTwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tc2Vjb25kYXJ5XCIgKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiPkNhbmNlbDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvbWF0LWRpYWxvZy1jb250ZW50PlxuXG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8uZGlhbG9nLWJvZHl7d2lkdGg6MTAwJTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93fS5kaWFsb2ctYm9keSBtYXQtbGlzdHtmbGV4LWJhc2lzOmNhbGMoNTAlIC0gMjRweCk7aGVpZ2h0OjQwMHB4O292ZXJmbG93OmF1dG87YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQod2hpdGUgMzAlLHJnYmEoMjU1LDI1NSwyNTUsMCkpLGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDApLCNmZmYgNzAlKSAwIDEwMCUscmFkaWFsLWdyYWRpZW50KGZhcnRoZXN0LXNpZGUgYXQgNTAlIDAscmdiYSgwLDAsMCwuMikscmdiYSgwLDAsMCwwKSkscmFkaWFsLWdyYWRpZW50KGZhcnRoZXN0LXNpZGUgYXQgNTAlIDEwMCUscmdiYSgwLDAsMCwuMikscmdiYSgwLDAsMCwwKSkgMCAxMDAlO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7YmFja2dyb3VuZC1zaXplOjEwMCUgNDBweCwxMDAlIDQwcHgsMTAwJSAxNHB4LDEwMCUgMTRweDtiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6bG9jYWwsbG9jYWwsc2Nyb2xsLHNjcm9sbH0uZGlhbG9nLWJvZHkgbWF0LWRpdmlkZXJ7bWFyZ2luOjAgMjRweDtmbGV4LWJhc2lzOmF1dG99LmRpYWxvZy1ib2R5IC5maWx0ZXItdmlld3tmbGV4LWJhc2lzOmNhbGMoNTAlIC0gMjRweCl9LmRpYWxvZy1mb290ZXJ7bWFyZ2luLXRvcDo0MHB4O2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LmRpYWxvZy1mb290ZXIgYnV0dG9uLmJ1dHRvbi1zZWNvbmRhcnl7bWFyZ2luLWxlZnQ6MTZweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZmlsdGVyOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY2xvc2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGFwcGx5RmlsdGVycygpIHtcbiAgICB0aGlzLmZpbHRlci5lbWl0KCk7XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xuICB9XG5cbn1cbiJdfQ==