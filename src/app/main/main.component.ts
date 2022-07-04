import { Component, OnInit } from '@angular/core';
import { TodoDto, TodosService, UserDto } from '../core/todos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  users: UserDto[] = [];
  todos: TodoDto[] = [];


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
    this.getTodos(id)
  }
  getTodos(userId: number) {
    this.todoService.getTodos(userId).subscribe(todos => {
      this.todos = todos;
    });
  }


}
