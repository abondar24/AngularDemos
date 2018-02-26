import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ChatPageComponent} from "./chat-page/chat-page.component";
import {ChatThreadComponent} from "./chat-thread/chat-thread.component";
import {ChatNavBarComponent} from "./chat-nav-bar/chat-nav-bar.component";
import {ChatWindowComponent} from "./chat-window/chat-window.component";
import {ChatThreadsComponent} from "./chat-threads/chat-threads.component";
import {ChatMessageComponent} from "./chat-message/chat-message.component";
import {FormsModule} from "@angular/forms";
import {MessageService} from "./message/message.service";
import {ThreadService} from "./thread/thread.service";
import {BrowserModule} from "@angular/platform-browser";
import {UserService} from "./user/user.service";
import {HttpClientModule} from "@angular/common/http";
import {FromNowPipe} from "./pipes/from-now.pipe";


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ChatPageComponent,
        ChatNavBarComponent,
        ChatThreadComponent,
        ChatWindowComponent,
        ChatThreadsComponent,
        ChatMessageComponent,
        FromNowPipe
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
      ],
      providers: [UserService,MessageService,ThreadService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
