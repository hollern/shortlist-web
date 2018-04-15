import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from './employee';
import { rootUrl } from '../global-vars/vars';

// @Injectable()
// export class EmployeesService {

//   private personsUrl = rootUrl + 'api/persons';
//   // private employeesUrl = rootUrl + 'api/employees';
//   private employeesUrl = 'http://localhost:5000/api/employees';

//   constructor( private _http: HttpClient) { }

//   getEmployees(): Observable<IEmployee[]>{
//     return this._http.get<IEmployee[]>(this.employeesUrl);
//   }
// }

@Injectable()
export class EmployeesService {
  private employeesUrl = 'http://localhost:5000/api/employees';

  constructor( private _http: HttpClient ) { }

  getEmployees(): Observable<IEmployee[]> {
    return this._http.get<IEmployee[]>(this.employeesUrl);
  }
}

// @Injectable()
// export class EmployeesService {
//   private employeesUrl: string = 'http://localhost:5000/api/employees';

//   constructor(private _http: Http){}

//   getEmployees(){
//     return this._http.get(this.employeesUrl)
//       .map((response:Response) => response.json());
//   }
// }