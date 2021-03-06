import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../message/message.model";
import {User} from "../user/user.model";
import {UserService} from "../user/user.service";

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  @Input() message: Message;
  currentUser: User;
  incoming: boolean;

  constructor(private userService: UserService) { }

  ngOnInit():void {
    this.userService.currentUser.subscribe(user=>{
        this.currentUser = user;
        if (this.message.author || user){
          this.incoming = this.message.author.id !== user.id;
        }
      });

  }

}
