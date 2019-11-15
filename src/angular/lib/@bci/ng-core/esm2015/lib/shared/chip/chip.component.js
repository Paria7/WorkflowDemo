/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
export class BciChipComponent {
    constructor() {
        /**
         * The event emitter to propagate the removal-event
         */
        this.removed = new EventEmitter();
        /**
         * Flag to indicate whether the remove-icon is being displayed
         */
        this.removable = true;
    }
}
BciChipComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-chip',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<mat-chip [removable]="removable" [ngClass]="{ 'not-removable': !removable }" (removed)="removed.next($event)">
  <ng-content></ng-content>
  <mat-icon *ngIf="removable" matChipRemove fontIcon="Bosch-Ic-abort" aria-label="remove"></mat-icon>
</mat-chip>
`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */:host{padding:0}:host .mat-chip.not-removable{background-color:#7d8790;background-image:none;color:#fff}`],
            },] },
];
/** @nocollapse */
BciChipComponent.ctorParameters = () => [];
BciChipComponent.propDecorators = {
    true: [{ type: HostBinding, args: ['class.bci-chip',] }],
    removed: [{ type: Output }],
    removable: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BciChipComponent.prototype.true;
    /**
     * The event emitter to propagate the removal-event
     * @type {?}
     */
    BciChipComponent.prototype.removed;
    /**
     * Flag to indicate whether the remove-icon is being displayed
     * @type {?}
     */
    BciChipComponent.prototype.removable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NoaXAvY2hpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBaUJwRixNQUFNO0lBY0o7Ozs7dUJBUHVDLElBQUksWUFBWSxFQUFFOzs7O3lCQUtwQyxJQUFJO0tBR3hCOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Ozs7O0NBUVg7Z0JBQ0MsTUFBTSxFQUFFLENBQUM7OzRHQUVpRyxDQUFDO2FBQzVHOzs7OzttQkFHRSxXQUFXLFNBQUMsZ0JBQWdCO3NCQUs1QixNQUFNO3dCQUtOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktY2hpcCcsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxtYXQtY2hpcCBbcmVtb3ZhYmxlXT1cInJlbW92YWJsZVwiIFtuZ0NsYXNzXT1cInsgJ25vdC1yZW1vdmFibGUnOiAhcmVtb3ZhYmxlIH1cIiAocmVtb3ZlZCk9XCJyZW1vdmVkLm5leHQoJGV2ZW50KVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDxtYXQtaWNvbiAqbmdJZj1cInJlbW92YWJsZVwiIG1hdENoaXBSZW1vdmUgZm9udEljb249XCJCb3NjaC1JYy1hYm9ydFwiIGFyaWEtbGFiZWw9XCJyZW1vdmVcIj48L21hdC1pY29uPlxuPC9tYXQtY2hpcD5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLzpob3N0e3BhZGRpbmc6MH06aG9zdCAubWF0LWNoaXAubm90LXJlbW92YWJsZXtiYWNrZ3JvdW5kLWNvbG9yOiM3ZDg3OTA7YmFja2dyb3VuZC1pbWFnZTpub25lO2NvbG9yOiNmZmZ9YF0sXG59KVxuZXhwb3J0IGNsYXNzIEJjaUNoaXBDb21wb25lbnQge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYmNpLWNoaXAnKSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgZXZlbnQgZW1pdHRlciB0byBwcm9wYWdhdGUgdGhlIHJlbW92YWwtZXZlbnRcbiAgICovXG4gIEBPdXRwdXQoKSByZW1vdmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSByZW1vdmUtaWNvbiBpcyBiZWluZyBkaXNwbGF5ZWRcbiAgICovXG4gIEBJbnB1dCgpIHJlbW92YWJsZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxufVxuIl19