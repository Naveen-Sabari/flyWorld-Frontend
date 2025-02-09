import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,NavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentIndex: number = 0; 
  totalImages: number = 3; 
  autoSlideInterval: any;

  ngOnInit(): void {
  
    this.startAutoSlide();
  }

  ngOnDestroy(): void {

    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }


  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 30000); 
  }


  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
  }


  scrollToBooking() {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  }
  
}