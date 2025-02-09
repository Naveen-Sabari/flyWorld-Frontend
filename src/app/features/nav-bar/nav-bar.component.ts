import { CommonModule } from '@angular/common';
import { Component ,HostListener} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
 


    menuOpen = false;
    activeDropdown: string | null = null;
  
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  
    toggleDropdown(dropdown: string, event: Event) {
      event.stopPropagation();
      if (this.activeDropdown === dropdown) {
        this.activeDropdown = null;
      } else {
        this.activeDropdown = dropdown;
      }
    }
  
    @HostListener('document:click', ['$event'])
    closeDropdown(event: Event) {
      if (!(event.target as HTMLElement).closest('.dropdown')) {
        this.activeDropdown = null;
      }
    }
  }
  