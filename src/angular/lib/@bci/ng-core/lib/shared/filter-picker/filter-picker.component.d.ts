import { EventEmitter, OnInit } from '@angular/core';
export declare class FilterPickerComponent implements OnInit {
    filter: EventEmitter<string>;
    close: EventEmitter<string>;
    constructor();
    ngOnInit(): void;
    applyFilters(): void;
    closeModal(): void;
}
