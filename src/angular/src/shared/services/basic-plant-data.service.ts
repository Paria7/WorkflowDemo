import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IConfig } from '../../app/interface/config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LineModel, DeviceModel } from '../models/base-config';
import { CommonService } from './common.service';
import { AreaModel, QueryAreaLineModel, QueryDeviceModel } from 'shared/models/base-config';
import { LineEditDeviceMapInfoModel } from '../models/base-config/line-edit-device-map-info-model';
import { TpmResponseBaseModel } from '../models/tpm/tpm-response-base-model';
import { LineEditMapImgModel } from '../models/base-config/line-edit-map-img-model';
import { PortalDeviceStatusOutputModel } from 'shared/models/portal/portal-device-model';
import { PortalOffLineModel, PortalOffLineQueryModel, PortalOffLineQueryOutputModel } from 'shared/models/portal/portal-offline-model';
import { PortalColorPickerModel, PortalColorQueryOutPutModel } from 'shared/models/portal/portal-color-picker-model';

@Injectable()
export class BasicPlantDataService {
  config: IConfig;

  constructor(private http: HttpClient, private commonService: CommonService) {
  }

  getAreas(): Observable<AreaModel[]> {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpm/GetAreas')
      .map(p => p as AreaModel[]);
  }

  getLines(queryModel: QueryAreaLineModel): Observable<LineModel[]> {
    const model: any = { AreaId: queryModel.AreaId };
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpm/GetLines', {
      params: new HttpParams({
        fromObject: model
      })
    }).map(p => p as LineModel[]);
  }

  // getDevices(): Observable<any> {
  //   return this.http.get('api/tpm/getdevices');
  // }

  getDevices(queryDeviceModel: QueryDeviceModel): Observable<DeviceModel[]> {
    const model: any = {
      LineId: queryDeviceModel.LineId
    };

    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/tpm/GetDevicesByLine', {
      params: new HttpParams({
        fromObject: model
      })
    }).map(p => p as DeviceModel[]);
  }

  getDevicesAndStations(queryDeviceModel: QueryDeviceModel): Observable<any> {
    const model: any = {
      LineId: queryDeviceModel.LineId,
      LineShowName: queryDeviceModel.LineShowName
    };

    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/lineedit/GetDevicesAndStationsByLine', {
      params: new HttpParams({
        fromObject: model
      })
    }).map(p => p as LineEditDeviceMapInfoModel[]);
  }

  /*
  * 新增或更新line-edit的数据
  * */
  addOrUpdateLineEdit(model: LineEditDeviceMapInfoModel): Observable<TpmResponseBaseModel> {
    return this.http.post(this.commonService.getApiConfig().ApiBaseUrl + 'api/lineedit/AddOrUpdateLineEdit', model)
      .map(p => p as TpmResponseBaseModel);
  }

  /*
  * 删除line-edit的数据
  * */
  deleteLineEdit(id: string) {
    return this.http.delete(this.commonService.getApiConfig().ApiBaseUrl + 'api/lineedit/DeleteLineEdit/' + id)
      .map(p => {
        return p as TpmResponseBaseModel;
      });
  }

  /*
 * 查询line map 图片地址，
 * @param id:LineId
 * */
  getLineMapImgUrl(queryDeviceModel: QueryDeviceModel): Observable<LineEditMapImgModel> {
    const model: any = {
      LineId: queryDeviceModel.LineId,
      LineShowName: queryDeviceModel.LineShowName
    };

    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/lineedit/GetLineMapImgUrl', {
      params: new HttpParams({
        fromObject: model
      })
    })
      .map(p => p as LineEditMapImgModel);
  }

  /*
   * 查询是否所有的Checkdetail都已经完成，
   * @param deviceId: string
   * */
  getCheckDetailsIsAllComplete(deviceId: string) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/lineedit/GetCheckDetailsIsAllComplete',
      {
        params: { deviceId: deviceId }
      }).map(p => p as boolean);
  }

  /*
   * 查询是否所有的device 维保项完成情况
   * @param portalDeviceStatusModel: PortalDeviceStatusModel
   * */
  getDeviceStatusByLineOrDevice(portalDeviceStatusModel: any) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/lineedit/GetDeviceStatusByLineOrDeviceAsync',
      {
        params: new HttpParams({
          fromObject: portalDeviceStatusModel
        })
      }).map(p => p as PortalDeviceStatusOutputModel[]);
  }

  /**
   * 停掉某条产线
   * @param model 
   */
  switchLineStatus(model: PortalOffLineModel) {
    return this.http.put(this.commonService.getApiConfig().ApiBaseUrl + 'api/portal/SwitchLineStatusAsync', model)
      .map(p => {
        return p as TpmResponseBaseModel;
      });
  }

  /**
   * 查询产线的下线记录
   * @param model 
   */
  getOffLineRecord(model: any) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/portal/GetOffLineRecordAsync', {
      params: new HttpParams({
        fromObject: model
      })
    }).map(p => {
      return p as PortalOffLineQueryOutputModel[];
    });
  }

  /**
  * 查询area颜色
  * @param model 
  */
  getAreaColor(model: any) {
    return this.http.get(this.commonService.getApiConfig().ApiBaseUrl + 'api/portal/GetAreaColorAsync', {
      params: new HttpParams({
        fromObject: model
      })
    }).map(p => {
      return p as PortalColorQueryOutPutModel;
    });
  }

  /**
   * 改变area颜色
   * @param model 
   */
  changeAreaColor(model: PortalColorPickerModel) {
    return this.http.put(this.commonService.getApiConfig().ApiBaseUrl + 'api/portal/ChangeAreaColorAsync', model)
      .map(p => {
        return p as TpmResponseBaseModel;
      });
  }

}
