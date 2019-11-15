import { EventEmitter } from '@angular/core';
export interface ClosableOverlayComponentModel<T> {
    config: T;
    onClose: EventEmitter<void>;
}
