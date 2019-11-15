/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
var CommandbarComponent = /** @class */ (function () {
    function CommandbarComponent(fb) {
        this.fb = fb;
        this.active = false;
        /**
         * The event emitter which propagates the text value of the search-box to subordinated components
         */
        this.search = new EventEmitter();
        /**
         * Subject being used to search immediately
         */
        this.submitSearch = new Subject();
        /**
         * The event emitter which propagates the click-event on the filter-icon to superordinated components
         */
        this.clickFilter = new EventEmitter();
        /**
         * The event emitter which propagates the click-event on the sort-icon to superordinated components
         */
        this.clickSort = new EventEmitter();
        /**
         * Flag to indicate whether the search-box is being displayed
         */
        this.showSearch = true;
        /**
         * Flag to indicate whether the filter-icon is being displayed
         */
        this.showFilter = false;
        /**
         * Flag to indicate whether the sort-icon is being displayed
         */
        this.showSort = false;
        /**
         * Integer value to display the number of selected Filters
         */
        this.filterCount = 0;
        /**
         * Input parameter to make the filter-icon configurable from superordinated components
         */
        this.sortIcon = 'Bosch-Ic-sort-alphabetically';
        this.componentDestroyed$ = new Subject();
        this.createSearchForm();
    }
    /**
     * @return {?}
     */
    CommandbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        merge(this.submitSearch, this.searchForm.controls["search"].valueChanges
            .pipe(takeUntil(this.componentDestroyed$), debounceTime(300))).pipe(distinctUntilChanged()).subscribe(function (searchString) { return _this.search.emit(searchString); });
    };
    /**
     * @return {?}
     */
    CommandbarComponent.prototype.searchSubmit = /**
     * @return {?}
     */
    function () {
        this.submitSearch.next(this.searchForm.controls["search"].value);
    };
    /**
     * @return {?}
     */
    CommandbarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    };
    /**
     * @return {?}
     */
    CommandbarComponent.prototype.createSearchForm = /**
     * @return {?}
     */
    function () {
        this.searchForm = this.fb.group({
            search: ''
        });
    };
    CommandbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-commandbar',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-toolbar>\n  <mat-toolbar-row>\n    <div class=\"group\">\n      <!-- Itemcount -->\n      <span class=\"entry-count\" [class.active]=\"selectedItemCount\" *ngIf=\"selectedItemCount || itemCount > -1\">\n        <ng-container *ngIf=\"selectedItemCount\">{{selectedItemCount}}</ng-container>\n        <ng-container *ngIf=\"selectedItemCount && itemCount > -1\"> of </ng-container>\n        <ng-container *ngIf=\"itemCount > -1\">{{itemCount}}</ng-container>\n        <ng-container [ngPlural]=\"(itemCount > -1 ? itemCount : selectedItemCount)\">\n          <ng-template ngPluralCase=\"one\"> entry</ng-template>\n          <ng-template ngPluralCase=\"other\"> entries</ng-template>\n        </ng-container>\n      </span>\n\n      <!-- Searchbar -->\n      <div class=\"commandbar-search-field\" *ngIf=\"showSearch\">\n        <form [formGroup]=\"searchForm\">\n          <mat-form-field floatLabel=\"never\">\n            <input matInput formControlName=\"search\" placeholder=\"Search\" (keyup.enter)=\"searchSubmit()\">\n            <button mat-icon-button type=\"button\" matSuffix (click)=\"searchSubmit()\">\n              <mat-icon class=\"toolbar-input-icon\" fontIcon=\"Bosch-Ic-search\"></mat-icon>\n            </button>\n          </mat-form-field>\n        </form>\n      </div>\n    </div>\n\n    <!-- Inline Filters -->\n    <div class=\"group\">\n      <ng-content select=\"bci-commandbar-inlinefilters\"></ng-content>\n    </div>\n\n    <!-- Quickfilters -->\n    <div class=\"group\">\n      <ng-content select=\"bci-commandbar-quickfilters\"></ng-content>\n    </div>\n\n    <!-- Filter -->\n    <div class=\"group\">\n      <bci-commandbar-button [render]=\"true\"\n                             *ngIf=\"showFilter\"\n                             icon=\"Bosch-Ic-filter\"\n                             [class.commandbar-button-active]=\"filterCount\"\n                             aria-label=\"filter\"\n                             (click)=\"clickFilter.emit()\">\n        Filter\n        <ng-container *ngIf=\"filterCount\"> ({{filterCount}})</ng-container>\n      </bci-commandbar-button>\n    </div>\n\n    <!-- Sort -->\n    <div class=\"group\">\n      <bci-commandbar-button [render]=\"true\"\n                             *ngIf=\"showSort\"\n                             icon=\"{{sortIcon}}\"\n                             aria-label=\"sort\"\n                             (click)=\"clickSort.emit()\">\n        Sort\n      </bci-commandbar-button>\n    </div>\n\n    <!-- Spacer -->\n    <div class=\"fill-space\"></div>\n\n    <!-- Actions -->\n    <div class=\"group\">\n      <ng-content select=\"bci-commandbar-actions\"></ng-content>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n<ng-content select=\"bci-commandbar-active-filters\"></ng-content>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host.active mat-toolbar{background:rgba(0,142,207,.15)}.fill-space{flex:1 1 auto}.group{display:inline-flex;vertical-align:middle}.group+.group{margin-left:10px}:host ::ng-deep .commandbar-item{display:inline-flex;vertical-align:middle}.entry-count.active,.entry-count.active.mat-icon-button.mat-icon-button,:host ::ng-deep .commandbar-button-active,:host ::ng-deep .commandbar-button-active.mat-icon-button.mat-icon-button{color:#008ecf}.mat-toolbar{font-size:14px}.mat-toolbar .entry-count{margin-right:32px;padding:4px 0}.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-label,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-label .mat-empty,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-label.mat-empty{color:#000}.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-prefix,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-suffix{background:#fff}.mat-toolbar .commandbar-search-field ::ng-deep .toolbar-input-field{border:none;outline:0;background:0 0;margin-bottom:0}.mat-toolbar .commandbar-search-field ::ng-deep .mat-input-element{background-color:#fff;background-image:none}.mat-toolbar .commandbar-search-field ::ng-deep .toolbar-input-container{background-color:#fff;padding:4px 12px 0;border-bottom:1px solid #bfc0c2}.mat-toolbar .commandbar-search-field ::ng-deep .toolbar-input-container button{vertical-align:middle}"]
                },] },
    ];
    /** @nocollapse */
    CommandbarComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    CommandbarComponent.propDecorators = {
        active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
        itemCount: [{ type: Input }],
        selectedItemCount: [{ type: Input }],
        search: [{ type: Output }],
        clickFilter: [{ type: Output }],
        clickSort: [{ type: Output }],
        showSearch: [{ type: Input }],
        showFilter: [{ type: Input }],
        showSort: [{ type: Input }],
        filterCount: [{ type: Input }],
        sortIcon: [{ type: Input }]
    };
    return CommandbarComponent;
}());
export { CommandbarComponent };
if (false) {
    /** @type {?} */
    CommandbarComponent.prototype.active;
    /**
     * Number of matched / shown items
     * @type {?}
     */
    CommandbarComponent.prototype.itemCount;
    /**
     * Number of selected items
     * @type {?}
     */
    CommandbarComponent.prototype.selectedItemCount;
    /**
     * The event emitter which propagates the text value of the search-box to subordinated components
     * @type {?}
     */
    CommandbarComponent.prototype.search;
    /**
     * Subject being used to search immediately
     * @type {?}
     */
    CommandbarComponent.prototype.submitSearch;
    /**
     * The event emitter which propagates the click-event on the filter-icon to superordinated components
     * @type {?}
     */
    CommandbarComponent.prototype.clickFilter;
    /**
     * The event emitter which propagates the click-event on the sort-icon to superordinated components
     * @type {?}
     */
    CommandbarComponent.prototype.clickSort;
    /**
     * Flag to indicate whether the search-box is being displayed
     * @type {?}
     */
    CommandbarComponent.prototype.showSearch;
    /**
     * Flag to indicate whether the filter-icon is being displayed
     * @type {?}
     */
    CommandbarComponent.prototype.showFilter;
    /**
     * Flag to indicate whether the sort-icon is being displayed
     * @type {?}
     */
    CommandbarComponent.prototype.showSort;
    /**
     * Integer value to display the number of selected Filters
     * @type {?}
     */
    CommandbarComponent.prototype.filterCount;
    /**
     * Input parameter to make the filter-icon configurable from superordinated components
     * @type {?}
     */
    CommandbarComponent.prototype.sortIcon;
    /** @type {?} */
    CommandbarComponent.prototype.searchForm;
    /** @type {?} */
    CommandbarComponent.prototype.componentDestroyed$;
    /** @type {?} */
    CommandbarComponent.prototype.fb;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbW1hbmRiYXIvY29tbWFuZGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFvSjdFLDZCQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtzQkE1RFksS0FBSzs7OztzQkFlakMsSUFBSSxZQUFZLEVBQVU7Ozs7NEJBSzlCLElBQUksT0FBTyxFQUFVOzs7OzJCQUtaLElBQUksWUFBWSxFQUFFOzs7O3lCQUtwQixJQUFJLFlBQVksRUFBRTs7OzswQkFLbEIsSUFBSTs7OzswQkFLSixLQUFLOzs7O3dCQUtQLEtBQUs7Ozs7MkJBS0YsQ0FBQzs7Ozt3QkFLSiw4QkFBOEI7bUNBR3BCLElBQUksT0FBTyxFQUFFO1FBR3pDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLFdBQVEsWUFBWTthQUN6QyxJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUNuQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCLENBQ0osQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFlBQVksSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7S0FDMUY7Ozs7SUFFRCwwQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsV0FBUSxLQUFLLENBQUMsQ0FBQztLQUMvRDs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDckM7Ozs7SUFFTyw4Q0FBZ0I7Ozs7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM5QixNQUFNLEVBQUUsRUFBRTtTQUNYLENBQUMsQ0FBQzs7O2dCQTVLTixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLHUxRkEyRVg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsbzBEQUkybUQsQ0FBQztpQkFDdG5EOzs7O2dCQXRGUSxXQUFXOzs7eUJBeUZqQixXQUFXLFNBQUMsY0FBYyxjQUFHLEtBQUs7NEJBS2xDLEtBQUs7b0NBS0wsS0FBSzt5QkFLTCxNQUFNOzhCQVVOLE1BQU07NEJBS04sTUFBTTs2QkFLTixLQUFLOzZCQUtMLEtBQUs7MkJBS0wsS0FBSzs4QkFLTCxLQUFLOzJCQUtMLEtBQUs7OzhCQXRKUjs7U0E2RmEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWNvbW1hbmRiYXInLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bWF0LXRvb2xiYXI+XG4gIDxtYXQtdG9vbGJhci1yb3c+XG4gICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICA8IS0tIEl0ZW1jb3VudCAtLT5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZW50cnktY291bnRcIiBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkSXRlbUNvdW50XCIgKm5nSWY9XCJzZWxlY3RlZEl0ZW1Db3VudCB8fCBpdGVtQ291bnQgPiAtMVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRJdGVtQ291bnRcIj57e3NlbGVjdGVkSXRlbUNvdW50fX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkSXRlbUNvdW50ICYmIGl0ZW1Db3VudCA+IC0xXCI+IG9mIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbUNvdW50ID4gLTFcIj57e2l0ZW1Db3VudH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nUGx1cmFsXT1cIihpdGVtQ291bnQgPiAtMSA/IGl0ZW1Db3VudCA6IHNlbGVjdGVkSXRlbUNvdW50KVwiPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ1BsdXJhbENhc2U9XCJvbmVcIj4gZW50cnk8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ1BsdXJhbENhc2U9XCJvdGhlclwiPiBlbnRyaWVzPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3NwYW4+XG5cbiAgICAgIDwhLS0gU2VhcmNoYmFyIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1hbmRiYXItc2VhcmNoLWZpZWxkXCIgKm5nSWY9XCJzaG93U2VhcmNoXCI+XG4gICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2VhcmNoRm9ybVwiPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmbG9hdExhYmVsPVwibmV2ZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIChrZXl1cC5lbnRlcik9XCJzZWFyY2hTdWJtaXQoKVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gdHlwZT1cImJ1dHRvblwiIG1hdFN1ZmZpeCAoY2xpY2spPVwic2VhcmNoU3VibWl0KClcIj5cbiAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwidG9vbGJhci1pbnB1dC1pY29uXCIgZm9udEljb249XCJCb3NjaC1JYy1zZWFyY2hcIj48L21hdC1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIElubGluZSBGaWx0ZXJzIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYmNpLWNvbW1hbmRiYXItaW5saW5lZmlsdGVyc1wiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gUXVpY2tmaWx0ZXJzIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYmNpLWNvbW1hbmRiYXItcXVpY2tmaWx0ZXJzXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBGaWx0ZXIgLS0+XG4gICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICA8YmNpLWNvbW1hbmRiYXItYnV0dG9uIFtyZW5kZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic2hvd0ZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJCb3NjaC1JYy1maWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY29tbWFuZGJhci1idXR0b24tYWN0aXZlXT1cImZpbHRlckNvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbGlja0ZpbHRlci5lbWl0KClcIj5cbiAgICAgICAgRmlsdGVyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWx0ZXJDb3VudFwiPiAoe3tmaWx0ZXJDb3VudH19KTwvbmctY29udGFpbmVyPlxuICAgICAgPC9iY2ktY29tbWFuZGJhci1idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIFNvcnQgLS0+XG4gICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICA8YmNpLWNvbW1hbmRiYXItYnV0dG9uIFtyZW5kZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic2hvd1NvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwie3tzb3J0SWNvbn19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tTb3J0LmVtaXQoKVwiPlxuICAgICAgICBTb3J0XG4gICAgICA8L2JjaS1jb21tYW5kYmFyLWJ1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gU3BhY2VyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJmaWxsLXNwYWNlXCI+PC9kaXY+XG5cbiAgICA8IS0tIEFjdGlvbnMgLS0+XG4gICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJiY2ktY29tbWFuZGJhci1hY3Rpb25zXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L21hdC10b29sYmFyLXJvdz5cbjwvbWF0LXRvb2xiYXI+XG48bmctY29udGVudCBzZWxlY3Q9XCJiY2ktY29tbWFuZGJhci1hY3RpdmUtZmlsdGVyc1wiPjwvbmctY29udGVudD5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovOmhvc3QuYWN0aXZlIG1hdC10b29sYmFye2JhY2tncm91bmQ6cmdiYSgwLDE0MiwyMDcsLjE1KX0uZmlsbC1zcGFjZXtmbGV4OjEgMSBhdXRvfS5ncm91cHtkaXNwbGF5OmlubGluZS1mbGV4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZ3JvdXArLmdyb3Vwe21hcmdpbi1sZWZ0OjEwcHh9Omhvc3QgOjpuZy1kZWVwIC5jb21tYW5kYmFyLWl0ZW17ZGlzcGxheTppbmxpbmUtZmxleDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmVudHJ5LWNvdW50LmFjdGl2ZSwuZW50cnktY291bnQuYWN0aXZlLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b24sOmhvc3QgOjpuZy1kZWVwIC5jb21tYW5kYmFyLWJ1dHRvbi1hY3RpdmUsOmhvc3QgOjpuZy1kZWVwIC5jb21tYW5kYmFyLWJ1dHRvbi1hY3RpdmUubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbntjb2xvcjojMDA4ZWNmfS5tYXQtdG9vbGJhcntmb250LXNpemU6MTRweH0ubWF0LXRvb2xiYXIgLmVudHJ5LWNvdW50e21hcmdpbi1yaWdodDozMnB4O3BhZGRpbmc6NHB4IDB9Lm1hdC10b29sYmFyIC5jb21tYW5kYmFyLXNlYXJjaC1maWVsZCA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtdG9vbGJhciAuY29tbWFuZGJhci1zZWFyY2gtZmllbGQgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCAubWF0LWVtcHR5LC5tYXQtdG9vbGJhciAuY29tbWFuZGJhci1zZWFyY2gtZmllbGQgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtZW1wdHl7Y29sb3I6IzAwMH0ubWF0LXRvb2xiYXIgLmNvbW1hbmRiYXItc2VhcmNoLWZpZWxkIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQsLm1hdC10b29sYmFyIC5jb21tYW5kYmFyLXNlYXJjaC1maWVsZCA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCwubWF0LXRvb2xiYXIgLmNvbW1hbmRiYXItc2VhcmNoLWZpZWxkIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtc3VmZml4e2JhY2tncm91bmQ6I2ZmZn0ubWF0LXRvb2xiYXIgLmNvbW1hbmRiYXItc2VhcmNoLWZpZWxkIDo6bmctZGVlcCAudG9vbGJhci1pbnB1dC1maWVsZHtib3JkZXI6bm9uZTtvdXRsaW5lOjA7YmFja2dyb3VuZDowIDA7bWFyZ2luLWJvdHRvbTowfS5tYXQtdG9vbGJhciAuY29tbWFuZGJhci1zZWFyY2gtZmllbGQgOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7YmFja2dyb3VuZC1pbWFnZTpub25lfS5tYXQtdG9vbGJhciAuY29tbWFuZGJhci1zZWFyY2gtZmllbGQgOjpuZy1kZWVwIC50b29sYmFyLWlucHV0LWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZzo0cHggMTJweCAwO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNiZmMwYzJ9Lm1hdC10b29sYmFyIC5jb21tYW5kYmFyLXNlYXJjaC1maWVsZCA6Om5nLWRlZXAgLnRvb2xiYXItaW5wdXQtY29udGFpbmVyIGJ1dHRvbnt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9YF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tbWFuZGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgbWF0Y2hlZCAvIHNob3duIGl0ZW1zXG4gICAqL1xuICBASW5wdXQoKSBpdGVtQ291bnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHNlbGVjdGVkIGl0ZW1zXG4gICAqL1xuICBASW5wdXQoKSBzZWxlY3RlZEl0ZW1Db3VudDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgZXZlbnQgZW1pdHRlciB3aGljaCBwcm9wYWdhdGVzIHRoZSB0ZXh0IHZhbHVlIG9mIHRoZSBzZWFyY2gtYm94IHRvIHN1Ym9yZGluYXRlZCBjb21wb25lbnRzXG4gICAqL1xuICBAT3V0cHV0KCkgc2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIFN1YmplY3QgYmVpbmcgdXNlZCB0byBzZWFyY2ggaW1tZWRpYXRlbHlcbiAgICovXG4gIHN1Ym1pdFNlYXJjaCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICAvKipcbiAgICogVGhlIGV2ZW50IGVtaXR0ZXIgd2hpY2ggcHJvcGFnYXRlcyB0aGUgY2xpY2stZXZlbnQgb24gdGhlIGZpbHRlci1pY29uIHRvIHN1cGVyb3JkaW5hdGVkIGNvbXBvbmVudHNcbiAgICovXG4gIEBPdXRwdXQoKSBjbGlja0ZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogVGhlIGV2ZW50IGVtaXR0ZXIgd2hpY2ggcHJvcGFnYXRlcyB0aGUgY2xpY2stZXZlbnQgb24gdGhlIHNvcnQtaWNvbiB0byBzdXBlcm9yZGluYXRlZCBjb21wb25lbnRzXG4gICAqL1xuICBAT3V0cHV0KCkgY2xpY2tTb3J0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGbGFnIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIHNlYXJjaC1ib3ggaXMgYmVpbmcgZGlzcGxheWVkXG4gICAqL1xuICBASW5wdXQoKSBzaG93U2VhcmNoID0gdHJ1ZTtcblxuICAvKipcbiAgICogRmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBmaWx0ZXItaWNvbiBpcyBiZWluZyBkaXNwbGF5ZWRcbiAgICovXG4gIEBJbnB1dCgpIHNob3dGaWx0ZXIgPSBmYWxzZTtcblxuICAvKipcbiAgICogRmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBzb3J0LWljb24gaXMgYmVpbmcgZGlzcGxheWVkXG4gICAqL1xuICBASW5wdXQoKSBzaG93U29ydCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJbnRlZ2VyIHZhbHVlIHRvIGRpc3BsYXkgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBGaWx0ZXJzXG4gICAqL1xuICBASW5wdXQoKSBmaWx0ZXJDb3VudCA9IDA7XG5cbiAgLyoqXG4gICAqIElucHV0IHBhcmFtZXRlciB0byBtYWtlIHRoZSBmaWx0ZXItaWNvbiBjb25maWd1cmFibGUgZnJvbSBzdXBlcm9yZGluYXRlZCBjb21wb25lbnRzXG4gICAqL1xuICBASW5wdXQoKSBzb3J0SWNvbiA9ICdCb3NjaC1JYy1zb3J0LWFscGhhYmV0aWNhbGx5JztcblxuICBzZWFyY2hGb3JtOiBGb3JtR3JvdXA7XG4gIHByaXZhdGUgY29tcG9uZW50RGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLmNyZWF0ZVNlYXJjaEZvcm0oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIG1lcmdlKHRoaXMuc3VibWl0U2VhcmNoLFxuICAgICAgdGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzLnNlYXJjaC52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCksXG4gICAgICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgICAgIClcbiAgICApLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKHNlYXJjaFN0cmluZyA9PiB0aGlzLnNlYXJjaC5lbWl0KHNlYXJjaFN0cmluZykpO1xuICB9XG5cbiAgc2VhcmNoU3VibWl0KCkge1xuICAgIHRoaXMuc3VibWl0U2VhcmNoLm5leHQodGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzLnNlYXJjaC52YWx1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQubmV4dCgpO1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVTZWFyY2hGb3JtKCkge1xuICAgIHRoaXMuc2VhcmNoRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgc2VhcmNoOiAnJ1xuICAgIH0pO1xuICB9XG59XG4iXX0=