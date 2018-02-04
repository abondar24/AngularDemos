import {Component, Input, OnInit } from '@angular/core';
import  Task  from '../interfaces/task';

@Component({
    selector: 'tomato-task-icons',
    template: `<img *ngFor="let icon of icons"
                    src="../../assets/img/tomato.png"
                    width="{{size}}">`
})
export class TaskIconsComponent implements OnInit {
    @Input() task: Task;
    @Input() size: number;
    icons: Object[] = [];

    ngOnInit() {
        this.icons.length = this.task.tomatoRequired;
        this.icons.fill({name: this.task.name});
    }
}
