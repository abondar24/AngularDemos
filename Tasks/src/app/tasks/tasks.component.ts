import {Component, OnInit} from '@angular/core';
import Task from "../interfaces/task";
import {TaskService} from "../services/task.service";
import {Router} from '@angular/router';
import {SettingsService} from "../services/settings.service";

@Component({
  selector: 'tomato-tasks',
  styleUrls: ['./tasks.component.css'],
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit{
  today: Date;
  tasks: Task[]=[];
  queuedTomatoes: number;
  queueHeaderMapping: any;


  constructor(private tasksService: TaskService,
              private settingsService: SettingsService,
              private router: Router) {
    this.queueHeaderMapping = settingsService.pluralsMap.tasks;
    this.today = new Date();
  }

  ngOnInit(): void {
   this.tasksService.taskFeed
     .subscribe(newTasks => {
       this.tasks=newTasks;
       this.updateQueuedTomatoes();
    },error=>{
     console.log(error);
   });
   console.log(this.tasks)
  }

  toggleTask(task: Task): void {
    task.queued = !task.queued;
    this.updateQueuedTomatoes();
  }

  private updateQueuedTomatoes(): void {
    this.queuedTomatoes = this.tasks
      .filter((task: Task) => task.queued)
      .reduce((tomatoes: number, queuedTask: Task) => {
        return tomatoes + queuedTask.tomatoRequired
      }, 0)
  }

  workOn(index: number): void{
    this.router.navigate(['/timer',index])
  }
}
