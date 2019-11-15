/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, EventEmitter, Input } from '@angular/core';
/**
 * Simple logout component to appear next to the user nav element. It will be properly aligned to the sidebar nav item.
 *
 * This component is dynamically created using portals, it must be included in the entryComponents of your NgModule!
 */
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
        /**
         * Informs that the component wishes to be closed. Used by the overlay handler.
         */
        this.onClose = new EventEmitter();
    }
    /**
     * @return {?}
     */
    LogoutComponent.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.close();
        this.config.onLogout();
    };
    /**
     * @return {?}
     */
    LogoutComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.onClose.emit();
    };
    LogoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-logout',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"bci-sidebar-nav-item-overlay\">\n  <div class=\"bci-sidebar-nav-item-overlay-header\">\n    <span>{{config?.title}}</span>\n    <button class=\"close-button\" mat-icon-button (click)=\"close()\">\n      <mat-icon fontIcon=\"Bosch-Ic-abort\"></mat-icon>\n    </button>\n  </div>\n  <div class=\"bci-sidebar-nav-item-overlay-buttons\">\n    <button class=\"button-primary\" (click)=\"logout()\">Logout</button>\n  </div>\n</div>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.bci-sidebar-nav-item-overlay{font-family:Bosch-Sans;font-weight:300;font-size:16px;background-color:#fff;position:relative;margin-left:8px;display:flex;flex-direction:column;align-items:flex-start;width:220px;padding:16px}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header{width:100%;display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;margin-bottom:16px}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header .close-button .mat-icon,.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header .close-button.mat-icon-button{line-height:unset;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header .close-button .Bosch-Ic{font-size:20px!important}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-buttons{width:100%;display:flex;flex-direction:row;justify-content:flex-end}.bci-sidebar-nav-item-overlay:after{right:100%;top:calc(100% - 24px);border:8px solid rgba(255,255,255,0);content:\" \";height:0;width:0;position:absolute;pointer-events:none;border-right-color:#fff;margin-top:-8px}"]
                },] },
    ];
    LogoutComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return LogoutComponent;
}());
export { LogoutComponent };
if (false) {
    /**
     * You must provide the header text and a logout callback
     * @type {?}
     */
    LogoutComponent.prototype.config;
    /**
     * Informs that the component wishes to be closed. Used by the overlay handler.
     * @type {?}
     */
    LogoutComponent.prototype.onClose;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O3VCQXlDeEIsSUFBSSxZQUFZLEVBQVE7Ozs7O0lBRTdELGdDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCwrQkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3JCOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsMmlCQWVYO29CQUNDLE1BQU0sRUFBRSxDQUFDLHl5Q0FFc3JDLENBQUM7aUJBQ2pzQzs7O3lCQU1FLEtBQUs7OzBCQXhDUjs7U0FtQ2EsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbG9zYWJsZU92ZXJsYXlDb21wb25lbnRNb2RlbCB9IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnRDb25maWcgfSBmcm9tICcuL2xvZ291dC5jb21wb25lbnQubW9kZWwnO1xuXG4vKipcbiAqIFNpbXBsZSBsb2dvdXQgY29tcG9uZW50IHRvIGFwcGVhciBuZXh0IHRvIHRoZSB1c2VyIG5hdiBlbGVtZW50LiBJdCB3aWxsIGJlIHByb3Blcmx5IGFsaWduZWQgdG8gdGhlIHNpZGViYXIgbmF2IGl0ZW0uXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgZHluYW1pY2FsbHkgY3JlYXRlZCB1c2luZyBwb3J0YWxzLCBpdCBtdXN0IGJlIGluY2x1ZGVkIGluIHRoZSBlbnRyeUNvbXBvbmVudHMgb2YgeW91ciBOZ01vZHVsZSFcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWxvZ291dCcsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxkaXYgY2xhc3M9XCJiY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5XCI+XG4gIDxkaXYgY2xhc3M9XCJiY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5LWhlYWRlclwiPlxuICAgIDxzcGFuPnt7Y29uZmlnPy50aXRsZX19PC9zcGFuPlxuICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idXR0b25cIiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICAgIDxtYXQtaWNvbiBmb250SWNvbj1cIkJvc2NoLUljLWFib3J0XCI+PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJiY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5LWJ1dHRvbnNcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLXByaW1hcnlcIiAoY2xpY2spPVwibG9nb3V0KClcIj5Mb2dvdXQ8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy5iY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5e2ZvbnQtZmFtaWx5OkJvc2NoLVNhbnM7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc2l6ZToxNnB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tbGVmdDo4cHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3dpZHRoOjIyMHB4O3BhZGRpbmc6MTZweH0uYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheSAuYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheS1oZWFkZXJ7d2lkdGg6MTAwJTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47bWFyZ2luLWJvdHRvbToxNnB4fS5iY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5IC5iY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5LWhlYWRlciAuY2xvc2UtYnV0dG9uIC5tYXQtaWNvbiwuYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheSAuYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheS1oZWFkZXIgLmNsb3NlLWJ1dHRvbi5tYXQtaWNvbi1idXR0b257bGluZS1oZWlnaHQ6dW5zZXQ7d2lkdGg6LXdlYmtpdC1maXQtY29udGVudDt3aWR0aDotbW96LWZpdC1jb250ZW50O3dpZHRoOmZpdC1jb250ZW50O2hlaWdodDotd2Via2l0LWZpdC1jb250ZW50O2hlaWdodDotbW96LWZpdC1jb250ZW50O2hlaWdodDpmaXQtY29udGVudH0uYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheSAuYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheS1oZWFkZXIgLmNsb3NlLWJ1dHRvbiAuQm9zY2gtSWN7Zm9udC1zaXplOjIwcHghaW1wb3J0YW50fS5iY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5IC5iY2ktc2lkZWJhci1uYXYtaXRlbS1vdmVybGF5LWJ1dHRvbnN7d2lkdGg6MTAwJTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheTphZnRlcntyaWdodDoxMDAlO3RvcDpjYWxjKDEwMCUgLSAyNHB4KTtib3JkZXI6OHB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMCk7Y29udGVudDpcIiBcIjtoZWlnaHQ6MDt3aWR0aDowO3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7Ym9yZGVyLXJpZ2h0LWNvbG9yOiNmZmY7bWFyZ2luLXRvcDotOHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dENvbXBvbmVudCBpbXBsZW1lbnRzIENsb3NhYmxlT3ZlcmxheUNvbXBvbmVudE1vZGVsPExvZ291dENvbXBvbmVudENvbmZpZz4ge1xuXG4gIC8qKlxuICAgKiBZb3UgbXVzdCBwcm92aWRlIHRoZSBoZWFkZXIgdGV4dCBhbmQgYSBsb2dvdXQgY2FsbGJhY2tcbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBjb25maWc6IExvZ291dENvbXBvbmVudENvbmZpZztcblxuICAvKipcbiAgICogSW5mb3JtcyB0aGF0IHRoZSBjb21wb25lbnQgd2lzaGVzIHRvIGJlIGNsb3NlZC4gVXNlZCBieSB0aGUgb3ZlcmxheSBoYW5kbGVyLlxuICAgKi9cbiAgcHVibGljIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuY29uZmlnLm9uTG9nb3V0KCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICB9XG59XG4iXX0=