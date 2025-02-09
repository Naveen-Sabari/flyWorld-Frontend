import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-chooseus',
  imports: [CommonModule],
  templateUrl: './why-chooseus.component.html',
  styleUrl: './why-chooseus.component.css'
})
export class WhyChooseusComponent {

  services = [
    { title: 'Expert Consultants', description: 'Professional guidance for smooth migration.', icon: 'assets/images/consultants.jpg' },
    { title: 'Personalized Support', description: 'Tailored advice based on your needs.', icon: 'assets/images/support.avif' },
    { title: 'High Visa Success', description: 'Strong track record of visa approvals.', icon: 'assets/images/visa.jpg' },
    { title: 'Up-to-date Info', description: 'Stay updated with latest immigration rules.', icon: 'assets/images/upto.avif' },
    { title: 'Transparent Pricing', description: 'No hidden fees, clear pricing structure.', icon: 'assets/images/transport.jpg' },
    { title: 'Fast Processing', description: 'Quick and hassle-free visa applications.', icon: 'assets/images/fast.avif' },
    { title: 'Legal Assistance', description: 'Expert legal support for visa documentation.', icon: 'assets/images/legal.avif' },
    { title: 'Post-Arrival Support', description: 'Guidance after arrival for a smooth transition.', icon: 'assets/images/arrival.avif' },
  ];
  
}
