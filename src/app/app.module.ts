import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { TodoDetailComponent } from "./todo/todo-detail.component";
import { TodoModifyComponent } from "./todo/todo-modify.component";
import { COMPOSITION_BUFFER_MODE, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HelloComponent } from "./hello/hello.component";
import { CustomerComponent } from "./customer/customer.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDetailComponent,
    TodoModifyComponent,
    HelloComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: COMPOSITION_BUFFER_MODE,
      useValue: false
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
