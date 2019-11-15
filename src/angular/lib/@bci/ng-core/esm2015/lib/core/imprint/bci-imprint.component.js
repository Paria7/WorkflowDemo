/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BciImprintDetailsService } from './bci-imprint-details.service';
import { ModalWindowService } from '../modal-window/modal-window.service';
import { MatDialogRef } from '@angular/material';
export class BciImprintComponent {
    /**
     * @param {?} modalWindowService
     * @param {?} imprintDetailsService
     * @param {?} dialogRef
     */
    constructor(modalWindowService, imprintDetailsService, dialogRef) {
        this.modalWindowService = modalWindowService;
        this.imprintDetailsService = imprintDetailsService;
        this.dialogRef = dialogRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.imprintDetailsService.getImprintDetails().subscribe(imprintModel => {
            this.data = imprintModel;
        });
    }
    /**
     * @return {?}
     */
    clickCancel() {
        this.dialogRef.close();
    }
}
BciImprintComponent.decorators = [
    { type: Component, args: [{
                selector: 'bci-imprint',
                template: `<!--
  ~ Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
  -->

<div class="dialog-header">
  <h3 matDialogTitle>Imprint</h3>
  <button class="close-button" mat-icon-button tabindex="-1" (click)="clickCancel()">
    <i class="Bosch-Ic Bosch-Ic-abort"></i>
  </button>
</div>
<mat-dialog-content>
  <a class="header-logo">
    <img src="./assets/img/bosch-invented-for-life.svg" alt="Bosch Invented For Life Logo">
  </a>

  <table class="name-and-version-container">
    <tbody>
    <tr>
      <td>Name</td>
      <td>{{ data?.name }}</td>
    </tr>
    <tr>
      <td>Version</td>
      <td>{{ data?.version || '0.0.0' }}</td>
    </tr>
    </tbody>
  </table>

  <table>
    <tbody>
    <tr>
      <td>Name and address</td>
      <td>
        <p>{{data?.address?.name || 'Robert Bosch Manufacturing Solutions GmbH' }}</p>
        <p>{{data?.address?.street || 'Postfach 30 02 20' }}</p>
        <p>{{data?.address?.city || '70442 Stuttgart' }}</p>
        <p>{{data?.address?.country || 'GERMANY' }}</p>
      </td>
    </tr>
    <tr>
      <td>Contact</td>
      <td>
        <p *ngIf="data?.contactAtBosch">{{data.contactAtBosch}}</p>
        <p>
          <a href="mailto:{{data?.contactMail || 'kontakt@bosch.com'}}">{{data?.contactMail || 'kontakt@bosch.com'}}</a>
        </p>
      </td>
    </tr>
    <tr>
      <td>Board of management</td>
      <td>{{ data?.boardOfManagement || 'Enno Scharphuis, Dierk Göckel, Dr. Stefan Aßmann'}}</td>
    </tr>
    </tbody>
  </table>
</mat-dialog-content>



`,
                styles: [`/*!
 * Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */mat-dialog-content{font-family:Bosch-Sans;font-weight:300;font-size:14px}.header-logo img{align-self:center;height:58.2px;width:180px;margin-bottom:64px;margin-top:16px}table{font-family:Bosch-Sans;font-weight:300;font-size:14px}table td{padding:0 32px 32px 0;border-bottom:0}table td p{margin:0;font-family:Bosch-Sans;font-weight:300;font-size:14px}table tr{border-bottom:none}table tr>td:first-child{font-family:Bosch-Sans;font-size:14px;font-weight:700;color:#525f6b;padding-right:32px;vertical-align:top}.name-and-version-container{margin-bottom:32px}a:focus{outline:0}`]
            },] },
];
/** @nocollapse */
BciImprintComponent.ctorParameters = () => [
    { type: ModalWindowService },
    { type: BciImprintDetailsService },
    { type: MatDialogRef }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNpLWltcHJpbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJjaS9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaW1wcmludC9iY2ktaW1wcmludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBbUVqRCxNQUFNOzs7Ozs7SUFHSixZQUFvQixrQkFBc0MsRUFDdEMsdUJBQ0E7UUFGQSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDBCQUFxQixHQUFyQixxQkFBcUI7UUFDckIsY0FBUyxHQUFULFNBQVM7S0FDNUI7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixFQUFFLENBQUMsU0FBUyxDQUN0RCxZQUFZLENBQUMsRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1NBQzFCLENBQ0YsQ0FBQztLQUNIOzs7O0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDOzs7O1lBbEYxQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTBEWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQzs7aWtCQUVzakIsQ0FBQzthQUNqa0I7Ozs7WUFuRVEsa0JBQWtCO1lBRmxCLHdCQUF3QjtZQUd4QixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5jZVxuICogQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmNpSW1wcmludERldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi9iY2ktaW1wcmludC1kZXRhaWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1wcmludE1vZGVsIH0gZnJvbSAnLi9pbXByaW50Lm1vZGVsJztcbmltcG9ydCB7IE1vZGFsV2luZG93U2VydmljZSB9IGZyb20gJy4uL21vZGFsLXdpbmRvdy9tb2RhbC13aW5kb3cuc2VydmljZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JjaS1pbXByaW50JyxcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIH4gQ29weXJpZ2h0IChDKSAyMDE4IFJvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJILCBHZXJtYW55LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAtLT5cblxuPGRpdiBjbGFzcz1cImRpYWxvZy1oZWFkZXJcIj5cbiAgPGgzIG1hdERpYWxvZ1RpdGxlPkltcHJpbnQ8L2gzPlxuICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnV0dG9uXCIgbWF0LWljb24tYnV0dG9uIHRhYmluZGV4PVwiLTFcIiAoY2xpY2spPVwiY2xpY2tDYW5jZWwoKVwiPlxuICAgIDxpIGNsYXNzPVwiQm9zY2gtSWMgQm9zY2gtSWMtYWJvcnRcIj48L2k+XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG48bWF0LWRpYWxvZy1jb250ZW50PlxuICA8YSBjbGFzcz1cImhlYWRlci1sb2dvXCI+XG4gICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWcvYm9zY2gtaW52ZW50ZWQtZm9yLWxpZmUuc3ZnXCIgYWx0PVwiQm9zY2ggSW52ZW50ZWQgRm9yIExpZmUgTG9nb1wiPlxuICA8L2E+XG5cbiAgPHRhYmxlIGNsYXNzPVwibmFtZS1hbmQtdmVyc2lvbi1jb250YWluZXJcIj5cbiAgICA8dGJvZHk+XG4gICAgPHRyPlxuICAgICAgPHRkPk5hbWU8L3RkPlxuICAgICAgPHRkPnt7IGRhdGE/Lm5hbWUgfX08L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyPlxuICAgICAgPHRkPlZlcnNpb248L3RkPlxuICAgICAgPHRkPnt7IGRhdGE/LnZlcnNpb24gfHwgJzAuMC4wJyB9fTwvdGQ+XG4gICAgPC90cj5cbiAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuXG4gIDx0YWJsZT5cbiAgICA8dGJvZHk+XG4gICAgPHRyPlxuICAgICAgPHRkPk5hbWUgYW5kIGFkZHJlc3M8L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8cD57e2RhdGE/LmFkZHJlc3M/Lm5hbWUgfHwgJ1JvYmVydCBCb3NjaCBNYW51ZmFjdHVyaW5nIFNvbHV0aW9ucyBHbWJIJyB9fTwvcD5cbiAgICAgICAgPHA+e3tkYXRhPy5hZGRyZXNzPy5zdHJlZXQgfHwgJ1Bvc3RmYWNoIDMwIDAyIDIwJyB9fTwvcD5cbiAgICAgICAgPHA+e3tkYXRhPy5hZGRyZXNzPy5jaXR5IHx8ICc3MDQ0MiBTdHV0dGdhcnQnIH19PC9wPlxuICAgICAgICA8cD57e2RhdGE/LmFkZHJlc3M/LmNvdW50cnkgfHwgJ0dFUk1BTlknIH19PC9wPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZD5Db250YWN0PC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHAgKm5nSWY9XCJkYXRhPy5jb250YWN0QXRCb3NjaFwiPnt7ZGF0YS5jb250YWN0QXRCb3NjaH19PC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnt7ZGF0YT8uY29udGFjdE1haWwgfHwgJ2tvbnRha3RAYm9zY2guY29tJ319XCI+e3tkYXRhPy5jb250YWN0TWFpbCB8fCAna29udGFrdEBib3NjaC5jb20nfX08L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+Qm9hcmQgb2YgbWFuYWdlbWVudDwvdGQ+XG4gICAgICA8dGQ+e3sgZGF0YT8uYm9hcmRPZk1hbmFnZW1lbnQgfHwgJ0Vubm8gU2NoYXJwaHVpcywgRGllcmsgR8O2Y2tlbCwgRHIuIFN0ZWZhbiBBw59tYW5uJ319PC90ZD5cbiAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gIDwvdGFibGU+XG48L21hdC1kaWFsb2ctY29udGVudD5cblxuXG5cbmAsXG4gIHN0eWxlczogW2AvKiFcbiAqIENvcHlyaWdodCAoQykgMjAxOCBSb2JlcnQgQm9zY2ggTWFudWZhY3R1cmluZyBTb2x1dGlvbnMgR21iSCwgR2VybWFueS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqL21hdC1kaWFsb2ctY29udGVudHtmb250LWZhbWlseTpCb3NjaC1TYW5zO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTRweH0uaGVhZGVyLWxvZ28gaW1ne2FsaWduLXNlbGY6Y2VudGVyO2hlaWdodDo1OC4ycHg7d2lkdGg6MTgwcHg7bWFyZ2luLWJvdHRvbTo2NHB4O21hcmdpbi10b3A6MTZweH10YWJsZXtmb250LWZhbWlseTpCb3NjaC1TYW5zO2ZvbnQtd2VpZ2h0OjMwMDtmb250LXNpemU6MTRweH10YWJsZSB0ZHtwYWRkaW5nOjAgMzJweCAzMnB4IDA7Ym9yZGVyLWJvdHRvbTowfXRhYmxlIHRkIHB7bWFyZ2luOjA7Zm9udC1mYW1pbHk6Qm9zY2gtU2Fucztmb250LXdlaWdodDozMDA7Zm9udC1zaXplOjE0cHh9dGFibGUgdHJ7Ym9yZGVyLWJvdHRvbTpub25lfXRhYmxlIHRyPnRkOmZpcnN0LWNoaWxke2ZvbnQtZmFtaWx5OkJvc2NoLVNhbnM7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiM1MjVmNmI7cGFkZGluZy1yaWdodDozMnB4O3ZlcnRpY2FsLWFsaWduOnRvcH0ubmFtZS1hbmQtdmVyc2lvbi1jb250YWluZXJ7bWFyZ2luLWJvdHRvbTozMnB4fWE6Zm9jdXN7b3V0bGluZTowfWBdXG59KVxuZXhwb3J0IGNsYXNzIEJjaUltcHJpbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkYXRhOiBJbXByaW50TW9kZWw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFdpbmRvd1NlcnZpY2U6IE1vZGFsV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBpbXByaW50RGV0YWlsc1NlcnZpY2U6IEJjaUltcHJpbnREZXRhaWxzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxCY2lJbXByaW50Q29tcG9uZW50Pikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbXByaW50RGV0YWlsc1NlcnZpY2UuZ2V0SW1wcmludERldGFpbHMoKS5zdWJzY3JpYmUoXG4gICAgICBpbXByaW50TW9kZWwgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBpbXByaW50TW9kZWw7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGlja0NhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cbiJdfQ==