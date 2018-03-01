import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Thread} from "../thread/thread.model";

@Component({
  selector: 'chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.css']
})
export class ChatThreadComponent{

  @Input() thread: Thread;
  @Input() selected: boolean;
  @Output() onThreadSelected: EventEmitter<Thread>;

  constructor() {
    this.onThreadSelected = new EventEmitter<Thread>();
  }


  clicked(event :any):void{
    this.onThreadSelected.emit(this.thread);
    event.preventDefault();
  }
}
