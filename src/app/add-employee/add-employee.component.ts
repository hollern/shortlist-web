import { Component, OnInit } from '@angular/core';
import { AddEmployeeService } from './add-employee.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

// export class AddEmployeeComponent implements OnInit {
export class AddEmployeeComponent {
  // public employees;

  // constructor(private _addEmployeeService: AddEmployeeService) { }

  // ngOnInit() {
  //   this.getEmployees();
  // }

  // getEmployees(){
  //   this._addEmployeeService.getEmployees().subscribe(
  //       data => {this.employees = data},
  //       err => console.log(err),
  //       () => console.log('Done loading')
  //   );
  // }
  
  // createEmployee(name){
  //   let employee = {name: name};
  //   this._addEmployeeService.createEmployee(employee).subscribe(
  //     data => {
  //       this.getEmployees();
  //       return true;
  //     },
  //       error => {
  //         console.error("Error saving employee");
  //         return Observable.throw(error);
  //       }
  //   );
  // }

}
