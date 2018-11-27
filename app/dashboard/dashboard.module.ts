import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from 'ng-fullcalendar';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComposeComponent } from './mail-box/compose/compose.component';
import { ReadMailComponent } from './mail-box/read-mail/read-mail.component';
import { CalenderComponent } from './calender/calender.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { TablesComponent } from './tables/tables.component';
import { SimpleTablesComponent } from './tables/simple-tables/simple-tables.component';
import { DataTablesComponent } from './tables/data-tables/data-tables.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DepartmentComponent } from './department/department.component';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CalenderComponent,
    MailBoxComponent,
    ComposeComponent,
    ReadMailComponent,
    TablesComponent,
    SimpleTablesComponent,
    DataTablesComponent,
    LoginComponent,
    RegisterComponent,
    DepartmentComponent,
    DashboardPanelComponent,
  ]
})
export class DashboardModule { }
