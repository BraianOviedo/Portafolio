import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  form!:FormGroup;
  registerError: string | undefined;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private router: Router){}

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

    this.authService.register(this.form.value).subscribe(
      (response) => {
        // Handle successful registration
        this.registerError = undefined; // Reset registration error if any
        // Optionally, you can redirect the user to the login page after successful registration
        console.log('Registration successful!', response);
        this.router.navigateByUrl('/login');
      },
      (error) => {
        // Handle registration error
        console.error('Registration failed!', error);
        alert('Registration failed!');
        this.registerError = 'Registration failed'; // Show a simple error message to the user
      }
    );
  }
}
