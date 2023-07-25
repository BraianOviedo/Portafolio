import { Component, OnInit } from '@angular/core';
import { Service } from '../services/services.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
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

  counterValue: number = 0;
  targetValue: number = 90;

  ngOnInit() {
    this.animateRating();
    this.startCounter();
  }

  animateRating() {
    const rating = document.getElementsByClassName('rating')[0];
    const blocks = document.getElementsByClassName('block');

    for (let i = 1; i < 100; i++) {
      rating.innerHTML += "<div class='block'></div>";
      blocks[i].setAttribute('style', `transform: rotate(${3.6 * i}deg); animation-delay: ${i / 40}s;`);
    }
  }

  startCounter() {
    const counter = document.querySelector('.counter');
    const target = counter?.getAttribute('data-target');
    if (counter && target) {
      const targetValue = +target;
      this.numberCounter(counter, targetValue);
    } else {
      console.error("Counter element or data-target attribute not found");
    }
  }

  numberCounter(counter: any, target: number) {
    const value = +counter.innerText;
    if (value < target) {
      this.counterValue = Math.ceil(value + 1);
      setTimeout(() => {
        this.numberCounter(counter, target);
      }, 25);
    }
  }

  // constructor(private apiService: ApiService) { }

  // ngOnInit() {
  //   // Fetch services from backend API using ApiService
  //   this.apiService.getServices().subscribe((response: any[]) => {
  //     this.services = response;
  //   });
  // }
}
