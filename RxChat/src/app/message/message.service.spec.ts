import {User} from "../user/user.model";
import {Thread} from "../thread/thread.model";
import {Message} from "./message.model";
import {MessageService} from "./message.service";

describe('MessageService',()=>{
  it('should test',()=>{
    const user: User = new User('Peter','');
    const thread: Thread = new Thread('t1','Peter','');
    const msg1: Message = new Message({
      author: user,
      text: 'Hi!',
      thread: thread
    });

    const msg2: Message = new Message({
      author: user,
      text: 'Hiiiiiii!',
      thread: thread
    });

    const messageService: MessageService = new MessageService();

    messageService.messages.subscribe((messages: Message[])=>{
      console.log('messages len: '+messages.length)
    });

    messageService.addMessage(msg1);
    messageService.addMessage(msg2);
  })
});
