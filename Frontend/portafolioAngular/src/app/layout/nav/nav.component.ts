import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  
  enableToggle:boolean = false;

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef,
    private authService:AuthService,
    private router: Router
    ) {}

  ngOnInit() {
    const menuItems = this.el.nativeElement.querySelectorAll('.menu-list li');

    menuItems.forEach((item: HTMLElement) =>
      this.renderer.listen(item, 'click', () => {
        this.activeLink(item);
      })
    );
  }

  activeLink(selectedItem: HTMLElement) {
    const menuItems = this.el.nativeElement.querySelectorAll('.menu-list li');

    menuItems.forEach((item: HTMLElement) => {
      this.renderer.removeClass(item, 'active');
    });

    this.renderer.addClass(selectedItem, 'active');
  }

  activeToggle(){
    this.enableToggle = !this.enableToggle;
  }

  onLogout(): void {
    this.authService.logout().subscribe(
      (response) => {
        // Handle successful logout
        localStorage.removeItem('jwtToken'); // Remove the token from local storage
        this.router.navigateByUrl('/');
        // Optionally, you can navigate to the login page or any other page after successful logout
      },
      (error) => {
        // Handle logout error
        // You can show an error message or perform other actions as needed
      }
    );
  }
}
