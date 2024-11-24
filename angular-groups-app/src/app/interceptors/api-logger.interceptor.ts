import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ApiLoggerInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`API Request - Method: ${req.method}, URL: ${req.urlWithParams}`, req);

    return next.handle(req).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            console.log(`API Response - Status: ${event.status}, URL: ${req.urlWithParams}`, event);
          }
        },
        error: (error: HttpErrorResponse) => {
          console.error(`API Error - Status: ${error.status}, URL: ${req.urlWithParams}`, error);
        }
      })
    );
  }
}