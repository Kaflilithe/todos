import { Component, Input, OnInit } from '@angular/core';
import { AlbumDto} from '../../../../core/todos.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  @Input()
  album: AlbumDto = {
    'userId': 0,
    'id': 0,
    'title': '',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
