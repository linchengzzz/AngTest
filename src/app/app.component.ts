import { Component } from '@angular/core';

class Hero {
    id: number;
    name: string;
    emotion: string;
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public hero: Hero = {
        id: 5,
        name: 'zcl',
        emotion: 'sad',
    };
    public heros: Hero[] = [
        {
            id: 1,
            name: 'zzz',
            emotion: 'sad',
        },
        {
            id: 2,
            name: 'ccc',
            emotion: 'happy',
        },
        {
            id: 3,
            name: 'lll',
            emotion: 'sad',
        }
    ];
}
