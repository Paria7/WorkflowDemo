import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from 'shared/models/administration/user.model';
import { CommonService, OplCenterService, AdministrationService } from 'shared/services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-assign-opl-to-user',
    templateUrl: './assign-opl-to-user.component.html',
    styleUrls: ['./assign-opl-to-user.component.scss']
})
export class AssignOplToUserComponent {
    public oplId: string;
    public users$ = new BehaviorSubject<UserModel[]>([]);
    public columns: string[] = ['no', 'name','employeeNo', 'firstname', 'secondname', 'actions'];
    public form: FormGroup;
    constructor(public dialogRef: MatDialogRef<AssignOplToUserComponent>,
        @Inject(MAT_DIALOG_DATA) oplId: string,
        private administrationService: AdministrationService,
        private commonService: CommonService,
        private oplCenterService: OplCenterService,
        private fb: FormBuilder) {
        this.oplId = oplId;
        this.form = fb.group({
            
          });
    }
    searchData(searchString: string) {
        if (searchString === undefined || searchString === '') {
            this.getUsers().subscribe();
        } else {
            this.searchUsers(this.commonService.trim(searchString)).subscribe();
        }
    }
    private getUsers() {
        return this.administrationService.getUsers().do((users: Array<UserModel>) => {
            for (const user of users) {
                user.RoleNames = user.Roles.map(item => item.Name).join(',');
            }
            this.users$.next(users);
        });
    }

    private searchUsers(queryName: string) {
        return this.administrationService.searchUsers(queryName).do((users: Array<UserModel>) => {
            for (const user of users) {
                user.RoleNames = user.Roles.map(item => item.Name).join(',');
            }
            this.users$.next(users);
        });
    }
    public assign(user: UserModel) {
        this.oplCenterService.assignOpl(this.oplId,user.EmployeeNo).subscribe(() => {
            this.dialogRef.close(true);
        });
    }
}
