import {Component, OnInit, Input} from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import { AmendmentLogModel} from 'shared/models/tpm-amendment';


@Component({
  selector: 'amendmentListModel',
  templateUrl: './amendment-list.component.html',
  styleUrls: ['./amendment-list.component.scss']
})
export class AmendmentListComponent implements OnInit {

  public displayColumns: string[] = [
    'no', 'description', 'createTime', 'createBy'];

  _amendmentList: AmendmentLogModel[];
  dataSource = new MatTableDataSource<AmendmentLogModel>([]);

  constructor() {

  }
  get amendmentList(): AmendmentLogModel[] {
    return this._amendmentList;
  }
  
 @Input() set amendmentList(ou: AmendmentLogModel[]) {
    if (this._amendmentList === ou) {
        return;
    }
    this._amendmentList = ou;
    this.dataSource.data = ou;
  }

  ngOnInit() {
  }

}
