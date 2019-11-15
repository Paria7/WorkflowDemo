/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommandbarItemComponent } from '../item/commandbar-item.component';
export class CommandbarActionsComponent {
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
        merge(this.observableMedia.asObservable(), this.items.changes)
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
CommandbarActionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-commandbar-actions',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<!-- Actions -->
<ng-container *ngFor="let item of visibleItems">
  <ng-container *ngTemplateOutlet="item?.template"></ng-container>
</ng-container>

<ng-container *ngIf="hiddenItems.length > 0">
  <!-- More-Actions-Button -->
  <bci-commandbar-button [render]="true"
                         icon="Bosch-Ic-show-more-vertical"
                         aria-label="more actions"
                         [matMenuTriggerFor]="moreActionsMenu">
  </bci-commandbar-button>
</ng-container>

<!-- More Actions Menu -->
<mat-menu #moreActionsMenu="matMenu" [class]="'commandbar-more-action-menu'">
  <ng-container *ngFor="let item of hiddenItems">
    <div mat-menu-item>
      <ng-container *ngTemplateOutlet="item?.template"></ng-container>
    </div>
  </ng-container>
</mat-menu>
`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */:host{display:inherit;vertical-align:inherit}::ng-deep .mat-menu-panel.commandbar-more-action-menu{min-width:0}::ng-deep .commandbar-more-action-menu .mat-menu-item{padding:2px;line-height:1;height:auto}`]
            },] },
];
/** @nocollapse */
CommandbarActionsComponent.ctorParameters = () => [
    { type: ObservableMedia }
];
CommandbarActionsComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [forwardRef(() => CommandbarItemComponent),] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbW1hbmRiYXIvYWN0aW9ucy9hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFtQzVFLE1BQU07Ozs7SUFTSixZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7NEJBTEgsRUFBRTsyQkFDSCxFQUFFO21DQUVwQixJQUFJLE9BQU8sRUFBRTtLQUcxQzs7OztJQUVELFFBQVE7S0FDUDs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3JDOzs7O0lBRUQsa0JBQWtCOztRQUVoQixLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUMzRCxJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO0tBQ047Ozs7SUFFTyxVQUFVOztRQUNoQixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7O1FBQ25CLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUU3RyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFFeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDakQ7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUNsQzs7Ozs7O0lBR0ssdUJBQXVCLENBQUMsS0FBdUI7UUFDckQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNkO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDYjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDZDtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25FOzs7O1lBeEZKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMEJYO2dCQUNDLE1BQU0sRUFBRSxDQUFDOzsrTUFFb00sQ0FBQzthQUMvTTs7OztZQXJDUSxlQUFlOzs7b0JBd0NyQixlQUFlLFNBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL1xuXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgZm9yd2FyZFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU1lZGlhIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbW1hbmRiYXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vaXRlbS9jb21tYW5kYmFyLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWNvbW1hbmRiYXItYWN0aW9ucycsXG4gIHRlbXBsYXRlOiBgPCEtLVxuICB+IENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgLS0+XG5cbjwhLS0gQWN0aW9ucyAtLT5cbjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdmlzaWJsZUl0ZW1zXCI+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtPy50ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJoaWRkZW5JdGVtcy5sZW5ndGggPiAwXCI+XG4gIDwhLS0gTW9yZS1BY3Rpb25zLUJ1dHRvbiAtLT5cbiAgPGJjaS1jb21tYW5kYmFyLWJ1dHRvbiBbcmVuZGVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJCb3NjaC1JYy1zaG93LW1vcmUtdmVydGljYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtb3JlIGFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFttYXRNZW51VHJpZ2dlckZvcl09XCJtb3JlQWN0aW9uc01lbnVcIj5cbiAgPC9iY2ktY29tbWFuZGJhci1idXR0b24+XG48L25nLWNvbnRhaW5lcj5cblxuPCEtLSBNb3JlIEFjdGlvbnMgTWVudSAtLT5cbjxtYXQtbWVudSAjbW9yZUFjdGlvbnNNZW51PVwibWF0TWVudVwiIFtjbGFzc109XCInY29tbWFuZGJhci1tb3JlLWFjdGlvbi1tZW51J1wiPlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGhpZGRlbkl0ZW1zXCI+XG4gICAgPGRpdiBtYXQtbWVudS1pdGVtPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml0ZW0/LnRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuPC9tYXQtbWVudT5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLzpob3N0e2Rpc3BsYXk6aW5oZXJpdDt2ZXJ0aWNhbC1hbGlnbjppbmhlcml0fTo6bmctZGVlcCAubWF0LW1lbnUtcGFuZWwuY29tbWFuZGJhci1tb3JlLWFjdGlvbi1tZW51e21pbi13aWR0aDowfTo6bmctZGVlcCAuY29tbWFuZGJhci1tb3JlLWFjdGlvbi1tZW51IC5tYXQtbWVudS1pdGVte3BhZGRpbmc6MnB4O2xpbmUtaGVpZ2h0OjE7aGVpZ2h0OmF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tbWFuZGJhckFjdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IENvbW1hbmRiYXJJdGVtQ29tcG9uZW50KSkgaXRlbXM6IFF1ZXJ5TGlzdDxDb21tYW5kYmFySXRlbUNvbXBvbmVudD47XG5cbiAgcHVibGljIHZpc2libGVJdGVtczogQ29tbWFuZGJhckl0ZW1Db21wb25lbnRbXSA9IFtdO1xuICBwdWJsaWMgaGlkZGVuSXRlbXM6IENvbW1hbmRiYXJJdGVtQ29tcG9uZW50W10gPSBbXTtcblxuICBwcml2YXRlIGNvbXBvbmVudERlc3Ryb3llZCQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb2JzZXJ2YWJsZU1lZGlhOiBPYnNlcnZhYmxlTWVkaWEpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLm5leHQoKTtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyBsaXN0ZW4gdG8gY2hhbmdlcyBvZiB2aWV3cG9ydCBzaXplXG4gICAgbWVyZ2UodGhpcy5vYnNlcnZhYmxlTWVkaWEuYXNPYnNlcnZhYmxlKCksIHRoaXMuaXRlbXMuY2hhbmdlcylcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVWaWV3KCkge1xuICAgIGNvbnN0IHZpc2libGUgPSBbXTtcbiAgICBjb25zdCBoaWRkZW4gPSBbXTtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB0aGlzLnRydWVPck1hdGNoZXNNZWRpYVN0YXRlKGl0ZW0uaGlkZSkgPyBoaWRkZW4ucHVzaChpdGVtKSA6IHZpc2libGUucHVzaChpdGVtKSk7XG5cbiAgICB0aGlzLnZpc2libGVJdGVtcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGlkZGVuSXRlbXMubGVuZ3RoID0gMDtcbiAgICBpZiAoaGlkZGVuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gbm8gbW9yZS1hY3Rpb25zLW1lbnUgZm9yIGEgc2luZ2xlIGhpZGRlbiBhY3Rpb25cbiAgICAgIHRoaXMudmlzaWJsZUl0ZW1zLnB1c2goLi4udGhpcy5pdGVtcy50b0FycmF5KCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpc2libGVJdGVtcy5wdXNoKC4uLnZpc2libGUpO1xuICAgICAgdGhpcy5oaWRkZW5JdGVtcy5wdXNoKC4uLmhpZGRlbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cnVlT3JNYXRjaGVzTWVkaWFTdGF0ZSh2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwIHx8IHRoaXMub2JzZXJ2YWJsZU1lZGlhLmlzQWN0aXZlKHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==