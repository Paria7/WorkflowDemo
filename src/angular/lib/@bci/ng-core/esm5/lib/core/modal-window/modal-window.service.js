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
var ModalWindowService = /** @class */ (function () {
    function ModalWindowService(matDialog, document) {
        this.matDialog = matDialog;
        this.document = document;
    }
    /**
     * @return {?}
     */
    ModalWindowService.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * Opens a modal dialog containing the given component.
     * @template T, D, R
     * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param {?=} config Extra configuration options.
     * @param {?=} matDialog inject MatDialog in constructor in components contained in lazy-loaded Modules
     * @return {?} Reference to the newly-opened dialog.
     */
    ModalWindowService.prototype.openDialogWithComponent = /**
     * Opens a modal dialog containing the given component.
     * @template T, D, R
     * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param {?=} config Extra configuration options.
     * @param {?=} matDialog inject MatDialog in constructor in components contained in lazy-loaded Modules
     * @return {?} Reference to the newly-opened dialog.
     */
    function (componentOrTemplateRef, config, matDialog) {
        var _this = this;
        /** @type {?} */
        var matDialogUsed = (matDialog !== null && matDialog !== undefined) ? matDialog : this.matDialog;
        /** @type {?} */
        var dialogRef = matDialogUsed.open(componentOrTemplateRef, config);
        if (dialogRef && matDialogUsed.openDialogs.length > 0) {
            this.document.body.classList.remove('modal-closed');
            this.document.body.classList.add('modal');
            dialogRef.beforeClose().subscribe(function () {
                if (matDialogUsed.openDialogs.length === 1) {
                    _this.document.body.classList.remove('modal');
                    _this.document.body.classList.add('modal-closed');
                }
            });
        }
        return dialogRef;
    };
    ModalWindowService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    ModalWindowService.ctorParameters = function () { return [
        { type: MatDialog },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ ModalWindowService.ngInjectableDef = i0.defineInjectable({ factory: function ModalWindowService_Factory() { return new ModalWindowService(i0.inject(i1.MatDialog), i0.inject(i2.DOCUMENT)); }, token: ModalWindowService, providedIn: "root" });
    return ModalWindowService;
}());
export { ModalWindowService };
if (false) {
    /** @type {?} */
    ModalWindowService.prototype.matDialog;
    /** @type {?} */
    ModalWindowService.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtd2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYmNpL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS9tb2RhbC13aW5kb3cvbW9kYWwtd2luZG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7O0lBWWxGLDRCQUFvQixTQUFvQixFQUE0QixRQUFhO1FBQTdELGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBNEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztLQUNoRjs7OztJQUVELHFDQUFROzs7SUFBUjtLQUNDOzs7Ozs7Ozs7O0lBV00sb0RBQXVCOzs7Ozs7Ozs7Y0FBc0Isc0JBQXlELEVBQUUsTUFBMkIsRUFBRSxTQUFxQjs7O1FBQy9KLElBQU0sYUFBYSxHQUFHLENBQUMsU0FBUyxLQUFLLElBQUksSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7UUFDbkcsSUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBVSxzQkFBc0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5RSxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFMUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDaEMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDN0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDbEQ7YUFDRixDQUFDLENBQUM7U0FDSjtRQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7OztnQkFsQ3BCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVFEsU0FBUztnREFZMkIsTUFBTSxTQUFDLFFBQVE7Ozs2QkFmNUQ7O1NBYWEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ0NvbmZpZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuXG4vKipcbiAqIFVzZSB0aGlzIHNlcnZpY2UgdG8gb3BlbiBkaWFsb2dzL21vZGFsIHdpbmRvd3MuXG4gKiBGdXR1cmUgdXBkYXRlcyB3aWxsIHNoaXAgd2l0aCBhIHN0YW5kYXJkIGRpYWxvZyBjb250YWluaW5nIGEgaGVhZGVyLCBjb250ZW50LCBhY3Rpb24gYnV0dG9ucyBhbmQgY2xvc2UgaWNvbiBidXR0b25cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxXaW5kb3dTZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hdERpYWxvZzogTWF0RGlhbG9nLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cblxuICAvKipcbiAgICogT3BlbnMgYSBtb2RhbCBkaWFsb2cgY29udGFpbmluZyB0aGUgZ2l2ZW4gY29tcG9uZW50LlxuICAgKiBAcGFyYW0gY29tcG9uZW50T3JUZW1wbGF0ZVJlZiBUeXBlIG9mIHRoZSBjb21wb25lbnQgdG8gbG9hZCBpbnRvIHRoZSBkaWFsb2csXG4gICAqICAgICBvciBhIFRlbXBsYXRlUmVmIHRvIGluc3RhbnRpYXRlIGFzIHRoZSBkaWFsb2cgY29udGVudC5cbiAgICogQHBhcmFtIGNvbmZpZyBFeHRyYSBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gICAqIEBwYXJhbSBtYXREaWFsb2cgaW5qZWN0IE1hdERpYWxvZyBpbiBjb25zdHJ1Y3RvciBpbiBjb21wb25lbnRzIGNvbnRhaW5lZCBpbiBsYXp5LWxvYWRlZCBNb2R1bGVzXG4gICAqIEByZXR1cm5zIFJlZmVyZW5jZSB0byB0aGUgbmV3bHktb3BlbmVkIGRpYWxvZy5cbiAgICovXG4gIHB1YmxpYyBvcGVuRGlhbG9nV2l0aENvbXBvbmVudDxULCBEID0gYW55LCBSID0gYW55Pihjb21wb25lbnRPclRlbXBsYXRlUmVmOiBDb21wb25lbnRUeXBlPFQ+IHwgVGVtcGxhdGVSZWY8VD4sIGNvbmZpZz86IE1hdERpYWxvZ0NvbmZpZzxEPiwgbWF0RGlhbG9nPzogTWF0RGlhbG9nKTogTWF0RGlhbG9nUmVmPFQsIFI+IHtcbiAgICBjb25zdCBtYXREaWFsb2dVc2VkID0gKG1hdERpYWxvZyAhPT0gbnVsbCAmJiBtYXREaWFsb2cgIT09IHVuZGVmaW5lZCkgPyBtYXREaWFsb2cgOiB0aGlzLm1hdERpYWxvZztcbiAgICBjb25zdCBkaWFsb2dSZWYgPSBtYXREaWFsb2dVc2VkLm9wZW48VCwgRCwgUj4oY29tcG9uZW50T3JUZW1wbGF0ZVJlZiwgY29uZmlnKTtcbiAgICBpZiAoZGlhbG9nUmVmICYmIG1hdERpYWxvZ1VzZWQub3BlbkRpYWxvZ3MubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWNsb3NlZCcpO1xuICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cbiAgICAgIGRpYWxvZ1JlZi5iZWZvcmVDbG9zZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmIChtYXREaWFsb2dVc2VkLm9wZW5EaWFsb2dzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbCcpO1xuICAgICAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jbG9zZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxufVxuIl19