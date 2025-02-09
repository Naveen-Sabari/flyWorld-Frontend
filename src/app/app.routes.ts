import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AppComponent } from './app.component';
import { BookAppointmentComponent } from './features/book-appointment/book-appointment.component';
import { AboutPageComponent } from './features/about-page/about-page.component';
import { ContactComponent } from './features/contact/contact.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { StudentVisaComponent } from './Pages/student-visa/student-visa.component';
import { TouristVisaComponent } from './Pages/tourist-visa/tourist-visa.component';
import { BusinessVisaComponent } from './Pages/business-visa/business-visa.component';
import { WorkVisaComponent } from './Pages/work-visa/work-visa.component';
import { ResidentVisaComponent } from './Pages/resident-visa/resident-visa.component';
import { StartupComponent } from './Pages/startup/startup.component';
import { FamilyVisaComponent } from './Pages/family-visa/family-visa.component';
import { StudyComponent } from './Pages/study/study.component';
import { InvestorComponent } from './Pages/investor/investor.component';

export const routes: Routes = [

        {path:'',component:HomeComponent},
        { path: 'booking', component: BookAppointmentComponent},
        {path:'about',component:AboutUsComponent},
        {path:'contact',component:ContactComponent},
        {path:'student',component:StudentVisaComponent},
        {path:'visitor',component:TouristVisaComponent},
        {path:'business',component:BusinessVisaComponent},
        {path:'work',component:WorkVisaComponent},
        {path:'permanent',component:ResidentVisaComponent},
        {path:'startup',component:StartupComponent},
        {path:'family',component:FamilyVisaComponent},
        {path:'study',component:StudyComponent},
        {path:'investor',component:InvestorComponent}
    
      
];
