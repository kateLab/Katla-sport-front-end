import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeListItem } from '../models/employee-list-item';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = environment.apiUrl + 'api/employees/';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Array<EmployeeListItem>> {
    return this.http.get<Array<EmployeeListItem>>(this.url);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}${id}`);
  }

  setEmployeeStatus(id: number, deletedStatus: boolean): Observable<Object> {
    return this.http.put<Object>(`${this.url}${id}/status/${deletedStatus}`, null);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.url}`, employee);
  }

  updateEmployee(employee: Employee): Observable<Object> {
    return this.http.put<Object>(`${this.url}${employee.id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.url}${id}`);
  }
}
