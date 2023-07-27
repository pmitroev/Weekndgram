import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    constructor(private auth: AuthService) { }
    ngOnInit(): void {
        // this.auth.login('preslav@gmail.com', '123456');
    }
    
    email : string = '';
    password : string = '';
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
