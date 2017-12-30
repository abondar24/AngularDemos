import {Component, OnInit} from '@angular/core';
import TaskIconsComponent from './task-icons.component';
import TaskTooltipDirective from './task-tooltip.directive';
import {
    TaskService,
    SettingsService,
    Task,
    SHARED_PIPES
} from '../shared/shared';



@Component({
    selector: 'tomato-tasks',
    entryComponents: [TaskIconsComponent,TaskTooltipDirective, SHARED_PIPES],
    styleUrls: ['./tasks.component.css'],
    templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit{
    today: Date;
    tasks: Task[] = [];
    queuedTomatoes: number;
    queueHeaderMapping: any;
    timerMinutes: number;

    constructor(  private tasksService: TaskService,
                  private  settingsService: SettingsService) {

        this.tasks = this.tasksService.taskStore;
        this.today = new Date();
        this.queueHeaderMapping = settingsService.pluralsMap.tasks;
        this.timerMinutes = settingsService.timerMinutes;
    }

    ngOnInit(): void{
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
