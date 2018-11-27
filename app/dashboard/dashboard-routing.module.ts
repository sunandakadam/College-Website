import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComposeComponent } from './mail-box/compose/compose.component';
import { ReadMailComponent } from './mail-box/read-mail/read-mail.component';
import { CalenderComponent } from './calender/calender.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { TablesComponent } from './tables/tables.component';
import { SimpleTablesComponent } from './tables/simple-tables/simple-tables.component';
import { DataTablesComponent } from './tables/data-tables/data-tables.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { DashboardComponent } from './dashboard.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, children: [
            { path: "", component: LoginComponent },
            { path: "Calender", component: CalenderComponent },
            { path: "MailBox", component: MailBoxComponent },
            { path: "compose", component: ComposeComponent },
            { path: "Read", component: ReadMailComponent },
            { path: "tables", component: TablesComponent },
            { path: "simpleTables", component: SimpleTablesComponent },
            { path: "dataTables", component: DataTablesComponent },
            { path: "register", component: RegisterComponent },
            { path: "dash-panel", component: DashboardPanelComponent },
            {path : 'department', component: DepartmentComponent}
          ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
