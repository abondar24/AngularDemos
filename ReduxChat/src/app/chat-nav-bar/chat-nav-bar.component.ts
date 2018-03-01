import {Component, Inject} from '@angular/core';
import {AppStore} from "../app.store";
import {AppState} from "../app.reducer";
import * as Redux from 'redux';
import {getUnreadMessageCount} from "../thread/thread.reducer";

@Component({
  selector: 'chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent {

  unreadMessagesCount: number;

  constructor(@Inject(AppStore)private store: Redux.Store<AppState>) {

    store.subscribe(()=>this.updateState());
    this.updateState();
  }

  updateState():void {
    this.unreadMessagesCount = getUnreadMessageCount(this.store.getState())
  }
}
