import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: /*html*/`
        <div>
            <app-hero-parent></app-hero-parent>
            <app-name-parent></app-name-parent>
            <app-version-parent></app-version-parent>
            <app-countdown-parent></app-countdown-parent>
            <app-mission-control></app-mission-control>
        </div>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
}
