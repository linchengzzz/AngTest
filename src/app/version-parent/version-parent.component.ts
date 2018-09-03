import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-version-parent',
    templateUrl: './version-parent.component.html',
    styleUrls: ['./version-parent.component.css']
})
export class VersionParentComponent implements OnInit {
    public major: number = 1;
    public minor: number = 23;
    constructor() {}
    ngOnInit() {}
    public newMinor(): void {
        this.minor++;
    }
    public newMajor(): void {
        this.major++;
        this.minor = 0;
    }
}
