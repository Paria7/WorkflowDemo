import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OplCenterService } from 'shared/services';
import { DeleteOrCancelOplModel } from 'shared/models/opl';
import { MAXLENGTH, MAXDESCRIPTIONLENGTH } from 'shared/constants';

@Component({
  selector: 'app-delete-or-cancel-reason',
  templateUrl: './delete-or-cancel-reason.component.html',
  styleUrls: ['./delete-or-cancel-reason.component.scss']
})
export class DeleteOrCancelReasonComponent {
  public form: FormGroup;
  public title: string;
  public model: DeleteOrCancelOplModel;
  reason: string;
  constructor(public dialogRef: MatDialogRef<DeleteOrCancelReasonComponent>,
    @Inject(MAT_DIALOG_DATA) model: DeleteOrCancelOplModel,
    private oplCenterService: OplCenterService,
    private fb: FormBuilder) {
    this.form = fb.group({
      'Reason': ['', [Validators.required, Validators.maxLength(MAXLENGTH)]]
    });
    this.model = model;
  }

  public save() {
    this.form.controls["Reason"].setValue(this.form.controls["Reason"].value.trim());

    if (!this.form.valid) {
      return;
    }
    this.oplCenterService.deleteOrCancelOpl(this.model,this.reason).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
