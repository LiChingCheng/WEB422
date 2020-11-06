import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { EmployeeRaw } from './employee-raw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "https://murmuring-tor-86528.herokuapp.com";

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {   
    return this.httpClient.get<Employee[]>(`${this.url}/employees`)
  }
  saveEmployee(employee: EmployeeRaw): Observable<any> {
    return this.httpClient.put<any>(`${this.url}/employee/${employee._id}`, employee);
  }
  getEmployee(id): Observable<EmployeeRaw[]> {
    return this.httpClient.get<EmployeeRaw[]>(`${this.url}/employee-raw/${id}`);
  }
}
