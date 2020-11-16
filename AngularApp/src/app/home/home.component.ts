import { Employee } from './../employee';
import { EmpService } from './../emp.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private empService : EmpService) { }

  ngOnInit() {
    this.getEmployees();
  }
  employees : Employee;
  getEmployees(){
    this.empService.getEmployees().subscribe((res)=>{
      this.employees = res;
  });
  }

  deleteEmployee(id){
    this.empService.deleteEmployee(id)
      .subscribe(()=>{
        this.getEmployees();
      });
  }
}
