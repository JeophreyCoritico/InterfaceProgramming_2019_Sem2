import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../todo';
  

@Component({
  selector: 'app-my-list-app2-todo-input',
  templateUrl: './my-list-app2-todo-input.component.html',
  styleUrls: ['./my-list-app2-todo-input.component.css']
})
export class MyListApp2TodoInputComponent implements OnInit {

  @Output()
  newItemEvent = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick(value: string) {
    this.newItemEvent.emit(new Todo(value, false));
  }

}
