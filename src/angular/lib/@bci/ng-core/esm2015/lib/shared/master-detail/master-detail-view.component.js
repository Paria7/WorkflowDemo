/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { MatDialog, MatSidenav } from '@angular/material';
import { from, of, Subject } from 'rxjs';
import { first, take, takeUntil, tap } from 'rxjs/operators';
import { ModalWindowService } from '../../core/modal-window/modal-window.service';
import { DetailViewComponent } from './detail/detail-view.component';
/**
 * The MasterDetailComponent contains a {\@link MasterViewComponent} and a {\@link DetailViewComponent}.
 *
 * In the {\@link MasterViewComponent} typically a collection of objects is shown.
 *
 * By click on one of these objects a {\@link DetailViewComponent} is made visible and shows the details of the selected object.
 *
 * to fill the {\@link MasterViewComponent} and the {\@link DetailViewComponent} that is shown when one of the objects is clicked.
 *
 */
export class MasterDetailViewComponent {
    /**
     * @param {?} modalWindowService
     * @param {?} dialog
     * @param {?} observableMedia
     */
    constructor(modalWindowService, dialog, observableMedia) {
        this.modalWindowService = modalWindowService;
        this.dialog = dialog;
        this.observableMedia = observableMedia;
        /**
         * when true the details view is shown as dialog
         * else it is shown as modal dialog
         */
        this._useDialog = false;
        this.closed$ = new Subject();
        this.closed = this.closed$.asObservable();
        this.componentDestroyed$ = new Subject();
    }
    /**
     * @return {?}
     */
    get useDialog() {
        return this._useDialog;
    }
    /**
     * @param {?} use
     * @return {?}
     */
    set useDialog(use) {
        if (this.isDetailsShown) {
            this.closeDetails()
                .pipe(takeUntil(this.componentDestroyed$), take(1))
                .subscribe(() => {
                this._useDialog = use;
                this.openDetails();
            });
        }
        else {
            this._useDialog = use;
        }
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
    ngOnInit() {
        if (this.useSlideoverSidebarMode === undefined) {
            // this BehaviorSubject emits changes to the viewport (and initially the current viewport state)
            this.observableMedia.asObservable().pipe(takeUntil(this.componentDestroyed$)).subscribe(() => {
                this.useSlideoverSidebarMode = this.observableMedia.isActive('lt-lg');
            });
        }
    }
    /**
     * Make the {\@link DetailViewComponent} visible and show the details of the object identified by id
     * @return {?}
     */
    openDetails() {
        if (this.useDialog) {
            /*
                 * Currently, there are several github issues on creating views in the ngAfterViewInit which isn't possible without error in Dev-Mode
                 * https://github.com/angular/angular/issues/15634
                 * https://github.com/angular/angular/issues/10131
                 * https://github.com/angular/angular/issues/17572
                 * ...
                 * TODO: This solution is one workaround for this issue, but should be fixed as soon as possible since its hacky!
                 */
            if (!this.isDetailsShown) {
                this.isDetailsShown = true;
                setTimeout(() => {
                    this.openDetailsModal();
                });
            }
        }
        else {
            this.isDetailsShown = true;
        }
    }
    /**
     * Hide the {\@link DetailViewComponent}
     * @return {?} an Observable that emits a single true when the details is finished closing
     */
    closeDetails() {
        if (!this.isDetailsShown || (this.useDialog && !this.detailsDialogRef)) {
            return of();
        }
        /** @type {?} */
        const closedObservable = this.useDialog ? this.detailsDialogRef.afterClosed() : from(this.sidenav.close());
        if (this.useDialog) {
            this.detailsDialogRef.close();
        }
        return closedObservable.pipe(tap(() => this.closed$.next()), tap(() => this.isDetailsShown = false), first());
    }
    /**
     * detailsClosed() is called when the  {\@link DetailViewComponent} is closed.
     * either when the details dialog is closed or when the sidebar has disappeared
     * @return {?}
     */
    detailsClosed() {
        this.isDetailsShown = false;
        this.closed$.next();
    }
    /**
     * @return {?}
     */
    openDetailsModal() {
        this.detailsDialogRef = this.modalWindowService.openDialogWithComponent(this.detailsView, {
            disableClose: true,
            closeOnNavigation: false
        });
        this.detailsDialogRef.afterClosed()
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(() => {
            this.detailsClosed();
        });
    }
}
MasterDetailViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-master-detail-view',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<ng-template #masterView>
  <ng-content select="bci-master-view"></ng-content>
</ng-template>

<ng-template #detailView>
  <ng-content select="bci-detail-view"></ng-content>
</ng-template>

<mat-sidenav-container class="container">
  <mat-sidenav-content class="container-content">
    <!-- Master -->
    <ng-container *ngTemplateOutlet="masterView"></ng-container>
  </mat-sidenav-content>

  <mat-sidenav *ngIf="!useDialog"
               id="detailContainer"
               [opened]="isDetailsShown"
               [disableClose]="false"
               (closed)="detailsClosed()"
               [mode]="useSlideoverSidebarMode ? 'over' : 'side'"
               position="end"
               class="sidebar-content"
               [class.container-content-padded]="detailViewComponent?.isPadded"
               [class.sidebar-full-size]="useSlideoverSidebarMode"
               [class.sidebar-visible]="!useSlideoverSidebarMode">
    <ng-container *ngTemplateOutlet="detailView"></ng-container>
  </mat-sidenav>
</mat-sidenav-container>
`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */:host{height:100%;overflow:hidden}.container{width:100%;height:inherit}.container-content-padded{padding:32px}mat-sidenav-container .mat-drawer-content.container-content{overflow:auto}mat-sidenav-container .sidebar-content{overflow-x:hidden}.sidebar-full-size{left:0;border-left:unset}.sidebar-visible{border-left:1px solid #bfc0c2}`]
            },] },
];
/** @nocollapse */
MasterDetailViewComponent.ctorParameters = () => [
    { type: ModalWindowService },
    { type: MatDialog },
    { type: ObservableMedia }
];
MasterDetailViewComponent.propDecorators = {
    useSlideoverSidebarMode: [{ type: Input }],
    detailViewComponent: [{ type: ContentChild, args: [DetailViewComponent,] }],
    detailsView: [{ type: ViewChild, args: ['detailView',] }],
    sidenav: [{ type: ViewChild, args: [MatSidenav,] }],
    useDialog: [{ type: Input }]
};
if (false) {
    /**
     * true when the details view is shown as dialog or as sidebar
     * @type {?}
     */
    MasterDetailViewComponent.prototype.isDetailsShown;
    /**
     * The {\@link DetailViewComponent} can be shown on the right side next to the {\@link MasterViewComponent} or as a slideout/slideover above it.
     * @type {?}
     */
    MasterDetailViewComponent.prototype.useSlideoverSidebarMode;
    /**
     * references the {\@link DetailViewComponent} shown in the sidebar
     * @type {?}
     */
    MasterDetailViewComponent.prototype.detailViewComponent;
    /**
     * when true the details view is shown as dialog
     * else it is shown as modal dialog
     * @type {?}
     */
    MasterDetailViewComponent.prototype._useDialog;
    /** @type {?} */
    MasterDetailViewComponent.prototype.detailsDialogRef;
    /**
     * references the template containing the {\@link DetailViewComponent} of this MasterDetailViewComponent
     * @type {?}
     */
    MasterDetailViewComponent.prototype.detailsView;
    /** @type {?} */
    MasterDetailViewComponent.prototype.sidenav;
    /** @type {?} */
    MasterDetailViewComponent.prototype.closed$;
    /** @type {?} */
    MasterDetailViewComponent.prototype.closed;
    /** @type {?} */
    MasterDetailViewComponent.prototype.componentDestroyed$;
    /** @type {?} */
    MasterDetailViewComponent.prototype.modalWindowService;
    /** @type {?} */
    MasterDetailViewComponent.prototype.dialog;
    /** @type {?} */
    MasterDetailViewComponent.prototype.observableMedia;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyLWRldGFpbC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbWFzdGVyLWRldGFpbC9tYXN0ZXItZGV0YWlsLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQWdCLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxJQUFJLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7O0FBb0RyRSxNQUFNOzs7Ozs7SUErQkosWUFBb0Isa0JBQXNDLEVBQ3RDLFFBQ0E7UUFGQSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFdBQU0sR0FBTixNQUFNO1FBQ04sb0JBQWUsR0FBZixlQUFlOzs7OzswQkFkZCxLQUFLO3VCQVFZLElBQUksT0FBTyxFQUFFO3NCQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTttQ0FDUSxJQUFJLE9BQU8sRUFBRTtLQUt4RDs7OztJQUVELElBQUksU0FBUztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7OztJQUVELElBQWEsU0FBUyxD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LENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4RixZQUFZLEVBQUUsSUFBSTtZQUNsQixpQkFBaUIsRUFBRSxLQUFLO1NBQ3pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7YUFDaEMsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FDcEM7YUFDQSxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCLENBQUMsQ0FBQzs7OztZQTdLUixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWdDWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQzs7Z1ZBRXFVLENBQUM7YUFDaFY7Ozs7WUFwRFEsa0JBQWtCO1lBSGxCLFNBQVM7WUFEVCxlQUFlOzs7c0NBa0VyQixLQUFLO2tDQUlMLFlBQVksU0FBQyxtQkFBbUI7MEJBWWhDLFNBQVMsU0FBQyxZQUFZO3NCQUN0QixTQUFTLFNBQUMsVUFBVTt3QkFjcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU1lZGlhIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1hdFNpZGVuYXYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QsIHRha2UsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTW9kYWxXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9tb2RhbC13aW5kb3cvbW9kYWwtd2luZG93LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGV0YWlsVmlld0NvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlsL2RldGFpbC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXN0ZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9tYXN0ZXIvbWFzdGVyLXZpZXcuY29tcG9uZW50JztcblxuLyoqXG4gKiBUaGUgTWFzdGVyRGV0YWlsQ29tcG9uZW50IGNvbnRhaW5zIGEge0BsaW5rIE1hc3RlclZpZXdDb21wb25lbnR9IGFuZCBhIHtAbGluayBEZXRhaWxWaWV3Q29tcG9uZW50fS5cbiAqXG4gKiBJbiB0aGUge0BsaW5rIE1hc3RlclZpZXdDb21wb25lbnR9IHR5cGljYWxseSBhIGNvbGxlY3Rpb24gb2Ygb2JqZWN0cyBpcyBzaG93bi5cbiAqXG4gKiBCeSBjbGljayBvbiBvbmUgb2YgdGhlc2Ugb2JqZWN0cyBhIHtAbGluayBEZXRhaWxWaWV3Q29tcG9uZW50fSBpcyBtYWRlIHZpc2libGUgYW5kIHNob3dzIHRoZSBkZXRhaWxzIG9mIHRoZSBzZWxlY3RlZCBvYmplY3QuXG4gKlxuICogdG8gZmlsbCB0aGUge0BsaW5rIE1hc3RlclZpZXdDb21wb25lbnR9IGFuZCB0aGUge0BsaW5rIERldGFpbFZpZXdDb21wb25lbnR9IHRoYXQgaXMgc2hvd24gd2hlbiBvbmUgb2YgdGhlIG9iamVjdHMgaXMgY2xpY2tlZC5cbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1tYXN0ZXItZGV0YWlsLXZpZXcnLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48bmctdGVtcGxhdGUgI21hc3RlclZpZXc+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImJjaS1tYXN0ZXItdmlld1wiPjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjZGV0YWlsVmlldz5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYmNpLWRldGFpbC12aWV3XCI+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cImNvbnRhaW5lclwiPlxuICA8bWF0LXNpZGVuYXYtY29udGVudCBjbGFzcz1cImNvbnRhaW5lci1jb250ZW50XCI+XG4gICAgPCEtLSBNYXN0ZXIgLS0+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1hc3RlclZpZXdcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxuXG4gIDxtYXQtc2lkZW5hdiAqbmdJZj1cIiF1c2VEaWFsb2dcIlxuICAgICAgICAgICAgICAgaWQ9XCJkZXRhaWxDb250YWluZXJcIlxuICAgICAgICAgICAgICAgW29wZW5lZF09XCJpc0RldGFpbHNTaG93blwiXG4gICAgICAgICAgICAgICBbZGlzYWJsZUNsb3NlXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgIChjbG9zZWQpPVwiZGV0YWlsc0Nsb3NlZCgpXCJcbiAgICAgICAgICAgICAgIFttb2RlXT1cInVzZVNsaWRlb3ZlclNpZGViYXJNb2RlID8gJ292ZXInIDogJ3NpZGUnXCJcbiAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiZW5kXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwic2lkZWJhci1jb250ZW50XCJcbiAgICAgICAgICAgICAgIFtjbGFzcy5jb250YWluZXItY29udGVudC1wYWRkZWRdPVwiZGV0YWlsVmlld0NvbXBvbmVudD8uaXNQYWRkZWRcIlxuICAgICAgICAgICAgICAgW2NsYXNzLnNpZGViYXItZnVsbC1zaXplXT1cInVzZVNsaWRlb3ZlclNpZGViYXJNb2RlXCJcbiAgICAgICAgICAgICAgIFtjbGFzcy5zaWRlYmFyLXZpc2libGVdPVwiIXVzZVNsaWRlb3ZlclNpZGViYXJNb2RlXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImRldGFpbFZpZXdcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9tYXQtc2lkZW5hdj5cbjwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovOmhvc3R7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVufS5jb250YWluZXJ7d2lkdGg6MTAwJTtoZWlnaHQ6aW5oZXJpdH0uY29udGFpbmVyLWNvbnRlbnQtcGFkZGVke3BhZGRpbmc6MzJweH1tYXQtc2lkZW5hdi1jb250YWluZXIgLm1hdC1kcmF3ZXItY29udGVudC5jb250YWluZXItY29udGVudHtvdmVyZmxvdzphdXRvfW1hdC1zaWRlbmF2LWNvbnRhaW5lciAuc2lkZWJhci1jb250ZW50e292ZXJmbG93LXg6aGlkZGVufS5zaWRlYmFyLWZ1bGwtc2l6ZXtsZWZ0OjA7Ym9yZGVyLWxlZnQ6dW5zZXR9LnNpZGViYXItdmlzaWJsZXtib3JkZXItbGVmdDoxcHggc29saWQgI2JmYzBjMn1gXVxufSlcbmV4cG9ydCBjbGFzcyBNYXN0ZXJEZXRhaWxWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiB0cnVlIHdoZW4gdGhlIGRldGFpbHMgdmlldyBpcyBzaG93biBhcyBkaWFsb2cgb3IgYXMgc2lkZWJhclxuICAgKi9cbiAgcHVibGljIGlzRGV0YWlsc1Nob3duOiBib29sZWFuO1xuICAvKipcbiAgICogVGhlIHtAbGluayBEZXRhaWxWaWV3Q29tcG9uZW50fSBjYW4gYmUgc2hvd24gb24gdGhlIHJpZ2h0IHNpZGUgbmV4dCB0byB0aGUge0BsaW5rIE1hc3RlclZpZXdDb21wb25lbnR9IG9yIGFzIGEgc2xpZGVvdXQvc2xpZGVvdmVyIGFib3ZlIGl0LlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIHVzZVNsaWRlb3ZlclNpZGViYXJNb2RlOiBib29sZWFuO1xuICAvKipcbiAgICogcmVmZXJlbmNlcyB0aGUge0BsaW5rIERldGFpbFZpZXdDb21wb25lbnR9IHNob3duIGluIHRoZSBzaWRlYmFyXG4gICAqL1xuICBAQ29udGVudENoaWxkKERldGFpbFZpZXdDb21wb25lbnQpIHB1YmxpYyBkZXRhaWxWaWV3Q29tcG9uZW50OiBEZXRhaWxWaWV3Q29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiB3aGVuIHRydWUgdGhlIGRldGFpbHMgdmlldyBpcyBzaG93biBhcyBkaWFsb2dcbiAgICogZWxzZSBpdCBpcyBzaG93biBhcyBtb2RhbCBkaWFsb2dcbiAgICovXG4gIHByaXZhdGUgX3VzZURpYWxvZyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZGV0YWlsc0RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERldGFpbFZpZXdDb21wb25lbnQ+O1xuICAvKipcbiAgICogcmVmZXJlbmNlcyB0aGUgdGVtcGxhdGUgY29udGFpbmluZyB0aGUge0BsaW5rIERldGFpbFZpZXdDb21wb25lbnR9IG9mIHRoaXMgTWFzdGVyRGV0YWlsVmlld0NvbXBvbmVudFxuICAgKi9cbiAgQFZpZXdDaGlsZCgnZGV0YWlsVmlldycpIHByaXZhdGUgZGV0YWlsc1ZpZXc6IFRlbXBsYXRlUmVmPERldGFpbFZpZXdDb21wb25lbnQ+O1xuICBAVmlld0NoaWxkKE1hdFNpZGVuYXYpIHByaXZhdGUgc2lkZW5hdjogTWF0U2lkZW5hdjtcbiAgcHJpdmF0ZSBjbG9zZWQkOiBTdWJqZWN0PHVuZGVmaW5lZD4gPSBuZXcgU3ViamVjdCgpO1xuICBjbG9zZWQgPSB0aGlzLmNsb3NlZCQuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgY29tcG9uZW50RGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsV2luZG93U2VydmljZTogTW9kYWxXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgICAgICAgICAgICBwcml2YXRlIG9ic2VydmFibGVNZWRpYTogT2JzZXJ2YWJsZU1lZGlhKSB7XG4gIH1cblxuICBnZXQgdXNlRGlhbG9nKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VEaWFsb2c7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgdXNlRGlhbG9nKHVzZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmlzRGV0YWlsc1Nob3duKSB7XG4gICAgICB0aGlzLmNsb3NlRGV0YWlscygpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpLFxuICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl91c2VEaWFsb2cgPSB1c2U7XG4gICAgICAgICAgdGhpcy5vcGVuRGV0YWlscygpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXNlRGlhbG9nID0gdXNlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5jb21wb25lbnREZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy51c2VTbGlkZW92ZXJTaWRlYmFyTW9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyB0aGlzIEJlaGF2aW9yU3ViamVjdCBlbWl0cyBjaGFuZ2VzIHRvIHRoZSB2aWV3cG9ydCAoYW5kIGluaXRpYWxseSB0aGUgY3VycmVudCB2aWV3cG9ydCBzdGF0ZSlcbiAgICAgIHRoaXMub2JzZXJ2YWJsZU1lZGlhLmFzT2JzZXJ2YWJsZSgpLnBpcGUodGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXNlU2xpZGVvdmVyU2lkZWJhck1vZGUgPSB0aGlzLm9ic2VydmFibGVNZWRpYS5pc0FjdGl2ZSgnbHQtbGcnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHRoZSB7QGxpbmsgRGV0YWlsVmlld0NvbXBvbmVudH0gdmlzaWJsZSBhbmQgc2hvdyB0aGUgZGV0YWlscyBvZiB0aGUgb2JqZWN0IGlkZW50aWZpZWQgYnkgaWRcbiAgICovXG4gIG9wZW5EZXRhaWxzKCkge1xuICAgIGlmICh0aGlzLnVzZURpYWxvZykge1xuICAgICAgLypcbiAgICAgKiBDdXJyZW50bHksIHRoZXJlIGFyZSBzZXZlcmFsIGdpdGh1YiBpc3N1ZXMgb24gY3JlYXRpbmcgdmlld3MgaW4gdGhlIG5nQWZ0ZXJWaWV3SW5pdCB3aGljaCBpc24ndCBwb3NzaWJsZSB3aXRob3V0IGVycm9yIGluIERldi1Nb2RlXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTU2MzRcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDEzMVxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE3NTcyXG4gICAgICogLi4uXG4gICAgICogVE9ETzogVGhpcyBzb2x1dGlvbiBpcyBvbmUgd29ya2Fyb3VuZCBmb3IgdGhpcyBpc3N1ZSwgYnV0IHNob3VsZCBiZSBmaXhlZCBhcyBzb29uIGFzIHBvc3NpYmxlIHNpbmNlIGl0cyBoYWNreSFcbiAgICAgKi9cbiAgICAgIGlmICghdGhpcy5pc0RldGFpbHNTaG93bikge1xuICAgICAgICB0aGlzLmlzRGV0YWlsc1Nob3duID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vcGVuRGV0YWlsc01vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRGV0YWlsc1Nob3duID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUge0BsaW5rIERldGFpbFZpZXdDb21wb25lbnR9XG4gICAqIEByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBhIHNpbmdsZSB0cnVlIHdoZW4gdGhlIGRldGFpbHMgaXMgZmluaXNoZWQgY2xvc2luZ1xuICAgKi9cbiAgY2xvc2VEZXRhaWxzKCk6IE9ic2VydmFibGU8dW5kZWZpbmVkPiB7XG4gICAgaWYgKCF0aGlzLmlzRGV0YWlsc1Nob3duIHx8ICh0aGlzLnVzZURpYWxvZyAmJiAhdGhpcy5kZXRhaWxzRGlhbG9nUmVmKSkge1xuICAgICAgcmV0dXJuIG9mKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VkT2JzZXJ2YWJsZSA9IHRoaXMudXNlRGlhbG9nID8gdGhpcy5kZXRhaWxzRGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkgOiBmcm9tKHRoaXMuc2lkZW5hdi5jbG9zZSgpKTtcbiAgICBpZiAodGhpcy51c2VEaWFsb2cpIHtcbiAgICAgIHRoaXMuZGV0YWlsc0RpYWxvZ1JlZi5jbG9zZSgpO1xuICAgIH1cbiAgICByZXR1cm4gY2xvc2VkT2JzZXJ2YWJsZS5waXBlKFxuICAgICAgdGFwKCgpID0+IHRoaXMuY2xvc2VkJC5uZXh0KCkpLFxuICAgICAgdGFwKCgpID0+IHRoaXMuaXNEZXRhaWxzU2hvd24gPSBmYWxzZSksXG4gICAgICBmaXJzdCgpLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogZGV0YWlsc0Nsb3NlZCgpIGlzIGNhbGxlZCB3aGVuIHRoZSAge0BsaW5rIERldGFpbFZpZXdDb21wb25lbnR9IGlzIGNsb3NlZC5cbiAgICogZWl0aGVyIHdoZW4gdGhlIGRldGFpbHMgZGlhbG9nIGlzIGNsb3NlZCBvciB3aGVuIHRoZSBzaWRlYmFyIGhhcyBkaXNhcHBlYXJlZFxuICAgKi9cbiAgcHVibGljIGRldGFpbHNDbG9zZWQoKSB7XG4gICAgdGhpcy5pc0RldGFpbHNTaG93biA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2VkJC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIG9wZW5EZXRhaWxzTW9kYWwoKSB7XG4gICAgdGhpcy5kZXRhaWxzRGlhbG9nUmVmID0gdGhpcy5tb2RhbFdpbmRvd1NlcnZpY2Uub3BlbkRpYWxvZ1dpdGhDb21wb25lbnQodGhpcy5kZXRhaWxzVmlldywge1xuICAgICAgZGlzYWJsZUNsb3NlOiB0cnVlLFxuICAgICAgY2xvc2VPbk5hdmlnYXRpb246IGZhbHNlXG4gICAgfSk7XG4gICAgdGhpcy5kZXRhaWxzRGlhbG9nUmVmLmFmdGVyQ2xvc2VkKClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGV0YWlsc0Nsb3NlZCgpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==