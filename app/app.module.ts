import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { DashboardPanelComponent } from './dashboard/dashboard-panel/dashboard-panel.component';
import { ComposeComponent } from './mail-box/compose/compose.component';
import { ReadMailComponent } from './mail-box/read-mail/read-mail.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { BoxedComponent } from './top-nav/boxed/boxed.component';
import { FixedComponent } from './top-nav/fixed/fixed.component';
import { CollapsedSidebarComponent } from './top-nav/collapsed-sidebar/collapsed-sidebar.component';
import { TablesComponent } from './tables/tables.component';
import { SimpleTablesComponent } from './tables/simple-tables/simple-tables.component';
import { DataTablesComponent } from './tables/data-tables/data-tables.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AllService} from './all.service'
import {HttpModule} from '@angular/http'

const r: Routes = [
  {path:"",component:LoginComponent},
  { path: "Calender", component: CalenderComponent },
  { path: "MailBox", component: MailBoxComponent },
  { path: "Top-nav", component: TopNavComponent },
  { path: "dash-panel", component: DashboardPanelComponent },
  {path:"dashboard",component:DashboardComponent},
  { path: "compose", component: ComposeComponent },
  { path: "Read", component: ReadMailComponent },
  { path: "boxed", component: BoxedComponent },
  { path: "fixed", component: FixedComponent },
  { path: "collapse", component: CollapsedSidebarComponent },
  { path: "tables", component: TablesComponent },
  { path: "simpleTables", component: SimpleTablesComponent },
  {path:"dataTables",component:DataTablesComponent},
  {path:"register",component:RegisterComponent}
  
];



@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    MailBoxComponent,
    DashboardComponent,
    HeaderComponent,
    TopNavComponent,
    DashboardPanelComponent,
    ComposeComponent,
    ReadMailComponent,
    BoxedComponent,
    FixedComponent,
    CollapsedSidebarComponent,
    TablesComponent,
    SimpleTablesComponent,
    DataTablesComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(r),
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AllService],
  bootstrap: [AppComponent]
})
export class AppModule { }
