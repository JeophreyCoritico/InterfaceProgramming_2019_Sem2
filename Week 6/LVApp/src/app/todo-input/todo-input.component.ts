import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { todo } from '../todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

@Output()
newItemEvent = new EventEmitter<todo>();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick(){
    this.newItemEvent.emit(new todo("Blank Todo Item Here", false));
  }

}
