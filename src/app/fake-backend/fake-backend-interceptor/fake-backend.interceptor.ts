import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FAKE_BACKEND_DATA } from './fake-backend-endpoints.token';

@Injectable({
  providedIn: 'root',
})
export class FakeBackendInterceptor implements HttpInterceptor {
  private readonly fakeEndpoints: Record<string, any>;

  constructor(@Inject(FAKE_BACKEND_DATA) fakeData: Record<string, any>[]) {
    this.fakeEndpoints = fakeData.reduce((result, data) => ({...result, ...data}), {});
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url in this.fakeEndpoints) {
      return of(new HttpResponse({
        body: this.fakeEndpoints[req.url],
        status: 200
      }));
    }

    return next.handle(req);
  }
}
