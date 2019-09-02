import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  


  Items: string[] = []


  @Input() item: string;

  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit() {
    
  }

  onButtonClick(value: string){
    this.Items.push(value);
    // const CurrentDate: Date = new Date();

  }

  // CurrentDate: Date = new Date();

  onCheck(){
    
  }
}


