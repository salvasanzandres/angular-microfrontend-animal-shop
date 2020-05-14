import {
    AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output
} from '@angular/core';


import {Transaction} from '../core/models/transaction';
import {ProductConfiguration} from '../core/models/product-configuration';
import {EventBusService} from '../core/services/event-bus.service';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
    selector: 'app-wrap-web-component',
    templateUrl: './wrap-web-component.component.html',
    styleUrls: ['./wrap-web-component.component.scss']
})
export class WrapWebComponentComponent implements AfterViewInit, OnInit {

    @Input() configuration: ProductConfiguration;
    @Input() owner: string;
    @Output() newTransaction = new EventEmitter<Transaction>();
    @ContentChild('contentRef') contentRef: ElementRef;

    constructor(private eventBusService: EventBusService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.contentRef.nativeElement.setAttribute('owner', this.owner);
        this.contentRef.nativeElement.setAttribute('configuration', JSON.stringify(this.configuration));


        this.contentRef.nativeElement.addEventListener('newTransaction', response => {
            this.newTransaction.emit(response.detail);
        });
    }

}
