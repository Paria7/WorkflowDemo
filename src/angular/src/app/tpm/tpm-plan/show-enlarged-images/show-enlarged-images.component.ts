import { Component, ElementRef, EventEmitter, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-show-enlarged-images',
  templateUrl: './show-enlarged-images.component.html',
  styleUrls: ['./show-enlarged-images.component.scss']
})
export class ShowEnlargedImagesComponent implements OnInit {

  public imageSrc: string;
  constructor(public dialogRef: MatDialogRef<ShowEnlargedImagesComponent>,
    @Inject(MAT_DIALOG_DATA) private dialogData: { imageData: string },
    private translate: TranslateService) {
    this.imageSrc = dialogData.imageData
  }


  ngOnInit() {
  }

}
