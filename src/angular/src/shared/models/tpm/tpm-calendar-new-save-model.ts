import { TpmCalendarNewQueryModel } from "./tpm-calendar-new-query-model";

export interface TpmCalendarNewSaveModel extends TpmCalendarNewQueryModel {
    LineId: string;
    Year: number;
    Interval: string;
    DateList: string[]
} 