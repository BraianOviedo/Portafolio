// src/app/auth/account/account.component.ts

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  form!:FormGroup;
  
  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)], Validators.maxLength(30)],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator]],
      email: ['', [Validators.required, Validators.email]],
    }) as FormGroup;
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = this.form?.get('password')?.value;
    const confirmPassword = control.value;

    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }

    return null;
  };

  get Password(){
    return this.form.get("password")
  }

  get Password2(){
    return this.form.get("confirmPassword");
  }

  get Email(){
    return this.form.get("email")
  }

  get Username(){
    return this.form.get("username")
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    // Perform registration logic here
  }
}
