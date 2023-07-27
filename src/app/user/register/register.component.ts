import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    email : string = '';
    password : string = '';
    
    constructor(private auth: AuthService) { }

    ngOnInit(): void {
        // this.auth.register('preslav@gmail.com', '123456');
    }

    register(): void {
        if (this.email == '') {
            alert('Please enter an email');
            return;
        }

        if (this.password == '') {
            alert('Please enter a password');
            return;
        }

        this.auth.register(this.email, this.password);
        this.email = '';
        this.password = '';
    }
}
