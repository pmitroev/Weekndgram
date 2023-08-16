import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  email: string = '';
  password: string = '';
  login(): void {
    if (this.email == '') {
      alert('Please enter an email');
      return;
    }

    if (this.password == '') {
      alert('Please enter a password');
      return;
    }

    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
