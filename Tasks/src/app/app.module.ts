import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TasksComponent} from './tasks/tasks.component'
import {TaskTooltipDirective} from "./tasks/task-tooltip.directive";
import {TaskIconsComponent} from "./tasks/task-icons.component";
import TaskService from "./services/task.service";
import {FormattedTimePipe} from "./pipes/formatted-time.pipe";
import {QueuedOnlyPipe} from "./pipes/queued-only.pipe";
import AppComponent from "./app.component";
import {SettingsService} from "./services/settings.service";
import {TimerComponent} from "./timer/timer.component";
import {HttpClientModule} from "@angular/common/http";
import 'rxjs/Rx';


@NgModule({
  declarations: [
    TaskIconsComponent,
    TaskTooltipDirective,
    FormattedTimePipe,
    QueuedOnlyPipe,
    AppComponent,
    TasksComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [TaskService,SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
