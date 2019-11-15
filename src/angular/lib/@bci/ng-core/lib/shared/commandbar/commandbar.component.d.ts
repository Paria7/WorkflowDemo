import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class CommandbarComponent implements OnInit, OnDestroy {
    private fb;
    active: boolean;
    /**
     * Number of matched / shown items
     */
    itemCount: number;
    /**
     * Number of selected items
     */
    selectedItemCount: number;
    /**
     * The event emitter which propagates the text value of the search-box to subordinated components
     */
    search: EventEmitter<string>;
    /**
     * Subject being used to search immediately
     */
    submitSearch: Subject<string>;
    /**
     * The event emitter which propagates the click-event on the filter-icon to superordinated components
     */
    clickFilter: EventEmitter<{}>;
    /**
     * The event emitter which propagates the click-event on the sort-icon to superordinated components
     */
    clickSort: EventEmitter<{}>;
    /**
     * Flag to indicate whether the search-box is being displayed
     */
    showSearch: boolean;
    /**
     * Flag to indicate whether the filter-icon is being displayed
     */
    showFilter: boolean;
    /**
     * Flag to indicate whether the sort-icon is being displayed
     */
    showSort: boolean;
    /**
     * Integer value to display the number of selected Filters
     */
    filterCount: number;
    /**
     * Input parameter to make the filter-icon configurable from superordinated components
     */
    sortIcon: string;
    searchForm: FormGroup;
    private componentDestroyed$;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    searchSubmit(): void;
    ngOnDestroy(): void;
    private createSearchForm();
}
