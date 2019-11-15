import { Component, OnInit, AfterViewInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-input-card-no-modal',
  templateUrl: './input-card-no-modal.component.html',
  styleUrls: ['./input-card-no-modal.component.scss']
})
export class InputCardNoModalComponent implements OnInit, AfterViewInit {

  constructor(public dialogRef: MatDialogRef<InputCardNoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private translate: TranslateService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('AfterViewInit之后：');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    if (this.data !== null && this.data !== undefined) {
      if (this.data.cardNo.trim() !== "" && this.data.cardNo !== null && this.data.cardNo !== undefined) {
        this.dialogRef.close(this.data.cardNo);
      } else {
        this.translate.get('TpmAmendment.NoInputCardNo').subscribe((message) => {
          this.snackBar.open(message, '',
            {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: 'snack-error'
            });
        });
      }
    }
  }
}
