import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-countdown-timer',
    templateUrl: './countdown-timer.component.html',
    styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
    public intervalId: number = 0;
    public message: string = '';
    public seconds: number = 11;
    constructor() {}
    ngOnInit() {
        this.start();
    }
    ngOnDestroy() {
        this.clearTimer();
    }
    private clearTimer() {
        clearInterval(this.intervalId);
    }
    private countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if(this.seconds === 0) {
                this.message = 'Blast off!';
            } else {
                if(this.seconds < 0) {
                    this.seconds = 10; // reset
                }
                this.message = `T-${this.seconds} seconds and counting`;
            }
        }, 1000);
    }
    public start() {
        this.countDown();
    }
    public stop() {
        this.clearTimer();
        this.message = `Holding at T-${this.seconds} seconds`;
    }
}
