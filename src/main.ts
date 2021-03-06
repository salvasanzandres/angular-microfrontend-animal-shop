import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import {EventBusService} from './app/core/services/event-bus.service';
import { AppModule } from './app/app.module';

declare global {
    interface Window { bus: EventBusService; }
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
