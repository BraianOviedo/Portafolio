import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  
  enableToggle:boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

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
}
