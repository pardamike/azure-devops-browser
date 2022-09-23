import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dummyUser = "";
    const modifiedReq = req.clone({ 
      headers: req.headers.set('Authorization', `Basic ${window.btoa(dummyUser + ":" + environment.pat)}`),
    });
    return next.handle(modifiedReq);
  }
}