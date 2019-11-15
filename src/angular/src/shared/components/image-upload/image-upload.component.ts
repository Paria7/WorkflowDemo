/**
 * Created by Tony Sun on 22/4/2019.
 */
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material';
import { ShowEnlargedImageComponent } from './show-enlarged-image/show-enlarged-image.component';

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.template.html',
  styleUrls: ['./image-upload.style.scss']
})

export class ImageUploadComponent implements OnInit, OnChanges {

  @Input('extensions') supportedExtensions: string[];
  @Input('type') type: string;
  @Input('max') max: number;
  @Input('size') size: number;
  @Input('fileName') fileName: string;
  @Input('images') images: Array<any>;
  @Input('supportedTypes') supportedTypes: Array<string>;
  @Output() imageChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() fileNameChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() fileChanged: EventEmitter<any> = new EventEmitter<any>();
  imageArray: Array<string> = [];
  @ViewChild('input') input;
  selectedFileName: string;
  NotSupportedType: boolean = false;
  supportFileTypes: string;
  SizeLimit: boolean = false;

  constructor(private translate: TranslateService,
    private dialog: MatDialog) {

  }

  ngOnInit() {
    if (typeof this.images !== 'undefined') {
      this.imageArray = this.images;
    }
    this.supportedExtensions = this.supportedExtensions ? this.supportedExtensions : ['*'];
  }
  ngOnChanges() {
    if (this.fileName) {
      this.selectedFileName = this.fileName;
    }
  }

  checkFileType(fileType) {
    let result = false;
    for (let i in this.supportedTypes) {
      if (this.supportedTypes[i] === fileType) {
        result = true;
        break;
      }
    }
    return result;
  }

  fileChange(files: any) {
    if (files.length <= 0) {
      return false;
    }
    if (this.size) {
      let fileLength = files[0].size;
      let fileSize = fileLength / (1024 * 1024);
      if (fileSize > this.size) {
        this.SizeLimit = true;
        this.NotSupportedType = false;
        this.deleteFile();
        return false;
      }
    }

    this.SizeLimit = false;
    let fileName = files[0].name;

    if (this.supportedTypes) {
      let fileTypePos = fileName.lastIndexOf(".");
      let fileType = fileName.substring(fileTypePos + 1);
      if (!this.checkFileType(fileType)) {
        this.NotSupportedType = true;
        this.supportFileTypes = this.supportedTypes.join(',');
        this.imageArray = [];
        this.deleteFile();
        return false;
      }
    }

    if (this.type === 'all') {
      this.selectedFileName = fileName;
      this.fileNameChanged.emit(fileName);
    }
    this.max === 1 ? this.imageArray = [] : null;
    let len = files.length;
    let currentImageLength = this.imageArray.length;
    len = len + currentImageLength > this.max ? this.max - currentImageLength : len;
    this.fileChanged.emit(files[0]);
    for (let i = 0; i < len; i++) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageArray.push(event.currentTarget.result);
        if (i === len - 1) {
          this.imageChanged.emit(this.imageArray);
        }
      };
      reader.readAsDataURL(files[i]);
    }
    this.input.nativeElement.value = '';
    this.clearErrorNotification();
  }

  clearErrorNotification() {
    this.NotSupportedType = false;
  }

  deleteImage(index) {
    this.imageArray.splice(index, 1);
    this.imageChanged.emit(this.imageArray);
    this.fileChanged.emit(null);
    this.input.nativeElement.value = '';
  }

  deleteFile() {
    this.selectedFileName = '';
    this.imageChanged.emit(['']);
    this.fileChanged.emit(['']);
    this.fileNameChanged.emit('');
  }

  showEnlargedImage() {
    this.dialog.open(ShowEnlargedImageComponent, {
      maxWidth: '600px',
      minWidth: '600px',
      maxHeight: '530px',
      minHeight: '530px',
      data: Object.assign({ imageData: this.imageArray })
    }).afterClosed().subscribe((dialogResult: boolean) => {
    });
  }
}
