import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Utils } from 'shared';
import { TpmAmendmentService } from 'shared/services';
import { RepairLogModel } from 'shared/models/tpm-amendment';
import { AddOrEditRepairLogComponent } from './add-or-edit-repair-log.component';
import { CheckDetailViewType } from 'shared/models/portal';
import { InputCardNoModalComponent } from './input-card-no-modal/input-card-no-modal.component';

@Component({
  selector: 'repairLogListModel',
  templateUrl: './repair-log-list.component.html',
  styleUrls: ['./repair-log-list.component.scss']
})
export class RepairLogListComponent implements OnInit {

  public displayColumns: string[] = [
    'no', 'type', 'description', 'createTime', 'createBy', 'actions'];

  _repairList: RepairLogModel[];
  @Input() checkDetailId: string;
  @Input() viewType: CheckDetailViewType;
  @Input() needSwingCard = false;
  dataSource = new MatTableDataSource<RepairLogModel>([]);
  public cardNo: string;
  public repairLogModel = {
    Id: '',
    WriteLog: this.viewType == CheckDetailViewType.Amendment,
    NeedSwingCard: false,
    CardNo: ''
  };

  constructor(
    private dialog: MatDialog
    , private translate: TranslateService
    , private tpmAmendmentService: TpmAmendmentService
    , private utils: Utils
    , private fb: FormBuilder) {
  }
  get repairList(): RepairLogModel[] {
    return this._repairList;
  }

  @Input() set repairList(ou: RepairLogModel[]) {
    if (this._repairList === ou) {
      return;
    }
    this._repairList = ou;
    this.dataSource.data = ou;
  }

  ngOnInit() {
  }


  public add() {
    this.dialog.open(AddOrEditRepairLogComponent,
      {
        minWidth: '800px',
        data: Object.assign({}, {
          Id: null,
          CheckDetailId: this.checkDetailId,
          WriteLog: this.viewType == CheckDetailViewType.Amendment,
          NeedSwingCard: this.needSwingCard
        })
      }).afterClosed().subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          this.getRepairLogs();
        }
      });
  }

  getRepairLogs() {
    this.tpmAmendmentService.getRepairLogs(this.checkDetailId).subscribe(logs => {
      this.repairList = logs;
    });
  }
  public remove(id: string) {
    this.repairLogModel.Id = id;
    this.repairLogModel.WriteLog = this.viewType == CheckDetailViewType.Amendment;
    const action = () => {
      this.tpmAmendmentService.removeRepairLog(this.repairLogModel).subscribe(() => {
        this.getRepairLogs();
      });
    };

    this.translate.get('RepairLog.DeleteConfirm').subscribe((message) => {
      this.utils.confirm(message).subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          if (this.needSwingCard) {
            this.swingCard(action);
          } else {
            action();
          }
        }
      });
    });
  }

  /*
 * 刷卡
 * */
  public swingCard(action) {
    this.dialog.open(InputCardNoModalComponent,
      {
        minWidth: '400px',
        data: Object.assign({ cardNo: this.cardNo })
      }).afterClosed().subscribe((dialogResult) => {
        if (dialogResult) {
          console.log('返回的卡号为：', dialogResult);
          this.repairLogModel.NeedSwingCard = true;
          this.repairLogModel.CardNo = dialogResult;

          action();
        }
      });
  }
}
