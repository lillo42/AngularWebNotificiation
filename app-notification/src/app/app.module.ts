import { LogUpdateService } from './service/log-update.service';
import { CheckForUpdateService } from './service/check-for-update.service';
import { PromptUpdateService } from './service/prompt-update.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: true })
  ],
  providers: [
    CheckForUpdateService,
    LogUpdateService,
    PromptUpdateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
