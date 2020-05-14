import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {CustomerStoreService} from './core/services/customer-store.service';
import {Observable} from 'rxjs';
import {Customer} from './core/models/customer';
import {Transaction} from './core/models/transaction';
import {TransactionStoreService} from './core/services/transaction-store.service';
import {ProductConfiguration} from './core/models/product-configuration';
import {EventBusService} from './core/services/event-bus.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    initForm: FormGroup;
    customerStore: Observable<Customer>;
    transactionList$: Observable<Transaction[]>;

    elephantProductConfig: ProductConfiguration;
    tigerProductConfig: ProductConfiguration;
    parrotProductConfig: ProductConfiguration;
    dogProductConfig: ProductConfiguration;
    catProductConfig: ProductConfiguration;

    constructor(private customerStoreService: CustomerStoreService,
                private transactionStoreService: TransactionStoreService,
                private eventBusService: EventBusService) {
        this.customerStore = this.customerStoreService.customer$;
        this.transactionList$ = this.transactionStoreService.transations$;
    }

    ngOnInit() {
        this.initForm = new FormGroup({
            name: new FormControl('', Validators.required),
            amount: new FormControl('',  Validators.required)
        });
        this.init();
    }

    saveUserData() {
        this.customerStoreService.setCustomer(this.initForm.get('name').value,
            this.initForm.get('amount').value);
    }

    pushTransaction(event: Transaction) {
        this.transactionStoreService.pushTransaction(event.product, event.amount);
        this.customerStoreService.setAmount(event.amount);
    }

    init() {
        this.elephantProductConfig = {lang: 'es', color: 'blue', product: 'Elephant', price: 70};
        this.tigerProductConfig = {lang: 'es', color: 'orange', product: 'Tiger', price: 120};
        this.parrotProductConfig = {lang: 'es', color: 'red', product: 'Parrot', price: 55};
        this.dogProductConfig = {lang: 'es', color: 'brown', product: 'Dog', price: 10};
        this.catProductConfig = {lang: 'es', color: 'gray', product: 'Cat', price: 12};
        window.bus = this.eventBusService;
    }

}
