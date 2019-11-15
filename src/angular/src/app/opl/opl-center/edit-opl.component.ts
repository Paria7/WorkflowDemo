import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OplCenterService } from 'shared/services';
import { OplCenterModel } from 'shared/models/opl';
import { MAXLENGTH, MAXDESCRIPTIONLENGTH } from 'shared/constants';

@Component({
    selector: 'app-edit-opl',
    templateUrl: './edit-opl.component.html',
    styleUrls: ['./edit-opl.component.scss']
})
export class EditOplComponent {
    public form: FormGroup;
    public title: string;
    public opl: OplCenterModel;
    constructor(public dialogRef: MatDialogRef<EditOplComponent>,
        @Inject(MAT_DIALOG_DATA) opl: OplCenterModel,
        private oplCenterService: OplCenterService,
        private fb: FormBuilder) {
        this.form = fb.group({
            'Area': [''],
            'ValueStream': [''],
            'Line': [''],
            'Device': [''],
            'Status': [''],
            'Description': [],
            'Result': [''],
            'Comment': ['']
        });
        this.opl = opl;
    }

    public save() {
        this.form.controls["Result"].setValue(this.form.controls["Result"].value.trim());

        if (!this.form.valid) {
            return;
        }
        this.oplCenterService.saveOplDetail(this.opl.Id,this.opl.Description, this.opl.Result).subscribe(() => {
            this.dialogRef.close(true);
        });
    }
    complete() {
        this.form.controls["Comment"].setValue(this.form.controls["Comment"].value.trim());

        if (!this.form.valid) {
            return;
        }
        this.oplCenterService.completeOplDetail(this.opl.Id, this.opl.Comment).subscribe(() => {
            this.dialogRef.close(true);
        });
    }
}


