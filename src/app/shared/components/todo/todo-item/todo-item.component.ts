import { Component, Input, OnInit } from '@angular/core';
import { TodoDto } from '../../../../core/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: TodoDto = {
    'userId': 0,
    'id': 0,
    'title': '',
    'completed': false
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
