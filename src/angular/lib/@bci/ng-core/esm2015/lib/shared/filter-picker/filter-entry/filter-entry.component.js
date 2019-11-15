/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class FilterEntryComponent {
    constructor() {
        this.select = new EventEmitter();
        this.deactivate = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    showFilterDetails() {
        this.select.emit(this.filterTitle);
    }
    /**
     * @return {?}
     */
    deactivateFilter() {
        this.deactivate.emit((this.filterTitle));
    }
}
FilterEntryComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-filter-entry',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<mat-list-item (click)="showFilterDetails()" [ngClass]="{'active': isSelected}">
  <span matLine>{{ filterTitle }} </span>
  <mat-icon *ngIf="isActive" fontIcon="Bosch-Ic-checkmark"></mat-icon>
  <mat-icon *ngIf="isActive" fontIcon="Bosch-Ic-delete"
            (click)="deactivateFilter()"></mat-icon>
</mat-list-item>


`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */:host{flex:1}mat-list-item{cursor:pointer}mat-list-item.active,mat-list-item:hover{background-color:rgba(0,142,207,.15)}mat-list-item .mat-icon{line-height:1!important;margin-left:8px}`]
            },] },
];
/** @nocollapse */
FilterEntryComponent.ctorParameters = () => [];
FilterEntryComponent.propDecorators = {
    filterTitle: [{ type: Input }],
    isSelected: [{ type: Input }],
    isActive: [{ type: Input }],
    select: [{ type: Output }],
    deactivate: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWVudHJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvZmlsdGVyLXBpY2tlci9maWx0ZXItZW50cnkvZmlsdGVyLWVudHJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXFCL0UsTUFBTTtJQWlCSjtzQkFMc0MsSUFBSSxZQUFZLEVBQVU7MEJBR3RCLElBQUksWUFBWSxFQUFVO0tBR25FOzs7O0lBRUQsUUFBUTtLQUNQOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztLQUMxQzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztDQVlYO2dCQUNDLE1BQU0sRUFBRSxDQUFDOzs0TEFFaUwsQ0FBQzthQUM1TDs7Ozs7MEJBR0UsS0FBSzt5QkFHTCxLQUFLO3VCQUdMLEtBQUs7cUJBR0wsTUFBTTt5QkFHTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1maWx0ZXItZW50cnknLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bWF0LWxpc3QtaXRlbSAoY2xpY2spPVwic2hvd0ZpbHRlckRldGFpbHMoKVwiIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogaXNTZWxlY3RlZH1cIj5cbiAgPHNwYW4gbWF0TGluZT57eyBmaWx0ZXJUaXRsZSB9fSA8L3NwYW4+XG4gIDxtYXQtaWNvbiAqbmdJZj1cImlzQWN0aXZlXCIgZm9udEljb249XCJCb3NjaC1JYy1jaGVja21hcmtcIj48L21hdC1pY29uPlxuICA8bWF0LWljb24gKm5nSWY9XCJpc0FjdGl2ZVwiIGZvbnRJY29uPVwiQm9zY2gtSWMtZGVsZXRlXCJcbiAgICAgICAgICAgIChjbGljayk9XCJkZWFjdGl2YXRlRmlsdGVyKClcIj48L21hdC1pY29uPlxuPC9tYXQtbGlzdC1pdGVtPlxuXG5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLzpob3N0e2ZsZXg6MX1tYXQtbGlzdC1pdGVte2N1cnNvcjpwb2ludGVyfW1hdC1saXN0LWl0ZW0uYWN0aXZlLG1hdC1saXN0LWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMTQyLDIwNywuMTUpfW1hdC1saXN0LWl0ZW0gLm1hdC1pY29ue2xpbmUtaGVpZ2h0OjEhaW1wb3J0YW50O21hcmdpbi1sZWZ0OjhweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJFbnRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGZpbHRlclRpdGxlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgcHVibGljIGlzQWN0aXZlOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2VsZWN0OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2hvd0ZpbHRlckRldGFpbHMoKSB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLmZpbHRlclRpdGxlKTtcbiAgfVxuXG4gIGRlYWN0aXZhdGVGaWx0ZXIoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQoKHRoaXMuZmlsdGVyVGl0bGUpKTtcbiAgfVxuXG59XG4iXX0=