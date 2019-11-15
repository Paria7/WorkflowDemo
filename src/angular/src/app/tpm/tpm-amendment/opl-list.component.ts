import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Utils } from 'shared';
import { PlantService, TpmAmendmentService } from 'shared/services';
import { OplModel, RemoveOplModel } from 'shared/models/tpm-amendment';
import { AddOrEditOplComponent } from './add-or-edit-opl.component'
import { CheckDetailViewType } from 'shared/models/portal'
import { InputCardNoModalComponent } from './input-card-no-modal/input-card-no-modal.component';

@Component({
    selector: 'oplListModel',
    templateUrl: './opl-list.component.html',
    styleUrls: ['./opl-list.component.scss']
})
export class OplListComponent implements OnInit {

    public displayColumns: string[] = [
        'no', 'tpmDescription', 'description', 'createTime', 'createBy', 'actions'];

    _oplList: OplModel[];
    @Input() checkDetailId: string;
    @Input() deviceId: string;
    @Input() viewType: CheckDetailViewType;
    @Input() needSwingCard: boolean = false;
    @Input() tpmPlanDetailId: string;
    dataSource = new MatTableDataSource<OplModel>([]);
    public cardNo: string;
    public oplRemoveModel = {
        Id: '',
        WriteLog: this.viewType == CheckDetailViewType.Amendment || this.viewType == CheckDetailViewType.Portal,
        //WriteLog: this.viewType == CheckDetailViewType.Amendment
        NeedSwingCard: this.needSwingCard,
        CardNo: ''
    };


    constructor(private plantService: PlantService
        , private dialog: MatDialog
        , private translate: TranslateService
        , private tpmAmendmentService: TpmAmendmentService
        , private utils: Utils
        , private fb: FormBuilder) {

        // console.log('opl-list tpmPlanDetailId', this.tpmPlanDetailId);

    }
    get oplList(): OplModel[] {
        return this._oplList;
    }

    @Input() set oplList(ou: OplModel[]) {
        if (this._oplList === ou) {
            return;
        }
        this._oplList = ou;
        this.dataSource.data = ou;
    }

    ngOnInit() {
        console.log('是否需要刷卡：this.needSwingCard', this.needSwingCard);
    }


    public add() {
        console.log(`是否需要刷卡${this.needSwingCard},this.DeviceId=${this.deviceId},this.CheckDetailId=${this.checkDetailId}`);

        this.dialog.open(AddOrEditOplComponent,
            {
                minWidth: '800px',
                data: Object.assign({}, {
                    Id: null,
                    CheckDetailId: this.checkDetailId,
                    DeviceId: this.deviceId,
                    WriteLog: this.viewType == CheckDetailViewType.Amendment || this.viewType == CheckDetailViewType.Portal,
                    //WriteLog: this.viewType == CheckDetailViewType.Amendment,
                    NeedSwingCard: this.needSwingCard,
                    TpmPlanDetailId: this.tpmPlanDetailId,
                })

            }).afterClosed().subscribe((dialogResult: boolean) => {

                if (dialogResult) {
                    console.log('opl新增窗口关闭了！');
                    this.getOpls();
                }
            });
    }

    getOpls() {
        this.tpmAmendmentService.getOpls(this.checkDetailId).subscribe(opls => {
            this.oplList = opls;
        });
    }

    public remove(id: string) {
        console.log('oplRemoveModel 为：', this.oplRemoveModel);
        this.oplRemoveModel.Id = id;
        this.oplRemoveModel.WriteLog = this.viewType == CheckDetailViewType.Amendment || this.viewType == CheckDetailViewType.Portal;
        //this.oplRemoveModel.WriteLog = this.viewType == CheckDetailViewType.Amendment;
        const action = () => {
            this.tpmAmendmentService.removeOpl(this.oplRemoveModel).subscribe(() => {
                this.getOpls();
            });
        };

        this.translate.get('OPL.DeleteConfirm').subscribe((message) => {
            this.utils.confirm(message).subscribe((dialogResult: boolean) => {
                if (dialogResult) {
                    if (this.needSwingCard) {
                        this.swingCard(action);
                    } else {
                        action();
                    }
                }
            });
        });
    }

    /*
    * 刷卡
    * */
    public swingCard(action) {
        this.dialog.open(InputCardNoModalComponent,
            {
                minWidth: '400px',
                data: Object.assign({ cardNo: this.cardNo })
            }).afterClosed().subscribe((dialogResult) => {
                if (dialogResult) {
                    console.log('返回的卡号为：', dialogResult);
                    this.oplRemoveModel.NeedSwingCard = true;
                    this.oplRemoveModel.CardNo = dialogResult;

                    action();
                }
            });
    }
}
