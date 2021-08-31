import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './image-card/image-card.component';
import {ImageGallaryComponent} from "../image-gallary/image-gallary.component";



@NgModule({
  declarations: [ImageCardComponent,ImageGallaryComponent],
  exports: [
    ImageGallaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImageGalleryModule {

}
