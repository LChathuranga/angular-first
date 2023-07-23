import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'first-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  emailCtrl = new FormControl("lahiru@gmail.com", [
    Validators.required,
    Validators.email,
  ]);
  passwordCtrl = new FormControl("lahiru1234", [Validators.required, Validators.minLength(3)]);

  loginFormGroup = new FormGroup({
    email: this.emailCtrl,
    password: this.passwordCtrl,
  });

  constructor(private router: Router) {}
  onLogin() {
    console.log(this.loginFormGroup.value);
    this.router.navigate(['admin']);
  }
}
