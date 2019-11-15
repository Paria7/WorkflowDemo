/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var BciTileComponent = /** @class */ (function () {
    function BciTileComponent() {
        this.addTile = false;
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    BciTileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    BciTileComponent.prototype.executeAction = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        this.action.emit(null);
    };
    BciTileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-tile',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"tile\" [ngClass]=\"{'add-tile': addTile}\" fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"center center\">\n  <div class=\"tile-icon\">\n    <i class=\"Bosch-Ic {{ iconName || 'Bosch-Ic-add' }}\"></i>\n  </div>\n  <div class=\"tile-details\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n    <div>\n      <div class=\"title\">\n        {{ title }}\n      </div>\n\n      <div *ngIf=\"!addTile\" class=\"description\">\n        {{ description }}\n      </div>\n    </div>\n\n    <div *ngIf=\"!addTile\" class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n      <div><a class=\"button-link\">{{ detailsButtonLabel }}</a></div>\n\n      <button mat-icon-button href=\"#\" *ngIf=canExecuteAction (click)=\"executeAction($event)\"\n              class=\"mat-icon-button Bosch-Ic {{actionIconName}}\"></button>\n    </div>\n\n  </div>\n</div>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.tile{margin-bottom:16px;background-color:#efeff0;padding:0 16px;box-sizing:border-box;width:400px;height:150px;color:#000;transition:all .25s ease}.tile:focus,.tile:hover{background-color:#dfdfe0;cursor:pointer}.tile:focus .tile-icon i,.tile:hover .tile-icon i{color:#bfc0c2}.tile .tile-icon{align-self:center}.tile .tile-icon i{font-size:80px;color:#cfd0d1}.tile .tile-details{width:100%}.tile .tile-details .title{font-size:20px;width:260px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.tile .tile-details .description{margin:4px 0;font-size:12px;line-height:16px;max-height:32px;height:32px;overflow:hidden;text-overflow:ellipsis}.tile .tile-details .actions{margin-bottom:-8px;width:100%}.tile .tile-details .actions .button-link{position:relative;font-size:12px;padding:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.tile .tile-details .actions .button-link:after{font-size:12px;margin-left:2px}.tile .tile-details .actions .mat-icon-button{font-size:24px;color:#525f6b}.tile.add-tile{background-color:transparent;color:#a8afb5;border:1px solid #bfc0c2;font-size:20px}.tile.add-tile .tile-icon i{font-size:48px}.tile.add-tile .tile-details,.tile.add-tile .tile-details .title{width:auto}.tile.add-tile:hover{color:#000;background-color:#f7f7f7;border:1px solid #dfdfe0;opacity:.75;cursor:pointer}.tile.add-tile:hover .tile-icon i{color:#525f6b}"],
                },] },
    ];
    /** @nocollapse */
    BciTileComponent.ctorParameters = function () { return []; };
    BciTileComponent.propDecorators = {
        title: [{ type: Input }],
        description: [{ type: Input }],
        iconName: [{ type: Input }],
        detailsButtonLabel: [{ type: Input }],
        addTile: [{ type: Input }],
        actionIconName: [{ type: Input }],
        canExecuteAction: [{ type: Input }],
        action: [{ type: Output }]
    };
    return BciTileComponent;
}());
export { BciTileComponent };
if (false) {
    /** @type {?} */
    BciTileComponent.prototype.title;
    /** @type {?} */
    BciTileComponent.prototype.description;
    /** @type {?} */
    BciTileComponent.prototype.iconName;
    /** @type {?} */
    BciTileComponent.prototype.detailsButtonLabel;
    /** @type {?} */
    BciTileComponent.prototype.addTile;
    /** @type {?} */
    BciTileComponent.prototype.actionIconName;
    /** @type {?} */
    BciTileComponent.prototype.canExecuteAction;
    /** @type {?} */
    BciTileComponent.prototype.action;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3RpbGUvdGlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBK0M3RTt1QkFMbUIsS0FBSztzQkFHYyxJQUFJLFlBQVksRUFBRTtLQUd2RDs7OztJQUVELG1DQUFROzs7SUFBUjtLQUVDOzs7OztJQUVELHdDQUFhOzs7O0lBQWIsVUFBYyxNQUFhO1FBQ3pCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDeEI7O2dCQXhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSwwK0JBNEJYO29CQUNDLE1BQU0sRUFBRSxDQUFDLGk5Q0FFZzJDLENBQUM7aUJBQzMyQzs7Ozs7d0JBRUUsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7cUNBQ0wsS0FBSzswQkFDTCxLQUFLO2lDQUNMLEtBQUs7bUNBQ0wsS0FBSzt5QkFDTCxNQUFNOzsyQkFqRFQ7O1NBeUNhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktdGlsZScsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjxkaXYgY2xhc3M9XCJ0aWxlXCIgW25nQ2xhc3NdPVwieydhZGQtdGlsZSc6IGFkZFRpbGV9XCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjE2cHhcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxuICA8ZGl2IGNsYXNzPVwidGlsZS1pY29uXCI+XG4gICAgPGkgY2xhc3M9XCJCb3NjaC1JYyB7eyBpY29uTmFtZSB8fCAnQm9zY2gtSWMtYWRkJyB9fVwiPjwvaT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0aWxlLWRldGFpbHNcIiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgc3RhcnRcIj5cbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgIHt7IHRpdGxlIH19XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiAqbmdJZj1cIiFhZGRUaWxlXCIgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICB7eyBkZXNjcmlwdGlvbiB9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiIWFkZFRpbGVcIiBjbGFzcz1cImFjdGlvbnNcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIHN0YXJ0XCI+XG4gICAgICA8ZGl2PjxhIGNsYXNzPVwiYnV0dG9uLWxpbmtcIj57eyBkZXRhaWxzQnV0dG9uTGFiZWwgfX08L2E+PC9kaXY+XG5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGhyZWY9XCIjXCIgKm5nSWY9Y2FuRXhlY3V0ZUFjdGlvbiAoY2xpY2spPVwiZXhlY3V0ZUFjdGlvbigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtYXQtaWNvbi1idXR0b24gQm9zY2gtSWMge3thY3Rpb25JY29uTmFtZX19XCI+PC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy50aWxle21hcmdpbi1ib3R0b206MTZweDtiYWNrZ3JvdW5kLWNvbG9yOiNlZmVmZjA7cGFkZGluZzowIDE2cHg7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjQwMHB4O2hlaWdodDoxNTBweDtjb2xvcjojMDAwO3RyYW5zaXRpb246YWxsIC4yNXMgZWFzZX0udGlsZTpmb2N1cywudGlsZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkZmRmZTA7Y3Vyc29yOnBvaW50ZXJ9LnRpbGU6Zm9jdXMgLnRpbGUtaWNvbiBpLC50aWxlOmhvdmVyIC50aWxlLWljb24gaXtjb2xvcjojYmZjMGMyfS50aWxlIC50aWxlLWljb257YWxpZ24tc2VsZjpjZW50ZXJ9LnRpbGUgLnRpbGUtaWNvbiBpe2ZvbnQtc2l6ZTo4MHB4O2NvbG9yOiNjZmQwZDF9LnRpbGUgLnRpbGUtZGV0YWlsc3t3aWR0aDoxMDAlfS50aWxlIC50aWxlLWRldGFpbHMgLnRpdGxle2ZvbnQtc2l6ZToyMHB4O3dpZHRoOjI2MHB4O3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO292ZXJmbG93OmhpZGRlbn0udGlsZSAudGlsZS1kZXRhaWxzIC5kZXNjcmlwdGlvbnttYXJnaW46NHB4IDA7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MTZweDttYXgtaGVpZ2h0OjMycHg7aGVpZ2h0OjMycHg7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9LnRpbGUgLnRpbGUtZGV0YWlscyAuYWN0aW9uc3ttYXJnaW4tYm90dG9tOi04cHg7d2lkdGg6MTAwJX0udGlsZSAudGlsZS1kZXRhaWxzIC5hY3Rpb25zIC5idXR0b24tbGlua3twb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6MTJweDtwYWRkaW5nOjA7LXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkfS50aWxlIC50aWxlLWRldGFpbHMgLmFjdGlvbnMgLmJ1dHRvbi1saW5rOmFmdGVye2ZvbnQtc2l6ZToxMnB4O21hcmdpbi1sZWZ0OjJweH0udGlsZSAudGlsZS1kZXRhaWxzIC5hY3Rpb25zIC5tYXQtaWNvbi1idXR0b257Zm9udC1zaXplOjI0cHg7Y29sb3I6IzUyNWY2Yn0udGlsZS5hZGQtdGlsZXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNhOGFmYjU7Ym9yZGVyOjFweCBzb2xpZCAjYmZjMGMyO2ZvbnQtc2l6ZToyMHB4fS50aWxlLmFkZC10aWxlIC50aWxlLWljb24gaXtmb250LXNpemU6NDhweH0udGlsZS5hZGQtdGlsZSAudGlsZS1kZXRhaWxzLC50aWxlLmFkZC10aWxlIC50aWxlLWRldGFpbHMgLnRpdGxle3dpZHRoOmF1dG99LnRpbGUuYWRkLXRpbGU6aG92ZXJ7Y29sb3I6IzAwMDtiYWNrZ3JvdW5kLWNvbG9yOiNmN2Y3Zjc7Ym9yZGVyOjFweCBzb2xpZCAjZGZkZmUwO29wYWNpdHk6Ljc1O2N1cnNvcjpwb2ludGVyfS50aWxlLmFkZC10aWxlOmhvdmVyIC50aWxlLWljb24gaXtjb2xvcjojNTI1ZjZifWBdLFxufSlcbmV4cG9ydCBjbGFzcyBCY2lUaWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgZGV0YWlsc0J1dHRvbkxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFkZFRpbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgYWN0aW9uSWNvbk5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY2FuRXhlY3V0ZUFjdGlvbjogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGFjdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgZXhlY3V0ZUFjdGlvbigkZXZlbnQ6IEV2ZW50KSB7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuYWN0aW9uLmVtaXQobnVsbCk7XG4gIH1cblxufVxuIl19