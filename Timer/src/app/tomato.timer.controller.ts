import {Component} from "@angular/core";
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "tomato-timer",
  templateUrl: './tomato-timer.html'
})
export class TomatoTimerComponent {
  onCountdownCompleted(): void{
    alert('Time UP!');
  }
}
