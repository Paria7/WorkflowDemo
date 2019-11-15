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
var BciHeaderComponent = /** @class */ (function () {
    function BciHeaderComponent(router, breadcrumbService) {
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this.header = '';
        this.logoRoute = '/';
    }
    /**
     * @return {?}
     */
    BciHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    BciHeaderComponent.prototype.onLogoClicked = /**
     * @return {?}
     */
    function () {
        // TODO: Cursor:pointer when logoLink or logoRoute is set
        if (this.logoRoute) {
            this.router.navigate([this.logoRoute]);
        }
    };
    BciHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-header',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"bci-header-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n  <ng-container *ngIf=\"header?.length;\">\n    <div class=\"header-title\">{{header}}</div>\n  </ng-container>\n  <div class=\"header-content\">\n    <bci-breadcrumbs fxHide.lt-md=\"true\" role=\"navigation\" aria-label=\"breadcrumbs\">\n      <bci-breadcrumb *ngFor=\"let breadcrumb of breadcrumbService.breadcrumbs | async; let last = last\"\n                      [attr.aria-current]=\"last ? 'page' : false\"\n                      [title]=\"breadcrumb.title\"\n                      [url]=\"breadcrumb.url\">\n      </bci-breadcrumb>\n    </bci-breadcrumbs>\n    <ng-content></ng-content>\n  </div>\n  <a class=\"header-logo\" (click)=\"onLogoClicked()\">\n    <img src=\"./assets/img/bosch-logo-only.svg\" alt=\"Bosch Invented For Life Logo\">\n  </a>\n</div>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.supergraphic{z-index:10}.bci-header-container{padding:0 32px;height:64px;border-width:0 0 1px;border-color:#dfdfe0;border-style:solid;border-radius:0}.bci-header-container .header-title{margin-right:32px;font-family:Bosch-Sans;font-weight:300;font-size:28px}.bci-header-container .header-content{margin-right:32px}.bci-header-container .header-logo{margin-left:auto;height:100%;width:140px}.bci-header-container .header-logo img{height:100%;width:140px}"]
                },] },
    ];
    /** @nocollapse */
    BciHeaderComponent.ctorParameters = function () { return [
        { type: Router },
        { type: BreadcrumbsService }
    ]; };
    BciHeaderComponent.propDecorators = {
        header: [{ type: Input }],
        logoRoute: [{ type: Input }]
    };
    return BciHeaderComponent;
}());
export { BciHeaderComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9sYXlvdXQvYmNpLWhlYWRlci9iY2ktaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQW9DN0QsNEJBQW9CLE1BQWMsRUFBUyxpQkFBcUM7UUFBNUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7c0JBSHZELEVBQUU7eUJBQ0MsR0FBRztLQUc5Qjs7OztJQUVELHFDQUFROzs7SUFBUjtLQUNDOzs7O0lBRUQsMENBQWE7OztJQUFiOztRQUVFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDeEM7S0FDRjs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLGc5QkFzQlg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsZ2pCQUUrYixDQUFDO2lCQUMxYzs7OztnQkEvQlEsTUFBTTtnQkFDTixrQkFBa0I7Ozt5QkFpQ3hCLEtBQUs7NEJBQ0wsS0FBSzs7NkJBeENSOztTQXFDYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJyZWFkY3J1bWJzU2VydmljZSB9IGZyb20gJy4uLy4uL2JyZWFkY3J1bWJzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPGRpdiBjbGFzcz1cImJjaS1oZWFkZXItY29udGFpbmVyXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhlYWRlcj8ubGVuZ3RoO1wiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGVcIj57e2hlYWRlcn19PC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRlbnRcIj5cbiAgICA8YmNpLWJyZWFkY3J1bWJzIGZ4SGlkZS5sdC1tZD1cInRydWVcIiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJicmVhZGNydW1ic1wiPlxuICAgICAgPGJjaS1icmVhZGNydW1iICpuZ0Zvcj1cImxldCBicmVhZGNydW1iIG9mIGJyZWFkY3J1bWJTZXJ2aWNlLmJyZWFkY3J1bWJzIHwgYXN5bmM7IGxldCBsYXN0ID0gbGFzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jdXJyZW50XT1cImxhc3QgPyAncGFnZScgOiBmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImJyZWFkY3J1bWIudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFt1cmxdPVwiYnJlYWRjcnVtYi51cmxcIj5cbiAgICAgIDwvYmNpLWJyZWFkY3J1bWI+XG4gICAgPC9iY2ktYnJlYWRjcnVtYnM+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgPGEgY2xhc3M9XCJoZWFkZXItbG9nb1wiIChjbGljayk9XCJvbkxvZ29DbGlja2VkKClcIj5cbiAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltZy9ib3NjaC1sb2dvLW9ubHkuc3ZnXCIgYWx0PVwiQm9zY2ggSW52ZW50ZWQgRm9yIExpZmUgTG9nb1wiPlxuICA8L2E+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLy5zdXBlcmdyYXBoaWN7ei1pbmRleDoxMH0uYmNpLWhlYWRlci1jb250YWluZXJ7cGFkZGluZzowIDMycHg7aGVpZ2h0OjY0cHg7Ym9yZGVyLXdpZHRoOjAgMCAxcHg7Ym9yZGVyLWNvbG9yOiNkZmRmZTA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6MH0uYmNpLWhlYWRlci1jb250YWluZXIgLmhlYWRlci10aXRsZXttYXJnaW4tcmlnaHQ6MzJweDtmb250LWZhbWlseTpCb3NjaC1TYW5zO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MjhweH0uYmNpLWhlYWRlci1jb250YWluZXIgLmhlYWRlci1jb250ZW50e21hcmdpbi1yaWdodDozMnB4fS5iY2ktaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLWxvZ297bWFyZ2luLWxlZnQ6YXV0bztoZWlnaHQ6MTAwJTt3aWR0aDoxNDBweH0uYmNpLWhlYWRlci1jb250YWluZXIgLmhlYWRlci1sb2dvIGltZ3toZWlnaHQ6MTAwJTt3aWR0aDoxNDBweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBCY2lIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXIgPSAnJztcbiAgQElucHV0KCkgcHVibGljIGxvZ29Sb3V0ZSA9ICcvJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgYnJlYWRjcnVtYlNlcnZpY2U6IEJyZWFkY3J1bWJzU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkxvZ29DbGlja2VkKCkge1xuICAgIC8vIFRPRE86IEN1cnNvcjpwb2ludGVyIHdoZW4gbG9nb0xpbmsgb3IgbG9nb1JvdXRlIGlzIHNldFxuICAgIGlmICh0aGlzLmxvZ29Sb3V0ZSkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMubG9nb1JvdXRlXSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==