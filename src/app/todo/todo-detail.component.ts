import { Component, OnInit } from '@angular/core';
import { TodoService } from "../todo.service";
import { TodoItem } from "./todo-item";
import { Observable, Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html'
})
export class TodoDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  todo$!: Observable<TodoItem>;
  router$!: Subscription;

  ngOnInit(): void {
    this.router$ = this.route.queryParams.subscribe((params) => {
      this.todo$ = this.todoService.getTodo(params['id'])
    })
  }

}
