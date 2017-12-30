import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimerWidgetComponent } from './timer/timer-widget.component'
import { TasksComponent } from './tasks/tasks.component'
import {TASK_DIRECTIVES} from "./tasks/tasks";
import {TIMER_DIRECTIVES} from "./timer/timer";

@NgModule({
  declarations: [
    AppComponent,
    TimerWidgetComponent,
    TasksComponent,
    TIMER_DIRECTIVES, TASK_DIRECTIVES

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
