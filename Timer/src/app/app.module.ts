import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import {TomatoTimerComponent} from "./tomato.timer.component";

@NgModule({
  declarations: [
    AppComponent,
    TomatoTimerComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [TomatoTimerComponent]
})
export class AppModule { }
