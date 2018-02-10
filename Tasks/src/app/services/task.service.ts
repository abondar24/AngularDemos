import { Injectable } from '@angular/core';
import  Task  from '../interfaces/task'
import {HttpClient} from  '@angular/common/http'

import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class TaskService {
    public taskStore: Task[] = [];
    public taskFeed:BehaviorSubject<Task[]>;

    // put this location to angular cli
    private dataUrl = 'app/data/raw-tasks.json';

    constructor(private http:HttpClient) {
      this.taskFeed = new BehaviorSubject<Task[]>([]);
      this.fetchTasks();
    }

    private fetchTasks():void{
      this.http.get<Task[]>(this.dataUrl)
        .subscribe(
          tasks=>{
            this.taskStore = tasks;
            this.taskFeed.next(tasks);
          },
          error => console.log(error)
        );
    }

   addTask(task:Task):void {
     this.taskStore.push(task);
     this.taskFeed.next(this.taskStore);
   }

}


