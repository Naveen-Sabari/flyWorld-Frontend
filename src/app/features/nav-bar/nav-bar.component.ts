import { Component ,HostListener} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
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