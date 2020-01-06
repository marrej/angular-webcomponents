import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RootQuery } from '../../state/root.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  token$: Observable<string> = null;
  constructor(private router: Router, private rootQuery: RootQuery) { }

  ngOnInit() {
    this.token$ = this.rootQuery.token$;
  }

  routeToPage2() {
    console.log('navigating to page2');
    this.router.navigate([{outlets: {webComponentWithRouter: 'page2'}}]);
  }

}
