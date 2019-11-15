/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
export class ToggleButtonDirective {
    constructor() {
        this.active = false;
        this.toggle = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onClick() {
        this.active = !this.active;
        this.toggle.emit(this.active);
    }
}
ToggleButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: `[bciToggleButton]`
            },] },
];
ToggleButtonDirective.propDecorators = {
    active: [{ type: HostBinding, args: ['class.commandbar-button-active',] }, { type: Input }],
    toggle: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    ToggleButtonDirective.prototype.active;
    /** @type {?} */
    ToggleButtonDirective.prototype.toggle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbW1hbmRiYXIvdG9nZ2xlLWJ1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtsRyxNQUFNOztzQkFHSyxLQUFLO3NCQUVLLElBQUksWUFBWSxFQUFFOzs7OztJQUdyQyxPQUFPO1FBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9COzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7O3FCQUVFLFdBQVcsU0FBQyxnQ0FBZ0MsY0FDNUMsS0FBSztxQkFHTCxNQUFNO3NCQUVOLFlBQVksU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbYmNpVG9nZ2xlQnV0dG9uXWBcbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlQnV0dG9uRGlyZWN0aXZlIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb21tYW5kYmFyLWJ1dHRvbi1hY3RpdmUnKVxuICBASW5wdXQoKVxuICBhY3RpdmUgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgdG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgICB0aGlzLnRvZ2dsZS5lbWl0KHRoaXMuYWN0aXZlKTtcbiAgfVxuXG59XG4iXX0=