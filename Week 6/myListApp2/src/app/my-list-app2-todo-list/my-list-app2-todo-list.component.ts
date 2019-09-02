import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';


@Component({
  selector: 'app-my-list-app2-todo-list',
  templateUrl: './my-list-app2-todo-list.component.html',
  styleUrls: ['./my-list-app2-todo-list.component.css']
})
export class MyListApp2TodoListComponent implements OnInit {

@Input()
todos: Todo[];

  constructor() { }

  ngOnInit() {
  }

}
