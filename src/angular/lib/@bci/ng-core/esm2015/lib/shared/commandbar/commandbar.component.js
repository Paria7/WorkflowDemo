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
export class CommandbarComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
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
    ngOnInit() {
        merge(this.submitSearch, this.searchForm.controls["search"].valueChanges
            .pipe(takeUntil(this.componentDestroyed$), debounceTime(300))).pipe(distinctUntilChanged()).subscribe(searchString => this.search.emit(searchString));
    }
    /**
     * @return {?}
     */
    searchSubmit() {
        this.submitSearch.next(this.searchForm.controls["search"].value);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }
    /**
     * @return {?}
     */
    createSearchForm() {
        this.searchForm = this.fb.group({
            search: ''
        });
    }
}
CommandbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-commandbar',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<mat-toolbar>
  <mat-toolbar-row>
    <div class="group">
      <!-- Itemcount -->
      <span class="entry-count" [class.active]="selectedItemCount" *ngIf="selectedItemCount || itemCount > -1">
        <ng-container *ngIf="selectedItemCount">{{selectedItemCount}}</ng-container>
        <ng-container *ngIf="selectedItemCount && itemCount > -1"> of </ng-container>
        <ng-container *ngIf="itemCount > -1">{{itemCount}}</ng-container>
        <ng-container [ngPlural]="(itemCount > -1 ? itemCount : selectedItemCount)">
          <ng-template ngPluralCase="one"> entry</ng-template>
          <ng-template ngPluralCase="other"> entries</ng-template>
        </ng-container>
      </span>

      <!-- Searchbar -->
      <div class="commandbar-search-field" *ngIf="showSearch">
        <form [formGroup]="searchForm">
          <mat-form-field floatLabel="never">
            <input matInput formControlName="search" placeholder="Search" (keyup.enter)="searchSubmit()">
            <button mat-icon-button type="button" matSuffix (click)="searchSubmit()">
              <mat-icon class="toolbar-input-icon" fontIcon="Bosch-Ic-search"></mat-icon>
            </button>
          </mat-form-field>
        </form>
      </div>
    </div>

    <!-- Inline Filters -->
    <div class="group">
      <ng-content select="bci-commandbar-inlinefilters"></ng-content>
    </div>

    <!-- Quickfilters -->
    <div class="group">
      <ng-content select="bci-commandbar-quickfilters"></ng-content>
    </div>

    <!-- Filter -->
    <div class="group">
      <bci-commandbar-button [render]="true"
                             *ngIf="showFilter"
                             icon="Bosch-Ic-filter"
                             [class.commandbar-button-active]="filterCount"
                             aria-label="filter"
                             (click)="clickFilter.emit()">
        Filter
        <ng-container *ngIf="filterCount"> ({{filterCount}})</ng-container>
      </bci-commandbar-button>
    </div>

    <!-- Sort -->
    <div class="group">
      <bci-commandbar-button [render]="true"
                             *ngIf="showSort"
                             icon="{{sortIcon}}"
                             aria-label="sort"
                             (click)="clickSort.emit()">
        Sort
      </bci-commandbar-button>
    </div>

    <!-- Spacer -->
    <div class="fill-space"></div>

    <!-- Actions -->
    <div class="group">
      <ng-content select="bci-commandbar-actions"></ng-content>
    </div>
  </mat-toolbar-row>
</mat-toolbar>
<ng-content select="bci-commandbar-active-filters"></ng-content>
`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 *//*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */:host.active mat-toolbar{background:rgba(0,142,207,.15)}.fill-space{flex:1 1 auto}.group{display:inline-flex;vertical-align:middle}.group+.group{margin-left:10px}:host ::ng-deep .commandbar-item{display:inline-flex;vertical-align:middle}.entry-count.active,.entry-count.active.mat-icon-button.mat-icon-button,:host ::ng-deep .commandbar-button-active,:host ::ng-deep .commandbar-button-active.mat-icon-button.mat-icon-button{color:#008ecf}.mat-toolbar{font-size:14px}.mat-toolbar .entry-count{margin-right:32px;padding:4px 0}.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-label,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-label .mat-empty,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-label.mat-empty{color:#000}.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-prefix,.mat-toolbar .commandbar-search-field ::ng-deep mat-form-field.mat-form-field .mat-form-field-suffix{background:#fff}.mat-toolbar .commandbar-search-field ::ng-deep .toolbar-input-field{border:none;outline:0;background:0 0;margin-bottom:0}.mat-toolbar .commandbar-search-field ::ng-deep .mat-input-element{background-color:#fff;background-image:none}.mat-toolbar .commandbar-search-field ::ng-deep .toolbar-input-container{background-color:#fff;padding:4px 12px 0;border-bottom:1px solid #bfc0c2}.mat-toolbar .commandbar-search-field ::ng-deep .toolbar-input-container button{vertical-align:middle}`]
            },] },
];
/** @nocollapse */
CommandbarComponent.ctorParameters = () => [
    { type: FormBuilder }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbW1hbmRiYXIvY29tbWFuZGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXNGL0UsTUFBTTs7OztJQThESixZQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtzQkE1RFksS0FBSzs7OztzQkFlakMsSUFBSSxZQUFZLEVBQVU7Ozs7NEJBSzlCLElBQUksT0FBTyxFQUFVOzs7OzJCQUtaLElBQUksWUFBWSxFQUFFOzs7O3lCQUtwQixJQUFJLFlBQVksRUFBRTs7OzswQkFLbEIsSUFBSTs7OzswQkFLSixLQUFLOzs7O3dCQUtQLEtBQUs7Ozs7MkJBS0YsQ0FBQzs7Ozt3QkFLSiw4QkFBOEI7bUNBR3BCLElBQUksT0FBTyxFQUFFO1FBR3pDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRUQsUUFBUTtRQUNOLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsV0FBUSxZQUFZO2FBQ3pDLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQ25DLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEIsQ0FDSixDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztLQUMxRjs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsV0FBUSxLQUFLLENBQUMsQ0FBQztLQUMvRDs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3JDOzs7O0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDOUIsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFDLENBQUM7Ozs7WUE1S04sU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkVYO2dCQUNDLE1BQU0sRUFBRSxDQUFDOzs7O3NuREFJMm1ELENBQUM7YUFDdG5EOzs7O1lBdEZRLFdBQVc7OztxQkF5RmpCLFdBQVcsU0FBQyxjQUFjLGNBQUcsS0FBSzt3QkFLbEMsS0FBSztnQ0FLTCxLQUFLO3FCQUtMLE1BQU07MEJBVU4sTUFBTTt3QkFLTixNQUFNO3lCQUtOLEtBQUs7eUJBS0wsS0FBSzt1QkFLTCxLQUFLOzBCQUtMLEtBQUs7dUJBS0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1jb21tYW5kYmFyJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPG1hdC10b29sYmFyPlxuICA8bWF0LXRvb2xiYXItcm93PlxuICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgPCEtLSBJdGVtY291bnQgLS0+XG4gICAgICA8c3BhbiBjbGFzcz1cImVudHJ5LWNvdW50XCIgW2NsYXNzLmFjdGl2ZV09XCJzZWxlY3RlZEl0ZW1Db3VudFwiICpuZ0lmPVwic2VsZWN0ZWRJdGVtQ291bnQgfHwgaXRlbUNvdW50ID4gLTFcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkSXRlbUNvdW50XCI+e3tzZWxlY3RlZEl0ZW1Db3VudH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3RlZEl0ZW1Db3VudCAmJiBpdGVtQ291bnQgPiAtMVwiPiBvZiA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW1Db3VudCA+IC0xXCI+e3tpdGVtQ291bnR9fTwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1BsdXJhbF09XCIoaXRlbUNvdW50ID4gLTEgPyBpdGVtQ291bnQgOiBzZWxlY3RlZEl0ZW1Db3VudClcIj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgbmdQbHVyYWxDYXNlPVwib25lXCI+IGVudHJ5PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgbmdQbHVyYWxDYXNlPVwib3RoZXJcIj4gZW50cmllczwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9zcGFuPlxuXG4gICAgICA8IS0tIFNlYXJjaGJhciAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tYW5kYmFyLXNlYXJjaC1maWVsZFwiICpuZ0lmPVwic2hvd1NlYXJjaFwiPlxuICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNlYXJjaEZvcm1cIj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZmxvYXRMYWJlbD1cIm5ldmVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAoa2V5dXAuZW50ZXIpPVwic2VhcmNoU3VibWl0KClcIj5cbiAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIHR5cGU9XCJidXR0b25cIiBtYXRTdWZmaXggKGNsaWNrKT1cInNlYXJjaFN1Ym1pdCgpXCI+XG4gICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInRvb2xiYXItaW5wdXQtaWNvblwiIGZvbnRJY29uPVwiQm9zY2gtSWMtc2VhcmNoXCI+PC9tYXQtaWNvbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBJbmxpbmUgRmlsdGVycyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJjaS1jb21tYW5kYmFyLWlubGluZWZpbHRlcnNcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIFF1aWNrZmlsdGVycyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJjaS1jb21tYW5kYmFyLXF1aWNrZmlsdGVyc1wiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gRmlsdGVyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgPGJjaS1jb21tYW5kYmFyLWJ1dHRvbiBbcmVuZGVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInNob3dGaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiQm9zY2gtSWMtZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNvbW1hbmRiYXItYnV0dG9uLWFjdGl2ZV09XCJmaWx0ZXJDb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tGaWx0ZXIuZW1pdCgpXCI+XG4gICAgICAgIEZpbHRlclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmlsdGVyQ291bnRcIj4gKHt7ZmlsdGVyQ291bnR9fSk8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvYmNpLWNvbW1hbmRiYXItYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBTb3J0IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgPGJjaS1jb21tYW5kYmFyLWJ1dHRvbiBbcmVuZGVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInNob3dTb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInt7c29ydEljb259fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrU29ydC5lbWl0KClcIj5cbiAgICAgICAgU29ydFxuICAgICAgPC9iY2ktY29tbWFuZGJhci1idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIFNwYWNlciAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiZmlsbC1zcGFjZVwiPjwvZGl2PlxuXG4gICAgPCEtLSBBY3Rpb25zIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYmNpLWNvbW1hbmRiYXItYWN0aW9uc1wiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtdG9vbGJhci1yb3c+XG48L21hdC10b29sYmFyPlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiYmNpLWNvbW1hbmRiYXItYWN0aXZlLWZpbHRlcnNcIj48L25nLWNvbnRlbnQ+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8vKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLzpob3N0LmFjdGl2ZSBtYXQtdG9vbGJhcntiYWNrZ3JvdW5kOnJnYmEoMCwxNDIsMjA3LC4xNSl9LmZpbGwtc3BhY2V7ZmxleDoxIDEgYXV0b30uZ3JvdXB7ZGlzcGxheTppbmxpbmUtZmxleDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lmdyb3VwKy5ncm91cHttYXJnaW4tbGVmdDoxMHB4fTpob3N0IDo6bmctZGVlcCAuY29tbWFuZGJhci1pdGVte2Rpc3BsYXk6aW5saW5lLWZsZXg7dmVydGljYWwtYWxpZ246bWlkZGxlfS5lbnRyeS1jb3VudC5hY3RpdmUsLmVudHJ5LWNvdW50LmFjdGl2ZS5tYXQtaWNvbi1idXR0b24ubWF0LWljb24tYnV0dG9uLDpob3N0IDo6bmctZGVlcCAuY29tbWFuZGJhci1idXR0b24tYWN0aXZlLDpob3N0IDo6bmctZGVlcCAuY29tbWFuZGJhci1idXR0b24tYWN0aXZlLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b257Y29sb3I6IzAwOGVjZn0ubWF0LXRvb2xiYXJ7Zm9udC1zaXplOjE0cHh9Lm1hdC10b29sYmFyIC5lbnRyeS1jb3VudHttYXJnaW4tcmlnaHQ6MzJweDtwYWRkaW5nOjRweCAwfS5tYXQtdG9vbGJhciAuY29tbWFuZGJhci1zZWFyY2gtZmllbGQgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLmNvbW1hbmRiYXItc2VhcmNoLWZpZWxkIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtbGFiZWwgLm1hdC1lbXB0eSwubWF0LXRvb2xiYXIgLmNvbW1hbmRiYXItc2VhcmNoLWZpZWxkIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWVtcHR5e2NvbG9yOiMwMDB9Lm1hdC10b29sYmFyIC5jb21tYW5kYmFyLXNlYXJjaC1maWVsZCA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLC5tYXQtdG9vbGJhciAuY29tbWFuZGJhci1zZWFyY2gtZmllbGQgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgsLm1hdC10b29sYmFyIC5jb21tYW5kYmFyLXNlYXJjaC1maWVsZCA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC10b29sYmFyIC5jb21tYW5kYmFyLXNlYXJjaC1maWVsZCA6Om5nLWRlZXAgLnRvb2xiYXItaW5wdXQtZmllbGR7Ym9yZGVyOm5vbmU7b3V0bGluZTowO2JhY2tncm91bmQ6MCAwO21hcmdpbi1ib3R0b206MH0ubWF0LXRvb2xiYXIgLmNvbW1hbmRiYXItc2VhcmNoLWZpZWxkIDo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JhY2tncm91bmQtaW1hZ2U6bm9uZX0ubWF0LXRvb2xiYXIgLmNvbW1hbmRiYXItc2VhcmNoLWZpZWxkIDo6bmctZGVlcCAudG9vbGJhci1pbnB1dC1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6NHB4IDEycHggMDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYmZjMGMyfS5tYXQtdG9vbGJhciAuY29tbWFuZGJhci1zZWFyY2gtZmllbGQgOjpuZy1kZWVwIC50b29sYmFyLWlucHV0LWNvbnRhaW5lciBidXR0b257dmVydGljYWwtYWxpZ246bWlkZGxlfWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1hbmRiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKSBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcblxuICAvKipcbiAgICogTnVtYmVyIG9mIG1hdGNoZWQgLyBzaG93biBpdGVtc1xuICAgKi9cbiAgQElucHV0KCkgaXRlbUNvdW50OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBzZWxlY3RlZCBpdGVtc1xuICAgKi9cbiAgQElucHV0KCkgc2VsZWN0ZWRJdGVtQ291bnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGV2ZW50IGVtaXR0ZXIgd2hpY2ggcHJvcGFnYXRlcyB0aGUgdGV4dCB2YWx1ZSBvZiB0aGUgc2VhcmNoLWJveCB0byBzdWJvcmRpbmF0ZWQgY29tcG9uZW50c1xuICAgKi9cbiAgQE91dHB1dCgpIHNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBTdWJqZWN0IGJlaW5nIHVzZWQgdG8gc2VhcmNoIGltbWVkaWF0ZWx5XG4gICAqL1xuICBzdWJtaXRTZWFyY2ggPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIFRoZSBldmVudCBlbWl0dGVyIHdoaWNoIHByb3BhZ2F0ZXMgdGhlIGNsaWNrLWV2ZW50IG9uIHRoZSBmaWx0ZXItaWNvbiB0byBzdXBlcm9yZGluYXRlZCBjb21wb25lbnRzXG4gICAqL1xuICBAT3V0cHV0KCkgY2xpY2tGaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoZSBldmVudCBlbWl0dGVyIHdoaWNoIHByb3BhZ2F0ZXMgdGhlIGNsaWNrLWV2ZW50IG9uIHRoZSBzb3J0LWljb24gdG8gc3VwZXJvcmRpbmF0ZWQgY29tcG9uZW50c1xuICAgKi9cbiAgQE91dHB1dCgpIGNsaWNrU29ydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBzZWFyY2gtYm94IGlzIGJlaW5nIGRpc3BsYXllZFxuICAgKi9cbiAgQElucHV0KCkgc2hvd1NlYXJjaCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgZmlsdGVyLWljb24gaXMgYmVpbmcgZGlzcGxheWVkXG4gICAqL1xuICBASW5wdXQoKSBzaG93RmlsdGVyID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgc29ydC1pY29uIGlzIGJlaW5nIGRpc3BsYXllZFxuICAgKi9cbiAgQElucHV0KCkgc2hvd1NvcnQgPSBmYWxzZTtcblxuICAvKipcbiAgICogSW50ZWdlciB2YWx1ZSB0byBkaXNwbGF5IHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgRmlsdGVyc1xuICAgKi9cbiAgQElucHV0KCkgZmlsdGVyQ291bnQgPSAwO1xuXG4gIC8qKlxuICAgKiBJbnB1dCBwYXJhbWV0ZXIgdG8gbWFrZSB0aGUgZmlsdGVyLWljb24gY29uZmlndXJhYmxlIGZyb20gc3VwZXJvcmRpbmF0ZWQgY29tcG9uZW50c1xuICAgKi9cbiAgQElucHV0KCkgc29ydEljb24gPSAnQm9zY2gtSWMtc29ydC1hbHBoYWJldGljYWxseSc7XG5cbiAgc2VhcmNoRm9ybTogRm9ybUdyb3VwO1xuICBwcml2YXRlIGNvbXBvbmVudERlc3Ryb3llZCQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5jcmVhdGVTZWFyY2hGb3JtKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBtZXJnZSh0aGlzLnN1Ym1pdFNlYXJjaCxcbiAgICAgIHRoaXMuc2VhcmNoRm9ybS5jb250cm9scy5zZWFyY2gudmFsdWVDaGFuZ2VzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpLFxuICAgICAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgICApXG4gICAgKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZShzZWFyY2hTdHJpbmcgPT4gdGhpcy5zZWFyY2guZW1pdChzZWFyY2hTdHJpbmcpKTtcbiAgfVxuXG4gIHNlYXJjaFN1Ym1pdCgpIHtcbiAgICB0aGlzLnN1Ym1pdFNlYXJjaC5uZXh0KHRoaXMuc2VhcmNoRm9ybS5jb250cm9scy5zZWFyY2gudmFsdWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLm5leHQoKTtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlU2VhcmNoRm9ybSgpIHtcbiAgICB0aGlzLnNlYXJjaEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHNlYXJjaDogJydcbiAgICB9KTtcbiAgfVxufVxuIl19