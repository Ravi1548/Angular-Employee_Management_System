import { Department } from "./department";

export class Employee {
      empId:number = 0;
      empName:string 
      designation:string 
      doj:Date = new Date
      salary:number
      phone:number
      department:Department 
      deptId:number=0
      active:boolean
}
