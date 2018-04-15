import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { EmployeesComponent }   from './employees/employees.component';
import { ApplicantsComponent }   from './applicants/applicants.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ApplicationComponent } from './application/application.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'employees',
        component: EmployeesComponent
    },
    {
        path: 'applicants',
        component: ApplicantsComponent
    },
    {
        path: 'analytics',
        component: AnalyticsComponent
    },
    {
        path: 'application',
        component: ApplicationComponent
    },
    {
        path: 'add-employee',
        component: AddEmployeeComponent
    }
]
