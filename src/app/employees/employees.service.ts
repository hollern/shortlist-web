import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from './employee';

// @Injectable()
// export class EmployeesService {
//   private personsUrl = 'http://localhost:5000/api/persons';

//   constructor(private _http: HttpClient){}

//   getEmployees(): Observable<IEmployee[]>{
//     return this._http.get<IEmployee[]>(this.personsUrl);
//   }
// }

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class EmployeesService {
  constructor(private http:HttpClient){}

  getEmployees(){
    return this.http.get('http://localhost:5000/api/persons');
  }
}