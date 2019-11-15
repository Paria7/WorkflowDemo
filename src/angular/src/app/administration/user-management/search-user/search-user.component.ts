import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { mergeMap, takeWhile } from 'rxjs/operators';
import { UserModel } from 'shared/models/administration/user.model';
import { AdministrationService } from 'shared/services/administration.service';
import { BehaviorSubject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
    selector: 'app-search-user',
    templateUrl: './search-user.component.html',
    styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
    public user: UserModel;
    public form: FormGroup;
    queryModel = {
        name: ''
    };
    public displayColumns: string[] = ['select', 'name', 'firstName', 'secondName', 'mail'];
    dataSource = new MatTableDataSource<UserModel>([]);
    isSelectedUser: boolean;

    constructor(public dialogRef: MatDialogRef<SearchUserComponent>,
        private fb: FormBuilder,
        private snackBar: MatSnackBar,
        private administrationService: AdministrationService,
        private translate: TranslateService) {
        this.form = fb.group({
            'Name': ['']
        });
    }

    ngOnInit() {

    }

    query() {
        this.administrationService.getUserAdAccount(this.queryModel.name).subscribe(data => {
            this.dataSource.data = data;
            if (data !== null || data !== undefined) {
                if (data.length > 0) {
                    this.user = data[0];
                }
            }
        });
    }

    clickCheckbox(isChecked) {
        this.isSelectedUser = !isChecked;
    }

    ok() {
        if (!this.isSelectedUser) {
            this.translate.get('UserManagement.NotSelectedUser').subscribe((message) => {
                this.snackBar.open(message, '',
                    {
                        duration: 3000,
                        verticalPosition: 'top',
                        panelClass: 'snack-error'
                    });
            });
        } else {
            this.dialogRef.close({ success: true, user: this.user });
        }
    }
}