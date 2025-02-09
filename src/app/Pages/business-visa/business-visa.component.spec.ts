import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessVisaComponent } from './business-visa.component';

describe('BusinessVisaComponent', () => {
  let component: BusinessVisaComponent;
  let fixture: ComponentFixture<BusinessVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessVisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
