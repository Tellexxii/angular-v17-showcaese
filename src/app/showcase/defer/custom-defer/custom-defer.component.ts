import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {HeavyComponentComponent} from "../../../heavy-component/heavy-component.component";
import {Subject} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-custom-defer',
    standalone: true,
    imports: [
        HeavyComponentComponent,
        AsyncPipe,
        MatButton
    ],
    templateUrl: './custom-defer.component.html',
    styleUrl: './custom-defer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomDeferComponent {
    trigger$ = signal(false)
}
