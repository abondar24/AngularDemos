import {Component} from "@angular/core";

@Component({
  selector: 'tomato-app',
  template: `
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <strong class="navbar-brand">My Pomodoro App</strong>
        </div>
      </div>
    </nav>
    <!--<pomodoro-timer-widget></pomodoro-timer-widget>-->
    <tomato-tasks></tomato-tasks>
    `
})
export default class AppComponent {}
