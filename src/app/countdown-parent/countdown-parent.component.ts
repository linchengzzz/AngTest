import { CountdownTimerComponent } from './../countdown-timer/countdown-timer.component';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-countdown-parent',
    templateUrl: './countdown-parent.component.html',
    styleUrls: ['./countdown-parent.component.css']
})
export class CountdownParentComponent implements OnInit, AfterViewInit {
    @ViewChild(CountdownTimerComponent)
    private timerComponent: CountdownTimerComponent;
    constructor() {}
    ngOnInit() {}
    ngAfterViewInit() {
        // setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
        setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    }
    public seconds(): number {
        return 0;
    }
    public start() {
        this.timerComponent.start();
    }
    public stop() {
        this.timerComponent.stop();
    }
}
