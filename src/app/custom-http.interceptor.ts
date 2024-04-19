import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse){
        switch(error.status) {
          case 401:
            console.log("401 status code");
            break;
            case 403:
              console.log("403 status code");
              break;
              case 404:
                console.log("404 status code");
                break;
        }
      }
      return throwError(() => error.message);

    }));
  }
}
