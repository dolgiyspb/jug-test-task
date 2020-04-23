import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { applicationUrls } from '../../config/urls';
import { Presentation } from '../interfaces/presentation.interface';

@Injectable()
export class PresentationsDataService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public get$(): Observable<Presentation> {
    return this.httpClient.get<Presentation>(applicationUrls.presentations);
  }
}
