import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TpmAmendmentService } from 'shared/services';
import { TpmPlanDetailModel } from 'shared/models/tpm-amendment';
import { MAXLENGTH, MAXDESCRIPTIONLENGTH } from 'shared/constants';

@Component({
  selector: 'change-tpm-plan-date',
  templateUrl: './change-tpm-plan-date.component.html',
  styleUrls: ['./change-tpm-plan-date.component.scss']
})
export class ChangeTpmPlanDateComponent {
  public form: FormGroup;
  public title: string;
  public tpmDetal: TpmPlanDetailModel;
  planDate: Date;
  minDate = new Date();
  constructor(public dialogRef: MatDialogRef<ChangeTpmPlanDateComponent>,
    @Inject(MAT_DIALOG_DATA) detail: TpmPlanDetailModel,
    private tpmAmendmentService: TpmAmendmentService,
    private fb: FormBuilder) {
    this.form = fb.group({
      'PlanDate': ['', [Validators.required]]
    });
    this.tpmDetal = detail;
  }

  public save() {
    if (!this.form.valid) {
      return;
    }
    this.tpmAmendmentService.changeTpmPlanDate(this.tpmDetal.CheckDetailId,this.planDate).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
