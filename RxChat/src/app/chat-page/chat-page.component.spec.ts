import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPageComponent } from './chat-page.component';
import {ChatNavBarComponent} from "../chat-nav-bar/chat-nav-bar.component";
import {ChatThreadsComponent} from "../chat-threads/chat-threads.component";
import {ChatWindowComponent} from "../chat-window/chat-window.component";
import {ChatThreadComponent} from "../chat-thread/chat-thread.component";
import {ChatMessageComponent} from "../chat-message/chat-message.component";
import {FormsModule} from "@angular/forms";
import {MessageService} from "../message/message.service";
import {ThreadService} from "../thread/thread.service";
import {BrowserModule} from "@angular/platform-browser";
import {UserService} from "../user/user.service";
import {HttpClientModule} from "@angular/common/http";
import {FromNowPipe} from "../pipes/from-now.pipe";

describe('ChatPageComponent', () => {
  let component: ChatPageComponent;
  let fixture: ComponentFixture<ChatPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPageComponent,
                      ChatNavBarComponent,
                      ChatThreadsComponent,
                      ChatWindowComponent,
                      ChatThreadComponent,
                      ChatMessageComponent,
        FromNowPipe],
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
    fixture = TestBed.createComponent(ChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
