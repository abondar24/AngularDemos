import {Component, Inject} from '@angular/core';
import {Thread} from "../thread/thread.model";
import * as ThreadActions from '../thread/thread.actions';
import {AppStore} from "../app.store";
import {AppState} from "../app.reducer";
import * as Redux from 'redux';
import {getAllThreads, getCurrentThread} from "../thread/thread.reducer";

@Component({
  selector: 'chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent{
  threads: Thread[];
  currentThreadId: string;

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    this.store.subscribe(()=> this.updateState());
    this.updateState();
  }

  updateState(): void {
    const state = this.store.getState();

    this.threads = getAllThreads(state);
    this.currentThreadId = getCurrentThread(state).id;
  }

  handleThreadClicked(thread: Thread): void {
    this.store.dispatch(ThreadActions.selectThread(thread));
  }

}
