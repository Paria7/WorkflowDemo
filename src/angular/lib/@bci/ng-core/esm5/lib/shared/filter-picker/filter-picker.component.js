/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, EventEmitter, Output } from '@angular/core';
var FilterPickerComponent = /** @class */ (function () {
    function FilterPickerComponent() {
        this.filter = new EventEmitter();
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FilterPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FilterPickerComponent.prototype.applyFilters = /**
     * @return {?}
     */
    function () {
        this.filter.emit();
    };
    /**
     * @return {?}
     */
    FilterPickerComponent.prototype.closeModal = /**
     * @return {?}
     */
    function () {
        this.close.emit();
    };
    FilterPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-filter-picker',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"dialog-header\">\n  <h3 matDialogTitle>Filter</h3>\n  <button class=\"close-button\" mat-icon-button tabindex=\"-1\" (click)=\"closeModal()\">\n    <i class=\"Bosch-Ic Bosch-Ic-abort\"></i>\n  </button>\n</div>\n<mat-dialog-content>\n  <div class=\"dialog-body\">\n    <mat-list>\n      <ng-content select=\"bci-filter-entry\"></ng-content>\n    </mat-list>\n\n    <mat-divider [vertical]=\"true\"></mat-divider>\n\n    <div class=\"filter-view\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"dialog-footer\">\n    <button class=\"button-primary\" (click)=\"applyFilters()\">Apply</button>\n    <button class=\"button-secondary\" (click)=\"closeModal()\">Cancel</button>\n  </div>\n</mat-dialog-content>\n\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.dialog-body{width:100%;display:flex;flex-direction:row}.dialog-body mat-list{flex-basis:calc(50% - 24px);height:400px;overflow:auto;background:linear-gradient(white 30%,rgba(255,255,255,0)),linear-gradient(rgba(255,255,255,0),#fff 70%) 0 100%,radial-gradient(farthest-side at 50% 0,rgba(0,0,0,.2),rgba(0,0,0,0)),radial-gradient(farthest-side at 50% 100%,rgba(0,0,0,.2),rgba(0,0,0,0)) 0 100%;background-repeat:no-repeat;background-color:#fff;background-size:100% 40px,100% 40px,100% 14px,100% 14px;background-attachment:local,local,scroll,scroll}.dialog-body mat-divider{margin:0 24px;flex-basis:auto}.dialog-body .filter-view{flex-basis:calc(50% - 24px)}.dialog-footer{margin-top:40px;display:flex;justify-content:flex-end}.dialog-footer button.button-secondary{margin-left:16px}"]
                },] },
    ];
    /** @nocollapse */
    FilterPickerComponent.ctorParameters = function () { return []; };
    FilterPickerComponent.propDecorators = {
        filter: [{ type: Output }],
        close: [{ type: Output }]
    };
    return FilterPickerComponent;
}());
export { FilterPickerComponent };
if (false) {
    /** @type {?} */
    FilterPickerComponent.prototype.filter;
    /** @type {?} */
    FilterPickerComponent.prototype.close;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2ZpbHRlci1waWNrZXIvZmlsdGVyLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUE4Q3RFO3NCQUxzQyxJQUFJLFlBQVksRUFBVTtxQkFHM0IsSUFBSSxZQUFZLEVBQVU7S0FHOUQ7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7S0FDQzs7OztJQUVELDRDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDcEI7Ozs7SUFFRCwwQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ25COztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSw4MUJBNkJYO29CQUNDLE1BQU0sRUFBRSxDQUFDLHMzQkFFcXdCLENBQUM7aUJBQ2h4Qjs7Ozs7eUJBR0UsTUFBTTt3QkFHTixNQUFNOztnQ0EvQ1Q7O1NBMENhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1maWx0ZXItcGlja2VyJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPGRpdiBjbGFzcz1cImRpYWxvZy1oZWFkZXJcIj5cbiAgPGgzIG1hdERpYWxvZ1RpdGxlPkZpbHRlcjwvaDM+XG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idXR0b25cIiBtYXQtaWNvbi1idXR0b24gdGFiaW5kZXg9XCItMVwiIChjbGljayk9XCJjbG9zZU1vZGFsKClcIj5cbiAgICA8aSBjbGFzcz1cIkJvc2NoLUljIEJvc2NoLUljLWFib3J0XCI+PC9pPlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuPG1hdC1kaWFsb2ctY29udGVudD5cbiAgPGRpdiBjbGFzcz1cImRpYWxvZy1ib2R5XCI+XG4gICAgPG1hdC1saXN0PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYmNpLWZpbHRlci1lbnRyeVwiPjwvbmctY29udGVudD5cbiAgICA8L21hdC1saXN0PlxuXG4gICAgPG1hdC1kaXZpZGVyIFt2ZXJ0aWNhbF09XCJ0cnVlXCI+PC9tYXQtZGl2aWRlcj5cblxuICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItdmlld1wiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWZvb3RlclwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tcHJpbWFyeVwiIChjbGljayk9XCJhcHBseUZpbHRlcnMoKVwiPkFwcGx5PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi1zZWNvbmRhcnlcIiAoY2xpY2spPVwiY2xvc2VNb2RhbCgpXCI+Q2FuY2VsPC9idXR0b24+XG4gIDwvZGl2PlxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+XG5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy5kaWFsb2ctYm9keXt3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3d9LmRpYWxvZy1ib2R5IG1hdC1saXN0e2ZsZXgtYmFzaXM6Y2FsYyg1MCUgLSAyNHB4KTtoZWlnaHQ6NDAwcHg7b3ZlcmZsb3c6YXV0bztiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh3aGl0ZSAzMCUscmdiYSgyNTUsMjU1LDI1NSwwKSksbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMCksI2ZmZiA3MCUpIDAgMTAwJSxyYWRpYWwtZ3JhZGllbnQoZmFydGhlc3Qtc2lkZSBhdCA1MCUgMCxyZ2JhKDAsMCwwLC4yKSxyZ2JhKDAsMCwwLDApKSxyYWRpYWwtZ3JhZGllbnQoZmFydGhlc3Qtc2lkZSBhdCA1MCUgMTAwJSxyZ2JhKDAsMCwwLC4yKSxyZ2JhKDAsMCwwLDApKSAwIDEwMCU7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtY29sb3I6I2ZmZjtiYWNrZ3JvdW5kLXNpemU6MTAwJSA0MHB4LDEwMCUgNDBweCwxMDAlIDE0cHgsMTAwJSAxNHB4O2JhY2tncm91bmQtYXR0YWNobWVudDpsb2NhbCxsb2NhbCxzY3JvbGwsc2Nyb2xsfS5kaWFsb2ctYm9keSBtYXQtZGl2aWRlcnttYXJnaW46MCAyNHB4O2ZsZXgtYmFzaXM6YXV0b30uZGlhbG9nLWJvZHkgLmZpbHRlci12aWV3e2ZsZXgtYmFzaXM6Y2FsYyg1MCUgLSAyNHB4KX0uZGlhbG9nLWZvb3RlcnttYXJnaW4tdG9wOjQwcHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uZGlhbG9nLWZvb3RlciBidXR0b24uYnV0dG9uLXNlY29uZGFyeXttYXJnaW4tbGVmdDoxNnB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBmaWx0ZXI6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjbG9zZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgYXBwbHlGaWx0ZXJzKCkge1xuICAgIHRoaXMuZmlsdGVyLmVtaXQoKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5jbG9zZS5lbWl0KCk7XG4gIH1cblxufVxuIl19