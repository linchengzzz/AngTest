import { MissionService } from './../mission.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-astronaut',
    templateUrl: './astronaut.component.html',
    styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnInit, OnDestroy {
    @Input()
    public astronaut: string;
    public mission: string = '<no mission announced>';
    public confirmed: boolean = false;
    public announced: boolean = false;
    public subscription: Subscription;
    constructor(private missionService: MissionService) {
        this.subscription = missionService.missionAnnounced$.subscribe(
            mission => {
                this.mission = mission;
                this.announced = true;
                this.confirmed = false;
            }
        )
    }
    ngOnInit() {}
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
    public confirm(): void {
        this.confirmed = true;
        this.missionService.confirmMission(this.astronaut);
    }
}
