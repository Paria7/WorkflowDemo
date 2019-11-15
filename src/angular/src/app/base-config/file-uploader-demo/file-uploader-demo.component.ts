import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-uploader-demo',
  templateUrl: './file-uploader-demo.component.html',
  styleUrls: ['./file-uploader-demo.component.scss']
})
export class FileUploaderDemoComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  /*
  * 选择文件就自动上传
  * */
  upload() {
    this.postUploader();
  }

  /*
  * 手动上传
  * */
  public uploadSubmit() {
    this.postUploader();
  }

  /*
  * 调用后台接口上传
  * */
  public postUploader() {
    const ele = this.fileInput.nativeElement;
    const formData = new FormData();
    formData.append('file', ele.files[0]);
    /*传其它参数*/
    formData.append('id', '123');
    formData.append('name', '孙涛测试');
    return this.http.post('http://localhost:61654/api/Attachment/UploadFileDemo', formData)
      .subscribe(data => {
        console.log('返回的数据：', data);
      });
  }
}
