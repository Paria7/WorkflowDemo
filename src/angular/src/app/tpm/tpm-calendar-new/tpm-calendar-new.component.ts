import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { CalendarEventModel } from 'shared/models/tpm/tpm-calendar-new-event-model';
import { BasicPlantDataService } from 'shared/services/basic-plant-data.service';
import { LineModel } from 'shared/models/base-config';
import { TpmCalendarNewQueryModel } from 'shared/models/tpm/tpm-calendar-new-query-model';
import { TpmCalendarService } from 'shared/services/tpm-calendar.service';
import { TpmCalendarNewSaveModel } from 'shared/models/tpm/tpm-calendar-new-save-model';
import { TpmCalendarNewQueryListModel } from 'shared/models/tpm/tpm-calendar-new-query-list-model';

@Component({
  selector: 'app-tpm-calendar-new',
  templateUrl: './tpm-calendar-new.component.html',
  styleUrls: ['./tpm-calendar-new.component.scss']
})
export class TpmCalendarNewComponent implements OnInit {
  public form: FormGroup;

  /**下拉框数据源 */
  lines: LineModel[];
  years: number[] = [];

  /**日历数据处理 */
  nowDate = new Date();
  months: any[];
  weeksOfMonth: number[] = [0, 1, 2, 3, 4, 5]; //一个月最多6周，都按6周来，为了使页面高度一致
  dailyEventData: CalendarEventModel[];

  /**查询条件 */
  queryModel: TpmCalendarNewQueryModel;

  constructor(private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private translate: TranslateService,
    private datePipe: DatePipe,
    private basicPlantDataService: BasicPlantDataService,
    private tpmCalendarService: TpmCalendarService, ) {
    this.queryModel = {
      LineId: '',
      Year: this.nowDate.getFullYear(),
      Interval: '2'
    };

    this.form = fb.group({
      'LineId': ['', [Validators.required]],
      'Year': ['', [Validators.required]],
      'Interval': ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.renderCalendar(this.nowDate)
    this.getLines();
    this.getYears();
  }


  /**
   * 渲染日历
   * @param date
   */
  public renderCalendar(date: Date) {
    this.initMonth(date);
    this.dailyEventData = this.GetCalendarData(date);
  }


  /**
   * 初始化月份信息
   * @param year
   */
  public initMonth(date: Date) {
    var fullYear = date.getFullYear();
    this.months = [
      { Id: 0, Name: 'January', Days: 31, FirstDayOfMonth: new Date(fullYear, 0, 1).getDay() },
      { Id: 1, Name: 'February', Days: 28 + this.isLeap(fullYear), FirstDayOfMonth: new Date(fullYear, 1, 1).getDay() },
      { Id: 2, Name: 'March', Days: 31, FirstDayOfMonth: new Date(fullYear, 2, 1).getDay() },
      { Id: 3, Name: 'April', Days: 30, FirstDayOfMonth: new Date(fullYear, 3, 1).getDay() },
      { Id: 4, Name: 'May', Days: 31, FirstDayOfMonth: new Date(fullYear, 4, 1).getDay() },
      { Id: 5, Name: 'June', Days: 30, FirstDayOfMonth: new Date(fullYear, 5, 1).getDay() },
      { Id: 6, Name: 'July', Days: 31, FirstDayOfMonth: new Date(fullYear, 6, 1).getDay() },
      { Id: 7, Name: 'August', Days: 31, FirstDayOfMonth: new Date(fullYear, 7, 1).getDay() },
      { Id: 8, Name: 'September', Days: 30, FirstDayOfMonth: new Date(fullYear, 8, 1).getDay() },
      { Id: 9, Name: 'October', Days: 31, FirstDayOfMonth: new Date(fullYear, 9, 1).getDay() },
      { Id: 10, Name: 'November', Days: 30, FirstDayOfMonth: new Date(fullYear, 10, 1).getDay() },
      { Id: 11, Name: "December", Days: 31, FirstDayOfMonth: new Date(fullYear, 11, 1).getDay() }];

    console.log('初始化月份信息结束:', this.months);
  }

  /**
   * 判断是否是润年
   * @param year 4位数年份数字
   */
  public isLeap(year: number) {
    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? 1 : 0;
  }

  /**
   * 查询日历数据
   */
  public GetCalendarData(nowDate: Date) {
    var year = nowDate.getFullYear();
    let allDates: CalendarEventModel[] = [];
    let dayOfYear = 0;
    for (var month = 0; month < 12; month++) {
      var totalDays = this.getMonthTotalDay(new Date(year, month));
      for (var day = 0; day < totalDays; day++) {
        var date = new Date(year, month, day + 1); //day 是从1开始算的，new Date(2019,1,1)=2019-2-1
        let dayEventModel: CalendarEventModel = {
          Id: dayOfYear,
          Month: month,
          WeekOfMonth: this.getMonthWeek(date),
          Date: date,
          IsSelected: false //todo-stwhh 这个后期需要从数据库里匹配
        }

        allDates.push(dayEventModel);
        dayOfYear++;
      }
    }
    console.log('全年日历数据为：', allDates);
    return allDates;
  }

  /**
 * 获取对应的月份有多少天
 */
  public getMonthTotalDay(date: Date) {
    // console.log('开始计算当前月份有多少天');
    let year = date.getFullYear();
    let month = date.getMonth();

    let firstDate = new Date(year, month, 1)
    let lastDate = new Date(year, month + 1, 0)
    // console.log('当月的起止时间为', firstDate.toLocaleDateString(), lastDate.toLocaleDateString()); // 每月的起始日期
    let allDay = (lastDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24) + 1;
    // console.log(`时间:${date},天数:${allDay}`);
    return allDay;
  }

  /**
   * 当前日期在当月是第几周，从0开始
   * @param date
   */
  getMonthWeek(date: Date) {

    const w = date.getDay()
    const d = date.getDate()
    return Math.ceil(
      (d + 6 - w) / 7 - 1
    )
  }


  /**
 * 查询产线
 */
  public getLines() {
    let model = { AreaId: '' };
    this.basicPlantDataService.getLines(model).subscribe(data => this.lines = data);
  }


  /**
 * 查询年份
 */
  public getYears() {
    var notYear = this.nowDate.getFullYear();
    for (var i = 0; i < 10; i++) {
      this.years.push(notYear + i);
    }
  }


  /**
   * 产线选择事件
   * @param $event
   */
  public changeLine($event) {
    console.log('切换产线', $event);
    this.query();
  }

  /**
   * 切换年份事件
   * @param $event
   */
  public changeYear($event) {
    console.log($event);
    this.nowDate = new Date($event.value, 0, 1);
    this.renderCalendar(this.nowDate);
  }


  /**
   * 单击某一天，选中<=>取消 状态切换
   * @param $event
   */
  public dayClick($event, item) {
    console.log('单击事件啦,当前项为', item);
    console.log($event);
    // $event.preventDefault();
    // $event.stopPropagation();

    if ($event.button === 0) { /**单击了鼠标左键 */
      if ($event.ctrlKey) {
        this.toggleSelectedDay(item);
      }
      else if ($event.shiftKey) {
        this.selectedRange(item);
      }
      else {
        var beforeStatus = item.IsSelected;
        this.clearAll();
        item.IsSelected = beforeStatus;
        this.toggleSelectedDay(item);
      }
    }
  }


  /**
   * 切换当前day的选中状态
   * @param item
   */
  public toggleSelectedDay(item) {
    item.IsSelected = !item.IsSelected;
  }


  /**
   * shift选择范围
   * @param item 当前选中项，肯定是最后一条记录
   */
  public selectedRange(item) {
    this.dailyEventData.sort(function (a, b) {
      return a.Id - b.Id;
    });

    var firstSelectdDay: CalendarEventModel; /**第一条记录 */
    for (var i = 0; i < this.dailyEventData.length; i++) {
      if (this.dailyEventData[i].IsSelected) {
        firstSelectdDay = this.dailyEventData[i];
        break;
      }
    }

    for (var i = firstSelectdDay.Id; i <= item.Id; i++) {
      this.dailyEventData[i].IsSelected = true; /*再把其它项目设置为false，可以实现shift前面的项，但是这里没必要做这个 */
    }
  }


  /**
   * 清除所有选中的项
   */
  public clearAll() {
    this.dailyEventData.forEach(item => {
      item.IsSelected = false;
    });
  }


  /**
   * 查询
   */
  public query() {
    if (!this.form.valid) {
      return;
    }

    console.log('查询条件为：');
    console.log(this.queryModel);
    this.tpmCalendarService.getTpmCalendarNew(this.queryModel).subscribe(data => {
      console.log('返回的data为：', data);
      this.mapCalendarSelected(data);//映射日历，选中已经存在的维保项目
    });
  }


  /**
   * 映射日历，选中已经存在的维保项目
   * @param data
   */
  public mapCalendarSelected(data: TpmCalendarNewQueryListModel) {
    // console.log('开始映射日历。');
    this.clearAll();
    if (data == null || typeof data == 'undefined' || typeof data.DateList == 'undefined') {
      return;
    }
    for (var i = 0; i < this.dailyEventData.length; i++) {
      for (var j = 0; j < data.DateList.length; j++) {
        if (this.dailyEventData[i].Date.getTime() == new Date(data.DateList[j]).getTime()) {
          console.log('过滤一条数据：');
          this.dailyEventData[i].IsSelected = true;
        }

      }
    }

  }


  /**
   * 保存
   * @param $event
   */
  public save($event) {
    if (!this.form.valid) {
      return;
    }
    console.log('条件为：');
    console.log(this.queryModel);
    if (this.queryModel.Interval == '0') {
      // this.query();
      this.translate.get('ApiError.8502').subscribe((msg) => {
        this.snackBar.open(msg, '',
          {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snack-error'
          });
      });
      return;
    }

    var selectedArray = this.dailyEventData.filter(function (item, index, array) {
      return item.IsSelected;
    });
    if (selectedArray.length == 0) {
      // this.query();
      this.translate.get('ApiError.8503').subscribe((msg) => {
        this.snackBar.open(msg, '',
          {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: 'snack-error'
          });
      });
      return;
    }

    console.log('选择项为:');
    console.table(selectedArray);

    let saveData: TpmCalendarNewSaveModel = {
      LineId: this.queryModel.LineId,
      Year: this.queryModel.Year,
      Interval: this.queryModel.Interval,
      DateList: []
    };

    for (var i = 0; i < selectedArray.length; i++) {
      saveData.DateList.push(this.datePipe.transform(selectedArray[i].Date, 'yyyy-MM-dd'))
    }

    console.log('需要保存的数据为：', saveData);
    this.tpmCalendarService.saveTpmCalendarNew(saveData).subscribe(data => {
      console.log('calendar保存响应结果:', data);
      if (data.IsSuccess) {
        // this.query();
        this.translate.get('TpmCalendar.SaveSuccess').subscribe((msg) => {
          this.snackBar.open(msg, '',
            {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: 'snack-success'
            });
        });
      } else {
        this.translate.get('TpmCalendar.SaveFail').subscribe((msg) => {
          this.snackBar.open(msg, '',
            {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: 'snack-error'
            });
        });
      }
    });;
    console.log('save 调用完成!');
  }

}
