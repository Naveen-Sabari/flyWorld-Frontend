import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
 

  reviews = [
    { name: 'priya Iyer', date: '2024-07-24', profileImage: 'assets/images/user1.avif', text: 'Excellent service. Thank you team FLYWORLD for your assistance. 👍' },
    { name: 'Rahul Sharma', date: '2024-07-23', profileImage: 'assets/images/user2.avif', text: 'Special thanks to Flyworld for helping me get permanent residency in Australia.' },
    { name: 'Aisha Khan', date: '2024-07-22', profileImage: 'assets/images/user 3.avif', text: 'Excellent service as always, exceeds expectations.' },
    
    { name: 'David Lee', date: '2024-07-16', profileImage: 'assets/images/user9.avif', text: 'Superb experience Got my visa approval faster than expected. Thanks, Flyworld!' },
    { name: 'Fatima Ahmed', date: '2024-07-15', profileImage: 'assets/images/user10.jpg', text: 'Flyworld made my dream of studying abroad a reality. Highly recommended' },
    { name: 'Rohan Patel', date: '2024-07-21', profileImage: 'assets/images/user4.avif', text: 'Highly recommend Flyworld for immigration assistance!' },
    // { name: 'Arjun Verma', date: '2024-07-20', profileImage: 'assets/images/user5.avif', text: 'Fast and reliable service. Thank you, Flyworld' },
    // { name: 'Kunal Desai', date: '2024-07-19', profileImage: 'assets/images/user 6.jpg', text: 'The best immigration consultancy I have ever experienced Professional and helpful.' },
    { name: 'Neha Bhatia', date: '2024-07-18', profileImage: 'assets/images/user7.avif', text: 'Great service My visa process was smooth, and I was well-guided throughout.' },
    { name: 'Elena Petrova', date: '2024-07-17', profileImage: 'assets/images/user8.avif', text: 'Highly efficient team, they made my visa application stress-free and easy.' },
    { name: 'David Lee', date: '2024-07-16', profileImage: 'assets/images/user9.avif', text: 'Superb experience Got my visa approval faster than expected. Thanks, Flyworld!' },
    { name: 'Fatima Ahmed', date: '2024-07-15', profileImage: 'assets/images/user10.jpg', text: 'Flyworld made my dream of studying abroad a reality. Highly recommended' },
    { name: 'Arjun Verma', date: '2024-07-20', profileImage: 'assets/images/user5.avif', text: 'Fast and reliable service. Thank you, Flyworld' },
    { name: 'Kunal Desai', date: '2024-07-19', profileImage: 'assets/images/user 6.jpg', text: 'The best immigration consultancy I have ever experienced Professional and helpful.' },
  ];
  
  
    stars = new Array(5);
    translateValue = 0;
    interval: any;
  
    ngOnInit() {
      this.autoSlide();
    }
  
    autoSlide() {
      this.interval = setInterval(() => {
        this.translateValue -= 100;
        if (this.translateValue < -200) {
          this.translateValue = 0;
        }
      }, 4000);
    }
  }
  