import { Component, Input, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  ngOnInit() {
  }

  eventNotificationStub(notified: boolean) {
    console.log(`Notification has been sent: ${notified}`);
  }

  
}
