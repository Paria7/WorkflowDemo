import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from 'shared/services';
import { Utils } from 'shared';
import { EditPlantComponent } from '../../base-config/plant';
import { QueryAuditLogModel } from 'shared/models/administration/query-audit-log.model';
import { AuditLogModel } from 'shared/models/administration/audit-log.model';
import { AuditLogService } from 'shared/services/audit-log.service';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss']
})
export class AuditLogComponent implements OnInit {
  totalCount: number;
  startTimeTxt: Date;
  endTimeTxt: Date;
  public form: FormGroup;
  public displayColumns: string[] = [
    'LogType', 'Time', 'UserName', 'Service', 'Action', 'Duration', 'actions'];
  // public plants$ = new BehaviorSubject<PlantModel[]>([]);
  dataSource = new MatTableDataSource<AuditLogModel>([]);
  queryModel: QueryAuditLogModel;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog,
    private auditLogService: AuditLogService
    , private translate: TranslateService
    , private fb: FormBuilder) {

    this.queryModel = {
      LogType: 0, /*0是所有类型的*/
      StartTime: '',
      EndTime: '',
      UserName: '',
      UserNo: '',
      ServiceName: '',
      ActionName: '',
      PageIndex: 1,
      PageSize: 10,
    };

    this.form = fb.group({
      'LogType': [''],
      'StartTime': [''],
      'EndTime': [''],
      'UserName': [''],
      'UserNo': [''],
      'ServiceName': [''],
      'ActionName': [''],
      pageIndex: 0,
      pageSize: 10
    });


  }

  ngOnInit() {
    this.getAuditLog();
  }

  /*查询审计日志*/
  private getAuditLog() {
    if (!this.form.valid) {
      return;
    }

    console.log('当前分页参数为', this.paginator);
    /*这个分页是index 从0开始，所以加1，为了兼容后台写好的接口*/
    this.queryModel.PageIndex = this.paginator.pageIndex ? this.paginator.pageIndex + 1 : 1;
    this.queryModel.PageSize = this.paginator.pageSize ? this.paginator.pageSize : 10;
    console.log('时间', this.startTimeTxt);
    this.queryModel.StartTime = this.startTimeTxt ? this.startTimeTxt.toLocaleDateString() : '1900-1-1';
    this.queryModel.EndTime = this.endTimeTxt ? this.endTimeTxt.toLocaleDateString() : '1900-1-1';
    this.queryModel.LogType = typeof this.queryModel.LogType == 'undefined' ? 0 : this.queryModel.LogType;

    this.auditLogService.getAuditLog(this.queryModel).subscribe((logs) => {
      console.log('获取到的log数据', logs);
      this.totalCount = logs.TotalCount;
      this.dataSource.data = logs.Models;
    });
  }

  public query() {
    this.getAuditLog();
  }

  /*详细页面*/
  public logDetail(model: AuditLogModel) {
    console.log('当前日志信息为：', model);
    this.dialog.open(DetailComponent,
      {
        minWidth: '800px',
        maxWidth: '60%',
        minHeight: '500px',
        data: model /*Object.assign({}, model)*/
      }).afterClosed().subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          this.getAuditLog();
        }
      });
  }

  public changePage($event) {
    console.log('翻页了');
    this.query();
  }

  /*
    public remove(id: string) {
      const action = () => {
        this.plantService.removePlant(id).subscribe(() => {
          this.getPlants();
        });
      };

      this.translate.get('Plant.DeleteConfirm').subscribe((message) => {
        this.utils.confirm(message).subscribe((dialogResult: boolean) => {
          if (dialogResult) {
            action();
          }
        });
      });
    }*/

  public changeAnotherDate(type: string, event) {
    console.log(`type=${type},newDate=${event.value}`);

  }
}
