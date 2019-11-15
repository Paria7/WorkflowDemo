/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BciImprintDetailsService } from './bci-imprint-details.service';
import { ModalWindowService } from '../modal-window/modal-window.service';
import { MatDialogRef } from '@angular/material';
var BciImprintComponent = /** @class */ (function () {
    function BciImprintComponent(modalWindowService, imprintDetailsService, dialogRef) {
        this.modalWindowService = modalWindowService;
        this.imprintDetailsService = imprintDetailsService;
        this.dialogRef = dialogRef;
    }
    /**
     * @return {?}
     */
    BciImprintComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.imprintDetailsService.getImprintDetails().subscribe(function (imprintModel) {
            _this.data = imprintModel;
        });
    };
    /**
     * @return {?}
     */
    BciImprintComponent.prototype.clickCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    BciImprintComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bci-imprint',
                    template: "<!--\n  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n  -->\n\n<div class=\"dialog-header\">\n  <h3 matDialogTitle>Imprint</h3>\n  <button class=\"close-button\" mat-icon-button tabindex=\"-1\" (click)=\"clickCancel()\">\n    <i class=\"Bosch-Ic Bosch-Ic-abort\"></i>\n  </button>\n</div>\n<mat-dialog-content>\n  <a class=\"header-logo\">\n    <img src=\"./assets/img/bosch-invented-for-life.svg\" alt=\"Bosch Invented For Life Logo\">\n  </a>\n\n  <table class=\"name-and-version-container\">\n    <tbody>\n    <tr>\n      <td>Name</td>\n      <td>{{ data?.name }}</td>\n    </tr>\n    <tr>\n      <td>Version</td>\n      <td>{{ data?.version || '0.0.0' }}</td>\n    </tr>\n    </tbody>\n  </table>\n\n  <table>\n    <tbody>\n    <tr>\n      <td>Name and address</td>\n      <td>\n        <p>{{data?.address?.name || 'Robert Bosch Manufacturing Solutions GmbH' }}</p>\n        <p>{{data?.address?.street || 'Postfach 30 02 20' }}</p>\n        <p>{{data?.address?.city || '70442 Stuttgart' }}</p>\n        <p>{{data?.address?.country || 'GERMANY' }}</p>\n      </td>\n    </tr>\n    <tr>\n      <td>Contact</td>\n      <td>\n        <p *ngIf=\"data?.contactAtBosch\">{{data.contactAtBosch}}</p>\n        <p>\n          <a href=\"mailto:{{data?.contactMail || 'kontakt@bosch.com'}}\">{{data?.contactMail || 'kontakt@bosch.com'}}</a>\n        </p>\n      </td>\n    </tr>\n    <tr>\n      <td>Board of management</td>\n      <td>{{ data?.boardOfManagement || 'Enno Scharphuis, Dierk G\u00F6ckel, Dr. Stefan A\u00DFmann'}}</td>\n    </tr>\n    </tbody>\n  </table>\n</mat-dialog-content>\n\n\n\n",
                    styles: ["/*!\n * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */mat-dialog-content{font-family:Bosch-Sans;font-weight:300;font-size:14px}.header-logo img{align-self:center;height:58.2px;width:180px;margin-bottom:64px;margin-top:16px}table{font-family:Bosch-Sans;font-weight:300;font-size:14px}table td{padding:0 32px 32px 0;border-bottom:0}table td p{margin:0;font-family:Bosch-Sans;font-weight:300;font-size:14px}table tr{border-bottom:none}table tr>td:first-child{font-family:Bosch-Sans;font-size:14px;font-weight:700;color:#525f6b;padding-right:32px;vertical-align:top}.name-and-version-container{margin-bottom:32px}a:focus{outline:0}"]
                },] },
    ];
    /** @nocollapse */
    BciImprintComponent.ctorParameters = function () { return [
        { type: ModalWindowService },
        { type: BciImprintDetailsService },
        { type: MatDialogRef }
    ]; };
    return BciImprintComponent;
}());
export { BciImprintComponent };
if (false) {
    /** @type {?} */
    BciImprintComponent.prototype.data;
    /** @type {?} */
    BciImprintComponent.prototype.modalWindowService;
    /** @type {?} */
    BciImprintComponent.prototype.imprintDetailsService;
    /** @type {?} */
    BciImprintComponent.prototype.dialogRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLWltcHJpbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaW1wcmludC9iY2ktaW1wcmludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQXNFL0MsNkJBQW9CLGtCQUFzQyxFQUN0Qyx1QkFDQTtRQUZBLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsMEJBQXFCLEdBQXJCLHFCQUFxQjtRQUNyQixjQUFTLEdBQVQsU0FBUztLQUM1Qjs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixFQUFFLENBQUMsU0FBUyxDQUN0RCxVQUFBLFlBQVk7WUFDVixLQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztTQUMxQixDQUNGLENBQUM7S0FDSDs7OztJQUVNLHlDQUFXOzs7O1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7OztnQkFsRjFCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLDRtREEwRFg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsdXFCQUVzakIsQ0FBQztpQkFDamtCOzs7O2dCQW5FUSxrQkFBa0I7Z0JBRmxCLHdCQUF3QjtnQkFHeEIsWUFBWTs7OEJBUnJCOztTQTJFYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbmNlXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCY2lJbXByaW50RGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuL2JjaS1pbXByaW50LWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBJbXByaW50TW9kZWwgfSBmcm9tICcuL2ltcHJpbnQubW9kZWwnO1xuaW1wb3J0IHsgTW9kYWxXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kYWwtd2luZG93L21vZGFsLXdpbmRvdy5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmNpLWltcHJpbnQnLFxuICB0ZW1wbGF0ZTogYDwhLS1cbiAgfiBDb3B5cmlnaHQgKEMpIDIwMTggUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgsIEdlcm1hbnkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gIC0tPlxuXG48ZGl2IGNsYXNzPVwiZGlhbG9nLWhlYWRlclwiPlxuICA8aDMgbWF0RGlhbG9nVGl0bGU+SW1wcmludDwvaDM+XG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idXR0b25cIiBtYXQtaWNvbi1idXR0b24gdGFiaW5kZXg9XCItMVwiIChjbGljayk9XCJjbGlja0NhbmNlbCgpXCI+XG4gICAgPGkgY2xhc3M9XCJCb3NjaC1JYyBCb3NjaC1JYy1hYm9ydFwiPjwvaT5cbiAgPC9idXR0b24+XG48L2Rpdj5cbjxtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIDxhIGNsYXNzPVwiaGVhZGVyLWxvZ29cIj5cbiAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltZy9ib3NjaC1pbnZlbnRlZC1mb3ItbGlmZS5zdmdcIiBhbHQ9XCJCb3NjaCBJbnZlbnRlZCBGb3IgTGlmZSBMb2dvXCI+XG4gIDwvYT5cblxuICA8dGFibGUgY2xhc3M9XCJuYW1lLWFuZC12ZXJzaW9uLWNvbnRhaW5lclwiPlxuICAgIDx0Ym9keT5cbiAgICA8dHI+XG4gICAgICA8dGQ+TmFtZTwvdGQ+XG4gICAgICA8dGQ+e3sgZGF0YT8ubmFtZSB9fTwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+VmVyc2lvbjwvdGQ+XG4gICAgICA8dGQ+e3sgZGF0YT8udmVyc2lvbiB8fCAnMC4wLjAnIH19PC90ZD5cbiAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gIDwvdGFibGU+XG5cbiAgPHRhYmxlPlxuICAgIDx0Ym9keT5cbiAgICA8dHI+XG4gICAgICA8dGQ+TmFtZSBhbmQgYWRkcmVzczwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDxwPnt7ZGF0YT8uYWRkcmVzcz8ubmFtZSB8fCAnUm9iZXJ0IEJvc2NoIE1hbnVmYWN0dXJpbmcgU29sdXRpb25zIEdtYkgnIH19PC9wPlxuICAgICAgICA8cD57e2RhdGE/LmFkZHJlc3M/LnN0cmVldCB8fCAnUG9zdGZhY2ggMzAgMDIgMjAnIH19PC9wPlxuICAgICAgICA8cD57e2RhdGE/LmFkZHJlc3M/LmNpdHkgfHwgJzcwNDQyIFN0dXR0Z2FydCcgfX08L3A+XG4gICAgICAgIDxwPnt7ZGF0YT8uYWRkcmVzcz8uY291bnRyeSB8fCAnR0VSTUFOWScgfX08L3A+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyPlxuICAgICAgPHRkPkNvbnRhY3Q8L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8cCAqbmdJZj1cImRhdGE/LmNvbnRhY3RBdEJvc2NoXCI+e3tkYXRhLmNvbnRhY3RBdEJvc2NofX08L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86e3tkYXRhPy5jb250YWN0TWFpbCB8fCAna29udGFrdEBib3NjaC5jb20nfX1cIj57e2RhdGE/LmNvbnRhY3RNYWlsIHx8ICdrb250YWt0QGJvc2NoLmNvbSd9fTwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZD5Cb2FyZCBvZiBtYW5hZ2VtZW50PC90ZD5cbiAgICAgIDx0ZD57eyBkYXRhPy5ib2FyZE9mTWFuYWdlbWVudCB8fCAnRW5ubyBTY2hhcnBodWlzLCBEaWVyayBHw7Zja2VsLCBEci4gU3RlZmFuIEHDn21hbm4nfX08L3RkPlxuICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbiAgPC90YWJsZT5cbjwvbWF0LWRpYWxvZy1jb250ZW50PlxuXG5cblxuYCxcbiAgc3R5bGVzOiBbYC8qIVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovbWF0LWRpYWxvZy1jb250ZW50e2ZvbnQtZmFtaWx5OkJvc2NoLVNhbnM7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc2l6ZToxNHB4fS5oZWFkZXItbG9nbyBpbWd7YWxpZ24tc2VsZjpjZW50ZXI7aGVpZ2h0OjU4LjJweDt3aWR0aDoxODBweDttYXJnaW4tYm90dG9tOjY0cHg7bWFyZ2luLXRvcDoxNnB4fXRhYmxle2ZvbnQtZmFtaWx5OkJvc2NoLVNhbnM7Zm9udC13ZWlnaHQ6MzAwO2ZvbnQtc2l6ZToxNHB4fXRhYmxlIHRke3BhZGRpbmc6MCAzMnB4IDMycHggMDtib3JkZXItYm90dG9tOjB9dGFibGUgdGQgcHttYXJnaW46MDtmb250LWZhbWlseTpCb3NjaC1TYW5zO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTRweH10YWJsZSB0cntib3JkZXItYm90dG9tOm5vbmV9dGFibGUgdHI+dGQ6Zmlyc3QtY2hpbGR7Zm9udC1mYW1pbHk6Qm9zY2gtU2Fucztmb250LXNpemU6MTRweDtmb250LXdlaWdodDo3MDA7Y29sb3I6IzUyNWY2YjtwYWRkaW5nLXJpZ2h0OjMycHg7dmVydGljYWwtYWxpZ246dG9wfS5uYW1lLWFuZC12ZXJzaW9uLWNvbnRhaW5lcnttYXJnaW4tYm90dG9tOjMycHh9YTpmb2N1c3tvdXRsaW5lOjB9YF1cbn0pXG5leHBvcnQgY2xhc3MgQmNpSW1wcmludENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRhdGE6IEltcHJpbnRNb2RlbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsV2luZG93U2VydmljZTogTW9kYWxXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGltcHJpbnREZXRhaWxzU2VydmljZTogQmNpSW1wcmludERldGFpbHNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEJjaUltcHJpbnRDb21wb25lbnQ+KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmltcHJpbnREZXRhaWxzU2VydmljZS5nZXRJbXByaW50RGV0YWlscygpLnN1YnNjcmliZShcbiAgICAgIGltcHJpbnRNb2RlbCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGltcHJpbnRNb2RlbDtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNsaWNrQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxufVxuIl19