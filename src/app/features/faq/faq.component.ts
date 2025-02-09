import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  faqs = [

    { question: "What are the requirements for an Australian student visa?", answer: "You need a valid visa, proof of funds, and an admission letter from an Australian institution.", open: false },
    { question: "Can I work while studying in Australia?", answer: "Yes, student visa holders can work up to 48 hours per fortnight.", open: false },

    { question: "What types of work visas are available for Australia?", answer: "Common work visas include Temporary Skill Shortage (TSS) visa, Employer Nomination Scheme (ENS) visa, and Skilled Independent visa.", open: false },
   
    { question: "What is the process for getting Australian Permanent Residency?", answer: "PR can be obtained through skilled migration, employer sponsorship, family sponsorship, or investment visas.", open: false },

    { question: "How long can I stay in Australia on a tourist visa?", answer: "Tourist visas usually allow stays of 3, 6, or 12 months.", open: false },
  
    { question: "What are the requirements for an Australian business visa?", answer: "You need a valid business plan, proof of funds, and an investment commitment in Australia.", open: false },

  ];


  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
