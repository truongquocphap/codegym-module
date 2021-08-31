import {Component, Inject, OnInit, Optional} from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss']
})
export class ImgSliderComponent implements OnInit {
  constructor(
  ) {}
  listslide = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=5',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=6',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=7',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=8'
  ];
  index = 3 ;

  showPrev() {
    return this.index = (this.index < this.listslide.length - 1) ? --this.index : this.listslide.length - 1 ;
  }

  showNext() {
    return this.index = (this.index < this.listslide.length - 1)  ? ++this.index : 0 ;
  }


  ngOnInit() {
  }

}
