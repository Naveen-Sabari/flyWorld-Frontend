import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-book-appointment',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './book-appointment.component.html',
  styleUrl: './book-appointment.component.css'
})
export class BookAppointmentComponent {

  formData = {
    name: '',
    email: '',
    phone: '',
    residence: '',
    service: '',
    message: '',
    terms: false
  };

  successMessage: string = '';

  submitForm() {
    console.log('Form Submitted:', this.formData);
    this.successMessage = 'Your call will be arranged soon';
    
    
    this.formData = {
      name: '',
      email: '',
      phone: '',
      residence: '',
      service: '',
      message: '',
      terms: false
    };

  
    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }
}
