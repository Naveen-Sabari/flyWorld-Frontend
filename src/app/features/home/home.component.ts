import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from '../about-page/about-page.component';
import { StudentPageComponent } from '../student-page/student-page.component';
import { ServicesCoverageComponent } from '../services-coverage/services-coverage.component';
import { WhyChooseusComponent } from '../why-chooseus/why-chooseus.component';
import { FaqComponent } from '../faq/faq.component';
import { BookAppointmentComponent } from '../book-appointment/book-appointment.component';
import { ReviewsComponent } from '../reviews/reviews.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule,HeaderComponent,AboutPageComponent,StudentPageComponent,ServicesCoverageComponent,WhyChooseusComponent,FaqComponent,BookAppointmentComponent,ReviewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}