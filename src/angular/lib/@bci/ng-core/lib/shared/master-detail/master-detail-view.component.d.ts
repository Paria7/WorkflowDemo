import { OnDestroy, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { ModalWindowService } from '../../core/modal-window/modal-window.service';
import { DetailViewComponent } from './detail/detail-view.component';
/**
 * The MasterDetailComponent contains a {@link MasterViewComponent} and a {@link DetailViewComponent}.
 *
 * In the {@link MasterViewComponent} typically a collection of objects is shown.
 *
 * By click on one of these objects a {@link DetailViewComponent} is made visible and shows the details of the selected object.
 *
 * to fill the {@link MasterViewComponent} and the {@link DetailViewComponent} that is shown when one of the objects is clicked.
 *
 */
export declare class MasterDetailViewComponent implements OnInit, OnDestroy {
    private modalWindowService;
    private dialog;
    private observableMedia;
    /**
     * true when the details view is shown as dialog or as sidebar
     */
    isDetailsShown: boolean;
    /**
     * The {@link DetailViewComponent} can be shown on the right side next to the {@link MasterViewComponent} or as a slideout/slideover above it.
     */
    useSlideoverSidebarMode: boolean;
    /**
     * references the {@link DetailViewComponent} shown in the sidebar
     */
    detailViewComponent: DetailViewComponent;
    /**
     * when true the details view is shown as dialog
     * else it is shown as modal dialog
     */
    private _useDialog;
    private detailsDialogRef;
    /**
     * references the template containing the {@link DetailViewComponent} of this MasterDetailViewComponent
     */
    private detailsView;
    private sidenav;
    private closed$;
    closed: Observable<undefined>;
    private componentDestroyed$;
    constructor(modalWindowService: ModalWindowService, dialog: MatDialog, observableMedia: ObservableMedia);
    useDialog: boolean;
    ngOnDestroy(): void;
    ngOnInit(): void;
    /**
     * Make the {@link DetailViewComponent} visible and show the details of the object identified by id
     */
    openDetails(): void;
    /**
     * Hide the {@link DetailViewComponent}
     * @returns an Observable that emits a single true when the details is finished closing
     */
    closeDetails(): Observable<undefined>;
    /**
     * detailsClosed() is called when the  {@link DetailViewComponent} is closed.
     * either when the details dialog is closed or when the sidebar has disappeared
     */
    detailsClosed(): void;
    private openDetailsModal();
}
