import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { TopNavComponent } from './top-nav/top-nav.component';

import { BoxedComponent } from './top-nav/boxed/boxed.component';
import { FixedComponent } from './top-nav/fixed/fixed.component';
import { CollapsedSidebarComponent } from './top-nav/collapsed-sidebar/collapsed-sidebar.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { AllService } from './all.service'
const r: Routes = [
  { path: "", redirectTo:'/dashboard' ,pathMatch: 'full'},
  { path: "dashboard", component: DashboardComponent },
  { path: "Top-nav", component: TopNavComponent },
  { path: "boxed", component: BoxedComponent },
  { path: "fixed", component: FixedComponent },
  { path: "collapse", component: CollapsedSidebarComponent },


];



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    TopNavComponent,
    BoxedComponent,
    FixedComponent,
    CollapsedSidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(r),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DashboardModule,
    DashboardRoutingModule
  ],
  providers: [AllService],
  bootstrap: [AppComponent]
})
export class AppModule { }
