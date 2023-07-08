import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  services: any[] = [];

  // constructor(private apiService: ApiService) { }

  // ngOnInit() {
  //   // Fetch services from backend API using ApiService
  //   this.apiService.getServices().subscribe((response: any[]) => {
  //     this.services = response;
  //   });
  // }
}
