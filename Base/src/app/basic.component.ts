import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1 class="text-center"> {{greeting}} </h1>'
})
export class BasicComponent {
    greeting: string;

    constructor() {
        this.greeting = 'Hello Angular 2!';
    }

}
