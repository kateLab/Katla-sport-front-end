import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Department } from '../models/department';
import { DepartmentListItem } from '../models/department-list-item';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private url = environment.apiUrl + 'api/departments/';

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Array<DepartmentListItem>> {
    return this.http.get<Array<DepartmentListItem>>(this.url);
  }

  getDepartment(departmentId: number): Observable<Department> {
    return this.http.get<Department>(`${this.url}${departmentId}`);
  }

  getChildDepartment(parentId: number): Observable<Array<DepartmentListItem>> {
    return this.http.get<Array<DepartmentListItem>>(`${this.url}parents/${parentId}`);
  }

  addDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(`${this.url}`, department);
  }

  updateDepartment(department: Department): Observable<Object> {
    return this.http.put<Object>(`${this.url}${department.id}`, department);
  }

  deleteDepartment(departmentId: number): Observable<Object> {
    return this.http.delete<Object>(`${this.url}${departmentId}`);
  }

  setDepartmentStatus(departmentId: number, deletedStatus: boolean): Observable<Object> {
    return this.http.put<Object>(`${this.url}${departmentId}/status/${deletedStatus}`, null);
  }
}
