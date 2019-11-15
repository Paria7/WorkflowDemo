/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
/**
 * Use this service to open dialogs/modal windows.
 * Future updates will ship with a standard dialog containing a header, content, action buttons and close icon button
 */
export class ModalWindowService {
    /**
     * @param {?} matDialog
     * @param {?} document
     */
    constructor(matDialog, document) {
        this.matDialog = matDialog;
        this.document = document;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * Opens a modal dialog containing the given component.
     * @template T, D, R
     * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param {?=} config Extra configuration options.
     * @param {?=} matDialog inject MatDialog in constructor in components contained in lazy-loaded Modules
     * @return {?} Reference to the newly-opened dialog.
     */
    openDialogWithComponent(componentOrTemplateRef, config, matDialog) {
        /** @type {?} */
        const matDialogUsed = (matDialog !== null && matDialog !== undefined) ? matDialog : this.matDialog;
        /** @type {?} */
        const dialogRef = matDialogUsed.open(componentOrTemplateRef, config);
        if (dialogRef && matDialogUsed.openDialogs.length > 0) {
            this.document.body.classList.remove('modal-closed');
            this.document.body.classList.add('modal');
            dialogRef.beforeClose().subscribe(() => {
                if (matDialogUsed.openDialogs.length === 1) {
                    this.document.body.classList.remove('modal');
                    this.document.body.classList.add('modal-closed');
                }
            });
        }
        return dialogRef;
    }
}
ModalWindowService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ModalWindowService.ctorParameters = () => [
    { type: MatDialog },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ ModalWindowService.ngInjectableDef = i0.defineInjectable({ factory: function ModalWindowService_Factory() { return new ModalWindowService(i0.inject(i1.MatDialog), i0.inject(i2.DOCUMENT)); }, token: ModalWindowService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ModalWindowService.prototype.matDialog;
    /** @type {?} */
    ModalWindowService.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtd2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9tb2RhbC13aW5kb3cvbW9kYWwtd2luZG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7QUFVcEYsTUFBTTs7Ozs7SUFFSixZQUFvQixTQUFvQixFQUE0QixRQUFhO1FBQTdELGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBNEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztLQUNoRjs7OztJQUVELFFBQVE7S0FDUDs7Ozs7Ozs7OztJQVdNLHVCQUF1QixDQUFzQixzQkFBeUQsRUFBRSxNQUEyQixFQUFFLFNBQXFCOztRQUMvSixNQUFNLGFBQWEsR0FBRyxDQUFDLFNBQVMsS0FBSyxJQUFJLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7O1FBQ25HLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQVUsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUUsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNyQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUNsRDthQUNGLENBQUMsQ0FBQztTQUNKO1FBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7OztZQWxDcEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVFEsU0FBUzs0Q0FZMkIsTUFBTSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nQ29uZmlnLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5cbi8qKlxuICogVXNlIHRoaXMgc2VydmljZSB0byBvcGVuIGRpYWxvZ3MvbW9kYWwgd2luZG93cy5cbiAqIEZ1dHVyZSB1cGRhdGVzIHdpbGwgc2hpcCB3aXRoIGEgc3RhbmRhcmQgZGlhbG9nIGNvbnRhaW5pbmcgYSBoZWFkZXIsIGNvbnRlbnQsIGFjdGlvbiBidXR0b25zIGFuZCBjbG9zZSBpY29uIGJ1dHRvblxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFdpbmRvd1NlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWF0RGlhbG9nOiBNYXREaWFsb2csIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBPcGVucyBhIG1vZGFsIGRpYWxvZyBjb250YWluaW5nIHRoZSBnaXZlbiBjb21wb25lbnQuXG4gICAqIEBwYXJhbSBjb21wb25lbnRPclRlbXBsYXRlUmVmIFR5cGUgb2YgdGhlIGNvbXBvbmVudCB0byBsb2FkIGludG8gdGhlIGRpYWxvZyxcbiAgICogICAgIG9yIGEgVGVtcGxhdGVSZWYgdG8gaW5zdGFudGlhdGUgYXMgdGhlIGRpYWxvZyBjb250ZW50LlxuICAgKiBAcGFyYW0gY29uZmlnIEV4dHJhIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAgICogQHBhcmFtIG1hdERpYWxvZyBpbmplY3QgTWF0RGlhbG9nIGluIGNvbnN0cnVjdG9yIGluIGNvbXBvbmVudHMgY29udGFpbmVkIGluIGxhenktbG9hZGVkIE1vZHVsZXNcbiAgICogQHJldHVybnMgUmVmZXJlbmNlIHRvIHRoZSBuZXdseS1vcGVuZWQgZGlhbG9nLlxuICAgKi9cbiAgcHVibGljIG9wZW5EaWFsb2dXaXRoQ29tcG9uZW50PFQsIEQgPSBhbnksIFIgPSBhbnk+KGNvbXBvbmVudE9yVGVtcGxhdGVSZWY6IENvbXBvbmVudFR5cGU8VD4gfCBUZW1wbGF0ZVJlZjxUPiwgY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnPEQ+LCBtYXREaWFsb2c/OiBNYXREaWFsb2cpOiBNYXREaWFsb2dSZWY8VCwgUj4ge1xuICAgIGNvbnN0IG1hdERpYWxvZ1VzZWQgPSAobWF0RGlhbG9nICE9PSBudWxsICYmIG1hdERpYWxvZyAhPT0gdW5kZWZpbmVkKSA/IG1hdERpYWxvZyA6IHRoaXMubWF0RGlhbG9nO1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IG1hdERpYWxvZ1VzZWQub3BlbjxULCBELCBSPihjb21wb25lbnRPclRlbXBsYXRlUmVmLCBjb25maWcpO1xuICAgIGlmIChkaWFsb2dSZWYgJiYgbWF0RGlhbG9nVXNlZC5vcGVuRGlhbG9ncy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtY2xvc2VkJyk7XG4gICAgICB0aGlzLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuICAgICAgZGlhbG9nUmVmLmJlZm9yZUNsb3NlKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKG1hdERpYWxvZ1VzZWQub3BlbkRpYWxvZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsJyk7XG4gICAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNsb3NlZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG59XG4iXX0=