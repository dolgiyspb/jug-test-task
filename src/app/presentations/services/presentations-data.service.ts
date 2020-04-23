import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { applicationUrls } from '../../config/urls';

@Injectable({
  providedIn: 'root'
})
export class PresentationsDataService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public get$(): Observable<any> {
    return this.httpClient.get<any>(applicationUrls.presentations);
  }
}
