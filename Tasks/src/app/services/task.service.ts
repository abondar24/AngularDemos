import { Injectable } from '@angular/core';
import  Task  from '../interfaces/task'
import {HttpClient} from  '@angular/common/http'

import {Observable} from "rxjs/Observable";

@Injectable()
export class TaskService {
    public taskStore: Task[] = [];
    public taskFeed: Observable<Task>;
    private taskObserver: any;
    // put this location to angular cli
    private dataUrl = 'app/data/raw-tasks.json';

    constructor(private http:HttpClient) {
      this.taskFeed = new Observable<Task>(observer =>{
        this.taskObserver = observer;
      });

      this.fetchTasks();
    }

    private fetchTasks():void{
      this.http.get<Task[]>(this.dataUrl)
        .subscribe(
          tasks=>{
            this.taskStore = tasks;
            tasks.forEach(task=>this.taskObserver.next(task))
          },
          error => console.log(error)
        );
    }

   addTask(task:Task):void{
      this.taskObserver.next(task);

   }

}


