import { Component,HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

menuOpen = false;

  toggleMenu = () => this.menuOpen = !this.menuOpen;

  dropdownOpen = false;

toggleDropdown(event: Event) {
  event.stopPropagation();
  this.dropdownOpen = !this.dropdownOpen;
}

@HostListener('document:click')
closeDropdown() {
  this.dropdownOpen = false;
}

}
