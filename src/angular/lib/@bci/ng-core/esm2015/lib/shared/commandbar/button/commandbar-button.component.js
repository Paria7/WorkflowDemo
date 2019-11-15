/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { CommandbarItemComponent } from '../item/commandbar-item.component';
export class CommandbarButtonComponent extends CommandbarItemComponent {
    constructor() {
        super(...arguments);
        /**
         * Whether the button shall be disabled.
         */
        this.disabled = false;
        /**
         * The button's click event emitter.c
         */
        this.click = new EventEmitter();
        this._ngClass = {};
        this._ngStyle = {};
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set ngClass(v) {
        this._ngClass = v;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set ngStyle(v) {
        this._ngStyle = v;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickEvent(event) {
        // only proxy click-event if there is an observer for the host's click event
        // this is necessary for e.g. the mat-menu trigger button to work
        if (this.click.observers.length > 0) {
            event.stopPropagation();
            this.click.next(event);
        }
    }
}
CommandbarButtonComponent.decorators = [
    { type: Component, args: [{
                selector: `bci-commandbar-button`,
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<ng-template #template>
  <button mat-icon-button
          class="commandbar-item"
          [ngClass]="_ngClass"
          [ngStyle]="_ngStyle"
          [disabled]="disabled"
          (click)="clickEvent($event)">
    <mat-icon [fontIcon]="icon"></mat-icon>
    <ng-content></ng-content>
  </button>
</ng-template>
<ng-container *ngIf="render">
  <ng-container *ngTemplateOutlet="template"></ng-container>
</ng-container>
`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */.commandbar-button-active,.commandbar-button-active.mat-icon-button.mat-icon-button,:host.commandbar-button-active,:host.commandbar-button-active.mat-icon-button.mat-icon-button{color:#008ecf}::ng-deep .mat-icon-button.mat-icon-button{transition:.4s;cursor:pointer;width:auto;min-width:40px}::ng-deep .mat-icon-button.mat-icon-button:hover{color:#008ecf}::ng-deep .mat-icon-button.mat-icon-button.disabled,::ng-deep .mat-icon-button.mat-icon-button:disabled{color:#a8afb5;cursor:not-allowed}::ng-deep .mat-icon-button.mat-icon-button.disabled:hover,::ng-deep .mat-icon-button.mat-icon-button:disabled:hover{color:#a8afb5}::ng-deep .mat-icon-button.mat-icon-button .mat-ripple{width:40px}::ng-deep .mat-icon-button.mat-icon-button .mat-icon{margin-left:4px;margin-right:4px}`],
                providers: [{ provide: CommandbarItemComponent, useExisting: forwardRef(() => CommandbarButtonComponent) }]
            },] },
];
CommandbarButtonComponent.propDecorators = {
    icon: [{ type: Input }],
    disabled: [{ type: Input }],
    click: [{ type: Output }],
    ngClass: [{ type: Input }],
    ngStyle: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZGJhci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21tYW5kYmFyL2J1dHRvbi9jb21tYW5kYmFyLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBNEI1RSxNQUFNLGdDQUFpQyxTQUFRLHVCQUF1Qjs7Ozs7O3dCQVVoRCxLQUFLOzs7O3FCQUtQLElBQUksWUFBWSxFQUFPO3dCQUU4QixFQUFFO3dCQUNuQyxFQUFFOzs7Ozs7SUFFeEMsSUFDSSxPQUFPLENBQUMsQ0FBNkQ7UUFDdkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7S0FDbkI7Ozs7O0lBRUQsSUFDSSxPQUFPLENBQUMsQ0FBNEI7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7S0FDbkI7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQVk7OztRQUdyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7S0FDRjs7O1lBL0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQzs7eXdCQUU4dkIsQ0FBQztnQkFDeHdCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUMsRUFBRSxDQUFDO2FBQzVHOzs7bUJBTUUsS0FBSzt1QkFLTCxLQUFLO29CQUtMLE1BQU07c0JBS04sS0FBSztzQkFLTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbWFuZGJhckl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9pdGVtL2NvbW1hbmRiYXItaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBiY2ktY29tbWFuZGJhci1idXR0b25gLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bmctdGVtcGxhdGUgI3RlbXBsYXRlPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwiY29tbWFuZGJhci1pdGVtXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJfbmdDbGFzc1wiXG4gICAgICAgICAgW25nU3R5bGVdPVwiX25nU3R5bGVcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgKGNsaWNrKT1cImNsaWNrRXZlbnQoJGV2ZW50KVwiPlxuICAgIDxtYXQtaWNvbiBbZm9udEljb25dPVwiaWNvblwiPjwvbWF0LWljb24+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2J1dHRvbj5cbjwvbmctdGVtcGxhdGU+XG48bmctY29udGFpbmVyICpuZ0lmPVwicmVuZGVyXCI+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8uY29tbWFuZGJhci1idXR0b24tYWN0aXZlLC5jb21tYW5kYmFyLWJ1dHRvbi1hY3RpdmUubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbiw6aG9zdC5jb21tYW5kYmFyLWJ1dHRvbi1hY3RpdmUsOmhvc3QuY29tbWFuZGJhci1idXR0b24tYWN0aXZlLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b257Y29sb3I6IzAwOGVjZn06Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b257dHJhbnNpdGlvbjouNHM7Y3Vyc29yOnBvaW50ZXI7d2lkdGg6YXV0bzttaW4td2lkdGg6NDBweH06Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b246aG92ZXJ7Y29sb3I6IzAwOGVjZn06Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b24uZGlzYWJsZWQsOjpuZy1kZWVwIC5tYXQtaWNvbi1idXR0b24ubWF0LWljb24tYnV0dG9uOmRpc2FibGVke2NvbG9yOiNhOGFmYjU7Y3Vyc29yOm5vdC1hbGxvd2VkfTo6bmctZGVlcCAubWF0LWljb24tYnV0dG9uLm1hdC1pY29uLWJ1dHRvbi5kaXNhYmxlZDpob3Zlciw6Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b246ZGlzYWJsZWQ6aG92ZXJ7Y29sb3I6I2E4YWZiNX06Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b24gLm1hdC1yaXBwbGV7d2lkdGg6NDBweH06Om5nLWRlZXAgLm1hdC1pY29uLWJ1dHRvbi5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29ue21hcmdpbi1sZWZ0OjRweDttYXJnaW4tcmlnaHQ6NHB4fWBdLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENvbW1hbmRiYXJJdGVtQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDb21tYW5kYmFyQnV0dG9uQ29tcG9uZW50KSB9XVxufSlcbmV4cG9ydCBjbGFzcyBDb21tYW5kYmFyQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQ29tbWFuZGJhckl0ZW1Db21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBUaGUgYnV0dG9ucyBmb250LWljb24uXG4gICAqL1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGJ1dHRvbiBzaGFsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBidXR0b24ncyBjbGljayBldmVudCBlbWl0dGVyLmNcbiAgICovXG4gIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIF9uZ0NsYXNzOiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBba2xhc3M6IHN0cmluZ106IGFueSB9ID0ge307XG4gIF9uZ1N0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgQElucHV0KClcbiAgc2V0IG5nQ2xhc3Modjogc3RyaW5nIHwgc3RyaW5nW10gfCBTZXQ8c3RyaW5nPiB8IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHRoaXMuX25nQ2xhc3MgPSB2O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG5nU3R5bGUodjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX25nU3R5bGUgPSB2O1xuICB9XG5cbiAgY2xpY2tFdmVudChldmVudDogRXZlbnQpIHtcbiAgICAvLyBvbmx5IHByb3h5IGNsaWNrLWV2ZW50IGlmIHRoZXJlIGlzIGFuIG9ic2VydmVyIGZvciB0aGUgaG9zdCdzIGNsaWNrIGV2ZW50XG4gICAgLy8gdGhpcyBpcyBuZWNlc3NhcnkgZm9yIGUuZy4gdGhlIG1hdC1tZW51IHRyaWdnZXIgYnV0dG9uIHRvIHdvcmtcbiAgICBpZiAodGhpcy5jbGljay5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmNsaWNrLm5leHQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuIl19