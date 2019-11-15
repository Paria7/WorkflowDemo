import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Utils } from 'shared';
import { CommonService, LineService, PlantService } from 'shared/services';
import { LineModel, PlantModel, QueryLineModel } from 'shared/models/base-config';
import { EditLineComponent } from './edit-line.component';
import { FileUploaderComponent } from '../../../shared/components';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  public form: FormGroup;
  queryModel: QueryLineModel;
  displayColumns: string[] = ['no', 'plantCode', 'plantName', 'processName', 'code', 'name', 'isActive', 'isNewLine'
    , 'description', 'updateUser', 'updateTime', 'actions'];
  plants: Array<PlantModel> = [];
  dataSource = new MatTableDataSource<LineModel>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('kpiFileUploader') kpiFileUploader: FileUploaderComponent;

  constructor(private lineService: LineService
    , private plantService: PlantService
    , private commonService: CommonService
    , private translate: TranslateService
    , private fb: FormBuilder
    , private dialog: MatDialog
    , private snackBar: MatSnackBar
    , private utils: Utils) {
    this.queryModel = {
      plantName: '',
      processName: '',
      code: '',
      name: '',
      isActive: 'all',
      pageIndex: 0,
      pageSize: 10
    };
    this.form = fb.group({
      'PlantName': [''],
      'ProcessName': [''],
      'Code': [''],
      'Name': [''],
      'IsActive': ['']
    });
    this.getPlants();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getLines();
  }

  add() {
    this.edit(<LineModel>{ Id: null, IsActive: true, IsNewLine: false });
  }

  edit(model: LineModel) {
    const data: { plants: PlantModel[], line: LineModel } = {
      plants: this.plants,
      line: Object.assign({}, model)
    };
    this.dialog.open(EditLineComponent, { minWidth: '800px', data: data })
      .afterClosed().subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          this.getLines();
        }
      });
  }

  remove(id: string) {
    const action = () => {
      this.lineService.deleteLine(id).subscribe(() => {
        this.getLines();
      });
    };

    this.translate.get('Line.DeleteConfirm').subscribe((message) => {
      this.utils.confirm(message).subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          action();
        }
      });
    });
  }

  private getLines() {
    return this.lineService.queryLines(this.queryModel).subscribe(lines => {
      this.dataSource.paginator.firstPage();
      this.dataSource.data = lines;
    });
  }

  private getPlants() {
    this.plantService.getPlants().subscribe(plants => {
      this.plants = plants;
    });
  }

  public query() {
    this.getLines();
  }

  public onClickDownloadKPITemplate() {
    this.lineService.downloadLineKPITemplate(this.queryModel).subscribe(blob => {
      this.commonService.saveBlob(blob, 'LineKPITemplate.xlsx');
    });
  }

  public onClickExportLineKPI() {
    this.lineService.exportLineKPI(this.queryModel).subscribe(blob => {
      this.commonService.saveBlob(blob, 'ExportLineKPIs.xlsx');
    });
  }

  public onClickImportLineKPI() {
    this.kpiFileUploader.selectFile();
  }

  onImportLineKPIFileSelected(file: File) {
    this.translate.get('Common.ImportSuccessfully').subscribe((message) => {
      this.lineService.importLineKPI(file).subscribe(() => {
        this.snackBar.open(message, '', {
          duration: 3000,
          verticalPosition: 'top',
        });
      });
    });
  }
}
