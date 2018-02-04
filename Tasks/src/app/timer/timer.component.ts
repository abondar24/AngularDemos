import {SettingsService} from "../services/settings.service";
import {Component} from "@angular/core";

@Component({
  selector: 'tomato-timer',
  templateUrl: './timer.component.html'
})
export class TimerComponent{
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;
  buttonLabelsMap: any;

  constructor (private settingsService:SettingsService){
    this.buttonLabelsMap = settingsService.labelsMap.timer;
  }

  ngOnInit():void{
    this.resetTomato();
    setInterval(() => this.tick(), 1000);
  }

  resetTomato(): void {
    this.isPaused = true;
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'start';

  }

  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabel = 'pause';

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
      this.buttonLabel = this.isPaused ? 'resume' : 'pause';

    }

  }
}
