import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
  { path: "", redirectTo: "department", pathMatch: 'full' },
  {
    path: "department", component: DepartmentComponent, children: [
      { path: 'add', component: AddComponent },
      { path: 'edit/:id', component: AddComponent },
      { path: 'view/:id', component: ViewComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
