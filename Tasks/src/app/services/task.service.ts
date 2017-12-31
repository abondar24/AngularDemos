import { Injectable } from '@angular/core';
import  Task  from '../interfaces/task'


@Injectable()
export default class TaskService {
    public taskStore: Task[] = [];

    constructor() {
        const tasks = [
            {
                name: "Code  HTML table",
                deadline: "Mar 26 2017",
                tomatoRequired: 1
            },
            {
                name: "Fix Bugs",
                deadline: "Mar 29 2017",
                tomatoRequired: 2
            },
            {
                name: "Buy a burger",
                deadline: "Mar 31 2017",
                tomatoRequired: 1
            },
            {
                name: "Special task ",
                deadline: "Apr 3 2017",
                tomatoRequired: 3
            }
        ];


        this.taskStore = tasks.map(task => {
            return {
                name: task.name,
                deadline: new Date(task.deadline),
                queued: false,
                tomatoRequired: task.tomatoRequired
            }
        });
    }
}


