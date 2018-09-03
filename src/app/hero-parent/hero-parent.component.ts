import { HEROES, Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero-parent',
    templateUrl: './hero-parent.component.html',
    styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {
    public heroes: Hero[] = HEROES;
    public master: string = 'Master';
    constructor() {}

    ngOnInit() {}
}
