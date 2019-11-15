/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, HostBinding, Input } from '@angular/core';
export class SidePanelItemComponent {
    constructor() {
        this.fixed = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SidePanelItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-side-panel-item',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<!--<div class="side-panel-item">
  <h4>{{ title }}</h4>
  <ng-content></ng-content>
</div>-->
<mat-card class="side-panel-item">
  <mat-card-header class="fixed-flex-item">
    <mat-card-title><h5>{{ title }}</h5></mat-card-title>
  </mat-card-header>
  <mat-card-content class="scroll-container-vertical">
    <ng-content></ng-content>
  </mat-card-content>
</mat-card>
`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */:host{margin:15px 0;overflow:hidden;display:flex}:host.fixed-flex-item{flex:0 0 auto}.fixed-flex-item{flex:0 0 auto}.side-panel-item{display:flex;flex-direction:column;flex:1 1 auto}.scroll-container-vertical{overflow-y:auto}`]
            },] },
];
/** @nocollapse */
SidePanelItemComponent.ctorParameters = () => [];
SidePanelItemComponent.propDecorators = {
    title: [{ type: Input }],
    fixed: [{ type: HostBinding, args: ['class.fixed-flex-item',] }, { type: Input }]
};
if (false) {
    /** @type {?} */
    SidePanelItemComponent.prototype.title;
    /** @type {?} */
    SidePanelItemComponent.prototype.fixed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2lkZS1wYW5lbC1pdGVtL3NpZGUtcGFuZWwtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQXlCdEUsTUFBTTtJQU1KO3FCQUZpQixLQUFLO0tBR3JCOzs7O0lBRUQsUUFBUTtLQUNQOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztDQWdCWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQzs7cU9BRTBOLENBQUM7YUFDck87Ozs7O29CQUdFLEtBQUs7b0JBQ0wsV0FBVyxTQUFDLHVCQUF1QixjQUNuQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1zaWRlLXBhbmVsLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48IS0tPGRpdiBjbGFzcz1cInNpZGUtcGFuZWwtaXRlbVwiPlxuICA8aDQ+e3sgdGl0bGUgfX08L2g0PlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj4tLT5cbjxtYXQtY2FyZCBjbGFzcz1cInNpZGUtcGFuZWwtaXRlbVwiPlxuICA8bWF0LWNhcmQtaGVhZGVyIGNsYXNzPVwiZml4ZWQtZmxleC1pdGVtXCI+XG4gICAgPG1hdC1jYXJkLXRpdGxlPjxoNT57eyB0aXRsZSB9fTwvaDU+PC9tYXQtY2FyZC10aXRsZT5cbiAgPC9tYXQtY2FyZC1oZWFkZXI+XG4gIDxtYXQtY2FyZC1jb250ZW50IGNsYXNzPVwic2Nyb2xsLWNvbnRhaW5lci12ZXJ0aWNhbFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLzpob3N0e21hcmdpbjoxNXB4IDA7b3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6ZmxleH06aG9zdC5maXhlZC1mbGV4LWl0ZW17ZmxleDowIDAgYXV0b30uZml4ZWQtZmxleC1pdGVte2ZsZXg6MCAwIGF1dG99LnNpZGUtcGFuZWwtaXRlbXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXg6MSAxIGF1dG99LnNjcm9sbC1jb250YWluZXItdmVydGljYWx7b3ZlcmZsb3cteTphdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVQYW5lbEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZml4ZWQtZmxleC1pdGVtJylcbiAgQElucHV0KCkgZml4ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==