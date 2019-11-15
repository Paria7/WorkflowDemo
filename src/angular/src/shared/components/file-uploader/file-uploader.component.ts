import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  @ViewChild('fileUploader') fileUploader: ElementRef;
  @ViewChild('fileUploadForm') fileUploadForm: ElementRef;
  @Input() acceptFileTypes: string;
  @Output() fileSelected = new EventEmitter<File>();

  constructor() {
    this.acceptFileTypes = '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel';
  }

  ngOnInit(): void {
  }

  onSelected(event) {
    if (event.target.files && event.target.files.length === 1) {
      const file = event.target.files[0];
      // const fileType = file.type && file.type.toLowerCase();
      this.fileSelected.emit(file);
      this.resetFileInput();
    }
  }

  resetFileInput() {
    this.fileUploader.nativeElement.value = '';
  }

  selectFile() {
    this.fileUploader.nativeElement.click();
  }
}
