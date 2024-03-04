import {InjectionToken} from "@angular/core";
import {Showcase} from "../models/showcase";

export const SHOWCASE_PROVIDER_TOKEN = new InjectionToken<Showcase[]>('', {
    factory: () => {
        return [
            {
                name: 'Мемоизация',
                description: 'Мемоизация в computed и effect',
                route: 'memoization'
            },
            {
                name: '@defer timer',
                description: 'Defer по времени',
                route: 'timed-defer'
            },
            {
                name: '@defer when',
                description: 'Defer по кастомному условию',
                route: 'custom-defer'
            },
            {
                name: 'TODO',
                description: 'TODO',
                route: 'todo'
            }
        ]
    }
})
