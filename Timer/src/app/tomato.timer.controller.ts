import {Component} from "@angular/core";

@Component({
  selector: "tomato-timer",
  templateUrl: './tomato-timer.html'
})
export class TomatoTimerComponent {
  onCountdownCompleted(): void{
    alert('Time UP!');
  }
}
