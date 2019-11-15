import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PlantService } from 'shared/services';
import { PlantModel } from 'shared/models/base-config';
import { MAXLENGTH, MAXDESCRIPTIONLENGTH } from 'shared/constants';

@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.scss']
})
export class EditPlantComponent {
  public form: FormGroup;
  public title: string;
  public plant: PlantModel;

  constructor(public dialogRef: MatDialogRef<EditPlantComponent>,
    @Inject(MAT_DIALOG_DATA) plant: PlantModel,
    private plantService: PlantService,
    private fb: FormBuilder) {
    this.form = fb.group({
      'Name': ['', [Validators.required, Validators.maxLength(MAXLENGTH)]],
      'Code': ['', [Validators.required, Validators.maxLength(MAXLENGTH)]],
      'IsActive': [''],
      'Description': ['', [Validators.maxLength(MAXDESCRIPTIONLENGTH)]]
    });
    this.plant = plant || { Id: null };
  }

  public save() {
    this.form.controls["Code"].setValue(this.form.controls["Code"].value.trim());
    this.form.controls["Name"].setValue(this.form.controls["Name"].value.trim());

    if (!this.form.valid) {
      return;
    }
    
    this.plantService.savePlant(this.plant).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
