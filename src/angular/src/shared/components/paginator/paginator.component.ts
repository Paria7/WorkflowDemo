import { Component, OnInit, Input } from '@angular/core';
import { PaginatorData } from './models/paginator-data';
import { BehaviorSubject } from 'rxjs';
import { PageInfo } from './models/page';

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
    constructor() { }


    pages$ = new BehaviorSubject<PageInfo[]>([]);

    ngOnInit(): void {

    }

    @Input()
    public set data(val: PaginatorData) {
        const pages: PageInfo[] = [];
        if (val === undefined) {
            this.pages$.next(pages);
            return;
        }
        if (!val.pageSize) {
            throw new Error('Ivalid page size.');
        }
        // this.pageNo = val.pageNo;
        const pageCount = Math.floor((val.totalCount + val.pageSize) / val.pageSize);

        const addPage = (i: number) => {
            if (pages.findIndex(page => page.pageNo === i) < 0) {
                pages.push({
                    pageNo: i,
                    isActive: i === val.pageNo
                });
            }
        };

        for (let i = 1; i <= Math.min(5, pageCount); i++) {
            addPage(i);
        }

        for (let i = Math.min(val.pageNo - 5, 1); i <= Math.min(val.pageNo + 5, pageCount); i++) {
            addPage(i);
        }

        for (let i = pageCount; i >= Math.max(1, pageCount - 5); i--) {
            addPage(i);
        }
        this.pages$.next(pages);
    }
}
