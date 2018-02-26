import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Thread} from "./thread.model";
import {MessageService} from "../message/message.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';
import {Message} from "../message/message.model";
import * as _ from 'lodash';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class ThreadService {
  threads: Observable<{[key: string]: Thread}>;
  orderedThreads: Observable<Thread[]>;
  currentThread: Subject<Thread> = new BehaviorSubject<Thread>(new Thread());
  currentThreadMessages: Observable<Message[]>;

  constructor(public messageService: MessageService){
    this.threads = messageService.messages
      .map(messages=>{
        const threads: {[key: string]: Thread}={};
        messages.map(message=>{
          threads[message.thread.id] = threads[message.thread.id] || message.thread;

          const messagesThread: Thread = threads[message.thread.id];
          if (!messagesThread.lastMessage || messagesThread.lastMessage.sentAt< message.sentAt){
            messagesThread.lastMessage = message;
          }
        });
        return threads;
      });

    this.orderedThreads = this.threads
      .map(threadGroups=>{
        const threads: Thread[] = _.values(threadGroups);
        console.log(threadGroups);
        return _.sortBy(threads,(t: Thread)=> t.lastMessage.sentAt).reverse();
      });

    this.currentThreadMessages = this.currentThread
      .combineLatest(messageService.messages,
        (currentThread: Thread,messages: Message[])=>{
        if (currentThread && messages.length >0){
          return _.chain(messages)
            .filter(message =>
              (message.thread.id === currentThread.id))
            .map(message =>{
              message.isRead = true;
              return message;})
            .value();
        } else {
          return [];
        }
    });

    this.currentThread.subscribe(this.messageService.markThreadAsRead);



  }

  setCurrentThread(newThread: Thread):void{
    this.currentThread.next(newThread);
  }
}
