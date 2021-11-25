import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user(): Observable<User> {
    return new Observable( arg => {
      arg.next({id:1, name:'kakao'} as User);
      arg.complete();
    });
  }
}
