import { Component, OnInit } from '@angular/core';

interface RegistrationForm {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  repeatPassword: string;
  privacyTerms: boolean;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form : RegistrationForm = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
    privacyTerms: false,
  }

  constructor() { }

  ngOnInit() {
  }

}
