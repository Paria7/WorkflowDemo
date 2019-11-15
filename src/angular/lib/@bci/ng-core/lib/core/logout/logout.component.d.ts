import { EventEmitter } from '@angular/core';
import { ClosableOverlayComponentModel } from '../layout';
import { LogoutComponentConfig } from './logout.component.model';
/**
 * Simple logout component to appear next to the user nav element. It will be properly aligned to the sidebar nav item.
 *
 * This component is dynamically created using portals, it must be included in the entryComponents of your NgModule!
 */
export declare class LogoutComponent implements ClosableOverlayComponentModel<LogoutComponentConfig> {
    /**
     * You must provide the header text and a logout callback
     */
    config: LogoutComponentConfig;
    /**
     * Informs that the component wishes to be closed. Used by the overlay handler.
     */
    onClose: EventEmitter<void>;
    logout(): void;
    close(): void;
}
