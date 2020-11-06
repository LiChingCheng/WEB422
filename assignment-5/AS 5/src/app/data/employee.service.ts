import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "https://murmuring-tor-86528.herokuapp.com";

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {   
    return this.httpClient.get<Employee[]>(`${this.url}/employees`)
  }
}
