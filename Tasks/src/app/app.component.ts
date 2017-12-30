import { Component } from '@angular/core';
import {SHARED_PROVIDERS} from "./shared/shared"

@Component({
  selector: 'app-root',

  providers: [SHARED_PROVIDERS],
  template: `
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <strong class="navbar-brand">Tomato App</strong>
                </div>
            </div>
        </nav>
        <tomato-timer-widget></tomato-timer-widget>
        <tomato-tasks></tomato-tasks>`
})
export class AppComponent {
  title = 'app';
}
