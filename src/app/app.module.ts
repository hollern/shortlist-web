import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { EmployeesComponent }   from './employees/employees.component';
import { ApplicantsComponent }   from './applicants/applicants.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesService } from './employees/employees.service';
import { GlobalVarsComponent } from './global-vars/global-vars.component';
import { HttpModule} from '@angular/http';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ApplicationComponent } from './application/application.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeesComponent,
    ApplicantsComponent,
    AssessmentsComponent,
    EmployeeDetailComponent,
    GlobalVarsComponent,
    AnalyticsComponent,
    AddEmployeeComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
