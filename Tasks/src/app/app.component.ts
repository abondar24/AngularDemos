import {Component} from "@angular/core";

@Component({
  selector: 'tomato-app',
  template: `
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <strong class="navbar-brand">Tomatto Tasks App</strong>
        </div>
      </div>
    </nav>
    <tomato-timer></tomato-timer>
    <tomato-tasks></tomato-tasks>
    `
})
export default class AppComponent {}
