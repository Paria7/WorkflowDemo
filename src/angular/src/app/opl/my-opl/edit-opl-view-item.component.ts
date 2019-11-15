import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OplCenterService } from 'shared/services';
import { OplCenterModel } from 'shared/models/opl';
import { MAXLENGTH, MAXDESCRIPTIONLENGTH } from 'shared/constants';

@Component({
    selector: 'app-edit-opl-view-item',
    templateUrl: './edit-opl-view-item.component.html',
    styleUrls: ['./edit-opl-view-item.component.scss']
})
export class EditOplViewItemComponent {
    public form: FormGroup;
    public title: string;
    public opl: OplCenterModel;
    tabType: number;
    isSave = false;
    isComplete = false;
    constructor(public dialogRef: MatDialogRef<EditOplViewItemComponent>,
        @Inject(MAT_DIALOG_DATA) private dialogData: { opl: OplCenterModel, tabType: number },
        private oplCenterService: OplCenterService,
        private fb: FormBuilder) {
        this.form = fb.group({
            'Area': [''],
            'ValueStream': [''],
            'Line': [''],
            'Device': [''],
            'Status': [''],
            'Description': ['', Validators.required],
            'Result': [''],
            'Comment': ['']
        });
        this.opl = dialogData.opl;
        this.tabType = dialogData.tabType;
    }

    public save() {
        this.isSave = true;
        this.isComplete = false;
        if (!this.form.valid || this.form.controls["Result"]==null) {
            return;
        }
        this.form.controls["Result"].setValue(this.form.controls["Result"].value.trim());

        this.oplCenterService.saveOplDetail(this.opl.Id,this.opl.Description, this.opl.Result).subscribe(() => {
            this.dialogRef.close(true);
        });
    }
    complete() {
        this.isSave = false;
        this.isComplete = true;
        if (!this.form.valid || this.form.controls["Comment"]==null) {
            return;
        }
        this.form.controls["Comment"].setValue(this.form.controls["Comment"].value.trim());

        this.oplCenterService.completeOplDetail(this.opl.Id, this.opl.Comment).subscribe(() => {
            this.dialogRef.close(true);
        });
    }
}


