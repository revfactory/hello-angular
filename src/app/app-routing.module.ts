import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailComponent } from "./todo/todo-detail.component";
import { TodoModifyComponent } from "./todo/todo-modify.component";
import { TodoComponent } from "./todo/todo.component";
import { AuthGuard } from "./jwt/auth.guard";
import { CustomerComponent } from "./customer/customer.component";

const routes: Routes = [
  { path: '', redirectTo: 'todo/list', pathMatch: 'full' },
  { path: 'todo/list', component: TodoComponent, canActivateChild: [AuthGuard]},
  { path: 'todo/detail', component: TodoDetailComponent },
  { path: 'todo/modify', component: TodoModifyComponent },
  { path: 'customer', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
