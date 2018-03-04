import {ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit} from '@angular/core';
import {Thread} from "../thread/thread.model";
import * as ThreadActions from '../thread/thread.actions';
import {User} from "../user/user.model";
import {AppStore} from "../app.store";
import {AppState} from "../app.reducer";
import * as Redux from 'redux';
import {getCurrentThread} from "../thread/thread.reducer";
import {getCurrentUser} from "../user/user.reducer";

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatWindowComponent{
  currentThread: Thread;
  draftMessage: {text: string};
  currentUser: User;

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>,
              private el: ElementRef) {

    store.subscribe(()=> this.updateState());
    this.updateState();
    this.draftMessage = {text: ''}
  }

  updateState(): void {
    const state = this.store.getState();
    this.currentThread = getCurrentThread(state);
    this.currentUser = getCurrentUser(state);
    this.scrollToBottom();
  }

  sendMessage():void {
    this.store.dispatch(ThreadActions.addMessage(
      this.currentThread,
      {
        author: this.currentUser,
        isRead: true,
        text: this.draftMessage.text
      }
    ));
    this.draftMessage = {text: ''};
  }


  onEnter(event: any):void{
    this.sendMessage();
    event.preventDefault();
  }

  scrollToBottom():void{
    const scrollPane = this.el.nativeElement.querySelector('.msg-container-base');

    if (scrollPane){
      setTimeout(()=>scrollPane.scrollTop = scrollPane.scrollHeight);
    }
  }

}
