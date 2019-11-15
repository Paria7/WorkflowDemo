/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import * as tslib_1 from "tslib";
import { Component, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommandbarItemComponent } from '../item/commandbar-item.component';
var CommandbarActionsComponent = /** @class */ (function () {
    function CommandbarActionsComponent(observableMedia) {
        this.observableMedia = observableMedia;
        this.visibleItems = [];
        this.hiddenItems = [];
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    CommandbarActionsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CommandbarActionsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    };
    /**
     * @return {?}
     */
    CommandbarActionsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // listen to changes of viewport size
        merge(this.observableMedia.asObservable(), this.items.changes)
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(function () {
            _this.updateView();
        });
    };
    /**
     * @return {?}
     */
    CommandbarActionsComponent.prototype.updateView = /**
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
    CommandbarActionsComponent.prototype.trueOrMatchesMediaState = /**
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
    CommandbarActionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-commandbar-actions',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<!-- Actions -->\n<ng-container *ngFor=\"let item of visibleItems\">\n  <ng-container *ngTemplateOutlet=\"item?.template\"></ng-container>\n</ng-container>\n\n<ng-container *ngIf=\"hiddenItems.length > 0\">\n  <!-- More-Actions-Button -->\n  <bci-commandbar-button [render]=\"true\"\n                         icon=\"Bosch-Ic-show-more-vertical\"\n                         aria-label=\"more actions\"\n                         [matMenuTriggerFor]=\"moreActionsMenu\">\n  </bci-commandbar-button>\n</ng-container>\n\n<!-- More Actions Menu -->\n<mat-menu #moreActionsMenu=\"matMenu\" [class]=\"'commandbar-more-action-menu'\">\n  <ng-container *ngFor=\"let item of hiddenItems\">\n    <div mat-menu-item>\n      <ng-container *ngTemplateOutlet=\"item?.template\"></ng-container>\n    </div>\n  </ng-container>\n</mat-menu>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{display:inherit;vertical-align:inherit}::ng-deep .mat-menu-panel.commandbar-more-action-menu{min-width:0}::ng-deep .commandbar-more-action-menu .mat-menu-item{padding:2px;line-height:1;height:auto}"]
                },] },
    ];
    /** @nocollapse */
    CommandbarActionsComponent.ctorParameters = function () { return [
        { type: ObservableMedia }
    ]; };
    CommandbarActionsComponent.propDecorators = {
        items: [{ type: ContentChildren, args: [forwardRef(function () { return CommandbarItemComponent; }),] }]
    };
    return CommandbarActionsComponent;
}());
export { CommandbarActionsComponent };
if (false) {
    /** @type {?} */
    CommandbarActionsComponent.prototype.items;
    /** @type {?} */
    CommandbarActionsComponent.prototype.visibleItems;
    /** @type {?} */
    CommandbarActionsComponent.prototype.hiddenItems;
    /** @type {?} */
    CommandbarActionsComponent.prototype.componentDestroyed$;
    /** @type {?} */
    CommandbarActionsComponent.prototype.observableMedia;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbW1hbmRiYXIvYWN0aW9ucy9hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztJQTRDMUUsb0NBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjs0QkFMSCxFQUFFOzJCQUNILEVBQUU7bUNBRXBCLElBQUksT0FBTyxFQUFFO0tBRzFDOzs7O0lBRUQsNkNBQVE7OztJQUFSO0tBQ0M7Ozs7SUFFRCxnREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3JDOzs7O0lBRUQsdURBQWtCOzs7SUFBbEI7UUFBQSxpQkFRQzs7UUFOQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUMzRCxJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQ3JDLFNBQVMsQ0FBQztZQUNULEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQixDQUFDLENBQUM7S0FDTjs7OztJQUVPLCtDQUFVOzs7Ozs7UUFDaEIsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDOztRQUNuQixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFoRixDQUFnRixDQUFDLENBQUM7UUFFN0csSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRXhCLEFBREEsa0RBQWtEO1lBQ2xELENBQUEsS0FBQSxJQUFJLENBQUMsWUFBWSxDQUFBLENBQUMsSUFBSSw0QkFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFFO1NBQ2pEO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixDQUFBLEtBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQSxDQUFDLElBQUksNEJBQUksT0FBTyxHQUFFO1lBQ25DLENBQUEsS0FBQSxJQUFJLENBQUMsV0FBVyxDQUFBLENBQUMsSUFBSSw0QkFBSSxNQUFNLEdBQUU7U0FDbEM7Ozs7Ozs7SUFHSyw0REFBdUI7Ozs7Y0FBQyxLQUF1QjtRQUNyRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNiO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNkO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkU7OztnQkF4RkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSx3NkJBMEJYO29CQUNDLE1BQU0sRUFBRSxDQUFDLHFUQUVvTSxDQUFDO2lCQUMvTTs7OztnQkFyQ1EsZUFBZTs7O3dCQXdDckIsZUFBZSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsdUJBQXVCLEVBQXZCLENBQXVCLENBQUM7O3FDQTdDNUQ7O1NBMkNhLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIGZvcndhcmRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGVNZWRpYSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb21tYW5kYmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2l0ZW0vY29tbWFuZGJhci1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1jb21tYW5kYmFyLWFjdGlvbnMnLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48IS0tIEFjdGlvbnMgLS0+XG48bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHZpc2libGVJdGVtc1wiPlxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbT8udGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiaGlkZGVuSXRlbXMubGVuZ3RoID4gMFwiPlxuICA8IS0tIE1vcmUtQWN0aW9ucy1CdXR0b24gLS0+XG4gIDxiY2ktY29tbWFuZGJhci1idXR0b24gW3JlbmRlcl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiQm9zY2gtSWMtc2hvdy1tb3JlLXZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibW9yZSBhY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbbWF0TWVudVRyaWdnZXJGb3JdPVwibW9yZUFjdGlvbnNNZW51XCI+XG4gIDwvYmNpLWNvbW1hbmRiYXItYnV0dG9uPlxuPC9uZy1jb250YWluZXI+XG5cbjwhLS0gTW9yZSBBY3Rpb25zIE1lbnUgLS0+XG48bWF0LW1lbnUgI21vcmVBY3Rpb25zTWVudT1cIm1hdE1lbnVcIiBbY2xhc3NdPVwiJ2NvbW1hbmRiYXItbW9yZS1hY3Rpb24tbWVudSdcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBoaWRkZW5JdGVtc1wiPlxuICAgIDxkaXYgbWF0LW1lbnUtaXRlbT5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtPy50ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbWF0LW1lbnU+XG5gLFxuICBzdHlsZXM6IFtgLyohXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi86aG9zdHtkaXNwbGF5OmluaGVyaXQ7dmVydGljYWwtYWxpZ246aW5oZXJpdH06Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsLmNvbW1hbmRiYXItbW9yZS1hY3Rpb24tbWVudXttaW4td2lkdGg6MH06Om5nLWRlZXAgLmNvbW1hbmRiYXItbW9yZS1hY3Rpb24tbWVudSAubWF0LW1lbnUtaXRlbXtwYWRkaW5nOjJweDtsaW5lLWhlaWdodDoxO2hlaWdodDphdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1hbmRiYXJBY3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBDb21tYW5kYmFySXRlbUNvbXBvbmVudCkpIGl0ZW1zOiBRdWVyeUxpc3Q8Q29tbWFuZGJhckl0ZW1Db21wb25lbnQ+O1xuXG4gIHB1YmxpYyB2aXNpYmxlSXRlbXM6IENvbW1hbmRiYXJJdGVtQ29tcG9uZW50W10gPSBbXTtcbiAgcHVibGljIGhpZGRlbkl0ZW1zOiBDb21tYW5kYmFySXRlbUNvbXBvbmVudFtdID0gW107XG5cbiAgcHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9ic2VydmFibGVNZWRpYTogT2JzZXJ2YWJsZU1lZGlhKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gbGlzdGVuIHRvIGNoYW5nZXMgb2Ygdmlld3BvcnQgc2l6ZVxuICAgIG1lcmdlKHRoaXMub2JzZXJ2YWJsZU1lZGlhLmFzT2JzZXJ2YWJsZSgpLCB0aGlzLml0ZW1zLmNoYW5nZXMpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmlldygpIHtcbiAgICBjb25zdCB2aXNpYmxlID0gW107XG4gICAgY29uc3QgaGlkZGVuID0gW107XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy50cnVlT3JNYXRjaGVzTWVkaWFTdGF0ZShpdGVtLmhpZGUpID8gaGlkZGVuLnB1c2goaXRlbSkgOiB2aXNpYmxlLnB1c2goaXRlbSkpO1xuXG4gICAgdGhpcy52aXNpYmxlSXRlbXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhpZGRlbkl0ZW1zLmxlbmd0aCA9IDA7XG4gICAgaWYgKGhpZGRlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIG5vIG1vcmUtYWN0aW9ucy1tZW51IGZvciBhIHNpbmdsZSBoaWRkZW4gYWN0aW9uXG4gICAgICB0aGlzLnZpc2libGVJdGVtcy5wdXNoKC4uLnRoaXMuaXRlbXMudG9BcnJheSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXNpYmxlSXRlbXMucHVzaCguLi52aXNpYmxlKTtcbiAgICAgIHRoaXMuaGlkZGVuSXRlbXMucHVzaCguLi5oaWRkZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJ1ZU9yTWF0Y2hlc01lZGlhU3RhdGUodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB0aGlzLm9ic2VydmFibGVNZWRpYS5pc0FjdGl2ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=