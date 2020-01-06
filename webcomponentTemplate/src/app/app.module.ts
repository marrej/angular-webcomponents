import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from "@angular/elements";
import { APP_BASE_HREF } from '@angular/common';
import { WebComponentRootComponent } from './web-component-root/web-component-root.component';

/* WebComponent test version */

@NgModule({
  declarations: [
    AppComponent,
    WebComponentRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

/* WebComponent build version */
/*
@NgModule({
  declarations: [
    AppComponent,
    WebComponentRootComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  entryComponents: [WebComponentRootComponent]
})

export class AppModule {
  constructor(injector: Injector) {
    const appElement = createCustomElement(WebComponentRootComponent, { injector });
    customElements.define("web-component", appElement);
  }

  ngDoBootstrap() {}
}
*/
