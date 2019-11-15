import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { QueryTpmCalendarModel } from '../models/tpm/query-tpm-calendar';
import { CommonService } from './common.service';
import { TpmCalendarModel } from '../models/tpm/tpm-calendar-model';
import { TpmCalendarEditModel } from '../models/tpm/tpm-calendar-edit-model';
import { TpmResponseBaseModel } from '../models/tpm/tpm-response-base-model';
import { TpmCalendarNewSaveModel } from 'shared/models/tpm/tpm-calendar-new-save-model';
import { TpmCalendarNewQueryModel } from 'shared/models/tpm/tpm-calendar-new-query-model';
import { TpmCalendarNewQueryListModel } from 'shared/models/tpm/tpm-calendar-new-query-list-model';

@Injectable({
  providedIn: 'root'
})


// let appointments: Calendar[] = [
//   {
//     id: '12345767887',
//     text: 'Website Re-Design Plan',
//     startDate: new Date(2017, 4, 22, 9, 30),
//     endDate: new Date(2017, 4, 22, 11, 30)
//   }, {
//     text: 'Book Flights to San Fran for Sales Trip',
//     startDate: new Date(2017, 4, 22, 12, 0),
//     endDate: new Date(2017, 4, 22, 13, 0),
//     allDay: true
//   }, {
//     text: 'Install New Router in Dev Room',
//     startDate: new Date(2017, 4, 22, 14, 30),
//     endDate: new Date(2017, 4, 22, 15, 30)
//   }, {
//     text: 'Approve Personal Computer Upgrade Plan',
//     startDate: new Date(2017, 4, 23, 10, 0),
//     endDate: new Date(2017, 4, 23, 11, 0)
//   }, {
//     text: 'Final Budget Review',
//     startDate: new Date(2017, 4, 23, 12, 0),
//     endDate: new Date(2017, 4, 23, 13, 35)
//   }, {
//     text: 'New Brochures',
//     startDate: new Date(2017, 4, 23, 14, 30),
//     endDate: new Date(2017, 4, 23, 15, 45)
//   }, {
//     text: 'Install New Database',
//     startDate: new Date(2017, 4, 24, 9, 45),
//     endDate: new Date(2017, 4, 24, 11, 15)
//   }, {
//     text: 'Approve New Online Marketing Strategy',
//     startDate: new Date(2017, 4, 24, 12, 0),
//     endDate: new Date(2017, 4, 24, 14, 0)
//   }, {
//     text: 'Upgrade Personal Computers',
//     startDate: new Date(2017, 4, 24, 15, 15),
//     endDate: new Date(2017, 4, 24, 16, 30)
//   }, {
//     text: 'Customer Workshop',
//     startDate: new Date(2017, 4, 25, 11, 0),
//     endDate: new Date(2017, 4, 25, 12, 0),
//     allDay: true
//   }, {
//     text: 'Prepare 2015 Marketing Plan',
//     startDate: new Date(2017, 4, 25, 11, 0),
//     endDate: new Date(2017, 4, 25, 13, 30)
//   }, {
//     text: 'Brochure Design Review',
//     startDate: new Date(2017, 4, 25, 14, 0),
//     endDate: new Date(2017, 4, 25, 15, 30)
//   }, {
//     text: 'Create Icons for Website',
//     startDate: new Date(2017, 4, 26, 10, 0),
//     endDate: new Date(2017, 4, 26, 11, 30)
//   }, {
//     text: 'Upgrade Server Hardware',
//     startDate: new Date(2017, 4, 26, 14, 30),
//     endDate: new Date(2017, 4, 26, 16, 0)
//   }, {
//     text: 'Submit New Website Design',
//     startDate: new Date(2017, 4, 26, 16, 30),
//     endDate: new Date(2017, 4, 26, 18, 0)
//   }, {
//     text: 'Launch New Website',
//     startDate: new Date(2017, 4, 26, 12, 20),
//     endDate: new Date(2017, 4, 26, 14, 0)
//   }
// ];

export class TpmCalendarService {
  constructor(private http: HttpClient, private commonService: CommonService) {

  }

  /*
  * 获取日历数据
  * */
  getTpmCalendar(queryTpmCalendarModel: any): Observable<TpmCalendarModel[]> {
    // return appointments;
    // const model: any = {
    //   AreaId: queryTpmCalendarModel.AreaId,
    //   LineCode: queryTpmCalendarModel.LineCode,
    //   DeviceName: queryTpmCalendarModel.DeviceName,
    //   DateType: queryTpmCalendarModel.DateType,
    //   ViewDate: queryTpmCalendarModel.ViewDate
    // };

    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmCalendar/GetTpmCalendarData',
      {
        params: new HttpParams({
          fromObject: queryTpmCalendarModel
        })
      }).map(p => p as TpmCalendarModel[]);
  }

  /*
  * 编辑日历项
  * */
  editTpmCalendarItem(tpmDetailModel: TpmCalendarEditModel): Observable<TpmResponseBaseModel> {
    // return appointments;
    return this.http.put(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmCalendar/EditTpmCalendar', tpmDetailModel)
      .map(p => p as TpmResponseBaseModel);
  }


  /*
  * 获取日历数据
  * */
  getTpmCalendarNew(queryModel: any): Observable<TpmCalendarNewQueryListModel> {

    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmCalendar/GetTpmCalendarDataNew',
      {
        params: new HttpParams({
          fromObject: queryModel
        })
      }).map(p => p as TpmCalendarNewQueryListModel);
  }


  /*
* 保存日历项
* */
  saveTpmCalendarNew(saveModel: TpmCalendarNewSaveModel): Observable<TpmResponseBaseModel> {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/TpmCalendar/SaveTpmCalendarNew', saveModel)
      .map(p => p as TpmResponseBaseModel);
  }
}
