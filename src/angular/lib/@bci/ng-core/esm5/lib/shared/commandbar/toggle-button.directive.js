/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
var ToggleButtonDirective = /** @class */ (function () {
    function ToggleButtonDirective() {
        this.active = false;
        this.toggle = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ToggleButtonDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.active = !this.active;
        this.toggle.emit(this.active);
    };
    ToggleButtonDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[bciToggleButton]"
                },] },
    ];
    ToggleButtonDirective.propDecorators = {
        active: [{ type: HostBinding, args: ['class.commandbar-button-active',] }, { type: Input }],
        toggle: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return ToggleButtonDirective;
}());
export { ToggleButtonDirective };
if (false) {
    /** @type {?} */
    ToggleButtonDirective.prototype.active;
    /** @type {?} */
    ToggleButtonDirective.prototype.toggle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbW1hbmRiYXIvdG9nZ2xlLWJ1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O3NCQVF2RixLQUFLO3NCQUVLLElBQUksWUFBWSxFQUFFOzs7OztJQUdyQyx1Q0FBTzs7O0lBRFA7UUFFRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2lCQUM5Qjs7O3lCQUVFLFdBQVcsU0FBQyxnQ0FBZ0MsY0FDNUMsS0FBSzt5QkFHTCxNQUFNOzBCQUVOLFlBQVksU0FBQyxPQUFPOztnQ0FoQnZCOztTQVNhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW2JjaVRvZ2dsZUJ1dHRvbl1gXG59KVxuZXhwb3J0IGNsYXNzIFRvZ2dsZUJ1dHRvbkRpcmVjdGl2ZSB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29tbWFuZGJhci1idXR0b24tYWN0aXZlJylcbiAgQElucHV0KClcbiAgYWN0aXZlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XG4gICAgdGhpcy50b2dnbGUuZW1pdCh0aGlzLmFjdGl2ZSk7XG4gIH1cblxufVxuIl19