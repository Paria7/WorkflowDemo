/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var FilterEntryComponent = /** @class */ (function () {
    function FilterEntryComponent() {
        this.select = new EventEmitter();
        this.deactivate = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FilterEntryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FilterEntryComponent.prototype.showFilterDetails = /**
     * @return {?}
     */
    function () {
        this.select.emit(this.filterTitle);
    };
    /**
     * @return {?}
     */
    FilterEntryComponent.prototype.deactivateFilter = /**
     * @return {?}
     */
    function () {
        this.deactivate.emit((this.filterTitle));
    };
    FilterEntryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-filter-entry',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-list-item (click)=\"showFilterDetails()\" [ngClass]=\"{'active': isSelected}\">\n  <span matLine>{{ filterTitle }} </span>\n  <mat-icon *ngIf=\"isActive\" fontIcon=\"Bosch-Ic-checkmark\"></mat-icon>\n  <mat-icon *ngIf=\"isActive\" fontIcon=\"Bosch-Ic-delete\"\n            (click)=\"deactivateFilter()\"></mat-icon>\n</mat-list-item>\n\n\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{flex:1}mat-list-item{cursor:pointer}mat-list-item.active,mat-list-item:hover{background-color:rgba(0,142,207,.15)}mat-list-item .mat-icon{line-height:1!important;margin-left:8px}"]
                },] },
    ];
    /** @nocollapse */
    FilterEntryComponent.ctorParameters = function () { return []; };
    FilterEntryComponent.propDecorators = {
        filterTitle: [{ type: Input }],
        isSelected: [{ type: Input }],
        isActive: [{ type: Input }],
        select: [{ type: Output }],
        deactivate: [{ type: Output }]
    };
    return FilterEntryComponent;
}());
export { FilterEntryComponent };
if (false) {
    /** @type {?} */
    FilterEntryComponent.prototype.filterTitle;
    /** @type {?} */
    FilterEntryComponent.prototype.isSelected;
    /** @type {?} */
    FilterEntryComponent.prototype.isActive;
    /** @type {?} */
    FilterEntryComponent.prototype.select;
    /** @type {?} */
    FilterEntryComponent.prototype.deactivate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWVudHJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvZmlsdGVyLXBpY2tlci9maWx0ZXItZW50cnkvZmlsdGVyLWVudHJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFzQzdFO3NCQUxzQyxJQUFJLFlBQVksRUFBVTswQkFHdEIsSUFBSSxZQUFZLEVBQVU7S0FHbkU7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7S0FDQzs7OztJQUVELGdEQUFpQjs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsK0NBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0tBQzFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSwwY0FZWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxrU0FFaUwsQ0FBQztpQkFDNUw7Ozs7OzhCQUdFLEtBQUs7NkJBR0wsS0FBSzsyQkFHTCxLQUFLO3lCQUdMLE1BQU07NkJBR04sTUFBTTs7K0JBdkNUOztTQXlCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWZpbHRlci1lbnRyeScsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxtYXQtbGlzdC1pdGVtIChjbGljayk9XCJzaG93RmlsdGVyRGV0YWlscygpXCIgW25nQ2xhc3NdPVwieydhY3RpdmUnOiBpc1NlbGVjdGVkfVwiPlxuICA8c3BhbiBtYXRMaW5lPnt7IGZpbHRlclRpdGxlIH19IDwvc3Bhbj5cbiAgPG1hdC1pY29uICpuZ0lmPVwiaXNBY3RpdmVcIiBmb250SWNvbj1cIkJvc2NoLUljLWNoZWNrbWFya1wiPjwvbWF0LWljb24+XG4gIDxtYXQtaWNvbiAqbmdJZj1cImlzQWN0aXZlXCIgZm9udEljb249XCJCb3NjaC1JYy1kZWxldGVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImRlYWN0aXZhdGVGaWx0ZXIoKVwiPjwvbWF0LWljb24+XG48L21hdC1saXN0LWl0ZW0+XG5cblxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovOmhvc3R7ZmxleDoxfW1hdC1saXN0LWl0ZW17Y3Vyc29yOnBvaW50ZXJ9bWF0LWxpc3QtaXRlbS5hY3RpdmUsbWF0LWxpc3QtaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwxNDIsMjA3LC4xNSl9bWF0LWxpc3QtaXRlbSAubWF0LWljb257bGluZS1oZWlnaHQ6MSFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6OHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckVudHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZmlsdGVyVGl0bGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaXNTZWxlY3RlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaXNBY3RpdmU6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBkZWFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzaG93RmlsdGVyRGV0YWlscygpIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuZmlsdGVyVGl0bGUpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZUZpbHRlcigpIHtcbiAgICB0aGlzLmRlYWN0aXZhdGUuZW1pdCgodGhpcy5maWx0ZXJUaXRsZSkpO1xuICB9XG5cbn1cbiJdfQ==