import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailComponent } from "./todo/todo-detail.component";
import { TodoModifyComponent } from "./todo/todo-modify.component";
import { TodoComponent } from "./todo/todo.component";

const routes: Routes = [
  { path: '', redirectTo: 'todo/list', pathMatch: 'full' },
  { path: 'todo/list', component: TodoComponent },
  { path: 'todo/detail', component: TodoDetailComponent },
  { path: 'todo/modify', component: TodoModifyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
