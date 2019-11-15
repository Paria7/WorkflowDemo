using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace WorkflowDemo.WebUI.Common
{
    /// <summary>
    /// 用户状态
    /// </summary>
    public enum UserStatus
    {
        /// <summary>
        /// 激活
        /// </summary>
        [Description("Active")]
        Active = 1,

        /// <summary>
        /// 未激活
        /// </summary>
        [Description("InActive")]
        InActive = 0
    }

    /// <summary>
    /// 产线状态
    /// </summary>
    public enum LineStatus
    {
        /// <summary>
        /// 起草(刚新增的状态)
        /// </summary>
        [Description("Draft")]
        Draft = 1,

        /// <summary>
        /// 激活
        /// </summary>
        [Description("Active")]
        Active = 2,

        /// <summary>
        /// 未激活
        /// </summary>
        [Description("InActive")]
        InActive = 3
    }

    /// <summary>
    /// 车间状态
    /// </summary>
    public enum AreaStatus
    {
        /// <summary>
        /// 起草(刚新增的状态)
        /// </summary>
        [Description("Draft")]
        Draft=1,

        /// <summary>
        /// 激活
        /// </summary>
        [Description("Active")]
        Active = 2,

        /// <summary>
        /// 未激活
        /// </summary>
        [Description("InActive")]
        InActive = 3
    }

    /// <summary>
    /// 价值流状态
    /// </summary>
    public enum ValueStreamStatus
    {
        /// <summary>
        /// 起草(刚新增的状态)
        /// </summary>
        [Description("Draft")]
        Draft = 1,

        /// <summary>
        /// 激活
        /// </summary>
        [Description("Active")]
        Active = 2,

        /// <summary>
        /// 未激活
        /// </summary>
        [Description("InActive")]
        InActive = 3
    }

    /// <summary>
    /// 维保明细项目的状态
    /// </summary>
    public enum CheckDetailStatus
    {
        /// <summary>
        /// 未完成
        /// </summary>
        [Description("InComplete")]
        InComplete = 1,

        /// <summary>
        /// 完成
        /// </summary>
        [Description("Complete")]
        Complete = 2
    }

    /// <summary>
    /// 站点状态
    /// </summary>
    public enum StationStatus
    {
        /// <summary>
        /// 起草(刚新增的状态)
        /// </summary>
        [Description("Draft")]
        Draft=1,

        /// <summary>
        /// 激活
        /// </summary>
        [Description("Active")]
        Active = 2,

        /// <summary>
        /// 未激活
        /// </summary>
        [Description("InActive")]
        InActive = 3
    }

    /// <summary>
    /// 设备状态
    /// </summary>
    public enum DeviceStatus
    {
        /// <summary>
        /// 起草(刚新增的状态)
        /// </summary>
        [Description("Draft")]
        Draft=1,

        /// <summary>
        /// 激活
        /// </summary>
        [Description("Active")]
        Active = 2,

        /// <summary>
        /// 未激活
        /// </summary>
        [Description("InActive")]
        InActive = 3
    }

    /// <summary>
    /// TPM plan状态
    /// </summary>
    public enum PlanStatus
    {
        /// <summary>
        /// 冻结
        /// </summary>
        [Description("Freeze")]
        Freeze=0,

        /// <summary>
        /// 发布
        /// </summary>
        [Description("Publish")]
        Publish=1,

        /// <summary>
        /// 草稿
        /// </summary>
        [Description("Draft")]
        Draft = 2
    }

    /// <summary>
    /// TPM计划 角色类型
    /// </summary>
    public enum PlanRole
    {
        /// <summary>
        /// 操作工
        /// </summary>
        [Description("Operator")]
        Operator=1,

        /// <summary>
        /// 领导
        /// </summary>
        [Description("Leader")]
        Leader=2,

        /// <summary>
        /// 工程师
        /// </summary>
        [Description("Engineer")]
        Engineer=3,

        /// <summary>
        /// Service(维护人员)
        /// </summary>
        [Description("Service")]
        Service=4
    }

    /// <summary>
    /// OPL状态
    /// </summary>
    public enum OplStatus
    {
        /// <summary>
        /// 新建
        /// </summary>
        [Description("New")] New = 1,

        /// <summary>
        /// 已分配处理人
        /// </summary>
        [Description("Assign")] Assign = 2,

        /// <summary>
        /// 进行中
        /// </summary>
        [Description("OnGoing")] OnGoing = 3,


        /// <summary>
        /// 已关闭
        /// </summary>
        [Description("Complete")] Complete = 4,

        /// <summary>
        /// 已删除
        /// </summary>
        [Description("Delete")] Delete = 5,

        /// <summary>
        /// 已取消
        /// </summary>
        [Description("Cancel")] Cancel = 6
    }

    /// <summary>
    /// 循环周期
    /// </summary>
    public enum Interval
    {
        /// <summary>
        /// 每天
        /// </summary>
        [Description("Daily")]
        Daily=1,

        /// <summary>
        /// 每周
        /// </summary>
        [Description("Weekly")]
        Weekly=2,

        /// <summary>
        /// 每两周
        /// </summary>
        [Description("BiWeekly")]
        BiWeekly = 7,

        /// <summary>
        /// 每月
        /// </summary>
        [Description("Monthly")]
        Monthly=3,

        /// <summary>
        /// 每季度
        /// </summary>
        [Description("Quarter")]
        Quarter = 4,

        /// <summary>
        /// 半年
        /// </summary>
        [Description("Half Yearly")]
        HalfYearly = 6,

        /// <summary>
        /// 每年
        /// </summary>
        [Description("Yearly")]
        Yearly = 5
    }

    /// <summary>
    /// 日志类型
    /// </summary>
    public enum LogType
    {
        /// <summary>
        /// 普通的审计日志(访问日志)
        /// </summary>
        [Description("Audit")]
        Audit = 1,

        /// <summary>
        /// 异常日志
        /// </summary>
        [Description("Exception")]
        Exception = 2,

        /// <summary>
        /// 业务日志
        /// </summary>
        [Description("Business")]
        Business = 3
    }

    public enum DeviceStatusColorType
    {
        /// <summary>
        /// 完成
        /// </summary>
        [Description("Finished")]
        Finished = 1,

        /// <summary>
        /// 待检验
        /// </summary>
        [Description("NotCheck")]
        NotCheck = 2,

        /// <summary>
        /// 无任务或未完成
        /// </summary>
        [Description("No Task/Not Finished")]
        NoTaskOrNotFinished = 3

    }

    /// <summary>
    /// line 上线/下线
    /// </summary>
    public enum OffLineType
    {
        /// <summary>
        /// 下线
        /// </summary>
        [Description("Off Line")]
        OffLine=0,

        /// <summary>
        /// 上线
        /// </summary>
        [Description("On Line")]
        OnLine = 1,
    }

    /// <summary>
    /// LineUser 的类型
    /// </summary>
    public enum LineUserType
    {
        /// <summary>
        /// 所有者(领导)
        /// </summary>
        [Description("Owner")]
        Owner = 1,

        /// <summary>
        /// 成员
        /// </summary>
        [Description("Member")]
        Member = 2,
    }


    /// <summary>
    /// LineUser 的类型
    /// </summary>
    public enum DeviceUserType
    {
        /// <summary>
        /// 维修人员
        /// </summary>
        [Description("Service")]
        Service = 4,

        /// <summary>
        /// 工程师
        /// </summary>
        [Description("Engineer")]
        Engineer = 3,
    }
}