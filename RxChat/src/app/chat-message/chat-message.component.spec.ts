import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageComponent } from './chat-message.component';
import {FromNowPipe} from "../pipes/from-now.pipe";
import {FormsModule} from "@angular/forms";
import {MessageService} from "../message/message.service";
import {ThreadService} from "../thread/thread.service";
import {BrowserModule} from "@angular/platform-browser";
import {UserService} from "../user/user.service";
import {HttpClientModule} from "@angular/common/http";

xdescribe('ChatMessageComponent', () => {
  let component: ChatMessageComponent;
  let fixture: ComponentFixture<ChatMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMessageComponent,FromNowPipe ],
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
    fixture = TestBed.createComponent(ChatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
