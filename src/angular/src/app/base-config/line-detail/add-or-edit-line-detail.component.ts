import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { PlantService, AreaService, LineDetailService, ValueStreamService } from 'shared/services';
import { AreaModel, QueryAreaModel, LineStatusModel, PlantModel, LineDetailModel, ValueStreamModel } from 'shared/models/base-config';
import { MAXLENGTH, MAXDESCRIPTIONLENGTH } from 'shared/constants';
import { UserModel } from 'shared/models/administration/user.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-add-or-edit-line-detail',
    templateUrl: './add-or-edit-line-detail.component.html',
    styleUrls: ['./add-or-edit-line-detail.component.scss']
})
export class AddOrEditLineDetailComponent {
    public form: FormGroup;
    public title: string;
    public area: AreaModel;
    public statuses: Array<LineStatusModel> = [];
    public plants: Array<PlantModel> = [];
    public areas: Array<AreaModel> = [];
    public valueStreams: Array<ValueStreamModel> = [];
    public line: LineDetailModel;
    public queryModel: QueryAreaModel = {
        Code: '',
        Name: '',
        PlantId: '',
        Status: 0
    };
    public ownerListUsers: Array<UserModel> = [];
    public memberListUsers: Array<UserModel> = [];
    public file: any
    public selectedImage: any = [];
    private imageChanged: boolean = false;

    constructor(public dialogRef: MatDialogRef<AddOrEditLineDetailComponent>,
        @Inject(MAT_DIALOG_DATA) private dialogData: {
            statuses: LineStatusModel[], plants: PlantModel[],
            areas: AreaModel[], valueStreams: ValueStreamModel[], ownerUsers: UserModel[], memberUsers: UserModel[], line: LineDetailModel
        },
        private plantService: PlantService,
        private areaService: AreaService,
        private lineDetailService: LineDetailService,
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
            'ValueStreamId': ['', Validators.required],
            'WI': '',
            'Description': ['', [Validators.maxLength(MAXDESCRIPTIONLENGTH)]]
        });
        this.statuses = dialogData.statuses;
        this.plants = dialogData.plants;
        this.areas = dialogData.areas;
        this.line = dialogData.line;
        this.valueStreams = dialogData.valueStreams;
        this.ownerListUsers = dialogData.ownerUsers;
        this.memberListUsers = dialogData.memberUsers;
        if (this.line.MapId !== undefined && this.line.MapId !== null) {
            this.lineDetailService.getMapStrById(this.line.MapId).subscribe((item) => {
                this.line.Image = "data:image/jpeg;base64," + item;
                this.selectedImage.push(this.line.Image);
            });
        }
    }

    public onChangePlant(event?) {
        this.line.AreaId = '';
        this.line.ValueStreamId = '';
        this.getAreas();
    }

    private getAreas() {
        let model = {
            Code: '',
            Name: '',
            PlantId: this.line.PlantId,
            Status: 0
        };
        this.areaService.queryAreas(model).subscribe((areas) => {
            this.areas = areas;
        });
    }

    public onChangeArea(event?) {
        this.line.ValueStreamId = '';
        this.getValueStreams();
    }

    private getValueStreams() {
        let model = {
            Code: '',
            Name: '',
            PlantId: this.line.PlantId,
            AreaId: this.line.AreaId,
            Status: 0
        };
        this.valueStreamService.queryValueStreams(model).subscribe((valueStreams) => {
            this.valueStreams = valueStreams.filter(x => x.Status == 2);
        });
    }

    public onImageChanged(value) {
        this.line.Image = value[0];
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
            this.lineDetailService.saveLine(this.line).subscribe((item) => {
                let lineId: string = item["Id"];
                this.lineDetailService.saveUserList(lineId, 1, this.ownerListUsers).subscribe(() => {
                    this.lineDetailService.saveUserList(lineId, 2, this.memberListUsers).subscribe(() => {
                        if (this.imageChanged) {
                            this.lineDetailService.saveFile(lineId, this.file);
                        }
                        this.dialogRef.close(true);
                        this.snackBar.open(message, '', {
                            duration: 3000,
                            verticalPosition: 'top',
                        });
                    });
                });
            });
        });
    }
}
