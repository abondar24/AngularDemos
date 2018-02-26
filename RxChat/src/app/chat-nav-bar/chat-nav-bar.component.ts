import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message/message.service";
import {ThreadService} from "../thread/thread.service";
import {Message} from "../message/message.model";
import {Thread} from "../thread/thread.model";
import * as _ from 'lodash';


@Component({
  selector: 'chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent implements OnInit {

  unreadMessagesCount: number;

  constructor(public messageService: MessageService,
              public threadService: ThreadService) { }



  ngOnInit(): void {
    this.messageService.messages
      .combineLatest(
        this.threadService.currentThread,
        (messages: Message[], currentThread: Thread)=>[currentThread,messages])
      .subscribe(([currentThread,messages]:[Thread,Message[]])=>{
        this.unreadMessagesCount = _.reduce(messages,(sum: number, msg: Message)=>{
          const messagesIsInCurrentThread: boolean = msg.thread && currentThread &&
            (currentThread.id===msg.thread.id);
          if (msg && !msg.isRead && !messagesIsInCurrentThread){
            sum +=1;
          }
          console.log(sum)
          return sum;
        });
      });

  }

}
