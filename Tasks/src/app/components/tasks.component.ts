import {Component, OnInit} from '@angular/core';
import Task from "../interfaces/task";
import TaskService from "../services/task.service";


@Component({
  selector: 'tomato-tasks',
  styleUrls: ['./tasks.component.css'],
  templateUrl: './tasks.component.html'
})
export class TasksComponent {
  today: Date;
  tasks: Task[] = [];
  queuedTomatoes: number;
  queueHeaderMapping: any = {
    '=0': 'No tomatoes',
    '=1': 'One tomato',
    'other': '# tomatoes'
  };


  constructor(private tasksService: TaskService,) {

    this.tasks = this.tasksService.taskStore;
    this.today = new Date();
    this.updateQueuedTomatoes();
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

}
