import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatThreadComponent } from './chat-thread.component';
import {MessageService} from "../message/message.service";
import {ThreadService} from "../thread/thread.service";
import {UserService} from "../user/user.service";

describe('ChatThreadComponent', () => {
  let component: ChatThreadComponent;
  let fixture: ComponentFixture<ChatThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatThreadComponent ],
      providers: [UserService,MessageService,ThreadService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
