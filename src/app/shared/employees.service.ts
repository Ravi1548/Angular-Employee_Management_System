import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  //global variabbles
  formEmpData: Employee = new Employee();

  //list of Employees
  employees:Employee[];
  departments: Department[];

  constructor( private httpClient: HttpClient ) { }

  //1 get all employees
  getAllEmployees():Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/employee');
  }

  // 2 retrrieve all emplopyees for binding
  bindGetAllEmployeesList(){
    this.httpClient.get(environment.apiUrl + '/api/employee')
    .toPromise()
    .then(
      (response) =>{
        console.log(response);
        this.employees = response as Employee[]
        
      },
    );
  }

  //3 retrieve all department
  bindGetAllDepartments(){
    this.httpClient.get(environment.apiUrl + "/api/department")
    .toPromise()
    .then(
      (data) =>{
        console.log(data);
        this.departments = data as Department[]
        
      }
    )
  }

  //4 Insert
  insertEmployee(employee:Employee): Observable<any>{
    return this.httpClient.post(environment.apiUrl + "/api/employee",employee);
  }

  
   //5 Update
   updateEmployee(employee:Employee): Observable<any>{
    return this.httpClient.put(environment.apiUrl + "/api/employee",employee);
  }

  //6 delete
  deleteEmployee(empId:any): Observable<any>{
    return this.httpClient.put(environment.apiUrl + "/api/delete/empId", empId);
  }

}









