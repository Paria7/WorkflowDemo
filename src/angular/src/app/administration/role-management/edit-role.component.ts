import { Component, OnInit, Inject } from '@angular/core';
import { RoleModel } from 'shared/models/administration/role.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AdministrationService } from 'shared/services/administration.service';
import { TranslateService } from '@ngx-translate/core';
import { MAXDESCRIPTIONLENGTH } from '../../../shared/constants';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {

  public form: FormGroup;


  public role$ = new BehaviorSubject<RoleModel>({ Code: '' });

  constructor(public dialogRef: MatDialogRef<EditRoleComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private dialogData: RoleModel,
    private translate: TranslateService,
    private administrationService: AdministrationService) {
    this.form = fb.group({
      'Code': ['', Validators.required],
      'Name': ['', Validators.required],
      'Description': ['', [Validators.maxLength(MAXDESCRIPTIONLENGTH)]]
    });
  }

  public save() {
    this.form.controls['Name'].setValue(this.form.controls['Name'].value.trim());

    if (!this.form.valid) {
      return;
    }

    this.administrationService.saveRole(this.role$.value)
      .do(() => this.dialogRef.close(true)).subscribe();
  }

  ngOnInit() {
    this.administrationService.getRoles().do(roles => {
      this.role$.next(this.dialogData);
    }).subscribe();
  }
}
