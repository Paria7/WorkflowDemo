/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class BciTileComponent {
    constructor() {
        this.addTile = false;
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    executeAction($event) {
        $event.stopPropagation();
        $event.preventDefault();
        this.action.emit(null);
    }
}
BciTileComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-tile',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<div class="tile" [ngClass]="{'add-tile': addTile}" fxLayout="row" fxLayoutGap="16px" fxLayoutAlign="center center">
  <div class="tile-icon">
    <i class="Bosch-Ic {{ iconName || 'Bosch-Ic-add' }}"></i>
  </div>
  <div class="tile-details" fxLayout="column" fxLayoutAlign="center start">
    <div>
      <div class="title">
        {{ title }}
      </div>

      <div *ngIf="!addTile" class="description">
        {{ description }}
      </div>
    </div>

    <div *ngIf="!addTile" class="actions" fxLayout="row" fxLayoutAlign="space-between start">
      <div><a class="button-link">{{ detailsButtonLabel }}</a></div>

      <button mat-icon-button href="#" *ngIf=canExecuteAction (click)="executeAction($event)"
              class="mat-icon-button Bosch-Ic {{actionIconName}}"></button>
    </div>

  </div>
</div>
`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */.tile{margin-bottom:16px;background-color:#efeff0;padding:0 16px;box-sizing:border-box;width:400px;height:150px;color:#000;transition:all .25s ease}.tile:focus,.tile:hover{background-color:#dfdfe0;cursor:pointer}.tile:focus .tile-icon i,.tile:hover .tile-icon i{color:#bfc0c2}.tile .tile-icon{align-self:center}.tile .tile-icon i{font-size:80px;color:#cfd0d1}.tile .tile-details{width:100%}.tile .tile-details .title{font-size:20px;width:260px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.tile .tile-details .description{margin:4px 0;font-size:12px;line-height:16px;max-height:32px;height:32px;overflow:hidden;text-overflow:ellipsis}.tile .tile-details .actions{margin-bottom:-8px;width:100%}.tile .tile-details .actions .button-link{position:relative;font-size:12px;padding:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.tile .tile-details .actions .button-link:after{font-size:12px;margin-left:2px}.tile .tile-details .actions .mat-icon-button{font-size:24px;color:#525f6b}.tile.add-tile{background-color:transparent;color:#a8afb5;border:1px solid #bfc0c2;font-size:20px}.tile.add-tile .tile-icon i{font-size:48px}.tile.add-tile .tile-details,.tile.add-tile .tile-details .title{width:auto}.tile.add-tile:hover{color:#000;background-color:#f7f7f7;border:1px solid #dfdfe0;opacity:.75;cursor:pointer}.tile.add-tile:hover .tile-icon i{color:#525f6b}`],
            },] },
];
/** @nocollapse */
BciTileComponent.ctorParameters = () => [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3RpbGUvdGlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQy9FLE1BQU07SUFVSjt1QkFMbUIsS0FBSztzQkFHYyxJQUFJLFlBQVksRUFBRTtLQUd2RDs7OztJQUVELFFBQVE7S0FFUDs7Ozs7SUFFRCxhQUFhLENBQUMsTUFBYTtRQUN6QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hCOzs7WUF4REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E0Qlg7Z0JBQ0MsTUFBTSxFQUFFLENBQUM7OzIyQ0FFZzJDLENBQUM7YUFDMzJDOzs7OztvQkFFRSxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSztpQ0FDTCxLQUFLO3NCQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxLQUFLO3FCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLXRpbGUnLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48ZGl2IGNsYXNzPVwidGlsZVwiIFtuZ0NsYXNzXT1cInsnYWRkLXRpbGUnOiBhZGRUaWxlfVwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIxNnB4XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cbiAgPGRpdiBjbGFzcz1cInRpbGUtaWNvblwiPlxuICAgIDxpIGNsYXNzPVwiQm9zY2gtSWMge3sgaWNvbk5hbWUgfHwgJ0Jvc2NoLUljLWFkZCcgfX1cIj48L2k+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidGlsZS1kZXRhaWxzXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwiY2VudGVyIHN0YXJ0XCI+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgKm5nSWY9XCIhYWRkVGlsZVwiIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAge3sgZGVzY3JpcHRpb24gfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiAqbmdJZj1cIiFhZGRUaWxlXCIgY2xhc3M9XCJhY3Rpb25zXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBzdGFydFwiPlxuICAgICAgPGRpdj48YSBjbGFzcz1cImJ1dHRvbi1saW5rXCI+e3sgZGV0YWlsc0J1dHRvbkxhYmVsIH19PC9hPjwvZGl2PlxuXG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBocmVmPVwiI1wiICpuZ0lmPWNhbkV4ZWN1dGVBY3Rpb24gKGNsaWNrKT1cImV4ZWN1dGVBY3Rpb24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibWF0LWljb24tYnV0dG9uIEJvc2NoLUljIHt7YWN0aW9uSWNvbk5hbWV9fVwiPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi8udGlsZXttYXJnaW4tYm90dG9tOjE2cHg7YmFja2dyb3VuZC1jb2xvcjojZWZlZmYwO3BhZGRpbmc6MCAxNnB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDo0MDBweDtoZWlnaHQ6MTUwcHg7Y29sb3I6IzAwMDt0cmFuc2l0aW9uOmFsbCAuMjVzIGVhc2V9LnRpbGU6Zm9jdXMsLnRpbGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZGZkZmUwO2N1cnNvcjpwb2ludGVyfS50aWxlOmZvY3VzIC50aWxlLWljb24gaSwudGlsZTpob3ZlciAudGlsZS1pY29uIGl7Y29sb3I6I2JmYzBjMn0udGlsZSAudGlsZS1pY29ue2FsaWduLXNlbGY6Y2VudGVyfS50aWxlIC50aWxlLWljb24gaXtmb250LXNpemU6ODBweDtjb2xvcjojY2ZkMGQxfS50aWxlIC50aWxlLWRldGFpbHN7d2lkdGg6MTAwJX0udGlsZSAudGlsZS1kZXRhaWxzIC50aXRsZXtmb250LXNpemU6MjBweDt3aWR0aDoyNjBweDt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztvdmVyZmxvdzpoaWRkZW59LnRpbGUgLnRpbGUtZGV0YWlscyAuZGVzY3JpcHRpb257bWFyZ2luOjRweCAwO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjE2cHg7bWF4LWhlaWdodDozMnB4O2hlaWdodDozMnB4O292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfS50aWxlIC50aWxlLWRldGFpbHMgLmFjdGlvbnN7bWFyZ2luLWJvdHRvbTotOHB4O3dpZHRoOjEwMCV9LnRpbGUgLnRpbGUtZGV0YWlscyAuYWN0aW9ucyAuYnV0dG9uLWxpbmt7cG9zaXRpb246cmVsYXRpdmU7Zm9udC1zaXplOjEycHg7cGFkZGluZzowOy13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZH0udGlsZSAudGlsZS1kZXRhaWxzIC5hY3Rpb25zIC5idXR0b24tbGluazphZnRlcntmb250LXNpemU6MTJweDttYXJnaW4tbGVmdDoycHh9LnRpbGUgLnRpbGUtZGV0YWlscyAuYWN0aW9ucyAubWF0LWljb24tYnV0dG9ue2ZvbnQtc2l6ZToyNHB4O2NvbG9yOiM1MjVmNmJ9LnRpbGUuYWRkLXRpbGV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojYThhZmI1O2JvcmRlcjoxcHggc29saWQgI2JmYzBjMjtmb250LXNpemU6MjBweH0udGlsZS5hZGQtdGlsZSAudGlsZS1pY29uIGl7Zm9udC1zaXplOjQ4cHh9LnRpbGUuYWRkLXRpbGUgLnRpbGUtZGV0YWlscywudGlsZS5hZGQtdGlsZSAudGlsZS1kZXRhaWxzIC50aXRsZXt3aWR0aDphdXRvfS50aWxlLmFkZC10aWxlOmhvdmVye2NvbG9yOiMwMDA7YmFja2dyb3VuZC1jb2xvcjojZjdmN2Y3O2JvcmRlcjoxcHggc29saWQgI2RmZGZlMDtvcGFjaXR5Oi43NTtjdXJzb3I6cG9pbnRlcn0udGlsZS5hZGQtdGlsZTpob3ZlciAudGlsZS1pY29uIGl7Y29sb3I6IzUyNWY2Yn1gXSxcbn0pXG5leHBvcnQgY2xhc3MgQmNpVGlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRldGFpbHNCdXR0b25MYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBhZGRUaWxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFjdGlvbkljb25OYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbkV4ZWN1dGVBY3Rpb246IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBhY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIGV4ZWN1dGVBY3Rpb24oJGV2ZW50OiBFdmVudCkge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmFjdGlvbi5lbWl0KG51bGwpO1xuICB9XG5cbn1cbiJdfQ==