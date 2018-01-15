import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';


@Injectable()
export class LogUpdateService {
  constructor(private update: SwUpdate) {
    update.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });

    update.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
}
