import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from '../pages/projects/projects.component';
import { HomeComponent } from '../pages/home/home.component';
import { ServicesComponent } from '../pages/services/services.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AccountComponent } from '../auth/account/account.component';
import { RegisterComponent } from '../auth/register/register.component';
import { LoginComponent } from '../auth/login/login.component';
import { AppRoutingModule } from '../app-routing.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'account', component: AccountComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]
})
export class LayoutModule { 
}
