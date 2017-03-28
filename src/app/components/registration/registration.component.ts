import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { validateEmail } from '../../validators/myemail.validator'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", validateEmail],
      privacyTerms: [false, Validators.requiredTrue],
      passwords: this.fb.group({
        password: ["", Validators.required],
        repeatedPassword: ["", Validators.required],
      })
    });
  }

  constructor(private fb: FormBuilder) { }

  onSubmit($event) {
    console.log(this.registrationForm.value);
  }
}
