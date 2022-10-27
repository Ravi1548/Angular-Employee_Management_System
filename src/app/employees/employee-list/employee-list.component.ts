import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee';
import {EmployeesService} from '../../shared/employees.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  //assign default page
  page: number = 1;
  filterString:string = '';

  constructor(public employeesService:EmployeesService) { }
 
  ngOnInit(): void {
    console.log("Welcome life cycle");

    //this.getAllEmployees();
    this.employeesService.bindGetAllEmployeesList();
    console.log(this.employeesService.employees);
    
  }
  //subscribe
  getAllEmployeesList(){

    //call service method
    console.log(this.employeesService.getAllEmployees().subscribe(
      response => {
        console.log("retrieving from list");
        console.log(response);        
      },
      (error) =>{
        console.log(error);
        
      }
    )
    );
  }

  //Update an Employee
  updateEmployee(empId:number){
    console.log(empId);
    // this.employeesService.formEmpData = 
    
  }

  //populate Employee form for edit
  populateForm(employee:Employee){
     console.log(employee);
     this.employeesService.formEmpData = Object.assign({},employee);
     
  }

  //delete Employee
  deleteEmployee(emp:Employee){
    console.log("updating a record...");
    const val = confirm("Do you want to delete this record?")
    if(val){
    emp.active = false;
    this.employeesService.updateEmployee(emp).subscribe((res:any) =>{
      console.log(res);
    },
    (err:any) =>{
      console.log(err);
    })
    window.location.reload();
  } 
}

}
