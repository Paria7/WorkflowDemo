import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { PlantService, AreaService } from 'shared/services';
import { AreaModel, AreaStatusModel, PlantModel } from 'shared/models/base-config';
import { MAXLENGTH, MAXDESCRIPTIONLENGTH } from 'shared/constants';
import { UserModel } from 'shared/models/administration/user.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-add-or-edit-area-detail',
    templateUrl: './add-or-edit-area-detail.component.html',
    styleUrls: ['./add-or-edit-area-detail.component.scss']
})
export class AddOrEditAreaDetailComponent {
    public form: FormGroup;
    public title: string;
    public area: AreaModel;
    public statuses: Array<AreaStatusModel>;
    public plants: Array<PlantModel>;
    public ownerListUsers: Array<UserModel> = [];
    public file: any
    public selectedImage: any = [];
    private imageChanged: boolean = false;

    constructor(public dialogRef: MatDialogRef<AddOrEditAreaDetailComponent>,
        @Inject(MAT_DIALOG_DATA) private dialogData: { statuses: AreaStatusModel[], plants: PlantModel[], users: UserModel[], area: AreaModel },
        private plantService: PlantService,
        private areaService: AreaService,
        private translateService: TranslateService,
        private snackBar: MatSnackBar,
        private fb: FormBuilder) { 
        this.form = fb.group({
            'Name': ['', [Validators.required, Validators.maxLength(MAXLENGTH)]],
            'Code': ['', [Validators.required, Validators.maxLength(MAXLENGTH)]],
            'Status': ['', Validators.required],
            'PlantId': ['', Validators.required],
            'Description': ['', [Validators.maxLength(MAXDESCRIPTIONLENGTH)]]
        });
        this.statuses = dialogData.statuses;
        this.plants = dialogData.plants;
        this.area = dialogData.area;
        this.ownerListUsers = dialogData.users;
        if (this.area.MapId !== undefined && this.area.MapId !== null) {
            this.areaService.getMapStrById(this.area.MapId).subscribe((item) => {
                this.area.Image = "data:image/jpeg;base64," + item;
                this.selectedImage.push(this.area.Image);
            });
        }
    }

    public onImageChanged(value) {
        this.area.Image = value[0];
        this.imageChanged = true;
    }

    public onFileChanged(value) {
        this.file = value;
        this.imageChanged = true;
    }

    public save() {
        this.form.controls["Code"].setValue(this.form.controls["Code"].value.trim());
        this.form.controls["Name"].setValue(this.form.controls["Name"].value.trim());

        if (!this.form.valid) {
            return;
        }
        this.translateService.get('Common.SaveSuccessfully').subscribe((message) => {
            this.areaService.saveArea(this.area).subscribe((item) => {
                let areaId: string = item["Id"];
                this.areaService.saveOwnerList(areaId, this.ownerListUsers).subscribe(() => {
                    if (this.imageChanged) {
                        this.areaService.saveFile(areaId, this.file);
                    }
                    this.dialogRef.close(true);
                    this.snackBar.open(message, '', {
                        duration: 3000,
                        verticalPosition: 'top',
                    });
                });
            });
        });
    }
}
