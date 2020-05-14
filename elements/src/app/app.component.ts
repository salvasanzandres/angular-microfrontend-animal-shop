import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

import {Configuration} from './core/models/configuration';
import {Transaction} from './core/models/transaction';
import {EventBusService, Event} from './core/services/event-bus.service';


@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  private _configuration: Configuration;
  @Input() set configuration(value: any) {
    this._configuration = JSON.parse(value);
  }

  get configuration() {
    return this._configuration;
  }

  @Output() newTransaction = new EventEmitter<Transaction>();

  private bus: EventBusService;
  public messageList: string[] = []


  ngOnInit() {
    this.bus = window.bus;
    this.bus.on(Event.hello, value => {
      if (value.animal !== this.configuration.product) {
        this.messageList.push(value.animal + ' said HI');
      }
    });
  }


  buyProduct() {
    this.newTransaction.emit({product: this.configuration.product, amount: this.configuration.price});
    this.messageList.push('bought 1 ' + this.configuration.product);
  }

  sayHi() {
    this.bus.emit({
      event: Event.hello,
      data: {animal: this.configuration.product, text: 'hello'}
    });
  }
}
