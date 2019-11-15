import { ComponentType } from '@angular/cdk/portal';
import { OnInit, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
/**
 * Use this service to open dialogs/modal windows.
 * Future updates will ship with a standard dialog containing a header, content, action buttons and close icon button
 */
export declare class ModalWindowService implements OnInit {
    private matDialog;
    private document;
    constructor(matDialog: MatDialog, document: any);
    ngOnInit(): void;
    /**
     * Opens a modal dialog containing the given component.
     * @param componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param config Extra configuration options.
     * @param matDialog inject MatDialog in constructor in components contained in lazy-loaded Modules
     * @returns Reference to the newly-opened dialog.
     */
    openDialogWithComponent<T, D = any, R = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config?: MatDialogConfig<D>, matDialog?: MatDialog): MatDialogRef<T, R>;
}
