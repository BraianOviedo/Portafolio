import { Component } from '@angular/core';
import { Service } from './services.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  activeCover:boolean = false;
  activeInfo:boolean = false;
  servicesInfo:Service[] = [];


  services: Service[] = [
    {
      title: 'Basic Website Plan',
      price: '$500',
      description: 'Develop a basic website using WordPress with essential features and functionalities.',
      deliverables: ['Installation and setup of WordPress CMS.', 'Customization of a pre-selected theme to match your branding.', 'Creation of up to 5 pages (Home, About Us, Services, Contact, Blog, etc.) with your provided content.', 'Integration of basic plugins for essential functionality (contact form, social media integration, etc.).', 'Optimization of website speed and performance.', 'Basic on-page SEO optimization (meta tags, URL structure, etc.).'],
      stack: ['WordPress', 'PHP', 'HTML', 'CSS'],
      timeline: '1-2 Weeks',
      additional: ['Responsive design for mobile and tablet devices: +$100', 'Integration of Google Analytics for website traffic tracking: +$50', 'Integration of a basic e-commerce functionality (up to 10 products): +$200', 'Integration of a blog section with content migration (up to 5 blog posts): +$100']
    },
    {
      title: 'E-commerce Website Plan',
      price: '$1500',
      description: 'Develop a fully functional e-commerce website using a custom design or a selected theme.',
      deliverables: ['Consultation to understand your e-commerce requirements and target audience.', 'Custom design or selection of a suitable theme.', 'Development of an intuitive and user-friendly interface.', 'Integration of e-commerce functionalities such as product catalog, shopping cart, payment gateway, order management, etc.', 'Integration of a secure payment gateway (e.g., PayPal, Stripe) for online transactions.', 'Responsive design for seamless user experience across devices.', 'On-page SEO optimization for product pages.', 'Basic training on managing the e-commerce platform.'],
      stack: ['WordPress', 'WooCommerce', 'PHP', 'HTML', 'CSS', 'JavaScript'],
      timeline: '3-4 Weeks',
      additional: ['Integration of advanced shipping options: +$200', 'Integration of additional payment gateways: +$100 per gateway', 'Integration of customer reviews and ratings: +$100', 'Customization of product filtering and sorting options: +$150']
    },
    {
      title: 'Custom Web Application Plan',
      price: 'Starting from $3000',
      description: 'Develop a custom web application tailored to your specific requirements and functionalities.',
      deliverables: ['Detailed consultation and requirement gathering to understand your specific needs.', 'Custom design and development of the web application.', 'Integration of the required technologies and frameworks based on project specifications (e.g., Angular, Django, MySQL Server).', 'Implementation of user authentication and authorization mechanisms.', 'Implementation of desired features such as data management, user interactions, API integrations, etc.', 'Responsive design for optimal user experience across devices.', 'Thorough testing and bug fixing.'],
      stack: ['Angular', 'Django', 'MySQL Server', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python'],
      timeline: 'Based on project complexity and requirements.',
      additional: ['Integration of third-party APIs: Price based on API complexity.', 'Implementation of advanced security measures: Price based on security requirements.', 'Scalability and performance optimization: Price based on project scope.']
    }
  ];

   // muestra la información agregando el servicio a infoServices
  showInfo(info:Service){
    this.servicesInfo.push(info);
    this.activeInfo = !this.activeInfo;
    this.activeCover = !this.activeCover;
  }
  //Cierra la información y elimina el services de infoServices
  toggleInfo(){
    this.servicesInfo.splice(0);
    this.activeInfo = !this.activeInfo;
    this.activeCover = !this.activeCover;
    console.log(this.activeInfo)
  }

  // constructor(private apiService: ApiService) {}

  // ngOnInit(): void {
  //   this.apiService.getServices().subscribe((services: Service[]) => {
  //     this.services = services;
  //   });
  // }
}
