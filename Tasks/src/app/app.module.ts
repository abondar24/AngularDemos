import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TasksComponent} from './tasks/tasks.component'
import {TaskTooltipDirective} from "./tasks/task-tooltip.directive";
import {TaskIconsComponent} from "./tasks/task-icons.component";
import {TaskService} from "./services/task.service";
import {FormattedTimePipe} from "./pipes/formatted-time.pipe";
import {QueuedOnlyPipe} from "./pipes/queued-only.pipe";
import AppComponent from "./app.component";
import {SettingsService} from "./services/settings.service";
import {HttpClientModule} from "@angular/common/http";
import 'rxjs/Rx';
import {RouterModule, Routes} from '@angular/router';
import {TaskEditorComponent} from "./tasks/task-editor.component";

import {TaskTimerComponent} from "./timer/task.timer.component";
import {TimerComponent} from "./timer/timer.component";
import {Guard} from "./tasks/guard";



const routes: Routes =[
  {path:'', component:TasksComponent},
  {path:'tasks/editor',component:TaskEditorComponent,canActivate:[Guard],
    canDeactivate:[Guard]},
  {path:'timer', component:TimerComponent,children:[
      {
        path: '',
        component:TaskTimerComponent
      },
      {
        path: ':id',
        component: TaskTimerComponent
      },
    ]}
];

@NgModule({
  declarations: [
    TaskIconsComponent,
    TaskTooltipDirective,
    FormattedTimePipe,
    QueuedOnlyPipe,
    AppComponent,
    TasksComponent,
    TaskTimerComponent,
    TimerComponent,
    TaskEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TaskService,SettingsService,Guard],
  bootstrap: [AppComponent]
})
export class AppModule {
}

