import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from "@angular/elements";
import { APP_BASE_HREF } from '@angular/common';
import { WebComponentRootComponent } from './web-component-root/web-component-root.component';
import { Page1Component } from './web-component-root/components/page1/page1.component';
import { Page2Component } from './web-component-root/components/page2/page2.component';
import { HttpConfigInterceptor } from './web-component-root/interceptors/http.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

/* WebComponent test version */
/*
@NgModule({
  declarations: [
    AppComponent,
    WebComponentRootComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
*/
/* WebComponent build version */

@NgModule({
  declarations: [
    AppComponent,
    WebComponentRootComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '' },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
  ],
  entryComponents: [WebComponentRootComponent]
})

export class AppModule {
  constructor(injector: Injector) {
    const appElement = createCustomElement(WebComponentRootComponent, { injector });
    customElements.define("web-component", appElement);
  }

  ngDoBootstrap() {}
}

