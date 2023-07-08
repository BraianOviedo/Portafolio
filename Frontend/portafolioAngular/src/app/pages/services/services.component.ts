import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      title: 'Basic Plan',
      price: '$9.99/month',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Pro Plan',
      price: '$19.99/month',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Premium Plan',
      price: '$29.99/month',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  // constructor(private apiService: ApiService) {}

  // ngOnInit(): void {
  //   this.apiService.getServices().subscribe((services: Service[]) => {
  //     this.services = services;
  //   });
  // }
}
