import { Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ThreadService} from "../thread/thread.service";

@Component({
  selector: 'chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent{
  threads: Observable<any>;


  constructor(public  threadService: ThreadService) {
    this.threads = threadService.orderedThreads;
  }

}
