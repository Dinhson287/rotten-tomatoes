import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Input()
  userAccount: any;

  constructor(private router: Router, private http: HttpClient) {}

  login(username: string, password: string): Observable<number> {
    return this.http.get('http://localhost:4200/assets/data/account.json').pipe(
      map((account: any) => {
        this.userAccount = account;
        for (let i = 0; i < this.userAccount.length; i++) {
          if (username === this.userAccount[i].uname) {
            if (password === this.userAccount[i].pword) {
              return 200;
            } else {
              return 403;
            }
          }
        }
        return 403;
      })
    );
  }

  logout() {
    this.router.navigate(['login']);
  }
}
