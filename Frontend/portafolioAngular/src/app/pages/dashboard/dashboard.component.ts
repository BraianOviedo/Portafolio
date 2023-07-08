import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projects: any[] = []; // Array to store projects
  services: any[] = []; // Array to store services

  constructor() { }

  ngOnInit(): void {
    // Fetch projects and services from the backend API and populate the arrays
    this.fetchProjects();
    this.fetchServices();
  }

  fetchProjects(): void {
    // Make an API request to fetch projects
    // Update the 'projects' array with the received data
    // Example:
    // this.projects = apiService.getProjects();
  }

  fetchServices(): void {
    // Make an API request to fetch services
    // Update the 'services' array with the received data
    // Example:
    // this.services = apiService.getServices();
  }

  editProject(project: any): void {
    // Logic to edit a project
    // Example:
    // apiService.editProject(project);
  }

  deleteProject(project: any): void {
    // Logic to delete a project
    // Example:
    // apiService.deleteProject(project);
  }

  editService(service: any): void {
    // Logic to edit a service
    // Example:
    // apiService.editService(service);
  }

  deleteService(service: any): void {
    // Logic to delete a service
    // Example:
    // apiService.deleteService(service);
  }
  
}

