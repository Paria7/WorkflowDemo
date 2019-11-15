import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { ConfirmationBoxComponent } from './components';

@Injectable()
export class Utils {
    constructor(private dialog: MatDialog) {
    }

    public confirm(content: string) {
        return this.dialog.open(ConfirmationBoxComponent, {
            data: content,
            closeOnNavigation: true,
            disableClose: true,
            minWidth: '400px'
        }).afterClosed() as Observable<boolean>;
    }
}
