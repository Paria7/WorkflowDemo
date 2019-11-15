export interface CalendarEventModel {
    Id: number;    /*唯一标识,一年中的第几天。从0开始，0-365/364 */
    Month: number; /*月份,从0开始 */
    WeekOfMonth: number; /*月的第几周,从0开始 */
    Date: Date;  /*日期 */
    IsSelected: boolean;  /*是否选中 */
}