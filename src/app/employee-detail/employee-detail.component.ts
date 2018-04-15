import { Component, OnInit, Input } from '@angular/core';
import { IEmployee } from '../employees/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() emp: IEmployee;
  
  constructor() { }

  ngOnInit() {
  }

}
