import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private http: HttpClient) { }

  getEmployeeData(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/employees');
  }

  submitEmployeeData(employeeData: any): Observable<any> {
    return this.http.post('http://localhost:3000/employees', employeeData);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/employees/${id}`);
  }

  editEmployee(employee: any): Observable<any> {
    return this.http.put(`http://localhost:3000/employees/${employee.id}`, employee);
  }
}
