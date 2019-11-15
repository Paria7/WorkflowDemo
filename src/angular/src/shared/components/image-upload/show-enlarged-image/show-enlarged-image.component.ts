/**
 * Created by Tony Sun on 22/4/2019.
 */
import { Component, ElementRef, EventEmitter, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
    selector: 'show-enlarged-image',
    templateUrl: './show-enlarged-image.component.html',
    styleUrls: ['./show-enlarged-image.component.scss']
})

export class ShowEnlargedImageComponent implements OnInit {

    public imageSrc: string;
    constructor(public dialogRef: MatDialogRef<ShowEnlargedImageComponent>,
        @Inject(MAT_DIALOG_DATA) private dialogData: { imageData: string[] },
        private translate: TranslateService) {
        this.imageSrc = dialogData.imageData[0]
    }

    ngOnInit() {

    }
}