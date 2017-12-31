import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {TomatoTimerComponent} from "./tomato.timer.controller";

@NgModule({
  declarations: [
    AppComponent,
    TomatoTimerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TomatoTimerComponent]
})
export class AppModule { }
