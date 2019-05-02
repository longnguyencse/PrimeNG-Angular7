import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  constructor(private http: HttpClient) {
  }

  // login(username: string, password: string) {
  //   console.log(username + password);
  //   this.http.post('/api/login', {username, password})
  //     .pipe(map(user => {
  //       console.log(user);
  //     }))
  // }
}
