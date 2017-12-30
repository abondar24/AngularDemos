import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <div class="text-center">
            <img src="../assets/img/tomato.png" alt="Tomato">
            <h1> {{ minutes }}:{{ seconds | number: '2.0' }}</h1>
            <p>
                <button (click)="togglePause()" class="btn btn-danger">
                    {{ buttonLabel }}
                </button>
            </p>
        </div>
    `
})
export class AppComponent {
  title = 'Timer App';
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;

  constructor() {
    this.resetTomato();
    setInterval(() => this.tick(), 1000);

  }


  resetTomato(): void {
    this.isPaused = true;
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'Start';

  }

  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabel = 'Pause';

      if (--this.seconds < 0) {
        this.seconds = 59;

        if (--this.minutes < 0) {
          this.resetTomato()

        }

      }

    }

  }

  togglePause(): void {
    this.isPaused = !this.isPaused;

    if (this.minutes < 24 || this.seconds < 59) {
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';

    }

  }

}
