import { Component } from '@angular/core';

class Hero {
    id: number;
    name: string;
    emotion: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

})
export class AppComponent {
    public clickMessage: string = '';
    public model: any = {
        name: "",
        id: 10,
        power : '111',
        alterEgo: '222',
    }
    constructor() {
    }
    public onClickMe(): void {
        this.clickMessage = 'You are click Me';
        console.log(this.clickMessage);
    }
    public onKey(value: string): void {
        this.clickMessage = value;
    }
}
