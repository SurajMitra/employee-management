import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrl: './landing-page-component.component.css'
})
export class LandingPageComponentComponent implements OnInit{

  employees: any[] = [];
  addEmployee: boolean = false;
  employeeData = {};
  filteredEmployees: any[] = [];
  searchTerm: string = '';

  constructor(private employeeService : EmployeeDataService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.employeeService.getEmployeeData(). subscribe(data => {
      this.employees = data; 
      this.filteredEmployees = this.employees;
    })
    
  }

  ngOnChanges() {
    this.filterEmployees();
  }

  filterEmployees() {
    if (this.searchTerm) {
      console.log(this.searchTerm)
      this.filteredEmployees = this.employees.filter(employee => {
        return (
          employee.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          employee.email.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    } else {
      this.filteredEmployees = this.employees;
    }
  }

  onSearchChange(): void {
    this.filterEmployees();
  }

  onEditClick(employees: any){
    console.log(employees)
    this.addEmployee = true;
    this.employeeData = employees;
  }

  onDeleteClick(employee: any): void {
    const confirmed = confirm(`Are you sure you want to delete ${employee.name}?`);

    if (confirmed) {
      this.employeeService.deleteEmployee(employee.id).subscribe(
        (response) => {
          this.employees = this.employees.filter(emp => emp.id !== employee.id);
          this.ngOnInit();
        }
      );
    }
    }

    onSave(employeeData: any) {
      console.log("Employee Data Saved:", employeeData);
      this.ngOnInit();
      this.addEmployee = false;
    }
  
    
    onCancel() {
      this.addEmployee = false;  
    }
  }
