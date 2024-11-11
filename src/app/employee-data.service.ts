import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private http: HttpClient) { }

  getEmployeeData(): Observable<any> {
    return this.http.get<any>('https://json-8g76.onrender.com/employees');
  }

  submitEmployeeData(employeeData: any): Observable<any> {
    return this.http.post('https://json-8g76.onrender.com/employees', employeeData);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`https://json-8g76.onrender.com/employees/${id}`);
  }

  editEmployee(employee: any): Observable<any> {
    return this.http.put(`https://json-8g76.onrender.com/employees/${employee.id}`, employee);
  }
}
