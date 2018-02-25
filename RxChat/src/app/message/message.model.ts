import {Thread} from "../thread/thread.model";
import {uuid} from "../util/uuid.util";
import {User} from "../user/user.model";

export class Message{
id: string;
sentAt: Date;
isRead: boolean;
author: User;
thread: Thread;
text: string;


  constructor(obj?: any){

  this.id = obj && obj.id || uuid();
  this.sentAt = obj && obj.sentAt || new Date();
  this.isRead = obj && obj.isRead || false;
  this.author = obj && obj.author || null;
  this.thread = obj && obj.thread || null;
  this.text = obj && obj.text || null;
  }
}
