import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BasicComponent} from './basic.component';


@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BasicComponent]
})
export class AppModule { }
