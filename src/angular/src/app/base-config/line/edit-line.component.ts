import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatCheckbox } from '@angular/material';
import { LineService, LineBusinessUnitMapService } from 'shared/services';
import { LineModel, PlantModel, BusinessUnitModel, ProcessModel } from 'shared/models/base-config';
import { forEach } from '@angular/router/src/utils/collection';
import { CheckboxControlValueAccessor } from '@angular/forms/src/directives/checkbox_value_accessor';
import { MAXLENGTH, MAXDESCRIPTIONLENGTH } from 'shared/constants';

@Component({
  selector: 'app-edit-line',
  templateUrl: './edit-line.component.html',
  styleUrls: ['./edit-line.component.scss']
})
export class EditLineComponent implements OnInit {
  public form: FormGroup;
  public plants: Array<PlantModel>;
  public businessUnits: Array<BusinessUnitModel> = [];
  public processes: Array<ProcessModel> = [];
  public line: LineModel;
  public selectedBusinessUnits: any;

  constructor(public dialogRef: MatDialogRef<EditLineComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private dialogData: { plants: PlantModel[], line: LineModel },
    private lineService: LineService,
    private lineBusinessUnitMapService: LineBusinessUnitMapService,
) {
    this.form = fb.group({
      'PlantId': ['', Validators.required],
      'ProcessId': ['', Validators.required],
      'Code': ['', [Validators.required, Validators.maxLength(MAXLENGTH)]],
      'Name': ['', [Validators.required, Validators.maxLength(MAXLENGTH)]],
      'IsActive': [''],
      'IsNewLine': [''],
      'Description': ['', [Validators.maxLength(MAXDESCRIPTIONLENGTH)]]
    });

    this.line = dialogData.line;
    this.plants = dialogData.plants;
  }

  ngOnInit(): void {

  }

  public save() {
    this.form.controls["Code"].setValue(this.form.controls["Code"].value.trim());
    this.form.controls["Name"].setValue(this.form.controls["Name"].value.trim());

    if (!this.form.valid) {
      return;
    }

    this.lineService.saveLine(this.line).subscribe((item) => {
      this.saveBusinessUnits(item);
    });
  }

  private saveBusinessUnits(item) {
    if (this.line.Id === null) {
      this.line.Id = item.Id
    }
    this.lineBusinessUnitMapService.removeBusinessUnitsByLineId(this.line.Id).subscribe(() => {
      this.businessUnits.forEach((item) => {
        if (this.form.controls[item.Code].value) {
          let model = {
            'lineId': this.line.Id,
            'businessUnitId': item.Id
          };
          this.lineBusinessUnitMapService.saveBusinessUnitsByLineId(model).subscribe();
        }
      });
      this.dialogRef.close(true);
    });
  }

}
