import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable, throwError } from 'rxjs';
  import { catchError, map } from 'rxjs/operators';
import { RootQuery } from '../state/root.query';
  
  @Injectable({
    providedIn: 'root',
  })
  export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private rootQuery: RootQuery) {}
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const accessToken = this.rootQuery.getToken();
      if (accessToken) {
        request = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
        });
      }
      if (!request.headers.has('Content-Type')) {
        request = request.clone({
          headers: request.headers.set('Content-Type', 'application/json'),
        });
      }
      if (!request.headers.has('Accept')) {
        request = request.clone({
          headers: request.headers.set('Accept', 'application/json;utf-8'),
        });
      }
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
          }
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          let data = {};
          data = {
            reason: error && error.error.reason ? error.error.reason : '',
            status: error.status,
          };
          console.error('Error: ', data);
          return throwError(error);
        }),
      );
    }
  }
  