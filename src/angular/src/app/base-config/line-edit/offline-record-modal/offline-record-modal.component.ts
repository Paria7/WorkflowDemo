import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource } from '@angular/material';
import { BasicPlantDataService } from 'shared/services/basic-plant-data.service';
import { PortalOffLineQueryOutputModel } from 'shared/models/portal/portal-offline-model';

@Component({
  selector: 'app-offline-record-modal',
  templateUrl: './offline-record-modal.component.html',
  styleUrls: ['./offline-record-modal.component.scss']
})
export class OfflineRecordModalComponent implements OnInit {

  public lineId: string;
  dataSource = new MatTableDataSource<PortalOffLineQueryOutputModel>([]);
  public displayColumns: string[] = [
    'OpType', 'CreateTime', 'CreateNo'];

  constructor(@Inject(MAT_DIALOG_DATA) lineId: string,
    public dialogRef: MatDialogRef<OfflineRecordModalComponent>,
    private basicPlantDataService: BasicPlantDataService, ) {
    this.lineId = lineId;
  }

  ngOnInit() {
    console.log('lineId=', this.lineId);
    this.getOffLineRecord();
  }

  /**
   * 获取下线log
   */
  public getOffLineRecord() {
    var model = {
      LineId: this.lineId,
    }
    this.basicPlantDataService.getOffLineRecord(model).subscribe(data => {
      console.log('this.data=', data)
      this.dataSource.data = data;
    },
      error => { });
  }
}
