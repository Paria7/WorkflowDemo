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
export class LogoutComponent {
    constructor() {
        /**
         * Informs that the component wishes to be closed. Used by the overlay handler.
         */
        this.onClose = new EventEmitter();
    }
    /**
     * @return {?}
     */
    logout() {
        this.close();
        this.config.onLogout();
    }
    /**
     * @return {?}
     */
    close() {
        this.onClose.emit();
    }
}
LogoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-logout',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<div class="bci-sidebar-nav-item-overlay">
  <div class="bci-sidebar-nav-item-overlay-header">
    <span>{{config?.title}}</span>
    <button class="close-button" mat-icon-button (click)="close()">
      <mat-icon fontIcon="Bosch-Ic-abort"></mat-icon>
    </button>
  </div>
  <div class="bci-sidebar-nav-item-overlay-buttons">
    <button class="button-primary" (click)="logout()">Logout</button>
  </div>
</div>
`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */.bci-sidebar-nav-item-overlay{font-family:Bosch-Sans;font-weight:300;font-size:16px;background-color:#fff;position:relative;margin-left:8px;display:flex;flex-direction:column;align-items:flex-start;width:220px;padding:16px}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header{width:100%;display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;margin-bottom:16px}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header .close-button .mat-icon,.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header .close-button.mat-icon-button{line-height:unset;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-header .close-button .Bosch-Ic{font-size:20px!important}.bci-sidebar-nav-item-overlay .bci-sidebar-nav-item-overlay-buttons{width:100%;display:flex;flex-direction:row;justify-content:flex-end}.bci-sidebar-nav-item-overlay:after{right:100%;top:calc(100% - 24px);border:8px solid rgba(255,255,255,0);content:" ";height:0;width:0;position:absolute;pointer-events:none;border-right-color:#fff;margin-top:-8px}`]
            },] },
];
LogoutComponent.propDecorators = {
    config: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQStCL0QsTUFBTTs7Ozs7dUJBVWlDLElBQUksWUFBWSxFQUFROzs7OztJQUU3RCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3JCOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztDQWVYO2dCQUNDLE1BQU0sRUFBRSxDQUFDOztpc0NBRXNyQyxDQUFDO2FBQ2pzQzs7O3FCQU1FLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xvc2FibGVPdmVybGF5Q29tcG9uZW50TW9kZWwgfSBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50Q29uZmlnIH0gZnJvbSAnLi9sb2dvdXQuY29tcG9uZW50Lm1vZGVsJztcblxuLyoqXG4gKiBTaW1wbGUgbG9nb3V0IGNvbXBvbmVudCB0byBhcHBlYXIgbmV4dCB0byB0aGUgdXNlciBuYXYgZWxlbWVudC4gSXQgd2lsbCBiZSBwcm9wZXJseSBhbGlnbmVkIHRvIHRoZSBzaWRlYmFyIG5hdiBpdGVtLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIGR5bmFtaWNhbGx5IGNyZWF0ZWQgdXNpbmcgcG9ydGFscywgaXQgbXVzdCBiZSBpbmNsdWRlZCBpbiB0aGUgZW50cnlDb21wb25lbnRzIG9mIHlvdXIgTmdNb2R1bGUhXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1sb2dvdXQnLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48ZGl2IGNsYXNzPVwiYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheVwiPlxuICA8ZGl2IGNsYXNzPVwiYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheS1oZWFkZXJcIj5cbiAgICA8c3Bhbj57e2NvbmZpZz8udGl0bGV9fTwvc3Bhbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnV0dG9uXCIgbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICA8bWF0LWljb24gZm9udEljb249XCJCb3NjaC1JYy1hYm9ydFwiPjwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheS1idXR0b25zXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi1wcmltYXJ5XCIgKGNsaWNrKT1cImxvZ291dCgpXCI+TG9nb3V0PC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8uYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheXtmb250LWZhbWlseTpCb3NjaC1TYW5zO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWxlZnQ6OHB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDt3aWR0aDoyMjBweDtwYWRkaW5nOjE2cHh9LmJjaS1zaWRlYmFyLW5hdi1pdGVtLW92ZXJsYXkgLmJjaS1zaWRlYmFyLW5hdi1pdGVtLW92ZXJsYXktaGVhZGVye3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO21hcmdpbi1ib3R0b206MTZweH0uYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheSAuYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheS1oZWFkZXIgLmNsb3NlLWJ1dHRvbiAubWF0LWljb24sLmJjaS1zaWRlYmFyLW5hdi1pdGVtLW92ZXJsYXkgLmJjaS1zaWRlYmFyLW5hdi1pdGVtLW92ZXJsYXktaGVhZGVyIC5jbG9zZS1idXR0b24ubWF0LWljb24tYnV0dG9ue2xpbmUtaGVpZ2h0OnVuc2V0O3dpZHRoOi13ZWJraXQtZml0LWNvbnRlbnQ7d2lkdGg6LW1vei1maXQtY29udGVudDt3aWR0aDpmaXQtY29udGVudDtoZWlnaHQ6LXdlYmtpdC1maXQtY29udGVudDtoZWlnaHQ6LW1vei1maXQtY29udGVudDtoZWlnaHQ6Zml0LWNvbnRlbnR9LmJjaS1zaWRlYmFyLW5hdi1pdGVtLW92ZXJsYXkgLmJjaS1zaWRlYmFyLW5hdi1pdGVtLW92ZXJsYXktaGVhZGVyIC5jbG9zZS1idXR0b24gLkJvc2NoLUlje2ZvbnQtc2l6ZToyMHB4IWltcG9ydGFudH0uYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheSAuYmNpLXNpZGViYXItbmF2LWl0ZW0tb3ZlcmxheS1idXR0b25ze3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LmJjaS1zaWRlYmFyLW5hdi1pdGVtLW92ZXJsYXk6YWZ0ZXJ7cmlnaHQ6MTAwJTt0b3A6Y2FsYygxMDAlIC0gMjRweCk7Ym9yZGVyOjhweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDApO2NvbnRlbnQ6XCIgXCI7aGVpZ2h0OjA7d2lkdGg6MDtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO2JvcmRlci1yaWdodC1jb2xvcjojZmZmO21hcmdpbi10b3A6LThweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dvdXRDb21wb25lbnQgaW1wbGVtZW50cyBDbG9zYWJsZU92ZXJsYXlDb21wb25lbnRNb2RlbDxMb2dvdXRDb21wb25lbnRDb25maWc+IHtcblxuICAvKipcbiAgICogWW91IG11c3QgcHJvdmlkZSB0aGUgaGVhZGVyIHRleHQgYW5kIGEgbG9nb3V0IGNhbGxiYWNrXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgY29uZmlnOiBMb2dvdXRDb21wb25lbnRDb25maWc7XG5cbiAgLyoqXG4gICAqIEluZm9ybXMgdGhhdCB0aGUgY29tcG9uZW50IHdpc2hlcyB0byBiZSBjbG9zZWQuIFVzZWQgYnkgdGhlIG92ZXJsYXkgaGFuZGxlci5cbiAgICovXG4gIHB1YmxpYyBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLmNvbmZpZy5vbkxvZ291dCgpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgfVxufVxuIl19