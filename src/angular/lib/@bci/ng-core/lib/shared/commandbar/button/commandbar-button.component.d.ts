import { EventEmitter } from '@angular/core';
import { CommandbarItemComponent } from '../item/commandbar-item.component';
export declare class CommandbarButtonComponent extends CommandbarItemComponent {
    /**
     * The buttons font-icon.
     */
    icon: string;
    /**
     * Whether the button shall be disabled.
     */
    disabled: boolean;
    /**
     * The button's click event emitter.c
     */
    click: EventEmitter<any>;
    _ngClass: string | string[] | Set<string> | {
        [klass: string]: any;
    };
    _ngStyle: {
        [key: string]: string;
    };
    ngClass: string | string[] | Set<string> | {
        [klass: string]: any;
    };
    ngStyle: {
        [key: string]: string;
    };
    clickEvent(event: Event): void;
}
