import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserDto } from '../core/todos.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.scss']
})
export class UserSelectComponent implements OnInit {
  @Input()
  users: UserDto[] = [];
  @Output()
  check = new EventEmitter();

  control = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(id => {
      this.check.emit(id);
    });
  }

}
