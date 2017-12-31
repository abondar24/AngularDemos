import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'tomatoFormattedTime'
})
export class FormattedTimePipe implements PipeTransform {
    transform(totalMinutes: number): string {
        let minutes: number = totalMinutes % 60;
        let hours: number = Math.floor(totalMinutes / 60);
        return `${hours}h:${minutes}m`;
    }
}
