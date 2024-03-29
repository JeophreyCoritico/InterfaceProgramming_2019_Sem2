import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetsCreateComponent } from './planets-create/planets-create.component';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetsCreateComponent,
    PlanetsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
