import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {Transaction} from '../models/transaction';

@Injectable({
    providedIn: 'root'
})
export class TransactionStoreService {
    private transactionsSubject = new BehaviorSubject<Transaction[]>([]);
    public transations$ = this.transactionsSubject.asObservable();

    constructor() {
    }

    pushTransaction(product: string, amount: number) {
        this.transactionsSubject.next([...this.transactionsSubject.value, {product, amount}]);
    }
}
