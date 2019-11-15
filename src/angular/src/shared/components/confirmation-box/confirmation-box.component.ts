import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-confirmation-box',
    templateUrl: './confirmation-box.component.html',
    styleUrls: ['./confirmation-box.component.scss']
})

export class ConfirmationBoxComponent implements OnInit {
    public title: string;

    constructor( @Inject(MAT_DIALOG_DATA) @Optional() title: string,
        private translate: TranslateService,
        public dialogRef: MatDialogRef<ConfirmationBoxComponent>) {
        this.title = title;
    }

    ngOnInit() {
    }

    confirm() {
        return this.dialogRef.close(true);
    }
}
