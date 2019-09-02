import { Component, OnInit, Input } from '@angular/core';
import { todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: todo[];

  constructor() { }

  ngOnInit() {
  }

}
