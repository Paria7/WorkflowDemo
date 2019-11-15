/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { CommandbarInlinefilterComponent } from '../inlinefilter/commandbar-inlinefilter.component';
import { merge, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ObservableMedia } from '@angular/flex-layout';
export class CommandbarInlinefiltersComponent {
    /**
     * @param {?} observableMedia
     */
    constructor(observableMedia) {
        this.observableMedia = observableMedia;
        this.visibleItems = [];
        this.hiddenItems = [];
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // listen to changes of viewport size
        merge(this.observableMedia.asObservable(), this.items.changes, of(true))
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(() => {
            this.updateView();
        });
    }
    /**
     * @return {?}
     */
    updateView() {
        /** @type {?} */
        const visible = [];
        /** @type {?} */
        const hidden = [];
        this.items.forEach(item => this.trueOrMatchesMediaState(item.hide) ? hidden.push(item) : visible.push(item));
        this.visibleItems.length = 0;
        this.hiddenItems.length = 0;
        if (hidden.length === 1) {
            // no more-actions-menu for a single hidden action
            this.visibleItems.push(...this.items.toArray());
        }
        else {
            this.visibleItems.push(...visible);
            this.hiddenItems.push(...hidden);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    trueOrMatchesMediaState(value) {
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
    }
}
CommandbarInlinefiltersComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-commandbar-inlinefilters',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<div fxLayout="row">
  <ng-container *ngFor="let item of visibleItems">
    <ng-container *ngTemplateOutlet="item?.template"></ng-container>
  </ng-container>
</div>
`,
                styles: [`:host{vertical-align:middle;line-height:48px}`]
            },] },
];
/** @nocollapse */
CommandbarInlinefiltersComponent.ctorParameters = () => [
    { type: ObservableMedia }
];
CommandbarInlinefiltersComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [forwardRef(() => CommandbarInlinefilterComponent),] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZGJhci1pbmxpbmVmaWx0ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tbWFuZGJhci9pbmxpbmVmaWx0ZXJzL2NvbW1hbmRiYXItaW5saW5lZmlsdGVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWdCdkQsTUFBTTs7OztJQVFKLFlBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjs0QkFMSyxFQUFFOzJCQUNILEVBQUU7bUNBRTVCLElBQUksT0FBTyxFQUFFO0tBRzFDOzs7O0lBRUQsUUFBUTtLQUNQOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDckM7Ozs7SUFFRCxrQkFBa0I7O1FBRWhCLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyRSxJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUNwQzthQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO0tBQ047Ozs7SUFFTyxVQUFVOztRQUNoQixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7O1FBQ25CLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUU3RyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFFeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDakQ7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUNsQzs7Ozs7O0lBR0ssdUJBQXVCLENBQUMsS0FBdUI7UUFDckQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNkO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDYjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDZDtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25FOzs7O1lBckVKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUU7Ozs7Ozs7OztDQVNYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLCtDQUErQyxDQUFDO2FBQzFEOzs7O1lBZlEsZUFBZTs7O29CQWtCckIsZUFBZSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIGZvcndhcmRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi9pbmxpbmVmaWx0ZXIvY29tbWFuZGJhci1pbmxpbmVmaWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IG1lcmdlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU1lZGlhIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktY29tbWFuZGJhci1pbmxpbmVmaWx0ZXJzJyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPGRpdiBmeExheW91dD1cInJvd1wiPlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHZpc2libGVJdGVtc1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtPy50ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtsaW5lLWhlaWdodDo0OHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1hbmRiYXJJbmxpbmVmaWx0ZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBDb21tYW5kYmFySW5saW5lZmlsdGVyQ29tcG9uZW50KSkgaXRlbXM6IFF1ZXJ5TGlzdDxDb21tYW5kYmFySW5saW5lZmlsdGVyQ29tcG9uZW50PjtcbiAgcHVibGljIHZpc2libGVJdGVtczogQ29tbWFuZGJhcklubGluZWZpbHRlckNvbXBvbmVudFtdID0gW107XG4gIHB1YmxpYyBoaWRkZW5JdGVtczogQ29tbWFuZGJhcklubGluZWZpbHRlckNvbXBvbmVudFtdID0gW107XG5cbiAgcHJpdmF0ZSBjb21wb25lbnREZXN0cm95ZWQkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9ic2VydmFibGVNZWRpYTogT2JzZXJ2YWJsZU1lZGlhKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gbGlzdGVuIHRvIGNoYW5nZXMgb2Ygdmlld3BvcnQgc2l6ZVxuICAgIG1lcmdlKHRoaXMub2JzZXJ2YWJsZU1lZGlhLmFzT2JzZXJ2YWJsZSgpLCB0aGlzLml0ZW1zLmNoYW5nZXMsIG9mKHRydWUpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmlldygpIHtcbiAgICBjb25zdCB2aXNpYmxlID0gW107XG4gICAgY29uc3QgaGlkZGVuID0gW107XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy50cnVlT3JNYXRjaGVzTWVkaWFTdGF0ZShpdGVtLmhpZGUpID8gaGlkZGVuLnB1c2goaXRlbSkgOiB2aXNpYmxlLnB1c2goaXRlbSkpO1xuXG4gICAgdGhpcy52aXNpYmxlSXRlbXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhpZGRlbkl0ZW1zLmxlbmd0aCA9IDA7XG4gICAgaWYgKGhpZGRlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIG5vIG1vcmUtYWN0aW9ucy1tZW51IGZvciBhIHNpbmdsZSBoaWRkZW4gYWN0aW9uXG4gICAgICB0aGlzLnZpc2libGVJdGVtcy5wdXNoKC4uLnRoaXMuaXRlbXMudG9BcnJheSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXNpYmxlSXRlbXMucHVzaCguLi52aXNpYmxlKTtcbiAgICAgIHRoaXMuaGlkZGVuSXRlbXMucHVzaCguLi5oaWRkZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJ1ZU9yTWF0Y2hlc01lZGlhU3RhdGUodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB0aGlzLm9ic2VydmFibGVNZWRpYS5pc0FjdGl2ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==