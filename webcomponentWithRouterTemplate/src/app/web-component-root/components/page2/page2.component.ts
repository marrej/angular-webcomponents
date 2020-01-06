import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("Page 2 loaded");
    // this.http.post('http://localhost:8080/api/v1/esd/step3', {})
    // .pipe(
    //   tap(data => console.log(data))
    // )
    // .subscribe(() => {}, err => console.log(err))
  }



}
