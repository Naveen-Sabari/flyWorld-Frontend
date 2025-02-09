import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-page',
  imports: [CommonModule,RouterModule],
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.css'
})
export class StudentPageComponent {

  countries = [
    { name: '🇺🇸 USA', image: 'assets/countries/usa.png', link: '/study-usa' },
    { name: '🇨🇦 Canada', image: 'assets/countries/canada.png', link: '/study-canada' },
    { name: '🇬🇧 UK', image: 'assets/countries/uk.png', link: '/study-uk' },
    { name: '🇦🇺 Australia', image: 'assets/countries/australia.png', link: '/study-australia' },
    { name: '🇩🇪 Germany', image: 'assets/countries/germany.png', link: '/study-germany' },
    { name: '🇫🇷 France', image: 'assets/countries/france.png', link: '/study-france' },
    { name: '🇮🇹 Italy', image: 'assets/countries/italy.png', link: '/study-italy' },
    { name: '🇳🇿 New Zealand', image: 'assets/countries/newzealand.png', link: '/study-newzealand' },
    { name: '🇸🇬 Singapore', image: 'assets/countries/singapore.png', link: '/study-singapore' },
    { name: '🇪🇸 Spain', image: 'assets/countries/spain.png', link: '/study-spain' },
    { name: '🇨🇭 Switzerland', image: 'assets/countries/switzerland.png', link: '/study-switzerland' },
    { name: '🇳🇱 Netherlands', image: 'assets/countries/netherlands.png', link: '/study-netherlands' }
  ];

  navigateToCountry(link: string) {
    window.location.href = link;
  }
}

