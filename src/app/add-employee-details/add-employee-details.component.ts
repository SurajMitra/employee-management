import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-add-employee-details',
  templateUrl: './add-employee-details.component.html',
  styleUrl: './add-employee-details.component.css'
})
export class AddEmployeeDetailsComponent implements OnChanges{

  @Input() employeeData: any = {};

  @Output() saveEvent = new EventEmitter<any>();   
  @Output() cancelEvent = new EventEmitter<void>()

  name: string = '';
  email: string = '';
  companyName: string = '';
  contact: string = '';
  designation: string = '';
  ngOnInit(): void {
  
  }

  constructor(private employeeService : EmployeeDataService){
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log("29", this.employeeData)
    if(this.employeeData){
      this.name = this.employeeData.name;
      this.email = this.employeeData.email;
      this.companyName = this.employeeData.companyName;
      this.contact = this.employeeData.contact;
      this.designation = this.employeeData.designation;
    }
  }


  addNewEmployee(){
    console.log(this.employeeData)
    if(this.employeeData && Object.keys(this.employeeData).length > 0){
      console.log(this.employeeData, this.designation)
    const employeeData = {
      id: this.employeeData.id,
      name: this.name,
      email: this.email,
      companyName: this.companyName,
      contact: this.contact,
      designation: this.designation
    };

    this.employeeService.editEmployee(employeeData).subscribe(
      (response) => {
        alert('Employee data updated successfully!');
        this.saveEvent.emit(response);
          this.removeAll();
      }
    );
  } else{

    if (this.name && this.email && this.companyName && this.contact && this.designation && this.contact) {
      console.log('Form Submitted:', { name: this.name, email: this.email, companyName: this.companyName, contact: this.contact, designation: this.designation });

      const employeeData = {
        name: this.name,
        email: this.email,
        companyName: this.companyName,
        contact: this.contact,
        designation: this.designation
      };

      this.employeeService.submitEmployeeData(employeeData).subscribe(
        (response) => {
          alert('Employee data submitted successfully!');
          this.saveEvent.emit(employeeData);
          this.removeAll();
        }
      );
    } 
  }
  }

  removeAll(){
    this.name = '';
    this.email = '';
    this.companyName = '';
    this.designation = '';
    this.contact = '';
    this.employeeData = {};
    this.cancelEvent.emit();
  }
}
