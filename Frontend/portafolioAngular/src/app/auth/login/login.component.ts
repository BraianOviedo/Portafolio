// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form!: FormGroup;
  loginError: string | undefined;


  constructor(
    private authService:AuthService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  get f(){
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const { email, password } = this.form.value;

      this.authService.login(email, password).subscribe(
        (response) => {
          const jwtToken = response.jwt; // Assuming the API returns a field named 'jwt' for the token
          localStorage.setItem('jwtToken', jwtToken); // Save the token in local storage
          this.loginError = undefined; // Reset login error if any
          console.log(jwtToken);
          this.router.navigateByUrl('/');
        },
        (error) => {
          this.loginError = 'Invalid email or password'; // Show a simple error message to the user
        }
      );
    }
  }
}
