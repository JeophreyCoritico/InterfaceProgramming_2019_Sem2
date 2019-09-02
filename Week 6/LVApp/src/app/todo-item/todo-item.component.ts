import { Component, OnInit, Input } from '@angular/core';
import { todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  item: todo;
  constructor() { }

  ngOnInit() {
  }

}
