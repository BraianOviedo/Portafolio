import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
