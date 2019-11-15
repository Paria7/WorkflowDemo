import {Component, OnInit, Inject, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PlantModel} from 'shared/models/base-config';
import {AuditLogService} from 'shared/services';
import {AuditLogModel} from '../../../../shared/models/administration/audit-log.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  logParam: AuditLogModel;
  logDetail: AuditLogModel;

  constructor(@Inject(MAT_DIALOG_DATA) logModel: AuditLogModel,
              public dialogRef: MatDialogRef<DetailComponent>,
              private logService: AuditLogService) {
    this.logParam = logModel;
    this.logDetail = {
      Id: '',
      LogType: 0,
      Time: '',
      UserName: '',
      UserNo: '',
      RequestUrl: '',
      Service: '',
      Action: '',
      Duration: 0,
      IPAddress: '',
      ClientBrowser: '',
      RequestParam: '',
      ResponseParam: '',
      Exception: ''
    };

    this.getLogDetail();
  }

  ngOnInit() {
  }

  public getLogDetail() {
    const model = {
      id: this.logParam.Id
    };
    this.logService.getAuditLogDetail(model).subscribe(data => {
      console.log('日志明细信息为:', data);
      // console.log('原始下个月数据:', data.ResponseParam);
      // console.log('替换反斜杠:', data.ResponseParam.replace(/\\/, ''));
      this.logDetail = data;
      this.logDetail.RequestParam = JSON.stringify(JSON.parse(this.logDetail.RequestParam), null, 2);
      this.logDetail.ResponseParam = JSON.stringify(JSON.parse(this.logDetail.ResponseParam), null, 2);
    });
  }
}
