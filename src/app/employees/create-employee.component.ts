import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from './list-employees/department.model';
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department:"select",
    isActive: null

  }
  
  
  //department=3; default setting
  departments: Department[] = [
    { id: 1, name: 'ITIS' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'CSP' }
  ];

  constructor() { }

  ngOnInit() {
  }
  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }
}
