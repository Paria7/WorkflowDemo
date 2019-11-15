export interface AuditLogModel {
  Id?: string;
  LogType?: number;
  Time?: string;
  UserName?: string;
  UserNo?: string;
  RequestUrl?: string;
  Service?: string;
  Action?: string;
  Duration?: number;
  IPAddress?: string;
  ClientBrowser?: string;
  RequestParam?: string;
  ResponseParam?: string;
  Exception?: string;
  CustomContent?: string;
}

/*包括分页信息*/
export interface AuditLogPageModel {
  TotalCount?: number;
  Models: AuditLogModel[];
}
