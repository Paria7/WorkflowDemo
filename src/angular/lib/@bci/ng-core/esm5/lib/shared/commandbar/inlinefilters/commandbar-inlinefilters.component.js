/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import * as tslib_1 from "tslib";
import { Component, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { CommandbarInlinefilterComponent } from '../inlinefilter/commandbar-inlinefilter.component';
import { merge, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ObservableMedia } from '@angular/flex-layout';
var CommandbarInlinefiltersComponent = /** @class */ (function () {
    function CommandbarInlinefiltersComponent(observableMedia) {
        this.observableMedia = observableMedia;
        this.visibleItems = [];
        this.hiddenItems = [];
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    CommandbarInlinefiltersComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CommandbarInlinefiltersComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    };
    /**
     * @return {?}
     */
    CommandbarInlinefiltersComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // listen to changes of viewport size
        merge(this.observableMedia.asObservable(), this.items.changes, of(true))
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(function () {
            _this.updateView();
        });
    };
    /**
     * @return {?}
     */
    CommandbarInlinefiltersComponent.prototype.updateView = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var visible = [];
        /** @type {?} */
        var hidden = [];
        this.items.forEach(function (item) { return _this.trueOrMatchesMediaState(item.hide) ? hidden.push(item) : visible.push(item); });
        this.visibleItems.length = 0;
        this.hiddenItems.length = 0;
        if (hidden.length === 1) {
            // no more-actions-menu for a single hidden action
            // no more-actions-menu for a single hidden action
            (_a = this.visibleItems).push.apply(_a, tslib_1.__spread(this.items.toArray()));
        }
        else {
            (_b = this.visibleItems).push.apply(_b, tslib_1.__spread(visible));
            (_c = this.hiddenItems).push.apply(_c, tslib_1.__spread(hidden));
        }
        var _a, _b, _c;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CommandbarInlinefiltersComponent.prototype.trueOrMatchesMediaState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === undefined) {
            return false;
        }
        else if (value === null) {
            return true;
        }
        else if (typeof value === 'boolean') {
            return value;
        }
        else {
            return value.length === 0 || this.observableMedia.isActive(value);
        }
    };
    CommandbarInlinefiltersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-commandbar-inlinefilters',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div fxLayout=\"row\">\n  <ng-container *ngFor=\"let item of visibleItems\">\n    <ng-container *ngTemplateOutlet=\"item?.template\"></ng-container>\n  </ng-container>\n</div>\n",
                    styles: [":host{vertical-align:middle;line-height:48px}"]
                },] },
    ];
    /** @nocollapse */
    CommandbarInlinefiltersComponent.ctorParameters = function () { return [
        { type: ObservableMedia }
    ]; };
    CommandbarInlinefiltersComponent.propDecorators = {
        items: [{ type: ContentChildren, args: [forwardRef(function () { return CommandbarInlinefilterComponent; }),] }]
    };
    return CommandbarInlinefiltersComponent;
}());
export { CommandbarInlinefiltersComponent };
if (false) {
    /** @type {?} */
    CommandbarInlinefiltersComponent.prototype.items;
    /** @type {?} */
    CommandbarInlinefiltersComponent.prototype.visibleItems;
    /** @type {?} */
    CommandbarInlinefiltersComponent.prototype.hiddenItems;
    /** @type {?} */
    CommandbarInlinefiltersComponent.prototype.componentDestroyed$;
    /** @type {?} */
    CommandbarInlinefiltersComponent.prototype.observableMedia;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZGJhci1pbmxpbmVmaWx0ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tbWFuZGJhci9pbmxpbmVmaWx0ZXJzL2NvbW1hbmRiYXItaW5saW5lZmlsdGVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkgsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDcEcsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBd0JyRCwwQ0FBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCOzRCQUxLLEVBQUU7MkJBQ0gsRUFBRTttQ0FFNUIsSUFBSSxPQUFPLEVBQUU7S0FHMUM7Ozs7SUFFRCxtREFBUTs7O0lBQVI7S0FDQzs7OztJQUVELHNEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDckM7Ozs7SUFFRCw2REFBa0I7OztJQUFsQjtRQUFBLGlCQVNDOztRQVBDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyRSxJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUNwQzthQUNBLFNBQVMsQ0FBQztZQUNULEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQixDQUFDLENBQUM7S0FDTjs7OztJQUVPLHFEQUFVOzs7Ozs7UUFDaEIsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDOztRQUNuQixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFoRixDQUFnRixDQUFDLENBQUM7UUFFN0csSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRXhCLEFBREEsa0RBQWtEO1lBQ2xELENBQUEsS0FBQSxJQUFJLENBQUMsWUFBWSxDQUFBLENBQUMsSUFBSSw0QkFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFFO1NBQ2pEO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixDQUFBLEtBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQSxDQUFDLElBQUksNEJBQUksT0FBTyxHQUFFO1lBQ25DLENBQUEsS0FBQSxJQUFJLENBQUMsV0FBVyxDQUFBLENBQUMsSUFBSSw0QkFBSSxNQUFNLEdBQUU7U0FDbEM7Ozs7Ozs7SUFHSyxrRUFBdUI7Ozs7Y0FBQyxLQUF1QjtRQUNyRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNiO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNkO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkU7OztnQkFyRUosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSxtU0FTWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQywrQ0FBK0MsQ0FBQztpQkFDMUQ7Ozs7Z0JBZlEsZUFBZTs7O3dCQWtCckIsZUFBZSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsK0JBQStCLEVBQS9CLENBQStCLENBQUM7OzJDQTFCcEU7O1NBd0JhLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIGZvcndhcmRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi9pbmxpbmVmaWx0ZXIvY29tbWFuZGJhci1pbmxpbmVmaWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IG1lcmdlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU1lZGlhIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktY29tbWFuZGJhci1pbmxpbmVmaWx0ZXJzJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPGRpdiBmeExheW91dD1cInJvd1wiPlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHZpc2libGVJdGVtc1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtPy50ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtsaW5lLWhlaWdodDo0OHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBDb21tYW5kYmFySW5saW5lZmlsdGVyQ29tcG9uZW50KSkgaXRlbXM6IFF1ZXJ5TGlzdDxDb21tYW5kYmFySW5saW5lZmlsdGVyQ29tcG9uZW50PjtcbiAgcHVibGljIHZpc2libGVJdGVtczogQ29tbWFuZGJhcklubGluZWZpbHRlckNvbXBvbmVudFtdID0gW107XG4gIHB1YmxpYyBoaWRkZW5JdGVtczogQ29tbWFuZGJhcklubGluZWZpbHRlckNvbXBvbmVudFtdID0gW107XG5cbiAgcHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9ic2VydmFibGVNZWRpYTogT2JzZXJ2YWJsZU1lZGlhKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gbGlzdGVuIHRvIGNoYW5nZXMgb2Ygdmlld3BvcnQgc2l6ZVxuICAgIG1lcmdlKHRoaXMub2JzZXJ2YWJsZU1lZGlhLmFzT2JzZXJ2YWJsZSgpLCB0aGlzLml0ZW1zLmNoYW5nZXMsIG9mKHRydWUpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmlldygpIHtcbiAgICBjb25zdCB2aXNpYmxlID0gW107XG4gICAgY29uc3QgaGlkZGVuID0gW107XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy50cnVlT3JNYXRjaGVzTWVkaWFTdGF0ZShpdGVtLmhpZGUpID8gaGlkZGVuLnB1c2goaXRlbSkgOiB2aXNpYmxlLnB1c2goaXRlbSkpO1xuXG4gICAgdGhpcy52aXNpYmxlSXRlbXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhpZGRlbkl0ZW1zLmxlbmd0aCA9IDA7XG4gICAgaWYgKGhpZGRlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIG5vIG1vcmUtYWN0aW9ucy1tZW51IGZvciBhIHNpbmdsZSBoaWRkZW4gYWN0aW9uXG4gICAgICB0aGlzLnZpc2libGVJdGVtcy5wdXNoKC4uLnRoaXMuaXRlbXMudG9BcnJheSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXNpYmxlSXRlbXMucHVzaCguLi52aXNpYmxlKTtcbiAgICAgIHRoaXMuaGlkZGVuSXRlbXMucHVzaCguLi5oaWRkZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJ1ZU9yTWF0Y2hlc01lZGlhU3RhdGUodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB0aGlzLm9ic2VydmFibGVNZWRpYS5pc0FjdGl2ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==