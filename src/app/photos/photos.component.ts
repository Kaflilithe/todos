import { Component, Input, OnInit } from '@angular/core';
import { PhotoDto } from '../core/todos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  @Input()
  photo: PhotoDto = {
    "albumId": 0,
    "id": 0,
    "title": '',
    "url": '',
    "thumbnailUrl": ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
