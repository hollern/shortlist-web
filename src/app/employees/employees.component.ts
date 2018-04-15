import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employees/employee';
import { EmployeesService } from '../employees/employees.service';

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
                ['100001', 'Dakota Rice', 'Sales Manager', 'Sales', '$36,738', '2017-01-15'],
                ['100002', 'Minerva Hopper', 'Director', 'Internal Audit', '$103,789', '2003-05-01'],
                ['100003', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142', 'Test'],
                ['100004', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735', 'Test'],
                ['100005', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542', 'Test'],
                ['100006', 'Mason Porter', 'Chile', 'Gloucester', '$78,615', 'Test']
            ]
        };
    }
}

// export class EmployeesComponent implements OnInit {
//     headerRow = [];
//     employees: IEmployee[] = [];

//     constructor(private _employeesService: EmployeesService) { }

//     ngOnInit(){
//         this.headerRow = [ 'ID', 'Name', 'Role', 'Date Joined', 'Date Left'];

//         this._employeesService.getEmployees()
//             .subscribe(employees => {
//                 this.employees = employees;
//             },
//                 error => console.log(error)
//             );
//     }
// }