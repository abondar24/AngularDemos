import {Component} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {CanCompDeactivate} from "./CanCompDeactivate";

@Component({
  selector: 'tomato-tasks-editor',
  templateUrl:'./tasks-editor.component.html',
})

export  class TaskEditorComponent implements CanCompDeactivate{

  constructor(private title: Title){
    this.title.setTitle('Edit form');
  }

  canDeactivate(){
    this.title.setTitle('Tomato App');
    return window.confirm('Are you sure you want to leave?');
  };
}
