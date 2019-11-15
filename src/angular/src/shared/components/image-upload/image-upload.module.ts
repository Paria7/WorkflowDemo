/**
 * Created by Tony Sun on 22/4/2019.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload.component';
import { ShowEnlargedImageComponent } from '././show-enlarged-image/show-enlarged-image.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule, Utils, TranslateUniversalLoader } from 'shared';
import { MatDialogModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateUniversalLoader
      },
    }),
  ],
  declarations: [
    ImageUploadComponent,
    ShowEnlargedImageComponent
  ],
  exports: [
    ImageUploadComponent,
    ShowEnlargedImageComponent
  ],
  entryComponents: [
    ShowEnlargedImageComponent
  ]
})

export class ImageUploadModule { }
