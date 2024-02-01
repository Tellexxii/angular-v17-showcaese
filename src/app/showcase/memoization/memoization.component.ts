import {Component, computed, effect, signal} from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-laziness',
    standalone: true,
    imports: [
        MatButton
    ],
    templateUrl: './memoization.component.html',
    styleUrl: './memoization.component.scss'
})
export class MemoizationComponent {
    counter = signal(0);

    isEven = computed(() => {
        console.log('[computed] isEven');
        return this.counter() % 2 === 0;
    });

    constructor() {
        effect(() => {
            console.log('[effect] isEven', this.isEven());
        });
    }

    increment(amount = 1) {
        this.counter.update((current) => current + amount);
    }

    reset() {
        this.counter.set(0);
    }
}
