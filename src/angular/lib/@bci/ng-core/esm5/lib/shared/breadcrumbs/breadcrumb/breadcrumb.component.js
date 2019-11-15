/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { ChangeDetectorRef, Component, HostBinding, Input } from '@angular/core';
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(cdr) {
        this.cdr = cdr;
        this.titleAttribute = undefined;
        this._omitted = false;
    }
    Object.defineProperty(BreadcrumbComponent.prototype, "omitted", {
        get: /**
         * @return {?}
         */
        function () {
            return this._omitted;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._omitted = value;
            // handle ExpressionChangedAfterChecked issues for title
            setTimeout(function () { return _this.titleAttribute = _this.omitted ? _this.title : undefined; });
            // ...and displayed title
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-breadcrumb',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<a *ngIf=\"url !== undefined\" [routerLink]=\"url\">{{omitted ? '\u2026' : title}}</a>\n<ng-container *ngIf=\"url === undefined\">{{omitted ? '\u2026' : title}}</ng-container>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    BreadcrumbComponent.propDecorators = {
        title: [{ type: Input }],
        url: [{ type: Input }],
        titleAttribute: [{ type: HostBinding, args: ['attr.title',] }],
        omitted: [{ type: Input }]
    };
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.title;
    /** @type {?} */
    BreadcrumbComponent.prototype.url;
    /** @type {?} */
    BreadcrumbComponent.prototype.titleAttribute;
    /** @type {?} */
    BreadcrumbComponent.prototype._omitted;
    /** @type {?} */
    BreadcrumbComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFvQy9FLDZCQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjs4QkFsQkUsU0FBUzt3QkFFbEMsS0FBSztLQWlCdkI7SUFmRCxzQkFBSSx3Q0FBTzs7OztRQUFYO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Ozs7O1FBRUQsVUFDWSxLQUFLO1lBRGpCLGlCQVFDO1lBTkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7O1lBR3RCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQTNELENBQTJELENBQUMsQ0FBQzs7WUFFOUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUMxQjs7O09BVkE7O2dCQXRCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLG1TQU1YO29CQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7OztnQkFaUSxpQkFBaUI7Ozt3QkFldkIsS0FBSztzQkFDTCxLQUFLO2lDQUVMLFdBQVcsU0FBQyxZQUFZOzBCQVF4QixLQUFLOzs4QkE5QlI7O1NBaUJhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1icmVhZGNydW1iJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPGEgKm5nSWY9XCJ1cmwgIT09IHVuZGVmaW5lZFwiIFtyb3V0ZXJMaW5rXT1cInVybFwiPnt7b21pdHRlZCA/ICfigKYnIDogdGl0bGV9fTwvYT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJ1cmwgPT09IHVuZGVmaW5lZFwiPnt7b21pdHRlZCA/ICfigKYnIDogdGl0bGV9fTwvbmctY29udGFpbmVyPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci50aXRsZScpIHRpdGxlQXR0cmlidXRlID0gdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgX29taXR0ZWQgPSBmYWxzZTtcblxuICBnZXQgb21pdHRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb21pdHRlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBvbWl0dGVkKHZhbHVlKSB7XG4gICAgdGhpcy5fb21pdHRlZCA9IHZhbHVlO1xuXG4gICAgLy8gaGFuZGxlIEV4cHJlc3Npb25DaGFuZ2VkQWZ0ZXJDaGVja2VkIGlzc3VlcyBmb3IgdGl0bGVcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudGl0bGVBdHRyaWJ1dGUgPSB0aGlzLm9taXR0ZWQgPyB0aGlzLnRpdGxlIDogdW5kZWZpbmVkKTtcbiAgICAvLyAuLi5hbmQgZGlzcGxheWVkIHRpdGxlXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cbn1cbiJdfQ==