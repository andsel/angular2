import { Router } from '@angular/router';
import { LoginCredentials } from './../../models/loginCredentials';
import { UserService } from './../../services/user.service';
import { AuthEvent } from './../../models/authEvent';
import { Component } from '@angular/core';

@Component({
    selector: "login",
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginResult: AuthEvent = {
        status: null,
        eventType: null,
        message: null
    };

    constructor(
        private userService: UserService,    //singleton late binding
        private router: Router
    ) { }

    credentials: LoginCredentials = {
        username: "",
        password: ""
    }

    onSubmit(): void {
        this.loginResult = {
            status: null,
            eventType: null,
            message: null
        };
        this.userService.login(this.credentials).subscribe((loginResult) => {
            this.loginResult = loginResult;
            if (this.loginResult.status === "ok" && loginResult.eventType === "login") {
                this.router.navigate(["/dashboard"]);
            }
            //console.log("Login fatto ", loginResult);
        })
        //nel mondo reale chiamo un service
        // console.log("Faccio il login ", this.credentials);
    }
} 