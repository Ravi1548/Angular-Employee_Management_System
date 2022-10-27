import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeesService } from 'src/app/shared/employees.service';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.scss']
})
export class EmployeeEntryComponent implements OnInit {

  constructor(public employeesService:EmployeesService,private toastr: ToastrService) { }

  ngOnInit(): void {
    //getall department for dropdwon list
     this.employeesService.bindGetAllDepartments()
     const checkb = document.getElementById("isActive") as HTMLInputElement;
     console.log(checkb?.checked);
  }


    //submit
    onSubmit(form:NgForm){
      console.log(form.value);
      //Insert = 0 or Update >=1
      let insertId = this.employeesService.formEmpData.empId;

      //checking for Insert or Update
      if(insertId ==0 || insertId ==null){ 
        //insert
        this.insertEmployeeRecord(form);
      }else{
        //update
        this.updateEmployeeRecord(form)
      }
      
    }

    //Insert method
    insertEmployeeRecord(form?:NgForm){
      console.log("Inserting a record");
      console.log(form.value);
      
      this.employeesService.insertEmployee(form.value).subscribe(
        (result) =>{
          console.log(result);
          this.toastr.success("user record has been inserted","Inserted Successfully")
          window.location.reload();
          
        }
      )
      
    }


    //update method
     updateEmployeeRecord(form?:NgForm){
      console.log("Updating a record");
      console.log(form.value);
      
      this.employeesService.updateEmployee(form.value).subscribe(
        (result) =>{
          console.log(result);
          this.toastr.success("user record has been Updated","Updated Successfully")
          window.location.reload();
          
        }
      )
      
    }

    //delete method
    deleteEmployeeRecord(form?:NgForm){
      console.log("delete a record");
      console.log(form.value);
      
      this.employeesService.deleteEmployee(form.value).subscribe(
        (result) =>{
          console.log(result);
          this.toastr.success("user record has been deleted","deleted Successfully")
          window.location.reload();
          
        }
      )
      
    }

 

}
