import {Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class EventBusService {
    private subject = new Subject<any>();

    public on(event: Event, action: any): Subscription {
        return this.subject
            .pipe(
                filter((e: EmitEvent) => {
                        return e.event === event;
                    }
                ), map((e: EmitEvent) => {
                    return e.data;
                })
            ).subscribe(action);
    }

    public emit(event: EmitEvent) {
        this.subject.next(event);
    }

}
export class EmitEvent {
    constructor(public event: any, public data: any) {
    }
}

export enum Event {
    menu
}

