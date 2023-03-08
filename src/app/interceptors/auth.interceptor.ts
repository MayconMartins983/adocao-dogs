import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const tokenfake = localStorage.getItem('token');
      
    if (tokenfake) {
      return next.handle(request.clone({
        headers: request.headers.set('Authorization', `Bearer  ${tokenfake}`),
      }))
    }
    return next.handle(request);
  }
}
