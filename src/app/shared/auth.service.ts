import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { getAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}
  
  //login method
  login(email: string, password: string): void {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      (userCredential) => {
        const user = userCredential.user?.uid;
        localStorage.setItem('token', 'true');
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
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
