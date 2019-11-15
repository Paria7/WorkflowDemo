import { EventEmitter, OnInit } from '@angular/core';
export declare class FilterEntryComponent implements OnInit {
    filterTitle: string;
    isSelected: boolean;
    isActive: boolean;
    select: EventEmitter<string>;
    deactivate: EventEmitter<string>;
    constructor();
    ngOnInit(): void;
    showFilterDetails(): void;
    deactivateFilter(): void;
}
