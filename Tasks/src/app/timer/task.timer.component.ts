import {SettingsService} from "../services/settings.service";
import {TaskService} from "../services/task.service";
import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'tomato-task-timer',
  templateUrl: './task-timer.component.html'
})
export class TaskTimerComponent{
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;
  buttonLabelsMap: any;
  taskName:string;

  constructor (private settingsService:SettingsService,
               private activatedRoute: ActivatedRoute,
               private taskService: TaskService){
    this.buttonLabelsMap = settingsService.labelsMap.timer;
  }

  ngOnInit():void{
    this.resetTomato();
    setInterval(() => this.tick(), 1000);

    let taskId=0;
    this.activatedRoute.params.subscribe(params=>{
      taskId = +params['id']
    });

    if (!isNaN(taskId)){
      this.taskName = this.taskService.taskStore[taskId].name;
    }
  }

  resetTomato(): void {
    this.isPaused = true;
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'start';

  }

  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabel = 'pause';

      if (--this.seconds < 0) {
        this.seconds = 59;

        if (--this.minutes < 0) {
          this.resetTomato()

        }

      }

    }

  }

  togglePause(): void {
    this.isPaused = !this.isPaused;

    if (this.minutes < 24 || this.seconds < 59) {
      this.buttonLabel = this.isPaused ? 'resume' : 'pause';

    }

  }
}
