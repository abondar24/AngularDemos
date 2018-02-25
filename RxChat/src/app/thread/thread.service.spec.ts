import {User} from "../user/user.model";
import {Thread} from "./thread.model";
import {Message} from "../message/message.model";
import {MessageService} from "../message/message.service";
import {ThreadService} from "./thread.service";
import * as _ from 'lodash';

describe('MessageService',()=>{
  it('should test',()=>{
    const peter: User = new User('Peter','');
    const arsen: User = new User('Arsen','');

    const thread1: Thread = new Thread('t1','Thread 1','');
    const thread2: Thread = new Thread('t2','Thread 2','');

    const msg1: Message = new Message({
      author: peter,
      text: 'Hi!',
      thread: thread1
    });

    const msg2: Message = new Message({
      author: arsen,
      text: 'Hiiiiiii!',
      thread: thread2
    });

    const msg3: Message = new Message({
      author: peter,
      text: 'Wo bist mein gelb?',
      thread: thread2
    });

    const messageService: MessageService = new MessageService();
    const threadsService: ThreadService = new ThreadService(messageService);

    messageService.messages.subscribe((messages: Message[])=>{
      console.log('messages len: '+messages.length)
    });


    threadsService.threads
      .subscribe((threadId: {[key: string]: Thread})=>{
        const threads: Thread[] = _.values(threadId);
        const threadNames: string = _.map(threads,(t: Thread)=>t.name).join(', ');
        console.log(`=> threads (${threads.length}): ${threadNames}`)
      });

    messageService.addMessage(msg1);
    messageService.addMessage(msg2);
    messageService.addMessage(msg3);

  })
});
