import { Component, Inject,EventEmitter,Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { TpmAmendmentService } from 'shared/services';
import { RepairLogModel } from 'shared/models/tpm-amendment';
import { MAXLENGTH, MAXDESCRIPTIONLENGTH } from 'shared/constants';
import {InputCardNoModalComponent} from './input-card-no-modal/input-card-no-modal.component';

@Component({
  selector: 'add-or-edit-repair-log',
  templateUrl: './add-or-edit-repair-log.component.html',
  styleUrls: ['./add-or-edit-repair-log.component.scss']
})
export class AddOrEditRepairLogComponent {
  public form: FormGroup;
  public title: string;
  public repairLog: RepairLogModel;
  public cardNo = '';

  constructor(public dialogRef: MatDialogRef<AddOrEditRepairLogComponent>,
    @Inject(MAT_DIALOG_DATA) repairLog: RepairLogModel,
    private tpmAmendmentService: TpmAmendmentService,
    private fb: FormBuilder,
    private dialog: MatDialog) {
    this.form = fb.group({
      'Action': ['', [Validators.required,Validators.maxLength(MAXDESCRIPTIONLENGTH)]],
      'Description': ['', [Validators.required,Validators.maxLength(MAXDESCRIPTIONLENGTH)]]
    });
    this.repairLog = repairLog;

    // console.log('repair-log 是否需要刷卡:', this.repairLog.NeedSwingCard);
  }

  public save() {
    this.form.controls["Action"].setValue(this.form.controls["Action"].value.trim());
    this.form.controls["Description"].setValue(this.form.controls["Description"].value.trim());

    if (!this.form.valid) {
      return;
    }

    if (this.repairLog.NeedSwingCard) {
      this.dialog.open(InputCardNoModalComponent,
        {
          minWidth: '400px',
          data: Object.assign({cardNo: this.cardNo})
        }).afterClosed().subscribe((dialogResult) => {
        if (dialogResult) {
          console.log('返回的卡号为：', dialogResult);
          this.repairLog.NeedSwingCard = true;
          this.repairLog.CardNo = dialogResult;
          this.postSaveApi();
        }
      });
    } else {
      this.postSaveApi();
    }
  }

  /*
* 提交后台api
* */
  public postSaveApi(){
    this.tpmAmendmentService.saveRepairLog(this.repairLog).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
