import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  @Input("photos")
  imageList : string[] = []
  
  @Output("on-navigate")
  emitter = new EventEmitter

  currentIndex = 0

  moveNext(){
    if (this.currentIndex < this.imageList.length - 1) {
      this.currentIndex += 1
      //Raise Event with index as payload
      this.emitter.emit(this.currentIndex)
    }
  }

  movePrevious(){
    if (this.currentIndex > 0) {
      this.currentIndex -=1
      //Raise Event with index as payload
      this.emitter.emit(this.currentIndex)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
