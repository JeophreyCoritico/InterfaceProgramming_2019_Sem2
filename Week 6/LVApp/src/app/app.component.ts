import { Component } from '@angular/core';
import { todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LVApp';

  todos: todo[] = [];

  constructor() {
    this.todos.push(new todo("Complete this task", false));
    this.todos.push(new todo("Add support for adding todos", false));
  }

  addTodo(todo: todo){
    this.todos.push(todo);
  }
}
