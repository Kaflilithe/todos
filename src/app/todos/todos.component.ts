import { Component, OnInit } from '@angular/core';
import { TodoDto, TodosService, UserDto } from '../core/todos.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  control = new FormControl()

  users: UserDto[] = [];
  todos: TodoDto[] = []

  constructor(
    public todoService: TodosService
  ) {
  }

  ngOnInit(): void {
    this.todoService.getUsers().subscribe(users => {
      this.users = users
    });

    this.control.valueChanges.subscribe(id=>{
      this.getTodos(id)
    })
  }
  getTodos(userId:number){
    this.todoService.getTodos(userId).subscribe(todos=>{
      this.todos = todos
    })
  }

  onSelectChange($event: Event) {
    console.log($event);
  }
}
