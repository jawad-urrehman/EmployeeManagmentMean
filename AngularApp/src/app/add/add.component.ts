import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service'
import { Employee } from '../employee'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public empService : EmpService,
    public route:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
  }
  emploe = new Employee();

  addEmployee(){
    this.empService.addEmployee(this.emploe).subscribe(()=>{
      this.goBack();
    })
  }
  goBack(){
    this.router.navigate(['/home'])
  }
}
