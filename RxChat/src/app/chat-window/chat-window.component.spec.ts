import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWindowComponent } from './chat-window.component';
import {ChatMessageComponent} from "../chat-message/chat-message.component";
import {FormsModule} from "@angular/forms";
import {MessageService} from "../message/message.service";
import {ThreadService} from "../thread/thread.service";
import {BrowserModule} from "@angular/platform-browser";
import {UserService} from "../user/user.service";
import {HttpClientModule} from "@angular/common/http";
import {FromNowPipe} from "../pipes/from-now.pipe";

describe('ChatWindowComponent', () => {
  let component: ChatWindowComponent;
  let fixture: ComponentFixture<ChatWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWindowComponent,
                      ChatMessageComponent,
                      FromNowPipe ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
      ],
      providers: [UserService,MessageService,ThreadService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
