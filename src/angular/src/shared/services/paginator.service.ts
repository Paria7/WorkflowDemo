import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator } from '@angular/material';

@Injectable()
export class PaginatorService {
    constructor(private http: HttpClient,
        private translate: TranslateService) {

    }

    public translatePaginator(paginator: MatPaginator) {
        this.translate.get("Paginator").subscribe((item) => {
            paginator._intl.itemsPerPageLabel = item["ItemsPerPageLabel"];
            paginator._intl.firstPageLabel = item["FirstPage"];
            paginator._intl.previousPageLabel = item["PreviousPage"];
            paginator._intl.nextPageLabel = item["NextPage"];
            paginator._intl.lastPageLabel = item["LastPage"];
            paginator._intl.getRangeLabel = this.getRangeLabel;
        });
    }

    private getRangeLabel(page: number, pageSize: number, length: number) {
        let language = window.localStorage.getItem('language');
        if (language !== null && language !== undefined) {
            if (language === "ch") {
                if (length === 0 || pageSize === 0) {
                    return '第0条，共0条';
                }
                length = Math.max(length, 0);
                const startIndex = page * pageSize;
                const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
                return '第' + (startIndex + 1) + ' - ' + endIndex + '条，共' + length + '条';
            } else if (language === "en") {
                if (length === 0 || pageSize === 0) {
                    return '0-0 of 0';
                }
                length = Math.max(length, 0);
                const startIndex = page * pageSize;
                const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
                return (startIndex + 1) + ' - ' + endIndex + ' of ' + length;
            } else {
                return "";
            }
        }
    }
}