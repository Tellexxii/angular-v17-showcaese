import {ChangeDetectionStrategy, Component} from '@angular/core';
import {interval, map, take, timer} from "rxjs";
import {HeavyComponentComponent} from "../../../heavy-component/heavy-component.component";
import {AsyncPipe} from "@angular/common";

@Component({
    selector: 'app-timed-defer',
    standalone: true,
    imports: [
        HeavyComponentComponent,
        AsyncPipe
    ],
    templateUrl: './timed-defer.component.html',
    styleUrl: './timed-defer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimedDeferComponent {
    timer$ = interval(1000).pipe(
        map((num) => 5 - (++num)),
        take(5)
    )

    constructor() {
        // this.timer$.subscribe(console.log)
    }
}
