import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  enableToggle:boolean = false;


  activeToggle(){
    this.enableToggle = !this.enableToggle;
  }
}
