import { Component } from '@angular/core';
import { navbarItems } from './navbarItems/navbarItems';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // NAV LIST ITEMS:
  menuItems = navbarItems;
  // FONTAWESOME ICONS:
  faBars = faBars;
  faTimes = faTimes;
  // TOGGLE MENU OPEN:
  isOpen = false;
  toggleMenuOpen(){
    this.isOpen = !this.isOpen;
  }
}
