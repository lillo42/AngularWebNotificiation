import { Injectable } from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class CheckForUpdateService {

  constructor(private update: SwUpdate) {
    interval(6 * 60 * 60).subscribe(() => update.checkForUpdate());
  }
}
