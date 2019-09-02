import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DateCreatedComponent } from './date-created/date-created.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DateCreatedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
