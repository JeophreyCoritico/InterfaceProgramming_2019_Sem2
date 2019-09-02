import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyListApp2TodoListComponent } from './my-list-app2-todo-list/my-list-app2-todo-list.component';
import { MyListApp2TodoItemComponent } from './my-list-app2-todo-item/my-list-app2-todo-item.component';
import { MyListApp2TodoInputComponent } from './my-list-app2-todo-input/my-list-app2-todo-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MyListApp2TodoListComponent,
    MyListApp2TodoItemComponent,
    MyListApp2TodoInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
