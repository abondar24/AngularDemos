import {Thread} from "../thread/thread.model";
import {User} from "../user/user.model";

export interface Message{
id?: string;
sentAt?: Date;
isRead?: boolean;
author: User;
thread?: Thread;
text: string;
}
