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
var MasterDetailViewComponent = /** @class */ (function () {
    function MasterDetailViewComponent(modalWindowService, dialog, observableMedia) {
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
    Object.defineProperty(MasterDetailViewComponent.prototype, "useDialog", {
        get: /**
         * @return {?}
         */
        function () {
            return this._useDialog;
        },
        set: /**
         * @param {?} use
         * @return {?}
         */
        function (use) {
            var _this = this;
            if (this.isDetailsShown) {
                this.closeDetails()
                    .pipe(takeUntil(this.componentDestroyed$), take(1))
                    .subscribe(function () {
                    _this._useDialog = use;
                    _this.openDetails();
                });
            }
            else {
                this._useDialog = use;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MasterDetailViewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    };
    /**
     * @return {?}
     */
    MasterDetailViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.useSlideoverSidebarMode === undefined) {
            // this BehaviorSubject emits changes to the viewport (and initially the current viewport state)
            this.observableMedia.asObservable().pipe(takeUntil(this.componentDestroyed$)).subscribe(function () {
                _this.useSlideoverSidebarMode = _this.observableMedia.isActive('lt-lg');
            });
        }
    };
    /**
     * Make the {@link DetailViewComponent} visible and show the details of the object identified by id
     */
    /**
     * Make the {\@link DetailViewComponent} visible and show the details of the object identified by id
     * @return {?}
     */
    MasterDetailViewComponent.prototype.openDetails = /**
     * Make the {\@link DetailViewComponent} visible and show the details of the object identified by id
     * @return {?}
     */
    function () {
        var _this = this;
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
                setTimeout(function () {
                    _this.openDetailsModal();
                });
            }
        }
        else {
            this.isDetailsShown = true;
        }
    };
    /**
     * Hide the {@link DetailViewComponent}
     * @returns an Observable that emits a single true when the details is finished closing
     */
    /**
     * Hide the {\@link DetailViewComponent}
     * @return {?} an Observable that emits a single true when the details is finished closing
     */
    MasterDetailViewComponent.prototype.closeDetails = /**
     * Hide the {\@link DetailViewComponent}
     * @return {?} an Observable that emits a single true when the details is finished closing
     */
    function () {
        var _this = this;
        if (!this.isDetailsShown || (this.useDialog && !this.detailsDialogRef)) {
            return of();
        }
        /** @type {?} */
        var closedObservable = this.useDialog ? this.detailsDialogRef.afterClosed() : from(this.sidenav.close());
        if (this.useDialog) {
            this.detailsDialogRef.close();
        }
        return closedObservable.pipe(tap(function () { return _this.closed$.next(); }), tap(function () { return _this.isDetailsShown = false; }), first());
    };
    /**
     * detailsClosed() is called when the  {\@link DetailViewComponent} is closed.
     * either when the details dialog is closed or when the sidebar has disappeared
     * @return {?}
     */
    MasterDetailViewComponent.prototype.detailsClosed = /**
     * detailsClosed() is called when the  {\@link DetailViewComponent} is closed.
     * either when the details dialog is closed or when the sidebar has disappeared
     * @return {?}
     */
    function () {
        this.isDetailsShown = false;
        this.closed$.next();
    };
    /**
     * @return {?}
     */
    MasterDetailViewComponent.prototype.openDetailsModal = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.detailsDialogRef = this.modalWindowService.openDialogWithComponent(this.detailsView, {
            disableClose: true,
            closeOnNavigation: false
        });
        this.detailsDialogRef.afterClosed()
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(function () {
            _this.detailsClosed();
        });
    };
    MasterDetailViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-master-detail-view',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<ng-template #masterView>\n  <ng-content select=\"bci-master-view\"></ng-content>\n</ng-template>\n\n<ng-template #detailView>\n  <ng-content select=\"bci-detail-view\"></ng-content>\n</ng-template>\n\n<mat-sidenav-container class=\"container\">\n  <mat-sidenav-content class=\"container-content\">\n    <!-- Master -->\n    <ng-container *ngTemplateOutlet=\"masterView\"></ng-container>\n  </mat-sidenav-content>\n\n  <mat-sidenav *ngIf=\"!useDialog\"\n               id=\"detailContainer\"\n               [opened]=\"isDetailsShown\"\n               [disableClose]=\"false\"\n               (closed)=\"detailsClosed()\"\n               [mode]=\"useSlideoverSidebarMode ? 'over' : 'side'\"\n               position=\"end\"\n               class=\"sidebar-content\"\n               [class.container-content-padded]=\"detailViewComponent?.isPadded\"\n               [class.sidebar-full-size]=\"useSlideoverSidebarMode\"\n               [class.sidebar-visible]=\"!useSlideoverSidebarMode\">\n    <ng-container *ngTemplateOutlet=\"detailView\"></ng-container>\n  </mat-sidenav>\n</mat-sidenav-container>\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host{height:100%;overflow:hidden}.container{width:100%;height:inherit}.container-content-padded{padding:32px}mat-sidenav-container .mat-drawer-content.container-content{overflow:auto}mat-sidenav-container .sidebar-content{overflow-x:hidden}.sidebar-full-size{left:0;border-left:unset}.sidebar-visible{border-left:1px solid #bfc0c2}"]
                },] },
    ];
    /** @nocollapse */
    MasterDetailViewComponent.ctorParameters = function () { return [
        { type: ModalWindowService },
        { type: MatDialog },
        { type: ObservableMedia }
    ]; };
    MasterDetailViewComponent.propDecorators = {
        useSlideoverSidebarMode: [{ type: Input }],
        detailViewComponent: [{ type: ContentChild, args: [DetailViewComponent,] }],
        detailsView: [{ type: ViewChild, args: ['detailView',] }],
        sidenav: [{ type: ViewChild, args: [MatSidenav,] }],
        useDialog: [{ type: Input }]
    };
    return MasterDetailViewComponent;
}());
export { MasterDetailViewComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyLWRldGFpbC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiY2kvbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbWFzdGVyLWRldGFpbC9tYXN0ZXItZGV0YWlsLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQWdCLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxJQUFJLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7OztJQW1GbkUsbUNBQW9CLGtCQUFzQyxFQUN0QyxRQUNBO1FBRkEsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxXQUFNLEdBQU4sTUFBTTtRQUNOLG9CQUFlLEdBQWYsZUFBZTs7Ozs7MEJBZGQsS0FBSzt1QkFRWSxJQUFJLE9BQU8sRUFBRTtzQkFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7bUNBQ1EsSUFBSSxPQUFPLEVBQUU7S0FLeEQ7SUFFRCxzQkFBSSxnREFBUzs7OztRQUFiO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7Ozs7O1FBRUQsVUFBdUIsR0FBWTtZQUFuQyxp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UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7SUFHZCxvREFBZ0I7Ozs7O1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4RixZQUFZLEVBQUUsSUFBSTtZQUNsQixpQkFBaUIsRUFBRSxLQUFLO1NBQ3pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7YUFDaEMsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FDcEM7YUFDQSxTQUFTLENBQUM7WUFDVCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEIsQ0FBQyxDQUFDOzs7Z0JBN0tSLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsZ3NDQWdDWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxzYkFFcVUsQ0FBQztpQkFDaFY7Ozs7Z0JBcERRLGtCQUFrQjtnQkFIbEIsU0FBUztnQkFEVCxlQUFlOzs7MENBa0VyQixLQUFLO3NDQUlMLFlBQVksU0FBQyxtQkFBbUI7OEJBWWhDLFNBQVMsU0FBQyxZQUFZOzBCQUN0QixTQUFTLFNBQUMsVUFBVTs0QkFjcEIsS0FBSzs7b0NBdEdSOztTQThEYSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGVNZWRpYSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNYXRTaWRlbmF2IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0LCB0YWtlLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1vZGFsV2luZG93U2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvbW9kYWwtd2luZG93L21vZGFsLXdpbmRvdy5zZXJ2aWNlJztcbmltcG9ydCB7IERldGFpbFZpZXdDb21wb25lbnQgfSBmcm9tICcuL2RldGFpbC9kZXRhaWwtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFzdGVyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbWFzdGVyL21hc3Rlci12aWV3LmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIE1hc3RlckRldGFpbENvbXBvbmVudCBjb250YWlucyBhIHtAbGluayBNYXN0ZXJWaWV3Q29tcG9uZW50fSBhbmQgYSB7QGxpbmsgRGV0YWlsVmlld0NvbXBvbmVudH0uXG4gKlxuICogSW4gdGhlIHtAbGluayBNYXN0ZXJWaWV3Q29tcG9uZW50fSB0eXBpY2FsbHkgYSBjb2xsZWN0aW9uIG9mIG9iamVjdHMgaXMgc2hvd24uXG4gKlxuICogQnkgY2xpY2sgb24gb25lIG9mIHRoZXNlIG9iamVjdHMgYSB7QGxpbmsgRGV0YWlsVmlld0NvbXBvbmVudH0gaXMgbWFkZSB2aXNpYmxlIGFuZCBzaG93cyB0aGUgZGV0YWlscyBvZiB0aGUgc2VsZWN0ZWQgb2JqZWN0LlxuICpcbiAqIHRvIGZpbGwgdGhlIHtAbGluayBNYXN0ZXJWaWV3Q29tcG9uZW50fSBhbmQgdGhlIHtAbGluayBEZXRhaWxWaWV3Q29tcG9uZW50fSB0aGF0IGlzIHNob3duIHdoZW4gb25lIG9mIHRoZSBvYmplY3RzIGlzIGNsaWNrZWQuXG4gKlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiY2ktbWFzdGVyLWRldGFpbC12aWV3JyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPG5nLXRlbXBsYXRlICNtYXN0ZXJWaWV3PlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJiY2ktbWFzdGVyLXZpZXdcIj48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2RldGFpbFZpZXc+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImJjaS1kZXRhaWwtdmlld1wiPjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+XG5cbjxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPG1hdC1zaWRlbmF2LWNvbnRlbnQgY2xhc3M9XCJjb250YWluZXItY29udGVudFwiPlxuICAgIDwhLS0gTWFzdGVyIC0tPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtYXN0ZXJWaWV3XCI+PC9uZy1jb250YWluZXI+XG4gIDwvbWF0LXNpZGVuYXYtY29udGVudD5cblxuICA8bWF0LXNpZGVuYXYgKm5nSWY9XCIhdXNlRGlhbG9nXCJcbiAgICAgICAgICAgICAgIGlkPVwiZGV0YWlsQ29udGFpbmVyXCJcbiAgICAgICAgICAgICAgIFtvcGVuZWRdPVwiaXNEZXRhaWxzU2hvd25cIlxuICAgICAgICAgICAgICAgW2Rpc2FibGVDbG9zZV09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAoY2xvc2VkKT1cImRldGFpbHNDbG9zZWQoKVwiXG4gICAgICAgICAgICAgICBbbW9kZV09XCJ1c2VTbGlkZW92ZXJTaWRlYmFyTW9kZSA/ICdvdmVyJyA6ICdzaWRlJ1wiXG4gICAgICAgICAgICAgICBwb3NpdGlvbj1cImVuZFwiXG4gICAgICAgICAgICAgICBjbGFzcz1cInNpZGViYXItY29udGVudFwiXG4gICAgICAgICAgICAgICBbY2xhc3MuY29udGFpbmVyLWNvbnRlbnQtcGFkZGVkXT1cImRldGFpbFZpZXdDb21wb25lbnQ/LmlzUGFkZGVkXCJcbiAgICAgICAgICAgICAgIFtjbGFzcy5zaWRlYmFyLWZ1bGwtc2l6ZV09XCJ1c2VTbGlkZW92ZXJTaWRlYmFyTW9kZVwiXG4gICAgICAgICAgICAgICBbY2xhc3Muc2lkZWJhci12aXNpYmxlXT1cIiF1c2VTbGlkZW92ZXJTaWRlYmFyTW9kZVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkZXRhaWxWaWV3XCI+PC9uZy1jb250YWluZXI+XG4gIDwvbWF0LXNpZGVuYXY+XG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqLzpob3N0e2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbn0uY29udGFpbmVye3dpZHRoOjEwMCU7aGVpZ2h0OmluaGVyaXR9LmNvbnRhaW5lci1jb250ZW50LXBhZGRlZHtwYWRkaW5nOjMycHh9bWF0LXNpZGVuYXYtY29udGFpbmVyIC5tYXQtZHJhd2VyLWNvbnRlbnQuY29udGFpbmVyLWNvbnRlbnR7b3ZlcmZsb3c6YXV0b31tYXQtc2lkZW5hdi1jb250YWluZXIgLnNpZGViYXItY29udGVudHtvdmVyZmxvdy14OmhpZGRlbn0uc2lkZWJhci1mdWxsLXNpemV7bGVmdDowO2JvcmRlci1sZWZ0OnVuc2V0fS5zaWRlYmFyLXZpc2libGV7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiZmMwYzJ9YF1cbn0pXG5leHBvcnQgY2xhc3MgTWFzdGVyRGV0YWlsVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogdHJ1ZSB3aGVuIHRoZSBkZXRhaWxzIHZpZXcgaXMgc2hvd24gYXMgZGlhbG9nIG9yIGFzIHNpZGViYXJcbiAgICovXG4gIHB1YmxpYyBpc0RldGFpbHNTaG93bjogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFRoZSB7QGxpbmsgRGV0YWlsVmlld0NvbXBvbmVudH0gY2FuIGJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG5leHQgdG8gdGhlIHtAbGluayBNYXN0ZXJWaWV3Q29tcG9uZW50fSBvciBhcyBhIHNsaWRlb3V0L3NsaWRlb3ZlciBhYm92ZSBpdC5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyB1c2VTbGlkZW92ZXJTaWRlYmFyTW9kZTogYm9vbGVhbjtcbiAgLyoqXG4gICAqIHJlZmVyZW5jZXMgdGhlIHtAbGluayBEZXRhaWxWaWV3Q29tcG9uZW50fSBzaG93biBpbiB0aGUgc2lkZWJhclxuICAgKi9cbiAgQENvbnRlbnRDaGlsZChEZXRhaWxWaWV3Q29tcG9uZW50KSBwdWJsaWMgZGV0YWlsVmlld0NvbXBvbmVudDogRGV0YWlsVmlld0NvbXBvbmVudDtcblxuICAvKipcbiAgICogd2hlbiB0cnVlIHRoZSBkZXRhaWxzIHZpZXcgaXMgc2hvd24gYXMgZGlhbG9nXG4gICAqIGVsc2UgaXQgaXMgc2hvd24gYXMgbW9kYWwgZGlhbG9nXG4gICAqL1xuICBwcml2YXRlIF91c2VEaWFsb2cgPSBmYWxzZTtcblxuICBwcml2YXRlIGRldGFpbHNEaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEZXRhaWxWaWV3Q29tcG9uZW50PjtcbiAgLyoqXG4gICAqIHJlZmVyZW5jZXMgdGhlIHRlbXBsYXRlIGNvbnRhaW5pbmcgdGhlIHtAbGluayBEZXRhaWxWaWV3Q29tcG9uZW50fSBvZiB0aGlzIE1hc3RlckRldGFpbFZpZXdDb21wb25lbnRcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ2RldGFpbFZpZXcnKSBwcml2YXRlIGRldGFpbHNWaWV3OiBUZW1wbGF0ZVJlZjxEZXRhaWxWaWV3Q29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZChNYXRTaWRlbmF2KSBwcml2YXRlIHNpZGVuYXY6IE1hdFNpZGVuYXY7XG4gIHByaXZhdGUgY2xvc2VkJDogU3ViamVjdDx1bmRlZmluZWQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgY2xvc2VkID0gdGhpcy5jbG9zZWQkLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIGNvbXBvbmVudERlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFdpbmRvd1NlcnZpY2U6IE1vZGFsV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBvYnNlcnZhYmxlTWVkaWE6IE9ic2VydmFibGVNZWRpYSkge1xuICB9XG5cbiAgZ2V0IHVzZURpYWxvZygpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlRGlhbG9nO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHVzZURpYWxvZyh1c2U6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5pc0RldGFpbHNTaG93bikge1xuICAgICAgdGhpcy5jbG9zZURldGFpbHMoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5jb21wb25lbnREZXN0cm95ZWQkKSxcbiAgICAgICAgICB0YWtlKDEpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fdXNlRGlhbG9nID0gdXNlO1xuICAgICAgICAgIHRoaXMub3BlbkRldGFpbHMoKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VzZURpYWxvZyA9IHVzZTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQubmV4dCgpO1xuICAgIHRoaXMuY29tcG9uZW50RGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMudXNlU2xpZGVvdmVyU2lkZWJhck1vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gdGhpcyBCZWhhdmlvclN1YmplY3QgZW1pdHMgY2hhbmdlcyB0byB0aGUgdmlld3BvcnQgKGFuZCBpbml0aWFsbHkgdGhlIGN1cnJlbnQgdmlld3BvcnQgc3RhdGUpXG4gICAgICB0aGlzLm9ic2VydmFibGVNZWRpYS5hc09ic2VydmFibGUoKS5waXBlKHRha2VVbnRpbCh0aGlzLmNvbXBvbmVudERlc3Ryb3llZCQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnVzZVNsaWRlb3ZlclNpZGViYXJNb2RlID0gdGhpcy5vYnNlcnZhYmxlTWVkaWEuaXNBY3RpdmUoJ2x0LWxnJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFrZSB0aGUge0BsaW5rIERldGFpbFZpZXdDb21wb25lbnR9IHZpc2libGUgYW5kIHNob3cgdGhlIGRldGFpbHMgb2YgdGhlIG9iamVjdCBpZGVudGlmaWVkIGJ5IGlkXG4gICAqL1xuICBvcGVuRGV0YWlscygpIHtcbiAgICBpZiAodGhpcy51c2VEaWFsb2cpIHtcbiAgICAgIC8qXG4gICAgICogQ3VycmVudGx5LCB0aGVyZSBhcmUgc2V2ZXJhbCBnaXRodWIgaXNzdWVzIG9uIGNyZWF0aW5nIHZpZXdzIGluIHRoZSBuZ0FmdGVyVmlld0luaXQgd2hpY2ggaXNuJ3QgcG9zc2libGUgd2l0aG91dCBlcnJvciBpbiBEZXYtTW9kZVxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE1NjM0XG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTAxMzFcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNzU3MlxuICAgICAqIC4uLlxuICAgICAqIFRPRE86IFRoaXMgc29sdXRpb24gaXMgb25lIHdvcmthcm91bmQgZm9yIHRoaXMgaXNzdWUsIGJ1dCBzaG91bGQgYmUgZml4ZWQgYXMgc29vbiBhcyBwb3NzaWJsZSBzaW5jZSBpdHMgaGFja3khXG4gICAgICovXG4gICAgICBpZiAoIXRoaXMuaXNEZXRhaWxzU2hvd24pIHtcbiAgICAgICAgdGhpcy5pc0RldGFpbHNTaG93biA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMub3BlbkRldGFpbHNNb2RhbCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0RldGFpbHNTaG93biA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIHtAbGluayBEZXRhaWxWaWV3Q29tcG9uZW50fVxuICAgKiBAcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgYSBzaW5nbGUgdHJ1ZSB3aGVuIHRoZSBkZXRhaWxzIGlzIGZpbmlzaGVkIGNsb3NpbmdcbiAgICovXG4gIGNsb3NlRGV0YWlscygpOiBPYnNlcnZhYmxlPHVuZGVmaW5lZD4ge1xuICAgIGlmICghdGhpcy5pc0RldGFpbHNTaG93biB8fCAodGhpcy51c2VEaWFsb2cgJiYgIXRoaXMuZGV0YWlsc0RpYWxvZ1JlZikpIHtcbiAgICAgIHJldHVybiBvZigpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlZE9ic2VydmFibGUgPSB0aGlzLnVzZURpYWxvZyA/IHRoaXMuZGV0YWlsc0RpYWxvZ1JlZi5hZnRlckNsb3NlZCgpIDogZnJvbSh0aGlzLnNpZGVuYXYuY2xvc2UoKSk7XG4gICAgaWYgKHRoaXMudXNlRGlhbG9nKSB7XG4gICAgICB0aGlzLmRldGFpbHNEaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb3NlZE9ic2VydmFibGUucGlwZShcbiAgICAgIHRhcCgoKSA9PiB0aGlzLmNsb3NlZCQubmV4dCgpKSxcbiAgICAgIHRhcCgoKSA9PiB0aGlzLmlzRGV0YWlsc1Nob3duID0gZmFsc2UpLFxuICAgICAgZmlyc3QoKSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIGRldGFpbHNDbG9zZWQoKSBpcyBjYWxsZWQgd2hlbiB0aGUgIHtAbGluayBEZXRhaWxWaWV3Q29tcG9uZW50fSBpcyBjbG9zZWQuXG4gICAqIGVpdGhlciB3aGVuIHRoZSBkZXRhaWxzIGRpYWxvZyBpcyBjbG9zZWQgb3Igd2hlbiB0aGUgc2lkZWJhciBoYXMgZGlzYXBwZWFyZWRcbiAgICovXG4gIHB1YmxpYyBkZXRhaWxzQ2xvc2VkKCkge1xuICAgIHRoaXMuaXNEZXRhaWxzU2hvd24gPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlZCQubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuRGV0YWlsc01vZGFsKCkge1xuICAgIHRoaXMuZGV0YWlsc0RpYWxvZ1JlZiA9IHRoaXMubW9kYWxXaW5kb3dTZXJ2aWNlLm9wZW5EaWFsb2dXaXRoQ29tcG9uZW50KHRoaXMuZGV0YWlsc1ZpZXcsIHtcbiAgICAgIGRpc2FibGVDbG9zZTogdHJ1ZSxcbiAgICAgIGNsb3NlT25OYXZpZ2F0aW9uOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMuZGV0YWlsc0RpYWxvZ1JlZi5hZnRlckNsb3NlZCgpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuY29tcG9uZW50RGVzdHJveWVkJClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmRldGFpbHNDbG9zZWQoKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=