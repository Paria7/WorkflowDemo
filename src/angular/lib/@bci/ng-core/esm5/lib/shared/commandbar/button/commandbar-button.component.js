/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { CommandbarItemComponent } from '../item/commandbar-item.component';
var CommandbarButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CommandbarButtonComponent, _super);
    function CommandbarButtonComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Whether the button shall be disabled.
         */
        _this.disabled = false;
        /**
         * The button's click event emitter.c
         */
        _this.click = new EventEmitter();
        _this._ngClass = {};
        _this._ngStyle = {};
        return _this;
    }
    Object.defineProperty(CommandbarButtonComponent.prototype, "ngClass", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._ngClass = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommandbarButtonComponent.prototype, "ngStyle", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._ngStyle = v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    CommandbarButtonComponent.prototype.clickEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // only proxy click-event if there is an observer for the host's click event
        // this is necessary for e.g. the mat-menu trigger button to work
        if (this.click.observers.length > 0) {
            event.stopPropagation();
            this.click.next(event);
        }
    };
    CommandbarButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: "bci-commandbar-button",
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<ng-template #template>\n  <button mat-icon-button\n          class=\"commandbar-item\"\n          [ngClass]=\"_ngClass\"\n          [ngStyle]=\"_ngStyle\"\n          [disabled]=\"disabled\"\n          (click)=\"clickEvent($event)\">\n    <mat-icon [fontIcon]=\"icon\"></mat-icon>\n    <ng-content></ng-content>\n  </button>\n</ng-template>\n<ng-container *ngIf=\"render\">\n  <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n</ng-container>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.commandbar-button-active,.commandbar-button-active.mat-icon-button.mat-icon-button,:host.commandbar-button-active,:host.commandbar-button-active.mat-icon-button.mat-icon-button{color:#008ecf}::ng-deep .mat-icon-button.mat-icon-button{transition:.4s;cursor:pointer;width:auto;min-width:40px}::ng-deep .mat-icon-button.mat-icon-button:hover{color:#008ecf}::ng-deep .mat-icon-button.mat-icon-button.disabled,::ng-deep .mat-icon-button.mat-icon-button:disabled{color:#a8afb5;cursor:not-allowed}::ng-deep .mat-icon-button.mat-icon-button.disabled:hover,::ng-deep .mat-icon-button.mat-icon-button:disabled:hover{color:#a8afb5}::ng-deep .mat-icon-button.mat-icon-button .mat-ripple{width:40px}::ng-deep .mat-icon-button.mat-icon-button .mat-icon{margin-left:4px;margin-right:4px}"],
                    providers: [{ provide: CommandbarItemComponent, useExisting: forwardRef(function () { return CommandbarButtonComponent; }) }]
                },] },
    ];
    CommandbarButtonComponent.propDecorators = {
        icon: [{ type: Input }],
        disabled: [{ type: Input }],
        click: [{ type: Output }],
        ngClass: [{ type: Input }],
        ngStyle: [{ type: Input }]
    };
    return CommandbarButtonComponent;
}(CommandbarItemComponent));
export { CommandbarButtonComponent };
if (false) {
    /**
     * The buttons font-icon.
     * @type {?}
     */
    CommandbarButtonComponent.prototype.icon;
    /**
     * Whether the button shall be disabled.
     * @type {?}
     */
    CommandbarButtonComponent.prototype.disabled;
    /**
     * The button's click event emitter.c
     * @type {?}
     */
    CommandbarButtonComponent.prototype.click;
    /** @type {?} */
    CommandbarButtonComponent.prototype._ngClass;
    /** @type {?} */
    CommandbarButtonComponent.prototype._ngStyle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZGJhci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21tYW5kYmFyL2J1dHRvbi9jb21tYW5kYmFyLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7SUE0QjdCLHFEQUF1Qjs7Ozs7O3lCQVVoRCxLQUFLOzs7O3NCQUtQLElBQUksWUFBWSxFQUFPO3lCQUU4QixFQUFFO3lCQUNuQyxFQUFFOzs7SUFFeEMsc0JBQ0ksOENBQU87Ozs7O1FBRFgsVUFDWSxDQUE2RDtZQUN2RSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztTQUNuQjs7O09BQUE7SUFFRCxzQkFDSSw4Q0FBTzs7Ozs7UUFEWCxVQUNZLENBQTRCO1lBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQ25COzs7T0FBQTs7Ozs7SUFFRCw4Q0FBVTs7OztJQUFWLFVBQVcsS0FBWTs7O1FBR3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjtLQUNGOztnQkEvREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSwwakJBa0JYO29CQUNDLE1BQU0sRUFBRSxDQUFDLCsyQkFFOHZCLENBQUM7b0JBQ3h3QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx5QkFBeUIsRUFBekIsQ0FBeUIsQ0FBQyxFQUFFLENBQUM7aUJBQzVHOzs7dUJBTUUsS0FBSzsyQkFLTCxLQUFLO3dCQUtMLE1BQU07MEJBS04sS0FBSzswQkFLTCxLQUFLOztvQ0ExRFI7RUFpQytDLHVCQUF1QjtTQUF6RCx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tYW5kYmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2l0ZW0vY29tbWFuZGJhci1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYGJjaS1jb21tYW5kYmFyLWJ1dHRvbmAsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxuZy10ZW1wbGF0ZSAjdGVtcGxhdGU+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJjb21tYW5kYmFyLWl0ZW1cIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIl9uZ0NsYXNzXCJcbiAgICAgICAgICBbbmdTdHlsZV09XCJfbmdTdHlsZVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAoY2xpY2spPVwiY2xpY2tFdmVudCgkZXZlbnQpXCI+XG4gICAgPG1hdC1pY29uIFtmb250SWNvbl09XCJpY29uXCI+PC9tYXQtaWNvbj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvYnV0dG9uPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJyZW5kZXJcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy5jb21tYW5kYmFyLWJ1dHRvbi1hY3RpdmUsLmNvbW1hbmRiYXItYnV0dG9uLWFjdGl2ZS5tYXQtaWNvbi1idXR0b24ubWF0LWljb24tYnV0dG9uLDpob3N0LmNvbW1hbmRiYXItYnV0dG9uLWFjdGl2ZSw6aG9zdC5jb21tYW5kYmFyLWJ1dHRvbi1hY3RpdmUubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbntjb2xvcjojMDA4ZWNmfTo6bmctZGVlcCAubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbnt0cmFuc2l0aW9uOi40cztjdXJzb3I6cG9pbnRlcjt3aWR0aDphdXRvO21pbi13aWR0aDo0MHB4fTo6bmctZGVlcCAubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbjpob3Zlcntjb2xvcjojMDA4ZWNmfTo6bmctZGVlcCAubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbi5kaXNhYmxlZCw6Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b246ZGlzYWJsZWR7Y29sb3I6I2E4YWZiNTtjdXJzb3I6bm90LWFsbG93ZWR9OjpuZy1kZWVwIC5tYXQtaWNvbi1idXR0b24ubWF0LWljb24tYnV0dG9uLmRpc2FibGVkOmhvdmVyLDo6bmctZGVlcCAubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbjpkaXNhYmxlZDpob3Zlcntjb2xvcjojYThhZmI1fTo6bmctZGVlcCAubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbiAubWF0LXJpcHBsZXt3aWR0aDo0MHB4fTo6bmctZGVlcCAubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb257bWFyZ2luLWxlZnQ6NHB4O21hcmdpbi1yaWdodDo0cHh9YF0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ29tbWFuZGJhckl0ZW1Db21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbW1hbmRiYXJCdXR0b25Db21wb25lbnQpIH1dXG59KVxuZXhwb3J0IGNsYXNzIENvbW1hbmRiYXJCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBDb21tYW5kYmFySXRlbUNvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIFRoZSBidXR0b25zIGZvbnQtaWNvbi5cbiAgICovXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgYnV0dG9uIHNoYWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGJ1dHRvbidzIGNsaWNrIGV2ZW50IGVtaXR0ZXIuY1xuICAgKi9cbiAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgX25nQ2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4gfCB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgX25nU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBASW5wdXQoKVxuICBzZXQgbmdDbGFzcyh2OiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBba2xhc3M6IHN0cmluZ106IGFueSB9KSB7XG4gICAgdGhpcy5fbmdDbGFzcyA9IHY7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbmdTdHlsZSh2OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fbmdTdHlsZSA9IHY7XG4gIH1cblxuICBjbGlja0V2ZW50KGV2ZW50OiBFdmVudCkge1xuICAgIC8vIG9ubHkgcHJveHkgY2xpY2stZXZlbnQgaWYgdGhlcmUgaXMgYW4gb2JzZXJ2ZXIgZm9yIHRoZSBob3N0J3MgY2xpY2sgZXZlbnRcbiAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgZS5nLiB0aGUgbWF0LW1lbnUgdHJpZ2dlciBidXR0b24gdG8gd29ya1xuICAgIGlmICh0aGlzLmNsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuY2xpY2submV4dChldmVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=