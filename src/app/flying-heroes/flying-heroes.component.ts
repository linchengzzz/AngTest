import { Component, OnInit } from '@angular/core';

const HEROES = [
    {
        name: 'zzz',
        canFly: true,
    },
    {
        name: 'ccc',
        canFly: true,
    },
    {
        name: 'lll',
        canFly: false,
    }
]

@Component({
    selector: 'app-flying-heroes',
    templateUrl: './flying-heroes.component.html',
    styleUrls: ['./flying-heroes.component.css']
})
export class FlyingHeroesComponent implements OnInit {
    public heroes: any[] = [];
    public canFly: boolean = true;
    constructor() {}
    ngOnInit() {}
    public addHero(name: string): void {
        name = name.trim();
        if(!name) return;
        const hero = { name, canFly : this.canFly };
        this.heroes.push(hero);
        console.log(this.heroes);
    }
    public reset(): void {
        this.heroes = HEROES.slice();
        // this.heroes = [];
    }
}
