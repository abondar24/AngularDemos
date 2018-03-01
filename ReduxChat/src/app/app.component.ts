import {Component, Inject} from '@angular/core';
import {ChatExampleData} from "./data/chat-data";
import {AppStore} from "./app.store";
import {AppState} from "./app.reducer";
import * as Redux from 'redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor (@Inject(AppStore) private store: Redux.Store<AppState>){
    ChatExampleData(this.store);
  }
}
