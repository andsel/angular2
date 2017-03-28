import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl("", Validators.required),
      lastname: new FormControl("", Validators.minLength(5)),
      phone: new FormControl("", Validators.maxLength(10)),
      email: new FormControl("", Validators.email),
      password: new FormControl(""),
      repeatedPassword: new FormControl(""),
      privacyTerms: new FormControl(true, Validators.requiredTrue),
    });
  }

  constructor() { 
  }

  onSubmit($event) {
    console.log(this.registrationForm.value);
  }
}
