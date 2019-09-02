import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';


@Component({
  selector: 'app-my-list-app2-todo-item',
  templateUrl: './my-list-app2-todo-item.component.html',
  styleUrls: ['./my-list-app2-todo-item.component.css']
})
export class MyListApp2TodoItemComponent implements OnInit {

  @Input()
  item: Todo;

  constructor() { }

  ngOnInit() {
  }

}
