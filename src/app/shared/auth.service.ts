import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  isLogged: boolean = false;

  //login method
  login(email: string, password: string): void {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      (userCredential) => {
        localStorage.setItem('token', `${userCredential.user?.uid}`);
        this.isLogged = true;
        this.router.navigate(['/']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }

  //register method
  register(email: string, password: string): void {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      () => {
        this.router.navigate(['/login']);
        alert('Registration successfull!');
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/register']);
      }
    );
  }

  //logout method
  logout(): void {
    this.fireAuth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
        this.isLogged = false;
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
