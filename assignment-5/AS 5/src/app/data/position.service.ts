import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Position } from './position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private url = "https://murmuring-tor-86528.herokuapp.com";

  constructor(private httpClient: HttpClient) { }

  getPositions(): Observable<Position[]> {
    return this.httpClient.get<Position[]>(`${this.url}/positions`)
  }
}
