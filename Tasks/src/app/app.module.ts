import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {TasksComponent} from './components/tasks.component'

import {TaskTooltipDirective} from "./directives/task-tooltip.directive";
import {TaskIconsComponent} from "./components/task-icons.component";
import TaskService from "./services/task.service";
import {FormattedTimePipe} from "./pipes/formatted-time.pipe";
import {QueuedOnlyPipe} from "./pipes/queued-only.pipe";

@NgModule({
  declarations: [
    TaskIconsComponent,
    TaskTooltipDirective,

    FormattedTimePipe,
    QueuedOnlyPipe,
    TasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [TasksComponent]
})
export class AppModule {
}
