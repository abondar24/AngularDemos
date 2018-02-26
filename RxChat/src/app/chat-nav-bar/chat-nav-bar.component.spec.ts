import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNavBarComponent } from './chat-nav-bar.component';
import {MessageService} from "../message/message.service";
import {ThreadService} from "../thread/thread.service";
import {UserService} from "../user/user.service";

describe('ChatNavBarComponent', () => {
  let component: ChatNavBarComponent;
  let fixture: ComponentFixture<ChatNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatNavBarComponent ],
      providers: [UserService,MessageService,ThreadService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
