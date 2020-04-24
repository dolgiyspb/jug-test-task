import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor } from './fake-backend-interceptor/fake-backend.interceptor';
import { FAKE_BACKEND_DATA } from './fake-backend-interceptor/fake-backend-endpoints.token';
import { presentationsMock } from './mock-data/presentations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: FAKE_BACKEND_DATA, useValue: presentationsMock, multi: true},
    {provide: HTTP_INTERCEPTORS, useExisting: FakeBackendInterceptor, multi: true},
  ]
})
export class FakeBackendModule {
}
