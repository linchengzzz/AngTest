import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { NodeLogger } from '@angular/core/src/view';
@Injectable({
    providedIn: 'root',
})
export class HeroService {
    constructor(
        private logger: NodeLogger,
        private isAuthorized: boolean) {}
    getHeroes(): Hero[] {
        let auth = this.isAuthorized ? 'authorized' : 'unauthorized';
        return HEROES;
    }
}
