import { Injectable } from '@angular/core';
import { TodoItem } from "./todo/todo-item";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(`http://localhost:8080/todos`)
  }

  getTodo(id: number): Observable<TodoItem> {
    return this.http.get<TodoItem>(`http://localhost:8080/todos/${id}`)
  }

  modifyTodo(id: number, todoItem: TodoItem): Observable<void> {
    return this.http.put<void>(`http://localhost:8080/todos/${id}`, todoItem);
  }
}
