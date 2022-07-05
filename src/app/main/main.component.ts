import { Component, OnInit } from '@angular/core';
import { AlbumDto, PhotoDto, TodoDto, TodosService, UserDto } from '../core/todos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  users: UserDto[] = [];
  todos: TodoDto[] = [];
  albums: AlbumDto[] = [];
  photos: PhotoDto[] = [];
  activeModal = true;

  constructor(
    public todoService: TodosService,
  ) {
  }

  ngOnInit(): void {
    this.todoService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  updateUser(id: number) {
    this.getTodos(id);
    this.getAlbums(id);
  }

  getTodos(userId: number) {
    this.todoService.getTodos(userId).subscribe(todos => {
      this.todos = todos;
    });
  }

  getAlbums(userId: number) {
    this.todoService.getAlbums(userId).subscribe(albums => {
      this.albums = albums;
    });
  }

  getPhotos(albumId: number) {
    this.todoService.getPhotos(albumId).subscribe(photos => {
        this.photos = photos;
        this.activeModal = true;
      }
    );
  }
}
