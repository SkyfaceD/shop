import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../model/card';

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) {

  }

  public getData(): Observable<Card[]> {
    return this.http.get<Card[]>("http://127.0.0.1:8080/")
  }
}