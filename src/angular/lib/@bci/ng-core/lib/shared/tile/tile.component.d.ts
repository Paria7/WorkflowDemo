import { EventEmitter, OnInit } from '@angular/core';
export declare class BciTileComponent implements OnInit {
    title: string;
    description: string;
    iconName: string;
    detailsButtonLabel: string;
    addTile: boolean;
    actionIconName: string;
    canExecuteAction: boolean;
    action: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    executeAction($event: Event): void;
}
