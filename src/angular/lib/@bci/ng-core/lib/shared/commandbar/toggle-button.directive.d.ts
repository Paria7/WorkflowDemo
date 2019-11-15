import { EventEmitter } from '@angular/core';
export declare class ToggleButtonDirective {
    active: boolean;
    toggle: EventEmitter<{}>;
    onClick(): void;
}
