import { Component, OnInit, Inject, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TpmPlanModel, TpmPlanDetailsModel, TpmPlanItemDetailsModel, CodeConfigModel } from 'shared/models/tpm-plan';
import { TpmPlanService } from 'shared/services/tpm-plan.service';
import { MAXLENGTH, MAXDESCRIPTIONLENGTH } from 'shared/constants';
import { TranslateService } from '@ngx-translate/core';
import { Utils } from "shared";
import { ShowEnlargedImagesComponent } from './show-enlarged-images/show-enlarged-images.component';

@Component({
  selector: 'app-tpm-plan-item-details',
  templateUrl: './tpm-plan-item-details.component.html',
  styleUrls: ['./tpm-plan-item-details.component.scss']
})
export class TpmPlanItemDetailsComponent implements OnInit {
  checkValue: number;
  notification: number;
  public form: FormGroup;
  tpmPlanItemDetailsModel: TpmPlanItemDetailsModel;
  public tpmPlanDetailsModel: TpmPlanDetailsModel;
  public tpmPlanModel: TpmPlanModel;

  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  totalCount: number;

  private imageChanged: boolean = false;
  public selectedImage: any = [];
  imageArray: Array<string> = [];
  max: number;
  fileChanged: EventEmitter<any> = new EventEmitter<any>();
  imagesChanged: EventEmitter<any> = new EventEmitter<any>();
  file: any = [];
  type: string;

  private editConfirm: string;
  mainttypes: any = [];

  constructor(
    public dialogRef: MatDialogRef<TpmPlanItemDetailsComponent>,
    // @Inject(MAT_DIALOG_DATA) tpmPlanDetailsModel: TpmPlanDetailsModel,
    @Inject(MAT_DIALOG_DATA) private dialogData: { tpmPlanDetailsModel: TpmPlanDetailsModel, tpmPlanModel: TpmPlanModel },
    private tpmPlanService: TpmPlanService,
    private translateService: TranslateService,
    private snackBar: MatSnackBar,
    private utils: Utils,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.form = fb.group({
      'Description': [''],
      'HowToMaintain': [''],
      'Tools': [''],
      'Interval': ['', Validators.required],
      'DoBy': [''],
      'CheckBy': [''],
      'CostTime': [''],
      'CheckValue': [''],
      'Notification': [''],
      'MaintType': [''],
      'NotificationPerson': ['']
    });
    this.mainttypes = this.getMaintTypes();
    this.tpmPlanDetailsModel = dialogData.tpmPlanDetailsModel;
    this.checkValue = this.tpmPlanDetailsModel.CheckValue ? 1 : 0;
    this.notification = this.tpmPlanDetailsModel.Notification ? 1 : 0;
    console.log('this.checkValue', this.checkValue);
    this.tpmPlanModel = dialogData.tpmPlanModel;
    console.log('this.dialogData.tpmPlanModel', dialogData.tpmPlanModel);
    this.GetTpmPlanItemDetailsModel();

    if (this.tpmPlanItemDetailsModel.Id !== undefined && this.tpmPlanItemDetailsModel.Id !== null) {
      this.tpmPlanService.getImagesById(this.tpmPlanItemDetailsModel.Id).subscribe((item) => {
        console.log("item-item", item);
        for (let i = 0; i < item.length; i++) {
          this.tpmPlanItemDetailsModel.Image = "data:image/jpeg;base64," + item[i].image;
          this.imageArray.push(this.tpmPlanItemDetailsModel.Image);
        }
        console.log("this.imageArray", this.imageArray);
      });
    }
  }

  ngOnInit() {
    this.GetTpmPlanItemDetailsModel();
  }

  protected GetTpmPlanItemDetailsModel() {
    this.tpmPlanItemDetailsModel = {
      Id: this.tpmPlanDetailsModel.Id,
      Description: this.tpmPlanDetailsModel.Description,
      HowToMaintain: this.tpmPlanDetailsModel.HowToMaintain,
      Tools: this.tpmPlanDetailsModel.Tools,
      Interval: this.tpmPlanDetailsModel.Interval,
      IntervalCode: this.tpmPlanDetailsModel.IntervalCode,
      DoBy: this.tpmPlanDetailsModel.DoBy,
      CheckBy: this.tpmPlanDetailsModel.CheckBy,
      Cost: this.tpmPlanDetailsModel.Cost,
      CheckValue: this.checkValue == 1 ? true : false,
      Notification: this.notification == 1 ? true : false,
      TPMPlanId: this.tpmPlanModel.Id,
      MaintType: this.tpmPlanDetailsModel.MaintType,
      NotificationPerson: this.tpmPlanDetailsModel.NotificationPerson
    };
  }

  public getMaintTypes() {
    this.tpmPlanService.getMaintTypes().subscribe(data => this.mainttypes = data);
  }

  public save() {
    if (!this.form.valid) {
      return;
    }
    if (this.tpmPlanModel.Status.toString() == "Draft")
      this.editConfirm = 'TpmPlanDetails.EditConfirm2';
    else
      this.editConfirm = 'TpmPlanDetails.EditConfirm';
    console.log('this.editConfirm', this.editConfirm);

    this.translateService.get(this.editConfirm).subscribe((message) => {
      this.utils.confirm(message).subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          action();
        }
      });
    });
    const action = () => {
      this.GetTpmPlanItemDetailsModel();
      console.log('this.tpmPlanItemDetailsModel', this.tpmPlanItemDetailsModel);
      this.translateService.get('Common.SaveSuccessfully').subscribe((message) => {
        this.tpmPlanService.saveTpmPlanItemDetails(this.tpmPlanItemDetailsModel).subscribe((item) => {
          let tpmPlanDetailsId: string = item["Id"];
          if (this.imageChanged) {
            const ele = this.fileInput.nativeElement;
            console.log('ele.files', ele.files);
            this.tpmPlanService.saveFile(tpmPlanDetailsId, ele.files);
          }
          this.dialogRef.close(true);
          this.snackBar.open(message, '', {
            duration: 3000,
            verticalPosition: 'top',
          });
        });
      });
    };
  }

  fileChange() {
    this.imageChanged = true;

    console.log('e', this.fileInput.nativeElement.files);
    const files = this.fileInput.nativeElement.files;
    this.file = files;
    let len = files.length;
    let currentImageLength = this.imageArray.length;
    len = len + currentImageLength > this.max ? this.max - currentImageLength : len;
    this.fileChanged.emit(files[0]);
    this.imageArray.splice(0, this.imageArray.length);
    for (let i = 0; i < len; i++) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageArray.push(event.currentTarget.result);
        if (i === len - 1) {
          this.imagesChanged.emit(this.imageArray);
        }
      };
      reader.readAsDataURL(files[i]);
    }
    //this.fileInput.nativeElement.value = '';
  }

  deleteImage(index) {
    this.imageArray.splice(index, 1);
    this.imagesChanged.emit(this.imageArray);
    this.fileChanged.emit(null);
    //this.fileInput.nativeElement.value = '';
  }

  showEnlargedImage(value) {
    this.dialog.open(ShowEnlargedImagesComponent, {
      maxWidth: '700px',
      minWidth: '700px',
      maxHeight: '500px',
      minHeight: '500px',
      data: Object.assign({ imageData: this.imageArray[value] })
    }).afterClosed().subscribe((dialogResult: boolean) => {
    });
  }
}
