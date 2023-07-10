import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    ServicesComponent,
    DashboardComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  exports: [
    HomeComponent,
    ProjectsComponent,
    ServicesComponent,
    DashboardComponent,
    ContactComponent
  ]
})
export class PagesModule { }
