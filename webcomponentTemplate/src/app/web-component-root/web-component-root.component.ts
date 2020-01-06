import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-web-component-root',
  templateUrl: './web-component-root.component.html',
  styleUrls: ['./web-component-root.component.scss']
})
export class WebComponentRootComponent implements OnInit {
  @Input('jwt') jwtToken: string;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  notifyUpstream() {
    // will be a part of observable comming from store (which can be triggered from anywhere)
    this.notify.emit(true);
  }

}
