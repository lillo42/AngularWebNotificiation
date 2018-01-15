import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class PromptUpdateService {

  constructor(private update: SwUpdate) {
    update.available.subscribe(event => {
      // if(promptUser(event)) {
        update.activateUpdate().then(() => document.location.reload());
      // }
    });
  }
}
