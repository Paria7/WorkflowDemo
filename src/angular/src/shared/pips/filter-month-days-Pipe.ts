import { Pipe, PipeTransform } from '@angular/core';
import { CalendarEventModel } from 'shared/models/tpm/tpm-calendar-new-event-model';

@Pipe({ name: 'FilterMonthDays' })
export class FilterMonthDaysPipe implements PipeTransform {
    transform(dailyEventData: CalendarEventModel[], monthIndex: number, weekIndex: number): CalendarEventModel[] {

        if (dailyEventData == null || typeof dailyEventData == 'undefined') {
            return;
        }
        var monthData = dailyEventData.filter(function (item, index, array) {
            return item.Month == monthIndex && item.WeekOfMonth == weekIndex;
        })

        console.log(`过滤出来属于${monthIndex + 1}月第${weekIndex + 1}周的数据`, monthData);
        return monthData;
    }
}