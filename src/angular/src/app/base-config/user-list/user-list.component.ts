import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Utils } from 'shared';
import { UserModel } from 'shared/models/administration/user.model';
import { SearchUserComponent } from '../search-user/search-user.component'
import { remove } from 'lodash';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    displayColumns: string[] = ['no', 'employeeNo', 'userName', 'status', 'actions'];
    _users: UserModel[];
    users$ = new BehaviorSubject<UserModel[]>([]);
    activeRowIndex: number;

    constructor(private translate: TranslateService
        , private dialog: MatDialog
        , private utils: Utils) {
    }

    @Input() set users(ou: UserModel[]) {
        if (this._users === ou) {
            return;
        }
        this._users = ou;
        this.updateTable();
    }
    get users(): UserModel[] {
        return this._users;
    }

    ngOnInit() {
        this.updateTable();
    }

    updateTable() {
        this.users$.next([...this.users]);
    }

    selectRow(index: number) {
        this.activeRowIndex = index;
    }

    add() {
        const update = (users: Array<UserModel>) => {
            for (const user of users) {
                this.users.push({
                    Id: user.Id,
                    EmployeeNo: user.EmployeeNo,
                    Name: user.Name,
                    Status: user.Status,
                    StatusName: user.StatusName,
                    PlantId: user.PlantId,
                    PlantName: user.PlantName,
                    Code: user.Code,
                });
            }
            this.users = this.users.sort((a: UserModel, b: UserModel) => {
                if (a.Id > b.Id) {
                    return 1;
                } else if (a.Id < b.Id) {
                    return -1;
                } else {
                    return 0;
                }
            });
            this.updateTable();
        };

        this.dialog.open(SearchUserComponent,
            {
                minWidth: '850px',
                minHeight: '800px',
                data: this.users
            }).afterClosed().subscribe((result: { success: boolean, users: Array<UserModel> }) => {
                if (result && result.success && result.users) {
                    // update user
                    update(result.users);
                }
            });
    }

    remove(model: UserModel, index) {
        this.activeRowIndex = index;
        remove(this.users, (item) => item === model);
        this.updateTable();
    }
}