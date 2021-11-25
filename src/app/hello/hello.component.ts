import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'hello',
  template: `
    이름 : <input [(ngModel)]="name">
    <p>안녕하세요, {{ name }}님 !!!</p>
  `
})
export class HelloComponent {
  name: String = "";
  form!: FormGroup;

  constructor() {
  }

}
