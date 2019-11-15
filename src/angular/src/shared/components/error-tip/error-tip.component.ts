import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material';

@Component({
  selector: 'app-error-tip',
  templateUrl: './error-tip.component.html',
  styleUrls: ['./error-tip.component.scss']
})
export class ErrorTipComponent {

  constructor(public snackBarRef: MatSnackBarRef<ErrorTipComponent>,
              @Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }

  closeErrorTip() {
    this.snackBarRef.dismiss();
  }
}
