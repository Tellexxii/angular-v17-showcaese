import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MemoizationComponent} from "./showcase/memoization/memoization.component";
import {TimedDeferComponent} from "./showcase/defer/timed-defer/timed-defer.component";
import {CustomDeferComponent} from "./showcase/defer/custom-defer/custom-defer.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'memoization',
        loadComponent: () => import('./showcase/memoization/memoization.component').then(c => c.MemoizationComponent)
    },
    {
        path: 'timed-defer',
        component: TimedDeferComponent
    },
    {
        path: 'custom-defer',
        component: CustomDeferComponent
    },
    {
        path: '**',
        redirectTo: '',
    },
];
