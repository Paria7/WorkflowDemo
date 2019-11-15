/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
var BciChipComponent = /** @class */ (function () {
    function BciChipComponent() {
        /**
         * The event emitter to propagate the removal-event
         */
        this.removed = new EventEmitter();
        /**
         * Flag to indicate whether the remove-icon is being displayed
         */
        this.removable = true;
    }
    BciChipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-chip',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<mat-chip [removable]=\"removable\" [ngClass]=\"{ 'not-removable': !removable }\" (removed)=\"removed.next($event)\">\n  <ng-content></ng-content>\n  <mat-icon *ngIf=\"removable\" matChipRemove fontIcon=\"Bosch-Ic-abort\" aria-label=\"remove\"></mat-icon>\n</mat-chip>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{padding:0}:host .mat-chip.not-removable{background-color:#7d8790;background-image:none;color:#fff}"],
                },] },
    ];
    /** @nocollapse */
    BciChipComponent.ctorParameters = function () { return []; };
    BciChipComponent.propDecorators = {
        true: [{ type: HostBinding, args: ['class.bci-chip',] }],
        removed: [{ type: Output }],
        removable: [{ type: Input }]
    };
    return BciChipComponent;
}());
export { BciChipComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NoaXAvY2hpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQStCbEY7Ozs7dUJBUHVDLElBQUksWUFBWSxFQUFFOzs7O3lCQUtwQyxJQUFJO0tBR3hCOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsZ1lBUVg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsa05BRWlHLENBQUM7aUJBQzVHOzs7Ozt1QkFHRSxXQUFXLFNBQUMsZ0JBQWdCOzBCQUs1QixNQUFNOzRCQUtOLEtBQUs7OzJCQWpDUjs7U0FxQmEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWNoaXAnLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bWF0LWNoaXAgW3JlbW92YWJsZV09XCJyZW1vdmFibGVcIiBbbmdDbGFzc109XCJ7ICdub3QtcmVtb3ZhYmxlJzogIXJlbW92YWJsZSB9XCIgKHJlbW92ZWQpPVwicmVtb3ZlZC5uZXh0KCRldmVudClcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8bWF0LWljb24gKm5nSWY9XCJyZW1vdmFibGVcIiBtYXRDaGlwUmVtb3ZlIGZvbnRJY29uPVwiQm9zY2gtSWMtYWJvcnRcIiBhcmlhLWxhYmVsPVwicmVtb3ZlXCI+PC9tYXQtaWNvbj5cbjwvbWF0LWNoaXA+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi86aG9zdHtwYWRkaW5nOjB9Omhvc3QgLm1hdC1jaGlwLm5vdC1yZW1vdmFibGV7YmFja2dyb3VuZC1jb2xvcjojN2Q4NzkwO2JhY2tncm91bmQtaW1hZ2U6bm9uZTtjb2xvcjojZmZmfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBCY2lDaGlwQ29tcG9uZW50IHtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmJjaS1jaGlwJykgdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIGV2ZW50IGVtaXR0ZXIgdG8gcHJvcGFnYXRlIHRoZSByZW1vdmFsLWV2ZW50XG4gICAqL1xuICBAT3V0cHV0KCkgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgcmVtb3ZlLWljb24gaXMgYmVpbmcgZGlzcGxheWVkXG4gICAqL1xuICBASW5wdXQoKSByZW1vdmFibGUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbn1cbiJdfQ==