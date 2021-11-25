import { Component, OnInit } from '@angular/core';
import { TodoService } from "../todo.service";
import { TodoItem } from "./todo-item";
import { Observable } from "rxjs";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  todos$!: Observable<TodoItem[]>;

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos()
  }

}
