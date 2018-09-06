import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-hero-birthday1',
    templateUrl: './hero-birthday1.component.html',
    styleUrls: ['./hero-birthday1.component.css']
})
export class HeroBirthday1Component implements OnInit {
    // public birthday: Date = new Date;
    // private toggle: boolean = true;
    // get format() {
    //     return this.toggle ? 'shortDate' : 'fullDate';
    // }
    // constructor() { }

    ngOnInit() {
    }
    // public toggleFormat() {
    //     this.toggle = !this.toggle;
    // }
    @Input()
    public power: number = 5;
    @Input()
    public factor: number = 1;
}
