import { Component, OnInit } from '@angular/core';

import { Observable, interval } from "rxjs";
import { map, take } from "rxjs/operators";

@Component({
    selector: 'app-hero-async-message',
    templateUrl: './hero-async-message.component.html',
    styleUrls: ['./hero-async-message.component.css']
})
export class HeroAsyncMessageComponent implements OnInit {
    private messages = [
        'you are my hero',
        'you are the best hero',
        'will you be my hero?'
    ]
    public message$: Observable<string>;
    constructor() {
        this.resend();
    }
    ngOnInit() {}
    public resend(): void {
        this.message$ = interval(500).pipe(
            map(i => this.messages[i]),
            take(this.messages.length)
        )
    }
}
