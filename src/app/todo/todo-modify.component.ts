import { Component, OnInit } from '@angular/core';
import { TodoService } from "../todo.service";
import { TodoItem } from "./todo-item";
import { map, Observable, Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-todo-modify',
  templateUrl: './todo-modify.component.html'
})
export class TodoModifyComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private todoService: TodoService,
              private formBuilder: FormBuilder
  ) { }

  todoForm = this.formBuilder.group({
    id: '',
    description: '',
    date: '',
    finished: ''
  });

  id!: number;
  todo$!: Observable<TodoItem>;
  router$!: Subscription;

  ngOnInit(): void {
    this.router$ = this.route.queryParams.subscribe((params) => {
      this.todo$ = this.todoService.getTodo(params['id'])
        .pipe(map(response => {
          this.id = response.id;
          this.todoForm.patchValue(response);
          return response;
        }))
    })

  }

  onSubmit() {
    if(confirm('저장하시겠습니까?')) {
      this.todoService.modifyTodo(this.id, this.todoForm.value)
        .subscribe({
          next: () => {
            alert('저장되었습니다.');
            this.moveToDetail();
          }
        })
    }
  }

  moveToDetail() {
    this.router.navigate(['todo/detail'], { queryParams: {id: this.id} });
  }
}
