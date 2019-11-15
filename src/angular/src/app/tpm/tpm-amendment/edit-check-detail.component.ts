import { Component, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatPaginator, MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';
import { TpmAmendmentService, CommonService } from 'shared/services';
import {
  TpmPlanDetailModel, CheckDetailModel, MarkCheckDetailCompleteModel, OplModel,
  RepairLogModel, AmendmentLogModel, AttachmentModel,DoBySaveCheckListModel
} from 'shared/models/tpm-amendment';
import { MAXLENGTH, MAXDESCRIPTIONLENGTH } from 'shared/constants';
import { DataSource } from '@angular/cdk/table';
import { debug } from 'util';
import { OplListComponent } from './opl-list.component';
import { AmendmentListComponent } from './amendment-list.component';
import { RepairLogListComponent } from './repair-log-list.component';
import {CheckDetailViewType} from 'shared/models/portal';
import {CheckListComponent} from './check-list.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {InputCardNoModalComponent} from './input-card-no-modal/input-card-no-modal.component';

@Component({
  selector: 'edit-check-detail',
  templateUrl: './edit-check-detail.component.html',
  styleUrls: ['./edit-check-detail.component.scss']
})
export class EditCheckDetailComponent {
  public form: FormGroup;
  public title: string;
  public planDetail: TpmPlanDetailModel;
  checkDetail: CheckDetailModel;
  attachments: AttachmentModel[];
  opls: OplModel[];
  repairLogs: RepairLogModel[];
  amendmentLogs: AmendmentLogModel[];
  checkValue = "";
  displayColumns: string[] = ['no', 'description', 'status', 'time', 'interval', 'doBy'];
  dataSource = new MatTableDataSource<CheckDetailModel>([]);
  completeData: MarkCheckDetailCompleteModel = {};
  saveData: DoBySaveCheckListModel = {};
  canDoSave:boolean;
  canDoComplete:boolean;
  viewType: CheckDetailViewType.Amendment;
  @ViewChild('oplListModel') oplListModel: OplListComponent;
  @ViewChild('repairLogListModel') repairLogListModel: RepairLogListComponent;
  @ViewChild('amendmentListModel') amendmentListModel: AmendmentListComponent;
  needSwingCard = false;
  cardNo = '';

  constructor(public dialogRef: MatDialogRef<EditCheckDetailComponent>,
    @Inject(MAT_DIALOG_DATA) planDetail: TpmPlanDetailModel,
    private tpmAmendmentService: TpmAmendmentService,
    private commonService: CommonService,
    private fb: FormBuilder,
    private dialog: MatDialog) {
    this.form = fb.group({
      'HowToMaintain': [''],
      'Tools': [''],
      'Values': ['',Validators.required]
    });

    this.planDetail = planDetail;
    this.loadCheckDetail();

    console.log('check-detail 是否需要刷卡:', planDetail.NeedSwingCard);
    this.needSwingCard = planDetail.NeedSwingCard;
  }

  loadCheckDetail() {
    return this.tpmAmendmentService.getCheckDetails(this.planDetail.CheckDetailId,this.planDetail.LineId,
      this.planDetail.DeviceId).subscribe(details => {
        details.forEach(d=>{
          this.checkDetail = d;
          this.attachments = d.Attachments;
          for (let item of this.attachments) {
            item.DownloadUri = this.commonService.getApiConfig().ApiBaseUrl + "api/attachment/downloadFile/" + item.Id;
          }
          this.opls = d.Opls;
          this.repairLogs = d.RepairLogs;
          this.amendmentLogs = d.AmendmentLogs;
          this.planDetail.DoBy = d.DoUser;
          this.canDoSave = d.CanDoSave;
          this.canDoComplete = d.CanDoComplete;
        });

      this.dataSource.data = details;
    });
  }

  save() {
    if (this.needSwingCard) {
      this.dialog.open(InputCardNoModalComponent,
        {
          minWidth: '400px',
          data: Object.assign({cardNo: this.cardNo})
        }).afterClosed().subscribe((dialogResult) => {
        if (dialogResult) {
            console.log('返回的卡号为：', dialogResult);
           this.saveData.NeedSwingCard = this.needSwingCard;
           this.saveData.CardNo = dialogResult;
           this.postSaveData();
        }
    }); } else {
      this.postSaveData();
    }
  }

  /*
  * 调用api save 接口
  * */
  public postSaveData() {
    this.saveData.CheckDetailId = this.checkDetail.Id;
    this.saveData.CheckValue = this.checkValue;
    this.saveData.WriteLog = true;
    this.tpmAmendmentService.doBySaveCheckList(this.saveData).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  complete() {
    if (this.needSwingCard) {
      this.dialog.open(InputCardNoModalComponent,
        {
          minWidth: '400px',
          data: Object.assign({cardNo: this.cardNo})
        }).afterClosed().subscribe((dialogResult) => {
        if (dialogResult) {
          console.log('返回的卡号为：', dialogResult);
          this.completeData.NeedSwingCard = this.needSwingCard;
          this.completeData.CardNo = dialogResult;
          this.postCompleteData();
        }
      }); } else {
      this.postCompleteData();
    }
  }

  /*
* 调用api complete 接口
* */
  public  postCompleteData() {
    this.completeData.CheckDetailId = this.checkDetail.Id;
    this.completeData.WriteLog = true;
    this.tpmAmendmentService.markCheckDetailComplete(this.completeData).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
