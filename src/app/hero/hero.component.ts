import { Component, OnInit } from '@angular/core';
import { HeroService } from "../hero.service";
@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css'],
    providers: [ HeroService ],
})
export class HeroComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
