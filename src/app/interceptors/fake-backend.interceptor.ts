import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { applicationUrls } from '../config/urls';

const fakeEndpoints = {
  [applicationUrls.presentations]: {test: 1}
};

@Injectable({
  providedIn: 'root',
})
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url in fakeEndpoints) {
      return of(new HttpResponse({
        body: fakeEndpoints[req.url],
        status: 200
      }));
    }

    return next.handle(req);
  }
}
