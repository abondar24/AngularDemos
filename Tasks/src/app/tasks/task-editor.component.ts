import {Component} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {CanCompDeactivate} from "./CanCompDeactivate";
import Task from "../interfaces/task";
import {TaskService} from "../services/task.service";
import {Router} from "@angular/router";

@Component({
  selector: 'tomato-tasks-editor',
  templateUrl:'./tasks-editor.component.html',
})
export  class TaskEditorComponent implements CanCompDeactivate{

  task: Task;
  changesSaved: boolean;
  constructor(private title: Title,private taskService: TaskService, private router: Router){
    this.title.setTitle('Edit form');
    this.task = <Task>{};
  }

  canDeactivate(){
    this.title.setTitle('Tomato App');
    return this.changesSaved || window.confirm('Are you sure you want to leave?');
  };

  saveTask(form: any){
    this.task.name = form.name;
    this.task.deadline = new Date(form.deadline);
    this.task.tomatoRequired = form.tomatoRequired;
    this.task.queued = form.queued != "";

    this.taskService.addTask(this.task);
    this.changesSaved = true;
    this.router.navigate(['/tasks']);
  }
}
