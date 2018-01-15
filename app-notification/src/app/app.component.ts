import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isSubscribed = false;
  public subscriptionJson  = '';
  public btnMensagem = 'Enable Push Messaging';
  constructor(private pushNotify: SwPush) {
    pushNotify.messages.subscribe(event => {
      console.log('pushNotify.messages.subscribe');
      console.log(event);
    });
  }

  private subscribeUser(): void {
    console.log(this.pushNotify);
    console.log(this.pushNotify.isEnabled);
    console.log(this.pushNotify.subscription);
    this.pushNotify.requestSubscription({
      serverPublicKey: 'BAyUSEMEUHRrgCqqnmP9tS1Nt2pHlRJPFIw-WoscUwECXS6eu04oPbshzIujJREL21VHbu6lb5v31-KgYN3oB-A'
    }).then(subscription => {
      console.log('User is subscribed.');

      if (subscription) {
        this.subscriptionJson = JSON.stringify(subscription);
      } else {
        this.subscriptionJson = '';
      }

      console.log(this.subscriptionJson);

      this.isSubscribed = true;
      this.updateUi();
    }).catch(error => {
      console.log('Failed to subscribe the user: ', error);
      this.updateUi();
    });
  }

  private updateUi(): void {
    Notification.requestPermission().then(notification => {
      if (notification === 'denied') {
        this.subscriptionJson = '';
        this.btnMensagem = 'Push Messaging Blocked.';
        return;
      }

      if (this.isSubscribed) {
        this.btnMensagem = 'Disable Push Messaging';
      } else {
        this.btnMensagem = 'Enable Push Messaging';
      }
    });
  }

  private unsubscribeUser(): void {
    if (this.pushNotify.isEnabled) {
      this.pushNotify.unsubscribe().then(() => {
        this.subscriptionJson = '';
        this.isSubscribed = false;
      });
    }
  }

  public updateSubscription(): void {
    console.log('updateSubscription()');
    if (this.isSubscribed) {
      this.unsubscribeUser();
    } else {
      this.subscribeUser();
    }
  }

}
