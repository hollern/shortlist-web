import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employees/employee';
import { EmployeesService } from '../employees/employees.service';
import { Observable } from 'rxjs/Observable';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-employees',
    templateUrl: 'employees.component.html'
})

export class EmployeesComponent implements OnInit{
    public tableData1: TableData;

    constructor(){}

    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'EmpID', 'Name', 'Role', 'Department', 'Salary', 'Date Joined'],
            dataRows: [
                ['100001', 'Person 1', 'Manager', 'Sales', '$96,738', '2017-01-15'],
                ['100002', 'Person 2', 'Director', 'Internal Audit', '$103,789', '2003-05-01'],
                ['100003', 'Person 3', 'HR Generalist', 'Human Resources', '$56,142', '2004-12-10'],
                ['100004', 'Person 4', 'Accountant', 'Corporate Finance', '$68,735', '2014-04-25'],
                ['100005', 'Person 5', 'Director', 'Operations', '$163,542', '2010-01-01'],
                ['100006', 'Person 6', 'Analyst', 'Operations', '$78,615', '2007-12-31']
            ]
        };
    }
}

// ACCTMIS 3610 method
// export class EmployeesComponent implements OnInit {
//     employees: IEmployee[] = [];

//     constructor(private _employeesService: EmployeesService) { }

//     ngOnInit() {
//         this._employeesService.getEmployees()
//             .subscribe(employees => {
//                 this.employees = employees;
//             },
//                 error => console.log(error)
//             );
//     }
// }

// Other method
// export class EmployeesComponent implements OnInit {
//     public employees;
    
//     constructor(private _employeesService: EmployeesService){}

//     ngOnInit(){
//         this.getEmployees();
//     }

//     getEmployees(){
//         this._employeesService.getEmployees().subscribe(
//             data => {this.employees = data},
//             err => console.log(err),
//             () => console.log('Done loading')
//         );
//     }
// }