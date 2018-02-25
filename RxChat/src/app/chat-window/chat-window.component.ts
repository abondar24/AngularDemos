import {ChangeDetectionStrategy, Component, ElementRef, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Thread} from "../thread/thread.model";
import {Message} from "../message/message.model";
import {User} from "../user/user.model";
import {MessageService} from "../message/message.service";
import {ThreadService} from "../thread/thread.service";
import {UserService} from "../user/user.service";

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatWindowComponent implements OnInit {
   messages: Observable<any>;
   currentThread: Thread;
   draftMessage: Message;
   currentUser: User;

  constructor(public messageService: MessageService,
              public threadService: ThreadService,
              public userService: UserService,
              public el: ElementRef) { }

  ngOnInit() {
    this.messages = this.threadService.currentThreadMessages;

    this.draftMessage = new Message();

    this.threadService.currentThread.subscribe((thread: Thread)=>{
      this.currentThread = thread;
    });

    this.userService.currentUser.subscribe((user: User)=>{
      this.currentUser = user;
    });

    this.messages.subscribe(
      ()=>{
        setTimeout(()=>{
          this.scrollToBottom();
        });
      }
    );
  }

  sendMessage() {
    const msg: Message = this.draftMessage;

    msg.author = this.currentUser;
    msg.thread = this.currentThread;
    msg.isRead = true;

    this.messageService.addMessage(msg);
    this.draftMessage = new Message();
  }

  onEnter(event: any){
    this.sendMessage();
    event.preventDefault();
  }

  scrollToBottom(){
    const scrollPane = this.el.nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }

}
