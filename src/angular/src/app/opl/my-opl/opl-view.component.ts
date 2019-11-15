import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { QueryTabOplModel, OplCenterModel } from 'shared/models/opl';
import { OplCenterService } from 'shared/services';
import { TranslateService } from '@ngx-translate/core';
import { Utils } from 'shared';
import { EditOplViewItemComponent } from './edit-opl-view-item.component'
import { DeleteOrCancelReasonComponent } from './delete-or-cancel-reason.component'
@Component({
    selector: 'oplViewModel',
    templateUrl: './opl-view.component.html',
    styleUrls: ['./opl-view.component.scss']
})
export class OplViewComponent implements OnInit {

    displayColumns: string[] = ['description', 'tpmDescription', 'status', 'result', 'area', 'valueStream', 'line', 'device', 'createDate', 'closeDate', 'actions'];
    queryModel: QueryTabOplModel;
    details: OplCenterModel[];
    _tabIndex: number;
    totalCount: number;
    editOrViewIcon: string;
    get tabIndex(): number {
        return this._tabIndex;
    }

    @Input() set tabIndex(ou: number) {
        if (this._tabIndex === ou) {
            return;
        }
        this._tabIndex = ou;
        if (ou != undefined)
            this.loadTabData();
    }

    dataSource = new MatTableDataSource<OplCenterModel>([]);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(private oplCenterService: OplCenterService
        , private dialog: MatDialog
        , private translate: TranslateService
        , private utils: Utils) {
    }
    ngOnInit(): void {
    }
    loadTabData() {
        this.queryModel = {
            Type: this.tabIndex,
            PageIndex: 0,
            PageSize: 10
        };
        this.getOplDetails();
    }

    edit(model: OplCenterModel) {
        const data: { opl: OplCenterModel, tabType: number } = {
            opl: model,
            tabType: this.tabIndex
        };
        this.dialog.open(EditOplViewItemComponent, { minWidth: '600px', data: data })
            .afterClosed().subscribe((dialogResult: boolean) => {
                if (dialogResult) {
                    this.getOplDetails();
                }
            });
    }
    delete(id: string) {
        this.dialog.open(DeleteOrCancelReasonComponent,
            {
                minWidth: '500px',
                data: Object.assign({}, { Id: id, IsDelete: true })
            }).afterClosed().subscribe((dialogResult: boolean) => {
                if (dialogResult) {
                    this.getOplDetails();
                }
            });
    }
    cancel(id: string) {
        this.dialog.open(DeleteOrCancelReasonComponent,
            {
                minWidth: '500px',
                data: Object.assign({}, { Id: id, IsDelete: false })
            }).afterClosed().subscribe((dialogResult: boolean) => {
                if (dialogResult) {
                    this.getOplDetails();
                }
            });
    }
    private getOplDetails() {
        this.queryModel.PageIndex = this.paginator.pageIndex ? this.paginator.pageIndex + 1 : 1;
        this.queryModel.PageSize = this.paginator.pageSize ? this.paginator.pageSize : 10;

        return this.oplCenterService.queryTabOpls(this.queryModel).subscribe(outPut => {
            this.totalCount = outPut.TotalCount;
            this.dataSource.data = outPut.Dtos;
            this.details = outPut.Dtos;
        });
    }
    public changePage($event) {
        this.getOplDetails();
    }

    // isDelay(createDate: Date, targetDate: Date, status: string) {
    //     if (status == 'Complete')
    //         return 1;
    //     else if (createDate > targetDate)
    //         return 2;
    //         else if (createDate<targetDate && (Date targetDate-createDate)<=15)
    // }
}
