import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    private logs: string[] = [];
    private prevMsg: string = '';
    private prevMsgCount: number = 1;
    constructor() {}
    public log(msg: string): void {
        if (msg === this.prevMsg) {
            this.log[this.log.length - 1] =
                msg + `(${(this.prevMsgCount += 1)}x)`;
        } else {
            this.prevMsg = msg;
            this.prevMsgCount = 1;
            this.logs.push(msg);
        }
    }
    public clear(): void {
        this.logs = [];
    }
    public getLogs = (): string[] => this.logs;
}
