import { Component, OnInit } from '@angular/core';
import { TodosService, UserDto } from '../core/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  users: UserDto[] = [];

  constructor(
    public todoService: TodosService
  ) {
  }

  ngOnInit(): void {
    this.todoService.getUsers().subscribe(users => {
      this.users = users
    });
  }

}
