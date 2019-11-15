/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component } from '@angular/core';
import { BciLoaderService } from './bci-loader.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var BciLoaderComponent = /** @class */ (function () {
    function BciLoaderComponent(bciLoaderService) {
        this.bciLoaderService = bciLoaderService;
        this.show = false;
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    BciLoaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.bciLoaderService.loaderState.pipe(takeUntil(this.componentDestroyed$)).subscribe(function (state) {
            _this.show = state;
        });
    };
    /**
     * @return {?}
     */
    BciLoaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    };
    BciLoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-loader',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"loader-background-container\" *ngIf=\"show\">\n  <div class=\"loader-backdrop\"></div>\n  <div class=\"loader-overlay\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <img src=\"./assets/img/loading.gif\">\n  </div>\n</div>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.loader-hidden{visibility:hidden}.loader-overlay{left:0;right:0;top:0;bottom:0;position:absolute;z-index:10000;contain:strict}.loader-backdrop{left:0;top:0;position:absolute;z-index:2;display:block;width:100%;height:100%;background-color:#000;opacity:.3;-webkit-transform:translateZ(0);transform:translateZ(0)}"],
                },] },
    ];
    /** @nocollapse */
    BciLoaderComponent.ctorParameters = function () { return [
        { type: BciLoaderService }
    ]; };
    return BciLoaderComponent;
}());
export { BciLoaderComponent };
if (false) {
    /** @type {?} */
    BciLoaderComponent.prototype.show;
    /** @type {?} */
    BciLoaderComponent.prototype.componentDestroyed$;
    /** @type {?} */
    BciLoaderComponent.prototype.bciLoaderService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLWxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9sYXlvdXQvYmNpLWxvYWRlci9iY2ktbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBd0J6Qyw0QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBSHhDLEtBQUs7bUNBQ1csSUFBSSxPQUFPLEVBQUU7S0FHMUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQWM7WUFDbkcsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDbkIsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3JDOztnQkFsQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsd1dBVVg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsZ2FBRStTLENBQUM7aUJBQzFUOzs7O2dCQXBCUSxnQkFBZ0I7OzZCQUx6Qjs7U0EwQmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY2lMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9iY2ktbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktbG9hZGVyJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPGRpdiBjbGFzcz1cImxvYWRlci1iYWNrZ3JvdW5kLWNvbnRhaW5lclwiICpuZ0lmPVwic2hvd1wiPlxuICA8ZGl2IGNsYXNzPVwibG9hZGVyLWJhY2tkcm9wXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJsb2FkZXItb3ZlcmxheVwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cbiAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltZy9sb2FkaW5nLmdpZlwiPlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovLmxvYWRlci1oaWRkZW57dmlzaWJpbGl0eTpoaWRkZW59LmxvYWRlci1vdmVybGF5e2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMDA7Y29udGFpbjpzdHJpY3R9LmxvYWRlci1iYWNrZHJvcHtsZWZ0OjA7dG9wOjA7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7b3BhY2l0eTouMzstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBCY2lMb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIHNob3cgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJjaUxvYWRlclNlcnZpY2U6IEJjaUxvYWRlclNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmNpTG9hZGVyU2VydmljZS5sb2FkZXJTdGF0ZS5waXBlKHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpKS5zdWJzY3JpYmUoKHN0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLnNob3cgPSBzdGF0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxufVxuIl19