import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatThreadsComponent } from './chat-threads.component';
import {ChatThreadComponent} from "../chat-thread/chat-thread.component";
import {MessageService} from "../message/message.service";
import {ThreadService} from "../thread/thread.service";
import {UserService} from "../user/user.service";

describe('ChatThreadsComponent', () => {
  let component: ChatThreadsComponent;
  let fixture: ComponentFixture<ChatThreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatThreadsComponent,
      ChatThreadComponent],
      providers: [UserService,MessageService,ThreadService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
