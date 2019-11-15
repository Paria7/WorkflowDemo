import {Component, OnInit, Inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {LineEditDeviceMapInfoModel} from 'shared/models/base-config/line-edit-device-map-info-model';

@Component({
  selector: 'app-edit-lineedit-dialog',
  templateUrl: './edit-lineedit-dialog.component.html',
  styleUrls: ['./edit-lineedit-dialog.component.scss']
})
export class EditLineeditDialogComponent implements OnInit {

  constructor(private translate: TranslateService,
              public dialogRef: MatDialogRef<EditLineeditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: LineEditDeviceMapInfoModel) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
