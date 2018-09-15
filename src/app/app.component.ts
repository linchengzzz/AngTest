import { Component, OnInit } from '@angular/core';
import { interval, fromEvent } from 'rxjs';

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
export class AppComponent implements OnInit {
    constructor() {
        // this.secondsCounter.subscribe(n => console.log(`${n}`));
    }
    ngOnInit() {
        const el = document.getElementById('my-element');
        console.log(el);
        const mouseMoves = fromEvent(el, 'mousemove');
        const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
            console.log(`${evt.clientX} X ${evt.clientY}`);
            if (evt.clientX < 40 && evt.clientY < 40) {
                subscription.unsubscribe();
            }
        });
    }
}
