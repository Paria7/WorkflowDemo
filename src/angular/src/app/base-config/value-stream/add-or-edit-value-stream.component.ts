import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { PlantService, AreaService, ValueStreamService } from 'shared/services';
import { ValueStreamModel, ValueStreamStatusModel, PlantModel, AreaModel } from 'shared/models/base-config';
import { MAXLENGTH, MAXDESCRIPTIONLENGTH } from 'shared/constants';
import { UserModel } from 'shared/models/administration/user.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-add-or-edit-value-stream',
    templateUrl: './add-or-edit-value-stream.component.html',
    styleUrls: ['./add-or-edit-value-stream.component.scss']
})
export class AddOrEditValueStreamComponent {
    public form: FormGroup;
    public title: string;
    public statuses: Array<ValueStreamStatusModel>;
    public plants: Array<PlantModel>;
    public areas: Array<AreaModel>;
    public valueStream: ValueStreamModel;

    constructor(public dialogRef: MatDialogRef<AddOrEditValueStreamComponent>,
        @Inject(MAT_DIALOG_DATA) private dialogData: { statuses: ValueStreamStatusModel[], plants: PlantModel[], areas: AreaModel[], model: ValueStreamModel },
        private plantService: PlantService,
        private areaService: AreaService,
        private valueStreamService: ValueStreamService,
        private translateService: TranslateService,
        private snackBar: MatSnackBar,
        private fb: FormBuilder) {
        this.form = fb.group({
            'Name': ['', [Validators.required, Validators.maxLength(MAXLENGTH)]],
            'Code': ['', [Validators.required, Validators.maxLength(MAXLENGTH)]],
            'Status': ['', Validators.required],
            'PlantId': ['', Validators.required],
            'AreaId': ['', Validators.required],
            'Description': ['', [Validators.maxLength(MAXDESCRIPTIONLENGTH)]]
        });
        this.statuses = dialogData.statuses;
        this.plants = dialogData.plants;
        this.areas = dialogData.areas;
        this.valueStream = dialogData.model;
    }

    public save() {
        this.form.controls["Code"].setValue(this.form.controls["Code"].value.trim());
        this.form.controls["Name"].setValue(this.form.controls["Name"].value.trim());

        if (!this.form.valid) {
            return;
        }
        this.translateService.get('Common.SaveSuccessfully').subscribe((message) => {
            this.valueStreamService.saveValueStream(this.valueStream).subscribe((item) => {
                this.dialogRef.close(true);
                this.snackBar.open(message, '', {
                    duration: 3000,
                    verticalPosition: 'top',
                });
            });
        });
    }

    public onChangePlant(event?) {
        let plantId = event.value;
        this.getAreasByPlantId(plantId);
    }

    private getAreasByPlantId(plantId?: string) {
        if (plantId === undefined) {
            this.areas = [];
        } else {
            let model = {
                Name: '',
                Code: '',
                Status: 2,
                PlantId: plantId
            };
            this.areaService.queryAreas(model).subscribe((areas) => {
                this.areas = areas;
            });
        }
    }
}
