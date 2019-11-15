/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbsService } from '../../breadcrumbs.service';
export class BciHeaderComponent {
    /**
     * @param {?} router
     * @param {?} breadcrumbService
     */
    constructor(router, breadcrumbService) {
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this.header = '';
        this.logoRoute = '/';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onLogoClicked() {
        // TODO: Cursor:pointer when logoLink or logoRoute is set
        if (this.logoRoute) {
            this.router.navigate([this.logoRoute]);
        }
    }
}
BciHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-header',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<div class="bci-header-container" fxLayout="row" fxLayoutAlign="space-between center">
  <ng-container *ngIf="header?.length;">
    <div class="header-title">{{header}}</div>
  </ng-container>
  <div class="header-content">
    <bci-breadcrumbs fxHide.lt-md="true" role="navigation" aria-label="breadcrumbs">
      <bci-breadcrumb *ngFor="let breadcrumb of breadcrumbService.breadcrumbs | async; let last = last"
                      [attr.aria-current]="last ? 'page' : false"
                      [title]="breadcrumb.title"
                      [url]="breadcrumb.url">
      </bci-breadcrumb>
    </bci-breadcrumbs>
    <ng-content></ng-content>
  </div>
  <a class="header-logo" (click)="onLogoClicked()">
    <img src="./assets/img/bosch-logo-only.svg" alt="Bosch Invented For Life Logo">
  </a>
</div>
`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */.supergraphic{z-index:10}.bci-header-container{padding:0 32px;height:64px;border-width:0 0 1px;border-color:#dfdfe0;border-style:solid;border-radius:0}.bci-header-container .header-title{margin-right:32px;font-family:Bosch-Sans;font-weight:300;font-size:28px}.bci-header-container .header-content{margin-right:32px}.bci-header-container .header-logo{margin-left:auto;height:100%;width:140px}.bci-header-container .header-logo img{height:100%;width:140px}`]
            },] },
];
/** @nocollapse */
BciHeaderComponent.ctorParameters = () => [
    { type: Router },
    { type: BreadcrumbsService }
];
BciHeaderComponent.propDecorators = {
    header: [{ type: Input }],
    logoRoute: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BciHeaderComponent.prototype.header;
    /** @type {?} */
    BciHeaderComponent.prototype.logoRoute;
    /** @type {?} */
    BciHeaderComponent.prototype.router;
    /** @type {?} */
    BciHeaderComponent.prototype.breadcrumbService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9sYXlvdXQvYmNpLWhlYWRlci9iY2ktaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBK0IvRCxNQUFNOzs7OztJQUtKLFlBQW9CLE1BQWMsRUFBUyxpQkFBcUM7UUFBNUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7c0JBSHZELEVBQUU7eUJBQ0MsR0FBRztLQUc5Qjs7OztJQUVELFFBQVE7S0FDUDs7OztJQUVELGFBQWE7O1FBRVgsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN4QztLQUNGOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FzQlg7Z0JBQ0MsTUFBTSxFQUFFLENBQUM7OzBjQUUrYixDQUFDO2FBQzFjOzs7O1lBL0JRLE1BQU07WUFDTixrQkFBa0I7OztxQkFpQ3hCLEtBQUs7d0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQnJlYWRjcnVtYnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYnJlYWRjcnVtYnMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48ZGl2IGNsYXNzPVwiYmNpLWhlYWRlci1jb250YWluZXJcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGVhZGVyPy5sZW5ndGg7XCI+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZVwiPnt7aGVhZGVyfX08L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGVudFwiPlxuICAgIDxiY2ktYnJlYWRjcnVtYnMgZnhIaWRlLmx0LW1kPVwidHJ1ZVwiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJzXCI+XG4gICAgICA8YmNpLWJyZWFkY3J1bWIgKm5nRm9yPVwibGV0IGJyZWFkY3J1bWIgb2YgYnJlYWRjcnVtYlNlcnZpY2UuYnJlYWRjcnVtYnMgfCBhc3luYzsgbGV0IGxhc3QgPSBsYXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWN1cnJlbnRdPVwibGFzdCA/ICdwYWdlJyA6IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiYnJlYWRjcnVtYi50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW3VybF09XCJicmVhZGNydW1iLnVybFwiPlxuICAgICAgPC9iY2ktYnJlYWRjcnVtYj5cbiAgICA8L2JjaS1icmVhZGNydW1icz5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICA8YSBjbGFzcz1cImhlYWRlci1sb2dvXCIgKGNsaWNrKT1cIm9uTG9nb0NsaWNrZWQoKVwiPlxuICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1nL2Jvc2NoLWxvZ28tb25seS5zdmdcIiBhbHQ9XCJCb3NjaCBJbnZlbnRlZCBGb3IgTGlmZSBMb2dvXCI+XG4gIDwvYT5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLnN1cGVyZ3JhcGhpY3t6LWluZGV4OjEwfS5iY2ktaGVhZGVyLWNvbnRhaW5lcntwYWRkaW5nOjAgMzJweDtoZWlnaHQ6NjRweDtib3JkZXItd2lkdGg6MCAwIDFweDtib3JkZXItY29sb3I6I2RmZGZlMDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czowfS5iY2ktaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLXRpdGxle21hcmdpbi1yaWdodDozMnB4O2ZvbnQtZmFtaWx5OkJvc2NoLVNhbnM7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc2l6ZToyOHB4fS5iY2ktaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLWNvbnRlbnR7bWFyZ2luLXJpZ2h0OjMycHh9LmJjaS1oZWFkZXItY29udGFpbmVyIC5oZWFkZXItbG9nb3ttYXJnaW4tbGVmdDphdXRvO2hlaWdodDoxMDAlO3dpZHRoOjE0MHB4fS5iY2ktaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLWxvZ28gaW1ne2hlaWdodDoxMDAlO3dpZHRoOjE0MHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIEJjaUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcHVibGljIGhlYWRlciA9ICcnO1xuICBASW5wdXQoKSBwdWJsaWMgbG9nb1JvdXRlID0gJy8nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBicmVhZGNydW1iU2VydmljZTogQnJlYWRjcnVtYnNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uTG9nb0NsaWNrZWQoKSB7XG4gICAgLy8gVE9ETzogQ3Vyc29yOnBvaW50ZXIgd2hlbiBsb2dvTGluayBvciBsb2dvUm91dGUgaXMgc2V0XG4gICAgaWYgKHRoaXMubG9nb1JvdXRlKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5sb2dvUm91dGVdKTtcbiAgICB9XG4gIH1cblxufVxuIl19