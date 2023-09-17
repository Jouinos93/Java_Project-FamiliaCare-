import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Clone the request and set the Content-Type header without charset
    const modifiedReq = req.clone({
      headers: req.headers.set('Content-Type', 'application/json'),
    });

    return next.handle(modifiedReq);
  }
}
