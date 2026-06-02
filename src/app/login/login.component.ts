import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalComponent, SwalDirective } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(public route: Router, public loginService: LoginService) { }

  onSubmit() {
    const isLoginSuccessful = this.loginService.login(this.username, this.password);
    if (isLoginSuccessful) {
      this.routeToDashboard();
    } else {
      console.log('Invalid credentials');
      this.logout();
    }
  }

  routeToDashboard() {
    this.route.navigate(['']);
  }

  logout() {
    Swal.fire({
      icon: "error",
      title: "Something went wrong!",
      text: "Invalid username or password!"
    });
    this.loginService.logout();
  }

}
