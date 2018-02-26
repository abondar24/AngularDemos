import {Component, Input, OnInit} from '@angular/core';
import {ThreadService} from "../thread/thread.service";
import {Thread} from "../thread/thread.model";

@Component({
  selector: 'chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.css']
})
export class ChatThreadComponent implements OnInit {

  @Input() thread: Thread;
  selected = false;

  constructor(public threadService:ThreadService) { }

  ngOnInit():void {
    this.threadService.currentThread
      .subscribe(currentThread=>{
        this.selected = currentThread && this.thread &&
          (currentThread.id===this.thread.id);
      });
  }

  clicked(event :any):void{
    this.threadService.setCurrentThread(this.thread);
    event.preventDefault();
  }
}
