import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MissionService {
    private missionAnnouncedSource = new Subject<string>();
    private missionConfirmedSource = new Subject<string>();
    public missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    public missionConfirmed$ = this.missionConfirmedSource.asObservable();
    constructor() {}
    public announceMission(mission: string) {
        this.missionAnnouncedSource.next(mission);
    }
    public confirmMission(astronaut: string) {
        this.missionConfirmedSource.next(astronaut);
    }
}
