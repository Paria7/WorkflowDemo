import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PlantService, AreaService, LineDetailService, StationDetailService, ValueStreamService } from 'shared/services';
import { AreaModel, QueryAreaModel, LineStatusModel, PlantModel, ValueStreamModel, LineDetailModel, StationDetailModel } from 'shared/models/base-config';
import { MAXLENGTH, MAXDESCRIPTIONLENGTH } from 'shared/constants';
import { NameValueModel } from 'shared/models/tpm-amendment';

@Component({
    selector: 'app-add-or-edit-station-detail',
    templateUrl: './add-or-edit-station-detail.component.html',
    styleUrls: ['./add-or-edit-station-detail.component.scss']
})
export class AddOrEditStationDetailComponent {
    public form: FormGroup;
    public title: string;
    public area: AreaModel;
    public statuses: Array<NameValueModel> = [];
    public plants: Array<PlantModel> = [];
    public areas: Array<AreaModel> = [];
    public valueStreams: Array<ValueStreamModel> = [];
    public lines: Array<LineDetailModel> = [];
    public station: StationDetailModel;

    constructor(public dialogRef: MatDialogRef<AddOrEditStationDetailComponent>,
        @Inject(MAT_DIALOG_DATA) private dialogData: {
            statuses: NameValueModel[], station: StationDetailModel,
            plants: PlantModel[], areas: AreaModel[], valueStreams: ValueStreamModel[], lines: LineDetailModel[]
        },
        private plantService: PlantService,
        private areaService: AreaService,
        private valueStreamService: ValueStreamService,
        private lineDetailService: LineDetailService,
        private stationDetailService: StationDetailService,
        private fb: FormBuilder) {
        this.form = fb.group({
            'Name': ['', [Validators.required, Validators.maxLength(MAXLENGTH)]],
            'Code': ['', [Validators.required, Validators.maxLength(MAXLENGTH)]],
            'Status': ['', Validators.required],
            'PlantId': ['', Validators.required],
            'AreaId': ['', Validators.required],
            'ValueStreamId': ['', Validators.required],
            'LineId': ['', Validators.required],
            'Description': ['', [Validators.maxLength(MAXDESCRIPTIONLENGTH)]]
        });
        this.statuses = dialogData.statuses;
        this.station = dialogData.station;
        this.plants = dialogData.plants;
        this.areas = dialogData.areas;
        this.valueStreams = dialogData.valueStreams;
        this.lines = dialogData.lines;
    }

    public save() {
        this.form.controls["Code"].setValue(this.form.controls["Code"].value.trim());
        this.form.controls["Name"].setValue(this.form.controls["Name"].value.trim());

        if (!this.form.valid) {
            return;
        }

        this.stationDetailService.saveStation(this.station).subscribe(() => {
            this.dialogRef.close(true);
        });
    }

    public onChangePlant(event?) {
        this.getAreas();
    }

    public onChangeArea(event?) {
        this.getValueStreams();
    }

    public onChangeValueStream(event?) {
        this.getLines();
    }

    private getPlants() {
        this.plantService.getPlants().subscribe(plants => {
            this.plants = plants;
        });
    }

    private getAreas() {
        this.areaService.queryAreasByPlantId(this.station.PlantId).subscribe((areas) => {
            this.areas = areas;
            this.station.AreaId = "";
            this.station.ValueStreamId = "";
            this.station.LineId = "";
            this.valueStreams = [];
            this.lines = [];
        });
    }

    private getValueStreams() {
        this.valueStreamService.queryValueStreamsByAreaId(this.station.AreaId).subscribe((valueStreams) => {
            this.valueStreams = valueStreams;
            this.station.ValueStreamId = "";
            this.station.LineId = "";
            this.lines = [];
        });
    }

    private getLines() {
        this.lineDetailService.queryLinesByValueStreamId(this.station.ValueStreamId).subscribe((lines) => {
            this.station.LineId = "";
            this.lines = lines;
        });
    }
}
