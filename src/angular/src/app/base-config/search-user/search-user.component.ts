import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AdministrationService } from 'shared/services/administration.service';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from 'shared/models/administration/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatPaginator } from '@angular/material';
import { Utils } from 'shared';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../../../shared/services';
import { UserStatusModel } from 'shared/models/administration/userStatus.model';
import { PlantModel } from 'shared/models/base-config';
import { PlantService } from 'shared/services';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
    selector: 'app-search-user',
    templateUrl: './search-user.component.html',
    styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
    form: FormGroup;
    users: Array<UserModel>;
    plants: Array<PlantModel> = [];
    userStatuses: Array<UserStatusModel> = [];
    displayColumns: string[] = ['check', 'no', 'employeeNo', 'name', 'status', 'plant'];
    queryModel: any;
    checkedUsers: SelectionModel<UserModel>;
    addedUsers: Array<UserModel>;
    constructor(
        public dialogRef: MatDialogRef<SearchUserComponent>,
        @Inject(MAT_DIALOG_DATA) private existedUsers: Array<UserModel>,
        private administrationService: AdministrationService,
        private fb: FormBuilder,
        private dialog: MatDialog,
        private utils: Utils,
        private plantService: PlantService,
        private translate: TranslateService,
        private commonService: CommonService,
        private snackBar: MatSnackBar
    ) {
        this.queryModel = {
            EmployeeNo: '',
            Name: '',
            PlantId: '',
            PageIndex: 0,
            PageSize: 10
        };
        this.form = fb.group({
            'EmployeeNo': [''],
            'Name': [''],
            'Plant': ['']
        });
        this.getPlants();
        this.getUsers();
        this.addedUsers = existedUsers;
    }

    ngOnInit() {
        this.checkedUsers = new SelectionModel<UserModel>(true, []);
    }

    private getPlants() {
        this.plantService.getPlants().subscribe(plants => {
            this.plants = plants;
        });
    }

    public query() {
        return this.administrationService.queryUsers(this.queryModel).subscribe(users => {
            users = users.filter(user => {
                if (!this.addedUsers.find((addUser) => addUser.Id == user.Id))
                    return user;
            });
            this.users = users;
        });
    }

    private getUsers() {
        return this.administrationService.getUsers().subscribe(users => {
            users = users.filter(user => {
                
                if (!this.addedUsers.find((addUser) => addUser.Id == user.Id))
                    return user;
            });
            this.users = users;
        });
    }

    isAllChecked() {
        const numSelected = this.checkedUsers.selected.length;
        const numRows = this.users.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllChecked() ?
            this.checkedUsers.clear() :
            this.users.forEach(row => this.checkedUsers.select(row));
    }

    ok() {
        this.dialogRef.close({ success: true, users: this.checkedUsers.selected });
    }
    changePage($event) {
        this.getUsers();
    }
}
