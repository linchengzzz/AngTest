import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChange
} from '@angular/core';

@Component({
    selector: 'app-version-child',
    templateUrl: './version-child.component.html',
    styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnInit, OnChanges {
    @Input()
    public major: number;
    @Input()
    public minor: number;
    public changeLog: string[] = [];
    constructor() {}

    ngOnInit() {}
    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        const log: string[] = [];
        for(const propName in changes) {
            const changedProp = changes[propName];
            const to = JSON.stringify(changedProp.currentValue);
            if(changedProp.isFirstChange()) {
                log.push(`Initial value of ${propName} set to ${to}`);
            } else {
                const from = JSON.stringify(changedProp.previousValue);
                log.push(`${propName} changed from ${from} to ${to}`);
            }
        }
        this.changeLog.push(log.join(', '));
    }
}
