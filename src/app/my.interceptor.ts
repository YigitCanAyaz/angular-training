import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('HTTP Interceptor tetiklendi...');

    const newRequest = request.clone({
      setHeaders: {
        "Authorization": "Bearer dsdskdskdsks"
      },
      body: {
        a: 'b'
      }
    })
    
    return next.handle(newRequest);
  }
}
