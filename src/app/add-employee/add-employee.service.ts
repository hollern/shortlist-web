import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// }

@Injectable()
export class AddEmployeeService {

  // constructor(private http:HttpClient) { }

  // getEmployees(){
  //   return this.http.get('http://localhost:5000/api/persons');
  // }

  // createEmployee(employee){
  //   let body = JSON.stringify(employee);
  //   return this.http.post('http://localhost:5000/api/persons', body, httpOptions);
  // }

}
