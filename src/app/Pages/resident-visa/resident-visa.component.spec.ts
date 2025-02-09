import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentVisaComponent } from './resident-visa.component';

describe('ResidentVisaComponent', () => {
  let component: ResidentVisaComponent;
  let fixture: ComponentFixture<ResidentVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentVisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
