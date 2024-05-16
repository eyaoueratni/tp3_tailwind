import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import the navbarComponent
import { NavbarComponent } from './components/navbar/navbar.component';

import { TaskFormComponent } from './components/task-form/task-form.component'; // Import Task Form component
import { TasksListComponent } from './components/tasks-list/tasks-list.component'; // Import Task List component
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskFormComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
