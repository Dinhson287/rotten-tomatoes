import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = "";
  password = "";
  errorMsg = "";

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "Username is required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg = "";
      this.auth.login(this.username, this.password).subscribe(
        (res)=> {
          if(res === 200){
            this.router.navigate(['home']);
          }
          if(res = 403){
            this.errorMsg = "Invalid Credentials";
          }
        },
        (error)=>{
          this.errorMsg ="An error occurred"
        }
      );

    }
  }
}
