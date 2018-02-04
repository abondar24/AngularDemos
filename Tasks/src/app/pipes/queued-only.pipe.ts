import {Pipe, PipeTransform} from "@angular/core";
import Queueable from "../interfaces/queueable";

@Pipe({
  name: 'tomatoQueuedOnly',
  pure: false
})
export class QueuedOnlyPipe implements PipeTransform {
  transform(queueableItems: Queueable[], ...args: any[]): Queueable[] {
    return queueableItems.filter((queueableItem: Queueable) => {
      return queueableItem.queued === args[0];
    });
  }
}
