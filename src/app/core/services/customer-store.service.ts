import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {Customer} from '../models/customer';



@Injectable({
    providedIn: 'root'
})
export class CustomerStoreService {

    private customerSubject = new BehaviorSubject<Customer>(null);
    public customer$ = this.customerSubject.asObservable();

    constructor() {
    }

    setCustomer(name: string, amount: number) {
        this.customerSubject.next({name, amount});
    }

    setAmount(amount: number) {
        const newAmount = this.customerSubject.value.amount ? this.customerSubject.value.amount - amount : amount;
        this.setCustomer(this.customerSubject.value.name, newAmount );
    }


}
