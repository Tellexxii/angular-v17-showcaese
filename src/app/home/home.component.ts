import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {Showcase} from "../models/showcase";
import {SHOWCASE_PROVIDER_TOKEN} from "../providers/showcase.provider";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {NgFor} from "@angular/common";

@Component({
    selector: 'app-home',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatGridList,
        MatGridTile,
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardTitle,
        MatCardFooter,
        MatButton,
        RouterLink,
        NgFor
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

    showcases!: Showcase[];

    constructor() {
        this.showcases = inject(SHOWCASE_PROVIDER_TOKEN);
    }
}
