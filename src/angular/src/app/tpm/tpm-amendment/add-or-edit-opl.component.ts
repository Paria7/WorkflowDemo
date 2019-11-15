import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { TpmAmendmentService } from 'shared/services';
import { OplModel } from 'shared/models/tpm-amendment';
import { MAXLENGTH, MAXDESCRIPTIONLENGTH } from 'shared/constants';
import { InputCardNoModalComponent } from './input-card-no-modal/input-card-no-modal.component';
import { OplModule } from 'app/opl';

@Component({
  selector: 'add-or-edit-opl',
  templateUrl: './add-or-edit-opl.component.html',
  styleUrls: ['./add-or-edit-opl.component.scss']
})
export class AddOrEditOplComponent {
  public form: FormGroup;
  public title: string;
  public opl: OplModel;
  public cardNo = '';
  public startTimeTxt = new Date();

  constructor(public dialogRef: MatDialogRef<AddOrEditOplComponent>,
    @Inject(MAT_DIALOG_DATA) opl: OplModel,
    private tpmAmendmentService: TpmAmendmentService,
    private fb: FormBuilder,
    private dialog: MatDialog) {
    this.form = fb.group({
      'Description': ['', [Validators.required, Validators.maxLength(MAXDESCRIPTIONLENGTH)]],
      'ClosedOn': ['']
    });
    this.opl = opl;

    console.log('this.opl参数=', this.opl);
  }

  public save() {
    this.form.controls["Description"].setValue(this.form.controls["Description"].value.trim());

    if (!this.form.valid) {
      return;
    }
    if (this.opl.NeedSwingCard) {
      this.dialog.open(InputCardNoModalComponent,
        {
          minWidth: '400px',
          data: Object.assign({ cardNo: this.cardNo })
        }).afterClosed().subscribe((dialogResult) => {
          if (dialogResult) {
            console.log('返回的卡号为：', dialogResult);
            this.opl.CardNo = dialogResult;
            this.postSaveApi();
          }
        })
    } else {
      this.postSaveApi();
    }
  }

  /*
  * 提交后台api
  * */
  public postSaveApi() {
    console.log('this.opl', this.opl);
    this.tpmAmendmentService.saveOpl(this.opl).subscribe(opl => {
      this.dialogRef.close(true);
    });
  }
}
