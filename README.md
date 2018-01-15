# AngularWebNotificiation
Simple sample with Angular 5 and Web Push Notification

```
ng b --prod

cd dist
http-server -p 8080
```

To use change  *serverPublicKey* on  app-notification/src/app.component.ts

https://web-push-codelab.glitch.me

Text to send, sample:
{
  "notification": {
   "title": "Teste titulo",
   "options": {
      "actions": "",
	  "body": "",
	  "dir": "",
	  "icon" : "",
	  "lang": "",
	  "renotify": "",
	  "requireInteraction": "",
	  "tag": "",
	  "vibrate": "",
	  "data": ""
   }
  }
}