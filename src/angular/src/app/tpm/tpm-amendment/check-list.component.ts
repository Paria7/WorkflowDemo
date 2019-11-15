import { Component, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource, MatFormFieldModule, MatInputModule, MatSnackBar, MatDialog } from '@angular/material';
import { TpmAmendmentService, CommonService } from 'shared/services';
import {
    CheckDetailModel, MarkCheckDetailCompleteModel, OplModel,
    RepairLogModel, AttachmentModel, DoBySaveCheckListModel, CheckDetailDataModel, DoAndCheckModel
} from 'shared/models/tpm-amendment';
import { QueryCheckListModel } from 'shared/models/portal'
import { OplListComponent } from './opl-list.component'
import { RepairLogListComponent } from './repair-log-list.component'
import { CheckDetailViewType } from 'shared/models/portal'
import { SelectionModel } from '@angular/cdk/collections'
import { TranslateService } from '@ngx-translate/core';
import { InputCardNoModalComponent } from './input-card-no-modal/input-card-no-modal.component';

@Component({
    selector: 'check-list',
    templateUrl: './check-list.component.html',
    styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent {
    public form: FormGroup;
    public title: string;
    attachments: AttachmentModel[];
    opls: OplModel[];
    repairLogs: RepairLogModel[];
    checkValue = "";
    displayColumns: string[];
    dataSource = new MatTableDataSource<CheckDetailModel>([]);
    completeData: MarkCheckDetailCompleteModel = {};
    saveData: DoBySaveCheckListModel = {};
    canDoSave: boolean;
    canDoComplete: boolean;
    selectedRow: CheckDetailDataModel = {
        Id: "", CanDoSave: false, CanDoComplete: false, NeedCheckValue: false,
        CnDescription: "", EnDescription: "", HowToMaintain: "", Tools: "", CostTime: 0, Interval: "", Status: "",
        DeviceId: "", RowNo: "", IsNg: false, TPMPlanDetailId: ""
    };
    selectedRowNo: string;
    filterInfo: QueryCheckListModel;
    checkDetailId: string;
    deviceId: string;
    lineId: string;
    isPortal: boolean;
    isLogin: boolean = false; /*是否登录 */
    viewType: CheckDetailViewType;
    @ViewChild('oplListModel') oplListModel: OplListComponent;
    @ViewChild('repairLogListModel') repairLogListModel: RepairLogListComponent;
    checkedDetails: SelectionModel<CheckDetailModel>;
    details: CheckDetailModel[];
    selectedRowIndex: number;
    public cardNo = '';
    showButtons: boolean;

    constructor(public dialogRef: MatDialogRef<CheckListComponent>,
        @Inject(MAT_DIALOG_DATA) filter: QueryCheckListModel,
        private tpmAmendmentService: TpmAmendmentService,
        private commonService: CommonService,
        private snackBar: MatSnackBar,
        private translate: TranslateService,
        private dialog: MatDialog,
        private fb: FormBuilder) {
        this.form = fb.group({
            'No': [''],
            'Status': [''],
            'CostTime': [''],
            'Interval': [''],
            'HowToMaintain': [''],
            'Tools': [''],
            'Values': [''],
            'IsNg': ['']
            // 'Values': ['', Validators.required]
        });
        this.filterInfo = filter;
        this.viewType = filter.ViewType;
        this.isPortal = filter.ViewType == CheckDetailViewType.Portal;
        this.lineId = this.filterInfo.LineId;
        console.log('check-list:filter.IsLogin', filter.IsLogin);
        this.isLogin = typeof filter.IsLogin == 'undefined' ? this.isLogin : filter.IsLogin;
        console.log('check-list:this.isLogin', this.isLogin);
        this.loadCheckDetail();
        if (this.isPortal) {
            this.selectedRow.CanDoSave = true;
            this.selectedRow.CanDoComplete = true;
            let path = location.href.substr(location.href.indexOf(location.host) + location.host.length);
            if (path === "/portal") {
                this.selectedRow.CanDoSave = false;
                this.selectedRow.CanDoComplete = false;
                this.displayColumns = ['no', 'description', 'time', 'interval', 'doBy', 'checkValue'];
                this.showButtons = false;
            } else {
                this.displayColumns = ['checkBoxes', 'no', 'description', 'status', 'time', 'interval', 'doBy', 'checkValue'];
                this.showButtons = true;
            }
        } else {
            this.displayColumns = ['no', 'description', 'time', 'interval', 'doBy', 'checkValue'];
            this.showButtons = false;
        }
        this.checkedDetails = new SelectionModel<CheckDetailModel>(true, []);
    }

    loadCheckDetail() {
        return this.tpmAmendmentService.getCheckDetails(this.filterInfo.CheckDetailId, this.filterInfo.LineId,
            this.filterInfo.DeviceId).subscribe(details => {
                this.dataSource.data = details;
                console.log("details");
                console.log(details);
                this.details = details;
                if (details.length > 0) {
                    this.selectRow(details[0], 0);
                    let rowNo: number = 1;
                    this.details.forEach(item => {
                        item.RowNo = rowNo;
                        rowNo++;
                    });
                }
            });
    }

    save() {
        if (this.isPortal) {
            if (this.checkedDetails.selected.length === 0) {
                this.showAlert();
            } else {
                let checkIsComplete = this.checkIsComplete();
                let checkValueFilled = this.checkValueIsFilled();
                if (checkIsComplete === null) {
                    if (checkValueFilled === null) {
                        this.dialog.open(InputCardNoModalComponent,
                            {
                                minWidth: '400px',
                                data: Object.assign({ cardNo: this.cardNo })
                            }).afterClosed().subscribe((dialogResult) => {
                                if (dialogResult) {
                                    console.log('返回值为：', dialogResult);
                                    let employeeNo = dialogResult;
                                    this.checkedDetails.selected.forEach(item => {
                                        item.DoUser = employeeNo;
                                    });
                                    this.checkCanDoSave();
                                }
                            });
                    } else {
                        this.showCheckValueNotFilledAlert(checkValueFilled);
                    }
                } else {
                    this.showIsCompleteInfo(checkIsComplete);
                }
            }
        } else {
            this.saveData.CheckDetailId = this.selectedRow.Id;
            this.saveData.CheckValue = this.checkValue;
            this.saveData.IsNg = this.selectedRow.IsNg;
            console.log(this.saveData);

            this.tpmAmendmentService.doBySaveCheckList(this.saveData).subscribe(() => {
                this.dialogRef.close(true);
            });
        }
    }

    complete() {
        if (this.isPortal) {
            if (this.checkedDetails.selected.length === 0) {
                this.showAlert();
            } else {
                let checkIsComplete = this.checkIsComplete();
                let checkDoByIsDone = this.checkDoByIsDone();
                if (checkIsComplete === null) {
                    if (checkDoByIsDone === null) {
                        this.dialog.open(InputCardNoModalComponent,
                            {
                                minWidth: '400px',
                                data: Object.assign({ cardNo: this.cardNo })
                            }).afterClosed().subscribe((dialogResult) => {
                                if (dialogResult) {
                                    console.log('返回值为：', dialogResult);
                                    let employeeNo = dialogResult;
                                    this.checkedDetails.selected.forEach(item => {
                                        item.CheckUser = employeeNo;
                                    });
                                    this.checkCanDoComplete();
                                }
                            });
                    } else {
                        this.showDoByIsNotDone(checkDoByIsDone);
                    }
                } else {
                    this.showIsCompleteInfo(checkIsComplete);
                }
            }
        } else {
            this.completeData.CheckDetailId = this.selectedRow.Id;
            this.tpmAmendmentService.markCheckDetailComplete(this.completeData).subscribe(() => {
                this.dialogRef.close(true);
            });
        }
    }

    showAlert() {
        this.translate.get('TpmAmendment.CheckNothing').subscribe((message) => {
            this.snackBar.open(message, '',
                {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: 'snack-error'
                });
        });
    }

    checkCanDoSave() {
        console.log(this.checkedDetails.selected);
        let checkDoByModels: DoAndCheckModel[] = [];
        for (var i = 0; i < this.checkedDetails.selected.length; i++) {
            let model: DoAndCheckModel = {};
            let item = this.checkedDetails.selected[i];
            model.Id = item.Id;
            model.RowNo = item.RowNo;
            model.LineId = this.lineId;
            model.DeviceId = item.DeviceId;
            model.TPMPlanDetailId = item.TPMPlanDetailId;
            model.DoUserEmployeeNo = item.DoUser;
            model.PlanDate = item.PlanDate;
            model.IsNg = item.IsNg;
            checkDoByModels.push(model);
        }
        this.tpmAmendmentService.CheckCanDoBy(checkDoByModels).subscribe(result => {
            if (result === null || result === undefined) {
                this.tpmAmendmentService.doBySaveBatchCheckList(this.checkedDetails.selected).subscribe(() => {
                    this.dialogRef.close(true);
                });
            } else {
                this.showCanNotDoSave(result);
            }
        });
    }

    checkCanDoComplete() {
        let checkDoByModels: DoAndCheckModel[] = [];
        for (var i = 0; i < this.checkedDetails.selected.length; i++) {
            let model: DoAndCheckModel = {};
            let item = this.checkedDetails.selected[i];
            model.Id = item.Id;
            model.RowNo = item.RowNo;
            model.LineId = this.lineId;
            model.DeviceId = item.DeviceId;
            model.TPMPlanDetailId = item.TPMPlanDetailId;
            model.CheckUserEmployeeNo = item.CheckUser;
            checkDoByModels.push(model);
        }

        this.tpmAmendmentService.CheckCanCompleteBy(checkDoByModels).subscribe(result => {
            if (result === null || result === undefined) {
                this.tpmAmendmentService.markBatchCheckDetailComplete(this.checkedDetails.selected).subscribe(() => {
                    this.dialogRef.close(true);
                });
            } else {
                this.showCanNotDoComplete(result);
            }
        });
    }


    checkValueIsFilled() {
        let result = null;
        for (var i = 0; i < this.checkedDetails.selected.length; i++) {
            var item = this.checkedDetails.selected[i];
            if (item.NeedCheckValue && (item.CheckValue === "" || item.CheckValue === null)) {
                return item;
            }
        }
        return result;
    }

    checkIsComplete() {
        let result = null;
        for (var i = 0; i < this.checkedDetails.selected.length; i++) {
            var item = this.checkedDetails.selected[i];
            if (item.Status === "Complete") {
                return item;
            }
        }
        return result;
    }

    showIsCompleteInfo(item) {
        this.translate.get('TpmAmendment').subscribe((message) => {
            let messageOne = message["CompleteInfo"];
            let messageTwo = message["CompleteInfoTwo"];
            let resultMessage = messageOne + item.RowNo + messageTwo;
            this.snackBar.open(resultMessage, '',
                {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: 'snack-error'
                });
        });
    }

    showCheckValueNotFilledAlert(item) {
        this.translate.get('TpmAmendment').subscribe((message) => {
            let messageOne = message["CheckValueNoFilled"];
            let messageTwo = message["CheckValueNoFilledTwo"];
            let resultMessage = messageOne + item.RowNo + messageTwo;
            this.snackBar.open(resultMessage, '',
                {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: 'snack-error'
                });
        });
    }

    showCanNotDoSave(item) {
        this.translate.get('TpmAmendment').subscribe((message) => {
            let messageOne = message["CheckCanNotDoSave"];
            let messageTwo = message["CheckCanNotDoSaveTwo"];
            let resultMessage = messageOne + item.RowNo + messageTwo;
            this.snackBar.open(resultMessage, '',
                {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: 'snack-error'
                });
        });
    }

    showCanNotDoComplete(item) {
        this.translate.get('TpmAmendment').subscribe((message) => {
            let messageOne = message["CheckCanNotDoComplete"];
            let messageTwo = message["CheckCanNotDoCompleteTwo"];
            let resultMessage = messageOne + item.RowNo + messageTwo;
            this.snackBar.open(resultMessage, '',
                {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: 'snack-error'
                });
        });
    }

    checkDoByIsDone() {
        let result = null;
        for (var i = 0; i < this.checkedDetails.selected.length; i++) {
            var item = this.checkedDetails.selected[i];
            if (item.DoUser === "" || item.DoUser === null) {
                return item;
            }
        }
        return result;
    }

    showDoByIsNotDone(item) {
        this.translate.get('TpmAmendment').subscribe((message) => {
            let messageOne = message["DoByIsNotDone"];
            let messageTwo = message["DoByIsNotDoneTwo"];
            let resultMessage = messageOne + item.RowNo + messageTwo;
            this.snackBar.open(resultMessage, '',
                {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: 'snack-error'
                });
        });
    }

    selectRow(row, index) {
        this.setRowData(row, index);
        this.attachments = row.Attachments;
        for (let item of this.attachments) {
            // item.DownloadUri = this.commonService.getApiConfig().ApiBaseUrl + "api/attachment/downloadFile/" + item.Id;
            item.DownloadUri = item.DownloadUri;
        }
        this.opls = row.Opls;
        this.repairLogs = row.RepairLogs;
        this.selectedRowIndex = index;
        if (this.isPortal) {
            if (this.selectedRow.NeedCheckValue) {
                if (this.details[this.selectedRowIndex].CheckValue !== "") {
                    this.checkValue = this.details[this.selectedRowIndex].CheckValue;
                }
            }
        }
    }

    setRowData(row, index) {
        console.log('row=', row);
        this.selectedRow.Id = row.Id;
        this.selectedRow.RowNo = index + 1;
        this.selectedRow.DeviceId = row.DeviceId;
        this.selectedRow.CnDescription = row.CnDescription;
        this.selectedRow.EnDescription = row.EnDescription;
        this.selectedRow.NeedCheckValue = row.NeedCheckValue;
        this.selectedRow.Status = row.Status;
        this.selectedRow.HowToMaintain = row.HowToMaintain;
        this.selectedRow.Tools = row.Tools;
        this.selectedRow.CostTime = row.CostTime;
        this.selectedRow.Interval = row.Interval;
        this.selectedRow.IsNg = row.IsNg;
        this.selectedRow.TPMPlanDetailId = row.TPMPlanDetailId;
        console.log('selectedRow=', row);
        if (this.isPortal) {
            this.selectedRow.CanDoSave = true;
            this.selectedRow.CanDoComplete = true;
            let path = location.href.substr(location.href.indexOf(location.host) + location.host.length);
            if (path === "/portal") {
                this.selectedRow.CanDoSave = false;
                this.selectedRow.CanDoComplete = false;
            }
        } else {
            this.selectedRow.CanDoSave = row.CanDoSave;
            this.selectedRow.CanDoComplete = row.CanDoComplete;
        }
    }

    isAllChecked() {
        const numSelected = this.checkedDetails.selected.length;
        const numRows = this.details.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllChecked() ?
            this.checkedDetails.clear() :
            this.details.forEach(row => this.checkedDetails.select(row));
    }

    saveCheckValue() {
        if (this.isPortal) {
            this.details[this.selectedRowIndex].CheckValue = this.checkValue;
            this.checkValue = "";
        }
    }

    changeIsNg($event) {
        console.log('改变是否ng了', $event);
        this.details[this.selectedRowIndex].IsNg = $event.checked
        // this.selectedRow.IsNg = $event.checked.
        console.log(this.selectedRow);

    }
}
