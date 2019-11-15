export interface LineEditDeviceMapInfoModel {
  Id: string; /*device id*/
  IsMapped?: boolean; /*是否在line-edit上面 mapper过了*/
  DeviceName?: string;
  // LineId?: string;
  // StationId: string;
  StationName?: string; /*新增时用的名字是StationName*/
  LineEditShowName?: string; /*页面呈现的是LineEditShowName*/
  DeviceCode?: string;
  IsShowEditContent?: boolean; /*是否显示编辑框*/
  Transform?: number;
  Size?: {
    width: number;
    height: number;
  };
  Position: {
    x: number;
    y: number;
  };
  BackgroundColor?: string;
}
