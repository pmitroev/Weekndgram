import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    constructor(private router: Router, private auth: AuthService) { }

    
    logout() {
        this.auth.logout();
    }


    get isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }
}
