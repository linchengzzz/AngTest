import { Pipe, PipeTransform } from "@angular/core";

import { Flyer } from "./hero";

@Pipe({
    name: 'flyingHeroes',
    pure: false
})
export class FlyingHeroPipe implements PipeTransform {
    transform(allHeroes: Flyer[]) {
        return allHeroes.filter(hero => hero.canFly);
    }
}